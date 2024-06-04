import { MRT_RowData } from 'material-react-table';
import { AutocompleteElement } from 'react-hook-form-mui';
import { useQuery } from '@tanstack/react-query';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { BSON } from 'realm';
import { useEditControlBase } from '../../../hooks/useControl';
import { useAutoComplete } from '../../../hooks/useAutoComplete';
import { useGetLabelProperty } from '../../../hooks/useGetLIComponent';
import { useMemo } from 'react';
import { createFilterOptions } from '@mui/material';

export function AutocompleteControl<T extends MRT_RowData, U extends MRT_RowData & { _id: BSON.ObjectId }, TMultiple extends boolean = false>(props: EditFunctionParams<T, TMultiple extends true ? ListBack<U> : U | undefined>) {
    useWhyDidIUpdate('AutocompleteControl', props);
    const { invalid, freeSolo, readonly, validation, helperText, objectType, multiple, onChange, ...rest } = useEditControlBase<T, TMultiple extends true ? ListBack<U> : U | undefined, 'objectType' | 'multiple' | 'freeSolo', HTMLSelectElement>(
        props,
        'objectType',
        'multiple',
        'freeSolo'
    );
    if (objectType == null) throw new Error('no objectType for lookup');
    const labelProperty = useGetLabelProperty(objectType);
    if (labelProperty == null) throw new Error(`no labelProperty for ${objectType} for lookup`);

    const db = useLocalRealm();
    const { data, isLoading } = useQuery({
        queryKey: [objectType, labelProperty],
        queryFn: () => {
            if (db == null) throw new Error('no db');
            return Promise.resolve([...db.objects<U>(objectType).sorted(labelProperty)]);
        }
    });
    const { getOptionLabel, isOptionEqualToValue } = useAutoComplete<{ _id: BSON.ObjectId }>(labelProperty as any, (x: { _id: BSON.ObjectId }, y: { _id: BSON.ObjectId }) => {
        const idA = x._id.toHexString()
        const idB = y._id.toHexString()
        return idA.localeCompare(idB) as Compared
    });
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
            options={data ?? []}
            multiple={multiple}
            loading={isLoading}
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


