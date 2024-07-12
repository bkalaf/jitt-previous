import { useCallback } from 'react';
import { MRT_RowData } from 'material-react-table';
import { useMutation } from '@tanstack/react-query';
import { UpdateMode } from 'realm';
import { FieldErrors } from 'react-hook-form';
import { useUpdateEntity } from './useUpdateEntity';
import { useFailureNotification } from './useFailureNotification';
import { useSuccessNotification } from './useSuccessNotification';
import { useLocalRealm } from './useLocalRealm';
import { useConvert } from './useConvert';
import { runTransaction } from '../util/runTransaction';
import { useInvalidateCollection } from './useInvalidateCollection';


export function useRealmCreate<T extends MRT_RowData>(objectType: string, toggleDialog: () => void, finalCallback: (result: T) => void) {
    const convert = useConvert('object', objectType);
    const db = useLocalRealm();
    const updater = useUpdateEntity<T>(objectType);
    const successMessage = useSuccessNotification((obj: RealmObj<any>) => `1 new record created. [${obj._id.toHexString()}]`, objectType);
    const invalidator = useInvalidateCollection(objectType);
    const failureMessage = useFailureNotification((errors: FieldErrors<T>) => {
        // console.error(errors);
        // console.error(errors.root);
        return [errors.root?.message].join('\n');
    });
    const onSuccess = useCallback(
        async (result: T) => {
            successMessage(result);
            finalCallback(result);
            invalidator().finally(toggleDialog);
        },
        [finalCallback, invalidator, successMessage, toggleDialog]
    );
    const onError = useCallback(
        async (errors: FieldErrors<T>) => {
            failureMessage(errors);
        },
        [failureMessage]
    );
    const { mutate } = useMutation({
        mutationFn: (values: T) => {
            return new Promise<T>((resolve) => {
                if (db == null) throw new Error('no db');
                // console.log(`values`, values);
                const converted = convert(values);
                const func = () => {
                    const result = db.create<T>(objectType, converted, UpdateMode.Modified);
                    return resolve(updater(result as T));
                };
                runTransaction(db, func);
            });
        },
        onSuccess,
        onError
    });
    return mutate;
}
