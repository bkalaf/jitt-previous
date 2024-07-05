import { Button } from '@mui/material';
import { IProduct } from '../types';
import { useLocalRealm } from './useLocalRealm';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';
import { runTransaction } from '../util/runTransaction';
import { useConvert } from './useConvert';
import { Realm } from 'realm';
import { Grid, Item } from './Grid';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { Product } from '../schema/entity/product';
import { EditControls } from '../components/controls/EditControls';
import { toJSON } from '../components/Views/renderProperties/toJSON';
import { useDirectStaticColumns } from './useDirectStaticColumns';

export function convertProduct(product: IProduct & Realm.Object<IProduct>) {
    const { testedOn, ...rest } = toJSON(product);
    return {
        ...rest,
        detailTypes: product.detailTypes,
        testedOn: testedOn == null ? undefined : dayjs(testedOn)
    };
}

export function ProductDetailsTab(props: { isCurrent: boolean; original: IProduct; objectType: string }) {
    const { original, objectType } = props;
    const columns = useDirectStaticColumns(objectType);
    // const columns = useDirectColumns(objectType);
    const defaultValues = useMemo(() => convertProduct(original as any), [original]);
    const formContext = useForm({
        defaultValues: Product.init() as DefaultValues<IProduct>,
        values: defaultValues
    });
    const convert = useConvert('object', 'product');
    const db = useLocalRealm();
    return (
        props.isCurrent && (
            <FormProvider {...formContext}>
                <Grid columns={4} gap={2} className='w-screen'>
                    <EditControls columns={columns} />
                    <Item className='flex justify-center w-full col-span-4 col-start-1'>
                        <Button
                            type='button'
                            variant='contained'
                            color='metal'
                            disabled={!formContext.formState.isDirty}
                            onClick={formContext.handleSubmit((data) => {
                                console.info('data', data);
                                const converted = convert(data);
                                console.info('converted', converted);
                                const func = () => {
                                    db.create('product', converted, Realm.UpdateMode.Modified);
                                };
                                runTransaction(db, func);
                            })}>
                            Submit
                        </Button>
                    </Item>
                </Grid>
            </FormProvider>
        )
    );
}
