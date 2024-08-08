// import { matchSorter } from 'match-sorter';
// import { asString } from './asString';

// function fuzzySearchMultipleWords(
//     rows: any[], // array of data [{a: "a", b: "b"}, {a: "c", b: "d"}]
//     keys: string[], // keys to search ["a", "b"]
//     filterValue: string // potentially multi-word search string "two words"
// ) {
//     if (!filterValue || !filterValue.length) {
//         return rows;
//     }

//     const terms = filterValue.split(' ');
//     if (!terms) {
//         return rows;
//     }

//     // reduceRight will mean sorting is done by score for the _first_ entered word.
//     return terms.reduceRight((results, term) => matchSorter(results, term, { keys }), rows);
// }
// export function toGlobalFilter<T>(queryParams: URLSearchParams, globalFilter: unknown, ctor: MyClass<any>): [URLSearchParams, (data: T[]) => T[]] {
//     if (globalFilter == null) {
//         if (queryParams.has('global')) {
//             queryParams.delete('global');
//         }
//         return [queryParams, (data: T[]) => data];
//     }
//     queryParams.set('global', asString(globalFilter));
//     return [queryParams, (data: T[]) => fuzzySearchMultipleWords(data, ctor.matchKeys ?? [], asString(globalFilter))]
//     // return [queryParams, (data: T[]) => matchSorter<T>(data, asString(globalFilter), {
//     //     threshold: matchSorter.rankings.CONTAINS
//     // })];
// }
