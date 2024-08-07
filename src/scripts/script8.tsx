import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { IApiResult } from '../types';

const ATLAS_USER = process.env.ATLAS_USER ?? '';
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD ?? '';

const client = new MongoClient(`mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@jitt-core.p62mz.mongodb.net/test`);
const collection = client.db('jitt').collection('apiResult');

collection.find<IApiResult>({}).toArray().then((docs) => {
    // const codes = distinctByString(docs.map((doc) => (JSON.parse(doc.result ?? '{}') as BarcodeSpiderResponse)?.code));
    // // eslint-disable-next-line no-console
    // console.log(codes);
    docs.forEach((doc) => {
        // const { _id, result } = doc;
        // const $result = JSON.parse(result ?? "{}") as RootResponseType;
        // if ($result.item_response) {
        //     collection.findOneAndUpdate(
        //         {
        //             _id: _id as any as BSON.ObjectId
        //         },
        //         {
        //             $set: {
        //                 status:
        //                     $result.item_response.code
        //                     // $result?.code == null ? 404
        //                     // : $result.code === 'OK' ? 200
        //                     // : $result.code === 'EXCEED_LIMIT' ? 429
        //                     // : 400
        //             }
        //         }
        //     );
        // }
        // eslint-disable-next-line no-console
        console.log(doc)
    })
    // eslint-disable-next-line no-console
    console.log('DONE!');
})
