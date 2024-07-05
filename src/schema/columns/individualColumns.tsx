import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IIndividual } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IIndividual>();
const helper = col(h);

export const individualColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.enum(...dependencies)('prefix', 'Prefix', { enumKey: 'individualPrefix' }),
        helper.string(...dependencies)('firstname', 'First Name', undefined, { required: true }),
        helper.string(...dependencies)('middlename', 'Middle Name', undefined, { required: false }),
        helper.string(...dependencies)('lastname', 'Last Name', undefined, { required: true }),
        helper.enum(...dependencies)('suffix', 'Suffix', { enumKey: 'individualSuffix' })
    ] as MRT_ColumnDef<T>[];
