import { MRT_RowData, MRT_TableInstance, MRT_TableOptions } from 'material-react-table';
export declare function useAnySelected<T extends MRT_RowData>(table: MRT_TableInstance<T>, negate?: boolean): boolean;
export declare function createRenderTopToolbarCustomActions<T extends MRT_RowData>(init: () => T, resetSettings: () => void): ({ table }: Parameters<Exclude<MRT_TableOptions<T>['renderTopToolbarCustomActions'], undefined>>[0]) => import("react/jsx-runtime").JSX.Element;
