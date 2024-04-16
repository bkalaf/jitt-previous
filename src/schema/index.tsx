import { address } from './address';
import { Auction } from './auction';
import { Brand } from './brand';
import { Facility } from './facility';
import { HashTag } from './hashTag';
import { hashTagUsage } from './hashTagUsage';
import { mercariBrand } from './mercariBrand';
import { MercariCategory } from './mercariCategory';
import { MercariTaxonomy } from './mercariTaxonomy';
import { selfStorage } from './selfStorage';
import { squareFootage } from './squareFootage';

export const schema: (Realm.ObjectSchema | Realm.ObjectClass<any>)[] = [
    selfStorage,
    Facility,
    address,
    Auction,
    hashTagUsage,
    HashTag,
    mercariBrand,
    Brand,
    squareFootage,
    MercariCategory,
    MercariTaxonomy
]