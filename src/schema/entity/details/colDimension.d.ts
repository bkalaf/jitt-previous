import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import $me from '../../enums';
export declare function colDimension<T extends MRT_RowData>(help: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: keyof T & string, $header: string, uom: keyof typeof $me, numberType: 'int' | 'double') => MRT_ColumnDef<T>[];
