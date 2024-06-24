import { Button } from '@mui/material';
import { IProduct } from '../types';
import { useLocalRealm } from './useLocalRealm';
import { FormProvider, useForm } from 'react-hook-form';
import { runTransaction } from '../util/runTransaction';
import { toEdit } from '../components/controls/DBListEditSubComponent';
import { useConvert } from './useConvert';
import { Realm } from 'realm';
import { Grid, Item } from './Grid';
import { useDirectColumns } from './useColumns';

export function ProductDetailsTab(props: { original: IProduct; objectType: string }) {
    const { original, objectType } = props;
    const columns = useDirectColumns(objectType);
    const formContext = useForm({
        defaultValues: (original as any).toJSON()
    });
    const convert = useConvert('object', 'product');
    const db = useLocalRealm();
    return (
        <FormProvider {...formContext}>
            <Grid columns={4} gap={2} className='w-screen'>
                {columns.map((def, ix) => (
                    <Item key={ix}>{toEdit(def)}</Item>
                ))}
                <Item className='col-span-4 col-start-1 flex w-full justify-center'>
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
    );
}
