import { MRT_RowData } from 'material-react-table';
import { TextFieldElement } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useEditControlBase } from '../../../hooks/useControl';


export function StringControl<T extends MRT_RowData, U>(props: EditFunctionParams<T, U | undefined>) {
    useWhyDidIUpdate('StringControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, readonly, type, step, ...rest } = useEditControlBase(props, 'type', 'step');
    const inputType = type ?? 'text';
    return <TextFieldElement aria-invalid={invalid} aria-readonly={readonly} type={inputType} {...rest} inputProps={{ step }} />;
}
