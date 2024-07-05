// import { MongoClient } from 'mongodb';

// const client = new MongoClient('mongodb+srv://admin:Nv0DN8uRo9Otwb8i@jitt-core.p62mz.mongodb.net/test');
// const productCollection = client.db('jitt').collection('product');
// // const auctionCollection = client.db('jitt').collection('auction');

// // function testAndSet(doc: WithId<Document>, setMap: Record<string, any>) {
// //     return function (name: string, func: (x?: any) => any = identity) {
// //         const newName = ['_', name].join('');
// //         const v = getProperty(name, doc);
// //         let sMap = setMap;
// //         if (v != null) {
// //             sMap = setProperty(newName, sMap, v);
// //             sMap = setProperty(name, sMap, func(v));
// //         }
// //         return sMap;
// //     };
// // }

// productCollection
//     .find({
//         partNumbers: {
//             $exists: true 
//         }
//     })
//     .toArray()
//     .then((docs) => {
//         docs.map((doc) => {
//             // let setMap: Record<string, any> = {};
//             // setMap = testAndSet(doc, setMap)('copyright');
//             // setMap = testAndSet(doc, setMap)('width', (value: number) => ({ value, uom: 'in' }));
//             // setMap = testAndSet(doc, setMap)('length', (value: number) => ({ value, uom: 'in' }));
//             // setMap = testAndSet(doc, setMap)('height', (value: number) => ({ value, uom: 'in' }));
//             // setMap = testAndSet(doc, setMap)('weight', (value: number) => ({ value, uom: 'g' }));
//             // setMap = testAndSet(doc, setMap)('gender');
//             // setMap = testAndSet(doc, setMap)('styleNo');
//             // setMap = testAndSet(doc, setMap)('size');
//             // setMap = testAndSet(doc, setMap)('collarType');
//             // setMap = testAndSet(doc, setMap)('cuffType');
//             // setMap = testAndSet(doc, setMap)('mediaTitle');
//             // setMap = testAndSet(doc, setMap)('ESRBRating');
//             // setMap = testAndSet(doc, setMap)('consoleType');
//             // setMap = testAndSet(doc, setMap)('batteryType');
//             // setMap = testAndSet(doc, setMap)('testedOn');
//             // setMap = testAndSet(doc, setMap)('partNumbers');
//             // setMap = testAndSet(doc, setMap)('modelNumber');
//             // setMap = testAndSet(doc, setMap)('modelName');
//             // setMap = testAndSet(doc, setMap)('rateOfEnergyCapacity', (value?: any) => ({
//             //     value: value.value,
//             //     uom: 'mAh'
//             // }));

//             // const $set = Object.fromEntries(Array.from(Object.entries(setMap)));
//             // console.log(JSON.stringify($set, null, '\t'));
//             productCollection.findOneAndUpdate(
//                 {
//                     _id: doc._id
//                 },
//                 {
//                     $set: {
//                         partNumbers: doc.partNumbers.map((x: string) => ({
//                             partNumber: x
//                         }))
//                     }
//                 }
//             );
//         });
//     });

// // auctionCollection
// //     .find({})
// //     .toArray()
// //     .then((docs) => {
// //         docs.map((doc) => {
// //             // let setMap: Record<string, any> = {};
// //             // setMap = testAndSet(doc, setMap)('size.length.value', (value: number) => new BSON.Double(value));
// //             // setMap = testAndSet(doc, setMap)('size.width.value', (value: number) => new BSON.Double(value));

// //             // const $set = Object.fromEntries(Array.from(Object.entries(setMap)));
// //             // console.log(JSON.stringify($set, null, '\t'));
// //             auctionCollection.findOneAndUpdate(
// //                 {
// //                     _id: doc._id
// //                 },
// //                 {
// //                     $set: {
// //                         'size.length.value': new BSON.Double(doc.size.length.value),
// //                         'size.width.value': new BSON.Double(doc.size.width.value)
// //                     }
// //                 }
// //             );
// //         });
// //     });
