import fs from 'graceful-fs';

function readFolder(folderPath: string): string[] {
    const contents = fs.readdirSync(folderPath);
    const contents2 = contents.map((x) => [folderPath, x].join('/'));
    return contents2.map(x => {
        if (fs.lstatSync(x).isDirectory()) {
            return readFolder(x);
        }
        return [x];
    }).reduce((pv, cv) => [...pv, ...cv], []);
}
const files = readFolder('./src');

console.log(JSON.stringify(files, null, '\t'))

const todelete = files.filter(x => {
    const [fn, ...folders] = x.split('/').reverse();
    return fn.startsWith('_');
})

console.log(JSON.stringify(todelete, null, '\t'))

for (const iterator of todelete) {
    fs.rmSync(iterator);
}