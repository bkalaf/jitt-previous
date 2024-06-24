import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { whenProperty } from '../../defs/when';
import { mediaVideoFlagsOptions } from '../../enums/flags';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const mediaDetails: MRT_ColumnDef<IProduct>[] = [
    helper.listOfPrimitive('awards', 'Awards', 'string'),
    helper.string('copyright', 'Copyright', undefined, { pattern: /[0-9]{4}/ }),
    helper.string('mediaSubtitle', 'SubTitle', undefined, { maxLength: 150 }),
    helper.string('mediaTitle', 'Title', undefined, { maxLength: 150 }),
    helper.text('blurb', 'Blurb', undefined, {})
] as MRT_ColumnDef<IProduct>[];

export const mediaBooksDetails: MRT_ColumnDef<IProduct>[] = [
    helper.listOfPrimitive('authors', 'Authors', 'string'),
    helper.enum('bookGenre', 'Genre', { enumKey: 'bookGenres' }),
    helper.enum('bookType', 'Book Type', { enumKey: 'bookTypes' }),
    helper.int('edition', 'Edition', { min: 1 }),
    helper.listOfPrimitive('illustrators', 'Illustrators', 'string'),
    helper.enum('language', 'Language', { enumKey: 'languages' }),
    helper.int('pages', 'Pages', { min: 0 }),
    helper.listOfPrimitive('publishers', 'Publishers', 'string')
] as MRT_ColumnDef<IProduct>[];

export const mediaVideosDetails: MRT_ColumnDef<IProduct>[] = [
    helper.listOfPrimitive('collectionOf', 'Collection Of', 'string'),
    helper.int('count', 'Count', { min: 1 }),
    helper.listOfPrimitive('directedBy', 'Directed By', 'string'),
    helper.listOfPrimitive('starring', 'Starring', 'string'),
    helper.enum('videoFormat', 'Format', { enumKey: 'videoFormatTypes' }),
    helper.enum('videoGenre', 'Genre', { enumKey: 'movieGenres' }),
    whenProperty('videoType', 'film', helper.enum('movieRating', 'Rating', { enumKey: 'movieRatings' })),
    helper.intMeasure('runtime', 'Runtime', 'min', { min: 1 }),
    helper.enum('videoType', 'Video Type', { enumKey: 'videoTypes' }),
    whenProperty('videoType', 'tv-show', helper.enum('tvRating', 'Rating', { enumKey: 'tvRatings' })),
    helper.flags('flags', 'Video Flags', mediaVideoFlagsOptions)
] as MRT_ColumnDef<IProduct>[];

export const mediaMusicDetails: MRT_ColumnDef<IProduct>[] = [
    helper.string('artist', 'Artist', undefined, { maxLength: 150 }),
    helper.enum('musicFormat', 'Format', { enumKey: 'musicFormatTypes' }),
    helper.enum('musicGenre', 'Genre', { enumKey: 'musicGenres' }),
    helper.listOfEmbed('tracks', 'Tracks', 'track')
] as MRT_ColumnDef<IProduct>[];

export const mediaVideoGameDetails: MRT_ColumnDef<IProduct>[] = [
    helper.enum('ESRBRating', 'ESRB Rating', { enumKey: 'ESRBRatings' }),
    helper.enum('consoleType', 'Console Type', { enumKey: 'consoleTypes' }),
    helper.string('studio', 'Studio', undefined, { maxLength: 150 })
] as MRT_ColumnDef<IProduct>[];
