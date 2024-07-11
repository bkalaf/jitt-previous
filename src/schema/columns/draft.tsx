import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IDraft } from '../../types';
import { col } from '../defs/col';
import { $depend } from './$depend';

const h = createMRTColumnHelper<IDraft>();
const helper = col(h);

export const draftColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.lookup(...dependencies)('sku', 'SKU', { objectType: 'sku' }),
        helper.int(...dependencies)('imageCount', 'Image Count', { readonly: true }),
        helper.string(...dependencies)('title', 'Title', undefined, { maxLength: 80 }),
        helper.int(...dependencies)('titleLength', 'Length', { readonly: true }),
        helper.text(...dependencies)('description', 'Description', undefined, { maxLength: 1000 }),
        helper.int(...dependencies)('descriptionLength', 'Length', { readonly: true }),
        helper.dollar(...dependencies)('price', 'Price', { min: 0 }),
        helper.bool(...dependencies)('isLocalDelivery', 'Local Delivery'),
        helper.enum(...dependencies)('payor', 'Payor', { enumKey: 'payorTypes', required: true }),
        helper.bool(...dependencies)('smartPricing', 'Smart Price On/Off'),
        helper.dollar($depend.isTrue('smartPricing'), ...dependencies as IDependency<any, any>[])('smartPrice', 'Smart Price', { min: 0 }),
        helper.listOfEmbed(...dependencies)('scrapes', 'Scrapes', 'scrape'),
        helper.string(...dependencies)('listingID', 'Listing ID', undefined, {}),
        helper.bool(...dependencies)('isListed', 'Is Listed')
    ] as MRT_ColumnDef<T>[];
