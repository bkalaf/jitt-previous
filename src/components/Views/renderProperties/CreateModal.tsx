import { MRT_RowData } from 'material-react-table';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form-mui';
import { useCallback } from 'react';
import { useInitial } from '../../../hooks/useInitial';
import { Grid } from '../../Grid';
import { EditControls } from '../../controls/EditControls';
import { useRealmCreate } from '../../../hooks/useRealmCreate';
import { useDirectStaticColumns } from '../../../hooks/useDirectStaticColumns';
import { IClassification } from '../../../types';

export function CreateModal<T extends MRT_RowData>(props: { objectType: string; finalCallback: (result: T) => void; toggleOpen: () => void; open: boolean; classification: IClassification }) {
    const { objectType, finalCallback, open, toggleOpen } = props;
    const init = useInitial<T>(objectType);
    const handleSubmit = useRealmCreate<T>(objectType, toggleOpen, finalCallback);
    const formContext = useForm({
        defaultValues: init() as DefaultValues<T>
    });
    const onCancel = useCallback(
        (ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.reset();
            toggleOpen();
        },
        [formContext, toggleOpen]
    );
    const onReset = useCallback(
        (ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.reset();
        },
        [formContext]
    );
    const onSubmit = useCallback(
        (ev: React.MouseEvent) => {
            ev.preventDefault();
            ev.stopPropagation();
            formContext.handleSubmit((x) => handleSubmit(x))(ev);
        },
        [formContext, handleSubmit]
    );
    const columns = useDirectStaticColumns(objectType);
    return (
        <FormProvider {...formContext}>
            <form
                onReset={(ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                }}
                onSubmit={(ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                }}>
                <Dialog open={open} onClose={toggleOpen} maxWidth='lg'>
                    <DialogTitle>Creating ${objectType}</DialogTitle>
                    <DialogContent>
                        <Grid columns={4} gap={2} className='w-screen'>
                            <EditControls columns={columns} />
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Box className='flex w-full justify-end gap-x-2'>
                            <Button className='inline-flex' type='button' color='tertiary' onClick={onCancel}>
                                Cancel
                            </Button>
                            <Button className='inline-flex' type='button' onClick={onReset} color='tertiary'>
                                Reset
                            </Button>
                            <Button className='inline-flex' type='button' onClick={onSubmit} color='tertiary'>
                                Submit
                            </Button>
                        </Box>
                    </DialogActions>
                </Dialog>
            </form>
        </FormProvider>
    );
}
