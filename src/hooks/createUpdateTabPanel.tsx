import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { convertProduct } from './OldProductDetailsTab';
import { Grid, Item } from './Grid';
import { Button } from '@mui/material';
import { EditControls } from '../components/controls/EditControls';
import { useUpdateRecord } from './useUpdateRecord';
import { BSON } from 'realm';

export function createUpdateTabPanel<T extends MRT_RowData>(columns: MRT_ColumnDef<any>[]) {
    return function UpdateRecordPanel(props: RenderDetailTabPanelProps<T>) {
        const initialValues = useMemo(() => convertProduct(props.row.original as any), [props.row.original]);
        const formContext = useForm<T>({
            defaultValues: initialValues
        });
        const { handleSubmit } = useUpdateRecord<T & { _id: BSON.ObjectId }>(formContext as any, props.row.id, props.table as any, true, 'product');
        const onClick = useMemo(() => formContext.handleSubmit((data) => handleSubmit(data as any)), [formContext, handleSubmit]);

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
