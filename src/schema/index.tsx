import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { addressColumns } from './columns/address';
import { attributeColumns } from './columns/attribute';
import { auctionColumns } from './columns/auction';
import { col } from './defs/col';
import { barcodeColumns } from './columns/barcode';
import { includedItemColumns } from './columns/includedItem';
import { productColumns } from './entity/productColumns';
import { sku } from './columns/sku';
import { facing } from './columns/facing';
import { facilityColumns } from './columns/facility';
import { binColumns } from './columns/bin';
import { brandColumns } from './columns/brand';
import { classifierColumns } from './columns/classifier';
import { clothingCareColumns } from './columns/clothingCare';
import { connectorColumns } from './columns/connector';
import { currentSettingColumns } from './columns/currentSetting';
import { customItemFieldColumns } from './columns/customItemField';
import { shippingColumns } from './columns/shipping';
import { hashTagColumns } from './columns/hashTag';
import { hashTagUsageColumns } from './columns/hashTagUsage';
import { madeOfSectionColumns } from './columns/madeOfSection';
import { mercariBrandColumns } from './columns/mercariBrand';
import { mercariCategoryColumns } from './columns/mercariCategory';
import { mercariTaxonomyColumns } from './columns/mercariTaxonomy';
import { minMaxColumns } from './columns/minMax';
import { selfStorageColumns } from './columns/selfStorage';
import { productImage } from './columns/productImage';
import { squareFootageColumns } from './columns/squareFootage';
import { trackColumns } from './columns/track';
import { apparelDetails } from './entity/details/apparelDetails';
import { apparelFootwear } from './entity/details/apparelFootwear';
import { apparelTops } from './entity/details/apparelTops';
import { apparelBras } from './entity/details/apparelBras';
import { apparelBottoms } from './entity/details/apparelBottoms';
import { mediaDetails } from './entity/details/mediaDetails';
import { mediaBooksDetails } from './entity/details/mediaBooksDetails';
import { mediaVideosDetails } from './entity/details/mediaVideosDetails';
import { mediaMusicDetails } from './entity/details/mediaMusicDetails';
import { mediaVideoGameDetails } from './entity/details/mediaVideoGameDetails';
import { cablesDetails } from './entity/details/cablesDetails';
import { cablesVideoDetails } from './entity/details/cablesVideoDetails';
import { cablesDataDetails } from './entity/details/cablesDataDetails';
import { cablesPowerDetails } from './entity/details/cablesPowerDetails';
import { electronicsVisualCellPhonesDetails, electronicsVisualDetails } from './entity/details/cellPhoneDetails';
import { electronicsDetails } from './entity/details/electronicsDetails';
import { generalDetails } from './entity/details/generalDetails';
import { homeGoodsDetails } from './entity/details/homeGoodsDetails';
import { homeGoodsDinnerwareDetails } from './entity/details/homeGoodsDinnerwareDetails';
import { homeGoodsFlatwareDetails } from './entity/details/homeGoodsFlatwareDetails';
import { jewelryDetails } from './entity/details/jewelryDetails';
import { electronicsKitchenAppliancesDetails } from './entity/details/kitchenAppliancesDetails';
import { sportingGoodsDetails, sportingGoodsGolfClubsDetails } from './entity/details/sportingGoodsDetails';
import { toysDetails } from './entity/details/toysDetails';
import { toysBoardGamesDetails } from './entity/details/toysBoardGamesDetails';
import { pieceColumns } from './columns/piece';
import { draftColumns } from './columns/draft';
import { electronicsComputerComponentsDetails } from './entity/details/computerComponentsDetails';
import { electronicsComputerComponentsDrivesDetails } from './entity/details/computerComponentsDrivesDetails';
import { electronicsComputerComponentsRamDetails } from './entity/details/computerComponentsRamDetails';
import { operatingSystemInfoColumns } from './columns/operatingSystemInfoColumns';
import { monthYearColumns } from './columns/monthYearColumns';
import { bookColumns } from './columns/bookColumns';
import { apparelSizeColumns } from './columns/apparelSizeColumns';
import { albumColumns } from './columns/albumColumns';
import { movieColumns } from './columns/movieColumns';
import { tvSeriesEpisodeColumns } from './columns/tvSeriesEpisodeColumns';
import { tvSeriesColumns } from './columns/tvSeriesColumns';
import { individualColumns } from './columns/individualColumns';
import { contributorColumns } from './columns/contributorColumns';
import { electronicsComputerComponentsBatteryDetails } from './entity/details/electronicsComputerComponentsBatteryDetails';
import { partNumberColumns } from './columns/partNumber';
import { rnColumns } from './columns/rn';

const h = createMRTColumnHelper<{ value: any }>();
const helper = col(h);
const stringColumn = helper.string()('value', 'Value', undefined, { required: true });
const intColumn = helper.int()('value', 'Value', { required: true });
const doubleColumn = helper.double()('value', 'Value', { required: true });
const boolColumn = helper.bool()('value', 'Value');
const dateColumn = helper.date()('value', 'Value', {}, true);

// (Realm.ObjectSchema | Realm.ObjectClass<any>)

if (window.columns == null) window.columns = {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
window.columns.string = function <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) {
    return [stringColumn] as MRT_ColumnDef<T>[];
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
window.columns.int = function <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) {
    return [intColumn] as MRT_ColumnDef<T>[];
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
window.columns.double = function <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) {
    return [doubleColumn] as MRT_ColumnDef<T>[];
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
window.columns.date = function <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) {
    return [dateColumn] as MRT_ColumnDef<T>[];
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
window.columns.bool = function <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) {
    return [boolColumn] as MRT_ColumnDef<T>[];
};
// window.columns. = [Column];

window.columns.address = addressColumns;
// as <T extends MRT_RowData>(...dependencies: IDependency<IAddress, any>[]) => MRT_ColumnDef<T>[];
window.columns.attribute = attributeColumns;
window.columns.auction = auctionColumns;
window.columns.barcode = barcodeColumns;
window.columns.bin = binColumns;
window.columns.brand = brandColumns;
window.columns.classifier = classifierColumns;
window.columns.clothingCare = clothingCareColumns;
window.columns.connector = connectorColumns;
window.columns.currentSetting = currentSettingColumns;
window.columns.customItemField = customItemFieldColumns;
window.columns.draft = draftColumns;
window.columns.facility = facilityColumns;
window.columns.hashTag = hashTagColumns;
window.columns.hashTagUsage = hashTagUsageColumns;
window.columns.includedItem = includedItemColumns;
window.columns.madeOfSection = madeOfSectionColumns;
window.columns.mercariBrand = mercariBrandColumns;
window.columns.mercariCategory = mercariCategoryColumns;
window.columns.mercariTaxonomy = mercariTaxonomyColumns;
window.columns.minMax = minMaxColumns;
window.columns.piece = pieceColumns;
window.columns.product = productColumns;
window.columns.productFacing = facing;
window.columns.productImage = productImage;
window.columns.selfStorage = selfStorageColumns;
window.columns.shipping = shippingColumns;
window.columns.sku = sku;
window.columns.squareFootage = squareFootageColumns;
window.columns.track = trackColumns;
window.columns.operatingSystemInfo = operatingSystemInfoColumns;
window.columns.monthYear = monthYearColumns;
window.columns.book = bookColumns;
window.columns.apparelSize = apparelSizeColumns;
window.columns.album = albumColumns;
window.columns.movie = movieColumns;
window.columns.episode = tvSeriesEpisodeColumns;
window.columns.tvSeries = tvSeriesColumns;
window.columns.individual = individualColumns;
window.columns.contributor = contributorColumns;
window.columns.partNumber = partNumberColumns;
window.columns.rn = rnColumns;

window.columns.apparelDetails = apparelDetails;
window.columns.apparelBottomsDetails = apparelBottoms;
window.columns.apparelTopsDetails = apparelTops;
window.columns.apparelBrasDetails = apparelBras;
window.columns.apparelFootwearDetails = apparelFootwear;
window.columns.mediaDetails = mediaDetails;
window.columns.mediaBookDetails = mediaBooksDetails;
window.columns.mediaMusicDetails = mediaMusicDetails;
window.columns.mediaVideoDetails = mediaVideosDetails;
window.columns.mediaVideoGameDetails = mediaVideoGameDetails;
window.columns.generalDetails = generalDetails;
window.columns.homeGoodsDetails = homeGoodsDetails;
window.columns.homeGoodsFlatwareDetails = homeGoodsFlatwareDetails;
window.columns.homeGoodsDinnerwareDetails = homeGoodsDinnerwareDetails;
window.columns.electronicsDetails = electronicsDetails;
window.columns.electroncisVisualDetails = electronicsVisualDetails;
window.columns.electronicsVisualCellPhonesDetails = electronicsVisualCellPhonesDetails;
window.columns.sportingGoodsDetails = sportingGoodsDetails;
window.columns.sportingGoodsGolfClubsDetails = sportingGoodsGolfClubsDetails;
window.columns.toysDetails = toysDetails;
window.columns.toysBoardGamesDetails = toysBoardGamesDetails;
window.columns.jewelryDetails = jewelryDetails;
window.columns.cablesDetails = cablesDetails;
window.columns.cablesPowerDetails = cablesPowerDetails;
window.columns.cablesVideoDetails = cablesVideoDetails;
window.columns.cablesDataDetails = cablesDataDetails;
window.columns.electronicsKitchenAppliancesDetails = electronicsKitchenAppliancesDetails;

window.columns.electronicsComputerComponentsDetails = electronicsComputerComponentsDetails;
window.columns.electronicsComputerComponentsDrivesDetails = electronicsComputerComponentsDrivesDetails;
window.columns.electronicsComputerComponentsRamDetails = electronicsComputerComponentsRamDetails;
window.columns.electronicsComputerComponentsBatteryDetails = electronicsComputerComponentsBatteryDetails
