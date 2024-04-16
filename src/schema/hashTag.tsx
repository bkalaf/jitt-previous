import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { $ } from './$';
import { schemaName } from '../util/schemaName';
import { IHashTag, IHashTagUsage } from '../types';
import { col } from './defs/col';
import { hashTagUsageColumns } from './hashTagUsage';
import { ObjectId } from 'bson';

export const hashTag: Realm.ObjectSchema = {
    name: schemaName($.hashTag()),
    primaryKey: '_id',
    properties: {
        _id: $.objectId(),
        name: $.string(),
        usage: $.hashTagUsage.list
    }
};

const h = createMRTColumnHelper<IHashTag>();
const helper = col(h);

export const hashTagColumns = [
    helper.pk(),
    helper.string('name', 'Name', undefined, { maxLength: 150, pattern: /^[a-z0-9]{3, 150}$/, minLength: 3 }),
    helper.list('usage', 'Usage', 'hashTagUsage', ({ data }: { data: IHashTagUsage }) => [data.from.toDateString(), data.count.toFixed(0)].join(': '), hashTagUsageColumns),
    helper.date('mostRecent', 'Most Recent', (x?: Date) => x?.toDateString(), { readonly: true }),
    helper.int('maxCount', 'Max Count', { readonly: true })
] as MRT_ColumnDef<IHashTag>[];

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

    static schema = hashTag;
}
