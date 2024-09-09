import { MRT_RowData } from 'material-react-table';
import { useQuery } from '@tanstack/react-query';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { useGetLabelProperty } from '../../../hooks/useGetLabelProperty';
import { standardizeFromEnumKey } from '../../../util/standardizeOptions';
import { AutocompleteProps, createFilterOptions } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { getProperty } from '../../../common/object/getProperty';
import { BSON } from 'realm';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export function isMasterEnumValue<T extends MRT_RowData>(value: T | MasterEnumValue): value is MasterEnumValue {
    return 'key' in value && 'text' in value && 'aliases' in value;
}
export function useLookupOptions<T extends MRT_RowData>(columnName: string, objectType: string, labelProp?: string, enumKey?: keyof MasterEnum) {
    const enumInfo = enumKey ? standardizeFromEnumKey(enumKey) : ({ asArray: [], asRecord: {} } as ReturnType<typeof standardizeFromEnumKey>);
    const labelProp2 = useGetLabelProperty(objectType ?? 'n/a');
    const labelProperty = labelProp ?? labelProp2 ?? 'text';
    const db = useLocalRealm();
    const { data, isLoading } = useQuery({
        queryKey: [objectType ?? enumKey ?? 'unknown'],
        queryFn: (): Promise<MasterEnumValue[] | T[]> => {
            if (db == null) throw new Error('no db');
            return (
                objectType != null && labelProperty != null ? Promise.resolve(Array.from(db.objects<T>(objectType).sorted(labelProperty)))
                : objectType != null ? Promise.resolve(Array.from(db.objects<T>(objectType)))
                : enumInfo != null ? Promise.resolve(enumInfo.asArray.sort((a, b) => a.text.localeCompare(b.text)))
                : Promise.resolve([])
            );
        }
    });
    const getOptionLabel: AutocompleteProps<MasterEnumValue | T, true, true, false>['getOptionLabel'] = useCallback(
        (option: any) => {
            const o = option as MasterEnumValue | T | undefined;
            return (
                o != null ?
                    isMasterEnumValue(o) ? o.text
                    :   (getProperty(labelProperty, o) as string)
                :   ''
            );
        },
        [labelProperty]
    );
    const isOptionEqualToValue: AutocompleteProps<MasterEnumValue | T, true, true, false>['isOptionEqualToValue'] = useCallback((option: MasterEnumValue | T, value: MasterEnumValue | T | string) => {
        if (isMasterEnumValue(option)) {
            return value != null && option.key === (typeof value === 'string' ? value : value.key);
        }
        return value != null && (option as any as { _id: BSON.ObjectId })._id.toHexString() === (value as any as { _id: BSON.ObjectId })._id.toHexString();
    }, []) as Exclude<AutocompleteProps<MasterEnumValue | T, true, true, false>['isOptionEqualToValue'], undefined>;
    const createOnChange: (fc: UseFormReturn<FieldValues, any, undefined>) => AutocompleteProps<MasterEnumValue | T, true | false, true, false>['onChange'] = useCallback(
        (formContext) => {
            return (ev, newValue) => {
                ev.preventDefault();
                ev.stopPropagation();
                const nextValue = Array.isArray(newValue) ? newValue.map(x => isMasterEnumValue(x) ? x.key : x) : isMasterEnumValue(newValue) ? newValue.key : newValue;
                formContext.setValue(columnName, nextValue);
            };
        },
        [columnName]
    ) as (fc: UseFormReturn<FieldValues, any, undefined>) => AutocompleteProps<MasterEnumValue | T, true | false, true, false>['onChange'];
    const filterOptions = useMemo(
        () =>
            createFilterOptions<T | MasterEnumValue>({
                ignoreAccents: true,
                ignoreCase: true,
                limit: 400,
                trim: true,
                matchFrom: 'any',
                stringify: (option) => (isMasterEnumValue(option) ? option.text : (getProperty(labelProperty, option) as string))
            }),
        [labelProperty]
    );
    return {
        data,
        isLoading,
        getOptionLabel,
        isOptionEqualToValue,
        filterOptions,
        createOnChange
    };
}
