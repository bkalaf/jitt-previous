// import fs from 'graceful-fs';
// import rawData from 'C:\\Users\\bobby\\AppData\\Roaming\\jitt\\shipping-rates.json';
// import { IShippingRate } from '../schema/enums/shippingRates';

// const data = rawData.map(
//     (v) =>
//         ({
//             ...v,
//             weight: {
//                 value: v.weight,
//                 uom: 'lb'
//             }
//         }) as IShippingRate
// );

// fs.writeFileSync('C:\\Users\\bobby\\AppData\\Roaming\\jitt\\shipping-rates-v1.json', JSON.stringify(data, null, '\t'));

import 'dotenv/config';
import { BSON, MongoClient } from 'mongodb';
import { ignore } from '../common/ignore';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const collection = client.db('jitt').collection('apiResult');

collection.findOneAndUpdate(
    {
        _id: new BSON.ObjectId('6690e0bf9daa6bc4082bab4c')
    },
    {
        $set: {
            attributes: {
                ean: '0842776110060',
                title: 'Nest Hub Max Smart Display with Google Assistant - Charcoal',
                description:
                    "Nest Hub Max with the Google Assistant helps your busy family stay in touch and on track. Leave video messages and make video calls. Check in on home when you're away with the built-in Nest Cam. Share reminders and to-dos. Everyone sees their own calendar, commute, and more with just a glance. And enjoy Google Photos, You Tube TV, videos, and music on the 10-inch HD screen with stereo speakers. Google Duo account required to make video calls and leave video messages. Night Vision not supported. ",
                upc: '842776110060',
                brand: 'Google',
                model: '5557465',
                color: 'Gray',
                weight: '0.0400lb',
                category: 'Electronics > Audio > Audio Components > Speakers',
                lowest_recorded_price: '29.99',
                highest_recorded_price: '328',
                elid: '186532381420'
            }
        }
    }
).then(() => ignore());
// collection
//     .updateMany(
//         {},
//         {
//             $set: {
//                 timestamp: new Date(Date.parse('2024-07-01T00:00:00.000Z'))
//             }
//         }
//     )
//     .finally(() => ignore());
