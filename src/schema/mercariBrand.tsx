import Realm from 'realm';
import { schemaName } from '../util/schemaName';
import { $ } from './$';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IHashTag, IMercariBrand } from '../types';
import { col } from './defs/col';
import { hashTagColumns } from './hashTag';

export const mercariBrand: Realm.ObjectSchema = {
    name: schemaName($.mercariBrand()),
    primaryKey: '_id',
    properties: {
        _id: $.objectId(),
        name: $.string(),
        hashTags: $.hashTag.list
    }
}

const h = createMRTColumnHelper<IMercariBrand>();
const helper = col(h);

export const mercariBrandColumns: MRT_ColumnDef<IMercariBrand>[] = [
    helper.pk(),
    helper.string('name', 'Name', undefined, { maxLength: 125 }),
    helper.list('hashTags', 'Hash Tags', 'hashTag', (x: { data: IHashTag }) => x.data.name, hashTagColumns, 'name')
]