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
import { ApparelDetails } from './entity/detailEntity/ApparelDetails';
import { ApparelTopsDetails } from './entity/detailEntity/ApparelTopsDetails';
import { ApparelBottomsDetails } from './entity/detailEntity/ApparelBottomsDetails';
import { ApparelBottomsLeggedDetails } from './entity/detailEntity/ApparelBottomsLeggedDetails';
import { ApparelBrasDetails } from './entity/detailEntity/ApparelBrasDetails';
import { ApparelBrasSwimsuitDetails } from './entity/detailEntity/ApparelBrasSwimsuitDetails';
import { ApparelFootwearDetails } from './entity/detailEntity/ApparelFootwearDetails';
import { CablesDataDetails } from './entity/detailEntity/CablesDataDetails';
import { CablesDetails } from './entity/detailEntity/CablesDetails';
import { CablesPowerDetails } from './entity/detailEntity/CablesPowerDetails';
import { CablesVideoDetails } from './entity/detailEntity/CablesVideoDetails';
import { ElectronicsComputerComponentsBatteryDetails } from './entity/detailEntity/ElectronicsComputerComponentsBatteryDetails';
import { ElectronicsComputerComponentsDetails } from './entity/detailEntity/ElectronicsComputerComponentsDetails';
import { ElectronicsComputerComponentsDrivesDetails } from './entity/detailEntity/ElectronicsComputerComponentsDrivesDetails';
import { ElectronicsComputerComponentsNetworkingDetails } from './entity/detailEntity/ElectronicsComputerComponentsNetworkingDetails';
import { ElectronicsComputerComponentsRamDetails } from './entity/detailEntity/ElectronicsComputerComponentsRamDetails';
import { ElectronicsDetails } from './entity/detailEntity/ElectronicsDetails';
import { ElectronicsKitchenAppliancesDetails } from './entity/detailEntity/ElectronicsKitchenAppliancesDetails';
import { ElectronicsVisualCellPhonesDetails } from './entity/detailEntity/ElectronicsVisualCellPhonesDetails';
import { ElectronicsVisualDetails } from './entity/detailEntity/ElectronicsVisualDetails';
import { GeneralDetails } from './entity/detailEntity/GeneralDetails';
import { HomeGoodsDecorDetails } from './entity/detailEntity/HomeGoodsDecorDetails';
import { HomeGoodsDetails } from './entity/detailEntity/HomeGoodsDetails';
import { HomeGoodsDinnerwareDetails } from './entity/detailEntity/HomeGoodsDinnerwareDetails';
import { HomeGoodsFlatwareDetails } from './entity/detailEntity/HomeGoodsFlatwareDetails';
import { HomeGoodsGlasswareDetails } from './entity/detailEntity/HomeGoodsGlasswareDetails';
import { JewelryDetails } from './entity/detailEntity/JewelryDetails';
import { MediaBooksDetails } from './entity/detailEntity/MediaBooksDetails';
import { MediaDetails } from './entity/detailEntity/MediaDetails';
import { MediaMusicDetails } from './entity/detailEntity/MediaMusicDetails';
import { MediaVideoGamesDetails } from './entity/detailEntity/MediaVideoGamesDetails';
import { MediaVideosDetails } from './entity/detailEntity/MediaVideosDetails';
import { MediaVideosFilmDetails } from './entity/detailEntity/MediaVideosFilmDetails';
import { MediaVideosTvSeriesDetails } from './entity/detailEntity/MediaVideosTvSeriesDetails';
import { SportingGoodsBowlingBallsDetails } from './entity/detailEntity/SportingGoodsBowlingBallsDetails';
import { SportingGoodsBowlingDetails } from './entity/detailEntity/SportingGoodsBowlingDetails';
import { SportingGoodsDetails } from './entity/detailEntity/SportingGoodsDetails';
import { SportingGoodsGolfClubsDetails } from './entity/detailEntity/SportingGoodsGolfClubsDetails';
import { SportingGoodsGolfDetails } from './entity/detailEntity/SportingGoodsGolfDetails';
import { SportingGoodsTennisDetails } from './entity/detailEntity/SportingGoodsTennisDetails';
import { SportingGoodsTennisRacketsDetails } from './entity/detailEntity/SportingGoodsTennisRacketsDetails';
import { ToysBoardGamesDetails } from './entity/detailEntity/ToysBoardGamesDetails';
import { ToysDetails } from './entity/detailEntity/ToysDetails';
import { ToysStuffedAnimalsDetails } from './entity/detailEntity/ToysStuffedAnimalsDetails';
import { Details } from './entity/details';
import { Scrape } from './entity/scrape';
import { ScrapeKVP } from './entity/scrapeKVP';
import { ScrapeStoreInfo } from './entity/scrapeStoreInfo';
import { Scan } from './entity/scan';
import { ApiResult } from './entity/apiResult';
import { OfficeGoodsDetails } from './entity/detailEntity/OfficeGoodsDetails';
import { ApparelAccessoriesDetails } from './entity/detailEntity/ApparelAccessoriesDetails';
import { AdminTask } from './entity/adminTask';
import { ResolutionMeasure } from './dimensions/ResolutionMeasure';
import { ElectronicsVisualCameraDetails } from './entity/detailEntity/ElectronicsVisualCameraDetails';
import { Classification } from './entity/classification';

export const schema: (EmbeddedClass<any> | DetailsClass | ReferenceClass<any>)[] = [
    Address as EmbeddedClass<any>,
    AdminTask as ReferenceClass<any>,
    Album as ReferenceClass<any>,
    AmperageMeasure as EmbeddedClass<any>,
    AngleMeasure as EmbeddedClass<any>,
    ApiResult as ReferenceClass<any>,
    ApparelSize as EmbeddedClass<any>,
    Attachment as ReferenceClass<any>,
    Attribute as EmbeddedClass<any>,
    Auction as ReferenceClass<any>,
    Barcode as ReferenceClass<any>,
    BaseAward as EmbeddedClass<any>,
    Bin as ReferenceClass<any>,
    Book as ReferenceClass<any>,
    Brand as ReferenceClass<any>,
    CaliperSizeMeasure as EmbeddedClass<any>,
    CapacityMeasure as EmbeddedClass<any>,
    Classifier as ReferenceClass<any>,
    Classification as ReferenceClass<any>,
    ClothingCare as EmbeddedClass<any>,
    Connector as EmbeddedClass<any>,
    Contributor as EmbeddedClass<any>,
    CurrentSetting as EmbeddedClass<any>,
    CustomItemField as EmbeddedClass<any>,
    CustomItemFieldType as EmbeddedClass<any>,
    CustomItemFieldTypes as EmbeddedClass<any>,
    CustomItemFieldValue as EmbeddedClass<any>,
    DataTransferRateMeasure as EmbeddedClass<any>,
    DistanceMeasure as EmbeddedClass<any>,
    Draft as ReferenceClass<any>,
    Facility as ReferenceClass<any>,
    Facing as EmbeddedClass<any>,
    HashTag as ReferenceClass<any>,
    HashTagUsage as EmbeddedClass<any>,
    IncludedItem as EmbeddedClass<any>,
    Individual as ReferenceClass<any>,
    LengthMeasure as EmbeddedClass<any>,
    MadeOfSection as EmbeddedClass<any>,
    MemorySpeedMeasure as EmbeddedClass<any>,
    MercariBrand as ReferenceClass<any>,
    MercariCategory as EmbeddedClass<any>,
    MercariTaxonomy as ReferenceClass<any>,
    MinMax as EmbeddedClass<any>,
    MonthYear as EmbeddedClass<any>,
    Movie as ReferenceClass<any>,
    MusicDurationMeasure as EmbeddedClass<any>,
    OperatingSystemInfo as EmbeddedClass<any>,
    PartNumber as EmbeddedClass<any>,
    Piece as EmbeddedClass<any>,
    PowerConsumptionMeasure as EmbeddedClass<any>,
    Product as ReferenceClass<any>,
    ProductImage as ReferenceClass<any>,
    RateOfEnergyCapacityMeasure as EmbeddedClass<any>,
    ResolutionMeasure as EmbeddedClass<any>,
    Rn as ReferenceClass<any>,
    RotationalSpeedMeasure as EmbeddedClass<any>,
    Scan as EmbeddedClass<any>,    
    ScrapeStoreInfo as EmbeddedClass<any>,
    ScrapeKVP as EmbeddedClass<any>,
    Scrape as EmbeddedClass<any>,
    SelfStorage as ReferenceClass<any>,
    Shipping as EmbeddedClass<any>,
    Sku as ReferenceClass<any>,
    SquareFootage as EmbeddedClass<any>,
    Track as EmbeddedClass<any>,
    TvSeries as ReferenceClass<any>,
    TvSeriesEpisode as EmbeddedClass<any>,
    VideoRuntimeMeasure as EmbeddedClass<any>,
    VoltageMeasure as EmbeddedClass<any>,
    WattageMeasure as EmbeddedClass<any>,
    WeightMeasure as EmbeddedClass<any>,
    // OscarAward,
    // HugoAward,
    // PulitzerAward,
    // GrammyAward,
    // EmmyAward,
    // NYTimesAward,
    // TonyAward
    Details as any,
    ApparelDetails as DetailsClass,
    ApparelAccessoriesDetails as DetailsClass,
    ApparelTopsDetails as DetailsClass,
    ApparelBottomsDetails as DetailsClass,
    ApparelBottomsLeggedDetails as DetailsClass,
    ApparelFootwearDetails as DetailsClass,
    ApparelBrasDetails as DetailsClass,
    ApparelBrasSwimsuitDetails as DetailsClass,
    CablesDetails as DetailsClass,
    CablesDataDetails as DetailsClass,
    CablesPowerDetails as DetailsClass,
    CablesVideoDetails as DetailsClass,
    ElectronicsDetails as DetailsClass,
    ElectronicsVisualDetails as DetailsClass,
    ElectronicsVisualCellPhonesDetails as DetailsClass,
    ElectronicsVisualCameraDetails as DetailsClass,
    ElectronicsComputerComponentsDetails as DetailsClass,
    ElectronicsComputerComponentsRamDetails as DetailsClass,
    ElectronicsComputerComponentsBatteryDetails as DetailsClass,
    ElectronicsComputerComponentsDrivesDetails as DetailsClass,
    ElectronicsComputerComponentsNetworkingDetails as DetailsClass,
    ElectronicsKitchenAppliancesDetails as DetailsClass,
    GeneralDetails as DetailsClass,
    HomeGoodsDetails as DetailsClass,
    HomeGoodsDecorDetails as DetailsClass,
    HomeGoodsFlatwareDetails as DetailsClass,
    HomeGoodsDinnerwareDetails as DetailsClass,
    HomeGoodsGlasswareDetails as DetailsClass,
    JewelryDetails as DetailsClass,
    MediaDetails as DetailsClass,
    MediaBooksDetails as DetailsClass,
    MediaMusicDetails as DetailsClass,
    MediaVideoGamesDetails as DetailsClass,
    MediaVideosDetails as DetailsClass,
    MediaVideosFilmDetails as DetailsClass,
    MediaVideosTvSeriesDetails as DetailsClass,
    OfficeGoodsDetails as DetailsClass,
    SportingGoodsDetails as DetailsClass,
    SportingGoodsGolfDetails as DetailsClass,
    SportingGoodsGolfClubsDetails as DetailsClass,
    SportingGoodsTennisDetails as DetailsClass,
    SportingGoodsTennisRacketsDetails as DetailsClass,
    SportingGoodsBowlingDetails as DetailsClass,
    SportingGoodsBowlingBallsDetails as DetailsClass,
    ToysDetails as DetailsClass,
    ToysBoardGamesDetails as DetailsClass,
    ToysStuffedAnimalsDetails as DetailsClass
];
