import { Button, Dialog, DialogActions, DialogContent, Slide } from '@mui/material';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { SlideTransition } from './SlideTransition';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CheckboxElement, TextFieldElement } from 'react-hook-form-mui';

export function ImageInsertModal(props: { isOpen: boolean; toggleOpen: () => void; data: ArrayBuffer }) {
    useWhyDidIUpdate('ImageInsertModal', props);
    const { isOpen, toggleOpen } = props;
    const blob = useMemo(() => new Blob([new Uint8Array(props.data)]), []);
    const [src, setSrc] = useState<string>('');
    useEffect(() => {
        const local = URL.createObjectURL(blob);
        setSrc(local);
        return () => {
            if (local != null) URL.revokeObjectURL(local);
        };
    }, []);
    const formContext = useForm({
        defaultValues: {
            caption: '',
            removeBG: true
        }
    });

    const onSubmit = useCallback((ev: React.MouseEvent) => {
        formContext.handleSubmit(data => {
            
        })
    }, [])
    return (
        <Dialog onClose={toggleOpen} open={isOpen} TransitionComponent={SlideTransition} fullScreen>
            <DialogContent className='flex w-full h-full flex-col'>
                <div className='flex justify-center items-center'>
                    <img src={src} alt='' />
                </div>
            </DialogContent>
            <DialogActions>
                <FormProvider {...formContext}>
                    <TextFieldElement name='caption' type='text' />
                    <CheckboxElement name='removeBG' />
                    <Button type='button' variant='contained'>
                        Submit
                    </Button>
                </FormProvider>
            </DialogActions>
        </Dialog>
    );
}
