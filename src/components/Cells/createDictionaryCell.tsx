import { MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useMemo } from 'react';

export function createDictionaryCell<T extends MRT_RowData, U>(ValueCell: IRowCell<U>) {
    return function DictionaryCell(props: CellFunctionParams<T, DictionaryBack<U>>) {
        useWhyDidIUpdate('DictionaryCell', props);
        const { cell } = props;
        const value = useMemo(() => cell.getValue() ?? {}, [cell]);
        const entries = useMemo(() => Object.entries(value), [value]);
        return (
            <Tooltip
                className='flex'
                title={
                    <div className='flex flex-col w-full h-full text-white bg-slate-700'>
                        {entries.map(([k, v], ix) => (
                            <div key={ix} className='flex w-full'>
                                <span className='flex w-1/4 font-bold upppercase'>{k}</span>
                                <ValueCell data={v} className='flex w-3/4' />
                            </div>
                        ))}
                    </div>
                }
            >
                <span>{entries.length} record(s).</span>
            </Tooltip>
        );
    };
}
