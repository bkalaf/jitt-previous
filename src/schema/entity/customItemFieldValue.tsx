import Realm from 'realm';
import { ICustomItemField, ICustomItemFieldValue } from '../../types';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';

export class CustomItemFieldValue extends EntityBase<ICustomItemFieldValue> implements ICustomItemFieldValue {
    static columns: MRT_ColumnDef<ICustomItemFieldValue>[] = [];
    get getParent(): Realm.Types.LinkingObjects<ICustomItemField, 'options'> {
        return this.linkingObjects(schemaName($.customItemField()), 'options') as any;
    }
    static stringify =
        (value?: ICustomItemFieldValue, retUndef = false) =>
        () =>
            value == null ?
                retUndef ? undefined
                :   ''
            :   value.text;
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
