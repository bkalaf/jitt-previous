import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { AutocompleteElement, Path, useFormContext } from 'react-hook-form-mui';
import { useQuery } from '@tanstack/react-query';
import { useRealm } from '../../hooks/useRealm';
import { getProperty } from '../../common/object';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';

export function createAutocompleteControl<T extends MRT_RowData, U extends MRT_RowData>(opts: { objectType: string; labelProperty: string }) {
    return function AutocompleteControl(props: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Edit'], undefined>>[0]) {
        useWhyDidIUpdate('AutocompleteContgrol', props);
        const { accessorKey, id, header } = props.column.columnDef;
        const name = accessorKey ?? id;
        const { control } = useFormContext();
        const { db } = useRealm();
        const { data } = useQuery({
            queryKey: [opts.objectType, opts.labelProperty],
            queryFn: () => {
                if (db == null) throw new Error('no db');
                return Promise.resolve([...db.objects<U>(opts.objectType).sorted(opts.labelProperty)]);
            }
        });

        return (
            <AutocompleteElement
                name={name}
                control={control}
                label={header}
                options={data ?? []}
                autocompleteProps={{
                    getOptionLabel: (option: U) => getProperty(opts.labelProperty as Path<U>, option) ?? 'n/a'
                }}
            />
        );
    };
}
