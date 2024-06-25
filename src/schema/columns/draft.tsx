import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IDraft } from '../../types';
import { col } from '../defs/col';
import { $depend } from './$depend';

const h = createMRTColumnHelper<IDraft>();
const helper = col(h);

export const draftColumns: MRT_ColumnDef<IDraft>[] = [
    helper.PK(),
    helper.lookup()('sku', 'SKU', { objectType: 'sku' }),
    helper.string()('title', 'Title', undefined, { maxLength: 80 }),
    helper.text()('description', 'Description', undefined, { maxLength: 1000 }),
    helper.dollar()('price', 'Price', { min: 0 }),
    helper.bool()('isLocalDelivery', 'Local Delivery'),
    helper.enum()('payor', 'Payor', { enumKey: 'payorTypes', required: true }),
    helper.bool()('smartPricing', 'Smart Price On/Off'),
    helper.dollar($depend.isTrue('smartPricing'))('smartPrice', 'Smart Price', { min: 0 })
] as MRT_ColumnDef<IDraft>[];
