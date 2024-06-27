// import { createRow, MRT_RowData, MRT_TableInstance } from 'material-react-table';
// import React, { useCallback, useMemo } from 'react';
// import { useInitial } from './useInitial';
// import { useEffectiveCollection } from './useEffectiveCollection';
// import { useForm } from 'react-hook-form-mui';
// export function useCreateModal<T extends MRT_RowData>(table: MRT_TableInstance<T>, objectType?: string) {
//     const route = useEffectiveCollection(objectType);
//     const init = useInitial(route);
//     const initial = useMemo(() => init() as T, [init]);
//     const onInsert = useCallback(
//         (ev: React.MouseEvent) => {
//             ev.preventDefault();
//             ev.stopPropagation();
//             table.setCreatingRow(createRow(table, initial));
//         },
//         [initial, table]
//     );
//     const onCancel = useCallback(
//         (ev: React.MouseEvent) => {
//             ev.preventDefault();
//             ev.stopPropagation();
//             table.setCreatingRow(null);
//         },
//         [table]
//     );
//     const formContext = useForm({
//         defaultValues: async () => initial,
//         mode: 'onSubmit'
//     });
//     const onReset = useCallback(
//         (ev: React.MouseEvent) => {
//             ev.preventDefault();
//             ev.stopPropagation();
//             formContext.reset(initial);
//         },
//         [formContext, initial]
//     );
//     return {
//         formContext,
//         onInsert,
//         onCancel,
//         onReset
//     };
// }
//# sourceMappingURL=_useCreateModal.js.map