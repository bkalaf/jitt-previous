import { MRT_RowData } from 'material-react-table';
import { RadioButtonGroup } from 'react-hook-form-mui';
import { useEditControlBase } from '../../../hooks/useControl';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';

export function RadioControl<T extends MRT_RowData>(props: EditFunctionParams<T, string | undefined>) {
    useWhyDidIUpdate('SelectControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, onChange: _, enumInfo, readonly, ...rest } = useEditControlBase(props, 'enumInfo');
    if (enumInfo == null) throw new Error('no enuminfo in RadioContorl');
    return <RadioButtonGroup options={enumInfo.asArray} {...rest} />;
}
