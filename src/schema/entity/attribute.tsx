import Realm from 'realm';
import { IAttribute } from '../../types';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';

export class Attribute extends Realm.Object<IAttribute> implements IAttribute {
    path: string;
    unset: boolean;
    value: unknown;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.attribute()),
        embedded: true,
        properties: {
            path: $.string(),
            unset: $.bool(),
            value: $.mixed()
        }
    };
    static liComponent = ((value?: IAttribute) => () => value == null ? '' : [value.path, value.value].join(' == '));
}
