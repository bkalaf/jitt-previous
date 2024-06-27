import { MRT_ColumnDef } from 'material-react-table';
import { IConnector } from '../../types';
import { DataConnectorTypes, PowerConnectorTypes, VideoConnectorTypes } from '../enums';
export declare const connectorColumns: MRT_ColumnDef<IConnector<DataConnectorTypes | PowerConnectorTypes | VideoConnectorTypes>>[];
