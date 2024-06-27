import { DetailTypes } from '../../types';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
export declare function addID<T extends MRT_RowData, U>(id: string, col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U>;
export declare function whenType<T extends MRT_RowData, U>(item: DetailTypes | DetailTypes[], col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U>;
export declare function whenProperty<T extends MRT_RowData, U>(propname: string, item: any, col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U>;
export declare function whenPropertyNotZero<T extends MRT_RowData, U>(propname: string, col: MRT_ColumnDef<T, U>): MRT_ColumnDef<T, U>;
export declare const $enableWhen: {
    oldProperty: (name: string, item: any) => <T extends MRT_RowData, U>(col: MRT_ColumnDef<T, U>) => MRT_ColumnDef<T, U>;
    property: (name: string, item: any, isNull?: boolean) => <T_1 extends MRT_RowData, U_1>(col: MRT_ColumnDef<T_1, U_1> | MRT_ColumnDef<T_1, U_1>[]) => MRT_ColumnDef<T_1, U_1>[];
};
export declare const $disableWhen: {
    property: (name: string, item: any, isNull?: boolean) => <T extends MRT_RowData, U>(col: MRT_ColumnDef<T, U> | MRT_ColumnDef<T, U>[]) => MRT_ColumnDef<T, U>[];
};
