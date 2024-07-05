import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { EntityBase } from './EntityBase';
import { IShipping } from '../../types';
import { MRT_ColumnDef } from 'material-react-table';
import { shippingColumns } from '../columns/shipping';

export class Shipping extends EntityBase<IShipping> implements IShipping {
    static columns: MRT_ColumnDef<IShipping>[] = shippingColumns();
    static stringify = (value?: IShipping, retUndef = false) => () => value == null ? retUndef ? undefined : '' : value.id.toFixed(0);
    id: number;
    version: number;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.shipping()),
        embedded: true,
        properties: {
            id: $.int(),
            version: $.int()
        }
    };
    static update(item: IShipping): IShipping {
        return item;
    }
    static labelProperty = 'id';
    static init(): InitValue<IShipping> {
        return {
            id: 9999,
            version: 9999
        };
    }
}
