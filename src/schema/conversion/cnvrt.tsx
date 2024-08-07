/* eslint-disable no-console */
import dayjs, { Dayjs } from 'dayjs';
import Realm, { BSON, PropertySchema } from 'realm';
import { getProperty } from '../../common/object/getProperty';
import { objectMap } from '../../common/object/objectMap';

export const isPrimitive = (type: string) => ['objectId', 'uuid', 'string', 'int', 'double', 'float', 'decimal128', 'bool', 'date', 'data', 'mixed'].includes(type);
export const isDataStructure = (type: string) => ['list', 'dictionary', 'set'].includes(type);
export type ConvertFunction<T = any, U = any> = (value?: T) => U | undefined;
export const cnvrtPrimitives = (): Record<string, ConvertFunction<any>> => ({
    mixed: (value?: string) => (value == null ? undefined : value),
    string: (value?: string) =>
        value == null ? undefined
        : value != null && value.trim().length === 0 ? null
        : value.trim(),
    objectId: (value?: string | BSON.ObjectId) =>
        value == null ? undefined
        : value instanceof BSON.ObjectId ? value
        : new BSON.ObjectId(value),
    uuid: (value?: BSON.UUID | string) =>
        value == null ? undefined
        : value instanceof BSON.UUID ? value
        : new BSON.UUID(value),
    int: (value?: string | number) =>
        value == null ? undefined
        : typeof value === 'string' ? parseInt(value, 10)
        : value,
    double: (value?: string | number) =>
        value == null ? undefined
        : typeof value === 'string' ? parseFloat(value)
        : value,
    decimal128: (value?: string | number) =>
        value == null ? undefined
        : typeof value === 'string' ? parseFloat(value)
        : value,
    float: (value?: string | number) =>
        value == null ? undefined
        : typeof value === 'string' ? parseFloat(value)
        : value,
    date: (value?: Date | string | Dayjs) =>
        value == null ? undefined
        : value instanceof Date ? value
        : typeof value === 'string' ? new Date(Date.parse(value))
        : dayjs.isDayjs(value) ? value.toDate()
        : undefined,
    bool: (value?: boolean | string) =>
        value == null ? undefined
        : typeof value === 'boolean' ? value
        : value === 'true' ? true
        : value === 'false' ? false
        : undefined,
    data: (value?: ArrayBuffer) => value
});
// 'toDate' in value ? value.toDate()

export function normalizePropertySchema(type: any): Exclude<Realm.PropertySchema, string> {
    const isOptional = type.includes('?');
    const isList = type.includes('[]');
    const isDictionary = type.includes('{}');
    const isSet = type.includes('<>');
    const baseType = type.replaceAll('?', '').replaceAll('[]', '').replaceAll('{}', '').replaceAll('<>', '');
    const isObject = !isPrimitive(baseType);
    const objectType = isList || isDictionary || isSet || isObject ? baseType : undefined;
    const $type =
        isList ? 'list'
        : isDictionary ? 'dictionary'
        : isSet ? 'set'
        : isObject ? 'object'
        : baseType;
    return { type: $type, optional: isOptional, objectType };
}
export const cnvrt = (types: RealmSchema, objectType?: string) => ({
    ...(cnvrtPrimitives() as Record<'objectId', (value?: any) => any>),
    object: (value?: any, override = false): any => {
        console.log(`convert object`, objectType, types, value);
        if (objectType == null) throw new Error(`no objectType`);
        const schema = types.find((x) => (x as any)?.name === objectType);
        if (schema == null) throw new Error(`schema not found for : ${objectType}`);
        const { embedded } = { embedded: false, ...schema };
        return (
            value == null ? value
            : value instanceof Realm.Object && !(embedded || override) ? value
            : Object.fromEntries(
                    Object.entries(schema.properties).map(([name, propSchema]) => {
                        console.log(`...${name}`);
                        return [name, ofType(types, typeof propSchema === 'string' ? normalizePropertySchema(propSchema) : propSchema)(getProperty(name, value))];
                    })
                )
        );
        // if (override) {
        //     // || embedded
        // }
        // return cnvrt(types, objectType).objectId(value._id);
    },
    list: (value?: DBList<any> | any[]) => {
        console.log(`in list`, value);
        if (objectType == null) throw new Error(`no objectType`);
        if (isPrimitive(objectType)) {
            const func = $cnvrt(types, objectType)[objectType];
            return (value ?? []).map(func({ optional: false } as any));
        }
        const func = $cnvrt(types, objectType).object({ optional: false } as any);
        return (value ?? []).map(func);
    },
    set: (value?: DBSet<any> | any[]) => {
        if (objectType == null) throw new Error(`no objectType`);
        if (isPrimitive(objectType)) {
            const func = $cnvrt(types, objectType)[objectType];
            return (value ?? []).map(func({ optional: false } as any));
        }
        const func = $cnvrt(types, objectType).object({ optional: false } as any);
        return (value ?? []).map(func);
    },
    dictionary: (value?: DBDictionary<any> | any[]) => {
        if (objectType == null) throw new Error(`no objectType`);
        if (isPrimitive(objectType)) {
            const func = $cnvrt(types, objectType)[objectType];
            return Object.fromEntries(Object.entries(value ?? {}).map(([k, v]) => [k, func({ optional: false } as any)(v)]));
        }
        const func = $cnvrt(types, objectType).object({ optional: false } as any);
        return Object.fromEntries(Object.entries(value ?? {}).map(([k, v]) => [k, func({ optional: false } as any)(v)]));
    },
    mixed: (value: any) => value
});

function toConvert(func: (value?: any) => any) {
    return ({ optional, default: defaultValue }: PropertySchema) =>
        (value: any) => {
            console.log(`value`, value);
            const opt = optional ?? false;
            const newValue = func(value);
            return (
                newValue == null ?
                    opt ? newValue
                    :   (defaultValue as any)
                :   newValue
            );
        };
}

export const $cnvrt = (types: RealmSchema, objectType?: string) => objectMap(toConvert)(cnvrt(types, objectType));

export const ofType = (types: RealmSchema, propSchema: PropertySchema) => {
    const { type, objectType } = propSchema;
    return $cnvrt(types, objectType)[type](propSchema);
};

export const convert = (types: RealmSchema, objectType: string) => (value?: any) => (isPrimitive(objectType) ? cnvrtPrimitives()[objectType as keyof typeof cnvrtPrimitives](value) : cnvrt(types, objectType).object(value, true));
