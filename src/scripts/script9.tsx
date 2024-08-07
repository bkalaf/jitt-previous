/* eslint-disable no-console */
import 'dotenv/config';
import { BSON, MongoClient } from 'mongodb';
import { IProductImage } from '../types';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const collection = client.db('jitt').collection<IProductImage>('productImage');

collection.find({}).sort('sku', 'descending').toArray().then(docs => {
    const tuples = (docs.map((d) => ({ _id: d._id, sku: d.sku, order: d.order })) as any as { _id: BSON.ObjectId; sku: BSON.ObjectId }[]).sort((a, b) => a.sku.toHexString().localeCompare(b.sku.toHexString()));
    // console.log(JSON.stringify(tuples, null, '\t'))

    console.log(typeof tuples[0]._id)
    console.log(typeof tuples[0].sku);
    const result = tuples
        .reduce(
            (pv: any[], cv: any) => {
                if (pv.length === 0) return [{ ...cv, order: 0 }];
                const { sku, order } = pv.reverse()[0];
                if ((cv.sku as any as BSON.ObjectId).toHexString() === (sku as any as BSON.ObjectId).toHexString()) {
                    return [...pv, { ...cv, order: order + 1 }];
                }
                return [...pv, { ...cv, order: 0 }];
            },
            [] as { _id: BSON.ObjectId; sku: any; order: number }[]
        )
        .sort((a, b) => {
            const s = a.sku.toHexString().localeCompare(b.sku.toHexString());
            return s === 0 ? (a.order < b.order ? -1 : a.order > b.order ? 1 : 0) : s;
        });
    console.log(JSON.stringify(result, null, '\t'))
    result.forEach(({ _id, order }) => {
        collection.findOneAndUpdate({ _id: _id }, { $set: { order: order }});
    })
})