import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { useMemo } from 'react';
import { DefaultValues, FormProvider, UseFieldArrayReturn, useForm } from 'react-hook-form';
import { useInitial } from '../../hooks/useInitial';
import { useConvertDictionaryItem, useConvertListItem } from '../../hooks/useConvert';
import { useLogger, useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { groupCol } from '../../schema/defs/groupCol';
import { is } from '../../common/is';

export function toEdit<T extends MRT_RowData>(def: MRT_ColumnDef<T>): React.ReactNode {
    if (def.columns) {
        return <>{def.columns.map(toEdit)}</>;
    }
    if (def.Edit == null) {
        return null;
    }
    const EditCntrl = def.Edit;
    return <EditCntrl cell={undefined as any} row={undefined as any} table={undefined as any} column={{ columnDef: def as any } as any} />;
}
export function EditControls<T extends MRT_RowData>(props: { columns: MRT_ColumnDef<T>[] }) {
    return <>{props.columns.map((x) => toEdit(x))}</>;
}

export function DBDictionaryEditSubComponent<T extends MRT_RowData, TValue>(props: {
    append: (data: { key: string; value: TValue }) => void;
    // index: number;
    // value: Record<string, any>;
    columns: MRT_ColumnDef<T>[];
    isOpen: boolean;
    handleClose: () => void;
    objectType: string;
    KeyControl: React.FunctionComponent<EditFunctionParams<any>>;
    keyType?: string;
}) {
    const logger = useLogger();
    useWhyDidIUpdate('DLListEditSubComponent', props);
    logger(`DBListEditSubComponent`, props.objectType);
    const { append, handleClose, isOpen, columns, objectType, KeyControl, keyType } = props;
    const dictionaryColumns = useMemo(
        () =>
            [
                {
                    accessorKey: 'key',
                    Edit: KeyControl,
                    header: 'Key',
                    meta: {
                        columnName: 'key',
                        keyType: keyType
                    }
                } as MRT_ColumnDef<any>,
                ...(is.primitive(objectType) ? columns : [groupCol(createMRTColumnHelper<{ value: TValue }>(), 'Value', columns, 'value', 'bg-yellow-500', 'text-black')])
            ] as MRT_ColumnDef<any>[],
        [KeyControl, columns, keyType, objectType]
    );
    const convertAppend = useConvertDictionaryItem(objectType, append);
    console.log(`init`, objectType);
    const init = useInitial<T>(objectType);
    const defaultValues = useMemo(() => init(), [init]);
    const formContext = useForm({
        defaultValues: {
            key: '',
            ...is.primitive(objectType) ? defaultValues : {
                value: defaultValues as DefaultValues<T>
            }
        } as any
    });
    logger(`formContext.getValues()`, JSON.stringify(formContext.getValues(), null, '\t'));
    return (
        <FormProvider {...formContext}>
            <form>
                <Dialog open={isOpen} onClose={handleClose}>
                    <DialogTitle>Insert New List Item</DialogTitle>
                    <DialogContent>
                        <EditControls columns={dictionaryColumns} />
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' variant='contained' className='inline-flex' color='metal' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            type='button'
                            className='inline-flex'
                            variant='contained'
                            color='metal'
                            onClick={formContext.handleSubmit((data) => {
                                console.info(`handleSubmit(data) = `, data);
                                convertAppend(data as any);
                                handleClose();
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
    append: UseFieldArrayReturn['append'];
    // index: number;
    // value: Record<string, any>;
    columns: MRT_ColumnDef<T>[];
    isOpen: boolean;
    handleClose: () => void;
    objectType: string;
}) {
    const logger = useLogger();
    useWhyDidIUpdate('DLListEditSubComponent', props);
    logger(`DBListEditSubComponent`, props.objectType);
    const { append, handleClose, isOpen, columns, objectType } = props;
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
                <Dialog open={isOpen} onClose={handleClose}>
                    <DialogTitle>Insert New List Item</DialogTitle>
                    <DialogContent>
                        <EditControls columns={columns} />
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' variant='contained' className='inline-flex' color='metal' onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            type='button'
                            className='inline-flex'
                            variant='contained'
                            color='metal'
                            onClick={formContext.handleSubmit((data) => {
                                console.info(`handleSubmit(data) = `, data);
                                const converted = convertValue(data as any);
                                console.info(`convertedValue`, converted);
                                append(converted);
                                handleClose();
                            })}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </FormProvider>
    );
}
