import { MRT_RowData } from 'material-react-table';
import { BSON } from 'realm';
export declare function LookupTableCell<T extends MRT_RowData, U extends MRT_RowData & {
    _id: BSON.ObjectId;
}>(props: CellFunctionParams<T, U | undefined>): import("react/jsx-runtime").JSX.Element;
