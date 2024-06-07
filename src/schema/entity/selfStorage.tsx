import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { ISelfStorage } from '../../types';
import Realm, { BSON } from 'realm';

export class SelfStorage extends Realm.Object<ISelfStorage> implements ISelfStorage {
    _id: BSON.ObjectId;
    name: string;
    website?: string | undefined;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.selfStorage()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            name: $.string(),
            website: $.string.opt
        }
    };
    static labelProperty = 'name';
}
