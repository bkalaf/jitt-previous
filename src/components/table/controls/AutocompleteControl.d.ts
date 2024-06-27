import { MRT_RowData } from 'material-react-table';
import { BSON } from 'realm';
export declare function AutocompleteControl<T extends MRT_RowData, U extends MRT_RowData & {
    _id: BSON.ObjectId;
}, TMultiple extends boolean = false>(props: EditFunctionParams<T, TMultiple extends true ? ListBack<U> : U | undefined>): import("react/jsx-runtime").JSX.Element;
