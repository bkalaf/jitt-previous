/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { setProperty } from '../common/object/setProperty';
import { getProperty } from '../common/object/getProperty';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const classification = client.db('jitt').collection('classification');
const classifier = client.db('jitt').collection('classifier');

let oldGraph = {};

async function run() {
    const docs = await classifier.find({}).toArray();

    for (const doc of docs) {
        console.log(JSON.stringify(doc, null, '\t'))
        const { name } = doc;
        const $name = name.replaceAll(' || ', '.')
        const current = getProperty($name, oldGraph);
        console.log(`current`, $name, current);
        if (current == null) {
            oldGraph = setProperty($name, oldGraph, {});
        }
    }
    console.log(JSON.stringify(oldGraph, null, '\t'));
}

run()
    .finally(() => console.log('DONE!'))
    .finally(() => console.log(JSON.stringify(oldGraph, null, '\t')));
