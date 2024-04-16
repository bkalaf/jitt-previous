import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { AutocompleteElement, useFormContext } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useCallback, useMemo } from 'react';
import { createFilterOptions, FilterOptionsState } from '@mui/material';

export function createFreeSoloControl<T extends MRT_RowData, U extends string>(comparator: (x: U, y: U) => Compared, required = false, readonly = false) {
    return function FreeSoloControl(props: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Edit'], undefined>>[0]) {
        useWhyDidIUpdate('FreeSoloControl', props);
        const { column } = props;
        const { accessorKey, id, header } = column.columnDef;
        const name = accessorKey ?? id ?? 'n/a';
        const { control, setValue } = useFormContext();
        const options = useMemo(
            () =>
                Object.keys(column.getFacetedUniqueValues() as Record<U, number>)
                    .map((x) => ({ key: x, text: x }))
                    .sort((x, y) => x.text.localeCompare(y.text)),
            []
        );
        const isOptionEqualToValue = useCallback((option: AutoOption, value: string) => {
            return comparator(option.key as U, value as U) === 0;
        }, []);
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
        const filter = useCallback((options: AutoOption[], params: FilterOptionsState<AutoOption>) => {
            const filtered = filterOpts(options, params);

            if (params.inputValue !== '') {
                filtered.push({
                    key: params.inputValue,
                    text: `ADD: ${params.inputValue}`
                });
            }
            return filtered;
        }, []);
        const onChange = useCallback((event: React.SyntheticEvent, value: string) => {
            setValue(name, value);
        }, []);
        const getOptionLabel = useCallback((x: AutoOption | { inputValue: string } | string) => (typeof x === 'string' ? x : 'inputValue' in x ? x.inputValue : x.text), []);
        return (
            <AutocompleteElement
                name={name}
                control={control}
                label={header}
                options={options}
                autocompleteProps={{
                    onChange: onChange,
                    freeSolo: true,
                    getOptionLabel: getOptionLabel,
                    isOptionEqualToValue: isOptionEqualToValue,
                    filterOptions: filter,
                    selectOnFocus: true,
                    clearOnBlur: true,
                    handleHomeEndKeys: true,
                    readOnly: readonly
                }}
                required={required}
            />
        );
    };
}
