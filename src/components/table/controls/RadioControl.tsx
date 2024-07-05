import { MRT_RowData } from 'material-react-table';
import { RadioButtonGroup } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useEditControlBase } from '../../../hooks/useEditControlBase';
import { useMemo } from 'react';

export function RadioControl<T extends MRT_RowData>(props: EditFunctionParams<T, string | undefined>) {
    useWhyDidIUpdate('RadioControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, enumInfo, readonly, isDisabled, excludeKeys, ...rest } = useEditControlBase(props, 'enumInfo', 'excludeKeys');
    if (enumInfo == null) throw new Error('no enuminfo in RadioContorl');
    const options = useMemo(() => enumInfo.asArray.filter((x) => !(excludeKeys ?? []).includes(x.key)), [enumInfo.asArray, excludeKeys]);
    return <RadioButtonGroup disabled={isDisabled()} options={options} {...rest} />;
}
