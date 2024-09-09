import { useCallback } from 'react';
import { MRT_RowData } from 'material-react-table';
import { useMutation } from '@tanstack/react-query';
import { FieldErrors } from 'react-hook-form';
import { useFailureNotification } from './useFailureNotification';
import { useSuccessNotification } from './useSuccessNotification';
import { useLocalRealm } from './useLocalRealm';
import { useConvert } from './useConvert';
import { runTransaction } from '../util/runTransaction';
import { useInvalidateCollection } from './useInvalidateCollection';

export function useRealmCreateListItem<T extends MRT_RowData>(objectType: string, toggleDialog: () => void, original: any, propertyName: string, appendItem: (original: any, propertyName: string, list: DBList<T> | T[], item: T) => DBList<T> | T[], list: DBList<T> | T[] = []) {
    const convert = useConvert('object', objectType);
    const db = useLocalRealm();
    const successMessage = useSuccessNotification((obj: RealmObj<any>) => `1 new record created. [${obj?._id?.toHexString()}]`, objectType);
    const invalidator = useInvalidateCollection(objectType);
    const failureMessage = useFailureNotification((errors: FieldErrors<T>) => {
        // console.error(errors);
        // console.error(errors.root);
        return [errors.root?.message].join('\n');
    });
    const onSuccess = useCallback(
        async (result: DBList<T> | T[]) => {
            successMessage(result);
            invalidator().finally(toggleDialog);
        },
        [invalidator, successMessage, toggleDialog]
    );
    const onError = useCallback(
        async (errors: FieldErrors<T>) => {
            failureMessage(errors);
        },
        [failureMessage]
    );
    const { mutate } = useMutation({
        mutationFn: (values: T) => {
            return new Promise<DBList<T> | T[]>((resolve) => {
                if (db == null) throw new Error('no db');
                // console.log(`values`, values);
                const converted = convert(values);
                const func = () => {
                    const result = appendItem(original, propertyName, list, converted);
                    console.log(`result`, result);
                    return resolve(result);
                };
                runTransaction(db, func);
            });
        },
        onSuccess,
        onError
    });
    return mutate;
}
