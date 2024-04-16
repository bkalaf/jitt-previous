// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="../types.ts" />
import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { $ } from './$';
import { schemaName } from '../util/schemaName';
import { addressColumns, getCityState, getStreetOnly } from './address';
import { ObjectId } from 'bson';
import * as Realm from 'realm';
import { IAddress, IFacility, ISelfStorage } from '../types';
import { runTransaction } from '../util/runTransaction';
import { col } from './defs/col';
import { groupCol } from './defs/groupCol';

export const facility: Realm.ObjectSchema = {
    name: schemaName($.facility()),
    primaryKey: '_id',
    properties: {
        _id: $.objectId(),
        name: $.string(),
        facilityNumber: $.string.opt,
        phoneNumber: $.string.opt,
        emailAddress: $.string.opt,
        selfStorage: $.selfStorage(),
        address: $.address()
    }
};

const h = createMRTColumnHelper<IFacility>();
const helper = col(h);

export const facilityColumns = [
    helper.pk(),
    helper.lookup('selfStorage', 'Self-Storage', { objectType: 'selfStorage', labelProperty: 'name' }),
    helper.string('facilityNumber', 'Facility #', undefined, { maxLength: 30 }),
    helper.string('phoneNumber', 'Phone #', (x?: unknown) => x != null && typeof x === 'string' ? ['(', x.slice(0, 3), ') ', x.slice(3, 6), '-', x.slice(6)].join('') : '', { maxLength: 15 }),
    helper.string('emailAddress', 'E-mail', undefined, { maxLength: 200, type: 'email' }),
    helper.string('name', 'Name', undefined, { readonly: true }),
    groupCol(h, 'Address', addressColumns, 'address', 'bg-blue-700', 'text-white')
] as MRT_ColumnDef<IFacility>[];

export class Facility extends Realm.Object<IFacility> implements IFacility {
    _id: ObjectId;
    selfStorage?: ISelfStorage | undefined;
    address?: IAddress | undefined;
    facilityNumber?: string | undefined;
    emailAddress?: string | undefined;
    phoneNumber?: string | undefined;
    name: string;

    static schema = facility;

    static update(realm: Realm, item: IFacility) {
        const func = () => {
            item.name = [item.selfStorage?.name, getCityState(item.address), getStreetOnly(item.address)].filter(x => x != null).join(' - ');
            return item;
        }
        return runTransaction(realm, func);
    }
}

