import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DefaultValues, FormContainer } from 'react-hook-form-mui';
import { camelToProper } from '../../../common/text';
import { useUpdateRecord } from '../../../hooks/useUpdateRecord';
import { useCollectionRoute } from '../../../hooks/useCollectionRoute';
import { useCallback } from 'react';
import { useInitial } from '../../../hooks/useInitial';
import { useWhyDidIUpdate } from '../../../hooks/useWhyDidIUpdate';


export function createRenderEditRowDialogContent<T extends MRT_RowData>() {
    return function RenderEditRowDialogContent(props: Parameters<Exclude<MRT_TableOptions<T>['renderCreateRowDialogContent'], undefined>>[0]) {
        useWhyDidIUpdate('RenderEditRowDialogContent', props);
        const { table, internalEditComponents, row } = props;
        const collection = useCollectionRoute();
        const init = useInitial();
        const { onError, onSuccess } = useUpdateRecord<T>(table);
        const onCancel = useCallback(() => {
            table.setEditingRow(null);
        }, [table]);
        return (
            <FormContainer values={row.original.toJSON()} criteriaMode='all' mode='onSubmit' reValidateMode='onChange' defaultValues={init() as DefaultValues<T>} onError={onError} onSuccess={onSuccess}>
                <DialogTitle>{camelToProper(collection)}</DialogTitle>
                <DialogContent>{internalEditComponents}</DialogContent>
                <DialogActions>
                    {/* <MRT_EditActionButtons row={row} variant='text' table={table} /> */}
                    <Box className='flex justify-end w-full gap-x-2'>
                        <Button className='inline-flex' type='button' color='metal' onClick={onCancel}>
                            Cancel
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
