import { BSON } from 'realm';

export type ISelfStorage = {
    _id: BSON.ObjectId;
    name: string;
    website?: string;
};

export type IAddress = {
    mailing1?: string;
    mailing2?: string;
    suite?: string;
    city: string;
    province: string;
    country: string;
    postalCode?: string;
};

export type IFacility = {
    _id: BSON.ObjectId;
    selfStorage?: ISelfStorage;
    address?: IAddress;
    facilityNumber?: string;
    emailAddress?: string;
    phoneNumber?: string;
    name: string;
};
