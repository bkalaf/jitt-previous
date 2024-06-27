import Realm from 'realm';
import { IAddress } from '../../types';
import { Countries, Provinces } from '../enums';
import { EntityBase } from './EntityBase';
export declare class Address extends EntityBase<IAddress> {
    static init(): InitValue<IAddress>;
    mailing1?: string | undefined;
    mailing2?: string | undefined;
    suite?: string | undefined;
    city: string;
    province: Provinces;
    country: Countries;
    postalCode?: string | undefined;
    static schema: Realm.ObjectSchema;
    static stringify: (value?: IAddress) => () => string;
    static liComponent: (value?: IAddress) => () => string;
    static update(item: IAddress): IAddress;
}
