import { Realm } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IBrand, IHashTag, IMercariBrand } from '../../types';
import { ObjectId } from 'bson';
import { distinctByOID } from '../../common/array/distinct';

export class Brand extends Realm.Object<IBrand> implements IBrand {
    _id: ObjectId;
    name: string;
    mercariBrand?: IMercariBrand | undefined;
    hashTags: DBList<IHashTag>;
    get allHashTags(): IHashTag[] {
        return distinctByOID<IHashTag>([...this.hashTags, ...(this.mercariBrand?.hashTags ?? [])]);
    }

    static schema: Realm.ObjectSchema = {
        name: schemaName($.brand()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            name: $.string(),
            mercariBrand: $.mercariBrand(),
            hashTags: $.hashTag.list
        }
    };
    static labelProperty = 'name';
}
