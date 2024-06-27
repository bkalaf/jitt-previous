import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
export declare function createRenderRowActions<T extends MRT_RowData>(): (props: Parameters<Exclude<MRT_TableOptions<T>['renderRowActions'], undefined>>[0]) => import("react/jsx-runtime").JSX.Element;
