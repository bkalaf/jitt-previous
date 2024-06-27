// import { useCallback } from 'react';
// import { is } from '../common/is';
// import { deepEqual } from './deepEqual';
// import { defaultState } from './defaultState';
// export function useUpdater<T extends keyof IConfig>(setConfig: React.Dispatch<React.SetStateAction<Record<string, IConfig>>>, collection: string, key: T, extra?: any) {
//     return useCallback(
//         (updater: ((x: IConfig[T]) => IConfig[T]) | IConfig[T]) => {
//             setConfig((value) => {
//                 function inner() {
//                     const nextState = { ...value };
//                     if (!Object.hasOwn(nextState, collection)) {
//                         nextState[collection] = defaultState as any;
//                     }
//                     const current = Object.hasOwn(nextState[collection], key) ? nextState[collection][key] : undefined;
//                     if (is.function(updater)) {
//                         const next = updater(current ?? extra);
//                         if (deepEqual(next, current)) return value;
//                         nextState[collection][key] = next;
//                         return nextState;
//                     }
//                     if (deepEqual(updater, current)) return value;
//                     nextState[collection][key] = updater;
//                     return nextState;
//                 }
//                 const result = inner();
//                 console.log(`useUpdater`, value, result);
//                 return result;
//             });
//         },
//         [collection, extra, key, setConfig]
//     );
// }
//# sourceMappingURL=_useUpdater.1.js.map