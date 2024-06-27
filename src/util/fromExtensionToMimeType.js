"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromExtensionToMimeType = void 0;
function fromExtensionToMimeType(extension) {
    const mimeTypeMap = {
        avi: 'video/x-msvideo',
        bmp: 'image/bmp',
        csv: 'text/csv',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        gif: 'image/gif',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        json: 'application/json',
        mov: 'video/quicktime',
        mp4: 'video/mp4',
        mpeg: 'video/mpeg',
        pdf: 'application/pdf',
        png: 'image/png',
        svg: 'image/svg+xml',
        webm: 'video/webm',
        webp: 'image/webp',
        wmv: 'video/x-ms-wmv',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        xml: 'application/xml'
    };
    return mimeTypeMap[extension.slice(1)];
}
exports.fromExtensionToMimeType = fromExtensionToMimeType;
//# sourceMappingURL=fromExtensionToMimeType.js.map