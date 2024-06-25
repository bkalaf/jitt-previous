import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IMadeOfSection } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMadeOfSection>();
const helper = col(h);

export const madeOfSectionColumns = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [helper.string(...dependencies)('name', 'Name', undefined, { required: true, maxLength: 40 }), helper.dictionary(...dependencies)('section', 'Section', 'double', { enumKey: 'fabric' })] as MRT_ColumnDef<T>[];
