import { MRT_RowData } from 'material-react-table';
import { SelectElement } from 'react-hook-form-mui';
import { useEditControlBase } from './useControl';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useMemo } from 'react';
import { normalizeOptions } from 'src/schema/defs/normalizeOptions';


export function SelectControl<T extends MRT_RowData>(props: EditFunctionParams<T, string | undefined>) {
    useWhyDidIUpdate('SelectControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, options, readonly, ...rest } = useEditControlBase(props, 'options');
    const $options = useMemo(() => normalizeOptions(options ?? {}), []);
    return <SelectElement valueKey='key' labelKey='text' options={$options} aria-invalid={invalid} aria-readonly={readonly} {...rest} />;
}
