import { BSON } from 'realm';
import { auctionSites } from './schema/enums/auctionSite';
import { detailsTypes } from './schema/enums/detailsTypes';
import { BleachingKeys, DryCleanKeys, DryingKeys, GentleOrDelicateKeys, IroningKeys, PermanentPressKeys, TumbleDryKeys, WashKeys, WashTemperatureKeys } from './schema/laundryCare';
import { FabricTypes } from './schema/enums/fabric';
import { Flags, ProductColors, Genders, ClosureTypes, FitTypes, LegStyles, GarmentLengths, LifestyleTypes, PocketTypes, RiseTypes, BootTypes, ShoeHeelTypes, ShoeWidths, StrapTypes, ToeStyles, SwimsuitBottomStyles, SwimsuitTopStyles, BacklineTypes, CollarTypes, CuffTypes, DressTypes, NeckTypes, SleeveTypes, SuitTypes, BookGenres, BookTypes, Languages, ESRBRatings, ConsoleTypes, MusicFormatTypes, MusicGenres, HeightMaps, BarcodeTypes, MovieGenres, MovieRatings, TVRatings, VideoFormatTypes, VideoTypes, AmperageUnits, ConnectorGenders, PowerTypes, BatteryTypes, AspectRatios, CellCarriers, OperatingSystems, DinnerwareTypes, ShapeTypes, ApplianceTypes, ClubTypes, FlexTypes, HandOrientations, IronTypes, ShaftTypes, WedgeTypes, MetalTypes, ItemConditions, ItemDispositions, Shippers, SleeveLengths } from './schema/enums';
import { AttachmentDisposition } from './schema/choices/AttachmentDisposition';
import { AttachmentStages } from './schema/choices/AttachmentStages';
import { AttachmentType } from './schema/choices/AttachmentType';
import { ProductImageDisposition } from './schema/entity/ProductImageDisposition';

export type Int = number;
export type Double = number;
export type Opt<T> = T | undefined;

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

export type AuctionSite = keyof typeof auctionSites;

export type ISquareFootage = {
    length: number;
    width: number;
};
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
};

export type IMercariBrand = {
    _id: BSON.ObjectId;
    name: string;
    hashTags: DBList<IHashTag>;
};

export type IHashTagUsage = {
    from: Date;
    count: number;
};
export type IHashTag = {
    _id: BSON.ObjectId;
    name: string;
    usage: DBList<IHashTagUsage>;
    readonly maxCount: number;
    readonly mostRecent: Date;
};

export type IBrand = {
    _id: BSON.ObjectId;
    name: string;
    mercariBrand?: IMercariBrand;
    hashTags: DBList<IHashTag>;
    readonly allHashTags: IHashTag[];
};

export type IMercariCategory = {
    name: string;
    selector: string;
    hashTags: DBList<IHashTag>;
};

export type IMercariTaxonomy = {
    _id: BSON.ObjectId;
    category?: IMercariCategory;
    subCategory?: IMercariCategory;
    subSubCategory?: IMercariCategory;
    hashTags: DBList<IHashTag>;
    fullname: string;
    timestamp?: Date;
    readonly allHashTags: IHashTag[];
};

export type DetailsTypes = keyof typeof detailsTypes;
export type IAttribute = {
    path: string;
    unset: boolean;
    value: Realm.Types.Mixed;
};

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
};

export type IBarcode = {
    _id: BSON.ObjectId;
    isValidated: boolean;
    type: BarcodeTypes;
    value: string;
    beenPrinted: boolean;
    readonly scanValue: string;
    equalTo(value: string | IBarcode): boolean;
};

export type IBin = {
    _id: BSON.ObjectId;
    barcode: IBarcode;
    name: string;
    notes?: string;
};

export type IIncludedItem = {
    qty: number;
    name: string;
};

export type ICustomItemField = {
    name: string;
    id: string;
    value: string;
};



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
};

export type FabricComposition = Partial<Record<FabricTypes, number>>;

export type IMadeOfSection = {
    name?: string;
    section: FabricComposition;
};

export type MadeOf = DBDictionary<IMadeOfSection>;

export type Seconds = Int;
export type ITrack = {
    feat: DBList<string>;
    index: Opt<number>;
    name: Opt<string>;
    runtimeSecs: Opt<Seconds>;
};
export type IConnector = {
    connectorGender?: Opt<ConnectorGenders>;
    innerWidth?: Opt<Double>;
    outerWidth?: Opt<Double>;
    type?: Opt<string>;
};
export type ICurrentSetting = {
    amperage?: Opt<Double>;
    amperageUnit?: Opt<AmperageUnits>;
    voltage?: Opt<Double>;
    wattage?: Opt<Double>;
};

export type IMinMax<T extends Int | Double> = {
    min?: Opt<T>;
    max?: Opt<T>;
};

export type IApparelBottom = {
    closureType?: Opt<ClosureTypes>;
    fitType?: Opt<FitTypes>;
    inseamSize?: Opt<Double>;
    legStyle?: Opt<LegStyles>;
    lengthSize?: Opt<Double>;
    lengthType?: Opt<GarmentLengths>;
    lifestyleType?: Opt<LifestyleTypes>;
    pocketType?: Opt<PocketTypes>;
    riseType?: Opt<RiseTypes>;
    size?: Opt<Int>;
    waistSize?: Opt<Double>;
};
export type IApparel = IApparelBottom & {
    madeOf: DBList<IMadeOfSection>;
    gender?: Opt<Genders>;
    cutNo?: Opt<string>;
    styleNo?: Opt<string>;
    text?: Opt<string>;
    rnNo?: Opt<Int>;
    clothingCare?: Opt<IClothingCare>;
};
export type IProduct = IApparel & {
    _id: BSON.ObjectId;
    asins: DBList<string>;
    brand?: Opt<IBrand>;
    classifier?: Opt<IClassifier>;
    includes: DBList<IIncludedItem>;
    customAttributes: DBList<ICustomItemField>;
    features: DBList<string>;
    flags: DBList<Flags>;
    hashTags: DBList<IHashTag>;
    height?: Opt<Double>;
    width?: Opt<Double>;
    length?: Opt<Double>;
    weight?: Opt<Double>;
    modelNo?: Opt<string>;
    notes?: Opt<string>;
    title?: Opt<string>;
    upcs: DBList<IBarcode>;
    circa?: Opt<string>;
    color: DBList<ProductColors>;
    description?: Opt<string>;
    // // apparel-footwear
    bootType?: Opt<BootTypes>;
    footSize?: Opt<Double>;
    heelHeight?: Opt<Double>;
    heightMapType?: Opt<HeightMaps>;
    shoeHeelType?: Opt<ShoeHeelTypes>;
    shoeWidth?: Opt<ShoeWidths>;
    strapType?: Opt<StrapTypes>;
    toeStyle?: Opt<ToeStyles>;
    // // apparel-bras 
    bustSize?: Opt<Double>;
    swimsuitBottomStyle?: Opt<SwimsuitBottomStyles>;
    swimsuitTopStyle?: Opt<SwimsuitTopStyles>;
    // // apparel-tops 
    backlineType?: Opt<BacklineTypes>;
    chestSize?: Opt<Double>;
    collarType?: Opt<CollarTypes>;
    cuffType?: Opt<CuffTypes>;
    dressType?: Opt<DressTypes>;
    neckSize?: Opt<Double>;
    neckType?: Opt<NeckTypes>;
    sleeveSize?: Opt<Double>;
    sleeveType?: Opt<SleeveTypes>;
    sleeveLength?: Opt<SleeveLengths>;
    suitType?: Opt<SuitTypes>;
    // // media 
    awards: DBList<string>;
    copyright?: Opt<string>;
    mediaSubtitle?: Opt<string>;
    mediaTitle?: Opt<string>;
    // // media-books
    authors: DBList<string>;
    blurb?: Opt<string>;
    bookGenre?: Opt<BookGenres>;
    bookType?: Opt<BookTypes>;
    edition?: Opt<Int>;
    illustrators: DBList<string>;
    language?: Opt<Languages>;
    pages?: Opt<Int>;
    publishers: DBList<string>;
    // // media-videos
    collectionOf: DBList<string>;
    count?: Opt<Int>;
    directedBy: DBList<string>;
    videoFormat?: Opt<VideoFormatTypes>;
    videoGenre?: Opt<MovieGenres>;
    movieRating?: Opt<MovieRatings>;
    runtime?: Opt<Int>;
    starring: DBList<string>;
    tvRating?: Opt<TVRatings>;
    videoType?: Opt<VideoTypes>;
    // // media-video-games
    ESRBRating?: Opt<ESRBRatings>;
    consoleType?: Opt<ConsoleTypes>;
    studio?: Opt<string>;
    // // media-music
    artist?: Opt<string>;
    musicFormat?: Opt<MusicFormatTypes>;
    musicGenre?: Opt<MusicGenres>;
    tracks: DBList<ITrack>;
    // // cables
    cordLength?: Opt<Double>;
    // // cables-data
    connectors: DBList<IConnector>;
    // // cables-power
    compatibleWith: DBList<string>;
    input?: Opt<ICurrentSetting>;
    output?: Opt<ICurrentSetting>;
    // // cables-video
    // // electronics
    batteryCount?: Opt<Int>;
    batteryType?: Opt<BatteryTypes>;
    powerTypes?: Opt<PowerTypes>;
    testedOn?: Opt<Date>;
    // // cell-phones
    aspectRatio?: Opt<AspectRatios>;
    capacity?: Opt<Int>;
    cellCarrier?: Opt<CellCarriers>;
    os?: Opt<OperatingSystems>;
    osVersion?: Opt<string>;
    screenSize?: Opt<Double>;
    // // jewelry
    massInAir?: Opt<Double>;
    massWaterDisplaced?: Opt<Double>;
    readonly density?: Opt<Double>;
    metal?: Opt<MetalTypes>;
    // // home-goods
    // // home-goods-flatware
    // // home-goods-dinnerware
    dinnerwareType?: Opt<DinnerwareTypes>;
    pattern?: Opt<string>;
    shapeType?: Opt<ShapeTypes>;
    // // kitchen-appliances
    applianceType?: Opt<ApplianceTypes>;
    // // sporting-goods 
    // // sporting-goods-golf-clubs
    clubType?: Opt<ClubTypes>;
    flexType?: Opt<FlexTypes>;
    handOrientation?: Opt<HandOrientations>;
    ironType?: Opt<IronTypes>;
    clubLength?: Opt<Double>;
    lie?: Opt<Double>;
    loft?: Opt<Double>;
    shaftType?: Opt<ShaftTypes>;
    swingWeight?: Opt<string>;
    wedgeType?: Opt<WedgeTypes>;
    // // toys
    ages?: Opt<IMinMax<Int>>;
    players?: Opt<IMinMax<Int>>;
    pieceCount?: Opt<Int>;

    readonly allHashTags: IHashTag[];
    readonly detailTypes: DetailTypes[];
    readonly primaryColor: ProductColors | undefined;
    readonly primaryColorSelector: string | undefined;
    readonly sizeText: string | undefined;
    readonly sizeSelector: string | undefined;
};

export type IShipping = {
    id: Int;
    version: Int;
};
export type ProductImageFlags = 'ignore' | 'do-not-rembg';
export type FaceX = 'left' | 'right';
export type FaceY = 'front' | 'back';;
export type FaceZ = 'upper' | 'lower';
export type FacePOV = 'defect' | 'inner' | 'logo' | 'tag' | 'barcode' | 'enhancer' | 'product-info';

export type IFacing = {
    x?: FaceX;
    y?: FaceY;
    z?: FaceZ;
    pov: FacePOV[];
};

export type IProductImage = {
    _id: BSON.ObjectId;
    fullpath: string;
    filename: string;
    extension: string;
    mimeType: string;
    sku: ISku;
    flags: ListBack<ProductImageFlags>;
    takenOn?: Date;
    caption?: string;
    facing?: IFacing;
    selected?: 'original' | 'rembg';
    disposition: ProductImageDisposition;
    // fileSystemContext: IFileSystemContext;
    // scheduleFileChange: IRabbitMQContext['scheduleFileChange'];
    readonly hasSelection: boolean;
    hasRemBG: boolean;
    // stageRemBG(): void;
    // moveOriginal(): void;
    // moveRemBG(): void;
    // createFolders(): void;
};

export type IAttachment = {
    _id: BSON.ObjectId;
    caption?: string;
    fullpath: string;
    filename: string;
    extension?: string;
    mimeType?: string;
    sku: ISku;
    doNotUse: boolean;
    takenOn?: Date;
    attachmentType: AttachmentType;
    attachmentDisposition: AttachmentDisposition;
    attachmentPipelineStage: AttachmentStages;
    sharedLink?: string;
    tinyURL?: string;
    readonly isIdle: boolean;
    readonly nextStage: (this: IAttachment) => IAttachment;
    readonly prevStage: (this: IAttachment) => IAttachment;
    readonly nextDispo: (this: IAttachment) => IAttachment;
    readonly prevDispo: (this: IAttachment) => IAttachment;
    readonly fileTypeFolder?: string;
    readonly originalFileFolder?: string;
    readonly dropboxFileFolder?: string;
    moveToOriginal: (this: IAttachment) => void;
    copyToDropbox: (this: IAttachment) => void;
    identifiedAsVideo: (this: IAttachment) => void;
    identifiedAsAudio: (this: IAttachment) => void;
    identifiedAsDocument: (this: IAttachment) => void;
    provideCaption: (this: IAttachment, caption: string) => void;
    createSharedLink: (this: IAttachment) => string;
    revokeSharedLink: (this: IAttachment) => void;
    createTinyURLForLink: (this: IAttachment, link: string) => string;
    deleteTinyURLForLink: (this: IAttachment, link: string) => void;
};
export type ISku = {
    _id: BSON.ObjectId;
    auction?: Opt<IAuction>;
    condition?: Opt<ItemConditions>;
    defects: DBList<string>;
    disposition?: Opt<ItemDispositions>;
    packingPercent?: Opt<Double>;
    product?: Opt<IProduct>;
    quantity?: Opt<Int>;
    skus: DBList<IBarcode> & [IBarcode];
    shipping?: Opt<IShipping>;
    readonly getShipping?: Opt<IShipping>;
    readonly getShipWeight?: Opt<number>;
    readonly getCarrier?: Opt<Shippers>;
    readonly getMaxWeight?: Opt<[number, number]>;
    readonly getFolder: string;
    readonly getProductImages: Realm.Types.LinkingObjects<IProductImage, 'sku'>;
}

