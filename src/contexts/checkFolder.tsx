import * as fs from 'graceful-fs';

export function checkPath(fullpath: string, isFile = false) {
    const parts = fullpath
        .replaceAll('\\', '/')
        .split('/')
        .slice(0, isFile ? fullpath.replaceAll('\\', '/').split('/').length - 1 : fullpath.replaceAll('\\', '/').split('/').length);
    // console.log('checkPath', parts);
    if (fs.existsSync(parts.join('/'))) return;
    checkPath(parts.slice(0, parts.length - 1).join('/'), false);
    fs.mkdirSync(parts.join('/'))
    return;
}

// export async function checkFolder(folder: string) {
//     const segments = folder.split('\\').slice(1);
//     const segment = [folder.split('\\')[0], ...segments].join('\\');
//     if (fs.existsSync(segment)) {
//         return Promise.resolve(true);
//     }
//     const parts = ['C:', ...segments];
//     const next = parts.slice(0, parts.length - 1).join('\\');
//     if (await checkFolder(next)) return Promise.resolve(true);
//     fs.mkdirSync(next);
//     return Promise.resolve(true);
// }
// \