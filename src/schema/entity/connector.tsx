import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { CaliperSizeUnitsOfMeasure, IConnector, IMeasure, Opt } from '../../types';
import { ConnectorGenders, DataConnectorTypes, PowerConnectorTypes, VideoConnectorTypes } from '../enums';
import { surround } from '../../common/text/surround';
import { is } from '../../common/is';
import { EntityBase } from './EntityBase';
import { ofCaliper } from '../../components/table/controls/titleParts';

export class Connector<TConnector extends PowerConnectorTypes | DataConnectorTypes | VideoConnectorTypes> extends EntityBase<IConnector<TConnector>> implements IConnector<TConnector> {
    innerWidth?: Opt<IMeasure<CaliperSizeUnitsOfMeasure>>;
    outerWidth?: Opt<IMeasure<CaliperSizeUnitsOfMeasure>>;
    connectorGender?: Opt<ConnectorGenders>;
    generation: Opt<number>;
    type: Opt<TConnector>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.connector()),
        embedded: true,
        properties: {
            connectorGender: $.string.opt,
            innerWidth: $.caliperSizeMeasure(),
            outerWidth: $.caliperSizeMeasure(),
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
    static stringify: StringifyComponent<IConnector<any>> = (value?: IConnector<any>) => () =>
        value == null ? '' : (
            [
                value.type,
                value.connectorGender ? surround('(', ')')(value.connectorGender) : undefined,
                value.outerWidth ? ofCaliper(value.outerWidth) : undefined,
                value.innerWidth ? ofCaliper(value.innerWidth) : undefined
            ]
                .filter(is.not.nil)
                .join(' ')
        );
    static liComponent = Connector.stringify;
}
    
