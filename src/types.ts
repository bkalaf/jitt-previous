import Realm, { BSON } from 'realm';
import { auctionSites } from './schema/enums/auctionSite';
import { detailsTypes } from './schema/enums/detailsTypes';
import { BleachingKeys, DryCleanKeys, DryingKeys, GentleOrDelicateKeys, IroningKeys, PermanentPressKeys, TumbleDryKeys, WashKeys, WashTemperatureKeys } from './schema/laundryCare';
import { FabricTypes } from './schema/enums/fabric';
import {
    ProductColors,
    Genders,
    ClosureTypes,
    FitTypes,
    LegStyles,
    GarmentLengths,
    LifestyleTypes,
    PocketTypes,
    RiseTypes,
    BootTypes,
    ShoeHeelTypes,
    ShoeWidths,
    StrapTypes,
    ToeStyles,
    SwimsuitBottomStyles,
    SwimsuitTopStyles,
    BacklineTypes,
    CollarTypes,
    CuffTypes,
    DressTypes,
    NeckTypes,
    SleeveTypes,
    SuitTypes,
    BookGenres,
    BookTypes,
    Languages,
    ESRBRatings,
    ConsoleTypes,
    MusicFormatTypes,
    MusicGenres,
    HeightMaps,
    BarcodeTypes,
    MovieGenres,
    MovieRatings,
    TVRatings,
    VideoFormatTypes,
    VideoTypes,
    ConnectorGenders,
    PowerTypes,
    BatteryTypes,
    AspectRatios,
    CellCarriers,
    DinnerwareTypes,
    ShapeTypes,
    ApplianceTypes,
    ClubTypes,
    FlexTypes,
    HandOrientations,
    IronTypes,
    ShaftTypes,
    WedgeTypes,
    MetalTypes,
    ItemConditions,
    ItemDispositions,
    Shippers,
    SleeveLengths,
    FlatwareTypes,
    CableTypes,
    DataConnectorTypes,
    PowerConnectorTypes,
    VideoConnectorTypes,
    Materials,
    ShippingSpeeds,
    PayorTypes,
    DriveType,
    MemoryType,
    MemoryFormFactor,
    HardDriveFormFactor,
    HardDriveConnectivity,
    HardDriveInterface,
    CompatibleDevices,
    CASLatency,
    Countries,
    AwardNames,
    HugoAwardCategories,
    EmmyAwardCategories,
    OscarAwardCategories,
    TonyAwardCategories,
    PulitzerPrizeAwardCategories,
    GrammyAwardCategories,
    NYTimesAwardCategories
} from './schema/enums';
import { AttachmentDisposition } from './schema/choices/AttachmentDisposition';
import { AttachmentStages } from './schema/choices/AttachmentStages';
import { AttachmentType } from './schema/choices/AttachmentType';
import { ProductImageDisposition } from './schema/entity/ProductImageDisposition';
import { Flags } from './schema/enums/flags';
import { IShippingRate } from './schema/enums/shippingRates';

export type AmperageUnitsOfMeasure = 'A' | 'mA';
export type AngleUnitsOfMeasure = '°';
export type CaliperSizeUnitsOfMeasure = 'mm' | '″';
export type CapacityUnitsOfMeasure = 'GB' | 'TB' | 'MB';
export type DataTransferRateUnitsOfMeasure = 'MB/s' | 'MBit/s';
export type DensityUnitsOfMeasure = 'g/cm³' | 'lb/floz';
export type DistanceUnitsOfMeasure = 'ft' | 'm';
export type LengthUnitsOfMeasure = 'cm' | '″';
export type MemorySpeedUnitsOfMeasure = 'MHz';
export type MusicDurationUnitsOfMeasure = 's' | 'm';
export type PowerConsumptionUnitsOfMeasure = 'WHr';
export type RateOfEnergyCapacityUnitsOfMeasure = 'mAh';
export type RotationalSpeedUnitsOfMeasure = 'RPM';
export type VideoRuntimeUnitsOfMeasure = 'm' | 'h';
export type VoltageUnitsOfMeasure = 'V' | 'mV';
export type WattageUnitsOfMeasure = 'W';
export type WeightUnitsOfMeasure = 'lb' | 'oz' | 'g';

export type OperatingSystemNames = 'unknown' | 'android' | 'ios' | 'blackberry' | 'linux' | 'nucleus' | 'symbian' | 'macOS' | 'fire' | 'windows';
export type Int = number;
export type Double = number;
export type Opt<T> = T | undefined;

export type IMeasure<TUnit extends string> = {
    value: number;
    uom: TUnit;
};
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
    length: Opt<IMeasure<DistanceUnitsOfMeasure>>;
    width: Opt<IMeasure<DistanceUnitsOfMeasure>>;
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
    timestamp: Opt<Date>;
    customItemFields: DBList<ICustomItemFieldType>;
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
    folder: string;
    readonly allHashTags: IHashTag[];
};

export type IApparelSize = {
    index: Int;
    key: string;
    text: string;
    readonly selector: string;
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
    customItemField: Opt<ICustomItemField>;
    sizes: DBList<IApparelSize>;
    readonly allHashTags: IHashTag[];
};

export type DetailsTypes = keyof typeof detailsTypes;
export type IAttribute = {
    path: string;
    unset: boolean;
    value: Realm.Types.Mixed;
};

export type DetailTypes =
    | 'apparel'
    | 'apparel/bottoms'
    | 'apparel/bottoms/legged'
    | 'apparel/bras'
    | 'apparel/bras/swimsuit'
    | 'apparel/footwear'
    | 'apparel/tops'
    | 'cables'
    | 'cables/data'
    | 'cables/power'
    | 'cables/video'
    | 'electronics'
    | 'electronics/visual'
    | 'electronics/visual/cell-phones'
    | 'electronics/computer-components'
    | 'electronics/computer-components/drives'
    | 'electronics/computer-components/ram'
    | 'electronics/computer-components/battery'
    | 'electronics/kitchen-appliances'
    | 'home-goods'
    | 'home-goods/decor'
    | 'home-goods/decor/wall-art'
    | 'home-goods/dinnerware'
    | 'home-goods/flatware'
    | 'home-goods/glassware'
    | 'media'
    | 'media/books'
    | 'media/music'
    | 'media/video-games'
    | 'media/videos'
    | 'media/videos/film'
    | 'media/videos/tv-series'
    | 'sporting-goods'
    | 'sporting-goods/golf'
    | 'sporting-goods/golf/clubs'
    | 'sporting-goods/tennis'
    | 'sporting-goods/tennis/rackets'
    | 'sporting-goods/bowling'
    | 'sporting-goods/bowling/balls'
    | 'general'
    | 'jewelry'
    | 'jewelry/precious-metal'
    | 'jewelry/costume'
    | 'toys'
    | 'toys/board-games';

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
    readonly kind: 'sku' | 'bin' | 'unknown';
    readonly linkedSkus: Realm.Results<ISku>;
    readonly linkedBin: Realm.Results<IBin>;
};

export type IBin = {
    _id: BSON.ObjectId;
    barcode: IBarcode;
    name: string;
    notes?: string;
    addBarcode(this: IBin, generator: () => string): IBin;
};

export type IIncludedItem = {
    qty: number;
    name: string;
};

export type ICustomItemFieldValue = {
    readonly getParent: Realm.Types.LinkingObjects<ICustomItemField, 'options'>;
    text: string;
    id: string;
    nextField: Opt<ICustomItemField>;
};
export type ICustomItemFieldType = {
    readonly getMercariBrand: Realm.Types.LinkingObjects<IMercariBrand, 'customItemFields'>;
    type: Opt<string>;
    values: DBList<ICustomItemFieldValue>;
};
export type ICustomItemFieldTypes = {
    types: DBList<ICustomItemFieldType>;
};
export type ICustomItemField = {
    _id: BSON.ObjectId;
    id: string;
    linkedType: Opt<string>;
    brandsMap: DBDictionary<ICustomItemFieldTypes>;
    readonly getTaxonomy: Realm.Types.LinkingObjects<IMercariTaxonomy, 'customItemField'>;
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

export type ITrack = {
    feat: DBList<string>;
    index: Opt<number>;
    name: Opt<string>;
    duration: Opt<IMeasure<MusicDurationUnitsOfMeasure>>;
};
export type IConnector<TConnector extends PowerConnectorTypes | DataConnectorTypes | VideoConnectorTypes> = {
    connectorGender?: Opt<ConnectorGenders>;
    innerWidth?: Opt<IMeasure<CaliperSizeUnitsOfMeasure>>;
    outerWidth?: Opt<IMeasure<CaliperSizeUnitsOfMeasure>>;
    type?: Opt<TConnector>;
    generation: Opt<Int>;
};
export type ICurrentSetting = {
    amperage?: Opt<IMeasure<AmperageUnitsOfMeasure>>;
    voltage?: Opt<IMeasure<VoltageUnitsOfMeasure>>;
    wattage?: Opt<IMeasure<WattageUnitsOfMeasure>>;
};

export type IMinMax<T extends Int | Double> = {
    min?: Opt<T>;
    max?: Opt<T>;
};

export type IApparelBottom = {
    closureType?: Opt<ClosureTypes>;
    fitType?: Opt<FitTypes>;
    inseamSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    legStyle?: Opt<LegStyles>;
    lengthSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    lengthType?: Opt<GarmentLengths>;
    lifestyleType?: Opt<LifestyleTypes>;
    pocketType?: Opt<PocketTypes>;
    riseType?: Opt<RiseTypes>;
    size?: Opt<Int>;
    waistSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
};
export type IApparel = IApparelBottom & {
    madeOf: DBList<IMadeOfSection>;
    gender?: Opt<Genders>;
    cutNo?: Opt<string>;
    styleNo?: Opt<string>;
    text?: Opt<string>;
    clothingCare?: Opt<IClothingCare>;
};

export type IPiece = {
    shape: Opt<ShapeTypes>;
    count: Int;
};

export type AnyConnector = IConnector<DataConnectorTypes> | IConnector<VideoConnectorTypes> | IConnector<PowerConnectorTypes>;


/**
 * @deprecated
 */
export type IOldDimension<T extends string> = {
    uom: T;
    value: Double;
};

// export type MeasureType = 'amperage' | 'wattage' | 'voltage' | 'length' | 'distance' | 'weight' | 'rotational-speed' | 'angle' | 'caliper-size' | 'data-transfer-rate' | 'density' | 'memory-speed' | 'duration' | 'power-consumption' | 'rate-of-energy' | 'runtime' | 'capacity';

export type Year = string;
export type AwardStatus = 'won' | 'nominated' | 'unclear';
export type IAwardHeader<T extends AwardNames> = {
    name: T;
    category: Opt<
        'hugo' extends T ? HugoAwardCategories
        : 'oscar' extends T ? OscarAwardCategories
        : 'emmy' extends T ? EmmyAwardCategories
        : 'tony' extends T ? TonyAwardCategories
        : 'pulitzer' extends T ? PulitzerPrizeAwardCategories
        : 'grammy' extends T ? GrammyAwardCategories
        : 'ny-times' extends T ? NYTimesAwardCategories
        : never
    >;
};
export type IAward<T extends AwardNames> = {
    year: Opt<Year>;
    contributor: Opt<IContributor>;
    status: Opt<AwardStatus>;
} & IAwardHeader<T>;

// MUSIC
export type GrammyAward = IAward<'grammy'>;
export type TonyAward = IAward<'tony'>;
// VIDEO
export type OscarAward = IAward<'oscar'>;
export type EmmyAward = IAward<'emmy'>;
// BOOKS
export type HugoAward = IAward<'hugo'>;
export type NewYorkTimesAward = IAward<'ny-times'>;
export type PulitzerPrizeAward = IAward<'pulitzer'>;

export type IOperatingSystemInfo = {
    operatingSystem: OperatingSystemNames;
    version: Opt<string>;
};
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type IMonthYear = {
    month: Month;
    year: Year;
};

export type Prefix = 'Dr.' | 'Lady' | 'Lord';
export type Suffix = 'Esq.' | 'M.D.' | 'Jr.' | 'Sr.';

export type IIndividual = {
    _id: BSON.ObjectId;
    firstname: string;
    lastname: string;
    middlename: Opt<string>;
    prefix: Opt<Prefix>;
    suffix: Opt<Suffix>;
}
export type ContributorRoles = 'author' | 'illustrator' | 'publisher' | 'actor' | 'director' | 'producer' | 'studio' | 'performer' | 'songwriter';
export type IContributor = {
    group: Opt<string>;
    individual: Opt<IIndividual>;
    role: Opt<ContributorRoles>;
    creditedAs: Opt<string>;
}
export type IBook = {
    _id: BSON.ObjectId;
    title: string;
    subtitle: Opt<string>;
    copyright: Opt<Year>;
    contributors: DBList<IContributor>;
    awards: DBList<IAward<'ny-times' | 'hugo' | 'pulitzer'>>;
    genre: Opt<BookGenres>;
}
export type IMovie = {
    _id: BSON.ObjectId;
    title: string;
    subtitle: Opt<string>;
    copyright: Opt<Year>;
    runtime?: Opt<IMeasure<VideoRuntimeUnitsOfMeasure>>;
    contributors: DBList<IContributor>;
    rating: Opt<MovieRatings>;
    awards: DBList<IAward<'oscar'>>;
    genre: Opt<MovieGenres>;
};  

export type ITVSeriesEpisode = {
    name: Opt<string>;
    season: Opt<Int>;
    index: Opt<Int>;
    id: Opt<string>;
    originalAirDate: Opt<Date>;
}
export type Network = 'NBC' | 'ABC' | 'HBO';
export type ITVSeries = {
    _id: BSON.ObjectId;
    title: string;
    subtitle: Opt<string>;
    rating: Opt<TVRatings>;
    contributors: DBList<IContributor>;
    episodes: DBList<ITVSeriesEpisode>;
    network: Opt<Network>;
    awards: DBList<IAward<'emmy'>>;
    genre: Opt<MovieGenres>;
};
export type IAlbum = {
    _id: BSON.ObjectId;
    title: string;
    subtitle: Opt<string>;
    copyright: Opt<Year>;
    contributors: DBList<IContributor>;
    awards: DBList<IAward<'grammy'>>;
    tracks: DBDictionary<ITrack>;
    genre: Opt<MusicGenres>;
};

export type IPartNumber = {
    brand: Opt<IBrand>;
    partNumber: string;
}
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
    height?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    width?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    length?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    weight?: Opt<IMeasure<WeightUnitsOfMeasure>>;
    modelNo?: Opt<string>;
    notes?: Opt<string>;
    title?: Opt<string>;
    upcs: DBList<IBarcode>;
    origin?: Opt<Countries>;
    circa?: Opt<Year>;
    color: DBList<ProductColors>;
    description?: Opt<string>;
    copyright: Opt<Year>;
    // general
    testedOn: Opt<Date>;
    itemType: Opt<string>;
    // apparel
    gender: Opt<Genders>;
    cutNo: Opt<string>;
    styleNo: Opt<string>;
    text: Opt<string>;
    rnNo: Opt<IRn>;
    clothingCare: Opt<IClothingCare>;
    madeOf: DBList<IMadeOfSection>;
    // apparel-bottoms
    closureType?: Opt<ClosureTypes>;
    fitType?: Opt<FitTypes>;
    inseamSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    legStyle?: Opt<LegStyles>;
    lengthSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    lengthType?: Opt<GarmentLengths>;
    lifestyleType?: Opt<LifestyleTypes>;
    pocketType?: Opt<PocketTypes>;
    riseType?: Opt<RiseTypes>;
    size?: Opt<Int>;
    waistSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    // // apparel-footwear
    bootType?: Opt<BootTypes>;
    footSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    heelHeight?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    heightMapType?: Opt<HeightMaps>;
    shoeHeelType?: Opt<ShoeHeelTypes>;
    shoeWidth?: Opt<ShoeWidths>;
    strapType?: Opt<StrapTypes>;
    toeStyle?: Opt<ToeStyles>;
    // // apparel-bras
    bustSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    swimsuitBottomStyle?: Opt<SwimsuitBottomStyles>;
    swimsuitTopStyle?: Opt<SwimsuitTopStyles>;
    // // apparel-tops
    backlineType?: Opt<BacklineTypes>;
    chestSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    collarType?: Opt<CollarTypes>;
    cuffType?: Opt<CuffTypes>;
    dressType?: Opt<DressTypes>;
    neckSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    neckType?: Opt<NeckTypes>;
    sleeveSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    sleeveType?: Opt<SleeveTypes>;
    sleeveLength?: Opt<SleeveLengths>;
    suitType?: Opt<SuitTypes>;
    mediaTitle?: Opt<string>;
    mediaSubtitle?: Opt<string>;
    // // media
    book?: Opt<IBook>;
    movie?: Opt<IMovie>;
    album?: Opt<IAlbum>;
    tvSeries?: Opt<ITVSeries>;
    // // media-books
    blurb?: Opt<string>;
    bookType?: Opt<BookTypes>;
    edition?: Opt<Int>;
    language?: Opt<Languages>;
    pages?: Opt<Int>;
    // // media-videos
    collectionOf: DBList<string>;
    count?: Opt<Int>;
    videoFormat?: Opt<VideoFormatTypes>;
    videoType?: Opt<VideoTypes>;
    // // media-video-games
    ESRBRating?: Opt<ESRBRatings>;
    consoleType?: Opt<ConsoleTypes>;
    studio?: Opt<string>;
    // // media-music
    musicFormat?: Opt<MusicFormatTypes>;
    // // cables
    cableType?: Opt<CableTypes>;
    cordLength?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    // // cables-data
    connectors: DBList<AnyConnector>;
    // // cables-power
    compatibleWith: DBList<IPartNumber>;
    input?: Opt<ICurrentSetting>;
    output?: Opt<ICurrentSetting>;
    // // cables-video
    // // electronics
    powerTypes?: DBList<PowerTypes>; // cables-power
    manufactureDate?: Opt<IMonthYear>;
    capacity?: Opt<IMeasure<'GB'>>; // hard-drive, memory, cell-phones
    // visual
    aspectRatio?: Opt<AspectRatios>;
    screenSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    // // cell-phones
    cellCarrier?: Opt<CellCarriers>;
    operatingSystem?: Opt<IOperatingSystemInfo>;
    // hard drive
    driveType?: Opt<DriveType>;
    driveForm?: Opt<HardDriveFormFactor>;
    connectivity: DBList<HardDriveConnectivity>;
    driveInterface?: Opt<HardDriveInterface>;
    writeSpeed?: Opt<IMeasure<DataTransferRateUnitsOfMeasure>>; // MB/s
    readSpeed?: Opt<IMeasure<DataTransferRateUnitsOfMeasure>>; //MB/s
    dataTransferRate?: Opt<IMeasure<DataTransferRateUnitsOfMeasure>>; // MBit/s
    rpm?: Opt<IMeasure<RotationalSpeedUnitsOfMeasure>>;
    cacheSize?: Opt<IMeasure<'MB'>>;
    // memory
    memoryType?: Opt<MemoryType>;
    memoryForm?: Opt<MemoryFormFactor>;
    compatibleDevices: DBList<CompatibleDevices>;
    memorySpeed?: Opt<IMeasure<MemorySpeedUnitsOfMeasure>>;
    pinCount?: Opt<Int>;
    dataTransferBandwidth?: Opt<string>;
    CASLatency?: Opt<CASLatency>;
    // battery
    batteryCount?: Opt<Int>;
    batteryType?: Opt<BatteryTypes>;
    batteryCapacity?: Opt<IMeasure<PowerConsumptionUnitsOfMeasure>>;
    batteryStats?: Opt<ICurrentSetting>;
    rateOfEnergyCapacity?: Opt<IMeasure<RateOfEnergyCapacityUnitsOfMeasure>>;
    // // jewelry
    massInAir?: Opt<IMeasure<WeightUnitsOfMeasure>>;
    massWaterDisplaced?: Opt<IMeasure<WeightUnitsOfMeasure>>;
    readonly density?: Opt<IMeasure<DensityUnitsOfMeasure>>;
    metal?: Opt<MetalTypes>;
    // // home-goods
    // // home-goods-flatware
    dinnerwareInventory: Opt<Record<DinnerwareTypes, IPiece>>;
    flatwareInventory: Opt<Record<FlatwareTypes, Int>>;
    // // home-goods-dinnerware
    pattern?: Opt<string>;
    // // kitchen-appliances
    applianceType?: Opt<ApplianceTypes>;
    // // sporting-goods
    // // sporting-goods-golf-clubs
    clubType?: Opt<ClubTypes>;
    flexType?: Opt<FlexTypes>;
    handOrientation?: Opt<HandOrientations>;
    ironType?: Opt<IronTypes>;
    clubLength?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    lie?: Opt<IMeasure<AngleUnitsOfMeasure>>;
    loft?: Opt<IMeasure<AngleUnitsOfMeasure>>;
    shaftType?: Opt<ShaftTypes>;
    swingWeight?: Opt<IMeasure<WeightUnitsOfMeasure>>;
    wedgeType?: Opt<WedgeTypes>;
    material?: Opt<Materials>;
    // // toys
    ages?: Opt<IMinMax<Int>>;
    pieceCount?: Opt<Int>;
    // board-games
    players?: Opt<IMinMax<Int>>;
    modelName: Opt<string>;
    overrideTitle: boolean;
    partNumbers: DBList<IPartNumber>;
    type: DBList<DetailTypes>;

    readonly allHashTags: IHashTag[];
    readonly detailTypes: DetailTypes[];
    readonly primaryColor: ProductColors | undefined;
    readonly primaryColorSelector: string | undefined;
    readonly sizeText: string | undefined;
    readonly sizeSelector: string | undefined;
    readonly $title: string | undefined;
    readonly $subtitle: string | undefined;
    readonly $copyright: string | undefined;
    readonly $rating: string | undefined;
    readonly $format: string | undefined;
    readonly $contributors: IContributor[];
    readonly $awards: IAward<AwardNames>[];
    readonly $copyrightFormat: string | undefined;
    readonly $titleSubtitle: string | undefined;
    readonly $dims: {
        length?: Opt<IMeasure<LengthUnitsOfMeasure>>;
        width?: Opt<IMeasure<LengthUnitsOfMeasure>>;
        height?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    };
};

export type IShipping = {
    id: Int;
    version: Int;
};
export type ProductImageFlags = 'ignore' | 'do-not-rembg';
export type FaceX = 'left' | 'right';
export type FaceY = 'front' | 'back';
export type FaceZ = 'upper' | 'lower';
export type FacePOV = 'defect' | 'inner' | 'logo' | 'tag' | 'barcode' | 'enhancer' | 'product-info';

export type IFacing = {
    x?: FaceX;
    y?: FaceY;
    z?: FaceZ;
    pov: DBList<FacePOV>;
};

export type IProductImage = {
    _id: BSON.ObjectId;
    fullpath: string;
    filename: string;
    extension: string;
    mimeType: string;
    sku: ISku;
    flags: DBList<ProductImageFlags>;
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
    readonly effective: Opt<string>;
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
    skus: DBList<IBarcode>;
    shipping?: Opt<IShipping>;
    hashTags: DBList<IHashTag>;
    readonly allHashTags: IHashTag[];
    readonly getTitle: Opt<string>;
    readonly getShipping?: Opt<IShipping>;
    readonly getShipWeight?: Opt<number>;
    readonly getCarrier?: Opt<Shippers>;
    readonly getMaxWeight?: Opt<{ pounds: number; ounces: number }>;
    readonly getFolder: string;
    readonly getProductImages: Realm.Types.LinkingObjects<IProductImage, 'sku'>;
    readonly getIsMediaMail: boolean;
    addBarcode(this: ISku, generator: () => string): ISku;
    // addFromProduct(realm: Realm, product: IProduct): ISku;
    readonly hasDraft: boolean;
    readonly getShippingRate: Opt<IShippingRate>;
    readonly $images: string[];
};

export type RnCompanyType = 'OTHER' | 'CORPORATION';
export type RnBusinessType = 'IMPORTER' | 'UNKNOWN' | 'WHOLESALER' | 'MANUFACTURING';
export type RnMaterial = 'WOOL';
export type RnType = 'WPL' | 'RN';
export type RnProductLine = "WOMEN'S APPAREL" | 'SHIRTS' | 'LINGERIE' | 'SLEEPWEAR' | 'ADULT COSTUMES';
export type IRn = {
    _id: BSON.ObjectId;
    type: Opt<RnType>;
    no: number;
    legalBusinessName: string;
    companyName: string;
    companyType: Opt<RnCompanyType>;
    businessType: DBList<RnBusinessType>;
    productLine: DBList<RnProductLine>;
    material: DBList<RnMaterial>;
    streetAddress: Opt<IAddress>;
    mailingAddress: Opt<IAddress>;
};

export type IDraft = {
    _id: BSON.ObjectId;
    sku: ISku;
    title: string;
    description: string;
    price: number;
    isLocalDelivery: boolean;
    payor: PayorTypes;
    smartPricing: boolean;
    smartPrice: Opt<number>;
    lockTitle: Opt<boolean>;
    lockDescription: Opt<boolean>;
    readonly getDims: { length: number; width: number; height: number };
    readonly getWeight: { pounds: number; ounces: number };
    readonly getShipping: { carrier: Shippers; service: ShippingSpeeds; price: number; selector: string };
    readonly getColor: Opt<{ selector: string; name: string }>;
    readonly getCondition: { selector: string; name: string };
    readonly getBrandName: Opt<string>;
    readonly getIsNoBrand: boolean;
    readonly getCategory: { selector: string; name: string };
    readonly getSubCategory: { selector: string; name: string };
    readonly getSubSubCategory: { selector: string; name: string };
    readonly getHashTags: string[];
    readonly getImages: string[];
    readonly getShouldLocalDelivery: boolean;
    readonly getShouldSmartPricing: boolean;
    listingID: Opt<string>;
    readonly isListed: boolean;
    readonly imageCount: number;
    readonly titleLength: number;
    readonly descriptionLength: number;
};
