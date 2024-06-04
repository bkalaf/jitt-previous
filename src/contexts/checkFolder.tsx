import * as fs from 'graceful-fs';


export async function checkFolder(folder: string) {
    const segments = folder.split('\\').slice(1);
    const segment = ['C:', ...segments].join('\\');
    if (fs.existsSync(segment)) {
        return Promise.resolve(true);
    }
    const parts = ['C:', ...segments];
    const next = parts.slice(0, parts.length - 1).join('\\');
    if (await checkFolder(next)) return Promise.resolve(true);
    fs.mkdirSync(next);
    return Promise.resolve(true);
}
