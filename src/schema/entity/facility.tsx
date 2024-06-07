import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { ObjectId } from 'bson';
import * as Realm from 'realm';
import { IAddress, IFacility, ISelfStorage } from '../../types';
import { runTransaction } from '../../util/runTransaction';
import { getCityState } from '../../util/getCityState';
import { getStreetOnly } from '../../util/getStreetOnly';

export class Facility extends Realm.Object<IFacility> implements IFacility {
    _id: ObjectId;
    selfStorage?: ISelfStorage | undefined;
    address?: IAddress | undefined;
    facilityNumber?: string | undefined;
    emailAddress?: string | undefined;
    phoneNumber?: string | undefined;
    name: string;

    static schema: Realm.ObjectSchema = {
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

    static labelProperty: 'name';
    static update(realm: Realm, item: IFacility) {
        const func = () => {
            item.name = [item.selfStorage?.name, getCityState(item.address), getStreetOnly(item.address)].filter((x) => x != null).join(' - ');
            return item;
        };
        return runTransaction(realm, func);
    }
}
