import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IHashTag, IHashTagUsage } from '../../types';
import Realm, { BSON } from 'realm';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { hashTagColumns } from '../columns/hashTag';

export class HashTag extends EntityBase<IHashTag> {
    static columns: MRT_ColumnDef<IHashTag>[] = hashTagColumns();
    _id: BSON.ObjectId;
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
    static update(item: IHashTag): IHashTag {
        return item;
    }
    static init(): InitValue<IHashTag> {
        return {
            _id: new BSON.ObjectId(),
            name: '',
            usage: []
        };
    }
}
