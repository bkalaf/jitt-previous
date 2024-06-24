import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IBrand, IHashTag, IMercariBrand } from '../../types';
import { distinctByOID } from '../../common/array/distinct';
import { EntityBase } from './EntityBase';

export class Brand extends EntityBase<IBrand> {
    _id: BSON.ObjectId;
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
    static update(item: IBrand): IBrand {
        return item;
    }
    static init(): InitValue<IBrand> {
        return {
            _id: new BSON.ObjectId(),
            name: '',
            hashTags: []
        }
    }
}
