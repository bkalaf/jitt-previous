import { MRT_RowData, MRT_TableInstance } from 'material-react-table';
import { FieldErrors } from 'react-hook-form';
export declare function useUpdateRecord<T extends MRT_RowData>(table: MRT_TableInstance<T>): {
    onSuccess: (result: T) => Promise<void>;
    onError: (errors: FieldErrors<T>) => Promise<void>;
    handleSubmit: import("@tanstack/react-query").UseMutateFunction<RealmObj<T>, FieldErrors<T>, T, unknown>;
};
