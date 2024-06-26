// import { MRT_Column, MRT_Cell, MRT_RowData } from 'material-react-table';
// import { useMemo } from 'react';
// import { useControl } from './useControl';

// export function useDictionaryControl<T extends MRT_RowData, TValue>(column: MRT_Column<T, DictionaryBack<TValue>>, cell: MRT_Cell<T, DictionaryBack<TValue>>) {
//     const value = useMemo(() => cell.getValue() ?? {}, [cell]);
//     const data = useMemo(() => Object.entries(value), [value]);
//     const { control, name, label, helperText, invalid, readonly, onChange, required, validation } = useControl(column);
//     return {
//         control,
//         name,
//         label,
//         helperText,
//         invalid,
//         readonly,
//         required,
//         onChange,
//         validation,
//         value,
//         data
//     }
// }
