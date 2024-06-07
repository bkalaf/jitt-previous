import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IHashTag, IHashTagUsage } from '../../types';
import { ObjectId } from 'bson';
import Realm from 'realm';

export class HashTag extends Realm.Object<IHashTag> implements IHashTag {
    _id: ObjectId;
    name: string;
    usage: DBList<IHashTagUsage>;
    get maxCount(): number {
        return Math.max(...this.usage.map((x) => x.count));
    }
    get mostRecent(): Date {
        return new Date(Math.max(...this.usage.map((x) => x.from.valueOf())));
    }

    static schema: Realm.ObjectSchema = {
        name: schemaName($.hashTag()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            name: $.string(),
            usage: $.hashTagUsage.list
        }
    };
    static labelProperty = 'name';
}
