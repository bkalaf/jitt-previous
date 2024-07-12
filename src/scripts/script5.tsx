import { BSON, MongoClient } from 'mongodb';
import fs from 'graceful-fs';


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

const client = new MongoClient('mongodb+srv://admin:LMFkI3yoQznT7N3W@jitt-core.p62mz.mongodb.net/test');
const classifierCollection = client.db('jitt').collection<any>('classifier');

function nodeMap(coll: any[]) {
    return function(obj: { name: string, id: BSON.ObjectId, parent: BSON.ObjectId | undefined }): { name: string, id: BSON.ObjectId, parent: BSON.ObjectId | undefined, children?: any[] | undefined } {
    const children = coll.filter(x => x.parent?.toHexString() === obj.id?.toHexString()).map(nodeMap(coll))
    const result = {
        ...obj,
        children: children.length === 0 ? undefined : children
    }
    // console.log(result);
    return result;
}
}
async function run() {
    const base = await classifierCollection.aggregate([
        {
            $lookup: {
                from: 'mercariTaxonomy',
                localField: 'taxonomy',
                foreignField: '_id',
                as: 'taxonomy'
            }
        },
        {
            $unwind: {
                path: '$taxonomy',
                preserveNullAndEmptyArrays: true
            }
        }
    ]).toArray();
    const baseClassifiers = base.map((x) => ({ id: x._id, name: x.shortName, parent: x.parent, attributes: x.attributes?.map((attr: any) => [attr.path, attr.value.toString()].join(' == ')), detailType: x.type, taxonomy: x.taxonomy?.fullname }));
    baseClassifiers.forEach((item, index) => {
        if ((item.attributes?.length ?? -1) === 0) {
            delete baseClassifiers[index].attributes
        } 
        if ((item.detailType?.length ?? -1) === 0) {
            delete baseClassifiers[index].detailType;
        }
    })
    const result = baseClassifiers.filter(x => x.parent == null).map(nodeMap(baseClassifiers));
    // console.log(JSON.stringify(result, null, '\t'));
    fs.writeFileSync('C:/Users/bobby/OneDrive/Desktop/taxonomy.json', JSON.stringify(result, null, '\t'));
}

run();
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