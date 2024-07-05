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