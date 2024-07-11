import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { IDraft } from '../types';
import * as fs from 'graceful-fs';

const MONGODB_ADMIN_PASSWORD = process.env.MONGODB_ADMIN_PASSWORD ?? '';
const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME ?? '';

const client = new MongoClient(`mongodb+srv://admin:${MONGODB_ADMIN_PASSWORD}@jitt-core.p62mz.mongodb.net/${MONGODB_DATABASE_NAME}`);

// const productCollection = client.db('jitt').collection('product');
// const auctionCollection = client.db('jitt').collection('auction');
const draftCollection = client.db('jitt').collection<IDraft>('draft');

const data = draftCollection
    .find({})
    .map((draft) => {
        const barcodeMap = new Map<string, number>();
        const productInfoKeyMap = new Map<string, number>();
        const wordMap = new Map<string, number>();
        const productInfo = new Map<string, Map<string, number>>();
        draft.scrapes
            .filter((x) => x != null)
            .map((scrape) => {
                const codes = scrape.barcodes.map((bc) => [bc.padStart(13, '0'), 1] as [string, number]);
                for (const [b] of codes) {
                    if (barcodeMap.has(b)) {
                        barcodeMap.set(b, (barcodeMap.get(b) as number) + 1);
                    } else {
                        barcodeMap.set(b, 1);
                    }
                }
            });
        (
            draft.scrapes
                .filter((x) => x != null)
                .map((scrape) => {
                    return scrape.productInfos.map((x) => x.key);
                })
                .reduce((pv, cv) => [...pv, ...cv], [])
                .filter((x) => x != null) as string[]
        ).forEach((key) => {
            if (productInfoKeyMap.has(key)) {
                productInfoKeyMap.set(key, (productInfoKeyMap.get(key) as number) + 1);
            } else {
                productInfoKeyMap.set(key, 1);
            }
        });
        (
            draft.scrapes
                .filter((x) => x != null)
                .map((scrape) => {
                    return scrape.productInfos.map((x) => [x.key, x.value] as [string, string]);
                })
                .reduce((pv, cv) => [...pv, ...cv], []) as [string, string][]
        ).forEach(([k, v]) => {
            if (productInfo.has(k)) {
                const innerMap = productInfo.get(k)!;
                if (innerMap.has(v)) {
                    const current = (innerMap.get(v) ?? 0) + 1;
                    innerMap.set(v, current);
                } else {
                    innerMap.set(v, 1);
                }
                productInfo.set(k, innerMap);
            } else {
                const innerMap = new Map<string, number>();
                innerMap.set(v, 1);
                productInfo.set(k, innerMap);
            }
        });
        draft.scrapes
            .filter((x) => x != null)
            .map((scrape) => {
                const wordList = scrape.descriptions.map((x) => x.split(' ')).reduce((pv, cv) => [...pv, ...cv], []);
                for (const word of wordList) {
                    if (wordMap.has(word)) {
                        wordMap.set(word, (wordMap.get(word) as number) + 1);
                    } else {
                        wordMap.set(word, 1);
                    }
                }
            });
        const prices = draft.scrapes
            .filter((x) => x != null)
            .map((x) => x.storeInfos.map((y) => y.price))
            .reduce((pv, cv) => [...pv, ...cv], [])
            .filter((x) => x != null && x > 0) as number[];
        return {
            productInfo: Object.fromEntries(Array.from(productInfo.entries()).map(([k, v]) => [k, Object.fromEntries(v.entries())] as [string, Record<string, number>])),
            barcodeCount: Array.from(barcodeMap.entries())
                .sort((a, b) =>
                    a[1] < b[1] ? -1
                    : a[1] > b[1] ? 1
                    : 0
                )
                .reverse()
                .slice(0, 10),
            keysCount: Array.from(productInfoKeyMap.entries())
                .sort((a, b) =>
                    a[1] < b[1] ? -1
                    : a[1] > b[1] ? 1
                    : 0
                )
                .reverse()
                .slice(0, 10),
            wordCount: Array.from(wordMap.entries())
                .sort((a, b) =>
                    a[1] < b[1] ? -1
                    : a[1] > b[1] ? 1
                    : 0
                )
                .reverse()
                .slice(0, 10),
            maxPrice: Math.max(...prices),
            minPrice: Math.min(...prices),
            averagePrice: prices.reduce((pv, cv) => pv + cv, 0) / prices.length,
            '_id': draft._id.toHexString(),
            // barcodeCount: Object.fromEntries(barcodeMap.entries()),
            // keysCount: Object.fromEntries(productInfoKeyMap.entries()),
            // wordCount: Object.fromEntries(wordMap.entries()),
            // maxPrice: Math.max(...prices),
            // minPrice: Math.min(...prices),
            // averagePrice: prices.reduce((pv, cv) => pv + cv, 0) / prices.length
        };
    })
    .toArray();

data.then((datas) => {
    fs.writeFileSync('productInfo.json', JSON.stringify(datas, null, '\t'));
}).finally(() => console.log('DONE!'));

// function testAndSet(doc: WithId<Document>, setMap: Record<string, any>) {
//     return function (name: string, func: (x?: any) => any = identity) {
//         const newName = ['_', name].join('');
//         const v = getProperty(name, doc);
//         let sMap = setMap;
//         if (v != null) {
//             sMap = setProperty(newName, sMap, v);
//             sMap = setProperty(name, sMap, func(v));
//         }
//         return sMap;
//     };
// }
