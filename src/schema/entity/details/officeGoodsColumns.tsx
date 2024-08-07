import { createMRTColumnHelper, MRT_RowData, MRT_ColumnDef } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const officeGoodsColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.listOfEmbed(...dependencies)('compatibleWith', 'Compatible With', 'partNumber')] as MRT_ColumnDef<T>[];
