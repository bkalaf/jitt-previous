import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { ISelfStorage } from '../../types';
import Realm, { BSON } from 'realm';
import { EntityBase } from './EntityBase';

export class SelfStorage extends EntityBase<ISelfStorage> {
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
    static init(): InitValue<ISelfStorage> {
        return {
            _id: new BSON.ObjectId(),
            name: ''
        };
    }
    static update(item: ISelfStorage): ISelfStorage {
        return item;
    }
}
