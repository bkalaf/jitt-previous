import { MRT_RowData } from 'material-react-table';
import { AutocompleteElement } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useEditControlBase } from '../../../hooks/useControl';
import { useAutoComplete } from '../../../hooks/useAutoComplete';
import { useMemo } from 'react';
import { createFilterOptions } from '@mui/material';
import { useCreateOptionsFromUniqueFacetedValues } from '../../../hooks/useCreateOptionsFromUniqueFacetedValues';

export function FreeSoloControl<T extends MRT_RowData, U extends string, TMultiple extends boolean = false>(props: EditFunctionParams<T, TMultiple extends true ? ListBack<U> | undefined : U | undefined>) {
    useWhyDidIUpdate('AutocompleteControl', props);
    const { invalid, freeSolo, readonly, comparator, validation, helperText, multiple, onChange, ...rest } = useEditControlBase<
        T,
        TMultiple extends true ? ListBack<U> : U | undefined,
        'objectType' | 'multiple' | 'freeSolo' | 'comparator',
        HTMLSelectElement
    >(props, 'objectType', 'multiple', 'freeSolo', 'comparator');

    const options = useCreateOptionsFromUniqueFacetedValues<T, U | undefined>(props.column as any, multiple);

    const { getOptionLabel, isOptionEqualToValue } = useAutoComplete<string>(undefined, (comparator as any) ?? ((x: string, y: string) => x.localeCompare(y)));
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
    return (
        <AutocompleteElement
            options={options ?? []}
            multiple={multiple}
            rules={validation}
            autocompleteProps={{
                freeSolo,
                isOptionEqualToValue,
                getOptionLabel,
                onChange: onChange as any,
                filterOptions: filterOptions,
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
