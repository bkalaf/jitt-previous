import { MRT_ColumnDef } from 'material-react-table';
import { IProduct } from '../types';
import { useCallback, useMemo } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { convertProduct } from './OldProductDetailsTab';
import { useConvert } from './useConvert';
import { useLocalRealm } from './useLocalRealm';
import { useUpdateEntity } from './useUpdateEntity';
import { useFailureNotification } from './useFailureNotification';
import { useSuccessNotification } from './useSuccessNotification';
import { useMutation } from '@tanstack/react-query';
import { getProperty } from '../common/object/getProperty';
import { runTransaction } from '../util/runTransaction';
import { Grid, Item } from './Grid';
import { Button } from '@mui/material';
import { EditControls } from '../components/controls/EditControls';


export function createUpdateTabPanel(columns: MRT_ColumnDef<any>[]) {
    return function UpdateRecordPanel(props: RenderDetailTabPanelProps) {
        const initialValues = useMemo(() => convertProduct(props.row.original), []);
        const formContext = useForm({
            defaultValues: initialValues
        });
        const convert = useConvert('object', 'product');
        const { dirtyFields } = formContext.formState;
        const db = useLocalRealm();
        const updater = useUpdateEntity<IProduct>('product');
        const successMessage = useSuccessNotification((obj: RealmObj<any>) => `1 new record created. [${obj._id.toHexString()}]`, 'product');
        const failureMessage = useFailureNotification((errors: FieldErrors<any>) => {
            console.error(errors);
            console.error(errors.root);
            return [errors.root?.message].join('\n');
        });
        const onSuccess = useCallback(
            async (result: IProduct) => {
                successMessage(result);
            },
            [successMessage]
        );
        const onError = useCallback(
            async (errors: FieldErrors<any>) => {
                failureMessage(errors);
            },
            [failureMessage]
        );
        const { mutate } = useMutation({
            mutationFn: (values: IProduct) => {
                return new Promise<IProduct>((resolve) => {
                    if (db == null) throw new Error('no db');
                    console.log(`values`, values);
                    const converted = convert(values);
                    const func = () => {
                        if (props.row.original == null) throw new Error('could not find record');
                        Object.keys(dirtyFields).map((field) => {
                            (props.row.original as any)[field] = getProperty(field, converted);
                        });
                        return resolve(updater(props.row.original));
                    };
                    runTransaction(db, func);
                });
            },
            onSuccess,
            onError
        });
        const onClick = useCallback(() => {
            formContext.handleSubmit((data) => mutate(data));
        }, []);

        return (
            <FormProvider {...formContext}>
                <Grid columns={4} gap={2} className='w-full'>
                    <EditControls columns={columns} />
                    <Item className='col-span-4 col-start-1 flex w-full justify-center'>
                        <Button type='button' variant='contained' color='metal' disabled={!formContext.formState.isDirty} onClick={onClick}>
                            Submit
                        </Button>
                    </Item>
                </Grid>
            </FormProvider>
        );
    };
}
