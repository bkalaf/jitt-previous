import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { CheckboxButtonGroup } from 'react-hook-form-mui';
import { useCallback, useMemo } from 'react';
import { useEditControlBase } from '../../hooks/useControl';
import { camelToProper } from '../../common/text';

export function CheckGroupControl<T extends MRT_RowData>(props: EditFunctionParams<T, ListBack<string>>) {
    useWhyDidIUpdate('CheckGroupControl', props);
    const { name, label, control, onChange, required, validation, helperText, flags } = useEditControlBase(props, 'flags');
    const options = useMemo(() => (flags ?? []).map((x) => ({ id: x, label: camelToProper(x) })), [flags]);
    const $onChange = useCallback(
        (newValue: string[]) => {
            onChange(undefined, newValue);
        },
        [onChange]
    );
    return <CheckboxButtonGroup name={name} control={control} checkboxColor='default' helperText={helperText} row onChange={$onChange} options={options} rules={validation} label={label} required={required} />;
}
