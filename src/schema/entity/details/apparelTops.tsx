import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { getSizeOptions } from '../../enums/sizes';
import { $productInfo } from '../../columns/$depend';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';
import { helper, h } from './apparelDetails';

// whenProperty('gender', 'womens', helper.enum('dressType', 'Dress Type', { enumKey: 'dressTypes' })),

export const apparelTops: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.enum(...dependencies)('backlineType', 'Backline Type', { enumKey: 'backlineTypes' }),
    helper.enum(...dependencies)('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelTops-closureType' }),
    helper.enum(...dependencies)('collarType', 'Collar Type', { enumKey: 'collarTypes' }),
    helper.enum(...dependencies)('cuffType', 'Cuff Type', { enumKey: 'cuffTypes' }),
    helper.enum($productInfo.gender.womens, ...dependencies)('dressType', 'Dress Type', { enumKey: 'dressTypes' }),
    helper.enum(...dependencies)('fitType', 'Fit Type', { enumKey: 'fitTypes', id: 'apparelTops-fitType' }),
    helper.enum(...dependencies)('lengthType', 'Length Type', { enumKey: 'garmentLengths', id: 'apparelTops-lengthType' }),
    helper.enum(...dependencies)('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelTops-lifestyleType' }),
    helper.enum(...dependencies)('neckType', 'Neck Type', { enumKey: 'neckTypes' }),
    helper.enum(...dependencies)('pocketType', 'Pocket Type', { enumKey: 'pocketTypes', id: 'apparelTops-pocketType' }),
    helper.enum(...dependencies)('sleeveLength', 'Sleeve Length', { enumKey: 'sleeveLengths' }),
    helper.enum()('sleeveType', 'Sleeve Type', { enumKey: 'sleeveTypes' }),
    helper.enum($productInfo.gender.mens, $productInfo.andTopsBottoms, ...dependencies)('suitType', 'Suit Type', { enumKey: 'suitTypes' }),
    helper.enum($productInfo.gender.mens, ...dependencies)('size', 'Mens Size', { options: getSizeOptions('menLetter'), id: 'apparelTops-size-mensLetter' }),
    helper.enum($productInfo.gender.womens, ...dependencies)('size', 'Womens Size', { options: getSizeOptions('womenLetter'), id: 'apparelTops-size-womensLetter' }),
    helper.enum($productInfo.gender.mens, $productInfo.andTopsBottoms, ...dependencies)('size', 'Suit Size', {
        options: getSizeOptions('suitSizes'),
        id: 'apparelTops-size-suitSize'
    }),
    groupCol(h, 'Neck Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'neckSize', 'bg-yellow-500', 'text-black')(...dependencies),
    groupCol(h, 'Sleeve Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'sleeveSize', 'bg-violet-500', 'text-white')(...dependencies),
    groupCol(h, 'Chest Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'chestSize', 'bg-cyan-500', 'text-black')(...dependencies),
    groupCol(h, 'Length Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure', 'apparelTops'), 'lengthSize', 'bg-red-500', 'text-white')(...dependencies)
] as MRT_ColumnDef<T>[];
