import { MRT_RowData } from 'material-react-table';
export declare function useDependencies<T extends MRT_RowData, TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]): () => boolean;
