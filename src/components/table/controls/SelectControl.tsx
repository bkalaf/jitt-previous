import { MRT_RowData } from 'material-react-table';
import { SelectElement } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useEditControlBase } from '../../../hooks/useEditControlBase';
import { useMemo } from 'react';

export function SelectControl<T extends MRT_RowData>(props: EditFunctionParams<T, string | undefined>) {
    useWhyDidIUpdate('SelectControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, enumInfo, excludeKeys, readonly, keyType, isDisabled, ...rest } = useEditControlBase(props, 'enumInfo', 'keyType', 'excludeKeys');
    if (enumInfo == null) throw new Error('no enumInfo in SelectControl');
    const options = useMemo(() => enumInfo.asArray.filter((x) => !(excludeKeys ?? []).includes(x.key)), [enumInfo.asArray, excludeKeys]);
    return <SelectElement options={options} valueKey='key' labelKey='text' aria-invalid={invalid} aria-readonly={readonly} disabled={isDisabled()} {...rest} />;
}
