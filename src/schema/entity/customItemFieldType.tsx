import { $ } from '../$';
import { ICustomItemFieldType, ICustomItemFieldValue, IMercariBrand, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import Realm from 'realm';
import { EntityBase } from './EntityBase';

export class CustomItemFieldType extends EntityBase<ICustomItemFieldType> implements ICustomItemFieldType {
    get getMercariBrand(): Realm.Types.LinkingObjects<IMercariBrand, 'customItemFields'> {
        return this.linkingObjects('mercariBrand', 'customItemFields') as any;
    }
    type: Opt<string>;
    values: DBList<ICustomItemFieldValue>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.customItemFieldType()),
        embedded: true,
        properties: {
            type: $.string.opt,
            values: $.customItemFieldValue.list
        }
    };
    static labelProperty = 'type';
    static update(item: ICustomItemFieldType) {
        return item;
    }
    static init(): InitValue<ICustomItemFieldType> {
        return {
            values: []
        };
    }
}
