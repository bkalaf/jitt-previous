import { MRT_Row, MRT_TableOptions } from 'material-react-table';
import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FormContainer, useForm } from 'react-hook-form-mui';
import { camelToProper } from '../../../common/text';
import { useCallback } from 'react';
import { useInitial } from '../../../hooks/useInitial';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { runTransaction } from '../../../util/runTransaction';
import { useConvertDictionaryItem, useConvertListItem } from '../../../hooks/useConvert';
import { is } from '../../../common/is';
import { isPrimitive } from '../../../schema/conversion/cnvrt';
import { useIsEmbedded } from './useIsEmbedded';

export function createRenderCreateRowDialogContentNestedForDictionary(objectType: string, dictionary: DictionaryBack<any>, row: MRT_Row<any>, name: string) {
    return function RenderCreateRowDialogContentNestedForDictionary({ table, internalEditComponents }: Parameters<Exclude<MRT_TableOptions<any>['renderCreateRowDialogContent'], undefined>>[0]) {
        const initializer = useInitial(objectType);
        const isEmbedded = useIsEmbedded();
        const formContext = useForm({
            defaultValues: () => Promise.resolve({
                key: '',
                value: isPrimitive(objectType) || isEmbedded(objectType) ? initializer() : undefined
            })
        });
        const convert = useConvertDictionaryItem(objectType);
        const invalidator = useInvalidateCollection();
        const { mutate: insertMutate } = useMutation({
            onSuccess: () => invalidator(),
            mutationFn: (values: any) => {
                console.log(`original values`, values);
                const converted = convert(values);
                console.log(`converted values`, converted);
                const { key, value } = converted;
                if (is.dbDictionary(dictionary)) {
                    dictionary.set(converted);
                } else {
                    const nextDictionary = { ...(dictionary ?? {}) }
                    nextDictionary[key] = value;
                    (row.original as any)[name] = nextDictionary;
                }
                return Promise.resolve();
            }
        });
        const realm = useLocalRealm();
        const submitClick = useCallback(
            (ev: React.MouseEvent<HTMLButtonElement>) => {
                ev.preventDefault();
                ev.stopPropagation();
                const func = () => formContext.handleSubmit((values: any) => insertMutate(values))(ev);
                runTransaction(realm, func);
            },
            [formContext, insertMutate, realm]
        );
        const cancelClick = useCallback(() => table.setCreatingRow(null), [table]);
        const resetClick = useCallback(() => formContext.reset(), [formContext]);

        return <FormContainer context={formContext}>
            <DialogTitle>{camelToProper(objectType)}</DialogTitle>
            <DialogContent>{internalEditComponents}</DialogContent>
            <DialogActions>
                <Box className='flex justify-end w-full gap-x-2'>
                    <Button className='inline-flex' type='button' color='metal' onClick={cancelClick}>
                        Cancel
                    </Button>
                    <Button className='inline-flex' type='button' color='metal' onClick={resetClick}>
                        Reset
                    </Button>
                    <Button className='inline-flex' type='button' color='metal' onClick={submitClick}>
                        Submit
                    </Button>
                </Box>
            </DialogActions>
        </FormContainer>;
    };
}

export function createRenderCreateRowDialogContentNestedForList(objectType: string, list: ListBack<any>, row: MRT_Row<any>, name: string) {
    return function RenderCreateRowDialogContentNestedForList({ table, internalEditComponents }: Parameters<Exclude<MRT_TableOptions<any>['renderCreateRowDialogContent'], undefined>>[0]) {
        const initializer = useInitial(objectType);
        const formContext = useForm({
            defaultValues: () => Promise.resolve(initializer())
        });
        const convert = useConvertListItem(objectType);
        const invalidator = useInvalidateCollection();
        const { mutate: insertMutate } = useMutation({
            onSuccess: () => invalidator(),
            mutationFn: (values: any) => {
                console.log(`original values`, values);
                const converted = convert(values);
                console.log(`converted values`, converted);
                const nextList = (list ?? []).push(converted);
                if (is.dbList(list)) {
                    return Promise.resolve();
                }
                row.original[name] = nextList;
                return Promise.resolve();
            }
        });
        const realm = useLocalRealm();
        const submitClick = useCallback(
            (ev: React.MouseEvent<HTMLButtonElement>) => {
                ev.preventDefault();
                ev.stopPropagation();
                const func = () => formContext.handleSubmit((values: any) => insertMutate(values))(ev);
                runTransaction(realm, func);
            },
            [formContext, insertMutate, realm]
        );
        const cancelClick = useCallback(() => table.setCreatingRow(null), [table]);
        const resetClick = useCallback(() => formContext.reset(), [formContext]);

        return <FormContainer context={formContext}>
            <DialogTitle>{camelToProper(objectType)}</DialogTitle>
            <DialogContent>{internalEditComponents}</DialogContent>
            <DialogActions>
                <Box className='flex justify-end w-full gap-x-2'>
                    <Button className='inline-flex' type='button' color='metal' onClick={cancelClick}>
                        Cancel
                    </Button>
                    <Button className='inline-flex' type='button' color='metal' onClick={resetClick}>
                        Reset
                    </Button>
                    <Button className='inline-flex' type='button' color='metal' onClick={submitClick}>
                        Submit
                    </Button>
                </Box>
            </DialogActions>
        </FormContainer>;
    };
}
