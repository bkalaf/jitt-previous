import { MRT_Cell, MRT_Column, MRT_RowData } from 'material-react-table';
import { camelToProper } from '../../common/text';
import { useEditControl } from '../../hooks/useEditControl';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useFormContext } from 'react-hook-form';
import { CheckboxButtonGroup } from 'react-hook-form-mui';
import { useCallback } from 'react';


export function createCheckGroupControl<T extends MRT_RowData>(options: string[]) {
    const $options = options.map(x => ({ id: x, label: camelToProper(x) }));
    return function CheckGroupControl(props: EditFunctionParams<T, string[]>) {
        useWhyDidIUpdate('DBDictionaryControl', props);
        const { cell, column } = props;
        const { name, label } = useEditControl<T, string[]>(column as MRT_Column<T>, cell as MRT_Cell<T, any>);
        const { control, setValue } = useFormContext();
        const $onChange = useCallback(
            (data: string[]) => {
                setValue(name, data);
            },
            [name, setValue]
        );
        return (
            <CheckboxButtonGroup
                name={name}
                control={control}
                options={$options}
                checkboxColor='warning'
                // helperText={helperText}
                label={label}
                // rules={validation}
                onChange={$onChange}
                // required={required}
                row />
        );
    };
}
