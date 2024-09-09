import { MRT_RowData } from 'material-react-table';
import { AutocompleteElement, useFormContext } from 'react-hook-form-mui';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { BSON } from 'realm';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Checkbox, Tooltip, createFilterOptions } from '@mui/material';
import { useEditControlBase } from '../../../hooks/useEditControlBase';
import { useGetLabelProperty } from '../../../hooks/useGetLabelProperty';
import { IconBtn } from '../../IconBtn';
import { faSquarePlus } from '@fortawesome/pro-solid-svg-icons';
import { CreateModal } from '../../Views/renderProperties/CreateModal';
import { useToggler } from '../../../hooks/useToggler';
import { deepEqual } from '../../../common/deepEqual';
import * as fs from 'graceful-fs';
import { useLookupOptions } from './useLookupOptions';
import { CreateHashTagAssignmentModal } from '../../Views/renderProperties/CreateHashTagAssignmentModal';
import { IClassification } from '../../../types';

export function AutocompleteControl<T extends MRT_RowData, U extends MRT_RowData & { _id: BSON.ObjectId }, TMultiple extends boolean = false>(props: EditFunctionParams<T, TMultiple extends true ? ListBack<U> : U | undefined>) {
    useWhyDidIUpdate('AutocompleteControl', props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { invalid, freeSolo, readonly, validation, helperText, objectType, multiple, onChange, isDisabled, enumInfo, ...rest } = useEditControlBase<
        T,
        TMultiple extends true ? ListBack<U> : U | undefined,
        'objectType' | 'multiple' | 'freeSolo' | 'enumInfo',
        HTMLSelectElement
    >(props, 'objectType', 'multiple', 'freeSolo', 'enumInfo');
    const ModalComponent = useMemo(() => (objectType === 'hashTagAssignment' ? CreateHashTagAssignmentModal : CreateModal), [objectType]) as React.FunctionComponent<{
        open: boolean;
        toggleOpen: () => void;
        objectType: string;
        finalCallback: (result: T) => void;
        classification: IClassification;
    }>;
    const formContext = useFormContext();
    const [open, toggleOpen] = useToggler(false);
    const finalCallback = useCallback(
        (result: any) => {
            formContext.setValue(rest.name, result);
        },
        [formContext, rest.name]
    );
    // if (objectType == null) throw new Error('no objectType for lookup');
    const labelProperty = useGetLabelProperty(objectType ?? 'n/a') ?? 'text';
    // const liComponent = useGetLIComponent(objectType ?? 'n/a');

    // const db = useLocalRealm();
    // const { data, isLoading } = useQuery({
    //     queryKey: [objectType ?? rest.name],
    //     queryFn: (): Promise<any> => {
    //         if (db == null) throw new Error('no db');
    //         return objectType != null && labelProperty != null ? Promise.resolve(Array.from(db.objects<U>(objectType).sorted(labelProperty))) : objectType != null ? Promise.resolve(Array.from(db.objects<U>(objectType))) : enumInfo != null ? Promise.resolve(enumInfo.asArray.sort((a, b) => a.text.localeCompare(b.text))) : Promise.resolve([]);
    //     }
    // });
    const { data, isLoading } = useLookupOptions(rest.name, objectType ?? 'n/a');
    const isOptionEqualToValue = useCallback((option: any, value: any) => {
        // console.info(`isOptionEqual`, `option`, option, `value`, value);
        const result = deepEqual(option, value);
        return result;
    }, []);
    // const { isOptionEqualToValue } = useAutoComplete<{ _id: BSON.ObjectId }>(
    //     labelProperty as any,
    //     ((x: { _id: BSON.ObjectId }, y: { _id: BSON.ObjectId }) => {
    //         const idA = typeof x._id === 'string' ? x : x._id.toHexString();
    //         const idB = typeof y._id === 'string' ? y : y._id.toHexString();
    //         return idA === idB;
    //     }) as any
    // );
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
            // console.log(`$onChange(AutocompleteElement)`, ev, newValue);
            onChange(ev, newValue);
            formContext.setValue(rest.name, newValue);
        },
        [formContext, onChange, rest.name]
    );
    /* {open && objectType && <CreateModal open={open} toggleOpen={toggleDialog} finalCallback={finalCallback} objectType={objectType} />} */
    return (
        <div className='flex w-full justify-between'>
            {open && objectType && <ModalComponent open={open} toggleOpen={toggleOpen} objectType={objectType} finalCallback={finalCallback} classification={formContext.getValues() as any} />}
            <AutocompleteElement
                options={Array.from(data ?? []) ?? []}
                multiple={multiple}
                loading={isLoading}
                showCheckbox={multiple}
                rules={validation}
                autocompleteProps={{
                    className: 'flex w-full read-only:bg-pink-400',
                    freeSolo,
                    autoHighlight: true,
                    isOptionEqualToValue,
                    getOptionLabel: (option) => option[labelProperty ?? ''],
                    onChange: $onChange as any,
                    filterOptions: filterOptions,
                    selectOnFocus: true,
                    clearOnBlur: true,
                    handleHomeEndKeys: true,
                    readOnly: readonly,
                    disabled: isDisabled(),
                    renderOption:
                        objectType == null ?
                            function InnerOption(props, option, { selected }, { getOptionLabel }) {
                                const { key, ...rest } = props as any;
                                const image = 'image' in option ? (option.image as string) : undefined;
                                console.error('about to useState');
                                const [src, setSrc] = useState<string | undefined>(undefined);
                                console.error('about to useEffect');
                                useEffect(() => {
                                    if (image != null) {
                                        const fn = [__dirname, image].join('/');
                                        const data = fs.readFileSync(fn).buffer;
                                        const blob = new Blob([new Uint8Array(data)]);
                                        const local = URL.createObjectURL(blob);
                                        setSrc(local);
                                        return () => {
                                            if (local != null) URL.revokeObjectURL(local);
                                        };
                                    }
                                }, [image]);
                                return (
                                    multiple ?
                                        src != null ?
                                            <Tooltip title={<img src={src} className='block object-contain aria-selected:ring-4 aria-selected:ring-red-500' width={400} height={400} />}>
                                                <li key={key} {...rest}>
                                                    <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                                                    {getOptionLabel(option)}
                                                </li>
                                            </Tooltip>
                                        :   <li key={key} {...rest}>
                                                <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                                                {getOptionLabel(option)}
                                            </li>
                                    : src != null ?
                                        <Tooltip title={<img src={src} className='block object-contain aria-selected:ring-4 aria-selected:ring-red-500' width={400} height={400} />}>
                                            <li key={key} {...rest}>
                                                {getOptionLabel(option)}
                                            </li>
                                        </Tooltip>
                                    :   <li key={key} {...rest}>
                                            {getOptionLabel(option)}
                                        </li>
                                );
                            }
                        :   undefined
                }}
                textFieldProps={{
                    helperText: helperText
                }}
                aria-readonly={readonly}
                aria-invalid={invalid}
                {...rest}
            />
            <IconBtn className='flex h-full w-auto' icon={faSquarePlus} color='highlight' onClick={toggleOpen} tooltip='Insert a new record' />
        </div>
    );
}
