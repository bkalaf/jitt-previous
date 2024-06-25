import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IConnector, IProduct } from '../../types';
import { col } from '../defs/col';
import { DataConnectorTypes, PowerConnectorTypes, VideoConnectorTypes } from '../enums';
import { $depend } from './$depend';

const h = createMRTColumnHelper<IConnector<DataConnectorTypes | PowerConnectorTypes | VideoConnectorTypes>>();
const helper = col(h);

export const connectorColumns: MRT_ColumnDef<IConnector<DataConnectorTypes | PowerConnectorTypes | VideoConnectorTypes>>[] = [
    helper.enum()('connectorGender', 'Gender', { enumKey: 'connectorGenders' }),
    helper.measure()('outerWidth', 'Outer Width', 'mm', {}),
    helper.measure($depend.notZeroOrNull('outerWidth', true))('innerWidth', 'Inner Width', 'mm', {}),
    helper.enum($depend.equalTo<IProduct, 'cableType'>('cableType', 'data'))('type', 'Type', { enumKey: 'dataConnectorTypes', id: 'data-connector' }),
    helper.enum($depend.equalTo<IProduct, 'cableType'>('cableType', 'power'))('type', 'Type', { enumKey: 'powerConnectorTypes', id: 'power-connector' }),
    helper.enum($depend.equalTo<IProduct, 'cableType'>('cableType', 'video'))('type', 'Type', { enumKey: 'videoConnectorTypes', id: 'video-connector' })
] as MRT_ColumnDef<IConnector<DataConnectorTypes | PowerConnectorTypes | VideoConnectorTypes>>[];
