import { createMRTColumnHelper } from 'material-react-table';
import { IScrape } from '../../types';
import { col } from '../defs/col';

export const helper = createMRTColumnHelper<IScrape>();
export const h = col(helper);

export const scrapeColumns = (...dependencies: IDependency<any, any>[]) => [
    h.listOfPrimitive(...dependencies)('descriptions', 'Descriptions', 'string'),
    h.listOfPrimitive(...dependencies)('barcodes', 'Barcodes', 'string'),
    h.listOfEmbed(...dependencies)('productInfos', 'Product Infos', 'scrapeKVP'),
    h.listOfEmbed(...dependencies)('storeInfos', 'Store Infos', 'scrapeStoreInfo')
]