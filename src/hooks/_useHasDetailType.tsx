// import { useFormContext } from 'react-hook-form-mui';
// import { DetailTypes } from '../types';
// import { useDebugValue, useMemo } from 'react';

// export function useCheckPredicate(name: string, predicate: (x?: any) => boolean) {
//     const { watch } = useFormContext();
//     const current = watch(name);
//     const result = useMemo(() => {
//         // console.info(`useCheckProperty`, name, current, predicate(current));
//         return predicate(current);
//     }, [current, predicate]);
//     useDebugValue(`${name}:whenPredicate(${current?.toString() ?? ''}) == ${result?.toString()}`);
//     return result;
// }
// export function useCheckProperty(name: string, value: any) {
//     const { watch } = useFormContext();
//     const current = watch(name);

//     const result = useMemo(() => {
//         // console.info(`useCheckProperty`, name, value, current);
//         return (
//             current == null ? true
//             : Array.isArray(value) ? value.includes(current)
//             : value === current
//         );
//     }, [current, value]);
//     useDebugValue(`${name}:whenPredicate(${current?.toString() ?? ''}) == ${result?.toString()}`);
//     return result;
// }
// export function useHasDetailType(name: string, item: DetailTypes | DetailTypes[]) {
//     const { watch } = useFormContext();
//     return useMemo(() => {
//         const value = watch(name);
//         const func = Array.isArray(item) ? (x: DetailTypes) => !item.includes(x) : (x: DetailTypes) => x !== item;
//         return value == null ? true : !func(value);
//     }, [item, name, watch]);
// }
