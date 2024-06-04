import { FormControl, FormControlLabel, FormGroup, FormLabel, IconButton } from '@mui/material';
import { MRT_RowData } from 'material-react-table';
import React, { useCallback, useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { is } from '../../common/is';
import { useInvalidateCollection } from '../../hooks/useInvalidateCollection';
import { runTransaction } from '../../util/runTransaction';
import { useLocalRealm } from '../../hooks/useLocalRealm';
import { useEditControl } from '../../hooks/useEditControl';
import { ClothingCareMap } from '../../schema/laundryCare';

export function $createClothingCareControl<T extends MRT_RowData>(section: keyof typeof ClothingCareMap) {
    return function ClothingCareControl(props: EditFunctionParams<T>) {
        const { cell, row, column } = props;
        const { list, label, name } = useEditControl<T, string>(column, cell);
        // const section = name.split('.').reverse()[0] as keyof typeof ClothingCareMap;
        const options = useMemo(() => Object.entries(ClothingCareMap[section]).map(([k, v]) => ({ key: k, ...v })), []);
        const isSelected = useCallback(
            (item: string) => {
                return ((cell.getValue() as DBList<string> | string[]) ?? []).includes(item);
            },
            [cell]
        );
        const invalidator = useInvalidateCollection();
        const { mutate } = useMutation({
            onSuccess: () => invalidator(),
            mutationFn: (key: string) => {
                if (!list.includes(key)) {
                    if (is.dbList(list)) {
                        list.push(key);
                    } else {
                        const nextList = [...list, key];
                        (row.original as any)[name] = nextList;
                    }
                } else {
                    if (is.dbList(list)) {
                        const index = list.indexOf(key);
                        list.remove(index);
                    } else {
                        const nextList = [...list.filter((x) => x !== key)];
                        (row.original as any)[name] = nextList;
                    }
                }
                return Promise.resolve();
            }
        });
        const realm = useLocalRealm();
        const onClick = useCallback(
            (key: string) => (ev: MouseButtonEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                const func = () => mutate(key);
                runTransaction(realm, func);
            },
            [mutate, realm]
        );
        return (
            <FormControl className='flex w-full'>
                <FormLabel>{label}</FormLabel>
                <FormGroup row aria-labelledby=''>
                    {options.map(({ Element, text, key }) => (
                        <FormControlLabel
                            key={key}
                            label={text}
                            aria-selected={isSelected(key)}
                            control={
                                <IconButton key={key} className='inline-flex object-contain p-0 rounded-none h-7 w-7 aria-selected:bg-magenta-500 aria-unselected:bg-sky-400' aria-selected={isSelected(key)} onClick={onClick(key)}>
                                    <Element className='inline-block h-7 w-7' />
                                </IconButton>
                            }
                        />
                    ))}
                </FormGroup>
            </FormControl>
        );
    };
}
