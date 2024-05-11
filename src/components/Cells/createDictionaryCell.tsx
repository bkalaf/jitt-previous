import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { Tooltip } from '@mui/material';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useListItemComponent } from '../../hooks/useListItemComponent';
import { useMemo } from 'react';

export function createDictionaryCell<T extends MRT_RowData, U>(objectType: string) {
    return function DictionaryCell(props: Parameters<Exclude<MRT_ColumnDef<T, DBDictionary<U> | U[] | undefined>['Cell'], undefined>>[0]) {
        useWhyDidIUpdate('DictionaryCell', { objectType, ...props });
        const ValueCell = useListItemComponent(objectType) as ListItemCellComponent<U>;
        const value = useMemo(() => Object.entries(props.cell.getValue<DBDictionary<U>>() ?? {}), [props.cell]);
        console.info(`value`, value);
        return (
            <Tooltip
                className='flex'
                title={
                    <>
                        <div className='grid grid-cols-2 w-full h-full text-white bg-slate-500'>
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
    };
}
