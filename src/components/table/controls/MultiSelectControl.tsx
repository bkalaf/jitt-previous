import { MRT_RowData } from 'material-react-table';
import { AutocompleteElement } from 'react-hook-form-mui';
import { useCallback, useMemo } from 'react';
import { createFilterOptions } from '@mui/material';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useAutoComplete } from '../../../hooks/useAutoComplete';
import { useEditControlBase } from '../../../hooks/useControl';

export function MultiSelectControl<T extends MRT_RowData, U extends ListBack<string>>(props: EditFunctionParams<T, U | undefined>) {
    useWhyDidIUpdate('MultiSelectControl', props);
    const { invalid, multiple, helperText, onChange, validation, readonly, enumInfo, ...rest } = useEditControlBase<T, U, 'enumInfo' | 'multiple', Element>(props, 'enumInfo', 'multiple');
    if (enumInfo == null) throw new Error('no enuminfo in MultiSelectControl');
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
    const $onChange = useCallback(
        (ev: React.SyntheticEvent<Element>, newValue: { text: string; key: string }) => {
            console.log('onchange newvalue', newValue);
            onChange(undefined, Array.isArray(newValue) ? newValue.map((x) => x.key) : newValue.key);
        },
        [onChange]
    );
    const { getOptionLabel, isOptionEqualToValue } = useAutoComplete<{ text: string; key: string }>('text', (l, r) => (l?.key != null && r != null ? (l.key.localeCompare(r) as Compared) : ((l?.key ?? '').localeCompare(r ?? '') as Compared)));
    return (
        <AutocompleteElement
            options={enumInfo.asArray}
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
