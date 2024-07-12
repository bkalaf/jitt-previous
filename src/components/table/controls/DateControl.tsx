import { MRT_RowData } from 'material-react-table';
import { useCallback } from 'react';
import { DatePickerElement } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import dayjs from 'dayjs';
import { useEditControlBase } from '../../../hooks/useEditControlBase';

export function DateControl<T extends MRT_RowData>(props: EditFunctionParams<T, Date | undefined>) {
    useWhyDidIUpdate('DateControl', props);
    const { onChange: $onChange, dateType, readonly, invalid, isDisabled, ...rest } = useEditControlBase(props, 'dateType');
    // const formContext = useFormContext();
    // const value = useMemo(() => dayjs(formContext.watch(rest.name)), [formContext, rest.name]);
    const onChange = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (newValue: any, _context: any) => {
            // console.log(`newValue`, newValue);
            // console.log('context', context);
            $onChange(undefined, dayjs.isDayjs(newValue) ? newValue : dayjs(newValue));
        },
        [$onChange]
    );
    const disableFuture = dateType === 'past';
    const disablePast = dateType === 'future';
    // console.log('DatePickerElement', value, formContext.watch(rest.name));
    return <DatePickerElement disableFuture={disableFuture} disablePast={disablePast} onChange={onChange} formatDensity='dense' readOnly={readonly} aria-readonly={readonly} aria-invalid={invalid} disabled={isDisabled()} {...rest} />;
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
