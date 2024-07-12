import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { useCallback } from 'react';
import { useToggler } from '../../../hooks/useToggler';
import { useForm } from 'react-hook-form-mui';
import { BSON } from 'realm';
import { IApiResult } from '../../../types';
import { classifyBarcode } from '../../../util/classifyBarcode';
import { runTransaction } from '../../../util/runTransaction';
import { APISearchForm } from './APISearchForm';
import { ignore } from '../../../common/ignore';
import { TopBarButton } from './TopBarButton';

const token = process.env.BARCODE_SPIDER_TOKEN ?? '';
export const getLookupUrl = (upc: string) => fetch(`https://api.barcodespider.com/v1/lookup?token=${token}&upc=${upc}`);
const getUpcUrl = (upc: string) => fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`);

export type BarcodeSpiderResponse = {
    code: string;
    total: number;
    offset: number;
    items: BarcodeSpiderItem[];
};

type BarcodeSpiderItem = {
    ean: string;
    title: string;
    description: string;
    isbn?: string;
    publisher?: string;
    category: string;
    images: string[];
    offers: BarcodeSpiderOffer[];
    asin?: string;
    upc?: string;
    mpn?: string;
    brand?: string;
    model?: string;
    color?: string;
    size?: string;
    dimension?: string;
    weight?: string;
    currency?: string;
    lowest_recorded_price?: number;
    highest_recorded_price?: number;
    elid?: string;
};

type BarcodeSpiderOffer = {
    merchant: string;
    domain: string;
    title: string;
    currency: string;
    list_price: string;
    price: number;
    shipping: string;
    condition: string;
    availability: string;
    link: string;
    updated_t: number;
};

export function CreateProductFromUPCBtn() {
    const [open, toggle] = useToggler(false);
    const db = useLocalRealm();
    const formContext = useForm({
        defaultValues: {
            barcode: ''
        }
    });
    const handleSubmit = useCallback(
        (data: any) => {
            let source: string | undefined;
            let result: string | undefined;
            // console.info(`prompt-result`, data);
            const func = async () => {
                const { barcode } = data;

                if (barcode) {
                    const [valid] = classifyBarcode(barcode);
                    if (!valid) {
                        throw new Error(`invalid barcode: ${barcode}`);
                    }
                    const barcodeResponse = await getLookupUrl(barcode);
                    // console.log(`barcodeResponse`, barcodeResponse, barcodeResponse.status);
                    if (barcodeResponse.status !== 200) {
                        const itemDbResponse = await getUpcUrl(barcode);
                        // console.log('itemDbResponse', itemDbResponse, itemDbResponse.status);
                        if (itemDbResponse.status !== 200) {
                            return;
                        }
                        source = 'upcitemdb.com';
                        result = await itemDbResponse.json();
                        // console.log(source, result);
                    } else {
                        source = 'barcodespider.com';
                        result = await barcodeResponse.json();
                        // console.log(source, result);
                    }

                    // console.info('created');
                }
                formContext.reset();
                toggle();
            };
            runTransaction(db, () => {
                func()
                    .then(ignore)
                    .finally(() => {
                        if (db.isInTransaction) {
                            db.create<IApiResult>('apiResult', {
                                _id: new BSON.ObjectId(),
                                timestamp: new Date(Date.now()),
                                params: 'upc=${result}',
                                source: source ?? 'failed',
                                obsolete: false,
                                result: JSON.stringify(result, null, '\t')
                            });
                        } else {
                            db.write(() => {
                                db.create<IApiResult>('apiResult', {
                                    _id: new BSON.ObjectId(),
                                    timestamp: new Date(Date.now()),
                                    params: 'upc=${result}',
                                    source: source ?? 'failed',
                                    obsolete: false,
                                    result: JSON.stringify(result, null, '\t')
                                });
                            });
                        }
                    });
            });
        },
        [db, formContext, toggle]
    );
    return (
        <>
            <TopBarButton color='warning' handleSubmit={handleSubmit} enabled={() => true} label='Lookup UPC' />
            {/* <Button color='warning' variant='contained' onClick={onSubmit} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
                
            </Button> */}
            <APISearchForm open={open} toggle={toggle} />
        </>
    );
}
