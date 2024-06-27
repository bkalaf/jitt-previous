"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bin = void 0;
const realm_1 = require("realm");
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const barcode_1 = require("./barcode");
const runTransaction_1 = require("../../util/runTransaction");
const EntityBase_1 = require("./EntityBase");
const getInitFor_1 = require("./getInitFor");
class Bin extends EntityBase_1.EntityBase {
    static update(bin) {
        const func = () => {
            if (Bin.barcodeGenerator == null) {
                throw new Error('barcode generator null on Bin');
            }
            if (bin.barcode == null) {
                console.info('adding barcode to bin');
                bin.addBarcode(Bin.barcodeGenerator);
            }
        };
        (0, runTransaction_1.runTransaction)(Bin.localRealm, func);
        return bin;
    }
    addBarcode(generator) {
        const bc = barcode_1.Barcode.createFromFullUPC(generator());
        const func = () => {
            this.barcode = bc;
        };
        (0, runTransaction_1.runTransaction)(barcode_1.Barcode.localRealm, func);
        return this;
    }
    static init() {
        const barcode = (0, getInitFor_1.getInitFor)(Bin, 'barcode');
        return {
            _id: new realm_1.BSON.ObjectId(),
            name: '',
            barcode: barcode()
        };
    }
}
exports.Bin = Bin;
Bin.labelProperty = 'name';
Bin.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.bin()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        barcode: _1.$.barcode(),
        name: _1.$.string(),
        notes: _1.$.string.opt
    }
};
//# sourceMappingURL=bin.js.map