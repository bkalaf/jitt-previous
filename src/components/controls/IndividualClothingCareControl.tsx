import { FormControl, FormGroup, IconButton, Tooltip } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { ClothingCareMap } from '../../schema/laundryCare';
import { useFormContext } from 'react-hook-form-mui';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function IndividualClothingCareControl(section: keyof typeof ClothingCareMap, name: string, ...dependencies: IDependency<any, any>[]) {
    return function ClothingCareControl() {
        // const section = name.split('.').reverse()[0] as keyof typeof ClothingCareMap;
        const options = useMemo(() => Object.entries(ClothingCareMap[section]).map(([k, v]) => ({ key: k, ...v }) as { key: string; text: string; Element: React.FunctionComponent<{ className?: string }> }), []);
        const formContext = useFormContext();
        const list = formContext.watch(name) as string[];
        const isSelected = useCallback(
            (item: string) => {
                return (list ?? []).includes(item);
            },
            [list]
        );
        const onClick = useCallback(
            (key: string) => (ev: MouseButtonEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                if (isSelected(key)) {
                    formContext.setValue(
                        name,
                        list.filter((x) => x !== key)
                    );
                } else {
                    formContext.setValue(name, [...(list ?? []), key]);
                }
            },
            [formContext, isSelected, list]
        );
        const isDisabled = useCallback(() => false, []);
        return (
            !isDisabled() && (
                <FormControl>
                    {/* <FormLabel className='flex'>{label}</FormLabel> */}
                    <FormGroup row aria-labelledby='' className='grid grid-cols-10 gap-2'>
                        {options.map(({ Element, text, key }) => (
                            <Tooltip key={key} title={text}>
                                <IconButton key={key} className='flex h-10 w-10 rounded-none object-contain object-contain p-0 aria-selected:bg-red-500 aria-unselected:bg-sky-400' aria-selected={isSelected(key)} onClick={onClick(key)}>
                                    <Element className='inline-block hover:ring-2 hover:ring-red-500 h-10 w-10' />
                                </IconButton>
                            </Tooltip>
                            // <FormControlLabel
                            //     key={key}
                            //     label={text}
                            //     aria-selected={isSelected(key)}
                            //     className='flex'
                            //     control={
                            //         <IconButton key={key} className='aria-selected:bg-red-500 inline-flex h-7 w-7 rounded-none object-contain p-0 aria-unselected:bg-sky-400 flex' aria-selected={isSelected(key)} onClick={onClick(key)}>
                            //             <Element className='inline-block h-9 w-9' />
                            //         </IconButton>
                            //     }
                            // />
                        ))}
                    </FormGroup>
                </FormControl>
            )
            // <FormControl className='flex w-full'>
            //     <FormLabel>{label}</FormLabel>
            //     <FormGroup row aria-labelledby=''>
            //         {options.map(({ Element, text, key }) => (
            //             <FormControlLabel
            //                 key={key}
            //                 label={text}
            //                 aria-selected={isSelected(key)}
            //                 control={
            //                     <IconButton key={key} className='inline-flex object-contain p-0 rounded-none h-7 w-7 aria-selected:bg-magenta-500 aria-unselected:bg-sky-400' aria-selected={isSelected(key)} onClick={onClick(key)}>
            //                         <Element className='inline-block h-7 w-7' />
            //                     </IconButton>
            //                 }
            //             />
            //         ))}
            //     </FormGroup>
            // </FormControl>
        );
    };
}
