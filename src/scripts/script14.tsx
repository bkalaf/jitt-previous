/* eslint-disable no-console */
import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { IMercariTaxonomy, IProduct } from '../types';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const mercariTaxonomy = client.db('jitt').collection<IProduct>('mercariTaxonomy');
const classifier = client.db('jitt').collection<IProduct>('mercariTaxonomy');

async function run() {
    const mt = await mercariTaxonomy.find<IMercariTaxonomy>({}).toArray();
    const mercariTaxonomyNames = mt.map(x => x.fullname).sort((a, b) => a.localeCompare(b));

    const cl = await classifier.find<IMercariTaxonomy>({}).toArray();
    const classifiers = cl.map((x) => x.fullname).sort((a, b) => a.localeCompare(b));

    console.log(JSON.stringify(mercariTaxonomyNames, null, '\t'));
    console.log('---**---')
    console.log(JSON.stringify(classifiers, null, '\t'));

}

run();
