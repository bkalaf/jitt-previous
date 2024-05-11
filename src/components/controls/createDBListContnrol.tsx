import { FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, List, ListItem, ListItemText, PaperProps, TableContainerProps, TableProps } from '@mui/material';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { MRT_Column, MRT_Cell, useMaterialReactTable, MaterialReactTable, MRT_RowData, createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import React, { useCallback, useMemo } from 'react';
import { IconBtn } from '../IconBtn';
import { faPlusSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { is } from '../../common/is';
import { useInvalidateCollection } from '../../hooks/useInvalidateCollection';
import { useColumns } from '../../hooks/useColumns';
import { runTransaction } from '../../util/runTransaction';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { createRenderCreateRowDialogContentNestedForDictionary, createRenderCreateRowDialogContentNestedForList } from '../Views/renderProperties/createRenderCreateRowDialogContentNestedForList';
import { useControl, useEditControl } from '../../hooks/useEditControl';
import { useListItemComponent } from '../../hooks/useListItemComponent';
import { useStopAndPrevent } from '../../hooks/useStopAndPrevent';
import { isPrimitive } from '../../schema/conversion/cnvrt';
import { ClothingCareMap } from '../../schema/laundryCare';
import { freeSoloCol } from '../../schema/defs/freeSoloCol';
import { stringCol } from '../../schema/defs/stringCol';
import { enumCol } from '../../schema/defs/enumCol';

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
export function createDBDictionaryControl<T extends MRT_RowData, TValue>(objectType: string, faceted = false, enumMap?: EnumMap) {
    return function DBDictionaryControl(props: EditFunctionParams<T, DictionaryBack<TValue>>) {
        useWhyDidIUpdate('DBDictionaryControl', props);
        const { cell, row, column } = props;
        const { label, name, value, data } = useControl<T, DictionaryBack<TValue>, [string, TValue][]>(column, cell, {} as DictionaryBack<TValue>, (value: DictionaryBack<TValue>) => Object.entries(value ?? {}));
        const invalidator = useInvalidateCollection();
        const ValueComponent = useListItemComponent(objectType);
        const columns = useDictionaryColumns(objectType, faceted, enumMap);
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
            renderCreateRowDialogContent: createRenderCreateRowDialogContentNestedForDictionary(objectType, value, row as any, name)
        });
        const { mutate: deleteMutate } = useMutation({
            mutationFn: (key: string) => {
                if (is.dbDictionary(value)) {
                    value.remove(key);
                } else {
                    if (Object.hasOwn(value ?? {}, key)) {
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const { [key]: _, ...remain } = value ?? {};
                        (row.original as any)[name] = remain;
                    }
                }
                return Promise.resolve();
            },
            onSuccess: () => invalidator()
        });
        const realm = useLocalRealm();
        const onClickDelete = useCallback(
            (key: string) => {
                return (ev: React.MouseEvent<HTMLButtonElement>) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    const func = () => deleteMutate(key);
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
                        {data.map(([key, item], index) => {
                            const LIComp = ValueComponent(item);
                            return (
                                <ListItem key={index} secondaryAction={<IconBtn icon={faTrashCan} onClick={onClickDelete(key)} tooltip='Delete this row' />}>
                                    <ListItemText primary={key} secondary={<LIComp />} />
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

export function createClothingCareControl<T extends MRT_RowData>(section: keyof typeof ClothingCareMap) {
    return function ClothingCareControl(props: EditFunctionParams<T>) {
        const { cell, row, column } = props;
        const { list, label, name } = useEditControl<T, string>(column, cell);
        // const section = name.split('.').reverse()[0] as keyof typeof ClothingCareMap;
        const options = useMemo(() => Object.entries(ClothingCareMap[section]).map(([k, v]) => ({ key: k, ...v })), []);
        const isSelected = useCallback(
            (item: string) => {
                return ((cell.getValue() as DBList<string> | string[]) ?? []).includes(item);
            },
            [cell]
        );
        const invalidator = useInvalidateCollection();
        const { mutate } = useMutation({
            onSuccess: () => invalidator(),
            mutationFn: (key: string) => {
                if (!list.includes(key)) {
                    if (is.dbList(list)) {
                        list.push(key);
                    } else {
                        const nextList = [...list, key];
                        (row.original as any)[name] = nextList;
                    }
                } else {
                    if (is.dbList(list)) {
                        const index = list.indexOf(key);
                        list.remove(index);
                    } else {
                        const nextList = [...list.filter((x) => x !== key)];
                        (row.original as any)[name] = nextList;
                    }
                }
                return Promise.resolve();
            }
        });
        const realm = useLocalRealm();
        const onClick = useCallback(
            (key: string) => (ev: MouseButtonEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                const func = () => mutate(key);
                runTransaction(realm, func);
            },
            [mutate, realm]
        );
        return (
            <FormControl className='flex w-full'>
                <FormLabel>{label}</FormLabel>
                <FormGroup row aria-labelledby=''>
                    {options.map(({ Element, text, key }) => (
                        <FormControlLabel
                            key={key}
                            label={text}
                            aria-selected={isSelected(key)}
                            control={
                                <IconButton key={key} className='inline-flex object-contain p-0 rounded-none h-7 w-7 aria-selected:bg-magenta-500 aria-unselected:bg-sky-400' aria-selected={isSelected(key)} onClick={onClick(key)}>
                                    <Element className='inline-block h-7 w-7' />
                                </IconButton>
                            }
                        />
                    ))}
                </FormGroup>
            </FormControl>
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
