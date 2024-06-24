import Realm, { BSON } from "realm";
import { IAttachment, ISku } from '../../types';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { AttachmentStages } from '../choices/AttachmentStages';
import { AttachmentDisposition } from '../choices/AttachmentDisposition';
import { AttachmentType } from '../choices/AttachmentType';
import { EntityBase } from './EntityBase';

// type ROP = GetNonReadOnlyProperties<IAttachment>;
// type NFP = NonFunctionProperties<IAttachment>;
// type WRP = GetWritableProperties<IAttachment>;
// type InitialAttachment = InitValue<IAttachment>;
// type IsObject<T extends AnyObject> = keyof T extends '_id' ? T : never;
// type IsObject2<T extends AnyObject> = '_id' extends keyof T ? T : never;

// type I1 = IsObject<IAttachment>;
// type I2 = IsObject2<IAttachment>;
export class Attachment extends EntityBase<IAttachment> implements IAttachment {
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
            attachmentType: $.string.default('unknown'),
            attachmentDisposition: $.string.default(AttachmentDisposition.localOnly),
            attachmentPipelineStage: $.string.default(AttachmentStages.idle),
            sharedLink: $.string.opt,
            tinyURL: $.string.opt
        }
    }
    static labelProperty = 'fullpath';
    static init(): InitValue<IAttachment> {
        return {
            _id: new BSON.ObjectId(),
            fullpath: '',
            filename: '',
            sku: undefined as any,
            doNotUse: false,
            takenOn: new Date(Date.now()),
            attachmentType: AttachmentType.unknown,
            attachmentDisposition: AttachmentDisposition.localOnly,
            attachmentPipelineStage: AttachmentStages.idle
        }
    }
    static update(item: IAttachment) {
        return item;
    }
}