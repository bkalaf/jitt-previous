import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { ClothingCareMap } from '../laundryCare';
import { Path } from 'react-hook-form';
import { baseCol } from './baseCol';
import { ClothingCareControl, FlattenedClothingCare } from '../../components/controls/ClothingCareControl';

export function colClothingCare<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function (name: Path<T> & string, header: string, section: keyof typeof ClothingCareMap, readonly = false): MRT_ColumnDef<T> {
        return baseCol<T, ListBack<string>>(helper, name, FlattenedClothingCare, ClothingCareControl, header, false, readonly) as MRT_ColumnDef<T>;
        // return helper.accessor(name as any, {
        //     header: header ?? camelToProper(name),
        //     enableEditing: !readonly,
        //     Cell: createFlattedListCell(converted(section)),
        //     Edit: readonly ? NullCell : createClothingCareControl(section)
        // }) as any;
    };
}
