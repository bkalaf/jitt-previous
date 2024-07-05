import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IFacility } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';
import { addressColumns } from './address';

const h = createMRTColumnHelper<IFacility>();
const helper = col(h);

export const facilityColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.lookup(...dependencies)('selfStorage', 'Self-Storage', { objectType: 'selfStorage' }),
        helper.string(...dependencies)('facilityNumber', 'Facility #', undefined, { maxLength: 30 }),
        helper.string(...dependencies)('phoneNumber', 'Phone #', (x?: unknown) => (x != null && typeof x === 'string' ? ['(', x.slice(0, 3), ') ', x.slice(3, 6), '-', x.slice(6)].join('') : ''), { maxLength: 15 }),
        helper.string(...dependencies)('emailAddress', 'E-mail', undefined, { maxLength: 200, type: 'email' }),
        helper.string(...dependencies)('name', 'Name', undefined, { readonly: true }),
        groupCol(h, 'Address', addressColumns, 'address', 'bg-blue-700', 'text-white')(...dependencies)
    ] as MRT_ColumnDef<T>[];
