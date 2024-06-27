import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
export declare function createStringHeaderCell<T extends MRT_RowData, U>(): ({ column, table }: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Header'], null | undefined | string | number | boolean | React.ReactElement<any> | Iterable<React.ReactNode>>>[0]) => string;
