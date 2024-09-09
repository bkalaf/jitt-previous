/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { distinctByString } from '../common/array/distinct';
import fs from 'graceful-fs';
import { sortByString } from '../components/Tabs/useMatchClassificationPath';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const classification = client.db('jitt').collection('classification');


async function run() {
    const docs = await classification.find<{ path: string[] }>({}).toArray();
    const paths = distinctByString(docs.map((x) => x.path.join('/') ?? '/')).sort(sortByString);
    fs.writeFileSync(`C:/Users/bobby/OneDrive/Desktop/Code/jitt/src/assets/data/detailTypes.json`, JSON.stringify(paths, null, '\t'));
    fs.writeFileSync(`C:/Users/bobby/OneDrive/Desktop/Code/jitt/src/assets/data/detailTypes.csv`, 'path\n'.concat(paths.join('\n')));
}
run().finally(() => console.log('done!'));