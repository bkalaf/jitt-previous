import { MRT_Column, MRT_RowData } from 'material-react-table';
export declare function useCreateOptionsFromUniqueFacetedValues<T extends MRT_RowData, U extends string | undefined>(column: MRT_Column<T, U>, multiple?: boolean): {
    key: U;
    text: U;
}[];
