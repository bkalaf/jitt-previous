import {
    WeightUnitsOfMeasure,
    LengthUnitsOfMeasure,
    CaliperSizeUnitsOfMeasure,
    AngleUnitsOfMeasure,
    RotationalSpeedUnitsOfMeasure,
    VoltageUnitsOfMeasure,
    WattageUnitsOfMeasure,
    AmperageUnitsOfMeasure,
    RateOfEnergyCapacityUnitsOfMeasure,
    PowerConsumptionUnitsOfMeasure,
    MemorySpeedUnitsOfMeasure,
    DataTransferRateUnitsOfMeasure,
    CapacityUnitsOfMeasure,
    MusicDurationUnitsOfMeasure,
    IMeasure,
    Opt
} from '../types';
import { parentheses } from './composeR';
import { composeR } from './composeR.1';
import { fst } from './fst';
import { identity } from './identity';
import { is } from './is';
import { lookupFraction } from './number/parseNumber';
import { truncateAuto } from './number/truncateAuto';

function div(factor: number) {
    return (x?: number) => (x == null ? undefined : x / factor);
}
function multi(factor: number) {
    return (x?: number) => (x == null ? undefined : x * factor);
}
export function ofMeasure<TUnit extends string>(otherUoms: never[] | [TUnit] | [TUnit, TUnit], conv: (x?: number) => number | undefined, simplifyFactor?: number, reverse = false) {
    return function (measure: Opt<IMeasure<TUnit>>): [toString: string | undefined, converted: number] {
        if (measure == null) return [undefined, 0];
        const { value, uom } = measure;
        console.log(`value/uom`, value, uom);
        if (value === 0) return [undefined, 0];
        const nextValue = conv(value);
        console.log(`nextValue`, nextValue);
        if (nextValue == null) return [undefined, 0];
        const integer = Math.floor(nextValue);
        const decimal = nextValue - integer;
        let $small: string = '';
        if (otherUoms.length === 0) {
            const [int, dec] = truncateAuto(value).split('.');
            return [[value !== 0 ? [int, lookupFraction(`0.${dec}`)].join(' ').concat(' ') : undefined, uom].filter(is.not.nil).join(''), nextValue];
        }
        const [uom1, uom2] = otherUoms.length === 1 ? [otherUoms[0], undefined] : otherUoms;
        if (simplifyFactor) {
            const smallerValue = decimal * simplifyFactor;
            console.log(`smallerValue`, smallerValue);
            const smallInteger = Math.floor(smallerValue);
            const smallRemainder = smallerValue - smallInteger;
            const fraction = lookupFraction(truncateAuto(smallRemainder));
            const splitRemainder = truncateAuto(smallRemainder).split('.');
            const smallFraction =
                fraction != null ? ' '.concat(fraction).concat(' ')
                : splitRemainder.length > 1 ? '.'.concat(splitRemainder[1])
                : '.0';
            $small = [integer !== 0 ? [integer, uom1].join('') : undefined, [[smallInteger, smallFraction].filter(is.not.nil).join(''), uom2].join('')].filter(is.not.nil).join(' ');
        } else {
            const fraction = lookupFraction(truncateAuto(decimal));
            const splitRemainder = truncateAuto(decimal).split('.');
            const smallFraction =
                fraction != null ? ' '.concat(fraction).concat(' ')
                : splitRemainder.length > 1 ? '.'.concat(splitRemainder[1])
                : '.0';
            $small = [[integer !== 0 ? truncateAuto(integer) : undefined, smallFraction].filter(is.not.nil).join(''), uom1].join('');
        }
        const $func = (x: string[]) => (reverse ? x.reverse() : x);
        const withUnits1 = [value !== 0 ? truncateAuto(value) : undefined, uom].filter(is.not.nil).join('');
        const withUnits2 = $small;
        const [result1, result2] = $func([withUnits1, withUnits2]);
        return [[result1, parentheses(result2)].join(' '), nextValue];
    };
}

export function fromMeasure<TUnit extends string>(extractor: (item: [string | undefined, unknown]) => string | undefined, ...args: Parameters<typeof ofMeasure>) {
    return (getter: SkuGetter<IMeasure<TUnit>>) => composeR(composeR(getter, ofMeasure(...args)), extractor);
}
const $fst = fst as (tuple: [string | undefined, unknown]) => string | undefined;
export const weightGramsToPounds = fromMeasure<WeightUnitsOfMeasure>($fst, ['lb', 'oz'], div(453.59237), 16, true);
export const densisty = fromMeasure<WeightUnitsOfMeasure>($fst, ['lb/floz'], div(15.338), undefined, false);
export const lengthInchesToCentimeters = fromMeasure<LengthUnitsOfMeasure>($fst, ['cm'], multi(2.54), undefined, false);
export const caliperMmToInch = fromMeasure<CaliperSizeUnitsOfMeasure>($fst, ['″'], div(25.4), undefined, false);
export const angleDegree = fromMeasure<AngleUnitsOfMeasure>($fst, [], identity, undefined, false);
export const rotationalRPM = fromMeasure<RotationalSpeedUnitsOfMeasure>($fst, [], identity, undefined, false);
export const voltageVolts = fromMeasure<VoltageUnitsOfMeasure>($fst, [], identity, undefined, false);
export const wattageWatts = fromMeasure<WattageUnitsOfMeasure>($fst, [], identity, undefined, false);
export const amperageAmps = fromMeasure<AmperageUnitsOfMeasure>($fst, [], identity, undefined, false);
export const rateOfEnergyCapacity = fromMeasure<RateOfEnergyCapacityUnitsOfMeasure>($fst, [], identity, undefined, false);
export const powerConsumption = fromMeasure<PowerConsumptionUnitsOfMeasure>($fst, [], identity, undefined, false);
export const memorySpeed = fromMeasure<MemorySpeedUnitsOfMeasure>($fst, [], identity, undefined, false);
export const dataTransferRate = fromMeasure<DataTransferRateUnitsOfMeasure>($fst, [], identity, undefined, false);
export const capacity = fromMeasure<CapacityUnitsOfMeasure>($fst, [], identity, undefined, false);
export const duration = fromMeasure<MusicDurationUnitsOfMeasure>($fst, ['min'], identity, 60, false);
export const runtime = fromMeasure<MusicDurationUnitsOfMeasure>($fst, ['hr'], identity, 60, false);
