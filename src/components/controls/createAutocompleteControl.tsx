import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { AutocompleteElement, Path, useFormContext } from 'react-hook-form-mui';
import { useQuery } from '@tanstack/react-query';
import { getProperty } from '../../common/object';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { useCallback } from 'react';

export function createAutocompleteControl<T extends MRT_RowData, U extends MRT_RowData>(opts: { objectType: string; labelProperty: string, multiple?: boolean }) {
    return function AutocompleteControl(props: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Edit'], undefined>>[0]) {
        useWhyDidIUpdate('AutocompleteContgrol', props);
        const { accessorKey, id, header } = props.column.columnDef;
        const name = accessorKey ?? id;
        const { control, setValue } = useFormContext();
        const db = useLocalRealm();
        const { data } = useQuery({
            queryKey: [opts.objectType, opts.labelProperty],
            queryFn: () => {
                if (db == null) throw new Error('no db');
                return Promise.resolve([...db.objects<U>(opts.objectType).sorted(opts.labelProperty)]);
            }
        });
        const isOptionEqualToValue = useCallback((option: any, value: any) => {
            return option?._id?.toHexString() === value?._id.toHexString()
        }, [])
        const onChange = useCallback(
            (event: React.SyntheticEvent, value: AutoOption[]) => {
                console.log(`onchange`, name, value, event);
                setValue(
                    name,
                    value
                );
            },
            [name, setValue]
        );
        return (
            <AutocompleteElement
                name={name}
                control={control}
                label={header}
                options={data ?? []}
                multiple={opts.multiple}
                autocompleteProps={{
                    isOptionEqualToValue,
                    getOptionLabel: (option: U) => getProperty(opts.labelProperty as Path<U>, option) ?? 'n/a',
                    onChange
                }}
            />
        );
    };
}
