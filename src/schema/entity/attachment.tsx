import Realm, { BSON } from 'realm';
import { IAttachment, ISku } from '../../types';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { AttachmentType } from '../choices/AttachmentType';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { runTransaction } from '../../util/runTransaction';
import { getBaseName } from '../../common/path/getBaseName';
import { fromExtensionToMimeType } from '../../util/fromExtensionToMimeType';

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
    sharedLink?: string | undefined;
    tinyURL?: string | undefined;
    get isActive() {
        return this.sharedLink != null;
    }
    removeSharedLink() {
        const func = () => {
            this.sharedLink = undefined;
            this.tinyURL = undefined;
        }
        runTransaction(Attachment.localRealm, func)
    }
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
            sharedLink: $.string.opt,
            tinyURL: $.string.opt
        }
    };
    static labelProperty = 'fullpath';
    static init(): InitValue<IAttachment> {
        return {
            _id: new BSON.ObjectId(),
            fullpath: '',
            filename: '',
            sku: undefined as any,
            doNotUse: false,
            takenOn: new Date(Date.now()),
            attachmentType: AttachmentType.unknown
        };
    }
    static update(item: IAttachment) {
        const func = () => {
            if (item.filename == null || item.filename === '') {
                item.filename = getBaseName(item.fullpath);
                const ext = getBaseName(item.fullpath).split('.')[1];
                item.extension = ext;
                const mimeType = fromExtensionToMimeType('.'.concat(ext));
                item.mimeType = mimeType;
                if (item.attachmentType == null || item.attachmentType === AttachmentType.unknown) {
                    item.attachmentType =
                        mimeType != null ? 
                        mimeType.startsWith('application') ? AttachmentType.document
                        : mimeType.startsWith('video') ? AttachmentType.video
                        : mimeType.startsWith('image') ? AttachmentType.unknown
                        : AttachmentType.unknown : AttachmentType.unknown;
                }
            }
        }
        runTransaction(Attachment.localRealm, func);
        return item;
    }
    static columns: MRT_ColumnDef<IAttachment>[] = [];
}
