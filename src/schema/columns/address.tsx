import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { provinces } from '../enums/provinces';
import { countries } from '../enums/countries';
import { IAddress } from '../../types';
import { col } from '../defs/col';

const helper = createMRTColumnHelper<IAddress>();
const h = col(helper);

export const addressColumns = [
    h.string('mailing1', 'Street', undefined, { maxLength: 100 }),
    h.string('mailing2', 'Street (cont.)', undefined, { maxLength: 100 }),
    h.string('suite', 'Suite', undefined, { maxLength: 25 }),
    h.string('city', 'City', undefined, { maxLength: 50, required: true }),
    h.enum('province', 'Province', { options: provinces, required: true }),
    h.enum('country', 'Country', { options: countries, required: true }),
    h.string('postalCode', 'Postal Code', undefined, { maxLength: 10, pattern: /^[0-9]{5}(-?[0-9]{4})?$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/ })
    // helper.accessor('postalCode', { header: 'Postal Code', Edit: createStringControl({ maxLength: 10, pattern: /^[0-9]{5}(-?[0-9]{4})?$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/ }) })
] as MRT_ColumnDef<IAddress>[];

// export const reg = /^[0-9]{5}$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/
// console.log(reg.test('A1A-1A1'))
// console.log(reg.test('91207'))



