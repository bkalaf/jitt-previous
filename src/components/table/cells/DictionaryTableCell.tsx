import { MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useGetLIComponent } from '../../../hooks/useGetLIComponent';
import { useMemo } from 'react';
import { useEditColumnMeta } from '../../../hooks/useEditColumnMeta';

export function DictionaryTableCell<T extends MRT_RowData, TValue>(props: CellFunctionParams<T, DictionaryBack<TValue>>) {
    useWhyDidIUpdate('DictionaryTableCell', props);
    const { objectType } = useEditColumnMeta(props, 'objectType');
    const data = useMemo(() => props.cell.getValue(), [props.cell]);
    if (objectType == null) throw new Error('no objectType');
    const ValueCell = useGetLIComponent<TValue>(objectType);
    const value = useMemo(() => Object.entries(data ?? {}), [data]);
    return (
        <Tooltip
            className='flex'
            title={
                <>
                    <div className='grid w-full h-full grid-cols-2 text-white bg-slate-500'>
                        {value.map(([key, v]) => {
                            const El = () => ValueCell(v);
                            return (
                                <>
                                    <span className='flex justify-start w-full text-base whitespace-pre'>{key?.toString() ?? ''}</span>
                                    <span className='flex justify-start w-full text-base whitespace-pre'>
                                        <El />
                                    </span>
                                </>
                                // <div key={ix} className='flex justify-start w-full text-base whitespace-pre before:content-["◘_"]'>
                                //     <div className='flex w-full text-left indent-1'>
                                //         <Row />
                                //     </div>
                                // </div>
                            );
                        })}
                    </div>
                </>
            }>
            <span>{value.length} keys.</span>
        </Tooltip>
    );
}
