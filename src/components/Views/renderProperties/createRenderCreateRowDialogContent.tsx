import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form-mui';
import { useUpdateRecord } from '../../../hooks/useUpdateRecord';
import { useCollectionRoute } from '../../../hooks/useCollectionRoute';
import { useCallback } from 'react';
import { useInitial } from '../../../hooks/useInitial';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';
import { camelToProper } from '../../../common/text/camelToProper';

export function createRenderCreateRowDialogContent<T extends MRT_RowData>() {
    return function RenderCreateRowDialogContent(props: Parameters<Exclude<MRT_TableOptions<T>['renderCreateRowDialogContent'], undefined>>[0]) {
        useWhyDidIUpdate('RenderEditRowDialogContent', props);
        const { table, internalEditComponents } = props;
        console.info(`internalEditComponents`, internalEditComponents);
        const collection = useCollectionRoute();
        const init = useInitial<T>(collection);
        const { handleSubmit } = useUpdateRecord<T>(table);
        const onCancel = useCallback(() => {
            table.setCreatingRow(null);
        }, [table]);
        const formContext = useForm({
            criteriaMode: 'all',
            defaultValues: init() as DefaultValues<T>,
            delayError: 5000
        });
        const onSubmit = useCallback(
            (ev: React.FormEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                formContext.handleSubmit((data: T) => handleSubmit(data))(ev);
            },
            [formContext, handleSubmit]
        );
        const onReset = useCallback(
            (ev: React.FormEvent) => {
                ev.preventDefault();
                ev.stopPropagation();
                formContext.reset(init() as T, {
                    keepErrors: true
                });
            },
            [formContext, init]
        );
        return (
            <FormProvider {...formContext}>
                <form onSubmit={onSubmit} onReset={onReset}>
                    <DialogTitle>{camelToProper(collection)}</DialogTitle>
                    <DialogContent>{internalEditComponents}</DialogContent>
                    <DialogActions>
                        {/* <MRT_EditActionButtons row={row} variant='text' table={table} /> */}
                        <Box className='flex w-full justify-end gap-x-2'>
                            <Button className='inline-flex' type='button' color='tertiary' onClick={onCancel}>
                                Cancel
                            </Button>
                            <Button className='inline-flex' type='reset' color='tertiary'>
                                Reset
                            </Button>
                            <Button className='inline-flex' type='submit' color='tertiary'>
                                Submit
                            </Button>
                        </Box>
                    </DialogActions>
                </form>
            </FormProvider>
            // <FormContainer criteriaMode='all' mode='onSubmit' reValidateMode='onChange' defaultValues={init() as DefaultValues<T>} handleSubmit={(ev: React.FormEvent) => {
            //     ev.preventDefault();
            //     ev.stopPropagation();
            //     handleSubmit()
            // }}>

            // </FormContainer>
        );
    };
}
