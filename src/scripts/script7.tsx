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
import { MongoClient } from 'mongodb';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const collection = client.db('jitt').collection('barcode');
collection
    .updateMany(
        {},
        {
            $set: {
                timestamp: new Date(Date.parse('2024-07-01T00:00:00.000Z'))
            }
        }
    )
    .finally(() => console.log('DONE!'));
