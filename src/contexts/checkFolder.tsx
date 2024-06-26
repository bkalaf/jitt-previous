import * as fs from 'graceful-fs';
import * as path from 'path';

export function checkPath(fullpath: string, isFile = false) {
    const parts = fullpath.split('\\').slice(0, isFile ? fullpath.split('\\').length - 1 : fullpath.split('\\').length);
    console.log('checkPath', parts);
    if (fs.existsSync(parts.join('\\'))) return;
    checkPath(parts.slice(0, parts.length - 1).join('\\'), false);
    fs.mkdirSync(parts.join('\\'));
    return;
}

export async function checkFolder(folder: string) {
    const segments = folder.split('\\').slice(1);
    const segment = [folder.split('\\')[0], ...segments].join('\\');
    if (fs.existsSync(segment)) {
        return Promise.resolve(true);
    }
    const parts = ['C:', ...segments];
    const next = parts.slice(0, parts.length - 1).join('\\');
    if (await checkFolder(next)) return Promise.resolve(true);
    fs.mkdirSync(next);
    return Promise.resolve(true);
}

export function verifyFolder(folder: string) {
    function inner(volume: string, ...parts: string[]) {
        const current = [volume, ...parts].join('\\');
        console.log(`current`, current);
        if (fs.existsSync(current)) return;
        inner(volume, ...parts.slice(0, parts.length - 1));
        console.log(`making [${current}]`);
        fs.mkdirSync(current);
    }
    const dir = path.dirname(folder);
    console.log(`dir`, dir);
    const [volume, ...segments] = dir.split('\\');
    console.log(`volume/segments`, volume, segments);
    inner(volume, ...segments);
}

// verifyFolder('C:\\Users\\bobby\\OneDrive\\Desktop\\test\\test\\comma.csv');
