"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const distinct_1 = require("../../common/array/distinct");
const sizes_1 = require("../enums/sizes");
const productColors_1 = require("../enums/productColors");
const EntityBase_1 = require("./EntityBase");
const DensityMeasure_1 = require("../dimensions/DensityMeasure");
class Product extends EntityBase_1.EntityBase {
    get density() {
        if (this.massInAir == null || this.massInAir.value === 0 || this.massWaterDisplaced == null || this.massWaterDisplaced.value === 0)
            return undefined;
        return Object.assign(Object.assign({}, DensityMeasure_1.DensityDimension.init()), { value: this.massInAir.value / this.massWaterDisplaced.value });
    }
    get sizeText() {
        var _a;
        return (_a = (0, sizes_1.sizeLookup)(this.size)) === null || _a === void 0 ? void 0 : _a.text;
    }
    get sizeSelector() {
        var _a;
        return (_a = (0, sizes_1.sizeLookup)(this.size)) === null || _a === void 0 ? void 0 : _a.selector;
    }
    get primaryColor() {
        var _a;
        const color = this.color != null && ((_a = this.color.length) !== null && _a !== void 0 ? _a : 0 > 0) ? this.color[0] : undefined;
        return color;
    }
    get primaryColorSelector() {
        var _a;
        const color = this.color != null && ((_a = this.color.length) !== null && _a !== void 0 ? _a : 0 > 0) ? this.color[0] : undefined;
        return color != null ? productColors_1.productColors[color].selector : undefined;
    }
    get allHashTags() {
        var _a, _b, _c, _d;
        return (0, distinct_1.distinctByOID)([...((_b = (_a = this.brand) === null || _a === void 0 ? void 0 : _a.allHashTags) !== null && _b !== void 0 ? _b : []), ...((_d = (_c = this === null || this === void 0 ? void 0 : this.classifier) === null || _c === void 0 ? void 0 : _c.allHashTags) !== null && _d !== void 0 ? _d : [])]);
    }
    get detailTypes() {
        var _a, _b, _c;
        return (0, distinct_1.distinctByString)(['general', ...Array.from((_a = this.type) !== null && _a !== void 0 ? _a : []), ...Array.from((_c = (_b = this.classifier) === null || _b === void 0 ? void 0 : _b.detailTypes) !== null && _c !== void 0 ? _c : [])]);
    }
    static update(item) {
        return item;
    }
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            includes: [],
            overrideTitle: false,
            partNumbers: [],
            madeOf: [],
            asins: [],
            customAttributes: [],
            features: [],
            hashTags: [],
            flags: [],
            upcs: [],
            color: [],
            awards: [],
            authors: [],
            illustrators: [],
            publishers: [],
            collectionOf: [],
            directedBy: [],
            starring: [],
            tracks: [],
            connectors: [],
            compatibleWith: [],
            type: [],
            compatibleDevices: [],
            connectivity: []
        };
    }
}
exports.Product = Product;
Product.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.product()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        asins: _1.$.string.list,
        brand: 'brand?',
        classifier: 'classifier?',
        includes: _1.$.includedItem.list,
        customAttributes: _1.$.customItemField.list,
        features: _1.$.string.list,
        hashTags: _1.$.hashTag.list,
        flags: _1.$.string.list,
        weight: _1.$.double.opt,
        length: _1.$.double.opt,
        width: _1.$.double.opt,
        height: _1.$.double.opt,
        modelNo: _1.$.string.opt,
        notes: _1.$.string.opt,
        title: _1.$.string.opt,
        upcs: _1.$.barcode.list,
        circa: _1.$.string.opt,
        color: _1.$.string.list,
        description: _1.$.string.opt,
        itemType: _1.$.string.opt,
        madeOf: _1.$.madeOfSection.list,
        gender: _1.$.string.opt,
        styleNo: _1.$.string.opt,
        cutNo: _1.$.string.opt,
        text: _1.$.string.opt,
        rnNo: _1.$.int.opt,
        clothingCare: _1.$.clothingCare(),
        closureType: _1.$.string.opt,
        inseamSize: _1.$.double.opt,
        fitType: _1.$.string.opt,
        legStyle: _1.$.string.opt,
        lengthSize: _1.$.double.opt,
        lengthType: _1.$.string.opt,
        lifestyleType: _1.$.string.opt,
        pocketType: _1.$.string.opt,
        riseType: _1.$.string.opt,
        size: _1.$.int.opt,
        waistSize: _1.$.double.opt,
        bootType: _1.$.string.opt,
        footSize: _1.$.double.opt,
        heelHeight: _1.$.double.opt,
        heightMapType: _1.$.string.opt,
        shoeHeelType: _1.$.string.opt,
        shoeWidth: _1.$.string.opt,
        strapType: _1.$.string.opt,
        toeStyle: _1.$.string.opt,
        bustSize: _1.$.double.opt,
        swimsuitBottomStyle: _1.$.string.opt,
        swimsuitTopStyle: _1.$.string.opt,
        backlineType: _1.$.string.opt,
        chestSize: _1.$.double.opt,
        collarType: _1.$.string.opt,
        cuffType: _1.$.string.opt,
        dressType: _1.$.string.opt,
        neckSize: _1.$.double.opt,
        neckType: _1.$.string.opt,
        sleeveSize: _1.$.double.opt,
        sleeveType: _1.$.string.opt,
        suitType: _1.$.string.opt,
        sleeveLength: _1.$.string.opt,
        awards: _1.$.string.list,
        copyright: _1.$.string.opt,
        mediaSubtitle: _1.$.string.opt,
        mediaTitle: _1.$.string.opt,
        authors: _1.$.string.list,
        blurb: _1.$.string.opt,
        bookGenre: _1.$.string.opt,
        bookType: _1.$.string.opt,
        edition: _1.$.int.opt,
        illustrators: _1.$.string.list,
        language: _1.$.string.opt,
        pages: _1.$.int.opt,
        publishers: _1.$.string.list,
        collectionOf: _1.$.string.list,
        count: _1.$.int.opt,
        directedBy: _1.$.string.list,
        videoFormat: _1.$.string.opt,
        movieRating: _1.$.string.opt,
        videoGenre: _1.$.string.opt,
        runtime: _1.$.int.opt,
        starring: _1.$.string.list,
        tvRating: _1.$.string.opt,
        videoType: _1.$.string.opt,
        ESRBRating: _1.$.string.opt,
        consoleType: _1.$.string.opt,
        studio: _1.$.string.opt,
        artist: _1.$.string.opt,
        musicFormat: _1.$.string.opt,
        musicGenre: _1.$.string.opt,
        tracks: _1.$.track.list,
        cordLength: _1.$.double.opt,
        connectors: _1.$.connector.list,
        compatibleWith: _1.$.string.list,
        input: _1.$.currentSetting(),
        output: _1.$.currentSetting(),
        batteryCount: _1.$.int.opt,
        batteryType: _1.$.string.opt,
        batteryCapacity: _1.$.dimension(),
        powerType: _1.$.string.opt,
        testedOn: _1.$.date.opt,
        aspectRatio: _1.$.string.opt,
        capacity: _1.$.int.opt,
        cellCarrier: _1.$.string.opt,
        os: _1.$.string.opt,
        osVersion: _1.$.string.opt,
        screenSize: _1.$.double.opt,
        massInAir: _1.$.double.opt,
        massWaterDisplaced: _1.$.double.opt,
        metal: _1.$.string.opt,
        dinnerwareInventory: _1.$.piece.dictionary,
        flatwareInventory: _1.$.int.dictionary,
        pattern: _1.$.string.opt,
        applianceType: _1.$.string.opt,
        clubType: _1.$.string.opt,
        flexType: _1.$.string.opt,
        handOrientation: _1.$.string.opt,
        ironType: _1.$.string.opt,
        clubLength: _1.$.double.opt,
        lie: _1.$.double.opt,
        loft: _1.$.double.opt,
        shaftType: _1.$.string.opt,
        swingWeight: _1.$.string.opt,
        wedgeType: _1.$.string.opt,
        ages: _1.$.minMax(),
        players: _1.$.minMax(),
        pieceCount: _1.$.int.opt,
        material: _1.$.string.opt,
        cableType: _1.$.string.opt,
        modelName: _1.$.string.opt,
        overrideTitle: _1.$.bool.default(false),
        partNumbers: _1.$.string.list,
        driveType: _1.$.string.opt,
        driveForm: _1.$.string.opt,
        connectivity: _1.$.string.list,
        driveInterface: _1.$.string.opt,
        driveSize: _1.$.dimension(),
        writeSpeed: _1.$.double.opt,
        readSpeed: _1.$.double.opt,
        dataTransferRate: _1.$.double.opt,
        rpm: _1.$.int.opt,
        memoryType: _1.$.string.opt,
        memoryForm: _1.$.string.opt,
        compatibleDevices: _1.$.string.list,
        memorySize: _1.$.dimension(),
        memorySpeed: _1.$.int.opt,
        CASLatency: _1.$.string.opt,
        cacheSize: _1.$.dimension(),
        dataTransferBandwidth: _1.$.string.opt,
        pinCount: _1.$.int.opt,
        voltage: _1.$.double.opt,
        manufactureDate: _1.$.date.opt,
        rateOfEnergyCapacity: _1.$.dimension(),
        origin: _1.$.string.opt,
        acAdapter: _1.$.currentSetting(),
        batteryStats: _1.$.currentSetting(),
        type: _1.$.string.list,
        season: _1.$.int.opt
    }
};
Product.labelProperty = 'title';
//# sourceMappingURL=product.js.map