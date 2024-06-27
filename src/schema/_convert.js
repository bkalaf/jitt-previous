// import { BSON } from 'realm';
// // let getConvert: (types: RealmSchema) => (objectType: string) => (obj: any) => Record<string, any>;
// // const string = (name: string, { optional }: PropertySchema) => (obj: any): [string, string | undefined] => {
// //     const opt = optional ?? true;
// //     const value = getProperty<any, string>(name, obj);
// //     if (opt) return [name, value != null && value.length === 0 ? undefined : value];
// //     return [name, value];
// // }
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const _oid = (value?: string | BSON.ObjectId) =>
//     value == null ? undefined
//     : value instanceof BSON.ObjectId ? value
//     : new BSON.ObjectId(value);
// // const objectId = (name: string, { optional }: PropertySchema) => (obj: any): [string, BSON.ObjectId] => {
// //     const value = getProperty<any, BSON.ObjectId | string>(name, obj);
// //     return [name, value instanceof BSON.ObjectId ? value : new BSON.ObjectId(value)];
// // }
// // const uuid = (name: string, { optional }: PropertySchema) => (obj: any): [string, BSON.UUID] => {
// //     const value = getProperty<any, BSON.UUID | string>(name, obj);
// //     return [name, value instanceof BSON.UUID ? value : new BSON.UUID(value)];
// // }
// // const int = (name: string, { optional, default: defaultValue }: PropertySchema) => (obj: any): [string, number | undefined] => {
// //     const value = getProperty<any, number | string>(name, obj);
// //     const def = optional ? undefined : defaultValue as number ?? 0;
// //     if (value == null) return [name, def];
// //     return [name, typeof value === 'string' ? parseInt(value, 10) : value]
// // }
// // const double = (name: string, { optional, default: defaultValue }: PropertySchema) => (obj: any): [string, number | undefined] => {
// //     const value = getProperty<any, number | string>(name, obj);
// //     const def = optional ? undefined : defaultValue as number ?? 0;
// //     if (value == null) return [name, def];
// //     return [name, typeof value === 'string' ? parseFloat(value) : value]
// // }
// // const bool = (name: string, { optional, default: defaultValue }: PropertySchema) => (obj: any): [string, boolean | undefined] => {
// //     const value = getProperty<any, boolean | string>(name, obj);
// //     const def = optional ? undefined : defaultValue as boolean ?? false;
// //     if (value == null) return [name, def];
// //     return [name, typeof value === 'boolean' ? value : value === 'true' ? true : value === 'false' ? false : undefined]
// // }
// // const date = (name: string, { optional }: PropertySchema) => (obj: any): [string, Date | undefined] => {
// //     const value = getProperty<any, Date | Dayjs | string>(name, obj);
// //     if (value == null) return [name, undefined];
// //     return [name, value instanceof Date ? value : typeof value === 'string' ? new Date(Date.parse(value)) : 'toDate' in value ? value.toDate() : undefined]
// // }
// // const object = (types: RealmSchema) => (name: string, { objectType }: PropertySchema) => (obj: any): [string, BSON.ObjectId | Record<string, any> | undefined] => {
// //     if (objectType == null) throw new Error(`no objectType`);
// //     const value = getProperty<any, Record<string, any>>(name, obj);
// //     const schema = types.find(x => x.name === 'objectType');
// //     if (schema == null) throw new Error(`schema not found for : ${objectType}`);
// //     const { embedded } = { embedded: false, ...schema };
// //     if (embedded) {
// //         return [name, getConvert(types)(objectType)(value ?? {})];
// //     }
// //     return [name, _oid(value?._id)];
// // }
//# sourceMappingURL=_convert.js.map