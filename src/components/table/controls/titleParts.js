"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ofConnector = exports.ofCableType = exports.ofCurrent = exports.ofBattery = exports.ofDictionary = exports.ofPiece = exports.ofTrack = exports.ofDimension = exports.unparent = exports.ofCopyright = exports.ofPrimaryColor = exports.ofFlag = exports.OBSOLETE_ofWeight = exports.ofWeight = exports.ofDate = exports.ofBarcode = exports.ofHandOrientation = exports.ofSuffix = exports.ofPrefix = exports.ofMeasure = exports.ofFirst = exports.ofIncludedItem = exports.toMeasure = exports.ofList = exports.ofIdentity = exports.ofLookup = exports.ofRating = exports.ofEnum = exports.ofRuntime = exports.ofDuration = exports.ofDistance = exports.ofCaliper = exports.ofLength = exports.ofCapacity = exports.ofAmperage = exports.ofWattage = exports.ofVoltage = exports.ofRateOfEnergy = exports.ofPowerConsumption = exports.ofDataTransfer = exports.ofMemorySpeed = exports.ofRPM = exports.ofDensity = exports.ofAngle = exports.toMetricConversion = exports.quickFold = exports.ofSku = exports.toAttribute = exports.toPart = exports.char = void 0;
exports.ofMadeOf = exports.ofMinMax = exports.ofClothingCare = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const is_1 = require("../../../common/is");
const surround_1 = require("../../../common/text/surround");
const enums_1 = __importDefault(require("../../../schema/enums"));
const flags_1 = require("../../../schema/enums/flags");
const barcodeFormatter_1 = require("../../../util/barcodeFormatter");
const truncateAuto_1 = require("../../../common/number/truncateAuto");
const colDBList_1 = require("../../../schema/defs/colDBList");
const convertFromGrams_1 = require("./convertFromGrams");
const getProperty_1 = require("../../../common/object/getProperty");
const AngleMeasure_1 = require("../../../schema/dimensions/AngleMeasure");
const _measure_1 = require("../../../schema/dimensions/$measure");
const RotationalSpeedMeasure_1 = require("../../../schema/dimensions/RotationalSpeedMeasure");
const MemorySpeedMeasure_1 = require("../../../schema/dimensions/MemorySpeedMeasure");
const DataTransferRateMeasure_1 = require("../../../schema/dimensions/DataTransferRateMeasure");
const PowerConsumptionMeasure_1 = require("../../../schema/dimensions/PowerConsumptionMeasure");
const RateOfEnergyCapacityMeasure_1 = require("../../../schema/dimensions/RateOfEnergyCapacityMeasure");
const VoltageMeasure_1 = require("../../../schema/dimensions/VoltageMeasure");
const WattageMeasure_1 = require("../../../schema/dimensions/WattageMeasure");
const AmperageMeasure_1 = require("../../../schema/dimensions/AmperageMeasure");
const CapacityMeasure_1 = require("../../../schema/dimensions/CapacityMeasure");
exports.char = {
    newLine: '\n',
    comma: ', ',
    quote: '"',
    bullet: '‣'
};
function toPart(name, func, importance) {
    return [name, func, importance];
}
exports.toPart = toPart;
function toAttribute(header, ...params) {
    return [header, toPart(...params)];
}
exports.toAttribute = toAttribute;
function ofSku(skus) {
    return skus != null && skus.length > 0 ? (0, barcodeFormatter_1.barcodeFormatter)(skus[0]) : undefined;
}
exports.ofSku = ofSku;
function quickFold(n, uom) {
    return [n, uom].join('');
}
exports.quickFold = quickFold;
function toMetricConversion({ original, originalUOM, target, targetUOM }) {
    const $first = quickFold(original, originalUOM);
    const $second = (0, surround_1.surroundParensIgnore)(quickFold(target, targetUOM));
    return [$first, $second].filter(is_1.is.not.nil).join(' ');
}
exports.toMetricConversion = toMetricConversion;
function ofAngle(value) {
    return AngleMeasure_1.AngleMeasure.stringify(value)();
}
exports.ofAngle = ofAngle;
function ofDensity(value) {
    if (value == null)
        return undefined;
    return toMetricConversion(_measure_1.$measure.convert.density(value.value));
}
exports.ofDensity = ofDensity;
function ofRPM(value) {
    return RotationalSpeedMeasure_1.RotationalSpeedMeasure.stringify(value)();
}
exports.ofRPM = ofRPM;
function ofMemorySpeed(value) {
    return MemorySpeedMeasure_1.MemorySpeedMeasure.stringify(value)();
}
exports.ofMemorySpeed = ofMemorySpeed;
function ofDataTransfer(value) {
    return DataTransferRateMeasure_1.DataTransferRateMeasure.stringify(value)();
}
exports.ofDataTransfer = ofDataTransfer;
function ofPowerConsumption(value) {
    return PowerConsumptionMeasure_1.PowerConsumptionMeasure.stringify(value)();
}
exports.ofPowerConsumption = ofPowerConsumption;
function ofRateOfEnergy(value) {
    return RateOfEnergyCapacityMeasure_1.RateOfEnergyCapacityMeasure.stringify(value)();
}
exports.ofRateOfEnergy = ofRateOfEnergy;
function ofVoltage(value) {
    return VoltageMeasure_1.VoltageMeasure.stringify(value)();
}
exports.ofVoltage = ofVoltage;
function ofWattage(value) {
    return WattageMeasure_1.WattageMeasure.stringify(value)();
}
exports.ofWattage = ofWattage;
function ofAmperage(value) {
    return AmperageMeasure_1.AmperageMeasure.stringify(value)();
}
exports.ofAmperage = ofAmperage;
function ofCapacity(value) {
    return CapacityMeasure_1.CapacityMeasure.stringify(value)();
}
exports.ofCapacity = ofCapacity;
function ofLength(value) {
    if (value == null)
        return undefined;
    const { original, originalUOM, target, targetUOM } = _measure_1.$measure.convert.length(value.value);
    return [(0, _measure_1.joinUOM)(original, originalUOM), (0, surround_1.surroundQuotesIgnore)((0, _measure_1.joinUOM)(target, targetUOM))].filter(is_1.is.not.nil).join(' ');
}
exports.ofLength = ofLength;
function ofCaliper(value) {
    if (value == null)
        return undefined;
    const { original, originalUOM, target, targetUOM } = _measure_1.$measure.convert.caliperSize(value.value);
    return [(0, _measure_1.joinUOM)(original, originalUOM), (0, surround_1.surroundQuotesIgnore)((0, _measure_1.joinUOM)(target, targetUOM))].filter(is_1.is.not.nil).join(' ');
}
exports.ofCaliper = ofCaliper;
function ofDistance(value) {
    if (value == null)
        return undefined;
    const { original, originalUOM, target, targetUOM } = _measure_1.$measure.convert.distance(value.value);
    return [(0, _measure_1.joinUOM)(original, originalUOM), (0, surround_1.surroundQuotesIgnore)((0, _measure_1.joinUOM)(target, targetUOM))].filter(is_1.is.not.nil).join(' ');
}
exports.ofDistance = ofDistance;
function ofDuration(value) {
    if (value == null)
        return undefined;
    const { uom1, uom2, value1, value2 } = _measure_1.$measure.simplify.duration(value.value);
    const first = (0, _measure_1.joinUOM)(value.value, value.uom);
    const second = (0, surround_1.surroundParensIgnore)([(0, _measure_1.joinUOM)(value1, uom1), (0, _measure_1.joinUOM)(value2, uom2)].join(''));
    return [first, second].filter(is_1.is.not.nil).join(' ');
}
exports.ofDuration = ofDuration;
function ofRuntime(value) {
    if (value == null)
        return undefined;
    const { uom1, uom2, value1, value2 } = _measure_1.$measure.simplify.runtime(value.value);
    const first = (0, _measure_1.joinUOM)(value.value, value.uom);
    const second = (0, surround_1.surroundParensIgnore)([(0, _measure_1.joinUOM)(value1, uom1), (0, _measure_1.joinUOM)(value2, uom2)].join(''));
    return [first, second].filter(is_1.is.not.nil).join(' ');
}
exports.ofRuntime = ofRuntime;
function ofEnum(key) {
    const lookup = enums_1.default[key];
    return (value) => { var _a, _b; return (value != null ? (_b = (_a = lookup.find((x) => x.key === value)) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : value : undefined); };
}
exports.ofEnum = ofEnum;
function ofRating(key) {
    return (value) => (0, surround_1.surroundSquareBracesIgnore)(ofEnum(key)(value));
}
exports.ofRating = ofRating;
function ofLookup(key) {
    return (value) => (value ? (0, getProperty_1.getProperty)(key, value) : undefined);
}
exports.ofLookup = ofLookup;
function ofIdentity(value) {
    return value ? value : undefined;
}
exports.ofIdentity = ofIdentity;
function ofList(joiner, func) {
    return (value) => (value != null && value.length > 0 ? value.map(func !== null && func !== void 0 ? func : ((x) => (x == null ? undefined : x))).filter(is_1.is.not.nil).join(joiner) : undefined);
}
exports.ofList = ofList;
function toMeasure(uom) {
    return (value) => (value ? [(0, truncateAuto_1.truncateAuto)(value), uom].join(' ') : undefined);
}
exports.toMeasure = toMeasure;
function ofIncludedItem(item) {
    return item == null ? '' : [item.qty.toFixed(0), item.name].join('x ');
}
exports.ofIncludedItem = ofIncludedItem;
function ofFirst(value) {
    if (value == null)
        return undefined;
    switch (value) {
        case 1:
            return '1st';
        case 2:
            return '2nd';
        case 3:
            return '3rd';
        case 4:
            return '4th';
        case 5:
            return '5th';
        case 6:
            return '6th';
        case 7:
            return '7th';
        case 8:
            return '8th';
        case 9:
            return '9th';
        default:
            return `${value.toString()}th`;
    }
}
exports.ofFirst = ofFirst;
function ofMeasure(uom, metricUOM, conversion, flip = false) {
    return (value) => {
        if (value == null || value === 0)
            return undefined;
        const si = toMeasure(uom)(value);
        const metric = metricUOM && conversion ? toMeasure(metricUOM)(conversion * value) : undefined;
        return flip ? [si, (0, surround_1.surroundParensIgnore)(metric)].reverse().filter(is_1.is.not.nil).join(' ') : [si, (0, surround_1.surroundParensIgnore)(metric)].filter(is_1.is.not.nil).join(' ');
    };
}
exports.ofMeasure = ofMeasure;
function ofPrefix(pre, func) {
    return (value) => (value == null ? undefined : [pre, func(value)].join(''));
}
exports.ofPrefix = ofPrefix;
function ofSuffix(suff, func) {
    return (value) => (value == null ? undefined : [func(value), suff].join(''));
}
exports.ofSuffix = ofSuffix;
function ofHandOrientation(value) {
    if (value == null)
        return undefined;
    return (0, surround_1.surroundSquareBracesIgnore)(value === 'left-handed' ? 'LH' : 'RH');
}
exports.ofHandOrientation = ofHandOrientation;
function ofBarcode(barcodeType) {
    return (value) => {
        const filtered = value.filter((x) => x.type === barcodeType);
        if (filtered.length === 0)
            return undefined;
        return filtered.map((x) => (0, barcodeFormatter_1.barcodeFormatter)(x)).join(', ');
    };
}
exports.ofBarcode = ofBarcode;
function ofDate(format) {
    return (value) => (value == null ? undefined : (0, dayjs_1.default)(value).format(format));
}
exports.ofDate = ofDate;
function ofWeight(weight) {
    if (weight == null || weight.value === 0)
        return undefined;
    const metric = (0, _measure_1.joinUOM)(weight.value, weight.uom);
    const { target } = _measure_1.$measure.convert.weight(weight.value);
    const { uom1, uom2, value1, value2 } = _measure_1.$measure.simplify.weight(target);
    const english = (0, surround_1.surroundQuotesIgnore)([(0, _measure_1.joinUOM)(value1, uom1), (0, _measure_1.joinUOM)(value2, uom2)].filter(is_1.is.not.nil).join(''));
    return [metric, english].filter(is_1.is.not.nil).join(' ');
}
exports.ofWeight = ofWeight;
/** @deprecated */
function OBSOLETE_ofWeight(grams) {
    const total = (0, convertFromGrams_1.convertFromGrams)(grams);
    if (total == null)
        return total;
    const { pounds, ounces } = total;
    const poundsOunces = [pounds === 0 ? undefined : [pounds, pounds === 1 ? 'lb' : 'lbs'].join(''), ounces === 0 ? undefined : [ounces, ounces === 1 ? 'oz' : 'ozs'].join('')].filter(is_1.is.not.nil).join(' ');
    const metric = grams == null ? undefined : [(0, truncateAuto_1.truncateAuto)(grams), 'g'].join('');
    return [poundsOunces, (0, surround_1.surroundParensIgnore)(metric)].filter(is_1.is.not.nil).join(' ');
}
exports.OBSOLETE_ofWeight = OBSOLETE_ofWeight;
function ofFlag(flag) {
    return (value) => {
        const isFlagged = (value !== null && value !== void 0 ? value : []).includes(flag);
        return isFlagged ? flags_1.allFlags[flag].text : undefined;
    };
}
exports.ofFlag = ofFlag;
function ofPrimaryColor(color) {
    var _a, _b;
    if (color == null || color.length === 0)
        return undefined;
    const primary = color[0];
    return (_b = (_a = enums_1.default.productColors.find((x) => x.key === primary)) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : primary;
}
exports.ofPrimaryColor = ofPrimaryColor;
function ofCopyright({ copyright, musicFormat, videoFormat }) {
    const $musicFormat = ofEnum('musicFormatTypes')(musicFormat);
    const $videoFormat = ofEnum('videoFormatTypes')(videoFormat);
    const $format = $musicFormat !== null && $musicFormat !== void 0 ? $musicFormat : $videoFormat;
    return (0, surround_1.surroundParensIgnore)(copyright == null && $format == null ? undefined : [copyright, $format].filter(is_1.is.not.nil).join(','));
}
exports.ofCopyright = ofCopyright;
function unparent(str) {
    if (str == null)
        return undefined;
    if (str.startsWith('('))
        return str.slice(1, str.endsWith(')') ? str.length - 2 : str.length - 1);
    return str.endsWith(')') ? str.slice(0, str.length - 1) : str;
}
exports.unparent = unparent;
function ofDimension({ height, width, length }) {
    var _a, _b, _c, _d, _e, _f;
    const [heightSI, heightMetric] = (_b = (_a = ofLength(height)) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [undefined, undefined];
    const [widthSI, widthMetric] = (_d = (_c = ofLength(width)) === null || _c === void 0 ? void 0 : _c.split(' ')) !== null && _d !== void 0 ? _d : [undefined, undefined];
    const [lengthSI, lengthMetric] = (_f = (_e = ofLength(length)) === null || _e === void 0 ? void 0 : _e.split(' ')) !== null && _f !== void 0 ? _f : [undefined, undefined];
    const key = [lengthSI != null ? 'l' : undefined, widthSI != null ? 'w' : undefined, heightSI != null ? 'h' : undefined].filter(is_1.is.not.nil).join('');
    const value = [lengthSI, widthSI, heightSI].filter(is_1.is.not.nil).join(' x ');
    const valueMetric = [unparent(lengthMetric), unparent(widthMetric), unparent(heightMetric)].filter(is_1.is.not.nil).join(' x ');
    const result = {
        label: ['Dimensions', (0, surround_1.surroundParensIgnore)(key)].join(' '),
        value: [value, (0, surround_1.surroundParensIgnore)(valueMetric)].filter(is_1.is.not.nil).join(' ')
    };
    return [length, width, height].some((x) => x != null && x.value !== 0) ? [result.label, result.value].join('\n') : undefined;
}
exports.ofDimension = ofDimension;
function ofTrack(value) {
    var _a;
    if (value == null)
        return '';
    const { index, feat, name, duration } = value;
    const time = ofDuration(duration);
    return [(_a = index === null || index === void 0 ? void 0 : index.toFixed(0)) === null || _a === void 0 ? void 0 : _a.concat(':'), name, (0, surround_1.surroundParensIgnore)(feat == null ? undefined : (feat !== null && feat !== void 0 ? feat : []).join(',')), (0, surround_1.surroundSquareBracesIgnore)(time)].filter(is_1.is.not.nil).join(' ');
}
exports.ofTrack = ofTrack;
function ofPiece(enumKey) {
    return ([key, piece]) => {
        if (piece == null)
            return undefined;
        const { count, shape } = typeof piece === 'number' ? { shape: undefined, count: piece } : piece;
        return [count.toFixed(0).concat('x'), ofEnum('shapeTypes')(shape), ofEnum(enumKey)(key)].filter(is_1.is.not.nil).join(' ');
    };
}
exports.ofPiece = ofPiece;
function ofDictionary(func, joiner = '\n') {
    return (value) => {
        if (value == null)
            return undefined;
        return Object.entries(value).map(func).join(joiner);
    };
}
exports.ofDictionary = ofDictionary;
function ofBattery({ batteryCount, batteryType }) {
    if (batteryType == null)
        return undefined;
    return [batteryCount === null || batteryCount === void 0 ? void 0 : batteryCount.toFixed(0), ofEnum('batteryTypes')(batteryType)].filter(is_1.is.not.nil).join('x ');
}
exports.ofBattery = ofBattery;
function ofCurrent(value) {
    if (value == null)
        return undefined;
    const { amperage, voltage, wattage } = value;
    const w = ofWattage(wattage);
    const v = ofVoltage(voltage);
    const a = ofAmperage(amperage);
    return [w, v, a].filter(is_1.is.not.nil).join(' ');
}
exports.ofCurrent = ofCurrent;
function ofCableType(value) {
    if (value == null)
        return undefined;
    if (value === 'data')
        return 'Data Cable';
    if (value === 'power')
        return 'AC Power Cable';
    if (value === 'video')
        return 'Video Cable';
}
exports.ofCableType = ofCableType;
function ofConnector({ connectors, cableType }) {
    if (connectors == null || connectors.length === 0)
        return undefined;
    function inner() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        if (cableType == null)
            return (value) => undefined;
        if (cableType === 'data')
            return ofEnum('dataConnectorTypes');
        if (cableType === 'power')
            return ofEnum('powerConnectorTypes');
        if (cableType === 'video')
            return ofEnum('videoConnectorTypes');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return (value) => undefined;
    }
    return connectors
        .map((conn) => {
        const { generation, innerWidth, outerWidth, type } = conn;
        const widths = innerWidth == null && outerWidth == null ? undefined : [ofCaliper(outerWidth), (0, surround_1.surroundParensIgnore)(ofCaliper(innerWidth))].filter(is_1.is.not.nil).join(' ');
        const connType = inner()(type);
        return [connType, widths, generation].some(is_1.is.not.nil) ? [connType, generation === null || generation === void 0 ? void 0 : generation.toFixed(1), widths].filter(is_1.is.not.nil).join(' ') : undefined;
    })
        .join(' to ');
}
exports.ofConnector = ofConnector;
function ofClothingCare(value) {
    if (value == null)
        return;
    const { bleaching, dryClean, drying, gentleOrDelicate, permanentPress, ironing, wash, washTemperature, tumbleDry } = value;
    if (bleaching.length === 0 && dryClean.length === 0 && drying.length === 0 && gentleOrDelicate.length === 0 && ironing.length === 0 && tumbleDry.length === 0 && wash.length === 0 && washTemperature.length === 0 && permanentPress.length === 0)
        return undefined;
    return [
        bleaching.map((0, colDBList_1.converted)('bleaching')),
        dryClean.map((0, colDBList_1.converted)('dryClean')),
        drying.map((0, colDBList_1.converted)('drying')),
        gentleOrDelicate.map((0, colDBList_1.converted)('gentleOrDelicate')),
        ironing.map((0, colDBList_1.converted)('ironing')),
        permanentPress.map((0, colDBList_1.converted)('permanentPress')),
        tumbleDry.map((0, colDBList_1.converted)('tumbleDry')),
        wash.map((0, colDBList_1.converted)('wash')),
        washTemperature.map((0, colDBList_1.converted)('washTemperature'))
    ]
        .reduce((pv, cv) => [...pv, ...cv], [])
        .join(', ');
}
exports.ofClothingCare = ofClothingCare;
function ofMinMax(value) {
    var _a;
    if (value == null)
        return undefined;
    const { min, max } = value;
    return [(0, truncateAuto_1.truncateAuto)(min), (_a = (0, truncateAuto_1.truncateAuto)(max)) !== null && _a !== void 0 ? _a : ''].join(max == null ? '+' : ' - ');
}
exports.ofMinMax = ofMinMax;
function ofMadeOf(value) {
    if (value == null)
        return undefined;
    if (value.length === 0)
        return undefined;
    return value
        .map(({ name, section }) => {
        const sectionMap = Object.entries(section).map(([fabric, percent]) => '/t'.concat([ofEnum('fabricTypes')(fabric), (0, truncateAuto_1.truncateAuto)(percent * 100).concat('%')].join(': ')));
        return [name === null || name === void 0 ? void 0 : name.toUpperCase(), ...sectionMap].join('\n');
    })
        .join('\n');
}
exports.ofMadeOf = ofMadeOf;
//# sourceMappingURL=titleParts.js.map