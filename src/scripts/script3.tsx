import { MongoClient } from 'mongodb';
import { toCharCode } from './toCharCode';
import { getRange } from './getRange';

const client = new MongoClient('mongodb+srv://admin:Nv0DN8uRo9Otwb8i@jitt-core.p62mz.mongodb.net/test');
const collection = client.db('jitt').collection('classifier');
export function createFolderName(name: string) {
    const chars = [...getRange(toCharCode('a'), toCharCode('z')), ...getRange(toCharCode('A'), toCharCode('Z')), ...getRange(toCharCode('0'), toCharCode('9')), toCharCode('_'), toCharCode('-')];
    return name
        .split('')
        .filter((x) => chars.includes(toCharCode(x)))
        .join('')
        .toLowerCase();
}

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
