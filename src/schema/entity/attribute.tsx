import Realm from 'realm';
import { IAttribute } from '../../types';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';

export class Attribute extends EntityBase<IAttribute> implements IAttribute {
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
    static liComponent = (value?: IAttribute) => () => (value == null ? '' : [value.path, value.value].join(' == '));
    static update(item: IAttribute): IAttribute {
        return item;
    }
    static init(): InitValue<IAttribute> {
        return {
            path: '',
            unset: false
        };
    }
}
