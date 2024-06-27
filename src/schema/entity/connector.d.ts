import Realm from 'realm';
import { IConnector, Opt } from '../../types';
import { ConnectorGenders, DataConnectorTypes, PowerConnectorTypes, VideoConnectorTypes } from '../enums';
import { EntityBase } from './EntityBase';
import { CaliperSizeDimension } from '../dimensions/CaliperSizeMeasure';
export declare class Connector<TConnector extends PowerConnectorTypes | DataConnectorTypes | VideoConnectorTypes> extends EntityBase<IConnector<TConnector>> implements IConnector<TConnector> {
    innerWidth?: Opt<CaliperSizeDimension>;
    outerWidth?: Opt<CaliperSizeDimension>;
    connectorGender?: Opt<ConnectorGenders>;
    generation: Opt<number>;
    type: Opt<TConnector>;
    static schema: Realm.ObjectSchema;
    static update(item: IConnector<any>): IConnector<any>;
    static init(): InitValue<IConnector<any>>;
    static liComponent: (value?: IConnector<any>) => () => string;
}
