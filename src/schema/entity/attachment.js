"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
const realm_1 = require("realm");
const schemaName_1 = require("../../util/schemaName");
const _1 = require("../$");
const AttachmentStages_1 = require("../choices/AttachmentStages");
const AttachmentDisposition_1 = require("../choices/AttachmentDisposition");
const AttachmentType_1 = require("../choices/AttachmentType");
const EntityBase_1 = require("./EntityBase");
// type ROP = GetNonReadOnlyProperties<IAttachment>;
// type NFP = NonFunctionProperties<IAttachment>;
// type WRP = GetWritableProperties<IAttachment>;
// type InitialAttachment = InitValue<IAttachment>;
// type IsObject<T extends AnyObject> = keyof T extends '_id' ? T : never;
// type IsObject2<T extends AnyObject> = '_id' extends keyof T ? T : never;
// type I1 = IsObject<IAttachment>;
// type I2 = IsObject2<IAttachment>;
class Attachment extends EntityBase_1.EntityBase {
    static init() {
        return {
            _id: new realm_1.BSON.ObjectId(),
            fullpath: '',
            filename: '',
            sku: undefined,
            doNotUse: false,
            takenOn: new Date(Date.now()),
            attachmentType: AttachmentType_1.AttachmentType.unknown,
            attachmentDisposition: AttachmentDisposition_1.AttachmentDisposition.localOnly,
            attachmentPipelineStage: AttachmentStages_1.AttachmentStages.idle
        };
    }
    static update(item) {
        return item;
    }
}
exports.Attachment = Attachment;
Attachment.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.attachment()),
    primaryKey: '_id',
    properties: {
        _id: _1.$.objectId(),
        caption: _1.$.string.opt,
        fullpath: _1.$.string(),
        filename: _1.$.string(),
        extension: _1.$.string.opt,
        mimeType: _1.$.string.opt,
        sku: _1.$.sku(),
        doNotUse: _1.$.bool.default(false),
        takenOn: _1.$.date.opt,
        attachmentType: _1.$.string.default('unknown'),
        attachmentDisposition: _1.$.string.default(AttachmentDisposition_1.AttachmentDisposition.localOnly),
        attachmentPipelineStage: _1.$.string.default(AttachmentStages_1.AttachmentStages.idle),
        sharedLink: _1.$.string.opt,
        tinyURL: _1.$.string.opt
    }
};
Attachment.labelProperty = 'fullpath';
//# sourceMappingURL=attachment.js.map