import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IMercariTaxonomy } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';
import { mercariCategoryColumns } from './mercariCategory';
import { $depend } from './$depend';

export const h = createMRTColumnHelper<IMercariTaxonomy>();
export const helper = col(h);

export const mercariTaxonomyColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.string(...dependencies)('fullname', 'Full Name', undefined, { maxLength: 250, readonly: true }),
        helper.date(...dependencies)('timestamp', 'Timestamp', { dateType: 'past' }),
        helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag'),
        groupCol(h, 'Category', mercariCategoryColumns, 'category', 'bg-blue-700', 'text-white')(...dependencies),
        groupCol(h, 'SubCategory', mercariCategoryColumns, 'subCategory', 'bg-red-700', 'text-white')($depend.notNilOrEmpty('category.name' as any, true), ...dependencies as IDependency<any, any>[]),
        groupCol(h, 'SubSubCategory', mercariCategoryColumns, 'subSubCategory', 'bg-orange-700', 'text-white')($depend.notNilOrEmpty('subCategory.name' as any, true), ...dependencies as IDependency<any, any>[])
    ] as MRT_ColumnDef<T>[];
