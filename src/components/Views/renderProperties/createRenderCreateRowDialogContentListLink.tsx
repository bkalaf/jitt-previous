import { MRT_Cell, MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form-mui';
import { camelToProper } from '../../../common/text';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNotification } from '../../../hooks/useNotification';
import { useLocalRealm } from '../../../hooks/useLocalRealm';
import { runTransaction } from '../../../util/runTransaction';
import Realm from 'realm';
import { LinkingControl } from '../../LinkingControl';
import { setProperty } from '../../../common/object';

export function createRenderCreateRowDialogContentListLink<T extends MRT_RowData, U extends MRT_RowData>(objectType: string, labelProperty: string, cell: MRT_Cell<T, DBList<U> | U[] | undefined>) {
    return function RenderCreateRowDialogContentList({ table }: Parameters<Exclude<MRT_TableOptions<U>['renderCreateRowDialogContent'], undefined>>[0]) {
        const onCancel = useCallback(() => {
            table.setCreatingRow(null);
        }, [table]);
        const db = useLocalRealm();
        const { mutate } = useMutation({
            mutationFn: ({ value }: { value: U[] }) => {
                const current = cell.getValue() ?? [];
                const netAdd = value.filter((x) => !current.includes(x));
                console.log(`current`, current, `netAdd`, netAdd);
                const func = () => {
                    if (netAdd.length > 0) {
                        if (current instanceof Realm.Types.List) {
                            current.push(...netAdd);
                        } else {
                            const next = current.push(...netAdd)
                            console.log(`next`, next);
                            const result = setProperty(cell.column.columnDef.accessorKey ?? 'n/a', cell.row.original, next);
                            console.log(`result`, result);
                        }
                    }
                };
                runTransaction(db, func);
                return Promise.resolve(netAdd.length);
            }
        });
        const { onSuccess, onError } = useNotification(
            (count: number) => `${count} records linked`,
            (err: Error) => err.message,
            mutate
        );
        const defaults = useMemo(() => ({ value: [...(cell.getValue() ?? ([] as any))] as any }), [])
        const context = useForm({
            criteriaMode: 'all',
            defaultValues: defaults,
        });
        return (
            <FormProvider
                {...context}
                // onSuccess={(data, event) => {
                //     event?.preventDefault();
                //     event?.stopPropagation();
                //     onSuccess(data);
                // }}
                // onError={(err: FieldErrors<any>) => onError(new Error(err.root?.message))}
            >
                <DialogTitle>{camelToProper(objectType)}</DialogTitle>
                <DialogContent>
                    <LinkingControl cell={cell as any} objectType={objectType} labelProperty={labelProperty} />
                </DialogContent>
                <DialogActions>
                    <Box className='flex justify-end w-full gap-x-2'>
                        <Button className='inline-flex' type='button' color='metal' onClick={onCancel}>
                            Cancel
                        </Button>
                        <Button className='inline-flex' type='button' color='metal' onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            context.handleSubmit(onSuccess, (err: FieldErrors<any>) => onError(new Error(err.root?.message)))(ev);
                        }}>
                            Submit
                        </Button>
                    </Box>
                </DialogActions>
            </FormProvider>
        );
    };
}
