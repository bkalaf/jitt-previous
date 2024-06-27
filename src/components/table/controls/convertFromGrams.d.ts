import { Opt } from '../../../types';
export declare function convertFromGrams(grams: Opt<number>): {
    pounds: number;
    ounces: number;
} | undefined;
export declare function convertToPoundsOunces(totalPounds: Opt<number>): {
    pounds: number;
    ounces: number;
} | undefined;
