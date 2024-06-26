import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useListItemComponent } from '../../hooks/useListItemComponent';

export function createListCell<T extends MRT_RowData, U>(objectType: string) {
    return function ListCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, DBList<U> | U[] | undefined>['Cell'], undefined>>[0]) {
        useWhyDidIUpdate('ListCell', { value: cell.getValue() ?? [], cell });
        const RowCell = useListItemComponent(objectType) as ListItemCellComponent<U>;
        const value = cell.getValue<DBList<U> | U[] | undefined>() ?? [];
        console.info(`value`, 'toJSON' in value ? value.toJSON() : value);
        // const value = (row.original as any)[column.columnDef.accessorKey] ?? [] as DBList<U> | U[] ;
        // console.info(cell.column.columnDef, `value`, value)
        return (
            <Tooltip
                className='flex'
                title={
                    <>
                        <div className='flex h-full w-full list-inside list-disc flex-col bg-slate-500 text-white'>
                            {value.map((el, ix) => {
                                const Row = RowCell(el);
                                return (
                                    <div key={ix} className='flex w-full justify-start whitespace-pre text-base before:content-["◘_"]'>
                                        <div className='flex w-full text-left indent-1'>
                                            <Row />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                }>
                <span>{value.length} items.</span>
            </Tooltip>
        );
    };
}
