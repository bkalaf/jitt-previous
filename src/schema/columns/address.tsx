import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IAddress } from '../../types';
import { col } from '../defs/col';
import { $depend } from './$depend';

const h = createMRTColumnHelper<IAddress>();
const helper = col(h);

export const addressColumns = <T extends MRT_RowData>(...dependencies: IDependency<IAddress, any>[]) => [
    helper.string($depend.notNilOrEmpty('city', true), ...dependencies)('mailing1', 'Street', undefined, { maxLength: 100 }),
    helper.string($depend.notNilOrEmpty('city', true), ...dependencies)('mailing2', 'Street (cont.)', undefined, { maxLength: 100 }),
    helper.string($depend.notNilOrEmpty('city', true), ...dependencies)('suite', 'Suite', undefined, { maxLength: 25 }),
    helper.string(...dependencies)('city', 'City', undefined, { maxLength: 50, required: true }),
    helper.enum(...dependencies)('province', 'Province', { enumKey: 'provinces', required: true }),
    helper.enum(...dependencies)('country', 'Country', { enumKey: 'countries', required: true }),
    helper.string($depend.notNilOrEmpty('city', true), ...dependencies)('postalCode', 'Postal Code', undefined, { maxLength: 10, pattern: /^[0-9]{5}(-?[0-9]{4})?$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/ })
] as MRT_ColumnDef<T>[];

// export const reg = /^[0-9]{5}$|^[A-Z][0-9][A-Z]-?[0-9][A-Z][0-9]$/
// console.log(reg.test('A1A-1A1'))
// console.log(reg.test('91207'))



