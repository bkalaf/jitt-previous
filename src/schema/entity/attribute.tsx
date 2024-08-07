import Realm from 'realm';
import { IAttribute } from '../../types';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import { attributeColumns } from '../columns/attribute';
import { MRT_ColumnDef } from 'material-react-table';

export class Attribute extends EntityBase<IAttribute> implements IAttribute {
    isList: Opt<boolean>;
    isDictionary: Opt<boolean>;
    path: string;
    unset: boolean;
    value: unknown;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.attribute()),
        embedded: true,
        properties: {
            path: $.string(),
            unset: $.bool(),
            value: $.mixed(),
            isList: $.bool.default(false),
            isDictionary: $.bool.default(false)
        }
    };
    static stringify = (value?: IAttribute) => () => (value == null ? '' : [value.path, value.value].join(' == '));
    static liComponent = Attribute.stringify;
    static update(item: IAttribute): IAttribute {
        return item;
    }
    static init(): InitValue<IAttribute> {
        return {
            path: '',
            unset: false,
            isList: false,
            isDictionary: false
        };
    }
    static columns: MRT_ColumnDef<IAttribute>[] = attributeColumns();
}
