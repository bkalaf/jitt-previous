import Realm, { BSON } from 'realm';
import { DetailTypes, IBarcode, IBrand, IClassifier, IClothingCare, IConnector, ICurrentSetting, ICustomItemField, IHashTag, IIncludedItem, IMadeOfSection, IMinMax, IProduct, ITrack, Opt } from '../../types';

import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { distinctByOID } from '../../common/array/distinct';
import { sizeLookup } from '../enums/sizes';
import {
    Flags,
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
    BookGenres,
    BookTypes,
    Languages,
    ESRBRatings,
    ConsoleTypes,
    MusicFormatTypes,
    MusicGenres,
    MovieGenres,
    MovieRatings,
    TVRatings,
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
    OperatingSystems,
    PowerTypes,
    ShaftTypes,
    ShapeTypes,
    WedgeTypes,
    SleeveLengths
} from '../enums';
import { productColors } from '../enums/productColors';

export class Product extends Realm.Object<IProduct> implements IProduct {
    cordLength: Opt<number>;
    connectors: DBList<IConnector>;
    compatibleWith: DBList<string>;
    sleeveLength: Opt<SleeveLengths>;
    input: Opt<ICurrentSetting>;
    output: Opt<ICurrentSetting>;
    batteryCount: Opt<number>;
    batteryType: Opt<BatteryTypes>;
    powerTypes: Opt<PowerTypes>;
    testedOn: Opt<Date>;
    aspectRatio: Opt<AspectRatios>;
    capacity: Opt<number>;
    cellCarrier: Opt<CellCarriers>;
    os: Opt<OperatingSystems>;
    osVersion: Opt<string>;
    screenSize: Opt<number>;
    massInAir: Opt<number>;
    massWaterDisplaced: Opt<number>;
    density: Opt<number>;
    metal: Opt<MetalTypes>;
    dinnerwareType: Opt<DinnerwareTypes>;
    pattern: Opt<string>;
    shapeType: Opt<ShapeTypes>;
    applianceType: Opt<ApplianceTypes>;
    clubType: Opt<ClubTypes>;
    flexType: Opt<FlexTypes>;
    handOrientation: Opt<HandOrientations>;
    ironType: Opt<IronTypes>;
    clubLength: Opt<number>;
    lie: Opt<number>;
    loft: Opt<number>;
    shaftType: Opt<ShaftTypes>;
    swingWeight: Opt<string>;
    wedgeType: Opt<WedgeTypes>;
    ages: Opt<IMinMax<number>>;
    players: Opt<IMinMax<number>>;
    pieceCount: Opt<number>;
    _id: BSON.ObjectId;
    asins: DBList<string>;
    brand: Opt<IBrand>;
    classifier: Opt<IClassifier>;
    includes: DBList<IIncludedItem>;
    customAttributes: DBList<ICustomItemField>;
    features: DBList<string>;
    flags: DBList<Flags>;
    hashTags: DBList<IHashTag>;
    height: Opt<number>;
    width: Opt<number>;
    length: Opt<number>;
    weight: Opt<number>;
    modelNo: Opt<string>;
    notes: Opt<string>;
    title: Opt<string>;
    upcs: DBList<IBarcode>;
    circa: Opt<string>;
    color: DBList<ProductColors>;
    description: Opt<string>;
    madeOf: DBList<IMadeOfSection>;
    gender: Opt<Genders>;
    cutNo: Opt<string>;
    styleNo: Opt<string>;
    text: Opt<string>;
    rnNo: Opt<number>;
    clothingCare: Opt<IClothingCare>;
    closureType: Opt<ClosureTypes>;
    fitType: Opt<FitTypes>;
    inseamSize: Opt<number>;
    legStyle: Opt<LegStyles>;
    lengthSize: Opt<number>;
    lengthType: Opt<GarmentLengths>;
    lifestyleType: Opt<LifestyleTypes>;
    pocketType: Opt<PocketTypes>;
    riseType: Opt<RiseTypes>;
    size: Opt<number>;
    waistSize: Opt<number>;
    bootType: Opt<BootTypes>;
    footSize: Opt<number>;
    heelHeight: Opt<number>;
    heightMapType: Opt<HeightMaps>;
    shoeHeelType: Opt<ShoeHeelTypes>;
    shoeWidth: Opt<ShoeWidths>;
    strapType: Opt<StrapTypes>;
    toeStyle: Opt<ToeStyles>;
    bustSize: Opt<number>;
    swimsuitBottomStyle: Opt<SwimsuitBottomStyles>;
    swimsuitTopStyle: Opt<SwimsuitTopStyles>;
    backlineType: Opt<BacklineTypes>;
    chestSize: Opt<number>;
    collarType: Opt<CollarTypes>;
    cuffType: Opt<CuffTypes>;
    dressType: Opt<DressTypes>;
    neckSize: Opt<number>;
    neckType: Opt<NeckTypes>;
    sleeveSize: Opt<number>;
    sleeveType: Opt<SleeveTypes>;
    suitType: Opt<SuitTypes>;
    awards: DBList<string>;
    copyright: Opt<string>;
    mediaSubtitle: Opt<string>;
    mediaTitle: Opt<string>;
    authors: DBList<string>;
    blurb: Opt<string>;
    bookGenre: Opt<BookGenres>;
    bookType: Opt<BookTypes>;
    edition: Opt<number>;
    illustrators: DBList<string>;
    language: Opt<Languages>;
    pages: Opt<number>;
    publishers: DBList<string>;
    collectionOf: DBList<string>;
    count: Opt<number>;
    directedBy: DBList<string>;
    videoFormat: Opt<VideoFormatTypes>;
    videoGenre: Opt<MovieGenres>;
    movieRating: Opt<MovieRatings>;
    runtime: Opt<number>;
    starring: DBList<string>;
    tvRating: Opt<TVRatings>;
    videoType: Opt<VideoTypes>;
    ESRBRating: Opt<ESRBRatings>;
    consoleType: Opt<ConsoleTypes>;
    studio: Opt<string>;
    artist: Opt<string>;
    musicFormat: Opt<MusicFormatTypes>;
    musicGenre: Opt<MusicGenres>;
    tracks: DBList<ITrack>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.product()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            asins: $.string.list,
            brand: $.brand(),
            classifier: $.classifier(),
            includes: $.includedItem.list,
            customAttributes: $.customItemField.list,
            features: $.string.list,
            hashTags: $.hashTag.list,
            flags: $.string.list,
            weight: $.double.opt,
            length: $.double.opt,
            width: $.double.opt,
            height: $.double.opt,
            modelNo: $.string.opt,
            notes: $.string.opt,
            title: $.string.opt,
            upcs: $.barcode.list,
            circa: $.string.opt,
            color: $.string.list,
            description: $.string.opt,

            madeOf: $.madeOfSection.list,
            gender: $.string.opt,
            styleNo: $.string.opt,
            cutNo: $.string.opt,
            text: $.string.opt,
            rnNo: $.int.opt,
            clothingCare: $.clothingCare(),
            closureType: $.string.opt,
            inseamSize: $.double.opt,
            fitType: $.string.opt,
            legStyle: $.string.opt,
            lengthSize: $.double.opt,
            lengthType: $.string.opt,
            lifestyleType: $.string.opt,
            pocketType: $.string.opt,
            riseType: $.string.opt,
            size: $.int.opt,
            waistSize: $.double.opt,
            bootType: $.string.opt,
            footSize: $.double.opt,
            heelHeight: $.double.opt,
            heightMapType: $.string.opt,
            shoeHeelType: $.string.opt,
            shoeWidth: $.string.opt,
            strapType: $.string.opt,
            toeStyle: $.string.opt,
            bustSize: $.double.opt,
            swimsuitBottomStyle: $.string.opt,
            swimsuitTopStyle: $.string.opt,
            backlineType: $.string.opt,
            chestSize: $.double.opt,
            collarType: $.string.opt,
            cuffType: $.string.opt,
            dressType: $.string.opt,
            neckSize: $.double.opt,
            neckType: $.string.opt,
            sleeveSize: $.double.opt,
            sleeveType: $.string.opt,
            suitType: $.string.opt,
            sleeveLength: $.string.opt,

            awards: $.string.list,
            copyright: $.string.opt,
            mediaSubtitle: $.string.opt,
            mediaTitle: $.string.opt,

            authors: $.string.list,
            blurb: $.string.opt,
            bookGenre: $.string.opt,
            bookType: $.string.opt,
            edition: $.int.opt,
            illustrators: $.string.list,
            language: $.string.opt,
            pages: $.int.opt,
            publishers: $.string.list,

            collectionOf: $.string.list,
            count: $.int.opt,
            directedBy: $.string.list,
            videoFormat: $.string.opt,
            movieRating: $.string.opt,
            videoGenre: $.string.opt,
            runtime: $.int.opt,
            starring: $.string.list,
            tvRating: $.string.opt,
            videoType: $.string.opt,

            ESRBRating: $.string.opt,
            consoleType: $.string.opt,
            studio: $.string.opt,

            artist: $.string.opt,
            musicFormat: $.string.opt,
            musicGenre: $.string.opt,
            tracks: $.track.list,

            cordLength: $.double.opt,
            connectors: $.connector.list,
            compatibleWith: $.string.list,
            input: $.currentSetting(),
            output: $.currentSetting(),
            batteryCount: $.int.opt,
            batteryType: $.string.opt,
            powerType: $.string.opt,
            testedOn: $.date.opt,
            aspectRatio: $.string.opt,
            capacity: $.int.opt,
            cellCarrier: $.string.opt,
            os: $.string.opt,
            osVersion: $.string.opt,
            screenSize: $.double.opt,
            massInAir: $.double.opt,
            massWaterDisplaced: $.double.opt,
            metal: $.string.opt,
            dinnerwareType: $.string.opt,
            pattern: $.string.opt,
            shapeType: $.string.opt,
            applianceType: $.string.opt,
            clubType: $.string.opt,
            flexType: $.string.opt,
            handOrientatin: $.string.opt,
            ironType: $.string.opt,
            clubLength: $.double.opt,
            lie: $.double.opt,
            loft: $.double.opt,
            shaftType: $.string.opt,
            swingWeight: $.string.opt,
            wedgeType: $.string.opt,
            ages: $.minMax(),
            players: $.minMax(),
            pieceCount: $.int()

        }
    };

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
        return this.classifier?.detailTypes ?? ['general'];
    }
}
