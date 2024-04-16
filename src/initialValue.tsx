import { BSON } from 'realm';
import { IAddress, IAttribute, IAuction, IBrand, IClassifier, IFacility, IHashTag, IHashTagUsage, IMercariBrand, IMercariCategory, IMercariTaxonomy, ISelfStorage, ISquareFootage } from './types';

export const initialValue = {
    classifier: (): InitialValue<IClassifier> => ({ _id: new BSON.ObjectId(), type: [], hashTag: [], attributes: [], shortName: '', name: '' }),
    attribute: (): InitialValue<IAttribute> => ({ path: '', unset: false }),
    mercariCategory: (): InitialValue<IMercariCategory> => ({ name: '', selector: '', hashTags: [] }),
    mercariTaxonomy: (): InitialValue<IMercariTaxonomy> => ({ _id: new BSON.ObjectId(), fullname: '', hashTags: [], category: initialValue.mercariCategory(), subCategory: initialValue.mercariCategory(), subSubCategory: initialValue.mercariCategory() }),
    squareFootage: (): InitialValue<ISquareFootage> => ({ width: 0, length: 0 }),
    auction: (): InitialValue<IAuction> => ({ _id: new BSON.ObjectId(), size: initialValue.squareFootage(), name: '', auctionSite: 'storagetreasures', closeDate: new Date(Date.now()), taxExempt: false }),
    hashTag: (): InitialValue<IHashTag> => ({ _id: new BSON.ObjectId(), name: '', usage: [] }),
    hashTagUsage: (): IHashTagUsage => ({ from: new Date(Date.now()), count: 0 }),
    selfStorage: (): ISelfStorage => ({ _id: new BSON.ObjectId(), name: '', website: '' }),
    address: (): IAddress => ({ mailing1: '', mailing2: '', suite: '', city: '', province: 'CA', country: 'US', postalCode: '' }),
    facility: (): InitialValue<IFacility> => ({ _id: new BSON.ObjectId(), facilityNumber: '', emailAddress: '', phoneNumber: '', selfStorage: undefined, address: initialValue.address(), name: '' }),
    mercariBrand: (): InitialValue<IMercariBrand> => ({ _id: new BSON.ObjectId(), name: '', hashTags: [] }),
    brand: (): InitialValue<IBrand> => ({ _id: new BSON.ObjectId(), name: '', hashTags: [] })
};
