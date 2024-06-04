import { MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useGetLIComponent } from '../../../hooks/useGetLIComponent';


export function ListTableCell<T extends MRT_RowData, TValue>(props: CellFunctionParams<T, ListBack<TValue>>) {
    useWhyDidIUpdate('ListTableCell', props);
    const {
        cell, column: {
            columnDef: { meta }
        }
    } = props;
    const { objectType } = meta ?? {};
    if (objectType == null) {
        console.error('no objectType for list', props.column.columnDef);
        throw new Error('no objectType for list');
    }
    const RowCell = useGetLIComponent<TValue>(objectType);
    const value = cell.getValue() ?? [];
    return (
        <Tooltip
            className='flex'
            title={<>
                <div className='flex flex-col w-full h-full text-white list-disc list-inside bg-slate-500'>
                    {value.map((el, ix) => {
                        const Row = RowCell(el);
                        return (
                            <div key={ix} className='flex justify-start w-full text-base whitespace-pre before:content-["◘_"]'>
                                <div className='flex w-full text-left indent-1'>
                                    <Row />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>}
        >
            <span>{value.length} items.</span>
        </Tooltip>
    );
}
