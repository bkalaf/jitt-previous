import { BSON } from 'realm';
export declare function distinctBy<T>(comparator: (left: T, right: T) => boolean, arr: T[], accum?: T[]): T[];
export declare function distinct<T>(arr: T[], accum?: T[]): T[];
export declare const distinctByOID: <T extends {
    _id: BSON.ObjectId;
}>(arr: T[]) => T[];
export declare const distinctByString: <T extends string = string>(arr: T[]) => T[];
