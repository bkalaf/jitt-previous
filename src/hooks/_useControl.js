// import { MRT_Column, MRT_RowData } from 'material-react-table';
// import React, { useCallback } from 'react';
// import { useFormContext } from 'react-hook-form-mui';
// import { useBaseControl } from './useBaseControl';
// export function useControl<T extends MRT_RowData, TValue, TElement extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(column: MRT_Column<T, TValue>) {
//     const { name, readonly, required, label, inputType, step, objectType, validation } = useBaseControl(column);
//     const formContext = useFormContext();
//     const { control, getFieldState, setValue } = formContext;
//     const { invalid, error } = getFieldState(name);
//     const { type, message: helperText } = error ?? {};
//     if (type != null) console.error(`${type}: ${helperText}}`);
//     const onChange = useCallback(
//         (ev?: React.ChangeEvent<TElement>, newValue?: any) => {
//             ev?.preventDefault();
//             ev?.stopPropagation();
//             setValue(name, newValue ?? ev?.target?.value);
//         },
//         [name, setValue]
//     );
//     return {
//         objectType,
//         control,
//         name,
//         label,
//         helperText,
//         validation,
//         readonly,
//         required,
//         invalid,
//         onChange,
//         type: inputType,
//         inputProps: {
//             step
//         }
//     };
// }
//# sourceMappingURL=_useControl.js.map