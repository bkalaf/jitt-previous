import { BSON } from 'realm';
import { auctionSites } from './schema/enums/auctionSite';
import { detailsTypes } from './schema/enums/detailsTypes';
import { BarcodeType } from './schema/enums/barcodeTypes';
import { ProductColors } from './schema/enums/productColors';
import { BleachingKeys, DryCleanKeys, DryingKeys, GentleOrDelicateKeys, IroningKeys, PermanentPressKeys, TumbleDryKeys, WashKeys, WashTemperatureKeys } from './schema/laundryCare';
import { FabricTypes } from './schema/enums/fabric';
import { Flags } from './schema/enums/flags';
import { Genders } from './schema/enums/genders';

export type ISelfStorage = {
    _id: BSON.ObjectId;
    name: string;
    website?: string;
}

export type IAddress = {
    mailing1?: string;
    mailing2?: string;
    suite?: string;
    city: string;
    province: string;
    country: string;
    postalCode?: string;
}

export type IFacility = {
    _id: BSON.ObjectId;
    selfStorage?: ISelfStorage;
    address?: IAddress;
    facilityNumber?: string;
    emailAddress?: string;
    phoneNumber?: string;
    name: string;
}

export type AuctionSite = keyof typeof auctionSites;

export type ISquareFootage = {
    length: number;
    width: number;
}
export type IAuction = {
    _id: BSON.ObjectId;
    name: string;
    facility?: IFacility;
    closeDate: Date;
    auctionId?: string;
    auctionSite: AuctionSite;
    invoiceId?: string;
    finalBid?: number;
    premiumPercent?: number;
    salesTaxPercent?: number;
    taxExempt: boolean;
    size?: ISquareFootage;
    unit?: string;
    readonly totalPrice: number;
}

export type IMercariBrand = {
    _id: BSON.ObjectId;
    name: string;
    hashTags: DBList<IHashTag>;
}

export type IHashTagUsage = {
    from: Date;
    count: number;
}
export type IHashTag = {
    _id: BSON.ObjectId;
    name: string;
    usage: DBList<IHashTagUsage>;
    readonly maxCount: number;
    readonly mostRecent: Date;
}

export type IBrand = {
    _id: BSON.ObjectId;
    name: string;
    mercariBrand?: IMercariBrand;
    hashTags: DBList<IHashTag>;
    readonly allHashTags: IHashTag[];
}

export type IMercariCategory = {
    name: string;
    selector: string;
    hashTags: DBList<IHashTag>;    
}

export type IMercariTaxonomy = {
    _id: BSON.ObjectId;
    category?: IMercariCategory;
    subCategory?: IMercariCategory;
    subSubCategory?: IMercariCategory;
    hashTags: DBList<IHashTag>;
    fullname: string;
    timestamp?: Date;
    readonly allHashTags: IHashTag[];
}

export type DetailsTypes = keyof typeof detailsTypes;
export type IAttribute = {
    path: string;
    unset: boolean;
    value: Realm.Types.Mixed;
}

export type DetailTypes = 'apparel-bottoms' | 'apparel-bras' | 'apparel-footwear' | 'apparel-tops' | 'apparel' | 'cables-data' | 'cables-power' | 'cables-video' | 'cables' | 'cell-phones' | 'electronics' | 'general' | 'home-goods-dinnerware' | 'home-goods-flatware' | 'home-goods' | 'jewelry' | 'kitchen-appliances' | 'media-books' | 'media-music' | 'media-video-games' | 'media-videos-film' | 'media-videos-tv-series' | 'media-videos' | 'media' | 'sporting-goods-golf-clubs' | 'sporting-goods' | 'toys';

export type IClassifier = {
    _id: BSON.ObjectId;
    taxonomy?: IMercariTaxonomy;
    shortName: string;
    parent?: Pick<IClassifier, '_id' | 'shortName' | 'name' | 'hashTags' | 'allHashTags' | 'detailTypes' | 'allAttributes'>;
    name: string;
    type: DBList<DetailTypes>;
    attributes: DBList<IAttribute>;
    hashTags: DBList<IHashTag>;
    readonly allHashTags: IHashTag[];
    readonly detailTypes: DetailTypes[];
    readonly allAttributes: IAttribute[];
    readonly subRows: Realm.Types.LinkingObjects<IClassifier, 'parent'>;
}

export type IBarcode = {
    _id: BSON.ObjectId;
    isValidated: boolean;
    type: BarcodeType;
    value: string;
    readonly scanValue: string;
    equalTo(value: string | IBarcode): boolean;
}

export type IBin = {
    _id: BSON.ObjectId;
    barcode: IBarcode;
    inventoryLabelPrinted: boolean;
    name: string;
    notes?: string;
}

export type IIncludedItem = {
    qty: number;
    name: string;
}

export type ICustomItemField = {
    name: string;
    id: string;
    value: string;
}



export type IClothingCare = {
    bleaching: DBList<BleachingKeys>;
    dryClean: DBList<DryCleanKeys>;
    drying: DBList<DryingKeys>;
    gentleOrDelicate: DBList<GentleOrDelicateKeys>;
    ironing: DBList<IroningKeys>;
    permanentPress: DBList<PermanentPressKeys>;
    tumbleDry: DBList<TumbleDryKeys>;
    wash: DBList<WashKeys>;
    washTemperature: DBList<WashTemperatureKeys>;
}

export type FabricComposition = Partial<Record<FabricTypes, number>>;

export type IMadeOfSection = {
    name?: string;
    section: FabricComposition;
}

export type MadeOf = DBDictionary<IMadeOfSection>;

export type IProduct = {
    _id: BSON.ObjectId;
    asins: DBList<string>;
    brand?: IBrand;
    classifier?: IClassifier;
    includes: DBList<IIncludedItem>;
    customAttributes: DBList<ICustomItemField>;
    features: DBList<string>;
    flags: DBList<Flags>;
    hashTags: DBList<IHashTag>;
    height?: number;
    width?: number;
    length?: number;
    weight?: number;
    modelNo?: string;
    notes?: string;
    title?: string;
    upcs: DBList<IBarcode>;
    circa?: string;
    color?: DBList<ProductColors>;
    description?: string;
    // details: IProductDetails;
    // apparel
    madeOf: DBList<IMadeOfSection>;
    gender?: Genders;
    cutNo?: string;
    styleNo?: string;
    text?: string;
    rnNo?: number;
    clothingCare?: IClothingCare;
    readonly allHashTags: IHashTag[];
    readonly detailTypes: DetailTypes[];
};
export type IProductDetails = {
    type: DBList<string>;
    discriminator: string;
}

