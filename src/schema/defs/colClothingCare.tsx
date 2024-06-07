import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { ClothingCareMap } from '../laundryCare';
import { Path } from 'react-hook-form';
import { baseCol } from './baseCol';
import { $createClothingCareControl } from '../../components/controls/$createClothingCareControl';
import { FlattenedListTableCell } from '../../components/table/cells/FlattenedListTableCell';
import { converted } from './colDBList';

export function colClothingCare<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: Path<T> & string, header: string, section: keyof typeof ClothingCareMap, readonly = false): MRT_ColumnDef<T> {
        const Edit = $createClothingCareControl(section) as MRT_ColumnDef<T, any>['Edit'];
        return baseCol<T, ListBack<string>>(helper, name, FlattenedListTableCell, Edit, header, false, readonly, {
            flattener: (value?: ListBack<string>) => value?.map(converted(section)).join(', ') ?? ''
        }) as MRT_ColumnDef<T>;
        // return helper.accessor(name as any, {
        //     header: header ?? camelToProper(name),
        //     enableEditing: !readonly,
        //     Cell: createFlattedListCell(converted(section)),
        //     Edit: readonly ? NullCell : createClothingCareControl(section)
        // }) as any;
    };
}
