import { ICustomItemFieldType, ICustomItemFieldTypes } from '../../types';
import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { EntityBase } from './EntityBase';

export class CustomItemFieldTypes extends EntityBase<ICustomItemFieldTypes> implements ICustomItemFieldTypes {
    types: DBList<ICustomItemFieldType>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.customItemFieldTypes()),
        embedded: true,
        properties: {
            types: $.customItemFieldType.list
        }
    };
    static stringify = (value?: ICustomItemFieldTypes) => () => (value == null ? '' : value.types.map((x) => x.type).join(', '));
    static liComponent = CustomItemFieldTypes.stringify;
    static update(item: ICustomItemFieldTypes) {
        return item;
    }
    static init(): InitValue<ICustomItemFieldTypes> {
        return {
            types: []
        };
    }
}
