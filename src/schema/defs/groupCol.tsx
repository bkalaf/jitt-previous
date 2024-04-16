import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { mapEmbed } from '../../util/mapEmbed';
import { groupProps } from '../groupProps';
import { toID } from '../toID';

export function groupCol<T extends MRT_RowData, U extends MRT_RowData>(helper: MRT_ColumnHelper<T>, header: string, columns: MRT_ColumnDef<U>[], propertyName: string, bgColor: string, textColor: string) {
    return helper.group({
        header,
        id: toID(header),
        columns: mapEmbed<T, U>(columns, propertyName),
        ...groupProps(bgColor, textColor)
    });
}

