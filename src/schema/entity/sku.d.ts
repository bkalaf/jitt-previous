import Realm, { BSON } from 'realm';
import { IAuction, IBarcode, IHashTag, IProduct, IProductImage, IShipping, ISku, Opt } from '../../types';
import { ItemConditions, ItemDispositions, Shippers } from '../enums';
import { EntityBase } from './EntityBase';
export declare class Sku extends EntityBase<ISku> implements ISku {
    hashTags: DBList<IHashTag>;
    get allHashTags(): IHashTag[];
    get hasDraft(): boolean;
    static barcodeGenerator: () => string;
    static init(): InitValue<ISku>;
    static addFromProduct(product: IProduct): ISku;
    addBarcode(this: ISku, generator: () => string): ISku;
    _id: BSON.ObjectId;
    auction?: Opt<IAuction>;
    condition?: Opt<ItemConditions>;
    defects: DBList<string>;
    disposition?: Opt<ItemDispositions>;
    packingPercent?: Opt<number>;
    product?: Opt<IProduct>;
    quantity?: Opt<number>;
    skus: DBList<IBarcode> & [IBarcode, ...IBarcode[]];
    shipping?: Opt<IShipping>;
    static labelProperty: string;
    static schema: Realm.ObjectSchema;
    get getIsMediaMail(): boolean;
    get getShipping(): IShipping;
    get getShipWeight(): Opt<number>;
    get getCarrier(): Opt<Shippers>;
    get getShippingPrice(): Opt<number>;
    get getMaxWeight(): Opt<{
        pounds: number;
        ounces: number;
    }>;
    get getFolder(): string;
    get getProductImages(): Realm.Types.LinkingObjects<IProductImage, 'sku'>;
    get getTitle(): Opt<string>;
    static update(item: ISku): ISku;
}
