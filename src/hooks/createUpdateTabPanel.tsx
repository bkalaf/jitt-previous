import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useCallback, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { convertProduct } from './OldProductDetailsTab';
import { Grid, Item } from './Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, getBottomNavigationActionUtilityClass } from '@mui/material';
import { EditControls } from '../components/controls/EditControls';
import { useUpdateRecord } from './useUpdateRecord';
import { BSON } from 'realm';
import { IRn } from '../types';
import prompt from 'electron-prompt';
import { ipcRenderer } from 'electron';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalRealm } from './useLocalRealm';
import { useInvalidateCollection } from './useInvalidateCollection';
import { DetailsTypes } from '../schema/enums';

export function createUpdateTabPanel<T extends MRT_RowData>(columns: MRT_ColumnDef<any>[], type: DetailsTypes) {
    return function UpdateRecordPanel(props: RenderDetailTabPanelProps<T>) {
        const initialValues = useMemo(() => convertProduct(props.row.original as any), [props.row.original]);
        const formContext = useForm<T>({
            defaultValues: initialValues
        });
        const { handleSubmit } = useUpdateRecord<T & { _id: BSON.ObjectId }>(formContext as any, props.row.id, props.table as any, true, 'product');
        const onClick = useMemo(() => formContext.handleSubmit((data) => handleSubmit(data as any)), [formContext, handleSubmit]);
        const db = useLocalRealm();
        const { data } = useSuspenseQuery({
            queryKey: ['rn', 'rnNos' ],
            queryFn: () => {
                return Promise.resolve(db.objects<IRn>('rn').map((x) => x.no));
            }
        });
        const invalidator = useInvalidateCollection('rn');
        const addRn = useCallback(() => {
            prompt({
                title: 'ADD RN',
                type: 'input',
                inputAttrs: {
                    type: 'number'
                },
                label: 'RN #'
            }).then((result: string | null) => {
                if (data.includes(parseInt(result ?? '0', 10))) {
                    alert('RN Table already contains this value.');
                } else {
                    ipcRenderer.invoke('import-rn', result).then(() => invalidator());
                }                
            });
        }, [data, invalidator]);
        return (
            <FormProvider {...formContext}>
                <Grid columns={4} gap={2} className='w-full'>
                    {type === 'apparel' ?
                        <div className='col-span-4 flex justify-center'>
                            <Button type='button' variant='contained' color='metal' onClick={addRn}>
                                Add RN
                            </Button>
                        </div>
                    :   null}
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
