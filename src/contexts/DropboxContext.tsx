import * as Dropbox from 'dropbox';
import { createContext, useCallback, useMemo } from 'react';
import { getFolderNames } from '../util/getFolderNames';
import { ISku } from '../types';
import * as fs from 'graceful-fs';
import { promisify } from 'util';

export type IDropboxContext = {
    client: Dropbox.Dropbox;
    removeAttachment: (path: string) => Promise<Dropbox.DropboxResponse<Dropbox.files.DeleteResult>>;
    uploadAttachment: (
        file: File,
        sku: ISku
    ) => Promise<{
        tinyURLLink: string;
        dropboxSharedLink: string;
    }>;
    getPath: (file: File, sku: ISku) => (root?: string) => string;
};

export const DropboxContext = createContext<IDropboxContext | undefined>(undefined);

const accessToken = process.env.DROPBOX_AUTH_TOKEN;
const FILESYSTEM_PRODUCTS = process.env.FILESYSTEM_PRODUCTS;
const FILESYSTEM_ROOT = process.env.FILESYSTEM_ROOT;
const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;
const MAX_BLOB = 12 * 1024 * 1024;

// const raw = JSON.stringify({
//     "url": "https://www.dropbox.com/scl/fi/hwg8vtt2vot7ik7wtfx5h/300ac9fd47f39ad6131af720d56f639a.mp4?rlkey=n0pktldq7em77zuuiy06k97qg&dl=0",
//     "domain": "tinyurl.com",
//     "description": "string"
// });

const requestOptions: (url: string) => RequestInit = (url: string) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${process.env.TINYURL_API_TOKEN}`);
    return {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            url,
            domain: 'tinyurl.com',
            description: 'string'
        }),
        redirect: 'follow'
    };
};

export async function runTinyURL(url: string) {
    const options = requestOptions(url);
    const response = await fetch('https://api.tinyurl.com/create', options);
    const body: { data: { url: string } } = await response.json();
    return body.data.url;
}
function getBaseName(file: string) {
    if (file.includes('/') || file.includes('\\')) {
        return file.split(/[/\\]/).reverse()[0];
    }
    return file;
}

export function useProvideDropboxContext(): IDropboxContext {
    const client = useMemo(() => new Dropbox.Dropbox({ accessToken }), []);
    const removeFile = useCallback(
        (path: string) => {
            return client.filesDeleteV2({ path });
        },
        [client]
    );
    const getSharedLink = useCallback(
        (path: string) => {
            return client
                .sharingCreateSharedLinkWithSettings({
                    path,
                    settings: {
                        access: {
                            '.tag': 'viewer'
                        },
                        requested_visibility: {
                            '.tag': 'public'
                        }
                    }
                })
                .then((response) => response.result.url);
        },
        [client]
    );
    const getPath = useCallback((file: File, sku: ISku) => {
        const [folder1, folder2] = getFolderNames(sku);
        const name = getBaseName(file.name);
        const fullname = (root?: string) => [...(root == null ? [] : [root]), FILESYSTEM_PRODUCTS, folder1, folder2, name].join('/');
        return fullname;
    }, []);
    const moveFile = useCallback(
        (file: File, sku: ISku) => {
            const destination = getPath(file, sku)(FILESYSTEM_ROOT);
            return promisify(fs.copyFile)(file.path, destination);
        },
        [getPath]
    );
    const uploadFile = useCallback(
        async (file: File, sku: ISku) => {
            const name = '/'.concat(getPath(file, sku)());
            if (file.size < UPLOAD_FILE_SIZE_LIMIT) {
                const response = await client.filesUpload({ path: name, contents: file });
                return response.result.path_lower ?? '';
            } else {
                let offset = 0;
                const items = [];
                while (offset < file.size) {
                    const chunkSize = Math.min(MAX_BLOB, file.size - offset);
                    items.push(file.slice(offset, offset + chunkSize));
                    offset += chunkSize;
                }
                const task = items.reduce((acc: Promise<string>, blob: Blob, idx: number, allItems: Blob[]) => {
                    if (idx === 0) {
                        return acc.then(function () {
                            return client
                                .filesUploadSessionStart({
                                    close: false,
                                    contents: blob
                                })
                                .then((response) => response.result.session_id);
                        });
                    } else if (idx < allItems.length - 1) {
                        return acc.then(async function (sessionId: string) {
                            const cursor = { session_id: sessionId, offset: idx * MAX_BLOB };
                            await client
                                .filesUploadSessionAppendV2({
                                    close: false,
                                    cursor,
                                    contents: blob
                                });
                            return sessionId;
                        });
                    } else {
                        return acc.then(async function (sessionId: string) {
                            const cursor = { session_id: sessionId, offset: file.size - blob.size };
                            const commit = { path: name, mode: 'add' as any, autorename: true, mute: false };
                            const response = await client.filesUploadSessionFinish({ cursor, commit, contents: blob });
                            return response.result.path_lower ?? '';
                        });
                    }
                }, Promise.resolve(''));
                return task;
            }
        },
        [client, getPath]
    );
    const uploadAndShare = useCallback(
        async (file: File, sku: ISku) => {
            await moveFile(file, sku);
            const url = await uploadFile(file, sku);
            const dropboxSharedLink = await getSharedLink(url);
            const tinyURLLink = await runTinyURL(dropboxSharedLink);
            fs.rmSync(file.path);
            return {
                tinyURLLink,
                dropboxSharedLink
            }
        },
        [getSharedLink, moveFile, uploadFile]
    );
    return {
        removeAttachment: removeFile,
        uploadAttachment: uploadAndShare,
        getPath,
        client
    }
}

