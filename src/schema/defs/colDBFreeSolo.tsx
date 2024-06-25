import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { FreeSoloControl } from '../../components/table/controls/FreeSoloControl';
import { ListTableCell } from '../../components/table/cells/ListTableCell';

export function colDBFreeSolo<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, header: string, objectType: string, comparator: (x: any, y: any) => Compared, readonly = false): MRT_ColumnDef<T, any> {
            return baseCol<T, ListBack<string>>(helper, name, ListTableCell, FreeSoloControl<T, string, true>, header, false, readonly, { objectType, multiple: true, comparator: comparator }, undefined, ...dependencies);
            // return helper.accessor(name as any, {
            //     header: header ?? camelToProper(name),
            //     enableEditing: !readonly,
            //     Cell: createListCell(objectType),
            //     Edit: readonly ? NullCell : createFreeSoloControl(comparator, false, readonly, true)
            // }) as any;
        };
    };
}
