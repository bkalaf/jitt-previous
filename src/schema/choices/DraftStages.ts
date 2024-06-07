// export type AttachmentType = 'product-doc' | 'audio' | 'video';
// export type AttachmentPipelineStages = 'move-file-to-local-fs' | 'attachment-review' | 'copy-to-dropbox' | 'generate-shared-link' | 'create-tinyurl-link' | 'idle' | 'delete-tinyurl-link' | 'revoke-shared-link' | 'remove-from-dropbox';
// export type AttachmentDisposition = 'identify-attachment-type' | 'provide-caption' | 'approved' | 'denied' | 'not-shared' | 'shared-with-link' | 'shared-with-shortened-link';
export enum DraftStages {
    unknown = 'unknown',
    initialEntry = 'initial-entry',
    marketSearch = 'market-search',
    assessment = 'assessment',
    photography = 'photography',
    packAndSeal = 'pack-and-seal',
    drafted = 'drafted',
    forReview = 'for-review',
    listedForSale = 'listed-for-sale',
    impeded = 'impeded'
}
