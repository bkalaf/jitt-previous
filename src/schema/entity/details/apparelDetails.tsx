import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { rnColumns } from '../../columns/rn';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const apparelDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.enum(...dependencies)('gender', 'Gender', { enumKey: 'genders', id: 'apparelDetails-gender' }),
        helper.string(...dependencies)('cutNo', 'Cut #', undefined, {}),
        helper.string(...dependencies)('styleNo', 'Style #', undefined, {}),
        helper.string(...dependencies)('text', 'Text', undefined, {}),
        groupCol(h, 'RN', rnColumns, 'rnNo', 'bg-sky-500', 'text-white')(...dependencies),
        helper.clothingCare(...dependencies)('clothingCare', 'Clothing Care', 'bleaching'),
        helper.listOfEmbed(...dependencies)('madeOf', 'Made Of', 'madeOfSection')
    ] as MRT_ColumnDef<T>[];
