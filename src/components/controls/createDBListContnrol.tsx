import { List, ListItem, ListItemText, PaperProps, TableContainerProps, TableProps } from '@mui/material';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { MRT_Column, MRT_Cell, useMaterialReactTable, MaterialReactTable } from 'material-react-table';
import React, { useCallback } from 'react';
import { IconBtn } from '../IconBtn';
import { faPlusSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
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
            renderCreateRowDialogContent: createRenderCreateRowDialogContentNestedForList(objectType, list, props.row, name)
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
