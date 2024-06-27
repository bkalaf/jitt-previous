import { PropertySchema } from 'realm';
export declare const isPrimitive: (type: string) => boolean;
export declare const isDataStructure: (type: string) => boolean;
export type ConvertFunction<T = any, U = any> = (value?: T) => U | undefined;
export declare const cnvrtPrimitives: () => Record<string, ConvertFunction<any>>;
export declare const cnvrt: (types: RealmSchema, objectType?: string) => {
    object: (value?: any, override?: boolean) => any;
    list: (value?: DBList<any> | any[]) => any[];
    set: (value?: DBSet<any> | any[]) => any[];
    dictionary: (value?: DBDictionary<any> | any[]) => {
        [k: string]: any;
    };
    mixed: (value: any) => any;
    objectId: (value?: any) => any;
};
export declare const $cnvrt: (types: RealmSchema, objectType?: string) => {
    [k: string]: ({ optional, default: defaultValue }: PropertySchema) => (value: any) => any;
};
export declare const ofType: (types: RealmSchema, propSchema: PropertySchema) => (value: any) => any;
export declare const convert: (types: RealmSchema, objectType: string) => (value?: any) => any;
