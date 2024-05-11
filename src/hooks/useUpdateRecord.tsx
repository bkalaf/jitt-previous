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

export function useUpdateRecord<T extends MRT_RowData>(table: MRT_TableInstance<T>) {
    const collection = useCollectionRoute();
    const convert = useConvert('object', collection);
    const db = useLocalRealm();
    const [, updater] = useUpdater<T>();
    const { mutateAsync } = useMutation({
        mutationFn: (values: T) => {
            return new Promise<RealmObj<T>>((resolve) => {
                if (db == null) throw new Error('no db');
                console.log(`values`, values);
                const converted = convert(values);
                db.write(() => {
                    const result = db.create<T>(collection, converted, UpdateMode.All);
                    return resolve(updater(db, result));
                });
            });
        }
    });
    const successMessage = useSuccessNotification((result: T) => `1 new record created: ${result._objectKey()}`);
    const failureMessage = useFailureNotification((errors: FieldErrors<T>) => {
        console.error(errors);
        console.error(errors.root);
        return [errors.root?.message].join('\n');
    });
    const onSuccess = useCallback(
        async (values: T) => {
            const result = await mutateAsync(values);
            successMessage(result);
            table.setCreatingRow(null);
        },
        [mutateAsync, successMessage, table]
    );
    const onError = useCallback(
        async (errors: FieldErrors<T>) => {
            failureMessage(errors);
        },
        [failureMessage]
    );
    return {
        onSuccess,
        onError,
        handleSubmit: mutateAsync
    };
}
