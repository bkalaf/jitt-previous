// import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
// import { CheckboxElement } from 'react-hook-form-mui';
// import { useControl } from '../../hooks/useControl';

// export function createBoolControl<T extends MRT_RowData>() {
//     return function BoolControl(props: Parameters<Exclude<MRT_ColumnDef<T, boolean | undefined>['Edit'], undefined>>[0]) {
//         // const { accessorKey, id, header } = props.column.columnDef;
//         // const name = accessorKey ?? id;
//         // const { control } = useFormContext();
//         const { name, label, control, helperText, readonly, required, validation, invalid } = useControl(props.column);
//         return <CheckboxElement color='primary' name={name} label={label} control={control} required={required} readOnly={readonly} aria-readonly={readonly} aria-invalid={invalid} validation={validation} helperText={helperText} />;
//     };
// }
