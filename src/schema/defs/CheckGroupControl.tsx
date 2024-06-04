import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { CheckboxButtonGroup } from 'react-hook-form-mui';
import { useCallback } from 'react';
import { useEditControlBase } from '../../hooks/useControl';


export function CheckGroupControl<T extends MRT_RowData>(props: EditFunctionParams<T, ListBack<string>>) {
    useWhyDidIUpdate('CheckGroupControl', props);
    const { name, label, control, onChange, required, validation, helperText, flags } = useEditControlBase(props, 'flags');
    const $onChange = useCallback(
        (newValue: string[]) => {
            onChange(undefined, newValue);
        },
        [onChange]
    );
    return <CheckboxButtonGroup name={name} control={control} checkboxColor='default' helperText={helperText} row onChange={$onChange} options={flags ?? []} rules={validation} label={label} required={required} />;
}
