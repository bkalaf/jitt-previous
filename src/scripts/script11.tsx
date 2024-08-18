/* eslint-disable no-console */
import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { IProduct } from '../types';
import { distinctByString } from '../common/array/distinct';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const product = client.db('jitt').collection<IProduct>('product');

async function run() {
    const data = await product.find({}).toArray();
    const genders = distinctByString(data.map((x) => x.gender) as string[]);
    console.log(genders);
    const sleeveTypes = distinctByString(data.map((x) => x.sleeveType) as string[]);
    const sleeveLengths = distinctByString(data.map((x) => x.sleeveLength) as string[]);
    console.log(sleeveTypes);
    console.log(sleeveLengths);
}

run();