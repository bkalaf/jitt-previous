"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const address_1 = require("./entity/address");
const attribute_1 = require("./entity/attribute");
const auction_1 = require("./entity/auction");
const brand_1 = require("./entity/brand");
const classifier_1 = require("./entity/classifier");
const facility_1 = require("./entity/facility");
const hashTag_1 = require("./entity/hashTag");
const hashTagUsage_1 = require("./entity/hashTagUsage");
const mercariBrand_1 = require("./entity/mercariBrand");
const mercariCategory_1 = require("./entity/mercariCategory");
const mercariTaxonomy_1 = require("./entity/mercariTaxonomy");
const selfStorage_1 = require("./entity/selfStorage");
const squareFootage_1 = require("./entity/squareFootage");
const barcode_1 = require("./entity/barcode");
const bin_1 = require("./entity/bin");
const customItemField_1 = require("./entity/customItemField");
const includedItem_1 = require("./entity/includedItem");
const clothingCare_1 = require("./entity/clothingCare");
const madeOfSection_1 = require("./entity/madeOfSection");
const product_1 = require("./entity/product");
const connector_1 = require("./entity/connector");
const currentSetting_1 = require("./entity/currentSetting");
const minMax_1 = require("./entity/minMax");
const sku_1 = require("./entity/sku");
const productImage_1 = require("./entity/productImage");
const facing_1 = require("./entity/facing");
const shipping_1 = require("./entity/shipping");
const piece_1 = require("./entity/piece");
const draft_1 = require("./entity/draft");
const customItemFieldValue_1 = require("./entity/customItemFieldValue");
const customItemFieldType_1 = require("./entity/customItemFieldType");
const customItemFieldTypes_1 = require("./entity/customItemFieldTypes");
const attachment_1 = require("./entity/attachment");
const apparelSize_1 = require("./entity/apparelSize");
const track_1 = require("./entity/track");
const operatingSystemInfo_1 = require("./entity/operatingSystemInfo");
const award_1 = require("./entity/award");
const AmperageMeasure_1 = require("./dimensions/AmperageMeasure");
const AngleMeasure_1 = require("./dimensions/AngleMeasure");
const CaliperSizeMeasure_1 = require("./dimensions/CaliperSizeMeasure");
const CapacityMeasure_1 = require("./dimensions/CapacityMeasure");
const DataTransferRateMeasure_1 = require("./dimensions/DataTransferRateMeasure");
const DensityMeasure_1 = require("./dimensions/DensityMeasure");
const DistanceMeasure_1 = require("./dimensions/DistanceMeasure");
const LengthMeasure_1 = require("./dimensions/LengthMeasure");
const MemorySpeedMeasure_1 = require("./dimensions/MemorySpeedMeasure");
const MusicDurationMeasure_1 = require("./dimensions/MusicDurationMeasure");
const PowerConsumptionMeasure_1 = require("./dimensions/PowerConsumptionMeasure");
const RateOfEnergyCapacityMeasure_1 = require("./dimensions/RateOfEnergyCapacityMeasure");
const RotationalSpeedMeasure_1 = require("./dimensions/RotationalSpeedMeasure");
const VideoRuntime_1 = require("./dimensions/VideoRuntime");
const VoltageMeasure_1 = require("./dimensions/VoltageMeasure");
const WattageMeasure_1 = require("./dimensions/WattageMeasure");
const WeightMeasure_1 = require("./dimensions/WeightMeasure");
exports.schema = [
    address_1.Address,
    AmperageMeasure_1.AmperageMeasure,
    AngleMeasure_1.AngleMeasure,
    apparelSize_1.ApparelSize,
    attachment_1.Attachment,
    attribute_1.Attribute,
    auction_1.Auction,
    barcode_1.Barcode,
    bin_1.Bin,
    brand_1.Brand,
    CaliperSizeMeasure_1.CaliperSizeMeasure,
    CapacityMeasure_1.CapacityMeasure,
    classifier_1.Classifier,
    clothingCare_1.ClothingCare,
    connector_1.Connector,
    currentSetting_1.CurrentSetting,
    customItemField_1.CustomItemField,
    customItemFieldType_1.CustomItemFieldType,
    customItemFieldTypes_1.CustomItemFieldTypes,
    customItemFieldValue_1.CustomItemFieldValue,
    DataTransferRateMeasure_1.DataTransferRateMeasure,
    DensityMeasure_1.DensityMeasure,
    DistanceMeasure_1.DistanceMeasure,
    draft_1.Draft,
    facility_1.Facility,
    facing_1.Facing,
    hashTag_1.HashTag,
    hashTagUsage_1.HashTagUsage,
    includedItem_1.IncludedItem,
    LengthMeasure_1.LengthMeasure,
    madeOfSection_1.MadeOfSection,
    MemorySpeedMeasure_1.MemorySpeedMeasure,
    mercariBrand_1.MercariBrand,
    mercariCategory_1.MercariCategory,
    mercariTaxonomy_1.MercariTaxonomy,
    minMax_1.MinMax,
    MusicDurationMeasure_1.MusicDurationMeasure,
    operatingSystemInfo_1.OperatingSystemInfo,
    piece_1.Piece,
    PowerConsumptionMeasure_1.PowerConsumptionMeasure,
    product_1.Product,
    productImage_1.ProductImage,
    RateOfEnergyCapacityMeasure_1.RateOfEnergyCapacityMeasure,
    RotationalSpeedMeasure_1.RotationalSpeedMeasure,
    selfStorage_1.SelfStorage,
    shipping_1.Shipping,
    sku_1.Sku,
    squareFootage_1.SquareFootage,
    track_1.Track,
    VideoRuntime_1.VideoRuntimeMeasure,
    VoltageMeasure_1.VoltageMeasure,
    WattageMeasure_1.WattageMeasure,
    WeightMeasure_1.WeightMeasure,
    award_1.Award
    // OscarAward,
    // HugoAward,
    // PulitzerAward,
    // GrammyAward,
    // EmmyAward,
    // NYTimesAward,
    // TonyAward
];
//# sourceMappingURL=schema.js.map