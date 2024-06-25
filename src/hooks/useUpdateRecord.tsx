import { useCallback } from 'react';
import { MRT_RowData, MRT_TableInstance } from 'material-react-table';
import { useMutation } from '@tanstack/react-query';
import { UpdateMode } from 'realm';
import { useCollectionRoute } from './useCollectionRoute';
import { FieldErrors } from 'react-hook-form';
import { useUpdater } from './useUpdater';
import { useFailureNotification } from './useFailureNotification';
import { useSuccessNotification } from './useSuccessNotification';
import { useLocalRealm } from './useLocalRealm';
import { useConvert } from './useConvert';
import { runTransaction } from '../util/runTransaction';

export function useUpdateRecord<T extends MRT_RowData>(table: MRT_TableInstance<T>) {
    const collection = useCollectionRoute();
    const convert = useConvert('object', collection);
    const db = useLocalRealm();
    const [, updater] = useUpdater<T>();
    const successMessage = useSuccessNotification((obj: RealmObj<any>) => `1 new record created. [${obj._id.toHexString()}]`, collection);
    const failureMessage = useFailureNotification((errors: FieldErrors<T>) => {
        console.error(errors);
        console.error(errors.root);
        return [errors.root?.message].join('\n');
    });
    const onSuccess = useCallback(
        async (result: T) => {
            table.setCreatingRow(null);
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
            return new Promise<RealmObj<T>>((resolve) => {
                if (db == null) throw new Error('no db');
                console.log(`values`, values);
                const converted = convert(values);
                const func = () => {
                    const result = db.create<T>(collection, converted, UpdateMode.Modified);
                    return resolve(updater(result));
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
