import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import React from 'react';
export declare function createEditComponent(Wrapper?: React.FunctionComponent<{
    children: Children;
}>): <T extends MRT_RowData>(def: MRT_ColumnDef<T>) => React.ReactNode[];
