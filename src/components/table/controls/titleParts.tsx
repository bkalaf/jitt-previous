import dayjs from 'dayjs';
import { is } from '../../../common/is';
import { surroundParensIgnore, surroundQuotesIgnore, surroundSquareBracesIgnore } from '../../../common/text/surround';
import $me, { BarcodeTypes, CableTypes, HandOrientations, ProductColors } from '../../../schema/enums';
import { Flags, allFlags } from '../../../schema/enums/flags';
import { CaliperSizeUnitsOfMeasure, DistanceUnitsOfMeasure, IBarcode, IClothingCare, ICurrentSetting, IIncludedItem, IMadeOfSection, IMeasure, IMinMax, IPiece, IProduct, ISku, ITrack, LengthUnitsOfMeasure, MusicDurationUnitsOfMeasure, Opt, CapacityUnitsOfMeasure, AmperageUnitsOfMeasure, VoltageUnitsOfMeasure, WattageUnitsOfMeasure, PowerConsumptionUnitsOfMeasure, RateOfEnergyCapacityUnitsOfMeasure, DataTransferRateUnitsOfMeasure, MemorySpeedUnitsOfMeasure, RotationalSpeedUnitsOfMeasure, VideoRuntimeUnitsOfMeasure } from '../../../types';
import { barcodeFormatter } from '../../../util/barcodeFormatter';
import { truncateAuto } from '../../../common/number/truncateAuto';
import { converted } from '../../../schema/defs/colDBList';
import { convertFromGrams } from './convertFromGrams';
import { getProperty } from '../../../common/object/getProperty';
import { AngleMeasure } from '../../../schema/dimensions/AngleMeasure';
import { DensityMeasure } from '../../../schema/dimensions/DensityMeasure';
import { $measure, joinUOM } from '../../../schema/dimensions/$measure';
import { RotationalSpeedMeasure } from '../../../schema/dimensions/RotationalSpeedMeasure';
import { MemorySpeedMeasure } from '../../../schema/dimensions/MemorySpeedMeasure';
import { DataTransferRateMeasure } from '../../../schema/dimensions/DataTransferRateMeasure';
import { PowerConsumptionMeasure } from '../../../schema/dimensions/PowerConsumptionMeasure';
import { RateOfEnergyCapacityMeasure } from '../../../schema/dimensions/RateOfEnergyCapacityMeasure';
import { VoltageMeasure } from '../../../schema/dimensions/VoltageMeasure';
import { WattageMeasure } from '../../../schema/dimensions/WattageMeasure';
import { AmperageMeasure } from '../../../schema/dimensions/AmperageMeasure';
import { CapacityMeasure } from '../../../schema/dimensions/CapacityMeasure';
import { WeightMeasure } from '../../../schema/dimensions/WeightMeasure';

export const char = {
    newLine: '\n',
    comma: ', ',
    quote: '"',
    bullet: '‣'
};
export type TitleParts<TKey extends keyof IProduct = keyof IProduct> = [name: TKey, func: (value: IProduct[TKey]) => string | undefined, importance: number];

export function toPart<TKey extends keyof IProduct>(name: TKey, func: (value: IProduct[TKey]) => string | undefined, importance: number) {
    return [name, func, importance] as TitleParts<keyof IProduct>;
}
export function toAttribute<TKey extends keyof IProduct>(header: string, ...params: Parameters<typeof toPart<TKey>>) {
    return [header, toPart<TKey>(...params)] as [string, TitleParts<keyof IProduct>];
}
export function ofSku(skus: DBList<IBarcode>) {
    return skus != null && skus.length > 0 ? barcodeFormatter(skus[0]) : undefined;
}

export function quickFold(n: number, uom: string) {
    return [n, uom].join('');
}
export function toMetricConversion({ original, originalUOM, target, targetUOM }: { original: number, originalUOM: string, target: number, targetUOM: string }) {
    const $first = quickFold(original, originalUOM);
    const $second = surroundParensIgnore(quickFold(target, targetUOM));
    return [$first, $second].filter(is.not.nil).join(' ');
}
export function ofAngle(value?: AngleMeasure) {
    return AngleMeasure.stringify(value)();
}
export function ofDensity(value?: DensityMeasure) {
    if (value == null) return undefined;
    return toMetricConversion($measure.convert.density(value.value))
}
export function ofRPM(value?: IMeasure<RotationalSpeedUnitsOfMeasure>) {
    return RotationalSpeedMeasure.stringify(value)();
}
export function ofMemorySpeed(value?: IMeasure<MemorySpeedUnitsOfMeasure>) {
    return MemorySpeedMeasure.stringify(value)();
}
export function ofDataTransfer(value?: IMeasure<DataTransferRateUnitsOfMeasure>) {
    return DataTransferRateMeasure.stringify(value)();
}
export function ofPowerConsumption(value?: IMeasure<PowerConsumptionUnitsOfMeasure>) {
    return PowerConsumptionMeasure.stringify(value)();
}
export function ofRateOfEnergy(value?: IMeasure<RateOfEnergyCapacityUnitsOfMeasure>) {
    return RateOfEnergyCapacityMeasure.stringify(value)()
}
export function ofVoltage(value?: IMeasure<VoltageUnitsOfMeasure>) {
    return VoltageMeasure.stringify(value)();
}
export function ofWattage(value?: IMeasure<WattageUnitsOfMeasure>) {
    return WattageMeasure.stringify(value)();
}
export function ofAmperage(value?: IMeasure<AmperageUnitsOfMeasure>) {
    return AmperageMeasure.stringify(value)();
}
export function ofCapacity(value?: IMeasure<CapacityUnitsOfMeasure>) {
    return CapacityMeasure.stringify(value)();
}
export function ofLength(value?: IMeasure<LengthUnitsOfMeasure>) {
    if (value == null) return undefined;
    const { original, originalUOM, target, targetUOM } = $measure.convert.length(value.value)
    return [joinUOM(original, originalUOM), surroundQuotesIgnore(joinUOM(target, targetUOM))].filter(is.not.nil).join(' ');
}
export function ofCaliper(value?: IMeasure<CaliperSizeUnitsOfMeasure>) {
    if (value == null) return undefined;
    const { original, originalUOM, target, targetUOM } = $measure.convert.caliperSize(value.value);
    return [joinUOM(original, originalUOM), surroundQuotesIgnore(joinUOM(target, targetUOM))].filter(is.not.nil).join(' ');
}
export function ofDistance(value?: IMeasure<DistanceUnitsOfMeasure>) {
    if (value == null) return undefined;
    const { original, originalUOM, target, targetUOM } = $measure.convert.distance(value.value);
    return [joinUOM(original, originalUOM), surroundQuotesIgnore(joinUOM(target, targetUOM))].filter(is.not.nil).join(' ');
}
export function ofDuration(value?: IMeasure<MusicDurationUnitsOfMeasure>) {
    if (value == null) return undefined;
    const { uom1, uom2, value1, value2 } = $measure.simplify.duration(value.value);
    const first = joinUOM(value.value, value.uom);
    const second = surroundParensIgnore([joinUOM(value1, uom1), joinUOM(value2, uom2)].join(''));
    return [first, second].filter(is.not.nil).join(' ');
}
export function ofRuntime(value?: IMeasure<VideoRuntimeUnitsOfMeasure>) {
    if (value == null) return undefined;
    const { uom1, uom2, value1, value2 } = $measure.simplify.runtime(value.value);
    const first = joinUOM(value.value, value.uom);
    const second = surroundParensIgnore([joinUOM(value1, uom1), joinUOM(value2, uom2)].join(''));
    return [first, second].filter(is.not.nil).join(' ');
}
export function ofEnum<T extends string>(key: keyof typeof $me) {
    const lookup = $me[key];
    return (value: Opt<T>) => (value != null ? lookup.find((x) => x.key === value)?.text ?? (value as string) : undefined);
}
export function ofRating<T extends string>(key: keyof typeof $me) {
    return (value: Opt<T>) => surroundSquareBracesIgnore(ofEnum(key)(value));
}
export function ofLookup<T extends Record<string, unknown>>(key: keyof T) {
    return (value: Opt<T>) => (value ? (getProperty(key as any, value) as string) : undefined);
}
export function ofIdentity(value: Opt<string>) {
    return value ? value : undefined;
}
export function ofList<T>(joiner: string, func?: (x: Opt<T>) => string | undefined) {
    return (value: DBList<T>) => (value != null && value.length > 0 ? (value.map(func ?? (((x: Opt<string>) => (x == null ? undefined : (x as string))) as any)) as string[]).filter(is.not.nil).join(joiner) : undefined);
}
export function toMeasure(uom: string) {
    return (value: Opt<number>) => (value ? [truncateAuto(value), uom].join(' ') : undefined);
}
export function ofIncludedItem(item: Opt<IIncludedItem>) {
    return item == null ? '' : [item.qty.toFixed(0), item.name].join('x ');
}
export function ofFirst(value: Opt<number>) {
    if (value == null) return undefined;
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
export function ofMeasure(uom: string, metricUOM?: string, conversion?: number, flip = false) {
    return (value: Opt<number>) => {
        if (value == null || value === 0) return undefined;
        const si = toMeasure(uom)(value);
        const metric = metricUOM && conversion ? toMeasure(metricUOM)(conversion * value) : undefined;
        return flip ? [si, surroundParensIgnore(metric)].reverse().filter(is.not.nil).join(' ') : [si, surroundParensIgnore(metric)].filter(is.not.nil).join(' ');
    };
}
export function ofPrefix(pre: string, func: (value: Opt<string>) => string | undefined) {
    return (value: Opt<string>) => (value == null ? undefined : [pre, func(value)].join(''));
}
export function ofSuffix(suff: string, func: (value: Opt<any>) => string | undefined) {
    return (value: Opt<number>) => (value == null ? undefined : [func(value), suff].join(''));
}
export function ofHandOrientation(value?: Opt<HandOrientations>) {
    if (value == null) return undefined;
    return surroundSquareBracesIgnore(value === 'left-handed' ? 'LH' : 'RH');
}
export function ofBarcode(barcodeType: BarcodeTypes) {
    return (value: DBList<IBarcode>) => {
        const filtered = value.filter((x) => x.type === barcodeType);
        if (filtered.length === 0) return undefined;
        return filtered.map((x) => barcodeFormatter(x)).join(', ');
    };
}
export function ofDate(format: string) {
    return (value: Opt<Date>) => (value == null ? undefined : dayjs(value).format(format));
}
export function ofWeight(weight?: Opt<WeightMeasure>) {
    if (weight == null || weight.value === 0) return undefined;
    const metric = joinUOM(weight.value, weight.uom);
    const { target } = $measure.convert.weight(weight.value);
    const { uom1, uom2, value1, value2 } = $measure.simplify.weight(target);
    const english = surroundQuotesIgnore([joinUOM(value1, uom1), joinUOM(value2, uom2)].filter(is.not.nil).join(''));
    return [metric, english].filter(is.not.nil).join(' ');
}
/** @deprecated */
export function OBSOLETE_ofWeight(grams?: Opt<number>) {
    const total = convertFromGrams(grams);
    if (total == null) return total;
    const { pounds, ounces } = total;
    const poundsOunces = [pounds === 0 ? undefined : [pounds, pounds === 1 ? 'lb' : 'lbs'].join(''), ounces === 0 ? undefined : [ounces, ounces === 1 ? 'oz' : 'ozs'].join('')].filter(is.not.nil).join(' ');
    const metric = grams == null ? undefined : [truncateAuto(grams), 'g'].join('');
    return [poundsOunces, surroundParensIgnore(metric)].filter(is.not.nil).join(' ');
}
export function ofFlag(flag: Flags) {
    return (value: IProduct['flags']) => {
        const isFlagged = (value ?? []).includes(flag);
        return isFlagged ? allFlags[flag].text : undefined;
    };
}
export function ofPrimaryColor(color: DBList<ProductColors>) {
    if (color == null || color.length === 0) return undefined;
    const primary = color[0];
    return $me.productColors.find((x) => x.key === primary)?.text ?? primary;
}
// export function ofCopyright({ copyright, musicFormat, videoFormat }: IProduct) {
//     const $musicFormat = ofEnum('musicFormatTypes')(musicFormat);
//     const $videoFormat = ofEnum('videoFormatTypes')(videoFormat);
//     const $format = $musicFormat ?? $videoFormat;
//     return surroundParensIgnore(copyright == null && $format == null ? undefined : [copyright, $format].filter(is.not.nil).join(','));
// }
export function unparent(str?: string) {
    if (str == null) return undefined;
    if (str.startsWith('(')) return str.slice(1, str.endsWith(')') ? str.length - 2 : str.length - 1);
    return str.endsWith(')') ? str.slice(0, str.length - 1) : str;
}
export function ofDimension({ height, width, length }: IProduct) {
    const [heightSI, heightMetric] = ofLength(height)?.split(' ') ?? [undefined, undefined];
    const [widthSI, widthMetric] = ofLength(width)?.split(' ') ?? [undefined, undefined];
    const [lengthSI, lengthMetric] = ofLength(length)?.split(' ') ?? [undefined, undefined];

    const key = [lengthSI != null ? 'l' : undefined, widthSI != null ? 'w' : undefined, heightSI != null ? 'h' : undefined].filter(is.not.nil).join('');
    const value = [lengthSI, widthSI, heightSI].filter(is.not.nil).join(' x ');
    const valueMetric = [unparent(lengthMetric), unparent(widthMetric), unparent(heightMetric)].filter(is.not.nil).join(' x ');
    const result = {
        label: ['Dimensions', surroundParensIgnore(key)].join(' '),
        value: [value, surroundParensIgnore(valueMetric)].filter(is.not.nil).join(' ')
    };
    return [length, width, height].some((x) => x != null && x.value !== 0) ? [result.label, result.value].join('\n') : undefined;
}

export function ofTrack(value?: ITrack) {
    if (value == null) return '';
    const { index, feat, name, duration } = value;
    const time = ofDuration(duration);
    return [index?.toFixed(0)?.concat(':'), name, surroundParensIgnore(feat == null ? undefined : (feat ?? []).join(',')), surroundSquareBracesIgnore(time)].filter(is.not.nil).join(' ');
}
export function ofPiece(enumKey: keyof typeof $me) {
    return ([key, piece]: [string, Opt<IPiece | number>]) => {
        if (piece == null) return undefined;
        const { count, shape } = typeof piece === 'number' ? { shape: undefined, count: piece } : piece;
        return [count.toFixed(0).concat('x'), ofEnum('shapeTypes')(shape), ofEnum(enumKey)(key)].filter(is.not.nil).join(' ');
    };
}

export function ofDictionary<T>(func: (tuple: [string, T]) => string | undefined, joiner = '\n') {
    return (value: Opt<DBDictionary<T>>) => {
        if (value == null) return undefined;
        return Object.entries(value).map(func).join(joiner);
    };
}
export function ofBattery({ batteryCount, batteryType }: IProduct) {
    if (batteryType == null) return undefined;
    return [batteryCount?.toFixed(0), ofEnum('batteryTypes')(batteryType)].filter(is.not.nil).join('x ');
}
export function ofCurrent(value: ICurrentSetting) {
    if (value == null) return undefined;
    const { amperage, voltage, wattage } = value;
    const w = ofWattage(wattage);
    const v = ofVoltage(voltage);
    const a = ofAmperage(amperage);
    return [w, v, a].filter(is.not.nil).join(' ');
}
export function ofCableType(value: Opt<CableTypes>) {
    if (value == null) return undefined;
    if (value === 'data') return 'Data Cable';
    if (value === 'power') return 'AC Power Cable';
    if (value === 'video') return 'Video Cable';
}
export function ofConnector({ connectors, cableType }: IProduct) {
    if (connectors == null || connectors.length === 0) return undefined;
    function inner() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        if (cableType == null) return (value: Opt<string>) => undefined;
        if (cableType === 'data') return ofEnum('dataConnectorTypes');
        if (cableType === 'power') return ofEnum('powerConnectorTypes');
        if (cableType === 'video') return ofEnum('videoConnectorTypes');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return (value: Opt<string>) => undefined;
    }
    return connectors
        .map((conn) => {
            const { generation, innerWidth, outerWidth, type } = conn;
            const widths = innerWidth == null && outerWidth == null ? undefined : [ofCaliper(outerWidth), surroundParensIgnore(ofCaliper(innerWidth))].filter(is.not.nil).join(' ');
            const connType = inner()(type);
            return [connType, widths, generation].some(is.not.nil) ? [connType, generation?.toFixed(1), widths].filter(is.not.nil).join(' ') : undefined;
        })
        .join(' to ');
}
export function ofClothingCare(value?: IClothingCare) {
    if (value == null) return;
    const { bleaching, dryClean, drying, gentleOrDelicate, permanentPress, ironing, wash, washTemperature, tumbleDry } = value;
    if (bleaching.length === 0 && dryClean.length === 0 && drying.length === 0 && gentleOrDelicate.length === 0 && ironing.length === 0 && tumbleDry.length === 0 && wash.length === 0 && washTemperature.length === 0 && permanentPress.length === 0)
        return undefined;
    return [
        bleaching.map(converted('bleaching')),
        dryClean.map(converted('dryClean')),
        drying.map(converted('drying')),
        gentleOrDelicate.map(converted('gentleOrDelicate')),
        ironing.map(converted('ironing')),
        permanentPress.map(converted('permanentPress')),
        tumbleDry.map(converted('tumbleDry')),
        wash.map(converted('wash')),
        washTemperature.map(converted('washTemperature'))
    ]
        .reduce((pv, cv) => [...pv, ...cv], [])
        .join(', ');
}
export function ofMinMax(value?: IMinMax<number>) {
    if (value == null) return undefined;
    const { min, max } = value;
    return [truncateAuto(min), truncateAuto(max) ?? ''].join(max == null ? '+' : ' - ');
}
export function ofMadeOf(value?: DBList<IMadeOfSection>) {
    if (value == null) return undefined;
    if (value.length === 0) return undefined;
    return value
        .map(({ name, section }) => {
            const sectionMap = Object.entries(section).map(([fabric, percent]) => '/t'.concat([ofEnum('fabricTypes')(fabric), truncateAuto(percent * 100).concat('%')].join(': ')));
            return [name?.toUpperCase(), ...sectionMap].join('\n');
        })
        .join('\n');
}
// export const titleParts: TitleParts[] = [
//     toPart('flags', ofFlag('isRare')),
//     toPart('musicFormat', ofEnum('musicFormatTypes')),
//     toPart('videoFormat', ofEnum('videoFormatTypes')),
//     toPart('musicGenre', ofEnum('musicGenres')),
//     toPart('brand', ofLookup('name'), 1),
//     toPart('gender', ofEnum('genders'), 5),
//     toPart('primaryColor', ofEnum('productColors'), 7),
//     toPart('closureType', ofEnum('closureTypes'), 30),
//     toPart('fitType', ofEnum('fitTypes'), 35),
//     toPart('collarType', ofEnum('collarTypes'), 20),
//     toPart('sleeveLength', ofEnum('sleeveLengths'), 15),
//     toPart('legStyle', ofEnum('pocket'), 25),
//     toPart('lengthType', ofEnum('garmentLengths'), 20),
//     toPart('itemType', ofIdentity, 10),
//     toPart('text', (value: Opt<string>) => surroundQuotesIgnore(value), 20),
//     toPart('size', (value: Opt<number>) => surroundParensIgnore(value ? sizes[value.toString() as keyof typeof sizes].size : undefined), 15)
// ];

// export const narrativeParts = {
//     attributes: [toAttribute('Brand', 'brand', (value: Opt<IBrand>) => value?.name, 1), toAttribute('Closure Type', 'closureType', ofEnum('closureTypes'), 30), toAttribute('Fit Type', 'fitType', ofEnum('fitTypes'), 35), toAttribute()]
// };

export type IBuilderProperty<T> = {
    key: string;
    extractor: (x: ISku) => T;
    titleIndex?: number;
    titleFunc?: (x: T) => string | undefined;
    narrativeFunc?: (x: T) => string | undefined;
    section: 'attributes' | 'lists' | 'flags' | 'none' | 'specificiations' | 'measurements' | 'text';
    importance: number;
    header?: string;
};
