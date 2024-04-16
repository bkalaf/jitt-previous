import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';


export function createListCell<T extends MRT_RowData, U>(RowCell: IRowCell<U>) {
    return function ListCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, DBList<U> | U[] | undefined>['Cell'], undefined>>[0]) {
        const value = cell.getValue<DBList<U> | U[] | undefined>() ?? [];
        // const value = (row.original as any)[column.columnDef.accessorKey] ?? [] as DBList<U> | U[] ;
        // console.info(cell.column.columnDef, `value`, value)
        return (
            <Tooltip className='flex'
                title={<>
                    <div className='flex flex-col w-full h-full text-white list-disc list-inside bg-slate-500'>
                        {value.map((el, ix) => (
                            <div key={ix} className='flex justify-start w-full text-base whitespace-pre before:content-["◘_"]'>
                                <RowCell data={el} key={ix} className='flex w-full text-left indent-1'/>
                            </div>
                        ))}
                    </div>
                </>}
            >
                <span>{value.length} items.</span>
            </Tooltip>
        );
    };
}
