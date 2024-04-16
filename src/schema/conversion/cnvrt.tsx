import { Dayjs } from 'dayjs';
import { BSON, PropertySchema } from 'realm';
import { getProperty, objectMap } from '../../common/object';

export const isPrimitive = (type: string) => ['objectId', 'uuid', 'string', 'int', 'double', 'float', 'decimal128', 'bool', 'date', 'data'].includes(type);

export const cnvrt = (types: RealmSchema, objectType?: string) => ({
    string: (value?: string) => (value == null ? undefined : value != null && value.length === 0 ? undefined : value),
    objectId: (value?: string | BSON.ObjectId) => (value == null ? undefined : value instanceof BSON.ObjectId ? value : new BSON.ObjectId(value)),
    uuid: (value?: BSON.UUID | string) => (value == null ? undefined : value instanceof BSON.UUID ? value : new BSON.UUID(value)),
    int: (value?: string | number) => (value == null ? undefined : typeof value === 'string' ? parseInt(value, 10) : value),
    double: (value?: string | number) => (value == null ? undefined : typeof value === 'string' ? parseFloat(value) : value),
    decimal128: (value?: string | number) => (value == null ? undefined : typeof value === 'string' ? parseFloat(value) : value),
    float: (value?: string | number) => (value == null ? undefined : typeof value === 'string' ? parseFloat(value) : value),
    date: () => (value?: Date | string | Dayjs) => (value == null ? undefined : value instanceof Date ? value : typeof value === 'string' ? new Date(Date.parse(value)) : 'toDate' in value ? value.toDate() : undefined),
    bool: (value?: boolean | string) => (value == null ? undefined : typeof value === 'boolean' ? value : value === 'true' ? true : value === 'false' ? false : undefined),
    data: (value?: ArrayBuffer) => value,
    object: (value?: any, override = false): any => {
        if (objectType == null) throw new Error(`no objectType`);
        const schema = types.find((x) => x.name === objectType);
        if (schema == null) throw new Error(`schema not found for : ${objectType}`);
        const { embedded } = { embedded: false, ...schema };
        if (override || embedded) {
            return Object.fromEntries(
                Object.entries(schema.properties).map(([name, propSchema]) => {
                    if (typeof propSchema === 'string') throw new Error('string type');
                    return [name, ofType(types, propSchema)(getProperty(name, value))];
                })
            );
        }
        return cnvrt(types, objectType).objectId(value);
    },
    list: (value?: DBList<any> | any[]) => {
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
            return Object.fromEntries(Object.entries((value ?? {})).map(([k, v]) => [k, func({ optional: false } as any)(v)]));
        }
        const func = $cnvrt(types, objectType).object({ optional: false } as any);
        return Object.fromEntries(Object.entries((value ?? {})).map(([k, v]) => [k, func({ optional: false } as any)(v)]));
    }
});

function toConvert(func: (value?: any) => any) {
    return ({ optional, default: defaultValue }: PropertySchema) => (value: any) => {
        console.log(`value`, value);
        const opt = optional ?? false;
        const newValue = func(value);
        return newValue == null ? (opt ? newValue : (defaultValue as any)) : newValue;
    };
}

export const $cnvrt = (types: RealmSchema, objectType?: string) => objectMap(toConvert)(cnvrt(types, objectType));

export const ofType = (types: RealmSchema, propSchema: PropertySchema) => {
    const { type, objectType } = propSchema;
    return $cnvrt(types, objectType)[type](propSchema);
};

export const convert = (types: RealmSchema, objectType: string) => (value?: any) => cnvrt(types, objectType).object(value, true);