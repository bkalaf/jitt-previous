/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import 'dotenv/config';
import { BSON, MongoClient } from 'mongodb';
import fs from 'graceful-fs';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const brands = client.db('jitt').collection('brand');
const quote = (s: string) => ['"', s, '"'].join('');

async function run() {
    const docs = await brands.find<{ name: string, _id: BSON.ObjectId }>({}).toArray();
    const text = docs.map((x) => [x.name, x._id.toHexString()].map(quote).join(',')).join('\n');
    fs.writeFileSync(`C:/Users/bobby/OneDrive/Desktop/Code/jitt/src/assets/data/brands.csv`, '"name","id"\n'.concat(text));
}
run().finally(() => console.log('done!'));
