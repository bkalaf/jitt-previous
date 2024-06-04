import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import React, { useMemo } from 'react';
import { DefaultValues, FormProvider, UseFieldArrayReturn, useForm } from 'react-hook-form';
import { useInitial } from '../../hooks/useInitial';
import { useConvert } from '../../hooks/useConvert';
import { is } from '../../common/is';

export function DBListEditSubComponent<T extends MRT_RowData>(props: {
    // control: Control<FieldValues, any>;
    append: UseFieldArrayReturn['append'];
    // index: number;
    // value: Record<string, any>;
    columns: MRT_ColumnDef<T, any>[];
    isOpen: boolean;
    handleClose: () => void;
    objectType: string;
}) {
    const { append, handleClose, isOpen, columns, objectType } = props;
    const convertValue = useConvert(is.primitive(objectType) ? objectType : 'object', is.primitive(objectType) ? '' : (objectType ?? ''));
    const init = useInitial<T>(objectType);
    const defaultValues = useMemo(() => init(), [init]);
    const formContext = useForm({
        defaultValues: defaultValues as DefaultValues<T>
    });
    const EditComps = function () {
        return (
            <>
                {columns.map((x, index) => {
                    const Edit = x.Edit;
                    return function EditComponent() {
                        if (Edit == null) return null;
                        return <Edit key={index} cell={undefined as any} row={undefined as any} table={undefined as any} column={{ columnDef: x as any } as any} />;
                        // eslint-disable-next-line @typescript-eslint/ban-types
                    } as React.FunctionComponent<{}>;
                })}
            </>
        );
    };
    return (
        <FormProvider {...formContext}>
            <form>
                <Dialog open={isOpen} onClose={handleClose}>
                    <DialogTitle>Insert New List Item</DialogTitle>
                    <DialogContent>
                        <EditComps />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            type='button'
                            className='inline-flex'
                            color='metal'
                            onClick={formContext.handleSubmit((data) => {
                                console.info(`handleSubmit(data) = `, data);
                                const converted = convertValue(data);
                                console.info(`convertedValue`, converted);
                                append(converted);
                            })}
                        />
                    </DialogActions>
                </Dialog>
            </form>
        </FormProvider>
    );
}
