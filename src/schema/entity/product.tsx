/* eslint-disable no-console */
import Realm, { BSON } from 'realm';
import {
    AnyConnector,
    DetailTypes,
    IAlbum,
    IAward,
    IBarcode,
    IBook,
    IBrand,
    IClassifier,
    IClothingCare,
    ICurrentSetting,
    ICustomItemField,
    IHashTag,
    IIncludedItem,
    IMadeOfSection,
    IMinMax,
    IMovie,
    IOperatingSystemInfo,
    IPiece,
    IProduct,
    ITVSeries,
    IMonthYear,
    Year,
    IPartNumber,
    IRn,
    IContributor
} from '../../types';

import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { distinctByOID, distinctByString } from '../../common/array/distinct';
import { sizeLookup } from '../enums/sizes';
import $me, {
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
    HeightMaps,
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
    BookTypes,
    Languages,
    ESRBRatings,
    ConsoleTypes,
    MusicFormatTypes,
    VideoFormatTypes,
    VideoTypes,
    ApplianceTypes,
    AspectRatios,
    BatteryTypes,
    CellCarriers,
    ClubTypes,
    DinnerwareTypes,
    FlexTypes,
    HandOrientations,
    IronTypes,
    MetalTypes,
    ShaftTypes,
    WedgeTypes,
    SleeveLengths,
    FlatwareTypes,
    CableTypes,
    Materials,
    Countries,
    CompatibleDevices,
    AwardNames,
    PowerTypes,
    AutofocusTechnologies,
    CameraConnectionTypes,
    CameraSizes,
    CasLatency,
    CompatibleMountings,
    Connectivity,
    DriveFormFactors,
    DriveInterfaces,
    DriveTypes,
    FocusTypes,
    JpegQualityLevels,
    LensType,
    MemoryFormFactors,
    MemoryTypes,
    PhotoSensorTechnologies,
    ShootingModes,
    SkillLevels,
    VideoCaptureResolutions,
    ViewfinderTypes,
    WhiteBalanceSettings,
    ZoomTypes,
    FileFormats,
    BagTypes,
    BottomTypes,
    EarringBackTypes,
    EarringFrontTypes,
    BraTypes,
    HatTypes,
    JeansTypes,
    JacketTypes,
    LapelTypes,
    RingTypes,
    ShirtTypes,
    SkirtTypes,
    ShoeTypes,
    SleepwearTypes,
    TieTypes,
    ZipperTypes
} from '../enums';
import { productColors } from '../enums/productColors';
import { Flags } from './../enums/flags';
import { EntityBase } from './EntityBase';
import { standardizeOptions } from '../../util/standardizeOptions';
import { is } from '../../common/is';
import { MRT_ColumnDef } from 'material-react-table';
import { productColumns } from './productColumns';
import { runTransaction } from '../../util/runTransaction';

export class Product extends EntityBase<IProduct> implements IProduct {
    bagType?: Opt<BagTypes>;
    bottomType?: Opt<BottomTypes>;
    earringBackType?: Opt<EarringBackTypes>;
    earringFrontType?: Opt<EarringFrontTypes>;
    braType?: Opt<BraTypes>;
    hatType?: Opt<HatTypes>;
    jeansType?: Opt<JeansTypes>;
    jacketType?: Opt<JacketTypes>;
    lapelType?: Opt<LapelTypes>;
    ringType?: Opt<RingTypes>;
    shirtType?: Opt<ShirtTypes>;
    skirtType?: Opt<SkirtTypes>;
    shoeType?: Opt<ShoeTypes>;
    sleepwearType?: Opt<SleepwearTypes>;
    tieType?: Opt<TieTypes>;
    zipperType?: Opt<ZipperTypes>;
    finish: Opt<string>;
    coverstock: Opt<string>;
    radiusOfGyration: Opt<number>;
    laneCondition: Opt<string>;
    suggestedRetailPrice: Opt<number>;
    static matchKeys: (keyof IProduct & string)[] = ['brand.name' as any, 'classifier.name' as any, '_id', 'title', 'modelNo', 'upcs', 'modelName', 'brand.mercariBrand.name' as any, '$title', '$subtitle', 'studio', 'notes', 'description'];
    static columns: MRT_ColumnDef<IProduct>[] = productColumns();
    get $dims(): { length?: Opt<IMeasure<LengthUnitsOfMeasure>>; width?: Opt<IMeasure<LengthUnitsOfMeasure>>; height?: Opt<IMeasure<LengthUnitsOfMeasure>> } {
        return {
            length: this.length,
            width: this.width,
            height: this.height
        };
    }
    get $awards(): IAward<AwardNames>[] {
        return ([this.awards, this.book?.awards, this.movie?.awards, this.tvSeries?.awards, this.album?.awards].filter(is.not.nil) as DBList<IAward<AwardNames>>[]).reduce((pv, cv) => [...pv, ...cv], [] as IAward<AwardNames>[]);
    }
    get $contributors(): IContributor[] {
        return [...(this.book?.contributors ?? []), ...(this.movie?.contributors ?? []), ...(this.tvSeries?.contributors ?? []), ...(this.album?.contributors ?? [])];
    }
    get $copyrightFormat(): string | undefined {
        return this.$copyright || this.$format ? [this.$copyright, this.$format].filter(is.not.nil).join(',') : undefined;
    }
    get $titleSubtitle(): string | undefined {
        return this.$title ? [this.$title, this.$subtitle].filter(is.not.nil).join(': ') : undefined;
    }
    studio?: Opt<string>;
    get $title(): string | undefined {
        return this.mediaTitle ?? this.book?.title ?? this.movie?.title ?? this.tvSeries?.title ?? this.album?.title;
    }
    get $subtitle(): string | undefined {
        return this.mediaSubtitle ?? this.book?.subtitle ?? this.movie?.subtitle ?? this.tvSeries?.subtitle ?? this.album?.subtitle;
    }
    get $copyright(): string | undefined {
        return this.copyright ?? this.book?.copyright ?? this.movie?.copyright ?? this.album?.copyright;
    }
    get $rating(): string | undefined {
        // eslint-disable-next-line import/no-named-as-default-member
        const esrbRatingLookup = standardizeOptions($me.ESRBRatings).asRecord;
        const movieRatingLookup = standardizeOptions($me.movieRatings).asRecord;
        const tvRatingLookup = standardizeOptions($me.tvRatings).asRecord;
        return (
            this.ESRBRating ? esrbRatingLookup[this.ESRBRating].text
            : this.movie?.rating ? movieRatingLookup[this.movie.rating].text
            : this.tvSeries?.rating ? tvRatingLookup[this.tvSeries.rating].text
            : undefined
        );
    }
    get $format(): string | undefined {
        const bookTypeLookup = standardizeOptions($me.bookTypes).asRecord;
        const videoFormatLookup = standardizeOptions($me.videoFormatTypes).asRecord;
        const musicFormatLookup = standardizeOptions($me.musicFormatTypes).asRecord;
        return (
            this.bookType ? bookTypeLookup[this.bookType].text
            : this.videoFormat ? videoFormatLookup[this.videoFormat].text
            : this.musicFormat ? musicFormatLookup[this.musicFormat].text
            : undefined
        );
    }
    compatibleWith: DBList<IPartNumber>;
    partNumbers: DBList<IPartNumber>;
    _id: BSON.ObjectId;
    ages: Opt<IMinMax<number>>;
    album?: Opt<IAlbum>;
    applianceType: Opt<ApplianceTypes>;
    asins: DBList<string>;
    aspectRatio: Opt<AspectRatios>;
    awards: DBList<IAward<AwardNames>>;
    backlineType: Opt<BacklineTypes>;
    batteryCapacity?: Opt<IMeasure<'WHr'>>;
    batteryCount: Opt<number>;
    batteryType: Opt<BatteryTypes>;
    blurb: Opt<string>;
    book?: Opt<IBook>;
    bookType: Opt<BookTypes>;
    bootType: Opt<BootTypes>;
    brand: Opt<IBrand>;
    bustSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    cableType: Opt<CableTypes>;
    cacheSize?: Opt<IMeasure<'MB'>>;
    capacity?: Opt<IMeasure<'GB'>>;
    cellCarrier: Opt<CellCarriers>;
    chestSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    circa: Opt<Year>;
    classifier: Opt<IClassifier>;
    closureType: Opt<ClosureTypes>;
    clothingCare: Opt<IClothingCare>;
    clubLength?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    clubType: Opt<ClubTypes>;
    collarType: Opt<CollarTypes>;
    collectionOf: DBList<string>;
    color: DBList<ProductColors>;
    compatibleDevices: DBList<CompatibleDevices>;
    connectors: DBList<AnyConnector>;
    consoleType: Opt<ConsoleTypes>;
    cordLength?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    count: Opt<number>;
    cuffType: Opt<CuffTypes>;
    customAttributes: DBList<ICustomItemField>;
    cutNo: Opt<string>;
    dataTransferRate?: Opt<IMeasure<DataTransferRateUnitsOfMeasure>>;
    description: Opt<string>;
    dinnerwareInventory: Opt<Record<DinnerwareTypes, IPiece>>;
    dinnerwareType: Opt<DinnerwareTypes>;
    dressType: Opt<DressTypes>;
    edition: Opt<number>;
    ESRBRating: Opt<ESRBRatings>;
    features: DBList<string>;
    fitType: Opt<FitTypes>;
    flags: DBList<Flags>;
    flatwareInventory: Opt<Record<FlatwareTypes, number>>;
    flexType: Opt<FlexTypes>;
    footSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    gender: Opt<Genders>;
    handOrientation: Opt<HandOrientations>;
    hashTags: DBList<IHashTag>;
    heelHeight?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    height?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    heightMapType: Opt<HeightMaps>;
    includes: DBList<IIncludedItem>;
    input: Opt<ICurrentSetting>;
    inseamSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    ironType: Opt<IronTypes>;
    itemType: Opt<string>;
    language: Opt<Languages>;
    legStyle: Opt<LegStyles>;
    length?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    lengthSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    lengthType: Opt<GarmentLengths>;
    lie?: Opt<IMeasure<'°'>>;
    lifestyleType: Opt<LifestyleTypes>;
    loft?: Opt<IMeasure<'°'>>;
    madeOf: DBList<IMadeOfSection>;
    manufactureDate?: Opt<IMonthYear>;
    massInAir?: Opt<IMeasure<WeightUnitsOfMeasure>>;
    massWaterDisplaced?: Opt<IMeasure<WeightUnitsOfMeasure>>;
    material?: Opt<Materials>;
    memorySpeed?: Opt<IMeasure<'MHz'>>;
    metal: Opt<MetalTypes>;
    modelName: Opt<string>;
    modelNo: Opt<string>;
    movie?: Opt<IMovie>;
    musicFormat: Opt<MusicFormatTypes>;
    neckSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    neckType: Opt<NeckTypes>;
    notes: Opt<string>;
    operatingSystem?: Opt<IOperatingSystemInfo>;
    output: Opt<ICurrentSetting>;
    overrideTitle: boolean;
    pages: Opt<number>;
    pattern: Opt<string>;
    pieceCount: Opt<number>;
    players: Opt<IMinMax<number>>;
    pocketType: Opt<PocketTypes>;
    powerTypes?: DBList<PowerTypes> | undefined;
    rateOfEnergyCapacity?: Opt<IMeasure<'mAh'>>;
    readSpeed?: Opt<IMeasure<DataTransferRateUnitsOfMeasure>>;
    riseType: Opt<RiseTypes>;
    rnNo: Opt<IRn>;
    rpm?: Opt<IMeasure<'RPM'>>;
    runtime?: Opt<IMeasure<VideoRuntimeUnitsOfMeasure>>;
    screenSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    shaftType: Opt<ShaftTypes>;
    shoeHeelType: Opt<ShoeHeelTypes>;
    shoeWidth: Opt<ShoeWidths>;
    size: Opt<number>;
    sleeveLength: Opt<SleeveLengths>;
    sleeveSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    sleeveType: Opt<SleeveTypes>;
    strapType: Opt<StrapTypes>;
    styleNo: Opt<string>;
    suitType: Opt<SuitTypes>;
    swimsuitBottomStyle: Opt<SwimsuitBottomStyles>;
    swimsuitTopStyle: Opt<SwimsuitTopStyles>;
    swingWeight?: Opt<IMeasure<WeightUnitsOfMeasure>>;
    testedOn: Opt<Date>;
    text: Opt<string>;
    title: Opt<string>;
    toeStyle: Opt<ToeStyles>;
    tvSeries?: Opt<ITVSeries>;
    upcs: DBList<IBarcode>;
    videoFormat: Opt<VideoFormatTypes>;
    videoType: Opt<VideoTypes>;
    waistSize?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    wedgeType: Opt<WedgeTypes>;
    weight?: Opt<IMeasure<WeightUnitsOfMeasure>>;
    width?: Opt<IMeasure<LengthUnitsOfMeasure>>;
    writeSpeed?: Opt<IMeasure<DataTransferRateUnitsOfMeasure>>;
    get density(): Opt<IMeasure<DensityUnitsOfMeasure>> {
        if (this.massInAir == null || this.massInAir.value === 0 || this.massWaterDisplaced == null || this.massWaterDisplaced.value === 0) return undefined;
        return {
            uom: 'g/cm³',
            value: this.massInAir.value / this.massWaterDisplaced.value
        } as IMeasure<DensityUnitsOfMeasure>;
    }
    // get density(): Opt<DensityDimension> {

    // }
    copyright: Opt<string>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.product()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            asins: $.string.list,
            brand: 'brand?',
            classifier: 'classifier?',
            includes: $.includedItem.list,
            customAttributes: $.customItemField.list,
            features: $.string.list,
            hashTags: $.hashTag.list,
            flags: $.string.list,
            weight: $.weightMeasure(),
            length: $.lengthMeasure(),
            width: $.lengthMeasure(),
            height: $.lengthMeasure(),
            modelNo: $.string.opt,
            notes: $.string.opt,
            title: $.string.opt,
            upcs: $.barcode.list,
            circa: $.string.opt,
            color: $.string.list,
            description: $.string.opt,
            itemType: $.string.opt,
            madeOf: $.madeOfSection.list,
            gender: $.string.opt,
            styleNo: $.string.opt,
            cutNo: $.string.opt,
            text: $.string.opt,
            rnNo: $.rn(),
            clothingCare: $.clothingCare(),
            closureType: $.string.opt,
            inseamSize: $.lengthMeasure(),
            fitType: $.string.opt,
            legStyle: $.string.opt,
            lengthSize: $.lengthMeasure(),
            lengthType: $.string.opt,
            lifestyleType: $.string.opt,
            pocketType: $.string.opt,
            riseType: $.string.opt,
            size: $.int.opt,
            waistSize: $.lengthMeasure(),
            bootType: $.string.opt,
            footSize: $.lengthMeasure(),
            heelHeight: $.lengthMeasure(),
            heightMapType: $.string.opt,
            shoeHeelType: $.string.opt,
            shoeWidth: $.string.opt,
            strapType: $.string.opt,
            toeStyle: $.string.opt,
            bustSize: $.lengthMeasure(),
            swimsuitBottomStyle: $.string.opt,
            swimsuitTopStyle: $.string.opt,
            backlineType: $.string.opt,
            chestSize: $.lengthMeasure(),
            collarType: $.string.opt,
            cuffType: $.string.opt,
            dressType: $.string.opt,
            neckSize: $.lengthMeasure(),
            neckType: $.string.opt,
            sleeveSize: $.lengthMeasure(),
            sleeveType: $.string.opt,
            suitType: $.string.opt,
            sleeveLength: $.string.opt,

            book: $.book(),
            movie: $.movie(),
            tvSeries: $.tvSeries(),
            album: $.album(),

            blurb: $.string.opt,
            bookType: $.string.opt,
            edition: $.int.opt,
            language: $.string.opt,
            pages: $.int.opt,
            collectionOf: $.string.list,
            count: $.int.opt,
            videoFormat: $.string.opt,
            videoType: $.string.opt,
            ESRBRating: $.string.opt,
            consoleType: $.string.opt,
            studio: $.string.opt,
            musicFormat: $.string.opt,
            cordLength: $.lengthMeasure(),
            connectors: $.connector.list,
            compatibleWith: $.partNumber.list,
            input: $.currentSetting(),
            output: $.currentSetting(),
            batteryCount: $.int.opt,
            batteryType: $.string.opt,
            batteryCapacity: $.powerConsumptionMeasure(),
            powerTypes: $.string.list,
            testedOn: $.date.opt,
            aspectRatio: $.string.opt,
            cellCarrier: $.string.opt,
            operatingSystem: $.operatingSystemInfo(),
            screenSize: $.lengthMeasure(),
            massInAir: $.weightMeasure(),
            massWaterDisplaced: $.weightMeasure(),
            metal: $.string.opt,
            dinnerwareInventory: $.piece.dictionary,
            flatwareInventory: $.int.dictionary,
            pattern: $.string.opt,
            applianceType: $.string.opt,
            clubType: $.string.opt,
            flexType: $.string.opt,
            handOrientation: $.string.opt,
            ironType: $.string.opt,
            clubLength: $.lengthMeasure(),
            lie: $.angleMeasure(),
            loft: $.angleMeasure(),
            shaftType: $.string.opt,
            swingWeight: $.weightMeasure(),
            wedgeType: $.string.opt,
            ages: $.minMax(),
            players: $.minMax(),
            pieceCount: $.int.opt,
            material: $.string.opt,
            cableType: $.string.opt,
            modelName: $.string.opt,
            overrideTitle: $.bool.default(false),
            partNumbers: $.partNumber.list,
            driveType: $.string.opt,
            driveForm: $.string.opt,
            connectivity: $.string.list,
            driveInterface: $.string.opt,
            writeSpeed: $.dataTransferRateMeasure(),
            readSpeed: $.dataTransferRateMeasure(),
            dataTransferRate: $.dataTransferRateMeasure(),
            rpm: $.rotationalSpeedMeasure(),
            memoryType: $.string.opt,
            memoryForm: $.string.opt,
            compatibleDevices: $.string.list,
            memorySpeed: $.memorySpeedMeasure(),
            CASLatency: $.string.opt,
            cacheSize: $.capacityMeasure(),
            dataTransferBandwidth: $.string.opt,
            pinCount: $.int.opt,
            manufactureDate: $.monthYear(),
            rateOfEnergyCapacity: $.rateOfEnergyMeasure(),
            origin: $.string.opt,
            acAdapter: $.currentSetting(),
            batteryStats: $.currentSetting(),
            capacity: $.capacityMeasure(),
            type: $.string.list,
            mediaTitle: $.string.opt,
            mediaSubtitle: $.string.opt,
            copyright: $.string.opt,
            suggestedRetailPrice: $.double.opt,
            finish: $.string.opt,
            coverstock: $.string.opt,
            laneCondition: $.string.opt,
            radiusOfGyration: $.double.opt,
            headSize: $.lengthMeasure(),
            autoFocusTechnology: $.string.list,
            displayResolution: $.int.opt,
            photoSensorSize: $.lengthMeasure(),
            photoSensorTechnology: $.string.list,
            effecitveStillResolution: $.resolutionMeasure(),
            whiteBalanceSetting: $.string.opt,
            selfTimerDuration: $.musicDurationMeasure(),
            jpegQualityLevel: $.string.opt,
            videoCaptureFormats: $.string.list,
            videoCaptureResolution: $.string.opt,
            viewfinderType: $.string.opt,
            connectivityTechnology: $.string.opt,
            continuousShootingSpeed: $.double.opt,
            memorySlots: $.int.opt,
            cameraFormFactor: $.string.opt,
            skillLevel: $.string.opt,
            lensType: $.string.opt,
            opticalZoom: $.int.opt,
            digitalZoom: $.double.opt,
            maximumApeture: $.caliperSizeMeasure(),
            zoomType: $.string.list,
            autofocusPoints: $.int.opt,
            compatibleMoutings: $.string.list,
            focusType: $.string.opt,
            minimumFocalLength: $.caliperSizeMeasure(),
            maximumFocalLength: $.caliperSizeMeasure(),
            expandedISOMinimum: $.int.opt,
            expandedISOMaximum: $.int.opt,
            maxShutterSped: $.string.opt,
            shootingModes: $.string.list,
            bagType: $.string.opt,
            bottomType: $.string.opt,
            braType: $.string.opt,
            earringBackType: $.string.opt,
            earringFrontType: $.string.opt,
            hatType: $.string.opt,
            jacketType: $.string.opt,
            jeansType: $.string.opt,
            lapelType: $.string.opt,
            ringType: $.string.opt,
            shirtType: $.string.opt,
            skirtType: $.string.opt,
            shoeType: $.string.opt,
            sleepwearType: $.string.opt,
            tieType: $.string.opt,
            zipperType: $.string.opt
        }
    };
    mediaSubtitle?: Opt<string>;
    mediaTitle?: Opt<string>;
    type: DBList<DetailTypes>;
    batteryStats?: Opt<ICurrentSetting>;
    acAdapter?: Opt<ICurrentSetting>;
    origin?: Opt<Countries>;
    dataTransferBandwidth?: Opt<string>;
    pinCount?: Opt<number>;
    voltage?: Opt<number>;
    season?: Opt<number>;

    get sizeText(): string | undefined {
        return sizeLookup(this.size)?.text;
    }
    get sizeSelector(): string | undefined {
        return sizeLookup(this.size)?.selector;
    }
    get primaryColor(): ProductColors | undefined {
        const color = this.color != null && (this.color.length ?? 0 > 0) ? this.color[0] : undefined;
        return color;
    }
    get primaryColorSelector(): string | undefined {
        const color = this.color != null && (this.color.length ?? 0 > 0) ? this.color[0] : undefined;
        return color != null ? productColors[color].selector : undefined;
    }
    get allHashTags(): IHashTag[] {
        return distinctByOID([...(this.brand?.allHashTags ?? []), ...(this?.classifier?.allHashTags ?? [])]);
    }
    get detailTypes(): DetailTypes[] {
        return distinctByString(['general', ...Array.from(this.type ?? []), ...Array.from(this.classifier?.detailTypes ?? [])]);
    }
    static labelProperty = 'title';
    static update(item: IProduct): IProduct {
        console.log(`in update`);
        const inAttributes = item.classifier?.allAttributes ?? [];
        const func = () => {
            for (const { path, value, isList, isDictionary } of inAttributes) {
                console.log(`processing attribute`, path, isList, value);
                if (!path.startsWith('flags')) {
                    const $isList = isList ?? false;
                    const $isDictionary = isDictionary ?? false;
                    const $value = $isList ? [value] : $isDictionary ? { key: value } : value;
                    console.log(`$value`, $value);
                    (item as any)[path] = $value;
                }
            }
        };
        runTransaction(Product.localRealm, func);
        return item;
    }
    constructor(realm: Realm, values: any) {
        super(realm, values);
    }
    driveType?: Opt<DriveTypes>;
    driveForm?: Opt<DriveFormFactors>;
    connectivity: DBList<Connectivity>;
    driveInterface?: Opt<DriveInterfaces>;
    memoryType?: Opt<MemoryTypes>;
    memoryForm?: Opt<MemoryFormFactors>;
    CASLatency?: Opt<CasLatency>;
    autoFocusTechnology: DBList<AutofocusTechnologies>;
    displayResolution: Opt<number>;
    photoSensorSize: Opt<IMeasure<LengthUnitsOfMeasure>>;
    photoSensorTechnology: DBList<PhotoSensorTechnologies>;
    effectiveStillResolution: Opt<IMeasure<'MP'>>;
    whiteBalanceSetting: Opt<WhiteBalanceSettings>;
    selfTimerDuration: Opt<IMeasure<MusicDurationUnitsOfMeasure>>;
    jpegQualityLevel: Opt<JpegQualityLevels>;
    videoCaptureFormats: DBList<FileFormats>;
    videoCaptureResolution: Opt<VideoCaptureResolutions>;
    viewfinderType: Opt<ViewfinderTypes>;
    connectivityTechnology: Opt<CameraConnectionTypes>;
    continuousShootingSpeed: Opt<number>;
    memorySlots: Opt<number>;
    cameraFormFactor: Opt<CameraSizes>;
    skillLevel: Opt<SkillLevels>;
    lensType: Opt<LensType>;
    opticalZoom: Opt<number>;
    digitalZoom: Opt<number>;
    maximumApeture: Opt<IMeasure<CaliperSizeUnitsOfMeasure>>;
    zoomType: DBList<ZoomTypes>;
    autofocusPoints: Opt<number>;
    compatibleMountings: DBList<CompatibleMountings>;
    focusType: Opt<FocusTypes>;
    minimumFocalLength: Opt<IMeasure<CaliperSizeUnitsOfMeasure>>;
    maximumFocalLength: Opt<IMeasure<CaliperSizeUnitsOfMeasure>>;
    expandedISOMinimum: Opt<number>;
    expandedISOMaximum: Opt<number>;
    maxShutterSpeed: Opt<string>;
    shootingModes: DBList<ShootingModes>;
    headSize: Opt<IMeasure<LengthUnitsOfMeasure>>;
    shadowClassifier: Opt<IClassifier>;
    static init(): InitValue<IProduct> {
        return {
            _id: new BSON.ObjectId(),
            includes: [],
            overrideTitle: false,
            partNumbers: [],
            madeOf: [],
            asins: [],
            customAttributes: [],
            features: [],
            hashTags: [],
            flags: [],
            upcs: [],
            color: [],
            collectionOf: [],
            connectors: [],
            compatibleWith: [],
            type: [],
            compatibleDevices: [],
            connectivity: [],
            autoFocusTechnology: [],
            videoCaptureFormats: [],
            zoomType: [],
            compatibleMountings: [],
            shootingModes: [],
            photoSensorTechnology: []
        };
    }
}
