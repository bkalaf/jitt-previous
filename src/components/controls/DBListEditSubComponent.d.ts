import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import React from 'react';
import { UseFieldArrayReturn } from 'react-hook-form';
export declare function DBDictionaryEditSubComponent<T extends MRT_RowData, TValue>(props: {
    append: (data: {
        key: string;
        value: TValue;
    }) => void;
    columns: MRT_ColumnDef<T>[];
    isOpen: boolean;
    handleClose: () => void;
    objectType: string;
    KeyControl: React.FunctionComponent<EditFunctionParams<any>>;
    keyType?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function DBListEditSubComponent<T extends MRT_RowData>(props: {
    append: UseFieldArrayReturn['append'];
    columns: MRT_ColumnDef<T>[];
    isOpen: boolean;
    handleClose: () => void;
    objectType: string;
}): import("react/jsx-runtime").JSX.Element;
