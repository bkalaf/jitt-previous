import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IFacility } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';
import { addressColumns } from './address';

const h = createMRTColumnHelper<IFacility>();
const helper = col(h);

export const facilityColumns = [
    helper.PK(),
    helper.lookup()('selfStorage', 'Self-Storage', { objectType: 'selfStorage' }),
    helper.string()('facilityNumber', 'Facility #', undefined, { maxLength: 30 }),
    helper.string()('phoneNumber', 'Phone #', (x?: unknown) => (x != null && typeof x === 'string' ? ['(', x.slice(0, 3), ') ', x.slice(3, 6), '-', x.slice(6)].join('') : ''), { maxLength: 15 }),
    helper.string()('emailAddress', 'E-mail', undefined, { maxLength: 200, type: 'email' }),
    helper.string()('name', 'Name', undefined, { readonly: true }),
    groupCol(h, 'Address', addressColumns(), 'address', 'bg-blue-700', 'text-white')
] as MRT_ColumnDef<IFacility>[];
