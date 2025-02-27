import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import React, { useMemo } from 'react';
import { DefaultValues, FormProvider, UseFieldArrayReturn, useForm } from 'react-hook-form';
import { useInitial } from '../../hooks/useInitial';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { groupCol } from '../../schema/defs/groupCol';
import { is } from '../../common/is';
import { useConvertDictionaryItem } from '../../hooks/useConvertDictionaryItem';
import { useConvertListItem } from '../../hooks/useConvertListItem';
import { EditControls } from './EditControls';
import { useLogger } from '../../hooks/useLogger';
import { resolveColumns } from './resolveColumns';
import { ColumnMeta } from '@tanstack/table-core';

export function DBDictionaryEditSubComponent<T extends MRT_RowData, TValue>(props: {
    append: (data: { key: string; value: TValue }) => void;
    // index: number;
    // value: Record<string, any>;
    columns: JITTColumns<T>;
    open: boolean;
    toggleOpen: () => void;
    objectType: string;
    KeyControl: React.FunctionComponent<EditFunctionParams<any>>;
    keyType?: string;
    enumInfo?: ColumnMeta<any, any>['enumInfo']
}) {
    const logger = useLogger();
    useWhyDidIUpdate('DLListEditSubComponent', props);
    logger(`DBListEditSubComponent`, props.objectType);
    const { append, toggleOpen, open, columns, objectType, KeyControl, keyType, enumInfo } = props;
    const dictionaryColumns = useMemo(
        () =>
            [
                {
                    accessorKey: 'key',
                    Edit: KeyControl,
                    header: 'Key',
                    meta: {
                        columnName: 'key',
                        keyType: keyType,
                        enumInfo: enumInfo
                    }
                } as MRT_ColumnDef<any>,
                ...(is.primitive(objectType) ? resolveColumns(columns) : [groupCol(createMRTColumnHelper<{ value: TValue }>(), 'Value', columns as any, 'value', 'bg-yellow-500', 'text-black')()])
            ] as MRT_ColumnDef<any>[],
        [KeyControl, columns, enumInfo, keyType, objectType]
    );
    const convertAppend = useConvertDictionaryItem(objectType, append);
    // console.log(`init`, objectType);
    const init = useInitial<T>(objectType);
    const defaultValues = useMemo(() => init(), [init]);
    const formContext = useForm({
        defaultValues: {
            key: '',
            ...(is.primitive(objectType) ? defaultValues : (
                {
                    value: defaultValues as DefaultValues<T>
                }
            ))
        } as any
    });
    logger(`formContext.getValues()`, JSON.stringify(formContext.getValues(), null, '\t'));
    return (
        <FormProvider {...formContext}>
            <form>
                <Dialog open={open} onClose={toggleOpen}>
                    <DialogTitle>Insert New List Item</DialogTitle>
                    <DialogContent>
                        <EditControls columns={dictionaryColumns} />
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' variant='contained' className='inline-flex' color='metal' onClick={toggleOpen}>
                            Cancel
                        </Button>
                        <Button
                            type='button'
                            className='inline-flex'
                            variant='contained'
                            color='metal'
                            onClick={formContext.handleSubmit((data) => {
                                // console.info(`handleSubmit(data) = `, data);
                                convertAppend(data as any);
                                toggleOpen();
                            })}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </FormProvider>
    );
}
export function DBListEditSubComponent<T extends MRT_RowData>(props: {
    // control: Control<FieldValues, any>;
    finalCallback: UseFieldArrayReturn['append'];
    // index: number;
    // value: Record<string, any>;
    columns: JITTColumns<T>;
    open: boolean;
    toggleOpen: () => void;
    objectType: string;
}) {
    const logger = useLogger();
    useWhyDidIUpdate('DLListEditSubComponent', props);
    logger(`DBListEditSubComponent`, props.objectType);
    const { finalCallback, toggleOpen, open, columns, objectType } = props;
    const convertValue = useConvertListItem(objectType);
    const init = useInitial<T>(objectType);
    const defaultValues = useMemo(() => init(), [init]);
    const formContext = useForm({
        defaultValues: defaultValues as DefaultValues<T>
    });
    logger(`formContext.getValues()`, JSON.stringify(formContext.getValues(), null, '\t'));
    // const EditComps = function () {
    //     return (
    //         <>
    //             {columns.map((x, index) => {
    //                 const Edit = x.Edit;
    //                 if (Edit == null) return null;
    //                 return <Edit key={index} cell={undefined as any} row={undefined as any} table={undefined as any} column={{ columnDef: x as any } as any} />;
    //             })}
    //         </>
    //     );
    // };
    return (
        <FormProvider {...formContext}>
            <form>
                <Dialog open={open} onClose={toggleOpen}>
                    <DialogTitle>Insert New List Item</DialogTitle>
                    <DialogContent>
                        <EditControls columns={resolveColumns(columns)} />
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' variant='contained' className='inline-flex' color='metal' onClick={toggleOpen}>
                            Cancel
                        </Button>
                        <Button
                            type='button'
                            className='inline-flex'
                            variant='contained'
                            color='metal'
                            onClick={formContext.handleSubmit((data) => {
                                // console.info(`handleSubmit(data) = `, data);
                                const converted = convertValue(data as any);
                                // console.info(`convertedValue`, converted);
                                finalCallback(converted);
                                toggleOpen();
                            })}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </FormProvider>
    );
}
