import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IDraft } from '../../types';
import { col } from '../defs/col';
import { whenProperty } from '../defs/when';

const h = createMRTColumnHelper<IDraft>();
const helper = col(h);

export const draftColumns: MRT_ColumnDef<IDraft>[] = [
    helper.pk(),
    helper.lookup('sku', 'SKU', { objectType: 'sku' }),
    helper.string('title', 'Title', undefined, { maxLength: 80 }),
    helper.text('description', 'Description', undefined, { maxLength: 100 }),
    helper.dollar('price', 'Price', { min: 0 }),
    helper.bool('isLocalDelivery', 'Local Delivery'),
    helper.enum('payor', 'Payor', { enumKey: 'payorTypes' }),
    helper.bool('smartPricing', 'Smart Price On/Off'),
    whenProperty('smartPricing', true, helper.dollar('smartPrice', 'Smart Price', { min: 0 }))
] as MRT_ColumnDef<IDraft>[];
