"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barcode = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const classifyBarcode_1 = require("../../util/classifyBarcode");
const realm_1 = require("realm");
const runTransaction_1 = require("../../util/runTransaction");
const calculateUPCCheckDigit_1 = require("../../util/calculateUPCCheckDigit");
const is_1 = require("../../common/is");
const EntityBase_1 = require("./EntityBase");
class Barcode extends EntityBase_1.EntityBase {
    get scanValue() {
        function inner(inStr) {
            return inStr.startsWith('0') ? inStr.slice(1, inStr.length) : inStr;
        }
        return inner(this.value.slice(0, this.value.length - 1));
    }
    equalTo(value) {
        const thisValue = this.scanValue;
        function inner(inStr) {
            return inStr.startsWith('0') ? inStr.slice(1, inStr.length) : inStr;
        }
        const thatValue = is_1.is.string(value) ? inner(value.padStart(13, '0').slice(0, 12)) : value.scanValue;
        // assert(thisValue.length === thatValue.length, 'compared barcode values are not the same length');
        return thisValue === thatValue;
    }
    get linkedSkus() {
        return this.linkingObjects('sku', 'skus');
    }
    get linkedBin() {
        return this.linkingObjects('bin', 'barcode');
    }
    get kind() {
        return (this.linkedSkus.length > 0 ? 'sku'
            : this.linkedBin.length > 0 ? 'bin'
                : 'unknown');
    }
    static update(obj) {
        console.info('Barcode.update');
        const func = () => {
            console.info('Barcode.update - running');
            obj.value = obj.value.padStart(13, '0');
            const [isValidated, type] = (0, classifyBarcode_1.classifyBarcode)(obj.value);
            obj.isValidated = isValidated;
            obj.type = type;
        };
        (0, runTransaction_1.runTransaction)(Barcode.localRealm, func);
        return obj;
    }
    static createFromFullUPC(value, doNotCreate = false) {
        const realm = Barcode.localRealm;
        const fullBarcode = value.padStart(13, '0');
        const result = realm.objects('barcode').filtered('value == $0', fullBarcode);
        if (result.length > 0)
            return result[0];
        const [isValidated, type] = (0, classifyBarcode_1.classifyBarcode)(fullBarcode);
        const obj = {
            _id: new realm_1.BSON.ObjectId(),
            isValidated,
            type,
            value: fullBarcode,
            beenPrinted: false
        };
        let final;
        const func = () => {
            final = realm.create('barcode', obj);
        };
        if (!doNotCreate) {
            (0, runTransaction_1.runTransaction)(realm, func);
        }
        return final !== null && final !== void 0 ? final : obj;
    }
    static createFromTruncatedUPC(value, doNotCreate = false) {
        const checkdigit = (0, calculateUPCCheckDigit_1.calculateUPCCheckDigit)(value);
        return Barcode.createFromFullUPC([...value, checkdigit].join(''), doNotCreate);
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            isValidated: false,
            type: 'unknown',
            value: '0000000000000',
            beenPrinted: false
        };
    }
}
exports.Barcode = Barcode;
Barcode.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.barcode()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        isValidated: _1.$.bool.default(false),
        type: _1.$.string.default('unknown'),
        value: _1.$.string.default('0000000000000'),
        beenPrinted: _1.$.bool.default(false)
    }
};
Barcode.labelProperty = 'value';
//# sourceMappingURL=barcode.js.map