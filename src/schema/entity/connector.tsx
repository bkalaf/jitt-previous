import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { col } from '../defs/col';
import { IConnector } from '../../types';
import { ConnectorGenders } from '../enums';
import { connectorGenders } from '../enums/connectorGender';

export const connector: Realm.ObjectSchema = {
    name: schemaName($.connector()),
    embedded: true,
    properties: {
        connectorGender: $.string.opt,
        innerWidth: $.double.opt,
        outerWidth: $.double.opt,
        type: $.string.opt
    }
}

const h = createMRTColumnHelper<IConnector>();
const helper = col(h);

export const connectorColumns: MRT_ColumnDef<IConnector>[] = [
    helper.string('connectorGender', 'Gender', (x?: unknown) => x == null ? '' : connectorGenders[x as ConnectorGenders], { }),
    helper.measure('innerWidth', 'Inner Width', 'mm', {}),
    helper.measure('outerWidth', 'Outer Width', 'mm', {}),
    helper.string('type', 'Type', undefined, {})
]
