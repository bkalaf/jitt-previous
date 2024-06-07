import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IHashTag, IMercariBrand } from '../../types';

export class MercariBrand extends Realm.Object<IMercariBrand> implements IMercariBrand {
    _id: BSON.ObjectId;
    name: string;
    hashTags: DBList<IHashTag>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.mercariBrand()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            name: $.string(),
            hashTags: $.hashTag.list
        }
    };
    static labelProperty = 'name';
}
