/* eslint-disable no-console */
import { useCallback } from 'react';
import { MRT_RowData, MRT_TableInstance } from 'material-react-table';
import { useMutation } from '@tanstack/react-query';
import { BSON, UpdateMode } from 'realm';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { useUpdateEntity } from './useUpdateEntity';
import { useSuccessNotification } from './useSuccessNotification';
import { useLocalRealm } from './useLocalRealm';
import { useConvert } from './useConvert';
import { runTransaction } from '../util/runTransaction';
import { useEffectiveCollection } from './useEffectiveCollection';
import { IProduct } from '../types';
import { calculateISBN10CheckDigit } from '../util/calculateISBN10CheckDigit';
import { Barcode } from '../schema/entity/barcode';
import { calculateUPCCheckDigit } from '../util/calculateUPCCheckDigit';
import { removeLeadingZeros } from '../util/removeLeadingZero';
import { compareProduct } from './compareProduct';
import { classifyBarcode } from '../util/classifyBarcode';
import { BarcodeTypes } from '../schema/enums';
import { useInvalidateCollection } from './useInvalidateCollection';

export const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';

export function calculateISBN13FromISBN10(value: string) {
    const [isValid, type] = classifyBarcode(value) as [boolean, BarcodeTypes];
    if (!isValid) throw new Error('INVALID ISBN-10 passed to calculateISBN13FromISBN10');
    if (type !== 'isbn-10') throw new Error(`calculateISBN13FromISBN10 can only accept isbn-10 barcodes: passed ${type}`);
    const digits = removeLeadingZeros(value).padStart(10, '0').slice(0, 9);
    const full = ['978', digits].join('');
    const checkdigit = calculateUPCCheckDigit(full);
    return [full, checkdigit].join('');
}

export function calculateISBN10FromISBN13(value: string) {
    const [isValid, type] = classifyBarcode(value) as [boolean, BarcodeTypes];
    if (!isValid) throw new Error('INVALID ISBN-13 passed to calculateISBN10FromISBN13');
    if (type !== 'isbn-13') throw new Error(`calculateISBN10FromISBN13 can only accept isbn-13 barcodes: passed ${type}`);
    if (value.startsWith('978')) {
        const digits = value.slice(3, value.length - 1);
        const checkdigit = calculateISBN10CheckDigit(digits);
        const bc = [digits, checkdigit].join('');
        return bc;
    }
    return undefined;
}

export function checkBarcodes(dirtyFields: string[], product: IProduct): IProduct {
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
export function evalDirty(key: string, value: boolean | any[] | Record<string, unknown>): string[] {
     
    console.log(`key`, key, value);
    if (typeof value === 'boolean') {
        return value === true ? [key] : [];
    }
    if (Array.isArray(value)) {
        const result = value.map((x) => evalDirty(key, x)).reduce((pv, cv) => [...pv, ...cv], []);
        return result.length > 0 ? [key] : [];
    }
    const entries = Object.entries(value);
    return entries.map(([k, v]) => evalDirty([key, k].join('.'), v as any)).reduce((pv, cv) => [...pv, ...cv], []);
}
// export function useDirtyFields(obj: Record<string, boolean | any[] | Record<string, unknown>>) {
     
//     console.log(`useDirtyFields`, obj);
//     return Object.entries(obj)
//         .map(([k, v]) => evalDirty(k, v))
//         .reduce((pv, cv) => [...pv, ...cv], []);
// }
// export function getPropertyType(obj: Realm.Object, fieldName: string) {
//     if (fieldName.includes('.')) {
//         const [head, ...tail] = fieldName.split('.');
//         const type = obj.getPropertyType(head);
//         if (type.startsWith('<')) {
//             return getPropertyType((obj as any)[head] as any, tail.join('.'));
//         }
//         throw new Error(`head: ${head} tail: ${tail.join('.')} type: ${type}`);
//     }
//     return obj.getPropertyType(fieldName);
// }
export function useUpdateRecord<T extends MRT_RowData & { _id: BSON.ObjectId }>(formContext: UseFormReturn<T, any>, id: string, table: MRT_TableInstance<T>, isEditing = false, objectType?: string) {
    const collection = useEffectiveCollection(objectType);
    const convert = useConvert('object', collection);
    const db = useLocalRealm();
    // const { dirtyFields } = formContext.formState;
    // const dirty = useDirtyFields(dirtyFields as any);
    const updater = useUpdateEntity<T>(collection);
    const invalidator = useInvalidateCollection(objectType);
    const successMessage = useSuccessNotification(() => `Record created/updated.`, collection);
    const onSuccess = useCallback(
        async (result: T) => {
            table.setCreatingRow(null);
            table.setEditingRow(null);
            successMessage(result);
            await invalidator();
        },
        [invalidator, successMessage, table]
    );
    const onError = useCallback(async (errors: FieldErrors<T>) => {
         
        console.error(errors);
        // failureMessage(errors);
    }, []);
    const { mutate } = useMutation({
        mutationFn: (values: T) => {
            const $isEditing = table.getState().editingRow != null;
            return new Promise<T>((resolve) => {
                if (db == null) throw new Error('no db');
                // console.log(`values`, values);
                let converted = convert(values);
                 
                console.log(`converted`, converted);
                const func = () => {
                    if (isEditing || $isEditing) {
                        console.log(`IS EDITING`, id);
                        const obj = db.objectForPrimaryKey<T>(collection, new BSON.ObjectId(id) as any);
                        if (obj == null) throw new Error('could not find record');
                        if (collection === 'product') {
                            console.log(`checkBarcodes`);
                            converted = checkBarcodes(Object.entries(formContext.formState.dirtyFields).filter((tuple) => tuple[1]).map((tuple) => tuple[0]), converted);
                        }
                        if (collection === 'product') {
                            console.log(`compareProduct)`)
                            compareProduct(obj as any as IProduct, converted);
                        }
                         

                        // dirty.map((field) => {
                        //     const type = getPropertyType(collection, field);
                        //     // eslint-disable-next-line no-console
                        //     console.info(field, type);
                        //     if (type.startsWith('list<')) {
                        //         const current: DBList<any> = (getProperty(field, obj) as DBList<any>) ?? ([] as any);
                        //         const next: any[] = getProperty(field, converted) ?? [];
                        //         const toAdd = next.filter((x) => !current.some(y => deepEqual(y, x)));
                        //         const toRemove = current
                        //             .filter((x) => !next.some(y => deepEqual(x, y)))
                        //             .map((x) => current.indexOf(x))
                        //             .sort((a, b) =>
                        //                 a > b ? -1
                        //                 : a < b ? 1
                        //                 : 0
                        //             );
                        //         // eslint-disable-next-line no-console
                        //         console.log(`current`, current, toAdd, toRemove);
                        //         toRemove.forEach((item) => current.remove(item));
                        //         toAdd.forEach((item) => current.push(item));
                        //         if (getProperty(field, obj) == null) {
                        //             const cmd = `(field, obj, value) => obj.${field} = value`;
                        //             // eslint-disable-next-line no-console
                        //             console.log(`cmd`, cmd);
                        //             eval(cmd)(field, obj, current);
                        //         }
                        //     } else {
                        //         const cmd = `(field, obj, converted) => {
                        //             obj.${field} = converted.${field};
                        //         }`;
                        //         // eslint-disable-next-line no-console
                        //         console.log(`cmd`, cmd);
                        //         eval(cmd)(field, obj, converted);
                        //         // (obj as any)[field] = getProperty(field, converted);
                        //     }
                        // });
                        let result;
                        try {
                            result = db.create(collection, converted, UpdateMode.Modified);
                        } catch (error) {
                            console.log('ERROR CREATE', result);
                            console.error(error);
                        }
                        try {
                            updater(result);
                        } catch (error) {
                            console.log('ERROR UPDATER', result);
                            console.error(error);
                        }
                        return resolve(result);
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
