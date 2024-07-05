import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { ICustomItemFieldType, IHashTag, IMercariBrand } from '../../types';
import { runTransaction } from '../../util/runTransaction';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { mercariBrandColumns } from '../columns/mercariBrand';

export class MercariBrand extends EntityBase<IMercariBrand> {
    static columns: MRT_ColumnDef<IMercariBrand>[] = mercariBrandColumns();
    customItemFields: DBList<ICustomItemFieldType>;
    timestamp: Opt<Date>;
    _id: BSON.ObjectId;
    name: string;
    hashTags: DBList<IHashTag>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.mercariBrand()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            name: $.string(),
            hashTags: $.hashTag.list,
            timestamp: $.date.opt,
            customItemFields: $.customItemField.list
        }
    };
    static labelProperty = 'name';
    static update(item: IMercariBrand): IMercariBrand {
        const func = () => {
            if (item.timestamp == null) {
                item.timestamp = new Date(Date.now());
            }
            return item;
        };
        return runTransaction(MercariBrand.localRealm, func);
    }
    static init(): InitValue<IMercariBrand> {
        return {
            _id: new BSON.ObjectId(),
            name: '',
            hashTags: [],
            timestamp: new Date(Date.now()),
            customItemFields: []
        };
    }
}
