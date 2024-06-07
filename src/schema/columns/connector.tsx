import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IConnector } from '../../types';
import { col } from '../defs/col';
import { connectorGenders } from '../enums/connectorGender';

const h = createMRTColumnHelper<IConnector>();
const helper = col(h);

export const connectorColumns: MRT_ColumnDef<IConnector>[] = [
    helper.enum('connectorGender', 'Gender', { options: connectorGenders }),
    helper.measure('innerWidth', 'Inner Width', 'mm', {}),
    helper.measure('outerWidth', 'Outer Width', 'mm', {}),
    helper.string('type', 'Type', undefined, {})
] as MRT_ColumnDef<IConnector>[];
