import { MRT_RowData } from 'material-react-table';
import { CheckboxElement } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useControl } from '../../../hooks/useControl';

export function BoolControl<T extends MRT_RowData>(props: EditFunctionParams<T, boolean | undefined>) {
    useWhyDidIUpdate('BoolControl', props);
    const { name, label, control, helperText, readonly, required, validation, invalid } = useControl(props.column);
    return <CheckboxElement color='primary' name={name} label={label} control={control} required={required} readOnly={readonly} aria-readonly={readonly} aria-invalid={invalid} validation={validation} helperText={helperText} />;
}
