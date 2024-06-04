import { MRT_RowData } from 'material-react-table';
import { useCallback } from 'react';
import { DatePickerElement } from 'react-hook-form-mui';
import { useEditControlBase } from '../../../hooks/useControl';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';

export function DateControl<T extends MRT_RowData>(props: EditFunctionParams<T, Date | undefined>) {
    useWhyDidIUpdate('DateControl', props);
    const { onChange: $onChange, dateType, readonly, invalid, ...rest } = useEditControlBase(props, 'dateType');
    const onChange = useCallback(
        (newValue: any, context: any) => {
            console.log(`newValue`, newValue);
            console.log('context', context);
            $onChange(undefined, newValue);
        },
        [$onChange]
    );
    const disablePast = dateType === 'past';
    const disableFuture = dateType === 'future';
    return <DatePickerElement disableFuture={disableFuture} disablePast={disablePast} onChange={onChange} formatDensity='dense' readOnly={readonly} aria-readonly={readonly} aria-invalid={invalid} {...rest} />;
}
// export function createDateControl<T extends MRT_RowData>(opts: { disablePast?: boolean; disableFuture?: boolean }) {
//     return function DateControl(props: Parameters<Exclude<MRT_ColumnDef<T, Date | undefined>['Edit'], undefined>>[0]) {
//         // const { accessorKey, id, header } = props.column.columnDef;
//         // const name = accessorKey ?? id;
//         // const { control, setValue } = useFormContext();
//         // const { required, disableFuture, disablePast, readonly } = { readonly: false, disableFuture: false, disablePast: false, required: false, ...(opts ?? {}) };
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         const { readonly, onChange: $onChange, inputProps: _, type: _a, invalid, ...rest } = useControl(props.column);
//         const { disableFuture, disablePast } = { disableFuture: false, disablePast: false, ...opts };
//         const onChange = useCallback(
//             (newValue: any, context: any) => {
//                 console.log(`newValue`, newValue);
//                 console.log('context', context);
//                 $onChange(undefined, newValue);
//             },
//             [$onChange]
//         );

//         return <DatePickerElement {...rest} disableFuture={disableFuture} disablePast={disablePast} onChange={onChange} formatDensity='dense' readOnly={readonly} aria-readonly={readonly} aria-invalid={invalid} />;
//     };
// }
