import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { AutocompleteElement, useFormContext } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useCallback, useMemo } from 'react';
import { createFilterOptions } from '@mui/material';

export function createMultiSelectControl<T extends MRT_RowData, U extends ListBack<string>>(options: (AutoOption | string)[], required = false, readonly = false) {
    return function MultiSelectControl(props: Parameters<Exclude<MRT_ColumnDef<T, U>['Edit'], undefined>>[0]) {
        useWhyDidIUpdate('MultiSelectControl', props);
        const { column } = props;
        const { accessorKey, id, header } = column.columnDef;
        const name = accessorKey ?? id ?? 'n/a';
        const { control, setValue } = useFormContext();
        const filterOpts = useMemo(
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
        const onChange = useCallback(
            (event: React.SyntheticEvent, value: AutoOption[]) => {
                console.log(`onchange`, name, value, event);
                setValue(
                    name,
                    value.map((x) => x.key)
                );
            },
            [name, setValue]
        );
        const isOptionEqualToValue = useCallback((option: AutoOption, value: any) => {
            return option.key === value;
        }, []);
        const getOptionLabel = useCallback((option: AutoOption) => option.text, []);
        return (
            <AutocompleteElement
                name={name}
                control={control}
                label={header}
                options={options}
                multiple
                showCheckbox
                autocompleteProps={{
                    onChange: onChange,
                    filterOptions: filterOpts,
                    selectOnFocus: true,
                    clearOnBlur: true,
                    handleHomeEndKeys: true,
                    readOnly: readonly,
                    isOptionEqualToValue,
                    getOptionLabel
                }}
                required={required}
            />
        );
    };
}
