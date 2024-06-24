
// const barcode = (): InitialValue<IBarcode> => ({ _id: new BSON.ObjectId(), value: '0000000000000', isValidated: false, type: 'ean', beenPrinted: false });

// export const initialValue = {
//     string: (): { value: string } => ({ value: '' }),
//     int: (): { value: number } => ({ value: 0 }),
//     float: (): { value: number } => ({ value: 0 }),
//     double: (): { value: number } => ({ value: 0 }),
//     bool: (): { value: boolean } => ({ value: false }),
//     classifier: (): InitialValue<IClassifier> => ({ _id: new BSON.ObjectId(), type: [], hashTags: [], attributes: [], shortName: '', name: '' }),
//     attribute: (): InitialValue<IAttribute> => ({ path: '', unset: false, value: undefined }),
//     mercariCategory: (): InitialValue<IMercariCategory> => ({ name: '', selector: '', hashTags: [] }),
//     mercariTaxonomy: (): InitialValue<IMercariTaxonomy> => ({
//         _id: new BSON.ObjectId(),
//         fullname: '',
//         hashTags: [],
//         // category: initialValue.mercariCategory() as any as IMercariCategory,
//         // subCategory: initialValue.mercariCategory() as any as IMercariCategory,
//         // subSubCategory: initialValue.mercariCategory() as any as IMercariCategory
//     }),
//     squareFootage: (): InitialValue<ISquareFootage> => ({ width: 0, length: 0 }),
//     auction: (): InitialValue<IAuction> => ({ _id: new BSON.ObjectId(), size: initialValue.squareFootage(), name: '', auctionSite: 'storageTreasures', closeDate: new Date(Date.now()), taxExempt: false }),
//     hashTag: (): InitialValue<IHashTag> => ({ _id: new BSON.ObjectId(), name: '', usage: [] }),
//     hashTagUsage: (): IHashTagUsage => ({ from: new Date(Date.now()), count: 0 }),
//     selfStorage: (): ISelfStorage => ({ _id: new BSON.ObjectId(), name: '', website: '' }),
//     address: (): IAddress => ({ mailing1: '', mailing2: '', suite: '', city: '', province: 'CA', country: 'US', postalCode: '' }),
//     facility: (): InitialValue<IFacility> => ({ _id: new BSON.ObjectId(), facilityNumber: '', emailAddress: '', phoneNumber: '', selfStorage: undefined, address: initialValue.address(), name: '' }),
//     mercariBrand: (): InitialValue<IMercariBrand> => ({ _id: new BSON.ObjectId(), name: '', hashTags: [] }),
//     brand: (): InitialValue<IBrand> => ({ _id: new BSON.ObjectId(), name: '', hashTags: [] }),
//     barcode,
//     bin: (): InitialValue<IBin> => ({ _id: new BSON.ObjectId(), barcode: barcode() as any as IBarcode, name: '' }),
//     includedItem: (): InitialValue<IIncludedItem> => ({ qty: 1, name: '' }),
//     customItemField: (): InitialValue<ICustomItemField> => ({ property: '', id: '', value: '' }),
//     connector: (): InitialValue<IConnector> => ({}),
//     currentSetting: (): InitialValue<ICurrentSetting> => ({}),
//     minMax: (): InitialValue<IMinMax<Int>> => ({}),
//     madeOfSection: (): InitialValue<IMadeOfSection> => ({
//         name: '',
//         section: {}
//     }),
//     product: (): InitialValue<IProduct> => ({
//         _id: new BSON.ObjectId(),
//         hashTags: [],
//         asins: [],
//         includes: [],
//         features: [],
//         customAttributes: [],
//         flags: [],
//         upcs: [],
//         color: [],
//         madeOf: [],
//         awards: [],
//         authors: [],
//         illustrators: [],
//         publishers: [],
//         collectionOf: [],
//         directedBy: [],
//         starring: [],
//         tracks: [],
//         connectors: [],
//         compatibleWith: [],
//         testIncludes: {}
//     })
// };
