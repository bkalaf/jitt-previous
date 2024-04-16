import { createRow, MaterialReactTable, MRT_ColumnDef, MRT_RowData, useMaterialReactTable } from 'material-react-table';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { setProperty } from '../../common/object';
import { TableContainerProps, PaperProps, TableProps, FormControl, List, ListItem, ListItemText } from '@mui/material';
import { Types } from 'realm';
import { runTransaction } from '../../util/runTransaction';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { useNotification } from '../../hooks/useNotification';
import { IconBtn } from '../IconBtn';
import { faPlusSquare, faTrashCan } from '@fortawesome/pro-solid-svg-icons';
import { createRenderCreateRowDialogContentList } from '../Views/renderProperties/createRenderCreateRowDialogContentList';
import { useInitial } from '../../hooks/useInitial';
import { useObjectTypeType } from '../../hooks/useObjectTypeType';
import { createRenderCreateRowDialogContentListLink } from '../Views/renderProperties/createRenderCreateRowDialogContentListLink';


export function createListControl<T extends MRT_RowData, U extends MRT_RowData>(objectType: string, columns: MRT_ColumnDef<U>[], RowComponent: IRowCell<U>, labelProperty?: string) {
    return function ListControl(props: Parameters<Exclude<MRT_ColumnDef<T, DBList<U> | U[] | undefined>['Edit'], undefined>>[0]) {
        const init = useInitial<U>(objectType);
        const data = useMemo(() => props.cell.getValue() ?? [], [props.cell]);
        const realm = useLocalRealm();
        const deleteRow = useCallback(
            (params: Parameters<Exclude<MRT_ColumnDef<T, DBList<U> | U[] | undefined>['Edit'], undefined>>[0]) => {
                return (index: number) => {
                    const func = () => {
                        if (data instanceof Types.List) {
                            data.remove(index);
                        } else {
                            const name = params.column.columnDef.accessorKey ?? params.column.columnDef.id ?? 'n/a';
                            setProperty(name, params.row.original, [...data.slice(0, index), ...data.slice(index + 1)]);
                        }
                    };
                    runTransaction(realm, func);
                    return Promise.resolve();
                };
            },
            [data, realm]
        );
        const { mutate } = useMutation({
            mutationFn: deleteRow(props)
        });
        const onDelete = useNotification(
            () => `Successfully deleted (1) row.`,
            (error: Error) => error.message,
            mutate
        );
        const ott = useObjectTypeType();
        console.info('ott', ott);
        const table = useMaterialReactTable({
            data: data as U[],
            columns,
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
            renderCreateRowDialogContent: ott === 'reference' ? createRenderCreateRowDialogContentListLink(objectType, labelProperty ?? 'n/a', props.cell) : createRenderCreateRowDialogContentList<T, U>(objectType, props.cell)
        });
        const onInsert = useCallback(() => table.setCreatingRow(createRow<U>(table, init())), [init, table]);

        return (           
            <FormControl className='flex flex-col' variant='standard'>
                <div className='flex justify-between w-full'>
                    <span className='flex flex-grow'>{props.column.columnDef.header}</span>
                    <MaterialReactTable table={table} />
                    <IconBtn className='flex' tooltip='Insert item' icon={faPlusSquare} onClick={onInsert} />
                </div>
                <List className='flex flex-col w-full'>
                    {data.map((item, ix) => (
                        <ListItem className='flex' disablePadding key={ix} secondaryAction={<IconBtn tooltip='Delete this row' icon={faTrashCan} onClick={() => onDelete.onSuccess(ix)} />}>
                            <ListItemText>
                                <RowComponent data={item} />
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </FormControl>
        );
    };
}
