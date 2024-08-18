/* eslint-disable no-console */
import 'dotenv/config';
import { BSON, MongoClient } from 'mongodb';
import { $$graph } from '../taxonomy/graph';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const mercariTaxonomy = client.db('jitt').collection('mercariTaxonomy');
const classification = client.db('jitt').collection('classification');

async function run() {
    for (const item of $$graph) {
        const taxonomy = await mercariTaxonomy.findOne({ fullname: item.taxonomy });
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
run().finally(() => console.log('DONE!'));
