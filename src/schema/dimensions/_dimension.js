// import { $ } from '../$';
// import { truncateAuto } from '../../common/number/truncateAuto';
// import { surroundParensIgnore } from '../../common/text/surround';
// import { OBSOLETE_IDimension } from '../../types';
// import { schemaName } from '../../util/schemaName';
// import { EntityBase } from '../entity/EntityBase';
// /** @deprecated */
// const liComponent: ListItemCellComponent<OBSOLETE_IDimension<string[], string, number, string[]>> =
//     <T extends string[], U extends string, V extends number, W extends string[]>(value?: OBSOLETE_IDimension<T, U, V, W>) =>
//     () =>
//         value == null || value.value === 0 ? '' : `${truncateAuto(value.value, 2)}${value.uoms.join(value.seperator)}`;
// /** @deprecated */
// export abstract class SingleDimension<TUom extends string = string, TConversion extends number = 1, TConvertedUom extends string = string>
//     extends EntityBase<OBSOLETE_IDimension<[TUom], '', TConversion, [TConvertedUom]>>
//     implements OBSOLETE_IDimension<[TUom], '', TConversion, [TConvertedUom]>
// {
//     convertedUom1: TConvertedUom;
//     convertedUom2: undefined;
//     convert(): [number, string] {
//         return [this.value * this.conversionFactor, this.convertedUom1];
//     }
//     conversionFactor: TConversion;
//     value: number;
//     uoms: DBList<string> & [TUom];
//     seperator = '' as const;
//     static schema: Realm.ObjectSchema = {
//         name: schemaName($.singleDimension()),
//         embedded: true,
//         properties: {
//             value: $.double.default(0),
//             uoms: $.string.list
//         }
//     };
//     static update(item: OBSOLETE_IDimension<string[], string>): OBSOLETE_IDimension<string[], string> {
//         return item;
//     }
//     static liComponent: ListItemCellComponent<OBSOLETE_IDimension<string[], string>> = liComponent;
//     stringify(this: OBSOLETE_IDimension<[TUom], '', TConversion, [TConvertedUom]>, includeConversion = true, reverseConversion = false): string {
//         // return liComponent(this)({}) as string;
//         if (this.value == null || this.value === 0) return '';
//         const measure = liComponent(this)({}) as string;
//         const [a, b] = includeConversion ? this.convert() : [0, ''];
//         const conversion = includeConversion ? [truncateAuto(a, 2), b].join(' ') : undefined;
//         return reverseConversion && conversion != null ? [conversion, surroundParensIgnore(measure)].join(' ') : [measure, ...(conversion == null ? [] : [surroundParensIgnore(conversion)])].join(' ');
//     }
//     static init(): InitValue<OBSOLETE_IDimension<string[], string, number>> {
//         return {
//             seperator: '',
//             uoms: [] as any,
//             value: 0,
//             conversionFactor: 1,
//             convertedUom1: ''
//         };
//     }
// }
// /** @deprecated */
// export abstract class DualDimension<
//         TNumerator extends string = string,
//         TDenominator extends string = string,
//         TSeperator extends string = '',
//         TConversion extends number = 1,
//         TConvertedNumerator extends string = string,
//         TConvertedDenominator extends string = string
//     >
//     extends EntityBase<OBSOLETE_IDimension<[TNumerator, TDenominator], TSeperator, TConversion, [TConvertedNumerator, TConvertedDenominator]>>
//     implements OBSOLETE_IDimension<[TNumerator, TDenominator], TSeperator, TConversion, [TConvertedNumerator, TConvertedDenominator]>
// {
//     convertedUom1: TConvertedNumerator;
//     convertedUom2: TConvertedDenominator;
//     convert(): [number, string] {
//         return [this.value * this.conversionFactor, [this.convertedUom1, this.convertedUom2].join(this.seperator)];
//     }
//     conversionFactor: TConversion;
//     uoms: DBList<string> & [TNumerator, TDenominator];
//     seperator: TSeperator;
//     value: number;
//     static schema: Realm.ObjectSchema = {
//         name: schemaName($.dualDimension()),
//         embedded: true,
//         properties: {
//             value: $.double.default(0),
//             uoms: $.string.list
//         }
//     };
//     static update(item: OBSOLETE_IDimension<string[], string>): OBSOLETE_IDimension<string[], string> {
//         return item;
//     }
//     static liComponent: ListItemCellComponent<OBSOLETE_IDimension<[string, string], string, number, [string, string]>> =
//         <T extends string, U extends string, V extends string, W extends number, X extends string, Y extends string>(value?: OBSOLETE_IDimension<[T, U], V, W, [X, Y]>) =>
//         () => {
//             return value == null || value.value === 0 ? '' : `${truncateAuto(value.value, 2)} ${value.uoms.join(value.seperator)}`;
//         };
//     stringify(this: OBSOLETE_IDimension<[TNumerator, TDenominator], TSeperator, TConversion, [TConvertedNumerator, TConvertedDenominator]>, includeConversion = true): string {
//         if (this.value == null || this.value === 0) return '';
//         const measure = liComponent(this)({}) as string;
//         const [a, b] = includeConversion ? this.convert() : [0, ''];
//         const conversion = includeConversion ? [truncateAuto(a, 2), b].join(' ') : undefined;
//         return [measure, ...(conversion == null ? [] : [surroundParensIgnore(conversion)])].join(' ');
//     }
//     static init(): InitValue<OBSOLETE_IDimension<[string, string], string, number>> {
//         return {
//             seperator: '',
//             uoms: [] as any,
//             value: 0,
//             conversionFactor: 1,
//             convertedUom1: '',
//             convertedUom2: ''
//         };
//     }
// }
//# sourceMappingURL=_dimension.js.map