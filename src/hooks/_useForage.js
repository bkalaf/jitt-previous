// import localforage from 'localforage';
// import { useCallback } from 'react';
// import { LazyDataOrModifiedFn, useAsyncResource } from 'use-async-resource';
// export type IBarcodeCounter = {
//     manufacturer: number;
//     individual: number;
// };
// export type ILocalForage = {
//     forager: LocalForage;
// };
// export function useProvideLocalValue(forage: LocalForage, individual: number = 0, manufacturer: number = 0, ...keys: string[]) {
//     const storedValue = useCallback(async () => (await forage.getItem<IBarcodeCounter>(keys.join('-'))) ?? { manufacturer, individual }, [forage, individual, keys, manufacturer]);
//     const [value] = useAsyncResource(storedValue);
//     const incrementValue = useCallback(async () => {
//         const { manufacturer: m, individual: i } = value() ?? { manufacturer, individual };
//         if (i === 99999) {
//             const $manufacturer = m + 1;
//             const $individual = 0;
//             await forage.setItem([...keys].join('-'), { manufacturer: $manufacturer, individual: $individual });
//             return {
//                 manufacturer: $manufacturer,
//                 individual: $individual
//             };
//         }
//         const $individual = individual + 1;
//         await forage.setItem([...keys].join('-'), { manufacturer, individual: $individual });
//         return {
//             manufacturer,
//             individual: $individual
//         };
//     }, [forage, individual, keys, manufacturer, value]);
//     return [value, incrementValue] as [LazyDataOrModifiedFn<IBarcodeCounter>, () => Promise<IBarcodeCounter>];
// }
// export function useProvideLocalForage() {
//     const forage = localforage.createInstance({
//         name: 'jitt-local-storage',
//         description: 'JITT version 0.0.1'
//     });
//     const [currentSku, incrementSku] = useProvideLocalValue(forage, 0, 99, 'sku', 'barcode', 'generator');
//     const [currentBin, incrementBin] = useProvideLocalValue(forage, 0, 98000, 'bin', 'barcode', 'generator');
//     return {
//         barcodes: {
//             sku: currentSku()!,
//             bin: currentBin()!,
//             incrementSku: incrementSku,
//             incrementBin: incrementBin
//         }
//     };
// }
//# sourceMappingURL=_useForage.js.map