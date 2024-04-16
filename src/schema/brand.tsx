import { Realm } from 'realm';
import { schemaName } from '../util/schemaName';
import { $ } from './$';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IBrand, IHashTag, IMercariBrand } from '../types';
import { col } from './defs/col';
import { hashTagColumns } from './hashTag';
import { ObjectId } from 'bson';
import { distinctByOID } from '../common/array/distinct';

export const brand: Realm.ObjectSchema = {
    name: schemaName($.brand()),
    primaryKey: '_id',
    properties: {
        _id: $.objectId(),
        name: $.string(),
        mercariBrand: $.mercariBrand(),
        hashTags: $.hashTag.list
    }
};

const h = createMRTColumnHelper<IBrand>();
const helper = col(h);

export const brandColumns: MRT_ColumnDef<IBrand>[] = [
    helper.pk(),
    helper.string('name', 'Name', undefined, { maxLength: 150 }),
    helper.lookup('mercariBrand', 'Mercari Brand', { objectType: 'mercariBrand', labelProperty: 'name' }),
    helper.list<IHashTag>('hashTags', 'Hash Tags', 'hashTag', ({ data }) => data.name, hashTagColumns, 'name'),
    helper.list<IHashTag>('allHashTags', 'Hash Tags', 'hashTag', ({ data }) => data.name, hashTagColumns, 'name', true)
];

export class Brand extends Realm.Object<IBrand> implements IBrand {
    _id: ObjectId;
    name: string;
    mercariBrand?: IMercariBrand | undefined;
    hashTags: DBList<IHashTag>;
    get allHashTags(): IHashTag[] {
        return distinctByOID<IHashTag>([...this.hashTags, ...(this.mercariBrand?.hashTags ?? [])]);
    }

    static schema = brand;
}
