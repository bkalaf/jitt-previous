import { MRT_RowData } from 'material-react-table';
import { SelectElement } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useEditControlBase } from '../../../hooks/useEditControlBase';

export function SelectControl<T extends MRT_RowData>(props: EditFunctionParams<T, string | undefined>) {
    useWhyDidIUpdate('SelectControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, enumInfo, readonly, keyType, isDisabled, ...rest } = useEditControlBase(props, 'enumInfo', 'keyType');
    if (enumInfo == null) throw new Error('no enumInfo in SelectControl');
    // const $options = useMemo(() => $opts ?? normalizeOptions(options ?? []), [$opts, options]);
    return <SelectElement options={enumInfo.asArray} valueKey='key' labelKey='text' aria-invalid={invalid} aria-readonly={readonly} disabled={isDisabled()} {...rest} />;
}
