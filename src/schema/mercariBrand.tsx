import Realm from 'realm';
import { schemaName } from '../util/schemaName';
import { $ } from './$';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IMercariBrand } from '../types';
import { col } from './defs/col';
import { hashTagColumns } from './hashTag';
import { HashTagRowCell } from './HashTagRowCell';

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
    helper.list('hashTags', 'Hash Tags', 'hashTag', HashTagRowCell, hashTagColumns, 'name')
]