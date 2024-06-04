import { $ } from '../$';
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { schemaName } from '../../util/schemaName';
import { ISelfStorage } from '../../types';
import { col } from '../defs/col';
import Realm from "realm";
import { ObjectId } from 'bson';

export const selfStorage: Realm.ObjectSchema = {
    name: schemaName($.selfStorage()),
    primaryKey: '_id',
    properties: {
        _id: $.objectId(),
        name: $.string(),
        website: $.string.opt
    }
};

const helper = createMRTColumnHelper<ISelfStorage>();
const h = col(helper);

export const selfStorageColumns = [h.pk(), h.string('name', 'Name', undefined, { maxLength: 100, required: true }), h.string('website', 'URL', undefined, { maxLength: 225, minLength: 5, type: 'url' })] as MRT_ColumnDef<ISelfStorage>[];

export class SelfStorage extends Realm.Object<ISelfStorage> implements ISelfStorage {
    _id: ObjectId;
    name: string;
    website?: string | undefined;

    static schema = selfStorage;
    static labelProperty = 'name';
}