import Realm from 'realm';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import {  IConnector } from '../../types';
import { ConnectorGenders, DataConnectorTypes, PowerConnectorTypes, VideoConnectorTypes } from '../enums';
import { surround } from '../../common/text/surround';
import { is } from '../../common/is';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { connectorColumns } from '../columns/connector';

export class Connector<TConnector extends PowerConnectorTypes | DataConnectorTypes | VideoConnectorTypes> extends EntityBase<IConnector<TConnector>> implements IConnector<TConnector> {
    static columns: MRT_ColumnDef<IConnector<any>>[] = connectorColumns();
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
    static stringify: StringifyComponent<IConnector<any>> = (value?: IConnector<any>, returnUndef = false) => () =>
        value == null ? returnUndef ? undefined : '' : (
            [
                value.type,
                value.connectorGender ? surround('(', ')')(value.connectorGender) : undefined,
                [value.innerWidth?.value && value.innerWidth.value !== 0 ? [value.innerWidth.value.toFixed(1), value.innerWidth.uom].join('') : undefined,
                value.outerWidth?.value && value.outerWidth.value !== 0 ? [value.outerWidth.value.toFixed(1), value.outerWidth.uom].join('') : undefined].filter(is.not.nil).join('/'),
                
            ]
                .filter(is.not.nil)
                .join(' ')
        );
    static liComponent = Connector.stringify;
}
    
