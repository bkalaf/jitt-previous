// // export const __ = {
// //     'angle-cut-cuff': {
// //         aliases: ['angle-cut cuff', 'angle-cut']
// //     },
// //     'barrel-cuff': {
// //         aliases: ['barrel cuff']
// //     },
// //     'double-cuff': {
// //         aliases: ['double cuff']
// //     },
// //     'french-cuff': {
// //         aliases: ['french cuff']
// //     },
// //     'ribbed-cuff': {
// //         aliases: ['ribbed cuff']
// //     },
// //     'two-button-cuff': {
// //         aliases: ['two-button cuff']
// //     },
// //     'one-button-cuff': {
// //         aliases: ['one-button cuff']
// //     },
// //     'rounded-cuff': {
// //         aliases: ['rounded cuff', 'round-cut cuff', 'round-cut-cuff']
// //     },
// //     'single-cuff': {
// //         aliases: ['single cuff']
// //     }
// // };

// // console.log(Object.fromEntries(Object.keys(__).map(k => [k, k])));
// // console.log(Object.fromEntries(Object.entries(__).map(([k, { aliases: v }]) => v.map(v1 => [v1, k])).reduce((pv, cv) => [...pv, ...cv], [])));

// export const _cuffTypes = {
//     'angle-cut-cuff': 'angle-cut-cuff',
//     'barrel-cuff': 'barrel-cuff',
//     'double-cuff': 'double-cuff',
//     'french-cuff': 'french-cuff',
//     'ribbed-cuff': 'ribbed-cuff',
//     'two-button-cuff': 'two-button-cuff',
//     'one-button-cuff': 'one-button-cuff',
//     'rounded-cuff': 'rounded-cuff',
//     'single-cuff': 'single-cuff'
// };

// export const cuffTypesAliases = {
//     'angle-cut cuff': 'angle-cut-cuff',
//     'angle-cut': 'angle-cut-cuff',
//     'barrel cuff': 'barrel-cuff',
//     'double cuff': 'double-cuff',
//     'french cuff': 'french-cuff',
//     'ribbed cuff': 'ribbed-cuff',
//     'two-button cuff': 'two-button-cuff',
//     'one-button cuff': 'one-button-cuff',
//     'rounded cuff': 'rounded-cuff',
//     'round-cut cuff': 'rounded-cuff',
//     'round-cut-cuff': 'rounded-cuff',
//     'single cuff': 'single-cuff'
// };

// const cuffTypesMap = Object.fromEntries(Object.entries(_cuffTypes).map(([k, v]) => [k, { key: k, text: v }]));

// export const cuffTypes = {
//     ...cuffTypesMap,
//     ...Object.fromEntries(Object.entries(cuffTypesAliases).map(([k, v]) => [k, cuffTypesMap[v]]))
// };
