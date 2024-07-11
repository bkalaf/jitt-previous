import { convertProduct } from './OldProductDetailsTab';
import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { useMemo } from 'react';
import { useForm, DefaultValues, FormProvider } from 'react-hook-form';
import { Product } from '../schema/entity/product';
import { IProduct } from '../types';
import { Grid, Button } from '@mui/material';
import { EditControls } from '../components/controls/EditControls';
import { Item } from './Grid';
import { useUpdateRecord } from './useUpdateRecord';
import { BSON } from 'realm';
import { useTabContext } from '@mui/lab';
import { deepEqual } from '../common/deepEqual';

export function renderProductDetailTabPanel(DetailCtor: DetailsClass) {
    const { label, columns, type } = DetailCtor;
    return function ProductDetailTabPanel<T extends MRT_RowData & { _id: BSON.ObjectId }>(props: Parameters<Exclude<MRT_TableOptions<T>['renderDetailPanel'], undefined>>[0]) {
        useWhyDidIUpdate('ProductDetailTabPanel', props);
        const currentTabValue = useTabContext();
        const values = useMemo(() => convertProduct(props.row.original as any), [props.row.original]);
        const formContext = useForm({
            defaultValues: Product.init() as DefaultValues<IProduct>,
            values
        });
        const { handleSubmit } = useUpdateRecord<T>(formContext, props.row.id, props.table);
        const onSubmit = useMemo(
            () =>
                formContext.handleSubmit((data) => {
                    handleSubmit(data);
                }),
            [formContext, handleSubmit]
        );
        return (
            deepEqual(currentTabValue as any, type as any) && (
                <FormProvider {...formContext}>
                    <h3 className='flex w-full items-center justify-center text-lg font-extrabold'>{label}</h3>
                    <Grid columns={4} gap={2} className='w-screen'>
                        <EditControls columns={columns} />
                        <Item className='col-span-4 col-start-1 flex w-full justify-center'>
                            <Button type='button' variant='contained' color='metal' disabled={!formContext.formState.isDirty} onClick={onSubmit}>
                                Submit
                            </Button>
                        </Item>
                    </Grid>
                </FormProvider>
            )
        );
    };
}
