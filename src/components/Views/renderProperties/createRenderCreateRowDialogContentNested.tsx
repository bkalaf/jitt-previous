import { MRT_TableOptions } from 'material-react-table';
import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DefaultValues, FormContainer, useForm } from 'react-hook-form-mui';
import { camelToProper } from '../../../common/text';
import { useCallback, useMemo } from 'react';
import { useInitial } from '../../../hooks/useInitial';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateCollection } from '../../../hooks/useInvalidateCollection';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { runTransaction } from '../../../util/runTransaction';

export function createRenderCreateRowDialogContentNested(objectType: string, initializer: (init: () => any) => any, insert: (value: any) => void) {
    return function RenderCreateRowDialogContentList({ table, internalEditComponents }: Parameters<Exclude<MRT_TableOptions<any>['renderCreateRowDialogContent'], undefined>>[0]) {
        const init = useInitial(objectType);
        const defaultValues = useMemo(() => initializer(init) as DefaultValues<any>, [init]);
        const formContext = useForm({
            defaultValues,
            mode: 'onSubmit',
            criteriaMode: 'all',
            reValidateMode: 'onChange'
        });
        const onReset = useCallback(
            (ev: React.MouseEvent) => {
                ev.stopPropagation();
                ev.preventDefault();
                formContext.reset();
            },
            [formContext]
        );
        const onCancel = useCallback(
            (ev: React.MouseEvent) => {
                ev.stopPropagation();
                ev.preventDefault();
                table.setCreatingRow(null);
            },
            [table]
        );
        const invalidator = useInvalidateCollection();
        const { mutate } = useMutation({
            mutationFn: (values: any) => {
                return Promise.resolve(insert(values));
            },
            onSuccess: () => invalidator()
        });
        const realm = useLocalRealm();
        const handler = useMemo(() => {
            return formContext.handleSubmit((value: any) => {
                const func = () => mutate(value);
                runTransaction(realm, func);
            });
        }, [formContext, mutate, realm]);
        // const { onSuccess, onError } = useInsertIntoList<U>(objectType, cell as any, table);
        return (
            <FormContainer context={formContext} handleSubmit={handler}>
                <DialogTitle>{camelToProper(objectType)}</DialogTitle>
                <DialogContent>{internalEditComponents}</DialogContent>
                <DialogActions>
                    <Box className='flex justify-end w-full gap-x-2'>
                        <Button className='inline-flex' type='button' color='metal' onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button className='inline-flex' type='button' color='metal' onClick={onReset}>
                            Reset
                        </Button>
                        <Button className='inline-flex' type='submit' color='metal'>
                            Submit
                        </Button>
                    </Box>
                </DialogActions>
            </FormContainer>
        );
    };
}
