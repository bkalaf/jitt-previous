import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { groupCol } from '../../defs/groupCol';
import { minMaxColumns } from '../../columns/minMax';
import { h } from './toysDetails';


export const toysBoardGamesDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [groupCol(h, 'Players', minMaxColumns, 'players', 'bg-red-500', 'text-white')(...dependencies)] as MRT_ColumnDef<T>[];
