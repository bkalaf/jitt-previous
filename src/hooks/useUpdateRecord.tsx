import { useCallback } from 'react';
import { MRT_RowData, MRT_TableInstance } from 'material-react-table';
import { useMutation } from '@tanstack/react-query';
import { BSON } from 'realm';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { useUpdateEntity } from './useUpdateEntity';
import { useFailureNotification } from './useFailureNotification';
import { useSuccessNotification } from './useSuccessNotification';
import { useLocalRealm } from './useLocalRealm';
import { useConvert } from './useConvert';
import { runTransaction } from '../util/runTransaction';
import { getProperty } from '../common/object/getProperty';
import { useEffectiveCollection } from './useEffectiveCollection';
import { IProduct } from '../types';
import { deepEqual } from '../common/deepEqual';
import * as fs from 'graceful-fs';
import { calculateISBN10CheckDigit } from '../util/calculateISBN10CheckDigit';
import { Barcode } from '../schema/entity/barcode';
import { calculateUPCCheckDigit } from '../util/calculateUPCCheckDigit';
import { removeLeadingZeros } from '../util/removeLeadingZero';

const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';

function compareProduct(oldProduct: undefined | IProduct, newProduct: IProduct) {
    const func = (p?: IProduct) => {
        if (p == null) return {};
        const title = p.mediaTitle ?? p.book?.title ?? p.album?.title ?? p.movie?.title ?? p.tvSeries?.title;
        const subtitle = p.mediaSubtitle ?? p.book?.subtitle ?? p.album?.subtitle ?? p.movie?.subtitle ?? p.tvSeries?.subtitle;
        const fulltitle = title ? [title, subtitle].filter((x) => x != null && x.length > 0).join(': ') : undefined;
        return {
            id: p._id.toHexString(),
            modelNo: p.modelNo,
            modelName: p.modelName,
            styleNo: p.styleNo,
            brandName: p.brand?.name || p.description ? [p.brand?.name, p.description].filter((x) => x != null && x.length > 0).join(' ') : undefined,
            title: fulltitle,
            partNumbers: p.partNumbers?.map((x) => x.partNumber),
            upcs: p.upcs?.map((x) => x.value)
        };
    };
    const oldP = func(oldProduct);
    const newP = func(newProduct);
    const args: string[] = [];
    function innerSingle(key: keyof ReturnType<typeof func>) {
        if (!deepEqual(oldP[key], newP[key])) {
            if (newP[key] != null) args.push(newP[key] as string);
        }
    }
    function innerArray(key: keyof ReturnType<typeof func>) {
        if (!deepEqual(oldP[key], newP[key])) {
            const oldArr = oldP[key] as string[];
            const newArr = newP[key] as string[];
            if (newArr.length > 0) {
                const additions = newArr.filter((x) => !oldArr.includes(x));
                additions.forEach((x) => args.push(x));
            }
        }
    }
    innerSingle('modelName');
    innerSingle('modelNo');
    innerSingle('styleNo');
    innerSingle('brandName');
    innerSingle('title');
    innerArray('upcs');
    innerArray('partNumbers');

    const current = fs.existsSync(PRODUCT_SEARCH_QUEUE) ? (JSON.parse(fs.readFileSync(PRODUCT_SEARCH_QUEUE).toString()) as any[]) : [];
    const next = [...current, ...args.map((arg) => ({ id: oldP.id, value: arg }))];
    fs.writeFileSync(PRODUCT_SEARCH_QUEUE, JSON.stringify(next, null, '\t'));
}
function checkBarcodes(dirtyFields: string[], product: IProduct): IProduct {
    if (dirtyFields.includes('upcs')) {
        const { upcs } = product;
        const isbn10 = upcs.filter((x) => x.type === 'isbn-10');
        const isbn13 = upcs.filter((x) => x.type === 'isbn-13');
        const hasIsbn10 = isbn10.length > 0;
        const hasIsbn13 = isbn13.length > 0;
        if (hasIsbn13 && isbn13[0].scanValue.startsWith('978')) {
            const digits = isbn13[0].scanValue.slice(3);
            const checkdigit = calculateISBN10CheckDigit(digits);
            const bc = Barcode.createFromFullUPC([digits, checkdigit].join(''), true);
            return { ...product, upcs: [...product.upcs, bc] } as any as IProduct;
        }
        if (hasIsbn10) {
            const digits = removeLeadingZeros(isbn10[0].value).padStart(10, '0').slice(0, 9);
            const full = ['978', digits].join('');
            const checkdigit = calculateUPCCheckDigit(full);
            const bc = Barcode.createFromFullUPC([full, checkdigit].join(''), true);
            return { ...product, upcs: [...product.upcs, bc] } as any as IProduct;
        }
        return product;
    }
    return product;
}
export function useUpdateRecord<T extends MRT_RowData & { _id: BSON.ObjectId }>(formContext: UseFormReturn<T, any>, id: string, table: MRT_TableInstance<T>, objectType?: string) {
    const collection = useEffectiveCollection(objectType);
    const convert = useConvert('object', collection);
    const db = useLocalRealm();
    const { dirtyFields } = formContext.formState;
    const updater = useUpdateEntity<T>(collection);
    const successMessage = useSuccessNotification((obj: RealmObj<any>) => `1 new record created. [${obj._id.toHexString()}]`, collection);
    const failureMessage = useFailureNotification((errors: FieldErrors<T>) => {
        console.error(errors);
        console.error(errors.root);
        return [errors.root?.message].join('\n');
    });
    const onSuccess = useCallback(
        async (result: T) => {
            table.setCreatingRow(null);
            table.setEditingRow(null);
            successMessage(result);
        },
        [successMessage, table]
    );
    const onError = useCallback(
        async (errors: FieldErrors<T>) => {
            failureMessage(errors);
        },
        [failureMessage]
    );
    const { mutate } = useMutation({
        mutationFn: (values: T) => {
            const isEditing = table.getState().editingRow != null;
            return new Promise<T>((resolve) => {
                if (db == null) throw new Error('no db');
                console.log(`values`, values);
                let converted = convert(values);
                const func = () => {
                    if (isEditing) {
                        const obj = db.objectForPrimaryKey<T>(collection, new BSON.ObjectId(id) as any);
                        if (obj == null) throw new Error('could not find record');
                        if (collection === 'product') {
                            converted = checkBarcodes(Object.keys(dirtyFields), converted);
                        }
                        if (collection === 'product') {
                            compareProduct(obj as any as IProduct, converted);
                        }
                        
                        Object.keys(dirtyFields).map((field) => {
                            (obj as any)[field] = getProperty(field, converted);
                        });
                        return resolve(updater(obj));
                    }
                    if (collection === 'product') compareProduct(undefined, converted);
                    return resolve(updater(db.create(collection, converted)));
                };
                runTransaction(db, func);
            });
        },
        onSuccess,
        onError
    });

    return {
        onSuccess,
        onError,
        handleSubmit: mutate
    };
}
