import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IIncludedItem } from '../../types';
import { EntityBase } from './EntityBase';
import Realm from 'realm';

export class IncludedItem extends EntityBase<IIncludedItem> implements IIncludedItem {
    qty: number;
    name: string;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.includedItem()),
        embedded: true,
        properties: {
            qty: $.int.default(1),
            name: $.string()
        }
    };
    static liComponent = (value?: IIncludedItem) => () => (value == null ? '' : [value.qty.toFixed(0), value.name].join('x '));
    static update(item: IIncludedItem): IIncludedItem {
        return item;
    }
    static init(): InitValue<IIncludedItem> {
        return {
            qty: 1,
            name: ''
        }
    }
}
