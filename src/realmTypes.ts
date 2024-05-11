import Realm from "realm";

export type Item = {
    _id: Realm.BSON.ObjectId;
    isComplete: boolean;
    owner: string;
    owner_id: string;
    summary: string;
};

export const ItemSchema = {
    name: 'Item',
    properties: {
        _id: 'objectId',
        isComplete: 'bool',
        owner: 'string',
        owner_id: 'string',
        summary: 'string',
    },
    primaryKey: '_id',
};

export type apparelBottomsDetails = {
    closureType?: string;
    fitType?: string;
    inseamSize?: number;
    legStyle?: string;
    lengthSize?: number;
    lengthType?: string;
    lifestyleType?: string;
    pocketType?: string;
    riseType?: string;
    size?: string;
    waistSize?: number;
};

export const apparelBottomsDetailsSchema = {
    name: 'apparelBottomsDetails',
    embedded: true,
    properties: {
        closureType: 'string?',
        fitType: 'string?',
        inseamSize: 'double?',
        legStyle: 'string?',
        lengthSize: 'double?',
        lengthType: 'string?',
        lifestyleType: 'string?',
        pocketType: 'string?',
        riseType: 'string?',
        size: 'string?',
        waistSize: 'double?',
    },
};

export type apparelBrasDetails = {
    bustSize?: number;
    size?: string;
    swimsuitBottomStyle?: string;
    swimsuitTopStyle?: string;
};

export const apparelBrasDetailsSchema = {
    name: 'apparelBrasDetails',
    embedded: true,
    properties: {
        bustSize: 'double?',
        size: 'string?',
        swimsuitBottomStyle: 'string?',
        swimsuitTopStyle: 'string?',
    },
};

export type apparelDetails = {
    clothingCare?: clothingCare;
    cutNo?: string;
    // gender?: string;
    // madeOf: Realm.List<fabricContent>;
    rnNo?: number;
    styleNo?: string;
    text?: string;
};

export const apparelDetailsSchema = {
    name: 'apparelDetails',
    embedded: true,
    properties: {
        bottomDetails: 'apparelBottomsDetails',
        braDetails: 'apparelBrasDetails',
        clothingCare: 'clothingCare',
        cutNo: 'string?',
        footwearDetails: 'apparelFootwearDetails',
        gender: 'string?',
        madeOf: 'fabricContent[]',
        rnNo: 'int?',
        styleNo: 'string?',
        text: 'string?',
        topDetails: 'apparelTopsDetails',
    },
};

export type apparelFootwearDetails = {
    bootType?: string;
    closureType?: string;
    footSize?: number;
    heelHeight?: number;
    heightMapType?: string;
    lifestyleType?: string;
    mensSize?: string;
    shoeHeelType?: string;
    shoeWidth?: string;
    strapType?: string;
    toeStyle?: string;
    womensSize?: string;
};

export const apparelFootwearDetailsSchema = {
    name: 'apparelFootwearDetails',
    embedded: true,
    properties: {
        bootType: 'string?',
        closureType: 'string?',
        footSize: 'double?',
        heelHeight: 'double?',
        heightMapType: 'string?',
        lifestyleType: 'string?',
        mensSize: 'string?',
        shoeHeelType: 'string?',
        shoeWidth: 'string?',
        strapType: 'string?',
        toeStyle: 'string?',
        womensSize: 'string?',
    },
};

export type apparelTopsDetails = {
    backlineType?: string;
    chestSize?: number;
    closureType?: string;
    collarType?: string;
    cuffType?: string;
    dressType?: string;
    fitType?: string;
    lengthSize?: number;
    lengthType?: string;
    letterSize?: string;
    lifestyleType?: string;
    neckSize?: number;
    neckType?: string;
    pocketType?: string;
    sleeveLength?: string;
    sleeveSize?: number;
    sleeveType?: string;
    suitSize?: string;
    suitType?: string;
};

export const apparelTopsDetailsSchema = {
    name: 'apparelTopsDetails',
    embedded: true,
    properties: {
        backlineType: 'string?',
        chestSize: 'double?',
        closureType: 'string?',
        collarType: 'string?',
        cuffType: 'string?',
        dressType: 'string?',
        fitType: 'string?',
        lengthSize: 'double?',
        lengthType: 'string?',
        letterSize: 'string?',
        lifestyleType: 'string?',
        neckSize: 'double?',
        neckType: 'string?',
        pocketType: 'string?',
        sleeveLength: 'string?',
        sleeveSize: 'double?',
        sleeveType: 'string?',
        suitSize: 'string?',
        suitType: 'string?',
    },
};

export type attribute = {
    path: string;
    unset: boolean;
    value?: unknown;
};

export const attributeSchema = {
    name: 'attribute',
    embedded: true,
    properties: {
        path: 'string',
        unset: 'bool',
        value: 'mixed',
    },
};

export type auction = {
    _id: Realm.BSON.ObjectId;
    auctionId?: string;
    auctionSite?: string;
    closeDate: Date;
    cost?: auctionCost;
    facility?: facility;
    finalBid?: number;
    invoice?: string;
    invoiceId?: string;
    name?: string;
    owner: string;
    premiumPercent?: number;
    salesTaxPercent?: number;
    size?: squareFootage;
    taxExempt: boolean;
    unit?: string;
};

export const auctionSchema = {
    name: 'auction',
    properties: {
        _id: 'objectId',
        auctionId: 'string?',
        auctionSite: 'string?',
        closeDate: 'date',
        cost: 'auctionCost',
        facility: 'facility',
        finalBid: 'double?',
        invoice: 'string?',
        invoiceId: 'string?',
        name: 'string?',
        owner: 'string',
        premiumPercent: 'double?',
        salesTaxPercent: 'double?',
        size: 'squareFootage',
        taxExempt: 'bool',
        unit: 'string?',
    },
    primaryKey: '_id',
};

export type auctionCost = {
    closeDate?: Date;
    finalBid?: number;
    isTaxExempt: boolean;
    premiumPercent?: number;
    salesTaxPercent?: number;
};

export const auctionCostSchema = {
    name: 'auctionCost',
    embedded: true,
    properties: {
        closeDate: 'date?',
        finalBid: 'double?',
        isTaxExempt: 'bool',
        premiumPercent: 'double?',
        salesTaxPercent: 'double?',
    },
};

export type barcode = {
    _id: Realm.BSON.ObjectId;
    isValidated: boolean;
    owner: string;
    type: string;
    value: string;
};

// export const barcodeSchema = {
//     name: 'barcode',
//     properties: {
//         _id: 'objectId',
//         isValidated: 'bool',
//         owner: 'string',
//         type: 'string',
//         value: 'string',
//     },
//     primaryKey: '_id',
// };

export type bin = {
    _id: Realm.BSON.ObjectId;
    barcode?: barcode;
    inventoryLabelPrinted: boolean;
    name: string;
    notes?: string;
    owner: string;
};

// export const binSchema = {
//     name: 'bin',
//     properties: {
//         _id: 'objectId',
//         barcode: 'barcode',
//         inventoryLabelPrinted: 'bool',
//         name: 'string',
//         notes: 'string?',
//         owner: 'string',
//     },
//     primaryKey: '_id',
// };

export type brand = {
    _id: Realm.BSON.ObjectId;
    folder?: string;
    hashTags: Realm.List<hashTag>;
    mercariBrand?: mercariBrand;
    name: string;
    owner: string;
};

export const brandSchema = {
    name: 'brand',
    properties: {
        _id: 'objectId',
        folder: 'string?',
        hashTags: 'hashTag[]',
        mercariBrand: 'mercariBrand',
        name: 'string',
        owner: 'string',
    },
    primaryKey: '_id',
};

export type cableDetails = {
    cordLength?: number;
    dataCableDetails?: dataCableDetails;
    powerCableDetails?: powerCableDetails;
    videoCableDetails?: videoCableDetails;
};

export const cableDetailsSchema = {
    name: 'cableDetails',
    embedded: true,
    properties: {
        cordLength: 'double?',
        dataCableDetails: 'dataCableDetails',
        powerCableDetails: 'powerCableDetails',
        videoCableDetails: 'videoCableDetails',
    },
};

export type cellPhoneDetails = {
    aspectRatio?: string;
    capacity?: number;
    carrier?: string;
    os?: string;
    osVersion?: string;
    screenSize?: number;
};

export const cellPhoneDetailsSchema = {
    name: 'cellPhoneDetails',
    embedded: true,
    properties: {
        aspectRatio: 'string?',
        capacity: 'double?',
        carrier: 'string?',
        os: 'string?',
        osVersion: 'string?',
        screenSize: 'double?',
    },
};

export type classifier = {
    _id: Realm.BSON.ObjectId;
    attributes: Realm.List<attribute>;
    hashTags: Realm.List<hashTag>;
    name: string;
    owner: string;
    parent?: classifier;
    shortName: string;
    taxonomy?: mercariTaxonomy;
    type: Realm.List<string>;
};

export const classifierSchema = {
    name: 'classifier',
    properties: {
        _id: 'objectId',
        attributes: 'attribute[]',
        hashTags: 'hashTag[]',
        name: 'string',
        owner: 'string',
        parent: 'classifier',
        shortName: 'string',
        taxonomy: 'mercariTaxonomy',
        type: 'string[]',
    },
    primaryKey: '_id',
};

export type clothingCare = {
    bleaching: Realm.List<string>;
    dryClean: Realm.List<string>;
    drying: Realm.List<string>;
    gentleOrDelicate: Realm.List<string>;
    ironing: Realm.List<string>;
    permanentPress: Realm.List<string>;
    tumbleDry: Realm.List<string>;
    wash: Realm.List<string>;
    washTemperature: Realm.List<string>;
};

export const clothingCareSchema = {
    name: 'clothingCare',
    embedded: true,
    properties: {
        bleaching: 'string[]',
        dryClean: 'string[]',
        drying: 'string[]',
        gentleOrDelicate: 'string[]',
        ironing: 'string[]',
        permanentPress: 'string[]',
        tumbleDry: 'string[]',
        wash: 'string[]',
        washTemperature: 'string[]',
    },
};

export type connector = {
    connectorGender?: string;
    innerWidth?: number;
    outerWidth?: number;
    type?: string;
};

export const connectorSchema = {
    name: 'connector',
    embedded: true,
    properties: {
        connectorGender: 'string?',
        innerWidth: 'double?',
        outerWidth: 'double?',
        type: 'string?',
    },
};

export type currentSetting = {
    amperage?: number;
    amperageUnit?: string;
    voltage?: number;
    wattage?: number;
};

export const currentSettingSchema = {
    name: 'currentSetting',
    embedded: true,
    properties: {
        amperage: 'double?',
        amperageUnit: 'string?',
        voltage: 'double?',
        wattage: 'double?',
    },
};

export type customAttribute = {
    name?: string;
    selector?: string;
    value?: string;
};

export const customAttributeSchema = {
    name: 'customAttribute',
    embedded: true,
    properties: {
        name: 'string?',
        selector: 'string?',
        value: 'string?',
    },
};

export type dataCableDetails = {
    connectorA?: connector;
    connectorB?: connector;
};

export const dataCableDetailsSchema = {
    name: 'dataCableDetails',
    embedded: true,
    properties: {
        connectorA: 'connector',
        connectorB: 'connector',
    },
};

export type draft = {
    _id: Realm.BSON.ObjectId;
    brandName?: string;
    category?: valueAndSelector;
    color?: valueAndSelector;
    condition: string;
    description: string;
    hashTags: Realm.List<hashTag>;
    height?: number;
    images: Realm.List<string>;
    isLocalDelivery: boolean;
    isSmartPricing: boolean;
    length?: number;
    listing?: listing;
    maxWeightLbs: number;
    maxWeightOzs: number;
    owner: string;
    price: number;
    shipping?: valueAndSelector;
    size?: valueAndSelector;
    sku?: sku;
    smartPricingFloor?: number;
    subCategory?: valueAndSelector;
    subSubCategory?: valueAndSelector;
    title: string;
    width?: number;
};

export const draftSchema = {
    name: 'draft',
    properties: {
        _id: 'objectId',
        brandName: 'string?',
        category: 'valueAndSelector',
        color: 'valueAndSelector',
        condition: 'string',
        description: 'string',
        hashTags: 'hashTag[]',
        height: 'double?',
        images: 'string[]',
        isLocalDelivery: 'bool',
        isSmartPricing: 'bool',
        length: 'double?',
        listing: 'listing',
        maxWeightLbs: 'double',
        maxWeightOzs: 'double',
        owner: 'string',
        price: 'double',
        shipping: 'valueAndSelector',
        size: 'valueAndSelector',
        sku: 'sku',
        smartPricingFloor: 'double?',
        subCategory: 'valueAndSelector',
        subSubCategory: 'valueAndSelector',
        title: 'string',
        width: 'double?',
    },
    primaryKey: '_id',
};

export type electronicsDetails = {
    batteryCount: number;
    batteryType?: string;
    cellPhoneDetails?: cellPhoneDetails;
    powerTypes: Realm.List<string>;
    testedOn?: Date;
};

export const electronicsDetailsSchema = {
    name: 'electronicsDetails',
    embedded: true,
    properties: {
        batteryCount: 'int',
        batteryType: 'string?',
        cellPhoneDetails: 'cellPhoneDetails',
        powerTypes: 'string[]',
        testedOn: 'date?',
    },
};

export type fabricContent = {
    acrylic?: number;
    cashmere?: number;
    cotton?: number;
    denim?: number;
    lace?: number;
    leather?: number;
    linen?: number;
    modal?: number;
    nylon?: number;
    organicCotton?: number;
    polyester?: number;
    polyurethane?: number;
    rayon?: number;
    satin?: number;
    sectionName?: string;
    silk?: number;
    spandex?: number;
    suede?: number;
    velvet?: number;
    viscose?: number;
    wool?: number;
};

export const fabricContentSchema = {
    name: 'fabricContent',
    embedded: true,
    properties: {
        acrylic: 'double?',
        cashmere: 'double?',
        cotton: 'double?',
        denim: 'double?',
        lace: 'double?',
        leather: 'double?',
        linen: 'double?',
        modal: 'double?',
        nylon: 'double?',
        organicCotton: 'double?',
        polyester: 'double?',
        polyurethane: 'double?',
        rayon: 'double?',
        satin: 'double?',
        sectionName: 'string?',
        silk: 'double?',
        spandex: 'double?',
        suede: 'double?',
        velvet: 'double?',
        viscose: 'double?',
        wool: 'double?',
    },
};

export type facility = {
    _id: Realm.BSON.ObjectId;
    address?: address;
    emailAddress?: string;
    facilityNumber?: string;
    name: string;
    owner: string;
    phoneNumber?: string;
    selfStorage?: selfStorage;
};

export const facilitySchema = {
    name: 'facility',
    properties: {
        _id: 'objectId',
        address: 'address',
        emailAddress: 'string?',
        facilityNumber: 'string?',
        name: 'string',
        owner: 'string',
        phoneNumber: 'string?',
        selfStorage: 'selfStorage',
    },
    primaryKey: '_id',
};

export type generalDetails = {
    itemType?: string;
};

export const generalDetailsSchema = {
    name: 'generalDetails',
    embedded: true,
    properties: {
        itemType: 'string?',
    },
};

export type golfClubDetails = {
    clubType?: string;
    flexType?: string;
    gender?: string;
    handOrientation?: string;
    ironType?: string;
    length?: number;
    lie?: number;
    loft?: number;
    shaftType?: string;
    swingWeight?: string;
    wedgeType?: string;
};

export const golfClubDetailsSchema = {
    name: 'golfClubDetails',
    embedded: true,
    properties: {
        clubType: 'string?',
        flexType: 'string?',
        gender: 'string?',
        handOrientation: 'string?',
        ironType: 'string?',
        length: 'double?',
        lie: 'double?',
        loft: 'double?',
        shaftType: 'string?',
        swingWeight: 'string?',
        wedgeType: 'string?',
    },
};

export type hashTag = {
    _id: Realm.BSON.ObjectId;
    lastPing?: Date;
    name: string;
    owner: string;
    usage: Realm.List<hashTagUsage>;
};

export const hashTagSchema = {
    name: 'hashTag',
    properties: {
        _id: 'objectId',
        lastPing: 'date?',
        name: 'string',
        owner: 'string',
        usage: 'hashTagUsage[]',
    },
    primaryKey: '_id',
};

export type hashTagUsage = {
    count: number;
    from: Date;
};

export const hashTagUsageSchema = {
    name: 'hashTagUsage',
    embedded: true,
    properties: {
        count: 'int',
        from: 'date',
    },
};

export type homeGoodsDetails = {
    dinnerwareDetails?: homeGoodsDinnerwareDetails;
    flatwareDetails?: homeGoodsFlatwareDetails;
    kitchenApplianceDetails?: kitchenAppliancesDetails;
};

export const homeGoodsDetailsSchema = {
    name: 'homeGoodsDetails',
    embedded: true,
    properties: {
        dinnerwareDetails: 'homeGoodsDinnerwareDetails',
        flatwareDetails: 'homeGoodsFlatwareDetails',
        kitchenApplianceDetails: 'kitchenAppliancesDetails',
    },
};

export type homeGoodsDinnerwareDetails = {
    brand?: string;
    count?: number;
    dinnerwareType?: string;
    pattern?: string;
    shapeType?: string;
};

export const homeGoodsDinnerwareDetailsSchema = {
    name: 'homeGoodsDinnerwareDetails',
    embedded: true,
    properties: {
        brand: 'string?',
        count: 'int?',
        dinnerwareType: 'string?',
        pattern: 'string?',
        shapeType: 'string?',
    },
};

export type homeGoodsFlatwareDetails = {
    brand?: string;
    pattern?: string;
};

export const homeGoodsFlatwareDetailsSchema = {
    name: 'homeGoodsFlatwareDetails',
    embedded: true,
    properties: {
        brand: 'string?',
        pattern: 'string?',
    },
};

export type includedItem = {
    name: string;
    qty: number;
};

export const includedItemSchema = {
    name: 'includedItem',
    embedded: true,
    properties: {
        name: 'string',
        qty: 'int',
    },
};

export type jewelryDetails = {
    density?: number;
    displacedWaterMass?: number;
    displacedWaterVolume?: number;
    massInAir?: number;
    metal?: string;
    tare?: number;
};

export const jewelryDetailsSchema = {
    name: 'jewelryDetails',
    embedded: true,
    properties: {
        density: 'double?',
        displacedWaterMass: 'double?',
        displacedWaterVolume: 'double?',
        massInAir: 'double?',
        metal: 'string?',
        tare: 'double?',
    },
};

export type kitchenAppliancesDetails = {
    applianceType?: string;
};

export const kitchenAppliancesDetailsSchema = {
    name: 'kitchenAppliancesDetails',
    embedded: true,
    properties: {
        applianceType: 'string?',
    },
};

export type listing = {
    draftID?: string;
    isDimensionWeight: boolean;
    listedOn?: Date;
    listingID?: string;
    purchasedPrice?: purchasePrice;
    shipmentInfo?: shipmentInfo;
    shippingCost: number;
    stats?: listingStats;
    updatedOn?: Date;
};

export const listingSchema = {
    name: 'listing',
    embedded: true,
    properties: {
        draftID: 'string?',
        isDimensionWeight: 'bool',
        listedOn: 'date?',
        listingID: 'string?',
        purchasedPrice: 'purchasePrice',
        shipmentInfo: 'shipmentInfo',
        shippingCost: 'double',
        stats: 'listingStats',
        updatedOn: 'date?',
    },
};

export type listingStats = {
    commentsCount: number;
    likesCount: number;
};

export const listingStatsSchema = {
    name: 'listingStats',
    embedded: true,
    properties: {
        commentsCount: 'int',
        likesCount: 'int',
    },
};

export type mediaBooksDetails = {
    authors: Realm.List<string>;
    blurb?: string;
    bookGenre?: string;
    bookType?: string;
    edition?: number;
    illustrators: Realm.List<string>;
    language?: string;
    pages?: number;
    publishers: Realm.List<string>;
};

export const mediaBooksDetailsSchema = {
    name: 'mediaBooksDetails',
    embedded: true,
    properties: {
        authors: 'string[]',
        blurb: 'string?',
        bookGenre: 'string?',
        bookType: 'string?',
        edition: 'int?',
        illustrators: 'string[]',
        language: 'string?',
        pages: 'int?',
        publishers: 'string[]',
    },
};

export type mediaDetails = {
    awards: Realm.List<string>;
    bookDetails?: mediaBooksDetails;
    copyright?: string;
    musicDetails?: mediaMusicDetails;
    subTitle?: string;
    title?: string;
    videoDetails?: mediaVideosDetails;
    videoGameDetails?: mediaVideoGamesDetails;
};

export const mediaDetailsSchema = {
    name: 'mediaDetails',
    embedded: true,
    properties: {
        awards: 'string[]',
        bookDetails: 'mediaBooksDetails',
        copyright: 'string?',
        musicDetails: 'mediaMusicDetails',
        subTitle: 'string?',
        title: 'string?',
        videoDetails: 'mediaVideosDetails',
        videoGameDetails: 'mediaVideoGamesDetails',
    },
};

export type mediaMusicDetails = {
    artist?: string;
    musicFormat?: string;
    musicGenre?: string;
    tracks: Realm.List<track>;
};

export const mediaMusicDetailsSchema = {
    name: 'mediaMusicDetails',
    embedded: true,
    properties: {
        artist: 'string?',
        musicFormat: 'string?',
        musicGenre: 'string?',
        tracks: 'track[]',
    },
};

export type mediaVideoGamesDetails = {
    ESRBRating?: string;
    blurb?: string;
    consoleType?: string;
    studio?: string;
};

export const mediaVideoGamesDetailsSchema = {
    name: 'mediaVideoGamesDetails',
    embedded: true,
    properties: {
        ESRBRating: 'string?',
        blurb: 'string?',
        consoleType: 'string?',
        studio: 'string?',
    },
};

export type mediaVideosDetails = {
    blurb?: string;
    collectionOf: Realm.List<string>;
    count?: number;
    directedBy: Realm.List<string>;
    format?: string;
    genre?: string;
    movieRating?: string;
    runtime?: number;
    starring: Realm.List<string>;
    studio?: string;
    tvRating?: string;
    videoType?: string;
};

export const mediaVideosDetailsSchema = {
    name: 'mediaVideosDetails',
    embedded: true,
    properties: {
        blurb: 'string?',
        collectionOf: 'string[]',
        count: 'int?',
        directedBy: 'string[]',
        format: 'string?',
        genre: 'string?',
        movieRating: 'string?',
        runtime: 'int?',
        starring: 'string[]',
        studio: 'string?',
        tvRating: 'string?',
        videoType: 'string?',
    },
};

export type mercariBrand = {
    _id: Realm.BSON.ObjectId;
    hashTags: Realm.List<hashTag>;
    name: string;
    owner: string;
};

export const mercariBrandSchema = {
    name: 'mercariBrand',
    properties: {
        _id: 'objectId',
        hashTags: 'hashTag[]',
        name: 'string',
        owner: 'string',
    },
    primaryKey: '_id',
};

export type mercariCategory = {
    hashTags: Realm.List<hashTag>;
    name: string;
    selector: string;
};

export const mercariCategorySchema = {
    name: 'mercariCategory',
    embedded: true,
    properties: {
        hashTags: 'hashTag[]',
        name: 'string',
        selector: 'string',
    },
};

export type mercariTaxonomy = {
    _id: Realm.BSON.ObjectId;
    category?: mercariCategory;
    fullname: string;
    hashTags: Realm.List<hashTag>;
    lastPing?: Date;
    owner: string;
    subCategory?: mercariCategory;
    subSubCategory?: mercariCategory;
    timestamp?: Date;
};

export const mercariTaxonomySchema = {
    name: 'mercariTaxonomy',
    properties: {
        _id: 'objectId',
        category: 'mercariCategory',
        fullname: 'string',
        hashTags: 'hashTag[]',
        lastPing: 'date?',
        owner: 'string',
        subCategory: 'mercariCategory',
        subSubCategory: 'mercariCategory',
        timestamp: 'date?',
    },
    primaryKey: '_id',
};

export type payoutInfo = {
    cashedOut: boolean;
    gracePeriodEndingDate?: Date;
    ratedOn?: Date;
    totalPaid: number;
};

export const payoutInfoSchema = {
    name: 'payoutInfo',
    embedded: true,
    properties: {
        cashedOut: 'bool',
        gracePeriodEndingDate: 'date?',
        ratedOn: 'date?',
        totalPaid: 'double',
    },
};

export type powerCableDetails = {
    compatibleWith: Realm.List<string>;
    connector?: connector;
    input?: currentSetting;
    output?: currentSetting;
};

export const powerCableDetailsSchema = {
    name: 'powerCableDetails',
    embedded: true,
    properties: {
        compatibleWith: 'string[]',
        connector: 'connector',
        input: 'currentSetting',
        output: 'currentSetting',
    },
};

export type price = {
    effective?: Date;
    pending: boolean;
    price: number;
};

export const priceSchema = {
    name: 'price',
    embedded: true,
    properties: {
        effective: 'date?',
        pending: 'bool',
        price: 'double',
    },
};

export type product = {
    _id: Realm.BSON.ObjectId;
    asins: Realm.List<string>;
    brand?: brand;
    circa?: string;
    color?: string;
    customAttributes: Realm.List<customAttribute>;
    description?: string;
    details?: productDetails;
    features: Realm.List<string>;
    flags: Realm.List<string>;
    hashTags: Realm.List<hashTag>;
    height?: number;
    includes: Realm.List<includedItem>;
    length?: number;
    modelNo?: string;
    notes?: string;
    owner: string;
    title?: string;
    upcs: Realm.List<barcode>;
    weight?: number;
    width?: number;
};

export const productSchema = {
    name: 'product',
    properties: {
        _id: 'objectId',
        asins: 'string[]',
        brand: 'brand',
        circa: 'string?',
        color: 'string?',
        customAttributes: 'customAttribute[]',
        description: 'string?',
        details: 'productDetails',
        features: 'string[]',
        flags: 'string[]',
        hashTags: 'hashTag[]',
        height: 'double?',
        includes: 'includedItem[]',
        length: 'double?',
        modelNo: 'string?',
        notes: 'string?',
        owner: 'string',
        title: 'string?',
        upcs: 'barcode[]',
        weight: 'double?',
        width: 'double?',
    },
    primaryKey: '_id',
};

export type productDetails = {
    apparelDetails?: apparelDetails;
    cableDetails?: cableDetails;
    classifier?: classifier;
    electronicsDetails?: electronicsDetails;
    generalDetails?: generalDetails;
    homeGoodsDetails?: homeGoodsDetails;
    jewelryDetails?: jewelryDetails;
    mediaDetails?: mediaDetails;
    sportingGoodsDetails?: sportingGoodsDetails;
    toysDetails?: toysDetails;
    type: Realm.List<string>;
};

export const productDetailsSchema = {
    name: 'productDetails',
    embedded: true,
    properties: {
        apparelDetails: 'apparelDetails',
        cableDetails: 'cableDetails',
        classifier: 'classifier',
        electronicsDetails: 'electronicsDetails',
        generalDetails: 'generalDetails',
        homeGoodsDetails: 'homeGoodsDetails',
        jewelryDetails: 'jewelryDetails',
        mediaDetails: 'mediaDetails',
        sportingGoodsDetails: 'sportingGoodsDetails',
        toysDetails: 'toysDetails',
        type: 'string[]',
    },
};

export type productImage = {
    _id: Realm.BSON.ObjectId;
    doNotRemBg: boolean;
    ignore: boolean;
    name: string;
    original?: Realm.BSON.ObjectId;
    owner: string;
    removeBg?: Realm.BSON.ObjectId;
    sku?: sku;
};

export const productImageSchema = {
    name: 'productImage',
    properties: {
        _id: 'objectId',
        doNotRemBg: 'bool',
        ignore: 'bool',
        name: 'string',
        original: 'objectId?',
        owner: 'string',
        removeBg: 'objectId?',
        sku: 'sku',
    },
    primaryKey: '_id',
};

export type purchasePrice = {
    itemPrice: number;
    purchasedOn?: Date;
    shippingFee: number;
    shippingPaidBy?: string;
    taxChargedToBuyer: number;
};

export const purchasePriceSchema = {
    name: 'purchasePrice',
    embedded: true,
    properties: {
        itemPrice: 'double',
        purchasedOn: 'date?',
        shippingFee: 'double',
        shippingPaidBy: 'string?',
        taxChargedToBuyer: 'double',
    },
};

export type scan = {
    bin?: bin;
    sku?: sku;
    timestamp: Date;
};

export const scanSchema = {
    name: 'scan',
    embedded: true,
    properties: {
        bin: 'bin',
        sku: 'sku',
        timestamp: 'date',
    },
};

export type selfStorage = {
    _id: Realm.BSON.ObjectId;
    name: string;
    owner: string;
    website?: string;
};

export const selfStorageSchema = {
    name: 'selfStorage',
    properties: {
        _id: 'objectId',
        name: 'string',
        owner: 'string',
        website: 'string?',
    },
    primaryKey: '_id',
};

export type shipmentInfo = {
    actualDeliveryDate?: Date;
    actualShipWeight: number;
    carrier?: string;
    destinationZipCode?: string;
    estimatedDeliveryDate?: Date;
    payoutInfo?: payoutInfo;
    shippedOn?: Date;
    trackingNumber?: string;
};

export const shipmentInfoSchema = {
    name: 'shipmentInfo',
    embedded: true,
    properties: {
        actualDeliveryDate: 'date?',
        actualShipWeight: 'double',
        carrier: 'string?',
        destinationZipCode: 'string?',
        estimatedDeliveryDate: 'date?',
        payoutInfo: 'payoutInfo',
        shippedOn: 'date?',
        trackingNumber: 'string?',
    },
};

export type shippingService = {
    carrier: string;
    cost: number;
    id: number;
    maxWeight: number;
    service?: string;
    version: number;
};

export const shippingServiceSchema = {
    name: 'shippingService',
    embedded: true,
    properties: {
        carrier: 'string',
        cost: 'double',
        id: 'int',
        maxWeight: 'double',
        service: 'string?',
        version: 'int',
    },
};

export type sku = {
    _id: Realm.BSON.ObjectId;
    auction?: auction;
    condition: string;
    defects: Realm.List<string>;
    disposition?: string;
    folder?: string;
    inventoryLabelPrinted: boolean;
    owner: string;
    packingPercent: number;
    priceHistory: Realm.List<price>;
    product?: product;
    quantity: number;
    scans: Realm.List<scan>;
    shippingService?: shippingService;
    skus: Realm.List<barcode>;
};

export const skuSchema = {
    name: 'sku',
    properties: {
        _id: 'objectId',
        auction: 'auction',
        condition: 'string',
        defects: 'string[]',
        disposition: 'string?',
        folder: 'string?',
        inventoryLabelPrinted: 'bool',
        owner: 'string',
        packingPercent: 'double',
        priceHistory: 'price[]',
        product: 'product',
        quantity: 'int',
        scans: 'scan[]',
        shippingService: 'shippingService',
        skus: 'barcode[]',
    },
    primaryKey: '_id',
};

export type sportingGoodsDetails = {
    golfClubDetails?: golfClubDetails;
};

export const sportingGoodsDetailsSchema = {
    name: 'sportingGoodsDetails',
    embedded: true,
    properties: {
        golfClubDetails: 'golfClubDetails',
    },
};

export type squareFootage = {
    length?: number;
    width?: number;
};

export const squareFootageSchema = {
    name: 'squareFootage',
    embedded: true,
    properties: {
        length: 'double?',
        width: 'double?',
    },
};

export type toysDetails = {
    maxAge?: number;
    maxPlayers?: number;
    minAge?: number;
    minPlayers?: number;
    puzzlePieceCount?: number;
};

export const toysDetailsSchema = {
    name: 'toysDetails',
    embedded: true,
    properties: {
        maxAge: 'int?',
        maxPlayers: 'int?',
        minAge: 'int?',
        minPlayers: 'int?',
        puzzlePieceCount: 'int?',
    },
};

export type track = {
    feat: Realm.List<string>;
    index: number;
    name?: string;
    runtimeSecs?: number;
};

export const trackSchema = {
    name: 'track',
    embedded: true,
    properties: {
        feat: 'string[]',
        index: 'int',
        name: 'string?',
        runtimeSecs: 'int?',
    },
};

export type valueAndSelector = {
    selector?: string;
    value?: string;
};

export const valueAndSelectorSchema = {
    name: 'valueAndSelector',
    embedded: true,
    properties: {
        selector: 'string?',
        value: 'string?',
    },
};

export type videoCableDetails = {
    connectorA?: connector;
    connectorB?: connector;
};

export const videoCableDetailsSchema = {
    name: 'videoCableDetails',
    embedded: true,
    properties: {
        connectorA: 'connector',
        connectorB: 'connector',
    },
};
