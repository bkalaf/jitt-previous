import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IContributor } from '../../types';
import { col } from '../defs/col';
import { $productInfo } from './$depend';

const h = createMRTColumnHelper<IContributor>();
const helper = col(h);

export const contributorColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.enum(...dependencies)('role', 'Role', { enumKey: 'contributorRoles', required: true }),
        helper.string($productInfo.contributorRole.group, ...dependencies)('group', 'Group', undefined, {}),
        helper.lookup($productInfo.contributorRole.individual, ...dependencies)('individual', 'Individual', { objectType: 'individual' }),
        helper.string($productInfo.contributorRole.allowCreditedAs, ...dependencies)('creditedAs', 'Credited As', undefined, {})
    ] as MRT_ColumnDef<T>[];
