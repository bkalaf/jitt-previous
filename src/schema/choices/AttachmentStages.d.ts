export declare enum AttachmentStages {
    unknown = "unknown",
    moveFileToLocalFS = "move-file-to-local-fs",
    attachmentReview = "attachment-review",
    copyToDropbox = "copy-to-dropbox",
    generateSharedLink = "generate-shared-link",
    createTinyURLLink = "create-tiny-url-link",
    idle = "idle",
    deleteTinyURLLink = "delete-tiny-url-link",
    revokeSharedLink = "revoke-shared-link",
    removeFromDropbox = "remove-from-dropbox"
}
