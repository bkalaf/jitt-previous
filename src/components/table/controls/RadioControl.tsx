import { MRT_RowData } from 'material-react-table';
import { RadioButtonGroup } from 'react-hook-form-mui';
import { useMemo } from 'react';
import { useEditControlBase } from '../../../hooks/useControl';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { normalizeRadioOptions } from './normalizeRadioOptions';

export function RadioControl<T extends MRT_RowData>(props: EditFunctionParams<T, string | undefined>) {
    useWhyDidIUpdate('SelectControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, options, readonly, ...rest } = useEditControlBase(props, 'options');
    const $options = useMemo(() => normalizeRadioOptions(options ?? {}), [options]);
    return <RadioButtonGroup options={$options} {...rest} />;
}
