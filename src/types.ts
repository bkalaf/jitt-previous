import { BSON } from 'realm';
import { auctionSites } from './schema/enums/auctionSite';
import { detailsTypes } from './schema/enums/detailsTypes';

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
export type IClassifier = {
    _id: BSON.ObjectId;
    taxonomy?: IMercariTaxonomy;
    shortName: string;
    parent?: Pick<IClassifier, '_id' | 'shortName' | 'name' | 'hashTags' | 'allHashTags' | 'detailTypes' | 'allAttributes'>;
    name: string;
    type: DBList<string>;
    attributes: DBList<IAttribute>;
    hashTags: DBList<IHashTag>;
    readonly allHashTags: IHashTag[];
    readonly detailTypes: string[];
    readonly allAttributes: IAttribute[];
    subRows: Realm.Types.LinkingObjects<IClassifier, 'parent'>;
}