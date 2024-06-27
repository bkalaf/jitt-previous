import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { detailsTypes } from '../schema/enums/detailsTypes';
export declare const tabList: Record<string, Record<string, {
    value: string;
    key: string;
    label: string;
    detailType: keyof typeof detailsTypes;
    Component: any;
    objectType: string;
} | {
    value: string;
    key: string;
    label: string;
    Component: any;
    property?: string;
}>>;
export declare function CreateRenderDetailPanel<T extends MRT_RowData>(props: Parameters<Exclude<MRT_TableOptions<T>['renderDetailPanel'], undefined>>[0]): import("react/jsx-runtime").JSX.Element;
