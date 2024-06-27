"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surroundSquareBracesNoIgnore = exports.surroundSquareBracesIgnore = exports.surroundQuotesNoIgnore = exports.surroundQuotesIgnore = exports.surroundParensNoIgnore = exports.surroundParensIgnore = exports.surround = void 0;
const surround = (left, right, ignoreIfNil = false) => (value) => value == null ?
    ignoreIfNil ? undefined
        : [left, value !== null && value !== void 0 ? value : '', right].join('')
    : [left, value !== null && value !== void 0 ? value : '', right].join('');
exports.surround = surround;
exports.surroundParensIgnore = (0, exports.surround)('(', ')', true);
exports.surroundParensNoIgnore = (0, exports.surround)('(', ')');
exports.surroundQuotesIgnore = (0, exports.surround)('"', '"', true);
exports.surroundQuotesNoIgnore = (0, exports.surround)('"', '"');
exports.surroundSquareBracesIgnore = (0, exports.surround)('[', ']', true);
exports.surroundSquareBracesNoIgnore = (0, exports.surround)('[', ']');
//# sourceMappingURL=surround.js.map