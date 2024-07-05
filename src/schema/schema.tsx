import { Address } from './entity/address';
import { Attribute } from './entity/attribute';
import { Auction } from './entity/auction';
import { Brand } from './entity/brand';
import { Classifier } from './entity/classifier';
import { Facility } from './entity/facility';
import { HashTag } from './entity/hashTag';
import { HashTagUsage } from './entity/hashTagUsage';
import { MercariBrand } from './entity/mercariBrand';
import { MercariCategory } from './entity/mercariCategory';
import { MercariTaxonomy } from './entity/mercariTaxonomy';
import { SelfStorage } from './entity/selfStorage';
import { SquareFootage } from './entity/squareFootage';
import { Barcode } from './entity/barcode';
import { Bin } from './entity/bin';
import { CustomItemField } from './entity/customItemField';
import { IncludedItem } from './entity/includedItem';
import { ClothingCare } from './entity/clothingCare';
import { MadeOfSection } from './entity/madeOfSection';
import { Product } from './entity/product';
import { Connector } from './entity/connector';
import { CurrentSetting } from './entity/currentSetting';
import { MinMax } from './entity/minMax';
import { Sku } from './entity/sku';
import { ProductImage } from './entity/productImage';
import { Facing } from './entity/facing';
import { Shipping } from './entity/shipping';
import { Piece } from './entity/piece';
import { Draft } from './entity/draft';
import { CustomItemFieldValue } from './entity/customItemFieldValue';
import { CustomItemFieldType } from './entity/customItemFieldType';
import { CustomItemFieldTypes } from './entity/customItemFieldTypes';
import { Attachment } from './entity/attachment';
import { ApparelSize } from './entity/apparelSize';
import { Track } from './entity/track';
import { OperatingSystemInfo } from './entity/operatingSystemInfo';
import { BaseAward } from './entity/award';
import { AmperageMeasure } from './dimensions/AmperageMeasure';
import { AngleMeasure } from './dimensions/AngleMeasure';
import { CaliperSizeMeasure } from './dimensions/CaliperSizeMeasure';
import { CapacityMeasure } from './dimensions/CapacityMeasure';
import { DataTransferRateMeasure } from './dimensions/DataTransferRateMeasure';
import { DistanceMeasure } from './dimensions/DistanceMeasure';
import { LengthMeasure } from './dimensions/LengthMeasure';
import { MemorySpeedMeasure } from './dimensions/MemorySpeedMeasure';
import { MusicDurationMeasure } from './dimensions/MusicDurationMeasure';
import { PowerConsumptionMeasure } from './dimensions/PowerConsumptionMeasure';
import { RateOfEnergyCapacityMeasure } from './dimensions/RateOfEnergyCapacityMeasure';
import { RotationalSpeedMeasure } from './dimensions/RotationalSpeedMeasure';
import { VideoRuntimeMeasure } from './dimensions/VideoRuntime';
import { VoltageMeasure } from './dimensions/VoltageMeasure';
import { WattageMeasure } from './dimensions/WattageMeasure';
import { WeightMeasure } from './dimensions/WeightMeasure';
import { MonthYear } from './entity/monthYear';
import { Individual } from './entity/individual';
import { Contributor } from './entity/contributor';
import { Book } from './entity/book';
import { Album } from './entity/album';
import { Movie } from './entity/movie';
import { TvSeriesEpisode } from './entity/tvSeriesEpisode';
import { TvSeries } from './entity/tvSeries';
import { PartNumber } from './entity/partNumber';
import { Rn } from './entity/rn';

export const schema: (MyClass<any> | Realm.ObjectSchema)[] = [
    Address,
    AmperageMeasure,
    AngleMeasure,
    ApparelSize,
    Attachment,
    Attribute,
    Auction,
    Barcode,
    Bin,
    Brand,
    CaliperSizeMeasure,
    CapacityMeasure,
    Classifier,
    ClothingCare,
    Connector,
    CurrentSetting,
    CustomItemField,
    CustomItemFieldType,
    CustomItemFieldTypes,
    CustomItemFieldValue,
    DataTransferRateMeasure,
    DistanceMeasure,
    Draft,
    Facility,
    Facing,
    HashTag,
    HashTagUsage,
    IncludedItem,
    Contributor,
    Individual,
    LengthMeasure,
    MadeOfSection,
    MemorySpeedMeasure,
    MercariBrand,
    MercariCategory,
    MercariTaxonomy,
    PartNumber,
    MinMax,
    Rn,
    MonthYear,
    MusicDurationMeasure,
    OperatingSystemInfo,
    Piece,
    PowerConsumptionMeasure,
    Product,
    ProductImage,
    RateOfEnergyCapacityMeasure,
    RotationalSpeedMeasure,
    SelfStorage,
    Shipping,
    Sku,
    SquareFootage,
    Track,
    VideoRuntimeMeasure,
    VoltageMeasure,
    WattageMeasure,
    WeightMeasure,
    BaseAward,
    Album,
    Book,
    Movie,
    TvSeriesEpisode,
    TvSeries
    // OscarAward,
    // HugoAward,
    // PulitzerAward,
    // GrammyAward,
    // EmmyAward,
    // NYTimesAward,
    // TonyAward
];
