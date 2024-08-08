import { ISku } from '../types';
import { faPlusSquare } from '@fortawesome/pro-solid-svg-icons';
import { useToggler } from './useToggler';
import { IconBtn } from '../components/IconBtn';
import { useDropbox } from './useDropbox';
import { AttachmentModal } from './AttachmentModal';

export function renderAttachmentPanel() {
    return function AttachmentPanel(props: RenderDetailTabPanelProps<any>) {
        const original = props.row.original as ISku;
        const attachments = original.getAttachments;
        const [open, toggleOpen] = useToggler(false);
        const { removeAttachment, getPath, uploadAttachment } = useDropbox();

        return (
            <div className='flex h-auto w-full flex-col'>
                <div className='flex w-full justify-evenly'>
                    <IconBtn text='Insert' icon={faPlusSquare} color='important' tooltip='Insert a new attachment' onClick={toggleOpen} />
                </div>
                {open && <AttachmentModal open={open} toggleOpen={toggleOpen} original={original} uploadAttachment={uploadAttachment} />}
                <div className='flex w-full'>
                    <table>
                        <thead>
                            <tr>
                                <th>Filename</th>
                                <th>Ext</th>
                                <th>MimeType</th>
                                <th>Type</th>
                                <th>Active</th>
                                <th>Shared Link</th>
                                <th>TinyURL</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attachments.map((attachment, ix) => {
                                return (
                                    <tr key={ix}>
                                        <td>{attachment.filename}</td>
                                        <td>{attachment.extension}</td>
                                        <td>{attachment.mimeType}</td>
                                        <td>{attachment.attachmentType}</td>
                                        <td>{attachment.isActive}</td>
                                        <td>{attachment.sharedLink ?? ''}</td>
                                        <td>{attachment.tinyURL ?? ''}</td>
                                        <td>
                                            <button
                                                disabled={!attachment.isActive}
                                                onClick={() => {
                                                    try {
                                                        removeAttachment(getPath({ name: attachment.filename } as any, original)());
                                                    } catch (error) {
                                                        // eslint-disable-next-line no-console
                                                        console.error(error);
                                                    }
                                                }}>
                                                Unshare
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
}
