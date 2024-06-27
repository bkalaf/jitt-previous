"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFolderName = exports.fromCharCode = exports.toCharCode = exports.getRange = void 0;
const mongodb_1 = require("mongodb");
const client = new mongodb_1.MongoClient('mongodb+srv://admin:Nv0DN8uRo9Otwb8i@jitt-core.p62mz.mongodb.net/test');
const collection = client.db('jitt').collection('classifier');
function getRange(low, high) {
    if (low === high)
        return [];
    return [low, ...getRange(low + 1, high)];
}
exports.getRange = getRange;
function toCharCode(s) {
    return s.charCodeAt(0);
}
exports.toCharCode = toCharCode;
function fromCharCode(n) {
    return String.fromCharCode(n);
}
exports.fromCharCode = fromCharCode;
function createFolderName(name) {
    const chars = [...getRange(toCharCode('a'), toCharCode('z')), ...getRange(toCharCode('A'), toCharCode('Z')), ...getRange(toCharCode('0'), toCharCode('9')), toCharCode('_'), toCharCode('-')];
    return name
        .split('')
        .filter((x) => chars.includes(toCharCode(x)))
        .join('')
        .toLowerCase();
}
exports.createFolderName = createFolderName;
collection
    .find({
    type: {
        $ne: []
    }
})
    .toArray()
    .then((docs) => {
    console.log(JSON.stringify(docs, null, '\t'));
    // for (const iterator of docs) {
    //     client
    //         .db('jitt')
    //         .collection('brand')
    //         .updateOne(
    //             { _id: iterator._id },
    //             {
    //                 $set: { folder: createFolderName(iterator.name) }
    //             }
    //         );
    // }
    console.log(`total records: ${docs.length}`);
})
    .then(() => console.log('DONE!'));
// collection
//     .find({})
//     .toArray()
//     .then((docs) => {
//         for (const iterator of docs) {
//             client
//                 .db('jitt')
//                 .collection('brand')
//                 .updateOne(
//                     { _id: iterator._id },
//                     {
//                         $set: { folder: createFolderName(iterator.name) }
//                     }
//                 );
//         }
//     })
//     .then(() => console.log('DONE!'));
//# sourceMappingURL=script3.js.map