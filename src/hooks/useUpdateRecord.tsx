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
import { calculateISBN10CheckDigit } from '../util/calculateISBN10CheckDigit';
import { Barcode } from '../schema/entity/barcode';
import { calculateUPCCheckDigit } from '../util/calculateUPCCheckDigit';
import { removeLeadingZeros } from '../util/removeLeadingZero';
import { compareProduct } from './compareProduct';
import { classifyBarcode } from '../util/classifyBarcode';
import { BarcodeTypes } from '../schema/enums';

export const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';

export function calculateISBN13FromISBN10(value: string) {
    const [isValid, type] = classifyBarcode(value) as [boolean, BarcodeTypes];
    if (!isValid) throw new Error('INVALID ISBN-10 passed to calculateISBN13FromISBN10');
    if (type !== 'isbn-10') throw new Error(`calculateISBN13FromISBN10 can only accept isbn-10 barcodes: passed ${type}`);
    const digits = removeLeadingZeros(value).padStart(10, '0').slice(0, 9);
    const full = ['978', digits].join('');
    const checkdigit = calculateUPCCheckDigit(full);
    return [full, checkdigit].join('')
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
export function useUpdateRecord<T extends MRT_RowData & { _id: BSON.ObjectId }>(formContext: UseFormReturn<T, any>, id: string, table: MRT_TableInstance<T>, isEditing = false, objectType?: string) {
    const collection = useEffectiveCollection(objectType);
    const convert = useConvert('object', collection);
    const db = useLocalRealm();
    const { dirtyFields } = formContext.formState;
    const updater = useUpdateEntity<T>(collection);
    const successMessage = useSuccessNotification((obj: RealmObj<any>) => `1 new record created. [${obj._id.toHexString()}]`, collection);
    const failureMessage = useFailureNotification((errors: FieldErrors<T>) => {
        // console.error(errors);
        // console.error(errors.root);
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
            const $isEditing = table.getState().editingRow != null;
            return new Promise<T>((resolve) => {
                if (db == null) throw new Error('no db');
                // console.log(`values`, values);
                let converted = convert(values);
                // console.log(`converted`, converted);
                const func = () => {
                    if (isEditing || $isEditing) {
                        const obj = db.objectForPrimaryKey<T>(collection, new BSON.ObjectId(id) as any);
                        if (obj == null) throw new Error('could not find record');
                        if (collection === 'product') {
                            converted = checkBarcodes(Object.keys(dirtyFields), converted);
                        }
                        if (collection === 'product') {
                            compareProduct(obj as any as IProduct, converted);
                        }
                        // console.log(`dirtyFields`, Object.keys(dirtyFields));
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
