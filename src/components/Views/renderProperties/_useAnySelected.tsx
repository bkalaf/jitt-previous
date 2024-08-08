// import { MRT_RowData, MRT_TableInstance } from 'material-react-table';
// import { useMemo } from 'react';

// export function useAnySelected<T extends MRT_RowData>(table: MRT_TableInstance<T>, negate = false) {
//     return useMemo(
//         () =>
//             table.getIsAllRowsSelected() || table.getIsSomeRowsSelected() ?
//                 negate ? false
//                 :   true
//             :   false,
//         [negate, table]
//     );
// }
