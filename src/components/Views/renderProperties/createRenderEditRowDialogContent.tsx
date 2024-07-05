import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form-mui';
import { useCollectionRoute } from '../../../hooks/useCollectionRoute';
import { useCallback } from 'react';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { useConvert } from '../../../hooks/useConvert';
import { runTransaction } from '../../../util/runTransaction';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { useInitial } from '../../../hooks/useInitial';
import { toJSON } from './toJSON';
import { camelToProper } from '../../../common/text/camelToProper';
import { getProperty } from '../../../common/object/getProperty';
import { BSON } from 'realm';

export function createRenderEditRowDialogContent<T extends MRT_RowData>() {
    return function RenderEditRowDialogContent(props: Parameters<Exclude<MRT_TableOptions<T>['renderCreateRowDialogContent'], undefined>>[0]) {
        useWhyDidIUpdate('RenderEditRowDialogContent', props);
        const { table, internalEditComponents, row } = props;
        console.info(`internalEditComponents`, internalEditComponents);
        const collection = useCollectionRoute();
        const init = useInitial(collection);
        const realm = useLocalRealm();
        const defaultValues = toJSON(row.original) as DefaultValues<any>;
        const formContext = useForm({
            defaultValues: init(),
            values: defaultValues,
            criteriaMode: 'all',
            mode: 'onSubmit',
            reValidateMode: 'onChange'
        });
        const convert = useConvert('object', collection);
        const invalidator = useInvalidateCollection();
        const { mutate } = useMutation({
            onSuccess: () => invalidator(),
            onError: (error: Error) => console.error(error),
            mutationFn: (data: FieldValues) => {
                console.log(`onSubmit:data`, data);
                const converted = convert(data);
                console.log(`onSubmit.converted`, converted);
                console.log(`props`, props);
                const obj = realm.objectForPrimaryKey(collection, new BSON.ObjectId(props.row.id));
                if (obj == null) throw new Error(`no object for ${collection} ${props.row.id}`);
                const func = () => {
                    if (obj == null) throw new Error(`no object for ${collection} ${props.row.id}`);
                    const dirty = formContext.formState.dirtyFields;
                    console.log('dirtyFields', JSON.stringify(dirty, null, '\t'));
                    const keys = Object.keys(dirty) as string[];
                    for (const key of keys) {
                        obj[key] = getProperty(key, converted);
                    }
                    // realm.create(collection, converted, UpdateMode.Modified);
                };
                runTransaction(realm, func);
                return Promise.resolve();
            }
        });
        const onCancel = useCallback(() => {
            table.setEditingRow(null);
        }, [table]);
        const onSubmit = useCallback(
            (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                ev.preventDefault();
                ev.stopPropagation();
                formContext.handleSubmit((data) => mutate(data, { onSuccess: () => table.setEditingRow(null) }))(ev);
            },
            [formContext, mutate, table]
        );
        const onReset = useCallback(
            (ev: MouseButtonEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                formContext.reset();
            },
            [formContext]
        );
        return (
            props.table.getState().editingRow != null && (
                <FormProvider {...formContext}>
                    <form>
                        <DialogTitle>{camelToProper(collection)}</DialogTitle>
                        <DialogContent>{internalEditComponents}</DialogContent>
                        <DialogActions>
                            {/* <MRT_EditActionButtons row={row} variant='text' table={table} /> */}
                            <Box className='flex justify-end w-full gap-x-2'>
                                <Button className='inline-flex' type='button' color='metal' onClick={onCancel}>
                                    Cancel
                                </Button>
                                <Button className='inline-flex' type='button' color='metal' onClick={onReset}>
                                    Reset
                                </Button>
                                <Button className='inline-flex' type='button' onClick={onSubmit} color='metal'>
                                    Submit
                                </Button>
                            </Box>
                        </DialogActions>
                    </form>
                </FormProvider>
            )
        );
    };
}
