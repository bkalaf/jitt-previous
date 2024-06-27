import { MRT_RowData } from 'material-react-table';
export declare function handleDependency<T extends MRT_RowData, TKey extends keyof T>(dependency: IDeps<T, TKey>): (value?: any) => boolean;
