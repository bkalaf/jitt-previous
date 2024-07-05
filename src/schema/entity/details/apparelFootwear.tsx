import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { getSizeOptions } from '../../enums/sizes';
import { $productInfo } from '../../columns/$depend';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';
import { helper, h } from './apparelDetails';


export const apparelFootwear: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.enum(...dependencies)('bootType', 'Boot Type', { enumKey: 'bootTypes' }),
    helper.enum(...dependencies)('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelFootwear-closureType' }),
    helper.enum(...dependencies)('heightMapType', 'Height Map Type', { enumKey: 'heightMaps' }),
    helper.enum(...dependencies)('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelFootwear-lifestyleType' }),
    helper.enum(...dependencies)('shoeHeelType', 'Shoe Heel Type', { enumKey: 'shoeHeelTypes' }),
    helper.enum(...dependencies)('shoeWidth', 'Shoe Width Type', { enumKey: 'shoeWidths' }),
    helper.enum(...dependencies)('strapType', 'Strap Type', { enumKey: 'strapTypes', id: 'apparelFootwear-strapType' }),
    helper.enum(...dependencies)('toeStyle', 'Toe Style', { enumKey: 'toeStyles' }),
    groupCol(h, 'Foot Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'footSize', 'bg-lime-500', 'text-black'),
    groupCol(h, 'Heel Height Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'heelHeight', 'bg-amber-500', 'text-black'),
    helper.enum($productInfo.gender.male, ...dependencies)('size', 'Mens Size', { options: getSizeOptions('menFootwear'), id: 'apparelFootwear-male-size' }),
    helper.enum($productInfo.gender.female, ...dependencies)('size', 'Womens Size', { options: getSizeOptions('womenFootwear'), id: 'apparelFootwear-female-size' })
] as MRT_ColumnDef<T>[];
