"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaVideoGameDetails = exports.mediaMusicDetails = exports.mediaVideosDetails = exports.mediaBooksDetails = exports.mediaDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
const when_1 = require("../../defs/when");
const flags_1 = require("../../enums/flags");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.mediaDetails = [
    exports.helper.listOfPrimitive('awards', 'Awards', 'string'),
    exports.helper.string('copyright', 'Copyright', undefined, { pattern: /[0-9]{4}/ }),
    exports.helper.string('mediaSubtitle', 'SubTitle', undefined, { maxLength: 150 }),
    exports.helper.string('mediaTitle', 'Title', undefined, { maxLength: 150 }),
    exports.helper.text('blurb', 'Blurb', undefined, {})
];
exports.mediaBooksDetails = [
    exports.helper.listOfPrimitive('authors', 'Authors', 'string'),
    exports.helper.enum('bookGenre', 'Genre', { enumKey: 'bookGenres' }),
    exports.helper.enum('bookType', 'Book Type', { enumKey: 'bookTypes' }),
    exports.helper.int('edition', 'Edition', { min: 1 }),
    exports.helper.listOfPrimitive('illustrators', 'Illustrators', 'string'),
    exports.helper.enum('language', 'Language', { enumKey: 'languages' }),
    exports.helper.int('pages', 'Pages', { min: 0 }),
    exports.helper.listOfPrimitive('publishers', 'Publishers', 'string')
];
exports.mediaVideosDetails = [
    exports.helper.listOfPrimitive('collectionOf', 'Collection Of', 'string'),
    exports.helper.int('count', 'Count', { min: 1 }),
    exports.helper.listOfPrimitive('directedBy', 'Directed By', 'string'),
    exports.helper.listOfPrimitive('starring', 'Starring', 'string'),
    exports.helper.enum('videoFormat', 'Format', { enumKey: 'videoFormatTypes' }),
    exports.helper.enum('videoGenre', 'Genre', { enumKey: 'movieGenres' }),
    (0, when_1.whenProperty)('videoType', 'film', exports.helper.enum('movieRating', 'Rating', { enumKey: 'movieRatings' })),
    exports.helper.intMeasure('runtime', 'Runtime', 'min', { min: 1 }),
    exports.helper.enum('videoType', 'Video Type', { enumKey: 'videoTypes' }),
    (0, when_1.whenProperty)('videoType', 'tv-show', exports.helper.enum('tvRating', 'Rating', { enumKey: 'tvRatings' })),
    exports.helper.flags('flags', 'Video Flags', flags_1.mediaVideoFlagsOptions)
];
exports.mediaMusicDetails = [
    exports.helper.string('artist', 'Artist', undefined, { maxLength: 150 }),
    exports.helper.enum('musicFormat', 'Format', { enumKey: 'musicFormatTypes' }),
    exports.helper.enum('musicGenre', 'Genre', { enumKey: 'musicGenres' }),
    exports.helper.listOfEmbed('tracks', 'Tracks', 'track')
];
exports.mediaVideoGameDetails = [
    exports.helper.enum('ESRBRating', 'ESRB Rating', { enumKey: 'ESRBRatings' }),
    exports.helper.enum('consoleType', 'Console Type', { enumKey: 'consoleTypes' }),
    exports.helper.string('studio', 'Studio', undefined, { maxLength: 150 })
];
//# sourceMappingURL=mediaDetails.js.map