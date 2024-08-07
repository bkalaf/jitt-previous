import { Button, ButtonProps } from '@mui/material';
import { useId, useMemo } from 'react';
import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form-mui';
import { useFormEvents } from './useFormEvents';

export function TopBarButton<T extends FieldValues>({
    color,
    handleSubmit,
    enabled,
    label,
    defaultValues,
    children
}: {
    color: ButtonProps['color'];
    label: string;
    defaultValues?: DefaultValues<T>;
    enabled: () => boolean;
    handleSubmit: (x: T) => void;
    children?: Children;
}) {
    const onSubmitReset = useFormEvents();
    const formContext = useForm<T>({
        defaultValues: defaultValues ?? ({} as DefaultValues<T>)
    });
    const onSubmit = useMemo(() => formContext.handleSubmit(handleSubmit), [formContext, handleSubmit]);
    const id = useId();
    return (
        <FormProvider {...formContext}>
            <form id={id} onReset={onSubmitReset} onSubmit={onSubmitReset}>
                {children}
                <Button color={color} type='button' variant='contained' onClick={onSubmit} disabled={!enabled()} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
                    {label}
                </Button>
            </form>
        </FormProvider>
    );
}
