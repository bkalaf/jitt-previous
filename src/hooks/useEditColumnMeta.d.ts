import { MRT_RowData } from 'material-react-table';
import { ColumnMeta } from '@tanstack/react-table';
export declare function useEditColumnMeta<T extends MRT_RowData, U, TKey extends keyof ColumnMeta<T, U>>(props: EditFunctionParams<T, U | undefined>, ...keys: TKey[]): { [P in TKey]: ColumnMeta<T, U>[P]; };
