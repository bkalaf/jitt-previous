import { MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useColumnMeta } from '../../../hooks/useColumnMeta';
import { useGetLIComponent } from '../../../hooks/useGetLIComponent';

export function DictionaryTableCell<T extends MRT_RowData, TValue>(props: CellFunctionParams<T, DictionaryBack<TValue>>) {
    useWhyDidIUpdate('DictionaryTableCell', props);
    const { value: data, objectType } = useColumnMeta<T, DictionaryBack<TValue>, 'objectType'>(props, {} as DictionaryBack<TValue>, 'objectType');
    if (objectType == null) throw new Error('no objectType');
    const ValueCell = useGetLIComponent<TValue>(objectType);
    const value = Object.entries(data);
    return (
        <Tooltip
            className='flex'
            title={
                <>
                    <div className='grid w-full h-full grid-cols-2 text-white bg-slate-500'>
                        {value.map(([key, value]) => {
                            const Row = ValueCell(value);
                            return (
                                <>
                                    <span className='flex justify-start w-full text-base whitespace-pre'>{key?.toString() ?? ''}</span>
                                    <span className='flex justify-start w-full text-base whitespace-pre'>
                                        <Row />
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
            }
        >
            <span>{value.length} keys.</span>
        </Tooltip>
    );
}
