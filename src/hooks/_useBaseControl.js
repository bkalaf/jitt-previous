// import { MRT_Column, MRT_RowData } from 'material-react-table';
// import { useMemo } from 'react';
// import { createRules } from '../components/controls/createRules';
// import { ColumnMeta } from '@tanstack/react-table';
// export function useBaseControl<T extends MRT_RowData, TValue>(column: MRT_Column<T, TValue>) {
//     const { columnDef } = column;
//     const { meta, accessorKey, id, header: label } = columnDef;
//     const {
//         columnName: name,
//         readonly,
//         required,
//         min,
//         max,
//         minLength,
//         maxLength,
//         pattern,
//         validate,
//         type: inputType,
//         step,
//         objectType
//     } = { required: false, readonly: false, columnName: accessorKey ?? id ?? 'n/a', ...((meta ?? {}) as ColumnMeta<any, any>) };
//     const validation = useMemo(() => createRules({ required, min, max, minLength, maxLength, pattern, validate }), [max, maxLength, min, minLength, pattern, required, validate]);
//     return {
//         name,
//         readonly,
//         required,
//         label,
//         inputType,
//         step,
//         objectType,
//         validation
//     };
// }
//# sourceMappingURL=_useBaseControl.js.map