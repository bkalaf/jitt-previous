import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import Realm, { BSON } from 'realm';
import { IAddress, IFacility, ISelfStorage } from '../../types';
import { runTransaction } from '../../util/runTransaction';
import { getCityState } from '../../util/getCityState';
import { getStreetOnly } from '../../util/getStreetOnly';
import { getInitFor } from './getInitFor';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { facilityColumns } from '../columns/facility';

export class Facility extends EntityBase<IFacility> {
    static columns: MRT_ColumnDef<IFacility>[] = facilityColumns();
    _id: BSON.ObjectId;
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

    static labelProperty = 'name';
    static update(item: IFacility) {
        const func = () => {
            item.name = [item.selfStorage?.name, getCityState(item.address), getStreetOnly(item.address)].filter((x) => x != null).join(' - ');
            return item;
        };
        return runTransaction(Facility.localRealm, func);
    }
    static init(): InitValue<IFacility> {
        const selfStorage = getInitFor<ISelfStorage>(Facility, 'selfStorage');
        const address = getInitFor<IAddress>(Facility, 'address');
        return {
            _id: new BSON.ObjectId(),
            name: '',
            selfStorage: selfStorage(),
            address: address()
        };
    }
}
