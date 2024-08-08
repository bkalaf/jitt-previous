import { Button, ButtonProps } from '@mui/material';
import { useId } from 'react';
import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form-mui';
import { useFormResetSubmitEvent } from '../../../hooks/useFormResetSubmitEvent';
import { ignore } from '../../../common/ignore';

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
    const formContext = useForm<T>({
        defaultValues: defaultValues ?? ({} as DefaultValues<T>)
    });
    const { onSubmit, onReset } = useFormResetSubmitEvent(
        () => ignore,
        () => formContext.handleSubmit(handleSubmit)
    );
    const id = useId();
    return (
        <FormProvider {...formContext}>
            <form id={id} onReset={onReset} onSubmit={onSubmit}>
                {children}
                <Button color={color} type='button' variant='contained' onClick={onSubmit} disabled={!enabled()} className='disabled:bg-neutral-300 disabled:text-slate-600 disabled:blur-md'>
                    {label}
                </Button>
            </form>
        </FormProvider>
    );
}
