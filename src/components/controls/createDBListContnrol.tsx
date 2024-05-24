import { Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemIcon, ListItemText, ListSubheader, PaperProps, TableContainerProps, TableProps } from '@mui/material';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { MRT_Column, MRT_Cell, useMaterialReactTable, MaterialReactTable, createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import React, { useCallback, useMemo } from 'react';
import { IconBtn } from '../IconBtn';
import { faCircleDot, faPlusSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { is } from '../../common/is';
import { useInvalidateCollection } from '../../hooks/useInvalidateCollection';
import { useColumns } from '../../hooks/useColumns';
import { runTransaction } from '../../util/runTransaction';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { createRenderCreateRowDialogContentNestedForList } from '../Views/renderProperties/createRenderCreateRowDialogContentNestedForList';
import { useEditControl } from '../../hooks/useEditControl';
import { useListItemComponent } from '../../hooks/useListItemComponent';
import { useStopAndPrevent } from '../../hooks/useStopAndPrevent';
import { isPrimitive } from '../../schema/conversion/cnvrt';
import { freeSoloCol } from '../../schema/defs/freeSoloCol';
import { stringCol } from '../../schema/defs/stringCol';
import { enumCol } from '../../schema/defs/enumCol';
import { useFieldArrayControl } from './useControl';
import { DefaultValues, FormProvider, UseFieldArrayReturn, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToggler } from './useToggler';
import { useInitial } from '../../hooks/useInitial';

const h = createMRTColumnHelper<{ key: string; value: any }>();
const helper = {
    string: stringCol(h),
    freeSolo: freeSoloCol(h),
    enum: enumCol(h)
};

const keyColumn = helper.string('key', 'Key', undefined, { required: true });
const facetedKeyColumn = helper.freeSolo('key', 'Key', (x: string, y: string) => x.localeCompare(y) as Compared, { required: true });
const enumColumn = (emap: EnumMap) => helper.enum('key', 'Key', { options: emap, required: true });

export function useDictionaryColumns(objectType: string, faceted: boolean, enumMap?: EnumMap) {
    const valueColumns = useColumns<any>(objectType);
    const kColumn = useMemo(() => (enumMap != null ? enumColumn(enumMap) : faceted ? facetedKeyColumn : keyColumn), [enumMap, faceted]);
    const columns = useMemo(
        () =>
            isPrimitive(objectType)
                ? [kColumn, ...valueColumns]
                : [
                      kColumn,
                      h.group({
                          header: 'Value',
                          id: 'value',
                          columns: valueColumns
                      })
                  ],
        [kColumn, objectType, valueColumns]
    );
    return columns as MRT_ColumnDef<any, any>[];
}

export function RealmListEdit<T extends MRT_RowData>(props: {
    // control: Control<FieldValues, any>;
    append: UseFieldArrayReturn['append'];
    // index: number;
    // value: Record<string, any>;
    columns: MRT_ColumnDef<T, any>[];
    isOpen: boolean;
    handleClose: () => void;
    objectType: string;
}) {
    const { append, handleClose, isOpen, columns, objectType } = props;
    const init = useInitial<T>(objectType);
    const defaultValues = useMemo(() => init(), [init]);
    const formContext = useForm({
        defaultValues: defaultValues as DefaultValues<T>
    });
    const EditComps = function () {
        return (
            <>
                {columns.map((x, index) => {
                    const Edit = x.Edit;
                    return function EditComponent() {
                        if (Edit == null) return null;
                        return <Edit key={index} cell={undefined as any} row={undefined as any} table={undefined as any} column={{ columnDef: x as any } as any} />;
                        // eslint-disable-next-line @typescript-eslint/ban-types
                    } as React.FunctionComponent<{}>;
                })}
            </>
        );
    };
    return (
        <FormProvider {...formContext}>
            <form>
                <Dialog open={isOpen} onClose={handleClose}>
                    <DialogTitle>Insert New List Item</DialogTitle>
                    <DialogContent>
                        <EditComps />
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' className='inline-flex' color='metal' onClick={formContext.handleSubmit((data) => append(data))} />
                    </DialogActions>
                </Dialog>
            </form>
        </FormProvider>
    );
}
export function RealmListItem(props: { remove: UseFieldArrayReturn['remove']; index: number; value: Record<string, any>; objectType: string }) {
    const { index, value, remove, objectType } = props;
    const onDelete = useCallback(
        (ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            remove(index);
        },
        [index, remove]
    );
    const LiComp = useListItemComponent(objectType);
    const Primary = LiComp(value);
    return (
        <ListItem key={value.id} secondaryAction={<IconBtn icon={faTrashCan} color='success' tooltip='Delete item' onClick={onDelete} />}>
            <ListItemIcon>
                <FontAwesomeIcon icon={faCircleDot} />
            </ListItemIcon>
            <ListItemText primary={<Primary />} />
        </ListItem>
    );
}

export function createRealmListControl<T extends MRT_RowData, TValue>() {
    return function RealmListControl(props: EditFunctionParams<T, TValue>) {
        useWhyDidIUpdate('RealmListControl', props);
        const { fields, cols, append, remove, objectType, value, name, label, helperText, control } = useFieldArrayControl(props.column);
        if (objectType == null) throw new Error('no objectType on RealmListControl');
        // const className = useMemo(() => getGridClass(cols.length), []);
        // const LiComp = useListItemComponent(objectType);
        const [isOpen, toggleOpen, handleOpen, handleClose] = useToggler();

        return (
            <fieldset>
                <legend className='relative'>
                    {label}
                    <IconBtn icon={faPlusSquare} color='highlight' className='absolute top-0 right-0' tooltip='Insert new item' onClick={handleOpen} />
                </legend>
                <small>{helperText}</small>
                <div>
                    <RealmListEdit append={append} columns={cols} objectType={objectType} handleClose={handleClose} isOpen={isOpen} />
                    <List subheader={<ListSubheader component='div'>{label}</ListSubheader>}>
                        {fields.map((field, index) => {
                            return <RealmListItem remove={remove} index={index} key={field.id} objectType={objectType} value={field} />;
                        })}
                    </List>
                </div>
            </fieldset>
        );
    };
}

export function createDBListControl<TValue>(objectType: string): (props: EditFunctionParams<{ value: TValue }> | EditFunctionParams<TValue & Record<string, any>>) => JSX.Element {
    return function DBListControl(props: EditFunctionParams<{ value: TValue }> | EditFunctionParams<TValue & Record<string, any>>) {
        useWhyDidIUpdate('DbListControl', { objectType, ...props });
        const { label, name, list } = useEditControl<any, TValue>(props.column as MRT_Column<any>, props.cell as MRT_Cell<any, any>);
        const invalidator = useInvalidateCollection();
        const ListItemComponent = useListItemComponent(objectType);
        const columns = useColumns<any>(objectType);
        const table = useMaterialReactTable<any>({
            data: [] as any[],
            columns: columns,
            muiTableContainerProps: {
                classes: {
                    root: 'hidden'
                }
            } as TableContainerProps,
            muiTablePaperProps: {
                classes: {
                    root: 'hidden'
                }
            } as PaperProps,
            muiTableProps: {
                classes: {
                    root: 'hidden'
                }
            } as TableProps,
            renderCreateRowDialogContent: createRenderCreateRowDialogContentNestedForList(objectType, list, props.row as any, name)
        });
        const { mutate: deleteMutate } = useMutation({
            mutationFn: (index: number) => {
                if (is.dbList(list)) {
                    list.remove(index);
                    return Promise.resolve();
                } else if (is.array(list)) {
                    const newValue = [...list.slice(0, index), ...(list.length === index ? [] : list.slice(index + 1))];
                    props.row.original[name as keyof typeof props.row.original] = newValue;
                    return Promise.resolve();
                }
                throw new Error('could not complete delete');
            },
            onSuccess: () => invalidator()
        });
        const realm = useLocalRealm();
        const onClickDelete = useCallback(
            (index: number) => {
                return (ev: React.MouseEvent<HTMLButtonElement>) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    const func = () => deleteMutate(index);
                    runTransaction(realm, func);
                };
            },
            [deleteMutate, realm]
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onClickInsert = useStopAndPrevent((ev: MouseButtonEvent) => table.setCreatingRow(true));
        return (
            <div className='relative flex w-full h-auto border border-black rounded-md shadow-inner shadow-black'>
                <div className='flex flex-col w-full h-auto'>
                    <MaterialReactTable table={table} />
                    <div className='w-full flex text-base font-bold indent-1.5'>{label}</div>
                    <List>
                        {list.map((item, index) => {
                            const LIComp = ListItemComponent(item);
                            return (
                                <ListItem key={index} secondaryAction={<IconBtn icon={faTrashCan} onClick={onClickDelete(index)} tooltip='Delete this row' />}>
                                    <ListItemText primary={<LIComp />} />
                                </ListItem>
                            );
                        })}
                    </List>
                    <IconBtn icon={faPlusSquare} onClick={onClickInsert} tooltip='Insert a new row' className='absolute top-0 right-0' />
                </div>
            </div>
        );
    };
}
