// // eslint-disable-next-line @typescript-eslint/triple-slash-reference
// ///<reference path="./global.d.ts" />
// import { productColors } from './schema/enums/productColors';
// // import { sizes } from './schema/enums/sizes';
// // import { _itemConditions } from './schema/enums/itemConditions';
// import { distinctByString } from './common/array/distinct';
// // const text = maps.map(([key, enumMap]) => `export type ${key} = ${Object.keys(enumMap).map(surround('"', '"')).join(' | ')}`)
// // console.log(text.join('\n\n'));
// const enums = (m: [string, EnumMap<string>][]) =>
//     m.map((x) => {
//         const name = x[0] as string;
//         const emap = x[1] as EnumMap<string>;
//         const values = Object.values(emap);
//         const values1 = typeof values[0] === 'string' ? values : values.map((y) => (y as Record<string, any>).key);
//         const keys = distinctByString(values1);
//         const allKeys = Object.keys(emap);
//         const aliases = allKeys.filter((x) => !keys.includes(x));
//         // console.log(x[0], `allKeys`, allKeys);
//         // console.log(x[0], `keys`, keys);
//         // console.log(x[0], `aliases`, aliases);
//         return [
//             name,
//             keys.map((key) => {
//                 const lookup = emap[key];
//                 return {
//                     ...(typeof lookup === 'string' ? { text: lookup } : lookup),
//                     key,
//                     aliases: aliases.filter((y) => {
//                         const amap = emap[y];
//                         const akey = typeof amap === 'string' ? amap : amap.key;
//                         return akey === key;
//                     })
//                 };
//             })
//         ] as [string, any[]];
//     });
// // const e = Object.fromEntries(enums.map(([a, b]) => [decapitalize(a), b]))
// // console.log(JSON.stringify(e, null, '\t'));
// console.log(JSON.stringify(enums([['colors', productColors]]), null, '\t'));
//# sourceMappingURL=_runTypes.js.map