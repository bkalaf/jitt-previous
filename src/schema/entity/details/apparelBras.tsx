import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { getSizeOptions } from '../../enums/sizes';
import { $hasDetailType, $productInfo } from '../../columns/$depend';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';
import { helper, h } from './apparelDetails';


export const apparelBras: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.enum($productInfo.gender.womens, $hasDetailType.apparel.bras.swimsuit(), ...dependencies)('swimsuitBottomStyle', 'Swimsuit Bottom Style', { enumKey: 'swimsuitBottomStyles' }),
    helper.enum($productInfo.gender.womens, $hasDetailType.apparel.bras.swimsuit(), ...dependencies)('swimsuitTopStyle', 'Swimsuit Top Style', { enumKey: 'swimsuitTopStyles' }),
    helper.enum($productInfo.gender.womens, ...dependencies)('size', 'Bra Size', { options: getSizeOptions('bustSizes'), id: 'apparelBras-size' }),
    groupCol(h, 'Bust Measurement', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'bustSize', 'bg-pink-500', 'text-white')($productInfo.gender.womens, ...dependencies)
] as MRT_ColumnDef<T>[];
