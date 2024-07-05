import { PropertyTypeName } from 'realm';
import { objectMap } from '../common/object/objectMap';
import { appendText } from '../common/text/appendText';

const obj = function (name: string) {
    const output = function () {
        return appendText('?')(name);
    };
    output.list = appendText('[]')(name);
    output.set = appendText('<>')(name);
    output.dictionary = appendText('{}')(name);
    return output;
};
const primitive = function (name: string) {
    const output = function () {
        return name;
    };
    output.opt = appendText('?')(name);
    output.list = appendText('[]')(name);
    output.set = appendText('<>')(name);
    output.dictionary = appendText('{}')(name);
    output.default = function (x?: any) {
        return { type: name as PropertyTypeName, optional: false, default: x };
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

const _primitives = objectMap(primitive)(primitiveNames) as Record<keyof typeof primitiveNames, ReturnType<typeof primitive>>;

const objectNames = {
    monthYear: 'monthYear',
    contributor: 'contributor',
    book: 'book',
    movie: 'movie',
    tvSeries: 'tvSeries',
    episode: 'episode',
    album: 'album',
    individual: 'individual',
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
    hugoAward: 'hugoAward',
    partNumber: 'partNumber',
    rn: 'rn'
};

const _objects = objectMap(obj)(objectNames) as Record<keyof typeof objectNames, ReturnType<typeof obj>>;

export const $ = {
    ..._objects,
    ..._primitives,
    mixed: () => 'mixed'
};
