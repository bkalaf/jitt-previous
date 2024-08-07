import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { getSizeOptions } from '../../enums/sizes';
import { $hasDetailType } from '../../columns/$depend';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';
import { helper, h } from './apparelDetails';


export const apparelBottoms: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.enum(...dependencies)('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelBottoms-closureType' }),
        helper.enum(...dependencies)('fitType', 'Fit Type', { enumKey: 'fitTypes', id: 'apparelBottoms-fitType' }),
        helper.enum($hasDetailType.apparel.bottoms.legged(), ...dependencies)('legStyle', 'Leg Style', { enumKey: 'legStyles' }),
        helper.enum(...dependencies)('lengthType', 'Length Type', { enumKey: 'garmentLengths', id: 'apparelBottoms-lengthType' }),
        helper.enum(...dependencies)('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelBottoms-lifestyleType' }),
        helper.enum(...dependencies)('pocketType', 'Pocket Type', { enumKey: 'pocketTypes', id: 'apparelBottoms-pocketType' }),
        helper.enum(...dependencies)('riseType', 'Rise Type', { enumKey: 'riseTypes' }),
        helper.enum(...dependencies)('size', 'Size', { options: getSizeOptions('waistSizes') as any, id: 'apparelBottoms-waistSize' }),
        helper.enum(...dependencies)('size', 'Womens Size', { options: getSizeOptions('womenLetter') as any, id: 'apparelBottoms-womensWaist' }),
        helper.enum(...dependencies)('size', 'Children Size', { options: getSizeOptions('youthSizes'), id: 'apparelBottoms-childrensSize' }),
        groupCol(h, 'Inseam Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'inseamSize', 'bg-rose-500', 'text-white')($hasDetailType.apparel.bottoms.legged(), ...dependencies),
        groupCol(h, 'Length Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure', 'apparelBottoms'), 'lengthSize', 'bg-blue-500', 'text-white')(...dependencies),
        groupCol(h, 'Waist Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'waistSize', 'bg-emerald-500', 'text-white')(...dependencies)
    ] as MRT_ColumnDef<T>[];
