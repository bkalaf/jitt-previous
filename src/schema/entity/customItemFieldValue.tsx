import Realm from "realm";
import { ICustomItemField, ICustomItemFieldValue, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { EntityBase } from './EntityBase';

export class CustomItemFieldValue extends EntityBase<ICustomItemFieldValue> implements ICustomItemFieldValue {
    get getParent(): Realm.Types.LinkingObjects<ICustomItemField, 'options'> {
        return this.linkingObjects(schemaName($.customItemField()), 'options') as any;
    }
    static schema: Realm.ObjectSchema = {
        name: schemaName($.customItemFieldValue()),
        embedded: true,
        properties: {
            text: $.string(),
            id: $.string(),
            nextField: $.customItemField()
        }
    };
    text: string;
    id: string;
    nextField: Opt<ICustomItemField>;
    static labelProperty = 'id';
    static update(item: ICustomItemFieldValue) {
        return item;
    }
    static init(): InitValue<ICustomItemFieldValue> {
        return {
            text: '',
            id: ''
        };
    }
}