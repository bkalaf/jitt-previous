import { createMRTColumnHelper } from 'material-react-table';
import { IScrapeStoreInfo } from '../../types';
import { col } from '../defs/col';

export const helper = createMRTColumnHelper<IScrapeStoreInfo>();
export const h = col(helper);

export const scrapeStoreInfoColumns = (...dependencies: IDependency<any, any>[]) => [
    h.string(...dependencies)('store', 'Store', undefined, {}),
    h.string(...dependencies)('description', 'Description', undefined, {}),
    h.dollar(...dependencies)('price', 'Price', { min: 0 }),
    h.date(...dependencies)('lastUpdated', 'Last Updated', { dateType: 'past' })
]