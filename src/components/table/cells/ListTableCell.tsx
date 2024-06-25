import { MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useGetLIComponent } from '../../../hooks/useGetLIComponent';
import { ColumnMeta } from '@tanstack/react-table';

export function ListTableCell<T extends MRT_RowData, TValue>(props: CellFunctionParams<T, ListBack<TValue>>) {
    useWhyDidIUpdate('ListTableCell', props);
    const {
        cell,
        column: {
            columnDef: { meta }
        }
    } = props;
    const { objectType } = (meta as ColumnMeta<any, any>);
    if (objectType == null) {
        console.error('no objectType for list', props.column.columnDef);
        throw new Error('no objectType for list');
    }
    const RowCell = useGetLIComponent<TValue>(objectType);
    const value = cell.getValue() ?? [];
    return value.length > 0 ?
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
        :   '';
}
