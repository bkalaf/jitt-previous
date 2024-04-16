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
    selfStorage: 'selfStorage',
    facility: 'facility',
    address: 'address',
    auction: 'auction',
    auctionCost: 'auctionCost',
    mercariBrand: 'mercariBrand',
    mercariCategory: 'mercariCategory',
    mercariTaxonomy: 'mercariTaxonomy',
    classifier: 'classifier',
    brand: 'brand',
    barcode: 'barcode',
    bin: 'bin',
    includedItem: 'includedItem',
    productImage: 'productImage',
    product: 'product',
    productDetails: 'productDetails',
    sku: 'sku',
    draft: 'draft',
    madeOfSection: 'madeOfSection',
    scan: 'scan',
    price: 'price',
    listing: 'listing',
    shipping: 'shipping',
    hashTag: 'hashTag',
    hashTagUsage: 'hashTagUsage',
    squareFootage: 'squareFootage'
}

const _objects = objectMap(obj)(objectNames) as Record<keyof typeof objectNames, ReturnType<typeof obj>>;

export const $ = {
    ..._objects,
    ..._primitives,
    mixed: () => 'mixed'
}
