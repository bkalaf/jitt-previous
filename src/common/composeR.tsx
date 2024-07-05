import { MRT_RowData } from 'material-react-table';
import { standardizeOptions } from '../schema/defs/standardizeOptions';
import $me from '../schema/enums';
import { surroundAposthopheIgnore, surroundAsteriskIgnore, surroundQuotesIgnore, surroundSquareBracesIgnore } from './text/surround';
import { allFlags } from '../schema/enums/flags';
import { ofList } from './ofList';
import { pipeR } from './pipeR';
import { joinWith } from './joinWith';
import { appendIgnore } from './append';
import { fromEditionTitle, fromEditionNarrative } from './fromEdition';
import { fromDate } from './fromDate';
import { fromDollar } from './fromDollar';
import {
    lengthInchesToCentimeters,
    weightGramsToPounds,
    caliperMmToInch,
    capacity,
    amperageAmps,
    voltageVolts,
    wattageWatts,
    rotationalRPM,
    memorySpeed,
    dataTransferRate,
    rateOfEnergyCapacity,
    powerConsumption,
    angleDegree,
    duration,
    densisty
} from './measure';
import { fromDimension } from './fromDimension';
import { fromBarcode } from './fromBarcode';
import { fromLookup, fromMappedLookup } from './fromLookup';
import { fromSize } from './fromSize';
import { ContributorRoles, IContributor, ISku } from '../types';
import { ofEnum } from './ofEnum';
import { konst } from './konst';
import { $curry } from './$curry';
import { PartNumber } from '../schema/entity/partNumber';
import { OperatingSystemInfo } from '../schema/entity/operatingSystemInfo';
import { MinMax } from '../schema/entity/minMax';
import { Rn } from '../schema/entity/rn';
import { getLookupFunction } from './getLookupFunction';
import { Individual } from '../schema/entity/individual';
import { prepend, prependIgnore } from './prepend';
import { is } from './is';
import { composeR } from './composeR.1';
import { parentheses } from './parentheses';
import { EnumKey } from './EnumKey';

export const fromTitleSubtitle = (getterSubtitle: (sku: ISku) => string | undefined) => (getterTitle: (sku: ISku) => string | undefined) => (sku: ISku) => {
    const { title, subtitle } = { title: getterTitle(sku), subtitle: getterSubtitle(sku) };
    return joinWith(' - ')(title)(subtitle);
};

export const squareBrackets = surroundSquareBracesIgnore;
export const doubleQuote = surroundQuotesIgnore;
export const singleQuote = surroundAposthopheIgnore;

export const combine = function <T>(getter: SkuGetter<T>, func: (x?: T) => string | undefined) {
    return composeR(getter, func);
};
export const fromEnum = (enumKey: EnumKey) => (getter: SkuGetter) => combine(getter, ofEnum(enumKey, 'text'));
export const fromEnumExtra =
    <T extends string>(opts: { enumKey: EnumKey; extraKey: T }) =>
    (getter: SkuGetter) =>
        combine(getter, ofEnum(opts.enumKey, opts.extraKey));

export function ofSepList(sep: string) {
    return (x: string, y: string) => [x, y].join(sep);
}
const newLineSepList = ofSepList('\n');

const finalList = (x: string) => (x.length > 0 ? x : undefined);
export function ofStringList(getter: SkuGetter<DBList<string>>) {
    return ofList((x: string) => x, getter, newLineSepList, '', finalList);
}
export function ofBulletStringList(getter: SkuGetter<DBList<string>>) {
    return ofList(prepend('+ '), getter, newLineSepList, '', finalList);
}
export function ofLookupList<T extends MRT_RowData>(ctor: MyClass<T>) {
    const func = (x: T) => getLookupFunction(ctor)(x) ?? '';
    return (getter: SkuGetter<DBList<any>>) => ofList(func, getter, newLineSepList, '', finalList);
}

export function singularOrPlural(getter: SkuGetter<number | undefined>) {
    return (tuple?: [string, string]) => (sku: ISku) => {
        if (tuple == null) return undefined;
        const [singular, plural] = tuple;
        const value = getter(sku);
        return (
            value != null ?
                value >= 2 ?
                    [value.toFixed(0), plural].join(' ')
                :   [value.toFixed(0), singular].join(' ')
            :   undefined
        );
    };
}
export function discCount(getter: SkuGetter<number>) {
    return function (sku: ISku) {
        const value = getter(sku);
        if (value == null) return { header: null, value: undefined };
        const type = sku?.product?.videoFormat;
        const opts = type === 'vhs' ? ['tape', 'tapes'] : ['disc', 'discs'];
        const text = singularOrPlural(getter)(opts as [string, string])(sku);
        return {
            header: [type === 'vhs' ? 'Tape' : 'Disc', 'Count'].join(' '),
            value: text
        };
    };
}

// export function qty(getter: SkuGetter<number | undefined>) {
//     return composeR(
//         composeR(getter, (x) => truncateAuto(x, 0)),
//         appendIgnore(' pcs')
//     );
// }

// export const ofMeasure = function <TUnit extends string>(getter: SkuGetter<IMeasure<TUnit>>) {};

// console.log(fromMeasure<WeightUnitsOfMeasure>(['lb', 'oz'], div(453.59237), 16, true)({ value: 190, uom: 'g' }));
// console.log(fromMeasure<WeightUnitsOfMeasure>(['lb', 'oz'], div(453.59237), 16, true)({ value: 590, uom: 'g' }));
// console.log(fromMeasure<LengthUnitsOfMeasure>(['cm'], multi(2.54), undefined, false)({ value: 3.5, uom: '″' }));

// console.log(((x: ISku) => x?.product?.weight, fst));

export function fromFlags(key: keyof typeof allFlags & string, asterisk = false) {
    const tester = (x: string[]) => x.includes(key);
    const converter = (x: boolean) => (x ? allFlags[key].text : undefined);
    return (getter: SkuGetter<string[]>) => (asterisk ? pipeR(getter, tester, converter, surroundAsteriskIgnore) : pipeR(getter, tester, converter));
}

export function getStringify<T extends MRT_RowData>(Ctor: EmbeddedClass<T>) {
    return (x?: T) => Ctor.stringify(x, true)();
}
export function genericStringify<T extends MRT_RowData>(Ctor: EmbeddedClass<T>) {
    const inner = function (x?: T) {
        return Ctor.stringify(x, true)();
    };
    return (x: SkuGetter<T>) => composeR(x, inner);
}
export const enumList = (key: keyof typeof $me) => (getter: SkuGetter<DBList<string>>) =>
    ofList(
        (x: any) => standardizeOptions($me[key]).asRecord[x].text,
        getter,
        (x: string, y: string) => [x, y].join(', '),
        '',
        (x: string) => finalList(x.slice(2))
    );

// function list<T extends MRT_RowData>(Ctor: EmbeddedClass<T>, getter: SkuGetter<T>) {
//     return ofList(getStringify(Ctor), getter, concatText, '');
// }

const returnUndef = konst(undefined);
export const contributor =
    ({ role, sep }: { role: ContributorRoles; sep: string }) =>
    (getter: SkuGetter<DBList<IContributor>>) =>
    (sku: ISku) => {
        const value = getter(sku) ?? [];
        const filtered = value.filter((x) => x.role === role);
        return filtered.length === 0 ? undefined : filtered.map(({ individual, group, creditedAs }) => [group, Individual.stringify(individual, true), prependIgnore('as ')(creditedAs)].filter(is.not.nil).join(' ')).join(sep);
    };
const by = (header: string) => (params: { role: ContributorRoles; sep: string }) => (getter: SkuGetter<any>) => (sku: ISku) => {
    const filtered = getter(sku).filter((x: any) => x.params.role === x.role);
    return {
        header: [header, filtered.length > 1 ? 's' : ''].join(''),
        value: composeR(contributor(params)(getter), prependIgnore('by '))(sku)
    };
};
const $for = (enumKey: EnumKey) => (getter: SkuGetter<any>) => composeR(fromEnum(enumKey)(getter), prependIgnore('for '));
const echo = (getter: SkuGetter<any>) => (sku: ISku) => getter(sku);
const fromInt = (getter: SkuGetter<number>) => (sku: ISku) => getter(sku)?.toFixed(0);
const fromIntOverOne = (getter: SkuGetter<number>) => (sku: ISku) =>
    getter(sku) != null ?
        getter(sku)! > 1 ?
            getter(sku)?.toFixed(0)
        :   undefined
    :   undefined;

const appendText = (text: string) => (getter: SkuGetter<number>) => composeR(fromInt(getter), appendIgnore(text));

export function toHeaderParams<T>(func: (x: T) => (getter: SkuGetter<any>) => (sku: ISku) => string | undefined) {
    return (header?: string | null) => (args: T) => (getter: SkuGetter<any>) => (sku: ISku) => {
        return {
            header,
            value: func(args)(getter)(sku)
        };
    };
}
const discs = konst(konst(discCount)) as ReturnType<typeof toHeaderParams>;
export type NarrativeFunc<T> = ReturnType<typeof toHeaderParams<T>>;
const $$enum = toHeaderParams(fromEnum) as {
    (header: string): ReturnType<NarrativeFunc<string>>;
    extra: NarrativeFunc<{ enumKey: EnumKey; extraKey: string }>;
};
$$enum.extra = toHeaderParams(fromEnumExtra);

const fromPrepend = toHeaderParams(
    ({ text }: { text: string }) =>
        (getter: SkuGetter<any>) =>
            composeR(getter, prependIgnore(text))
);
const append = toHeaderParams(
    ({ text }: { text: string }) =>
        (getter: SkuGetter<any>) =>
            composeR(getter, appendIgnore(text))
);
export const $from: any = {
    quantity: toHeaderParams(konst((getter: SkuGetter<any>) => composeR(fromIntOverOne(getter), appendIgnore('x')))),
    append,
    prepend: fromPrepend,
    barcode: toHeaderParams(fromBarcode),
    discCount: discs,
    appendText: appendText as any,
    contributor: toHeaderParams(contributor),
    by: by,
    for: toHeaderParams($for),
    date: toHeaderParams(konst(fromDate)),
    dimension: fromDimension,
    dollar: toHeaderParams(konst(fromDollar)),
    edition: {
        narrative: toHeaderParams(konst((getter: SkuGetter<number>) => composeR(getter, fromEditionNarrative))),
        title: toHeaderParams(konst((getter: SkuGetter<number>) => composeR(getter, fromEditionTitle)))
    },
    enum: $$enum,
    flags: toHeaderParams<{ key: string; asterisk: boolean }>((x) => fromFlags(x.key, x.asterisk)),
    titleFlags: toHeaderParams<{ key: string; asterisk: boolean }>((x) => fromFlags(x.key, false)),
    int: toHeaderParams(konst(fromInt)),
    intOverOne: toHeaderParams(konst(fromIntOverOne)),
    list: {
        ofString: toHeaderParams(konst(ofStringList)),
        ofLookup: toHeaderParams(ofLookupList),
        ofEnum: toHeaderParams(enumList),
        ofBullet: toHeaderParams(konst(ofBulletStringList))
    },
    mappedLookup: {
        prependPlus: toHeaderParams(fromMappedLookup(prependIgnore('+ ')))
    },
    lookup: (header: string) =>
        toHeaderParams(
            <T extends MRT_RowData>(myClass: ReferenceClass<T>) =>
                (getter: SkuGetter<any>) =>
                    fromLookup<T>(myClass, getter)
        )(header),
    // lookup: fromLookup,
    measure: {
        amperageUnitOfMeasure: amperageAmps,
        angleUnitOfMeasure: angleDegree,
        caliperSizeUnitOfMeasure: caliperMmToInch,
        capacityUnitOfMeasure: capacity,
        dataTransferRateUnitOfMeasure: dataTransferRate,
        densityUnitOfMeasure: densisty,
        durationUnitOfMeasure: duration,
        lengthUnitOfMeasure: lengthInchesToCentimeters,
        memorySpeedUnitOfMeasure: memorySpeed,
        powerConsumptionUnitOfMeasure: powerConsumption,
        rateOfEnergyCapacityUnitOfMeasure: rateOfEnergyCapacity,
        rotationalSpeedUnitOfMeasure: rotationalRPM,
        movieRuntimeUnitOfMeasure: duration,
        voltageUnitOfMeasure: voltageVolts,
        wattageUnitOfMeasure: wattageWatts,
        weightUnitOfMeasure: weightGramsToPounds
    },
    minMax: $curry(fromLookup)(MinMax),
    squareBracket: toHeaderParams(konst((getter: SkuGetter<any>) => composeR(getter, squareBrackets))),
    parentheses: toHeaderParams(konst((getter: SkuGetter<any>) => composeR(getter, parentheses))),
    operatingSystemInfo: $curry(fromLookup)(OperatingSystemInfo),
    partNumber: $curry(fromLookup)(PartNumber),
    rn: $curry(fromLookup)(Rn),
    size: toHeaderParams(fromSize),
    title: {
        withSubtitle: fromTitleSubtitle as any,
        only: fromTitleSubtitle(returnUndef)
    },
    echo: toHeaderParams(() => echo)
};
export const $fromMeasure = (header: string) => (key: keyof typeof $from.measure) => {
    const func = $from.measure[key];
    return toHeaderParams(konst(func))(header)(key);
};
