import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { AutocompleteElement } from 'react-hook-form-mui';
import { useQuery } from '@tanstack/react-query';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { BSON } from 'realm';
import { useControl } from './useControl';
import { useAutoComplete } from './useAutoComplete';

export function createAutocompleteControl<T extends MRT_RowData, U extends { _id: BSON.ObjectId }>(opts: { objectType: string; labelProperty: string; multiple?: boolean }) {
    return function AutocompleteControl(props: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Edit'], undefined>>[0]) {
        useWhyDidIUpdate('AutocompleteContgrol', props);
        // const { accessorKey, id, header } = props.column.columnDef;
        // const name = accessorKey ?? id;
        // const { control, setValue } = useFormContext();
        const { invalid, required, readonly, control, helperText, name, validation, onChange, label } = useControl(props.column);
        const db = useLocalRealm();
        const { data, isLoading } = useQuery({
            queryKey: [opts.objectType, opts.labelProperty],
            queryFn: () => {
                if (db == null) throw new Error('no db');
                return Promise.resolve([...db.objects<U>(opts.objectType).sorted(opts.labelProperty)]);
            }
        });
        // const isOptionEqualToValue = useCallback((option: any, value: any) => {
        //     return option?._id?.toHexString() === value?._id.toHexString()
        // }, [])
        const { getOptionLabel, isOptionEqualToValue } = useAutoComplete<{ _id: BSON.ObjectId }>(opts.labelProperty as any, (x: { _id: BSON.ObjectId }, y: { _id: BSON.ObjectId }) => x._id.toHexString() === y._id.toHexString());
        return (
            <AutocompleteElement
                name={name}
                control={control}
                label={label}
                options={data ?? []}
                multiple={opts.multiple}
                loading={isLoading}
                required={required}
                rules={validation}
                autocompleteProps={{
                    isOptionEqualToValue,
                    getOptionLabel,
                    onChange: onChange as any
                }}
                textFieldProps={{
                    helperText: helperText
                }}
                aria-readonly={readonly}
                aria-invalid={invalid}
            />
        );
    };
}
