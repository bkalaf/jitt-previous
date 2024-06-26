import { MRT_RowData } from 'material-react-table';
import { TextareaAutosizeElement } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useEditControlBase } from '../../../hooks/useEditControlBase';

export function TextAreaControl<T extends MRT_RowData, U>(props: EditFunctionParams<T, U | undefined>) {
    useWhyDidIUpdate('TextAreaControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, readonly, type, step, isDisabled, ...rest } = useEditControlBase(props, 'type', 'step');
    return <TextareaAutosizeElement aria-invalid={invalid} resizeStyle='vertical' rows={10} disabled={isDisabled()} {...rest} className='w-full' />;
}
