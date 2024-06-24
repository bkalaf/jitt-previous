import { PropertyTypeName } from 'realm';
import { objectMap } from '../common/object';
import { appendText } from '../common/text';

const obj = function(name: string) {
    const output = function() {
        return appendText('?')(name);;
    }
    output.list = appendText('[]')(name);
    output.set = appendText('<>')(name);
    output.dictionary = appendText('{}')(name);
    return output;
}
const primitive = function(name: string) {
    const output = function() {
        return name;
    }
    output.opt = appendText('?')(name);
    output.list = appendText('[]')(name);
    output.set = appendText('<>')(name);
    output.dictionary = appendText('{}')(name);
    output.default = function(x?: any) {
        return { type: name as PropertyTypeName, optional: false, default: x }
    }
    return output;
}

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
}

const _primitives = objectMap(primitive)(primitiveNames) as Record<keyof typeof primitiveNames, ReturnType<typeof primitive>>;;

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
    dimension: 'dimension',
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
    apparelSize: 'apparelSize'
}

const _objects = objectMap(obj)(objectNames) as Record<keyof typeof objectNames, ReturnType<typeof obj>>;

export const $ = {
    ..._objects,
    ..._primitives,
    mixed: () => 'mixed'
}
