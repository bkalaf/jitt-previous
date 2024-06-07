import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IMadeOfSection } from '../../types';
import { col } from '../defs/col';

const h = createMRTColumnHelper<IMadeOfSection>();
const helper = col(h);

export const madeOfSectionColumns: MRT_ColumnDef<IMadeOfSection>[] = [
    helper.string('name', 'Name', undefined, { required: true, maxLength: 40 }),
    helper.dictionary('section', 'Section', 'double', { enumKey: 'fabric' })
] as MRT_ColumnDef<IMadeOfSection>[];
