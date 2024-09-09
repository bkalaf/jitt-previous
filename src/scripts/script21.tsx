import 'dotenv/config';
import { BSON, MongoClient } from 'mongodb';
import fs from 'graceful-fs';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const hashTags = client.db('jitt').collection('hashTag');

const quote = (s: string) => ['"', s, '"'].join('')
async function run() {
    const docs = await hashTags.find<{ _id: BSON.ObjectId, name: string }>({}).toArray();
    const output = docs.map(({ _id, name }) => [_id.toHexString(), name].map(quote).join(',')).join('\n');
    fs.writeFileSync(`C:/Users/bobby/OneDrive/Desktop/Code/jitt/src/assets/data/hashes.csv`, '"id","name"\n'.concat(output));
}
run().finally(() => console.log('done'));