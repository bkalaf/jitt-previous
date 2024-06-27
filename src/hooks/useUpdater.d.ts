import { MRT_RowData } from 'material-react-table';
export declare function useUpdater<T extends MRT_RowData>(objectType?: string): [boolean, UpdateFunction<RealmObj<T>>];
