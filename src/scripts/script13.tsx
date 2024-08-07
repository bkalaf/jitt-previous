import * as fs from 'graceful-fs';

const baseFolder = 'D:/enum-pics';

const baseResult = fs.readdirSync(baseFolder);

const fullCollection = [];
for (const folderOfType of baseResult) {
    console.log(folderOfType);
    const nextDirectory = [baseFolder, folderOfType].join('/');
    const nextResult = fs.readdirSync(nextDirectory);
    const nextCollection = [];
    for (const item of nextResult) {
        const entry = {
            key: item.split('.')[0],
            text: item.split('.')[0],
            aliases: [],
            image: ['src/assets/images/enums', folderOfType, item].join('/')
        };
        console.log(entry);
        nextCollection.push(entry);
    }
    fullCollection.push([folderOfType, nextCollection] as [string, any[]])
}

console.log(JSON.stringify(Object.fromEntries(fullCollection), null, '\t'))
fs.writeFileSync('script13result.json', JSON.stringify(Object.fromEntries(fullCollection), null, '\t'));