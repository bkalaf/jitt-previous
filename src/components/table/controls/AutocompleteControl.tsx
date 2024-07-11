import { MRT_RowData } from 'material-react-table';
import { AutocompleteElement, useFormContext } from 'react-hook-form-mui';
import { useQuery } from '@tanstack/react-query';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { BSON } from 'realm';
import { useAutoComplete } from '../../../hooks/useAutoComplete';
import { useCallback, useMemo } from 'react';
import { createFilterOptions } from '@mui/material';
import { useEditControlBase } from '../../../hooks/useEditControlBase';
import { useGetLabelProperty } from '../../../hooks/useGetLabelProperty';
import { IconBtn } from '../../IconBtn';
import { faSquarePlus } from '@fortawesome/pro-solid-svg-icons';
import { CreateModal } from '../../Views/renderProperties/CreateModal';
import { useToggler } from '../../../hooks/useToggler';

export function AutocompleteControl<T extends MRT_RowData, U extends MRT_RowData & { _id: BSON.ObjectId }, TMultiple extends boolean = false>(props: EditFunctionParams<T, TMultiple extends true ? ListBack<U> : U | undefined>) {
    useWhyDidIUpdate('AutocompleteControl', props);
    const { invalid, freeSolo, readonly, validation, helperText, objectType, multiple, onChange, isDisabled, ...rest } = useEditControlBase<
        T,
        TMultiple extends true ? ListBack<U> : U | undefined,
        'objectType' | 'multiple' | 'freeSolo',
        HTMLSelectElement
    >(props, 'objectType', 'multiple', 'freeSolo');
    const formContext = useFormContext();
    const [open, toggleDialog] = useToggler(false);
    const finalCallback = useCallback(
        (result: any) => {
            formContext.setValue(rest.name, result);
        },
        [formContext, rest.name]
    );
    if (objectType == null) throw new Error('no objectType for lookup');
    const labelProperty = useGetLabelProperty(objectType)
    if (labelProperty == null) throw new Error(`no labelProperty for ${objectType} for lookup`);

    const db = useLocalRealm();
    const { data, isLoading } = useQuery({
        queryKey: [objectType, labelProperty],
        queryFn: () => {
            if (db == null) throw new Error('no db');
            return Promise.resolve(db.objects<U>(objectType));
        }
    });
    const { isOptionEqualToValue } = useAutoComplete<{ _id: BSON.ObjectId }>(
        labelProperty as any,
        ((x: { _id: BSON.ObjectId }, y: { _id: BSON.ObjectId }) => {
            const idA = typeof x._id === 'string' ? x : x._id.toHexString();
            const idB = typeof y._id === 'string' ? y : y._id.toHexString();
            return idA === idB;
        }) as any
    );
    // const filterOptions = useCallback((options: any[], { inputValue }: { inputValue: string }) => {
    //     return matchSorter(options, inputValue, { keys: [labelProperty]});
    // }, [])
    const filterOptions = useMemo(
        () =>
            createFilterOptions<AutoOption>({
                ignoreAccents: true,
                ignoreCase: true,
                limit: 400,
                trim: true,
                matchFrom: 'any',
                stringify: (option) => (option as any)[labelProperty]
            }),
        [labelProperty]
    );
    const $onChange = useCallback(
        (ev: any, newValue: any) => {
            onChange(ev, newValue);
            formContext.setValue(rest.name, newValue);
        },
        [formContext, onChange, rest.name]
    );
    return (
        <div className='flex justify-between w-full'>
            {open && <CreateModal open={open} toggleOpen={toggleDialog} finalCallback={finalCallback} objectType={objectType} />}
            <AutocompleteElement
                options={Array.from(data ?? []) ?? []}
                multiple={multiple}
                loading={isLoading}
                rules={validation}
                autocompleteProps={{
                    className: 'flex w-full read-only:bg-pink-400',
                    freeSolo,
                    autoHighlight: true,
                    isOptionEqualToValue,
                    getOptionLabel: (option) => option[labelProperty],
                    onChange: $onChange as any,
                    filterOptions: filterOptions,
                    selectOnFocus: true,
                    clearOnBlur: true,
                    handleHomeEndKeys: true,
                    readOnly: readonly,
                    disabled: isDisabled()
                }}
                textFieldProps={{
                    helperText: helperText
                }}
                aria-readonly={readonly}
                aria-invalid={invalid}
                {...rest}
            />
            <IconBtn className='flex w-auto h-full' icon={faSquarePlus} color='highlight' onClick={toggleDialog} tooltip='Insert a new record' />
        </div>
    );
}
