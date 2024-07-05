import { createMRTColumnHelper, MRT_RowData, MRT_ColumnDef } from 'material-react-table';
import { IRn } from '../../types';
import { col } from '../defs/col';
import { groupCol } from '../defs/groupCol';
import { addressColumns } from './address';

const h = createMRTColumnHelper<IRn>();
const helper = col(h);

export const rnColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.enum(...dependencies)('type', 'Type', { enumKey: 'rnType' }),
        helper.int(...dependencies)('no', '#', { min: 0 }),
        helper.string(...dependencies)('legalBusinessName', 'Legal Business Name', undefined, { maxLength: 200 }),
        helper.string(...dependencies)('companyName', 'Company Name', undefined, { maxLength: 200 }),
        helper.enum(...dependencies)('companyType', 'Company Type', { enumKey: 'rnCompanyType' }),
        helper.listOfEnum(...dependencies)('businessType', 'Business Type', { enumKey: 'rnBusinessType' }),
        helper.string(...dependencies)('productLine', 'Product Line', undefined, {}),
        helper.enum(...dependencies)('material', 'Material', { enumKey: 'rnMaterial' }),
        groupCol(h, 'Street Address', addressColumns, 'streetAddress', 'bg-magenta-500', 'text-white')(...dependencies),
        groupCol(h, 'Mailing Address', addressColumns, 'mailingAddress', 'bg-amber-500', 'text-black')(...dependencies)
    ] as MRT_ColumnDef<T>[];
