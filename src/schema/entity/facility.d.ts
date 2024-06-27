import Realm, { BSON } from 'realm';
import { IAddress, IFacility, ISelfStorage } from '../../types';
import { EntityBase } from './EntityBase';
export declare class Facility extends EntityBase<IFacility> {
    _id: BSON.ObjectId;
    selfStorage?: ISelfStorage | undefined;
    address?: IAddress | undefined;
    facilityNumber?: string | undefined;
    emailAddress?: string | undefined;
    phoneNumber?: string | undefined;
    name: string;
    static schema: Realm.ObjectSchema;
    static labelProperty: 'name';
    static update(item: IFacility): IFacility;
    static init(): InitValue<IFacility>;
}
