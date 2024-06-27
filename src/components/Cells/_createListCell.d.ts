import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
export declare function createListCell<T extends MRT_RowData, U>(objectType: string): ({ cell }: Parameters<Exclude<MRT_ColumnDef<T, DBList<U> | U[] | undefined>['Cell'], undefined>>[0]) => import("react/jsx-runtime").JSX.Element;
