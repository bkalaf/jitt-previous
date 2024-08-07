import { useCallback, useRef } from 'react';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { BSON } from 'realm';
import { IApiResult } from '../../../types';
import { runTransaction } from '../../../util/runTransaction';
import { TopBarButton } from './TopBarButton';
import { $$fileQueue } from './$$fileQueue';
import { $ } from '../../../schema/$';
import { schemaName } from '../../../util/schemaName';
import { useIsArrayInFileDataNotEmpty } from './useIsArrayInFileDataNotEmpty';
import { sleep } from '../../../scripts/sleep';
type Other = { brand: string } | { title: string } | { model: string } | { category: string };

const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';
const token = process.env.BARCODE_SPIDER_TOKEN ?? '';
export const fetchLookupBarcodeSpider = (upc: string) => [fetch(`https://api.barcodespider.com/v1/lookup?token=${token}&upc=${upc}`), `https://api.barcodespider.com/v1/lookup?token=${token}&upc=${upc}`] as [Promise<Response>, string];

const fetchLookupUPCItemDB = (upc: string) => [fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`), `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`] as [Promise<Response>, string];

const fetchSearchBarcodeSpider = (...params: string[]) => {
    const url = new URL('https://api.barcodespider.com/v1/search');
    url.searchParams.set('token', token);
    url.searchParams.set('s', params.join(' '));
    const fullurl = url.toString();
    // console.log(fullurl);
    return [fetch(fullurl), fullurl] as [Promise<Response>, string];
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
    return [fetch(finalUrl), finalUrl] as [Promise<Response>, string];
};


export async function runAPI(entry: ProductSearchEntry): Promise<[Response, string]> {
    if ('asin' in entry) {
        const [res, url] = fetchSearchBarcodeSpider(entry.asin);
        return [await res, url];
    } else if ('elid' in entry) {
        const [res, url] = fetchSearchBarcodeSpider(entry.elid);
        return [await res, url];
    } else if ('title' in entry) {
        const [res, url] = fetchSearchUPCItemDB('book', { title: entry.title }, true);
        return [await res, url];
    } else if ('upc' in entry) {
        const [res1, url] = fetchLookupBarcodeSpider(entry.upc);
        if ((await res1).status === 200) return [await res1, url];
        const [res2, url2] = fetchLookupUPCItemDB(entry.upc);
        return [await res2, url2];
    } else if ('brandName' in entry) {
        const { brandName, ...other } = entry;
        if ('styleNo' in other) {
            const [res, url] = fetchSearchUPCItemDB(brandName, { model: other.styleNo });
            return [await res, url];
        } else if ('modelName' in other) {
            const [res, url] = fetchSearchBarcodeSpider(brandName, ...other.modelName.split(' '));
            return [await res, url];
        }
        const [res, url] = fetchSearchUPCItemDB(brandName, { model: other.modelNo });
        return [await res, url];
    }
    const { category, modelNo, modelName } = { modelNo: undefined, modelName: undefined, ...entry };
    const [res, url] = fetchSearchUPCItemDB(modelNo ?? modelName, { category });
    return [await res, url];
}
 

export function RunApiSearchBtn() {
    const db = useLocalRealm();
    const token = useRef<Promise<any>>(Promise.resolve());
    const handleSubmit = useCallback(
         
        async () => {
            function addStep(promise: Promise<any>) {
                const result = token.current.then(async () => {
                    // eslint-disable-next-line no-console
                    console.info('sleep 25 sec.');
                    await sleep(25000);
                    // eslint-disable-next-line no-console
                    console.info('next step');
                    return await promise;
                });
                token.current = result;
            }
            let $done: boolean = true;
            while (!$done) {
                const { value, done } = $$fileQueue.next();
                $done = done ?? false;
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(value));
                addStep(
                    new Promise<void>((resolve) => {
                        const func = async () => {
                            const [response, request] = await runAPI(value as ProductSearchEntry);
                            const body = response.status === 200 ? ((await response.json()) as BarcodeSpiderResponse) : ({} as Record<string, any>);
                            const attributes = Object.fromEntries(
                                body?.items?.length > 0 ?
                                    Object.entries(body?.items[0] ?? {})
                                        .filter(([, v]) => typeof v === 'string' || typeof v === 'number')
                                        .map(([k, v]) => [k, v?.toString() ?? ''] as [string, string])
                                :   []
                            );
                            const innerFunc = () => {
                                db.create<IApiResult>(schemaName($.apiResult()), {
                                    _id: new BSON.ObjectId(),
                                    obsolete: response.status !== 200 ? true : false,
                                    timestamp: new Date(Date.now()),
                                    source: '',
                                    params: '',
                                    result: response.status === 200 ? JSON.stringify(body, null, '\t') : '{}',
                                    attributes,
                                    request,
                                    status: response.status
                                });
                            };
                            runTransaction(db, innerFunc);
                        };
                        // eslint-disable-next-line no-console
                        func().finally(() => console.info('DONE!'));
                        return resolve()
                    })
                );
            }
            // eslint-disable-next-line no-console
            console.info('FINALLY DONE!');
        },
        [db]
    );
     
    const submitter = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (x?: any) => {
            handleSubmit().then(() => alert('step done!')).finally(() => alert('handleSubmit DONE!'));
        },
        [handleSubmit]
    );
    const productSearchQueueArrayNotEmpty = useIsArrayInFileDataNotEmpty(PRODUCT_SEARCH_QUEUE);
    return <TopBarButton color='info' label='Run API Search' enabled={productSearchQueueArrayNotEmpty} handleSubmit={submitter} />;
    //     <Button color='info' variant='contained' onClick={onSubmit} disabled={!areRowsSelected()} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
    //         Run API Search
    //     </Button>
    // );
}
