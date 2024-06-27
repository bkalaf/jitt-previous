"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_react_table_1 = require("material-react-table");
const address_1 = require("./columns/address");
const attribute_1 = require("./columns/attribute");
const auction_1 = require("./columns/auction");
const col_1 = require("./defs/col");
const barcode_1 = require("./columns/barcode");
const includedItem_1 = require("./columns/includedItem");
const productColumns_1 = require("./entity/productColumns");
const sku_1 = require("./columns/sku");
const facing_1 = require("./columns/facing");
const facility_1 = require("./columns/facility");
const bin_1 = require("./columns/bin");
const brand_1 = require("./columns/brand");
const classifier_1 = require("./columns/classifier");
const clothingCare_1 = require("./columns/clothingCare");
const connector_1 = require("./columns/connector");
const currentSetting_1 = require("./columns/currentSetting");
const customItemField_1 = require("./columns/customItemField");
const shipping_1 = require("./columns/shipping");
const hashTag_1 = require("./columns/hashTag");
const hashTagUsage_1 = require("./columns/hashTagUsage");
const madeOfSection_1 = require("./columns/madeOfSection");
const mercariBrand_1 = require("./columns/mercariBrand");
const mercariCategory_1 = require("./columns/mercariCategory");
const mercariTaxonomy_1 = require("./columns/mercariTaxonomy");
const minMax_1 = require("./columns/minMax");
const selfStorage_1 = require("./columns/selfStorage");
const productImage_1 = require("./columns/productImage");
const squareFootage_1 = require("./columns/squareFootage");
const track_1 = require("./columns/track");
const apparelDetails_1 = require("./entity/details/apparelDetails");
const mediaDetails_1 = require("./entity/details/mediaDetails");
const cablesDetails_1 = require("./entity/details/cablesDetails");
const cellPhoneDetails_1 = require("./entity/details/cellPhoneDetails");
const electronicsDetails_1 = require("./entity/details/electronicsDetails");
const generalDetails_1 = require("./entity/details/generalDetails");
const homeGoodsDetails_1 = require("./entity/details/homeGoodsDetails");
const jewelryDetails_1 = require("./entity/details/jewelryDetails");
const kitchenAppliancesDetails_1 = require("./entity/details/kitchenAppliancesDetails");
const sportingGoodsDetails_1 = require("./entity/details/sportingGoodsDetails");
const toysDetails_1 = require("./entity/details/toysDetails");
const piece_1 = require("./columns/piece");
const draft_1 = require("./columns/draft");
const computerComponentsDetails_1 = require("./entity/details/computerComponentsDetails");
const _dimension_1 = require("./columns/_dimension");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
const stringColumn = helper.string()('value', 'Value', undefined, { required: true });
const intColumn = helper.int()('value', 'Value', { required: true });
const doubleColumn = helper.double()('value', 'Value', { required: true });
const boolColumn = helper.bool()('value', 'Value');
const dateColumn = helper.date()('value', 'Value', {}, true);
// (Realm.ObjectSchema | Realm.ObjectClass<any>)
if (window.columns == null)
    window.columns = {};
window.columns.string = [stringColumn];
window.columns.int = [intColumn];
window.columns.double = [doubleColumn];
window.columns.date = [dateColumn];
window.columns.bool = [boolColumn];
// window.columns. = [Column] as MRT_ColumnDef<any>[];
window.columns.address = address_1.addressColumns;
// as <T extends MRT_RowData>(...dependencies: IDependency<IAddress, any>[]) => MRT_ColumnDef<T>[];
window.columns.attribute = attribute_1.attributeColumns;
window.columns.auction = auction_1.auctionColumns;
window.columns.barcode = barcode_1.barcodeColumns;
window.columns.bin = bin_1.binColumns;
window.columns.brand = brand_1.brandColumns;
window.columns.classifier = classifier_1.classifierColumns;
window.columns.clothingCare = clothingCare_1.clothingCareColumns;
window.columns.connector = connector_1.connectorColumns;
window.columns.currentSetting = currentSetting_1.currentSettingColumns;
window.columns.customItemField = customItemField_1.customItemFieldColumns;
window.columns.facility = facility_1.facilityColumns;
window.columns.hashTag = hashTag_1.hashTagColumns;
window.columns.hashTagUsage = hashTagUsage_1.hashTagUsageColumns;
window.columns.includedItem = includedItem_1.includedItemColumns;
window.columns.madeOfSection = madeOfSection_1.madeOfSectionColumns;
// as MRT_ColumnDef<any>[];
window.columns.mercariBrand = mercariBrand_1.mercariBrandColumns;
window.columns.mercariCategory = mercariCategory_1.mercariCategoryColumns;
window.columns.mercariTaxonomy = mercariTaxonomy_1.mercariTaxonomyColumns;
window.columns.minMax = minMax_1.minMaxColumns;
window.columns.product = productColumns_1.productColumns;
window.columns.productFacing = facing_1.facing;
window.columns.productImage = productImage_1.productImage;
window.columns.selfStorage = selfStorage_1.selfStorageColumns;
window.columns.shipping = shipping_1.shippingColumns;
window.columns.sku = sku_1.sku;
window.columns.squareFootage = squareFootage_1.squareFootageColumns;
window.columns.track = track_1.trackColumns;
window.columns.apparelDetails = apparelDetails_1.apparelDetails;
window.columns.apparelBottomsDetails = apparelDetails_1.apparelBottoms;
window.columns.apparelTopsDetails = apparelDetails_1.apparelTops;
window.columns.apparelBrasDetails = apparelDetails_1.apparelBras;
window.columns.apparelFootwearDetails = apparelDetails_1.apparelFootwear;
window.columns.mediaDetails = mediaDetails_1.mediaDetails;
window.columns.mediaBookDetails = mediaDetails_1.mediaBooksDetails;
window.columns.mediaMusicDetails = mediaDetails_1.mediaMusicDetails;
window.columns.mediaVideoDetails = mediaDetails_1.mediaVideosDetails;
window.columns.mediaVideoGameDetails = mediaDetails_1.mediaVideoGameDetails;
window.columns.generalDetails = generalDetails_1.generalDetails;
window.columns.homeGoodsDetails = homeGoodsDetails_1.homeGoodsDetails;
window.columns.homeGoodsFlatwareDetails = homeGoodsDetails_1.homeGoodsFlatwareDetails;
window.columns.homeGoodsDinnerwareDetails = homeGoodsDetails_1.homeGoodsDinnerwareDetails;
window.columns.electronicsDetails = electronicsDetails_1.electronicsDetails;
window.columns.cellPhonesDetails = cellPhoneDetails_1.cellPhonesDetails;
window.columns.sportingGoodsDetails = sportingGoodsDetails_1.sportingGoodsDetails;
window.columns.sportingGoodsGolfClubsDetails = sportingGoodsDetails_1.sportingGoodsGolfClubsDetails;
window.columns.toysDetails = toysDetails_1.toysDetails;
window.columns.jewelryDetails = jewelryDetails_1.jewelryDetails;
window.columns.cablesDetails = cablesDetails_1.cablesDetails;
window.columns.cablesPowerDetails = cablesDetails_1.cablesPowerDetails;
window.columns.cablesVideoDetails = cablesDetails_1.cablesVideoDetails;
window.columns.cablesDataDetails = cablesDetails_1.cablesDataDetails;
window.columns.kitchenAppliancesDetails = kitchenAppliancesDetails_1.kitchenAppliancesDetails;
window.columns.piece = piece_1.pieceColumns;
window.columns.draft = draft_1.draftColumns;
window.columns.computerComponentsDetails = computerComponentsDetails_1.computerComponentsDetails;
window.columns.computerComponentsDrivesDetails = computerComponentsDetails_1.computerComponentsDrivesDetails;
window.columns.computerComponentsRamDetails = computerComponentsDetails_1.computerComponentsRamDetails;
window.columns.dimension = _dimension_1.dimension;
//# sourceMappingURL=index.js.map