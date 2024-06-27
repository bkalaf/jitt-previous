import Realm, { BSON } from 'realm';
import { IDraft, ISku, Opt } from '../../types';
import { PayorTypes, Shippers, ShippingSpeeds } from '../enums';
import { EntityBase } from './EntityBase';
export declare class Draft extends EntityBase<IDraft> implements IDraft {
    listingID: Opt<string>;
    get isListed(): boolean;
    get getIsNoBrand(): boolean;
    _id: BSON.ObjectId;
    sku: ISku;
    title: string;
    description: string;
    price: number;
    isLocalDelivery: boolean;
    payor: PayorTypes;
    smartPricing: boolean;
    smartPrice: Opt<number>;
    get getDims(): {
        length: number;
        width: number;
        height: number;
    };
    get getWeight(): {
        pounds: number;
        ounces: number;
    };
    get getShipping(): {
        carrier: Shippers;
        service: ShippingSpeeds;
        price: number;
        selector: string;
    };
    get getColor(): Opt<{
        selector: string;
        name: string;
    }>;
    get getCondition(): {
        selector: string;
        name: string;
    };
    get getBrandName(): Opt<string>;
    get getCategory(): {
        selector: string;
        name: string;
    };
    get getSubCategory(): {
        selector: string;
        name: string;
    };
    get getSubSubCategory(): {
        selector: string;
        name: string;
    };
    get getHashTags(): string[];
    get getImages(): string[];
    get getShouldLocalDelivery(): boolean;
    get getShouldSmartPricing(): boolean;
    static schema: Realm.ObjectSchema;
    static labelProperty: string;
    static update(item: IDraft): IDraft;
    static createDraft(realm: Realm, sku: ISku, price?: number): IDraft;
    static init(): InitValue<IDraft>;
}
