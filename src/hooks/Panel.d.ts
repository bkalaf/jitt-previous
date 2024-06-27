/// <reference types="react" />
import { MRT_RowData } from 'material-react-table';
export declare function Panel<T extends MRT_RowData>(props: {
    Component: React.FunctionComponent<{
        data: any[] | T;
        original: T;
        objectType: string;
    }>;
    property?: string & keyof T;
    original: T;
    objectType: string;
}): import("react/jsx-runtime").JSX.Element;
