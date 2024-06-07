import Realm, { BSON } from "realm";
import { IAttachment, ISku } from '../../types';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { AttachmentStages } from '../choices/AttachmentStages';

export class Attachment extends Realm.Object<IAttachment> implements IAttachment {
    _id: BSON.ObjectId;
    caption?: string | undefined;
    fullpath: string;
    filename: string;
    extension?: string | undefined;
    mimeType?: string | undefined;
    sku: ISku;
    doNotUse: boolean;
    takenOn?: Date | undefined;
    attachmentType: AttachmentType;
    attachmentDisposition: AttachmentDisposition;
    attachmentPipelineStage: AttachmentStages;
    sharedLink?: string | undefined;
    tinyURL?: string | undefined;
    isIdle: boolean;
    nextStage: (this: IAttachment) => IAttachment;
    prevStage: (this: IAttachment) => IAttachment;
    nextDispo: (this: IAttachment) => IAttachment;
    prevDispo: (this: IAttachment) => IAttachment;
    fileTypeFolder?: string | undefined;
    originalFileFolder?: string | undefined;
    dropboxFileFolder?: string | undefined;
    moveToOriginal: (this: IAttachment) => void;
    copyToDropbox: (this: IAttachment) => void;
    identifiedAsVideo: (this: IAttachment) => void;
    identifiedAsAudio: (this: IAttachment) => void;
    identifiedAsDocument: (this: IAttachment) => void;
    provideCaption: (this: IAttachment, caption: string) => void;
    createSharedLink: (this: IAttachment) => string;
    revokeSharedLink: (this: IAttachment) => void;
    createTinyURLForLink: (this: IAttachment, link: string) => string;
    deleteTinyURLForLink: (this: IAttachment, link: string) => void;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.attachment()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            caption: $.string.opt,
            fullpath: $.string(),
            filename: $.string(),
            extension: $.string.opt,
            mimeType: $.string.opt,
            sku: $.sku(),
            doNotUse: $.bool.default(false),
            takenOn: $.date.opt,
            attachmentType: $.string.default('u')
        }
    }

}