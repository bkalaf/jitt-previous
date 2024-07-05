// import { useCallback, useEffect, useState } from 'react';
// import { MRT_RowData, MRT_TableOptions } from 'material-react-table';

// export function usePersistedSetting<T extends MRT_RowData, TKey extends keyof Exclude<MRT_TableOptions<T>['state'], undefined> = keyof Exclude<MRT_TableOptions<T>['state'], undefined>>(
//     collection: string,
//     storage: LocalForage,
//     key: TKey,
//     defaultValue: Exclude<MRT_TableOptions<T>['state'], undefined>[TKey]
// ): [state: Exclude<MRT_TableOptions<T>['state'], undefined>[TKey], setState: React.Dispatch<React.SetStateAction<Exclude<MRT_TableOptions<T>['state'], undefined>[TKey]>>, resetState: (x?: any) => void] {
//     const settingKey = [collection, key].join('-');
//     const [state, internalSetState] = useState<Exclude<MRT_TableOptions<T>['state'], undefined>[TKey]>(defaultValue);
//     useEffect(() => {
//         const func = async () => {
//             console.info('IN ASYNC FUNCTION');
//             const storedValue = await storage.getItem(settingKey);
//             if (storedValue != null) {
//                 internalSetState((x) => {
//                     if (x == null) return storedValue;
//                     return x;
//                 });
//             } else {
//                 await storage.setItem(settingKey, defaultValue);
//             }
//         };
//         setImmediate(() => func().finally(() => console.info(`ASYNC SETTER DONE: ${settingKey}`)));
//     }, [defaultValue, settingKey, storage]);
//     const setState = useCallback(
//         (value: Exclude<MRT_TableOptions<T>['state'], undefined>[TKey] | ((x: Exclude<MRT_TableOptions<T>['state'], undefined>[TKey]) => Exclude<MRT_TableOptions<T>['state'], undefined>[TKey])) => {
//             internalSetState((old) => {
//                 if (typeof value === 'function') {
//                     const newValue = (value as (x: Exclude<MRT_TableOptions<T>['state'], undefined>[TKey]) => Exclude<MRT_TableOptions<T>['state'], undefined>[TKey])(old);
//                     if (newValue === old) return old;
//                     setImmediate(() => storage.setItem(settingKey, newValue));
//                     return newValue;
//                 } else {
//                     if (value === old) return old;
//                     setImmediate(() => storage.setItem(settingKey, value));
//                     return value;
//                 }
//             });
//         },
//         [settingKey, storage]
//     );
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const resetState = useCallback(
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         (_x?: any) => {
//             internalSetState(defaultValue);
//         },
//         [defaultValue]
//     );
//     return [state, setState, resetState];
// }
