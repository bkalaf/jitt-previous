"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentStages = void 0;
var AttachmentStages;
(function (AttachmentStages) {
    AttachmentStages["unknown"] = "unknown";
    AttachmentStages["moveFileToLocalFS"] = "move-file-to-local-fs";
    AttachmentStages["attachmentReview"] = "attachment-review";
    AttachmentStages["copyToDropbox"] = "copy-to-dropbox";
    AttachmentStages["generateSharedLink"] = "generate-shared-link";
    AttachmentStages["createTinyURLLink"] = "create-tiny-url-link";
    AttachmentStages["idle"] = "idle";
    AttachmentStages["deleteTinyURLLink"] = "delete-tiny-url-link";
    AttachmentStages["revokeSharedLink"] = "revoke-shared-link";
    AttachmentStages["removeFromDropbox"] = "remove-from-dropbox";
})(AttachmentStages || (exports.AttachmentStages = AttachmentStages = {}));
//# sourceMappingURL=AttachmentStages.js.map