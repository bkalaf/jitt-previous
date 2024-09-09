/* eslint-disable no-console */
import 'dotenv/config';
import { MongoClient } from 'mongodb';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const classification = client.db('jitt').collection('classification');

async function run() {
    const toUpdate = await classification.find({ path: ['apparel', 'bottoms', 'pants'], itemType: { $regex: /shorts/ } }).toArray();
    for (const item of toUpdate) {
        classification.updateOne({ _id: item._id }, { $set: { itemType: item.itemType.replaceAll('shorts', 'pants') } });
    }
}
run().finally(() => console.log('DONE!'));