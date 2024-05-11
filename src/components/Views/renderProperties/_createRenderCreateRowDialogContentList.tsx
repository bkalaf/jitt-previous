// import { MRT_Cell, MRT_RowData, MRT_TableOptions } from 'material-react-table';
// import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import { DefaultValues, FieldErrors, FormContainer } from 'react-hook-form-mui';
// import { camelToProper } from '../../../common/text';
// import { useCallback } from 'react';
// import { useInsertIntoList } from '../../../hooks/useInsertIntoList';
// import { useInitial } from '../../../hooks/useInitial';

// export function createRenderCreateRowDialogContentList<T extends MRT_RowData, U extends MRT_RowData>(objectType: string, cell: MRT_Cell<T, DBList<U> | U[] | undefined>) {
//     return function RenderCreateRowDialogContentList({ table, internalEditComponents }: Parameters<Exclude<MRT_TableOptions<U>['renderCreateRowDialogContent'], undefined>>[0]) {
//         const init = useInitial(objectType);
//         const onCancel = useCallback(
//             (ev: React.MouseEvent) => {
//                 ev.stopPropagation();
//                 ev.preventDefault();
//                 table.setCreatingRow(null);
//             },
//             [table]
//         );
//         const { onSuccess, onError } = useInsertIntoList<U>(objectType, cell as any, table);
//         return (
//             <FormContainer criteriaMode='all' mode='onSubmit' reValidateMode='onChange' defaultValues={init() as DefaultValues<U>} onSuccess={onSuccess} onError={(err: FieldErrors<U>) => onError(new Error(err.root?.message))}>
//                 <DialogTitle>{camelToProper(objectType)}</DialogTitle>
//                 <DialogContent>{internalEditComponents}</DialogContent>
//                 <DialogActions>
//                     <Box className='flex justify-end w-full gap-x-2'>
//                         <Button className='inline-flex' type='button' color='metal' onClick={onCancel}>
//                             Cancel
//                         </Button>
//                         {/* <Button className='inline-flex' type='button' color='metal' onClick={}>
//                             Reset
//                         </Button> */}
//                         <Button className='inline-flex' type='submit' color='metal'>
//                             Submit
//                         </Button>
//                     </Box>
//                 </DialogActions>
//             </FormContainer>
//         );
//     };
// }

