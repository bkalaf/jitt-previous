import { parentheses } from './parentheses';
import { composeR } from './composeR.1';
import { fst } from './fst';
import { identity } from './identity';
import { is } from './is';
import { lookupFraction } from './number/parseNumber';
import { truncateAuto } from './number/truncateAuto';
import { EnumKey } from './EnumKey';
import { standardizeOptions } from '../schema/defs/standardizeOptions';
import $me, { ResolutionUnitOfMeasure } from '../schema/enums';

function div(factor: number) {
    return (x?: number) => (x == null ? undefined : x / factor);
}
function multi(factor: number) {
    return (x?: number) => (x == null ? undefined : x * factor);
}
export function ofMeasure<TUnit extends string>(joiner: string) {
    return function (otherUoms: never[] | [TUnit] | [TUnit, TUnit], conv: (x?: number) => number | undefined, simplifyFactor?: number, reverse = false) {
        return (enumKey: EnumKey) => {
            return function (measure: Opt<IMeasure<TUnit>>): [toString: string | undefined, converted: number] {
                const uomLookup = (x: any) => standardizeOptions($me[enumKey]).asRecord[x].text;
                if (measure == null) return [undefined, 0];
                const { value, uom } = measure;
                if (value === 0) return [undefined, 0];
                const nextValue = conv(value);
                if (nextValue == null) return [undefined, 0];
                const integer = Math.floor(nextValue);
                const decimal = nextValue - integer;
                let $small: string = '';
                if (otherUoms.length === 0) {
                    const [int, dec] = truncateAuto(value).split('.');
                    return [[value !== 0 ? [int, lookupFraction(`0.${dec}`)].join(' ').concat(' ') : undefined, uomLookup(uom)].filter(is.not.nil).join(''), nextValue];
                }
                const [uom1, uom2] = otherUoms.length === 1 ? [uomLookup(otherUoms[0]), undefined] : otherUoms.map(uomLookup);
                if (simplifyFactor) {
                    const smallerValue = decimal * simplifyFactor;
                    const smallInteger = Math.floor(smallerValue);
                    const smallRemainder = smallerValue - smallInteger;
                    const fraction = lookupFraction(truncateAuto(smallRemainder));
                    const splitRemainder = truncateAuto(smallRemainder).split('.');
                    const smallFraction =
                        fraction != null ? ' '.concat(fraction).concat(' ')
                        : splitRemainder.length > 1 ? '.'.concat(splitRemainder[1])
                        : '.0';
                    $small = [integer !== 0 ? [integer, uom1].join(joiner) : undefined, [[smallInteger, smallFraction].filter(is.not.nil).join(' '), uom2].join(joiner)].filter(is.not.nil).join(' ');
                } else {
                    const fraction = lookupFraction(truncateAuto(decimal));
                    const splitRemainder = truncateAuto(decimal).split('.');
                    const smallFraction =
                        fraction != null ? ' '.concat(fraction).concat(' ')
                        : splitRemainder.length > 1 ? '.'.concat(splitRemainder[1])
                        : '.0';
                    $small = [[integer !== 0 ? truncateAuto(integer) : undefined, smallFraction].filter(is.not.nil).join(''), uom1].join(joiner);
                }
                const $func = (x: string[]) => (reverse ? x.reverse() : x);
                const withUnits1 = [value !== 0 ? truncateAuto(value) : undefined, uom].filter(is.not.nil).join('');
                const withUnits2 = $small;
                const [result1, result2] = $func([withUnits1, withUnits2]);
                return [[result1, parentheses(result2)].join(' '), nextValue];
            };
        };
    };
}

export function fromMeasure<TUnit extends string>(extractor: (item: [string | undefined, unknown]) => string | undefined, ...args: Parameters<ReturnType<typeof ofMeasure>>) {
    return (joiner: string) => (enumKey: EnumKey) => (getter: SkuGetter<IMeasure<TUnit>>) => composeR(composeR(getter, ofMeasure(joiner)(...args)(enumKey)), extractor);
}
const $fst = fst as (tuple: [string | undefined, unknown]) => string | undefined;
export const weightGramsToPounds = fromMeasure<WeightUnitsOfMeasure>($fst, ['lb', 'oz'], div(453.59237), 16, true)('')('weightUnitOfMeasure');
export const densisty = fromMeasure<WeightUnitsOfMeasure>($fst, ['lb/floz'], div(15.338), undefined, false)('')('densityUnitOfMeasure');
export const lengthInchesToCentimeters = fromMeasure<LengthUnitsOfMeasure>($fst, ['cm'], multi(2.54), undefined, false)('')('lengthUnitOfMeasure');
export const caliperMmToInch = fromMeasure<CaliperSizeUnitsOfMeasure>($fst, ['″'], div(25.4), undefined, false)('')('caliperSizeUnitOfMeasure');
export const angleDegree = fromMeasure<AngleUnitsOfMeasure>($fst, [], identity, undefined, false)('')('angleUnitOfMeasure');
export const rotationalRPM = fromMeasure<RotationalSpeedUnitsOfMeasure>($fst, [], identity, undefined, false)('')('rotationalSpeedUnitOfMeasure');
export const voltageVolts = fromMeasure<VoltageUnitsOfMeasure>($fst, [], identity, undefined, false)('')('voltageUnitOfMeasure');
export const wattageWatts = fromMeasure<WattageUnitsOfMeasure>($fst, [], identity, undefined, false)('')('wattageUnitOfMeasure');
export const amperageAmps = fromMeasure<AmperageUnitsOfMeasure>($fst, [], identity, undefined, false)('')('amperageUnits');
export const rateOfEnergyCapacity = fromMeasure<RateOfEnergyCapacityUnitsOfMeasure>($fst, [], identity, undefined, false)('')('rateOfEnergyCapacityUnitOfMeasure');
export const powerConsumption = fromMeasure<PowerConsumptionUnitsOfMeasure>($fst, [], identity, undefined, false)('')('powerConsumptionUnitOfMeasure');
export const memorySpeed = fromMeasure<MemorySpeedUnitsOfMeasure>($fst, [], identity, undefined, false)('')('memorySpeedUnitOfMeasure');
export const dataTransferRate = fromMeasure<DataTransferRateUnitsOfMeasure>($fst, [], identity, undefined, false)('')('dataTransferRateUnitOfMeasure');
export const capacity = fromMeasure<CapacityUnitsOfMeasure>($fst, [], identity, undefined, false)('')('capacityUnitOfMeasure');
export const duration = fromMeasure<MusicDurationUnitsOfMeasure>($fst, ['s'], identity, 60, false)('')('musicDurationUnitOfMeasure');
export const runtime = fromMeasure<MusicDurationUnitsOfMeasure>($fst, ['m'], identity, 60, false)('')('movieRuntimeUnitOfMeasure');
export const resolution = fromMeasure<ResolutionUnitOfMeasure>($fst, ['MP'], identity, 60, false)('')('resolutionUnitOfMeasure');