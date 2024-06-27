import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { ClothingCareMap } from '../laundryCare';
import { Path } from 'react-hook-form';
export declare function colClothingCare<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>): <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) => (name: Path<T> & string, header: string, section: keyof typeof ClothingCareMap, readonly?: boolean) => MRT_ColumnDef<T>;
