import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IAward } from '../../types';
import { col } from '../defs/col';
import { AwardNames } from '../enums';
import { $productInfo } from './$depend';

const h = createMRTColumnHelper<IAward<AwardNames>>();
const helper = col(h);

export const awardColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.enum(...dependencies)('name', 'Name', { enumKey: 'awardNames' }),
        helper.enum($productInfo.awardName.oscar, ...dependencies)('category', 'Category', { enumKey: 'oscarAwardCategories', id: 'category-oscar' }),
        helper.enum($productInfo.awardName.emmy, ...dependencies)('category', 'Category', { enumKey: 'emmyAwardCategories', id: 'category-emmy' }),
        helper.enum($productInfo.awardName.grammy, ...dependencies)('category', 'Category', { enumKey: 'grammyAwardCategories', id: 'category-grammy' }),
        helper.enum($productInfo.awardName.tony, ...dependencies)('category', 'Category', { enumKey: 'tonyAwardCategories', id: 'category-tony' }),
        helper.enum($productInfo.awardName.hugo, ...dependencies)('category', 'Category', { enumKey: 'hugoAwardCategories', id: 'category-hugo' }),
        helper.enum($productInfo.awardName.nyTimes, ...dependencies)('category', 'Category', { enumKey: 'nyTimesAwardCategories', id: 'category-ny-times' }),
        helper.enum($productInfo.awardName.pulitzer, ...dependencies)('category', 'Category', { enumKey: 'pulizerPrizeCategories', id: 'category-pulitzer' }),
        helper.year(...dependencies)(),
        helper.enum(...dependencies)('status', 'Status', { enumKey: 'awardStatus' }),
    ] as MRT_ColumnDef<T>[];
