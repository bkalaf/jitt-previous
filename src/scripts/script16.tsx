/* eslint-disable no-console */
import 'dotenv/config';
import { BSON, MongoClient } from 'mongodb';
import { IClassificationNode } from '../taxonomy/graph';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const mercariTaxonomy = client.db('jitt').collection('mercariTaxonomy');
const classification = client.db('jitt').collection('classification');

// const $g = {
//     apparel: {
//         bottoms: {
//             shorts: $graph.apparel.bottoms.shorts
//         }
//     }
// };
async function run() {
    for (const item of [
        {
            path: ['apparel', 'bottoms', 'shorts'],
            itemType: 'shorts',
            flags: [],
            attributes: {
                gender: 'mens'
            },
            taxonomy: 'Men::Shorts::Other'
        },
        {
            path: ['apparel', 'bottoms', 'shorts'],
            itemType: 'shorts',
            flags: [],
            attributes: {
                gender: 'womens'
            },
            taxonomy: 'Women::Shorts::Other'
        },
        {
            path: ['apparel', 'bottoms', 'shorts'],
            itemType: 'shorts',
            flags: [],
            attributes: {
                gender: 'boys',
                youthSize: '0-24M'
            },
            taxonomy: 'Kids::Boys bottoms::Boys 0-24 mos'
        },
        {
            path: ['apparel', 'bottoms', 'shorts'],
            itemType: 'shorts',
            flags: [],
            attributes: {
                gender: 'boys',
                youthSize: '2T-5T'
            },
            taxonomy: 'Kids::Boys bottoms::Boys 2T-5T'
        },
        {
            path: ['apparel', 'bottoms', 'shorts'],
            itemType: 'shorts',
            flags: [],
            attributes: {
                gender: 'boys',
                youthSize: '4T+'
            },
            taxonomy: 'Kids::Boys bottoms::Boys (4+)'
        },
        {
            path: ['apparel', 'bottoms', 'shorts'],
            itemType: 'shorts',
            flags: [],
            attributes: {
                gender: 'girls',
                youthSize: '0-24M'
            },
            taxonomy: 'Kids::Girls bottoms::Girls 0-24 mos'
        },
        {
            path: ['apparel', 'bottoms', 'shorts'],
            itemType: 'shorts',
            flags: [],
            attributes: {
                gender: 'girls',
                youthSize: '2T-5T'
            },
            taxonomy: 'Kids::Girls bottoms::Girls 2T-5T'
        },
        {
            path: ['apparel', 'bottoms', 'shorts'],
            itemType: 'shorts',
            flags: [],
            attributes: {
                gender: 'girls',
                youthSize: '4T+'
            },
            taxonomy:'Kids::Girls bottoms::Girls (4+)'
        }
    ] as IClassificationNode[]) {
        const taxonomy = await mercariTaxonomy.findOne({ fullname: item.taxonomy });
        const current = await classification.findOne({ path: item.path, flags: item.flags, attributes: item.attributes });
        if (!current) {
            const result = await classification.insertOne({
                _id: new BSON.ObjectId() as any,
                path: item.path as any,
                attributes: item.attributes as any,
                flags: item.flags as any,
                itemType: item.itemType,
                taxonomy: taxonomy?._id as any
            });
            console.log(result);
        }
    }
}
run().finally(() => console.log('DONE!'));
