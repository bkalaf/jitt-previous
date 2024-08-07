import { Dialog, DialogContent, DialogActions } from '@mui/material';
import { useMemo } from 'react';
import { IAttachment, ISku } from '../types';
import { faSend } from '@fortawesome/pro-solid-svg-icons';
import { useLocalRealm } from './useLocalRealm';
import { BSON } from 'realm';
import { FormProvider, useForm } from 'react-hook-form';
import { runTransaction } from '../util/runTransaction';
import { SelectElement, TextFieldElement } from 'react-hook-form-mui';
import { Grid, Item } from './Grid';
import { IDropboxContext } from '../contexts/DropboxContext';
import { IconBtn } from '../components/IconBtn';
import { AttachmentType } from '../schema/choices/AttachmentType';
import { useInvalidateCollection } from './useInvalidateCollection';


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
    const onSubmit = useMemo(() => {
        return formContext.handleSubmit(async (data, ev) => {
            ev?.preventDefault();
            ev?.stopPropagation();
            try {
                const file = data.files[0];
                const { dropboxSharedLink, tinyURLLink } = await uploadAttachment(file, original);
                const attachment = {
                    _id: new BSON.ObjectId(),
                    fullpath: file.path,
                    filename: '',
                    doNotUse: false,
                    attachmentType: data.attachmentType,
                    takenOn: new Date(Date.now()),
                    caption: data.caption,
                    sku: original as any,
                    sharedLink: dropboxSharedLink,
                    tinyURL: tinyURLLink
                } as InitValue<IAttachment>;
                const func = () => {
                    realm.create('attachment', attachment);
                };
                runTransaction(realm, func);
                toggleOpen();
                await invalidator();
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        });
    }, [formContext, invalidator, original, realm, toggleOpen, uploadAttachment]);
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
                    <IconBtn tooltip='Submit' icon={faSend} type='button' text='Submit' color='metal' onClick={onSubmit} />
                </DialogActions>
            </FormProvider>
        </Dialog>
    );
}
