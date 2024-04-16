import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';


export function createListCell<T extends MRT_RowData, U>(RowCell: IRowCell<U>) {
    return function ListCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, DBList<U> | U[] | undefined>['Cell'], undefined>>[0]) {
        const value = cell.getValue<DBList<U> | U[] | undefined>() ?? [];
        // const value = (row.original as any)[column.columnDef.accessorKey] ?? [] as DBList<U> | U[] ;
        // console.info(cell.column.columnDef, `value`, value)
        return (
            <Tooltip
                title={<>
                    <ul className='list-disc list-inside'>
                        {value.map((el, ix) => (
                            <li key={ix}>
                                <RowCell data={el} key={ix} />
                            </li>
                        ))}
                    </ul>
                </>}
            >
                <>{value.length} items.</>
            </Tooltip>
        );
    };
}
