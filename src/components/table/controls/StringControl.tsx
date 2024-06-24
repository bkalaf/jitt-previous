import { MRT_RowData } from 'material-react-table';
import { TextFieldElement, TextareaAutosizeElement, useFormContext } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useEditControlBase } from '../../../hooks/useControl';
import { is } from '../../../common/is';

export function StringControl<T extends MRT_RowData, U>(props: EditFunctionParams<T, U | undefined>) {
    useWhyDidIUpdate('StringControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, readonly, type, step, name, ...rest } = useEditControlBase(props, 'type', 'step');
    const inputType = type ?? 'text';
    const formContext = useFormContext();
    const value = formContext.watch(name);
    return <TextFieldElement classes={{
        root: 'w-full'
    }} className='w-full flex' data-novalue={is.nil(value)} name={name} aria-invalid={invalid} aria-readonly={readonly} type={inputType} {...rest} inputProps={{ step }} />;
}

export function TextAreaControl<T extends MRT_RowData, U>(props: EditFunctionParams<T, U | undefined>) {
    useWhyDidIUpdate('TextAreaControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, readonly, type, step, ...rest } = useEditControlBase(props, 'type', 'step');
    return <TextareaAutosizeElement aria-invalid={invalid} resizeStyle='vertical' rows={6} {...rest} />
}