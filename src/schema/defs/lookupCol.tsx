import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { Path } from 'react-hook-form-mui';
import { createAutocompleteControl } from '../../components/controls/createAutocompleteControl';
import { createLookupCell } from '../../components/Cells/createLookupCell';
import { createHeaderCell } from '../../components/Cells/createHeaderCell';

export function lookupCol<T extends MRT_RowData, U extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: keyof T & string, header: string, opts: { objectType: string; labelProperty: Path<U>; }): MRT_ColumnDef<T, any> {
        return helper.accessor(name as any, { header: header ?? camelToProper(name), Edit: createAutocompleteControl(opts), Header: createHeaderCell(opts.labelProperty), Cell: createLookupCell<T, U>(opts.objectType, opts.labelProperty) }) as MRT_ColumnDef<T, U | undefined>;
    };
}
