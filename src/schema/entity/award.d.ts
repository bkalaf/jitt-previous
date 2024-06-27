import { AwardStatus, IAward, Opt } from '../../types';
import { AwardNames, EmmyAwardCategories, GrammyAwardCategories, HugoAwardCategories, NYTimesAwardCategories, OscarAwardCategories, PulitzerPrizeAwardCategories, TonyAwardCategories } from '../enums';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
export declare abstract class BaseAward<TAwardName extends AwardNames> extends EntityBase<IAward<TAwardName>> implements IAward<TAwardName> {
    name: TAwardName;
    category: Opt<'hugo' extends TAwardName ? HugoAwardCategories : 'oscar' extends TAwardName ? OscarAwardCategories : 'emmy' extends TAwardName ? EmmyAwardCategories : 'tony' extends TAwardName ? TonyAwardCategories : 'pulitzer' extends TAwardName ? PulitzerPrizeAwardCategories : 'grammy' extends TAwardName ? GrammyAwardCategories : 'ny-times' extends TAwardName ? NYTimesAwardCategories : never>;
    year: Opt<string>;
    who: Opt<string>;
    status: Opt<AwardStatus>;
    static schema: Realm.ObjectSchema;
    static update(item: IAward<AwardNames>): IAward<AwardNames>;
    static liComponent: ListItemCellComponent<IAward<AwardNames>>;
    static init(): InitValue<IAward<AwardNames>>;
    constructor(name: TAwardName, realm: Realm, values: any);
}
export declare class Award<T extends AwardNames> extends BaseAward<T> {
    constructor(realm: Realm, values: any);
}
export declare class NYTimesAward extends BaseAward<'ny-times'> {
    category: Opt<NYTimesAwardCategories>;
    name: "ny-times";
    static schema: {
        name: string;
        primaryKey?: string | undefined;
        embedded?: boolean | undefined;
        asymmetric?: boolean | undefined;
        properties: Realm.PropertiesTypes;
    };
}
export declare class OscarAward extends BaseAward<'oscar'> {
    category: Opt<OscarAwardCategories>;
    name: "oscar";
    static schema: {
        name: string;
        primaryKey?: string | undefined;
        embedded?: boolean | undefined;
        asymmetric?: boolean | undefined;
        properties: Realm.PropertiesTypes;
    };
}
export declare class EmmyAward extends BaseAward<'emmy'> {
    name: "emmy";
    category: Opt<EmmyAwardCategories>;
    static schema: {
        name: string;
        primaryKey?: string | undefined;
        embedded?: boolean | undefined;
        asymmetric?: boolean | undefined;
        properties: Realm.PropertiesTypes;
    };
}
export declare class GrammyAward extends BaseAward<'grammy'> {
    name: "grammy";
    category: Opt<GrammyAwardCategories>;
    static schema: {
        name: string;
        primaryKey?: string | undefined;
        embedded?: boolean | undefined;
        asymmetric?: boolean | undefined;
        properties: Realm.PropertiesTypes;
    };
}
export declare class TonyAward extends BaseAward<'tony'> {
    name: "tony";
    category: Opt<TonyAwardCategories>;
    static schema: {
        name: string;
        primaryKey?: string | undefined;
        embedded?: boolean | undefined;
        asymmetric?: boolean | undefined;
        properties: Realm.PropertiesTypes;
    };
}
export declare class HugoAward extends BaseAward<'hugo'> {
    name: "hugo";
    category: Opt<HugoAwardCategories>;
    static schema: {
        name: string;
        primaryKey?: string | undefined;
        embedded?: boolean | undefined;
        asymmetric?: boolean | undefined;
        properties: Realm.PropertiesTypes;
    };
}
export declare class PulitzerAward extends BaseAward<'pulitzer'> {
    name: "pulitzer";
    category: Opt<PulitzerPrizeAwardCategories>;
    static schema: {
        name: string;
        primaryKey?: string | undefined;
        embedded?: boolean | undefined;
        asymmetric?: boolean | undefined;
        properties: Realm.PropertiesTypes;
    };
}
