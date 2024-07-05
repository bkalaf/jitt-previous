import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IConnector } from '../../types';
import { col } from '../defs/col';
import { DataConnectorTypes, PowerConnectorTypes, VideoConnectorTypes } from '../enums';
import { $productInfo } from './$depend';
import { groupCol } from '../defs/groupCol';
import { doubleMeasureColumns } from '../entity/details/measureColumns';

const h = createMRTColumnHelper<IConnector<DataConnectorTypes | PowerConnectorTypes | VideoConnectorTypes>>();
const helper = col(h);

export const connectorColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.enum(...dependencies)('connectorGender', 'Gender', { enumKey: 'connectorGenders' }),
        helper.int(...dependencies)('generation', 'Generation', { min: 0 }),
        groupCol(h, 'Outer Width', doubleMeasureColumns(h, 'caliperSizeUnitOfMeasure'), 'outerWidth', 'bg-fuschia-500', 'text-white')(...dependencies),
        groupCol(h, 'Inner Width', doubleMeasureColumns(h, 'caliperSizeUnitOfMeasure'), 'innerWidth', 'bg-fuschia-500', 'text-white')(...dependencies),
        helper.enum($productInfo.cableType.data, ...(dependencies as any))('type', 'Type', { enumKey: 'dataConnectorTypes', id: 'data-connector' }),
        helper.enum($productInfo.cableType.power, ...(dependencies as any))('type', 'Type', { enumKey: 'powerConnectorTypes', id: 'power-connector' }),
        helper.enum($productInfo.cableType.video, ...(dependencies as any))('type', 'Type', { enumKey: 'videoConnectorTypes', id: 'video-connector' })
    ] as MRT_ColumnDef<T>[];
