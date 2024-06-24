import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IConnector } from '../../types';
import { col } from '../defs/col';
import { DataConnectorTypes, PowerConnectorTypes, VideoConnectorTypes } from '../enums';
import { addID, whenProperty } from '../defs/when';

const h = createMRTColumnHelper<IConnector<DataConnectorTypes | PowerConnectorTypes | VideoConnectorTypes>>();
const helper = col(h);

export const connectorColumns: MRT_ColumnDef<IConnector<DataConnectorTypes | PowerConnectorTypes | VideoConnectorTypes>>[] = [
    helper.enum('connectorGender', 'Gender', { enumKey: 'connectorGenders' }),
    helper.measure('innerWidth', 'Inner Width', 'mm', {}),
    helper.measure('outerWidth', 'Outer Width', 'mm', {}),
    whenProperty('cableType', 'data', addID('data-connector', helper.enum('type', 'Type', { enumKey: 'dataConnectorTypes' }))),
    whenProperty('cableType', 'power', addID('power-connector', helper.enum('type', 'Type', { enumKey: 'powerConnectorTypes' }))),
    whenProperty('cableType', 'video', addID('video-connector', helper.enum('type', 'Type', { enumKey: 'videoConnectorTypes' })))
] as MRT_ColumnDef<IConnector<DataConnectorTypes | PowerConnectorTypes | VideoConnectorTypes>>[];
