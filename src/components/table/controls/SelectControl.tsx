// import { MRT_RowData } from 'material-react-table';
// import { SelectElement } from 'react-hook-form-mui';
// import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
// import { useEditControlBase } from '../../../hooks/useEditControlBase';
// import { useMemo } from 'react';

import { Checkbox, Tooltip, createFilterOptions } from '@mui/material';
import { MRT_RowData } from 'material-react-table';
import { useMemo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useEditControlBase } from '../../../hooks/useEditControlBase';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { AutocompleteElement } from 'react-hook-form-mui';

// export function SelectControl<T extends MRT_RowData>(props: EditFunctionParams<T, string | undefined>) {
//     useWhyDidIUpdate('SelectControl', props);
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const { invalid, onChange: _, enumInfo, excludeKeys, readonly, keyType, isDisabled, ...rest } = useEditControlBase(props, 'enumInfo', 'keyType', 'excludeKeys');
//     if (enumInfo == null) throw new Error('no enumInfo in SelectControl');
//     const options = useMemo(() => enumInfo.asArray.filter((x) => !(excludeKeys ?? []).includes(x.key)).sort((a, b) => a.text.localeCompare(b.text)), [enumInfo.asArray, excludeKeys]);

//     // return <SelectElement options={options} valueKey='key' labelKey='text' aria-invalid={invalid} aria-readonly={readonly} disabled={isDisabled()} {...rest} />;
// }

export function AutoSelectControl<T extends MRT_RowData>(props: EditFunctionParams<T, any>) {
    useWhyDidIUpdate('AutocompleteControl', props);
    const { invalid, multiple, helperText, onChange, validation, readonly, enumInfo, isDisabled, excludeKeys, ...rest } = useEditControlBase<T, string, 'excludeKeys' | 'enumInfo' | 'multiple', Element>(props, 'enumInfo', 'multiple', 'excludeKeys');
    if (enumInfo == null) throw new Error('no enuminfo in MultiSelectControl');
    const formContext = useFormContext();
    const filterOptions = useMemo(
        () =>
            createFilterOptions<AutoOption>({
                ignoreAccents: true,
                ignoreCase: true,
                limit: 400,
                trim: true,
                matchFrom: 'any'
            }),
        []
    );
    const $onChange = useCallback(
        (ev: React.SyntheticEvent<Element>, newValue: { text: string; key: string }) => {
            // eslint-disable-next-line no-console
            console.info('MultiSelectControl.$onChange', newValue);
            onChange(undefined, typeof newValue === 'string' ? newValue : newValue.key);
            formContext.setValue(rest.name, typeof newValue === 'string' ? newValue : newValue.key);
        },
        [formContext, onChange, rest.name]
    );
    const options = useMemo(() => enumInfo.asArray.filter((x) => !(excludeKeys ?? []).includes(x.key)).sort((a, b) => a.text.localeCompare(b.text)), [enumInfo.asArray, excludeKeys]);
    console.log(`options`, options);
    return (
        <AutocompleteElement
            options={options ?? []}
            multiple={multiple}
            showCheckbox={multiple}
            rules={validation}
            autocompleteProps={{
                className: 'flex w-full read-only:bg-pink-400',
                autoHighlight: true,
                isOptionEqualToValue: (option: { text: string, key: string }, value: string | number | {key: string}) => {
                    console.info(`IOETV`, option, value);
                    return option == null ? false : (typeof option === 'string' ? option : option.key).localeCompare(typeof value === 'string' ? value : typeof value === 'number' ? value.toString() : value.key) === 0;
                },
                getOptionLabel: (option) => typeof option === 'string' ? option : option.text,
                onChange: $onChange as any,
                filterOptions: filterOptions,
                selectOnFocus: true,
                clearOnBlur: true,
                handleHomeEndKeys: true,
                readOnly: readonly,
                disabled: isDisabled(),
                renderOption: function InnerOption(props, option, { selected }, { getOptionLabel }) {
                    const { key, ...rest } = props as any;
                    const image = 'image' in option ? (option.image as string) : undefined;
                    const src = image ? ['file:///', 'C:/Users/bobby/OneDrive/Desktop/Code/jitt', image].join('/') : null;
                    console.info(`src`, src);
                    // const [src, setSrc] = useState<string | undefined>(undefined);
                    // useEffect(() => {
                    //     if (image != null) {
                    //         const fn = [__dirname, image].join('/');
                    //         const data = fs.readFileSync(fn).buffer;
                    //         const blob = new Blob([new Uint8Array(data)]);
                    //         const local = URL.createObjectURL(blob);
                    //         setSrc(local);
                    //         return () => {
                    //             if (local != null) URL.revokeObjectURL(local);
                    //         };
                    //     }
                    // }, [image]);
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