import { $ } from '../$';
import { ICustomItemFieldType, ICustomItemFieldValue, IMercariBrand } from '../../types';
import { schemaName } from '../../util/schemaName';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';

export class CustomItemFieldType extends EntityBase<ICustomItemFieldType> implements ICustomItemFieldType {
    static columns: MRT_ColumnDef<ICustomItemFieldType>[] = [];
    get getMercariBrand(): Realm.Types.LinkingObjects<IMercariBrand, 'customItemFields'> {
        return this.linkingObjects('mercariBrand', 'customItemFields') as any;
    }
    static stringify = (value?: ICustomItemFieldType, retUndef = false) => () => value == null ? retUndef ? undefined : '' : value.type ?? '';
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
