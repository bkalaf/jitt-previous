"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ = void 0;
const objectMap_1 = require("../common/object/objectMap");
const appendText_1 = require("../common/text/appendText");
const obj = function (name) {
    const output = function () {
        return (0, appendText_1.appendText)('?')(name);
    };
    output.list = (0, appendText_1.appendText)('[]')(name);
    output.set = (0, appendText_1.appendText)('<>')(name);
    output.dictionary = (0, appendText_1.appendText)('{}')(name);
    return output;
};
const primitive = function (name) {
    const output = function () {
        return name;
    };
    output.opt = (0, appendText_1.appendText)('?')(name);
    output.list = (0, appendText_1.appendText)('[]')(name);
    output.set = (0, appendText_1.appendText)('<>')(name);
    output.dictionary = (0, appendText_1.appendText)('{}')(name);
    output.default = function (x) {
        return { type: name, optional: false, default: x };
    };
    return output;
};
const primitiveNames = {
    objectId: 'objectId',
    uuid: 'uuid',
    int: 'int',
    double: 'double',
    decimal128: 'decimal128',
    float: 'float',
    bool: 'bool',
    string: 'string',
    date: 'date',
    data: 'data'
};
const _primitives = (0, objectMap_1.objectMap)(primitive)(primitiveNames);
const objectNames = {
    address: 'address',
    attachment: 'attachment',
    attribute: 'attribute',
    auction: 'auction',
    auctionCost: 'auctionCost',
    barcode: 'barcode',
    bin: 'bin',
    brand: 'brand',
    capacity: 'capacity',
    classifier: 'classifier',
    clothingCare: 'clothingCare',
    customItemField: 'customItemField',
    customItemFieldValue: 'customItemFieldValue',
    customItemFieldType: 'customItemFieldType',
    customItemFieldTypes: 'customItemFieldTypes',
    draft: 'draft',
    award: 'award',
    operatingSystemInfo: 'operatingSystemInfo',
    monthYear: 'monthYear',
    facility: 'facility',
    hashTag: 'hashTag',
    hashTagUsage: 'hashTagUsage',
    includedItem: 'includedItem',
    listing: 'listing',
    madeOfSection: 'madeOfSection',
    mercariBrand: 'mercariBrand',
    mercariCategory: 'mercariCategory',
    mercariTaxonomy: 'mercariTaxonomy',
    price: 'price',
    product: 'product',
    productDetails: 'productDetails',
    productFacing: 'productFacing',
    productImage: 'productImage',
    scan: 'scan',
    selfStorage: 'selfStorage',
    shipping: 'shipping',
    sku: 'sku',
    squareFootage: 'squareFootage',
    track: 'track',
    connector: 'connector',
    currentSetting: 'currentSetting',
    minMax: 'minMax',
    piece: 'piece',
    apparelSize: 'apparelSize',
    amperageMeasure: 'amperageMeasure',
    angleMeasure: 'angleMeasure',
    caliperSizeMeasure: 'caliperSizeMeasure',
    capacityMeasure: 'capacityMeasure',
    dataTransferRateMeasure: 'dataTransferRateMeasure',
    densityMeasure: 'densityMeasure',
    distanceMeasure: 'distanceMeasure',
    lengthMeasure: 'lengthMeasure',
    memorySpeedMeasure: 'memorySpeedMeasure',
    musicDurationMeasure: 'musicDurationMeasure',
    powerConsumptionMeasure: 'powerConsumptionMeasure',
    rateOfEnergyMeasure: 'rateOfEnergyMeasure',
    rotationalSpeedMeasure: 'rotationalSpeedMeasure',
    videoRuntimeMeasure: 'videoRuntimeMeasure',
    voltageMeasure: 'voltageMeasure',
    wattageMeasure: 'wattageMeasure',
    weightMeasure: 'weightMeasure',
    nyTimesAward: 'nyTimesAward',
    oscarAward: 'oscarAward',
    grammyAward: 'grammyAward',
    tonyAward: 'tonyAward',
    emmyAward: 'emmyAward',
    pulitzerAward: 'pulitzerAward',
    hugoAward: 'hugoAward'
};
const _objects = (0, objectMap_1.objectMap)(obj)(objectNames);
exports.$ = Object.assign(Object.assign(Object.assign({}, _objects), _primitives), { mixed: () => 'mixed' });
//# sourceMappingURL=$.js.map