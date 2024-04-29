import { MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { createListCell } from '../../components/Cells/createListCell';
import { createLinkingControl } from './createLinkingControl';

export function listObjectCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function ListObjectControl<U extends MRT_RowData>(name: keyof T & string, header: string | undefined, objectType: string, labelProperty: keyof U & string, readonly = false) {
        return helper.accessor(name as any, { header: header ?? camelToProper(name), enableEditing: !readonly, Cell: createListCell(objectType), Edit: createLinkingControl(objectType, labelProperty) }) as any;
    };
}
