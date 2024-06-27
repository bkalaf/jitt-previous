import { MRT_RowData } from 'material-react-table';
import { ClothingCareMap } from '../../../schema/laundryCare';
export declare function FlattenedClothingCareCell(section: keyof typeof ClothingCareMap): <T extends MRT_RowData, TValue>(props: CellFunctionParams<T, ListBack<TValue>>) => string;
