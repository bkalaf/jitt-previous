import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form-mui';
import { useCollectionRoute } from '../../../hooks/useCollectionRoute';
import { useCallback } from 'react';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useInitial } from '../../../hooks/useInitial';
import { toJSON } from './toJSON';
import { camelToProper } from '../../../common/text/camelToProper';
import { BSON } from 'realm';
import { useUpdateRecord } from '../../../hooks/useUpdateRecord';

export function createRenderEditRowDialogContent<T extends MRT_RowData>() {
    return function RenderEditRowDialogContent(props: Parameters<Exclude<MRT_TableOptions<T>['renderCreateRowDialogContent'], undefined>>[0]) {
        useWhyDidIUpdate('RenderEditRowDialogContent', props);
        const { table, internalEditComponents, row } = props;
        const collection = useCollectionRoute();
        const init = useInitial(collection);
        const defaultValues = toJSON(row.original) as DefaultValues<any>;
        const formContext = useForm({
            defaultValues: init(),
            values: defaultValues,
            criteriaMode: 'all',
            mode: 'onSubmit',
            reValidateMode: 'onChange'
        });
        const { handleSubmit } = useUpdateRecord<T & { _id: BSON.ObjectId }>(formContext, props.row.id, props.table as any);
        // const convert = useConvert('object', collection);
        // const invalidator = useInvalidateCollection();
        // const { mutate } = useMutation({
        //     onSuccess: () => invalidator(),
        //     onError: (error: Error) => console.error(error),
        //     mutationFn: (data: FieldValues) => {
        //         console.log(`onSubmit:data`, data);
        //         const converted = convert(data);
        //         console.log(`onSubmit.converted`, converted);
        //         console.log(`props`, props);
        //         const obj = realm.objectForPrimaryKey(collection, new BSON.ObjectId(props.row.id));
        //         if (obj == null) throw new Error(`no object for ${collection} ${props.row.id}`);
        //         const func = () => {
        //             if (obj == null) throw new Error(`no object for ${collection} ${props.row.id}`);
        //             const dirty = formContext.formState.dirtyFields;

        //             console.log('dirtyFields', JSON.stringify(dirty, null, '\t'));
        //             const keys = Object.keys(dirty) as string[];
        //             for (const key of keys) {
        //                 const propType = obj.getPropertyType(key);
        //                 console.log(propType);
        //                 if (propType.startsWith('list')) {
        //                     const next = getProperty(key, converted) as any[];
        //                     const curr = getProperty(key, obj) as DBList<any>;
        //                     const added = next.filter((x) => curr.every((y) => !deepEqual(x, y)));
        //                     const removed = curr.filter((x) => next.every((y) => !deepEqual(x, y)));
        //                     for (const element of removed) {
        //                         const index = curr.indexOf(element);
        //                         curr.remove(index);
        //                     }
        //                     curr.push(...added);
        //                 } else {
        //                     obj[key] = getProperty(key, converted);
        //                 }
        //             }
        //             // realm.create(collection, converted, UpdateMode.Modified);
        //         };
        //         runTransaction(realm, func);
        //         return Promise.resolve();
        //     }
        // });
        const onCancel = useCallback(() => {
            table.setEditingRow(null);
        }, [table]);
        const onSubmit = useCallback(
            (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                ev.preventDefault();
                ev.stopPropagation();
                formContext.handleSubmit((data) => handleSubmit(data))(ev);
            },
            [formContext, handleSubmit]
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
                            <Box className='flex w-full justify-end gap-x-2'>
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
