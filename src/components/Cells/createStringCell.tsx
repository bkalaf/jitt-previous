import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { fromDepth } from '../../schema/fromDepth';
import { useMemo } from 'react';
import { useEffectiveCollection } from '../../hooks/useEffectiveCollection';

export function createStringCell<T extends MRT_RowData, U>(formatter: (x?: U) => string | undefined) {
    return function StringCell(props: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Cell'], undefined>>[0]) {
        useWhyDidIUpdate('StringCell', props);
        const { cell, row } = props;
        // const propsGen = column.columnDef.muiTableBodyCellProps;
        // const { className } = { className: '', ...(typeof propsGen === 'function' ? propsGen(props as any) : propsGen)};
        const collection = useEffectiveCollection();
        const className = useMemo(() => collection === 'classifier' ? fromDepth(row.depth) : '', [collection, row.depth]);
        const value = cell.getValue<U>();
        return <span className={className}>{formatter(value) ?? ''}</span>;
    };
}
