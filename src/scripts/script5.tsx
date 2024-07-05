// import { MongoClient, BSON } from 'mongodb';
// import fs from 'graceful-fs';

// export function normalizeEndOfLine(str: string) {
//     return str.replaceAll('\r\n', '\n').replaceAll('\r', '\n');
// }
// export function removeQuotes(str: string) {
//     function checkEnd(s: string)  {
//         return s.endsWith('"') ? s.slice(0, s.length - 1) : s;
//     }
//     function checkStart(s: string) {
//         return s.startsWith('"') ? s.slice(1) : s;
//     }
//     return checkStart(checkEnd(str));
// }
// const data = normalizeEndOfLine(fs.readFileSync('./src/scripts/compatWith.csv').toString())
//     .split('\n')
//     .map((x) => removeQuotes(x).replaceAll('HP ', ''));
// console.log(JSON.stringify(data, null, '\t'));

// const client = new MongoClient('mongodb+srv://admin:Nv0DN8uRo9Otwb8i@jitt-core.p62mz.mongodb.net/test');
// const productCollection = client.db('jitt').collection('product');

// const id = '6679ba924fe45795e5bf0d5d';
// const id2 = '667ff542a9f3fab89f067a5b';
// const brandid = '6679ba924fe45795e5bf0d5d';

// const toAdd = data.map(d => ({
//     brand: new BSON.ObjectId(brandid),
//     partNumber: d
// }))

// productCollection.findOneAndUpdate({
//     _id: new BSON.ObjectId(id)
// }, {
//     $push: {
//         'compatibleWith': {
//             $each: toAdd
//         }
//     } as any
// })
// productCollection.findOneAndUpdate(
//     {
//         _id: new BSON.ObjectId(id2)
//     },
//     {
//         $push: {
//             compatibleWith: {
//                 $each: toAdd
//             }
//         } as any
//     }
// );