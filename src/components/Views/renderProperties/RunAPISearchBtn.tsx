import { useCallback } from 'react';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { BSON } from 'realm';
import { IApiResult } from '../../../types';
import { runTransaction } from '../../../util/runTransaction';
import { TopBarButton } from './TopBarButton';
import { $$fileQueue } from './$$fileQueue';
import { BarcodeSpiderResponse } from './CreateProductFromUPCBtn';
import { $ } from '../../../schema/$';
import { schemaName } from '../../../util/schemaName';
import { useIsArrayInFileDataNotEmpty } from './useIsArrayInFileDataNotEmpty';
import { distinctBy } from '../../../common/array/distinct';
import { deepEqual } from '../../../common/deepEqual';
type Other = { brand: string } | { title: string } | { model: string } | { category: string };

const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';
const token = process.env.BARCODE_SPIDER_TOKEN ?? '';
export const fetchLookupBarcodeSpider = (upc: string) => fetch(`https://api.barcodespider.com/v1/lookup?token=${token}&upc=${upc}`);

const fetchLookupUPCItemDB = (upc: string) => fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`);

const fetchSearchBarcodeSpider = (...params: string[]) => {
    const url = new URL('https://api.barcodespider.com/v1/search');
    url.searchParams.set('token', token);
    url.searchParams.set('s', params.join(' '));
    const fullurl = url.toString();
    // console.log(fullurl);
    return fetch(fullurl);
};
const fetchSearchUPCItemDB = (s: string, other: Other, isBook = false) => {
    const baseUrl = `https://api.upcitemdb.com/prod/trial/search`;
    const url = new URL(baseUrl);
    url.searchParams.set('match_mode', '1');
    url.searchParams.set('type', isBook ? 'book' : 'product');
    url.searchParams.set('s', s);
    if ('brand' in other) url.searchParams.set('brand', other.brand);
    if ('model' in other) url.searchParams.set('model', other.model);
    if ('category' in other) url.searchParams.set('category', other.category);
    if ('title' in other) url.searchParams.set('title', other.title);
    const finalUrl = url.toString();
    // console.log(finalUrl);
    return fetch(finalUrl);
};
export type ProductSearchEntry =
    | {
          upc: string;
      }
    | { brandName: string; modelNo: string }
    | { brandName: string; modelName: string }
    | { category: string; modelNo: string }
    | { elid: string }
    | { asin: string }
    | { category: string; modelName: string }
    | { brandName: string; styleNo: string }
    | { title: string };

export async function runAPI(entry: ProductSearchEntry): Promise<[Response, string, string]> {
    if ('asin' in entry) {
        return [await fetchSearchBarcodeSpider(entry.asin), 'barcodespider.com', entry.asin];
    } else if ('elid' in entry) {
        return [await fetchSearchBarcodeSpider(entry.elid), 'barcodespider.com', entry.elid];
    } else if ('title' in entry) {
        return [await fetchSearchUPCItemDB('book', { title: entry.title }, true), 'upcitemdb.com', ['isBook == true', entry.title].join(' && ')];
    } else if ('upc' in entry) {
        const result = await fetchLookupBarcodeSpider(entry.upc);
        if (result.status === 200) return [result, 'barcodespider.com', ''];
        return [await fetchLookupUPCItemDB(entry.upc), 'upcitemdb.com', entry.upc];
    } else if ('brandName' in entry) {
        const { brandName, ...other } = entry;
        if ('styleNo' in other) {
            return [await fetchSearchUPCItemDB(brandName, { model: other.styleNo }), 'upcitemdb.com', [brandName, other.styleNo].join(' && ')];
        } else if ('modelName' in other) {
            return [await fetchSearchBarcodeSpider(brandName, ...other.modelName.split(' ')), 'barcodespider.com', [brandName, other.modelName].join(' && ')];
        }
        return [await fetchSearchUPCItemDB(brandName, { model: other.modelNo }), 'upcitemdb.com', [brandName, other.modelNo].join(' && ')];
    }
    const { category, modelNo, modelName } = { modelNo: undefined, modelName: undefined, ...entry };
    return [await fetchSearchUPCItemDB(modelNo ?? modelName, { category }), 'upcitemdb.com', [category, modelNo, modelName].filter((x) => x != null && x.length > 0).join(' && ')];
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export function RunApiSearchBtn() {
    const db = useLocalRealm();
    const handleSubmit = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async (data: any) => {
            const innerFileData = distinctBy((left, right) => deepEqual(left, right), Array.from($$fileQueue));
            const funcs = innerFileData.map((innerData) => async () => {
                // eslint-disable-next-line no-console
                console.log(`innerFileData`, JSON.stringify(innerFileData, null, '\t'));
                const [response, source, params] = await runAPI(innerData);
                const body = response.status === 200 ? ((await response.json()) as BarcodeSpiderResponse) : ({} as Record<string, any>);
                const attributes = Object.fromEntries(
                    body?.items?.length > 0 ?
                        Object.entries(body?.items[0] ?? {})
                            .filter(([, v]) => typeof v === 'string' || typeof v === 'number')
                            .map(([k, v]) => [k, v?.toString() ?? ''] as [string, string])
                    :   []
                );
                const func = () => {
                    db.create<IApiResult>(schemaName($.apiResult()), {
                        _id: new BSON.ObjectId(),
                        obsolete: response.status !== 200 ? true : false,
                        timestamp: new Date(Date.now()),
                        source,
                        params,
                        result: response.status === 200 ? JSON.stringify(body, null, '\t') : '{}',
                        attributes
                    });
                };
                setTimeout(() => runTransaction(db, func), 20 * 1000);
            });
            await funcs.reduce(
                (pv, cv) => async () => {
                    await pv();
                    await cv();
                },
                async () => Promise.resolve()
            )();
            // eslint-disable-next-line no-console
            console.info('DONE!');
        },
        [db]
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const submitter = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (x?: any) => {
            handleSubmit({}).finally(() => alert('handleSubmit DONE!'));
        },
        [handleSubmit]
    );
    const productSearchQueueArrayNotEmpty = useIsArrayInFileDataNotEmpty(PRODUCT_SEARCH_QUEUE)
    return <TopBarButton color='info' label='Run API Search' enabled={productSearchQueueArrayNotEmpty} handleSubmit={submitter} />;
    //     <Button color='info' variant='contained' onClick={onSubmit} disabled={!areRowsSelected()} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
    //         Run API Search
    //     </Button>
    // );
}
