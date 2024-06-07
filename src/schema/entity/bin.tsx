import Realm from 'realm';
import { IBarcode, IBin } from '../../types';
import { ObjectId } from 'bson';
import { $ } from '../$';
import { schemaName } from '../../util/schemaName';

export class Bin extends Realm.Object<IBin> implements IBin {
    _id: ObjectId;
    barcode: IBarcode;
    name: string;
    notes?: string | undefined;

    static labelProperty = 'name';

    static schema: Realm.ObjectSchema = {
        name: schemaName($.bin()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            barcode: $.barcode(),
            name: $.string(),
            notes: $.string.opt
        }
    };
}


