import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns } from './measureColumns';
import { $productInfo } from '../../columns/$depend';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sportingGoodsDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [] as MRT_ColumnDef<T>[];

export const sportingGoodsGolfClubsDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.enum(...dependencies)('gender', 'Gender', { enumKey: 'genders' }),
        helper.enum(...dependencies)('clubType', 'Club Type', { enumKey: 'clubTypes' }),
        helper.enum($productInfo.clubType.iron, ...dependencies)('flexType', 'Flex Type', { enumKey: 'flexTypes' }),
        helper.enum(...dependencies)('handOrientation', 'Orientation', { enumKey: 'handOrientations' }),
        helper.enum($productInfo.clubType.iron, ...dependencies)('ironType', 'Iron Type', { enumKey: 'ironTypes' }),
        helper.enum(...dependencies)('shaftType', 'Shaft Type', { enumKey: 'shaftTypes' }),
        helper.enum(...dependencies)('material', 'Material', { enumKey: 'materials' }),
        helper.enum($productInfo.clubType.wedge, ...dependencies)('wedgeType', 'Wedge Type', { enumKey: 'wedgeTypes' }),
        groupCol(h, 'Club Length', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'clubLength', 'bg-red-500', 'text-white')(...dependencies),
        groupCol(h, 'Swing Weight', doubleMeasureColumns(h, 'weightUnitOfMeasure'), 'swingWeight', 'bg-green-500', 'text-white')(...dependencies),
        groupCol(h, 'Lie', doubleMeasureColumns(h, 'angleUnitOfMeasure'), 'lie', 'bg-yellow-500', 'text-black')($productInfo.clubType.driver, ...dependencies),
        groupCol(h, 'Loft', doubleMeasureColumns(h, 'angleUnitOfMeasure'), 'loft', 'bg-violet-500', 'text-white')($productInfo.clubType.driver, ...dependencies)
    ] as MRT_ColumnDef<T>[];

export const sportingGoodsBowlingBallsColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    helper.enum(...dependencies)('finish', 'Finish', { enumKey: 'finishes' }),
    helper.enum(...dependencies)('laneCondition', 'Lane Condition', { enumKey: 'laneConditions' }),
    helper.enum(...dependencies)('coverstock', 'Coverstock', { enumKey: 'coverstocks' }),
    helper.double(...dependencies)('radiusOfGyration', 'Radius of Gyration', { min: 0 })
] as MRT_ColumnDef<T>[];
