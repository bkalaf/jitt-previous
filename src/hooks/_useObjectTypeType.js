// import { useMemo } from 'react';
// import { isPrimitive } from '../schema/conversion/cnvrt';
// import { useCollectionSchema } from './useCollectionSchema';
// export function useObjectTypeType(objectType?: string) {
//     const schema = useCollectionSchema(objectType);
//     return useMemo(
//         () =>
//             isPrimitive(objectType ?? 'n/a') ? 'primitive'
//             : schema.embedded ?? false ? 'embedded'
//             : 'reference',
//         [objectType, schema.embedded]
//     );
// }
//# sourceMappingURL=_useObjectTypeType.js.map