import { MRT_RowData } from 'material-react-table';
import { TextFieldElement, useFormContext } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { is } from '../../../common/is';
import { useEditControlBase } from '../../../hooks/useEditControlBase';

export function StringControl<T extends MRT_RowData, U>(props: EditFunctionParams<T, U | undefined>) {
    useWhyDidIUpdate('StringControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, readonly, type, step, name, isDisabled, ...rest } = useEditControlBase(props, 'type', 'step');
    const inputType = type ?? 'text';
    const formContext = useFormContext();
    const value = formContext.watch(name);
    return (
        <TextFieldElement
            classes={{
                root: 'w-full'
            }}
            className='flex w-full'
            data-novalue={is.nil(value)}
            name={name}
            aria-invalid={invalid}
            aria-readonly={readonly}
            type={inputType}
            disabled={isDisabled()}
            {...rest}
            inputProps={{ step }}
        />
    );
}
