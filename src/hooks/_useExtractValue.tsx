// import { MRT_RowData } from 'material-react-table';
// import { useCallback } from 'react';
// import { useRealm } from './useRealm';
// import { cnvrtPrimitives } from '../schema/conversion/cnvrt';
// import { useObjectTypeType } from './useObjectTypeType';

// export function useExtractValue<T extends MRT_RowData = { value: any }>(type: string, objectType?: string) {
//     const { convert } = useRealm();
//     const ott = useObjectTypeType(objectType);
//     const typeKind = type === 'object' || type === 'list' || type === 'dictionary' || type === 'set' ? ott : 'primitive';
//     const getter = useCallback(
//         (convert: (x?: any) => any, data?: { value: T } | { value: T; key: string }) => {
//             if (type === 'list' || type === 'set') {
//                 return convert(data?.value);
//             } else if (type === 'dictionary') {
//                 return { key: (data as { value: T; key: string }).key, value: convert(data?.value) };
//             }
//             return convert(data);
//         },
//         [type]
//     );
//     return useCallback(
//         (data?: any) => {
//             return data == null ? undefined : typeKind === 'primitive' ? getter(cnvrtPrimitives()[objectType as keyof typeof cnvrtPrimitives], data) : getter(convert(objectType ?? 'n/a'), data);
//         },
//         [convert, getter, objectType, typeKind]
//     );
// }

// /* 

// (typeKind === 'primitive' ? (data == null ? undefined : (data as any)?.value) : convert(objectType)), [convert, objectType, typeKind])

// */
