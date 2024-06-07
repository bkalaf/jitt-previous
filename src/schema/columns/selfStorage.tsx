import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { ISelfStorage } from '../../types';
import { col } from '../defs/col';

const helper = createMRTColumnHelper<ISelfStorage>();
const h = col(helper);

export const selfStorageColumns = [h.pk(), h.string('name', 'Name', undefined, { maxLength: 100, required: true }), h.string('website', 'URL', undefined, { maxLength: 225, minLength: 5, type: 'url' })] as MRT_ColumnDef<ISelfStorage>[];
