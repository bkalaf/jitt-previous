import { MRT_RowData } from 'material-react-table';
import { AutocompleteElement } from 'react-hook-form-mui';
import { useMemo } from 'react';
import { createFilterOptions } from '@mui/material';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { normalizeOptions } from '../../../schema/defs/normalizeOptions';
import { useAutoComplete } from '../../../hooks/useAutoComplete';
import { useEditControlBase } from '../../../hooks/useControl';

export function MultiSelectControl<T extends MRT_RowData, U extends ListBack<string>>(props: EditFunctionParams<T, U | undefined>) {
    useWhyDidIUpdate('MultiSelectControl', props);
    const { invalid, multiple, helperText, onChange, options, validation, readonly, ...rest } = useEditControlBase<T, U, 'options' | 'multiple', Element>(props, 'options', 'multiple');
    const $options = useMemo(() => normalizeOptions(options ?? {}), [options]);
    const filterOptions = useMemo(
        () =>
            createFilterOptions<AutoOption>({
                ignoreAccents: true,
                ignoreCase: true,
                limit: 400,
                trim: true,
                matchFrom: 'start'
            }),
        []
    );
    const $onChange = onChange as (ev?: React.SyntheticEvent<Element>, newValue?: any) => void;
    const { getOptionLabel, isOptionEqualToValue } = useAutoComplete<string>('toString', (l: string, r: string) => l.localeCompare(r) as Compared);
    return (
        <AutocompleteElement
            options={$options}
            multiple={multiple}
            rules={validation}
            showCheckbox
            autocompleteProps={{
                isOptionEqualToValue,
                getOptionLabel,
                filterOptions: filterOptions,
                onChange: $onChange,
                selectOnFocus: true,
                clearOnBlur: true,
                handleHomeEndKeys: true,
                readOnly: readonly
            }}
            textFieldProps={{
                helperText: helperText
            }}
            aria-readonly={readonly}
            aria-invalid={invalid}
            {...rest}
        />
    );
}
