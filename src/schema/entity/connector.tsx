import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IConnector, Opt } from '../../types';
import { ConnectorGenders, DataConnectorTypes, PowerConnectorTypes, VideoConnectorTypes } from '../enums';
import { surround } from '../../common/text/surround';
import { truncateAuto } from '../../common/number/truncateAuto';
import { is } from '../../common/is';
import { EntityBase } from './EntityBase';
import { CaliperSizeDimension } from '../dimensions/CaliperSizeMeasure';

export class Connector<TConnector extends PowerConnectorTypes | DataConnectorTypes | VideoConnectorTypes> extends EntityBase<IConnector<TConnector>> implements IConnector<TConnector> {
    innerWidth?: Opt<CaliperSizeDimension>;
    outerWidth?: Opt<CaliperSizeDimension>;
    connectorGender?: Opt<ConnectorGenders>;
    generation: Opt<number>;
    type: Opt<TConnector>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.connector()),
        embedded: true,
        properties: {
            connectorGender: $.string.opt,
            innerWidth: $.caliperSizeDimension(),
            outerWidth: $.caliperSizeDimension(),
            type: $.string.opt,
            generation: $.int.opt
        }
    };
    static update(item: IConnector<any>) {
        return item;
    }
    static init(): InitValue<IConnector<any>> {
        return {};
    }
    static liComponent = (value?: IConnector<any>) => () =>
        value == null ? '' : (
            [
                value.type,
                value.connectorGender ? surround('(', ')')(value.connectorGender) : undefined,
                value.outerWidth ? [truncateAuto(value.outerWidth), 'mm'].join(' ') : undefined,
                value.innerWidth ? [truncateAuto(value.innerWidth), 'mm'].join(' ') : undefined
            ]
                .filter(is.not.nil)
                .join(' ')
        );
}
