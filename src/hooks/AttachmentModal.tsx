import { Dialog, DialogContent, DialogActions } from '@mui/material';
import { useMemo } from 'react';
import { IAttachment, ISku } from '../types';
import { useLocalRealm } from './useLocalRealm';
import { BSON } from 'realm';
import { FormProvider, useForm } from 'react-hook-form';
import { runTransaction } from '../util/runTransaction';
import { SelectElement, TextFieldElement } from 'react-hook-form-mui';
import { Grid } from '../components/Grid';
import { IDropboxContext } from '../contexts/DropboxContext';
import { AttachmentType } from '../schema/choices/AttachmentType';
import { useInvalidateCollection } from './useInvalidateCollection';
import { Attachment } from '../schema/entity/attachment';
import { useMutation } from '@tanstack/react-query';
import { LoadingButton } from '@mui/lab';
import { Item } from '../components/Item';

export function AttachmentModal(props: { open: boolean; toggleOpen: () => void; original: ISku; uploadAttachment: IDropboxContext['uploadAttachment']; }) {
    const { open, toggleOpen, original, uploadAttachment } = props;
    const formContext = useForm({
        defaultValues: {
            files: [] as File[],
            attachmentType: AttachmentType.unknown,
            caption: ''
        }
    });
    const realm = useLocalRealm();
    const invalidator = useInvalidateCollection('sku');
    const { mutate, isPending } = useMutation({
        mutationFn: async (args: { data: { caption: string, attachmentType: AttachmentType, files: File[] }, ev?: React.BaseSyntheticEvent<object, any, any> }) => {
            args.ev?.preventDefault();
            args.ev?.stopPropagation();
            try {
                const file = args.data.files[0];
                const { dropboxSharedLink, tinyURLLink } = await uploadAttachment(file, original);
                const attachment = {
                    _id: new BSON.ObjectId(),
                    fullpath: file.path,
                    filename: '',
                    doNotUse: false,
                    attachmentType: args.data.attachmentType,
                    takenOn: new Date(Date.now()),
                    caption: args.data.caption,
                    sku: original as any,
                    sharedLink: dropboxSharedLink,
                    tinyURL: tinyURLLink
                } as IAttachment;
                const func = () => {
                    const obj = realm.create<IAttachment>('attachment', attachment);
                    Attachment.update(obj);
                };
                runTransaction(realm, func);
                toggleOpen();
                await invalidator();
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            } 
        }
    })
    const onSubmit = useMemo(() => {
        return formContext.handleSubmit((d, e) => mutate({ data: d, ev: e }));
    }, [formContext, mutate]);
    return (
        <Dialog open={open} onClose={toggleOpen} maxWidth='xl'>
            <FormProvider {...formContext}>
                <DialogContent>
                    <Grid columns={3} gap={2}>
                        <Item>
                            <input type='file' multiple {...formContext.register('files')} />
                        </Item>
                        <Item>
                            <SelectElement name='attachmentType' options={[AttachmentType.unknown, AttachmentType.audio, AttachmentType.document, AttachmentType.video]} control={formContext.control} label='Attachment Type' />
                        </Item>
                        <Item>
                            <TextFieldElement name='caption' control={formContext.control} label='Caption' type='text' />
                        </Item>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <LoadingButton variant='contained' size='medium' color='metal' type='button' loading={isPending} onClick={onSubmit}>Submit</LoadingButton>
                    {/* <IconBtn tooltip='Submit' icon={faSend} type='button' text='Submit' color='metal' onClick={onSubmit} /> */}
                </DialogActions>
            </FormProvider>
        </Dialog>
    );
}
