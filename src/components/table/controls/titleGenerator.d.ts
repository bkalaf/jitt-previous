import { ISku } from '../../../types';
export declare function generateTitle(sku: ISku, maxLength?: boolean, importance?: number): string;
export type Section = 'attributes' | 'lists' | 'flags' | 'none' | 'specificiations' | 'measurements' | 'text';
export declare function sortToKey<T, U>(sorter: (x: T) => string, func?: (x: T) => U): (todo: T[], accum?: Record<string, U[]>) => Record<string, U[]>;
export declare function generateNarrative(sku: ISku, maxLength?: boolean, importance?: number): string;
