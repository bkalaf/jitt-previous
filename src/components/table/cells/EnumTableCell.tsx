import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useMemo } from 'react';
import { useEditColumnMeta } from '../../../hooks/useEditColumnMeta';

export function EnumTableCell<T extends MRT_RowData>(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Cell'], undefined>>[0]) {
    useWhyDidIUpdate('EnumTableCell', props);
    const { enumInfo } = useEditColumnMeta(props, 'enumInfo');
    if (enumInfo == null) throw new Error('no enuminfo in enumtablecell');
    const value = useMemo(() => props.cell.getValue(), [props.cell]);

    return useMemo(
        () =>
            (value != null ? enumInfo.asRecord[value] : undefined) == null ? ''
            : typeof (value != null ? enumInfo.asRecord[value] : undefined) === 'string' ?
                value != null ?
                    enumInfo.asRecord[value]
                :   undefined
            :   (value != null ? enumInfo.asRecord[value] : undefined)?.text,
        [enumInfo.asRecord, value]
    );
}
