import React from 'react';
import './image-png.d.ts';
import './mui.d.ts';
import './types';
import { Types, BSON } from 'realm';
import { MRT_ColumnDef } from 'material-react-table';


declare global {
    export interface Window {
        columns: Record<string, MRT_ColumnDef<any>[]>;
    }
    export type PrimitiveRecord<T> = { value: T };
    export type JSPrimitives = string | number | null | Date | ArrayBuffer | boolean | BSON.ObjectId | BSON.UUID;
    export type IRowCell<T> = React.FunctionComponent<{ data: T; className?: string; }>;
    export type IKVPCell<T> = React.FunctionComponent<{ id: string, value: T, className?: string; }>

    // eslint-disable-next-line @typescript-eslint/ban-types
    export type ListItemCellComponent<T> = (value: T) => React.FunctionComponent<{}>

    export type EnumInfo = { key: string, text: string; };
    export type ExtendedEnumInfo = {
        text: string;
        key: string;
        classes: string;
        selector: string;
    };
    export type Predicate<T> = (x: T) => boolean;
    export type Children = React.ReactNode | React.ReactNode[] | undefined;
    export type Length<T extends any[]> = T['length'];
    export type Tail<T extends any[]> = ((...args: T) => any) extends (arg: any, ...rest: infer R) => any ? R : never;

    export type RealmPrimitives = 'objectId' | 'uuid' | 'string' | 'int' | 'double' | 'float' | 'decimal128' | 'bool' | 'date' | 'data';
    export type DBStorage<T> = {
        getItem(key: string): T;
        setItem(key: string, value: T): void;
    };
    export type TypeKind = 'primitive' | 'embedded' | 'collection';
    export type Compared = -1 | 0 | 1;
    export type AutoOption = { key: string, text: string; };
    export type Updater<T> = (x: T) => T;
    export type DBList<T> = Types.List<T>;
    export type DBDictionary<T> = Types.Dictionary<T>;
    export type DBSet<T> = Types.Set<T>;
    export type OnChangeFn<T> = React.Dispatch<React.SetStateAction<T>>;
    export type RealmObj<T> = T & Realm.Object<T>;
    export type RealmSchema = (Realm.ObjectSchema & { ctor?: Realm.ObjectClass & { update?: <T>(realm: Realm, obj: RealmObj<T>) => RealmObj<T>; }; })[];
    export type TypeOf = 'string' | 'number' | 'bigint' | 'object' | 'undefined' | 'boolean' | 'symbol' | 'function';
    export type AppSettings<T> = Record<string, Record<string, T>>;

    export type AnyObject = Record<string, any>;
    export type FunctionProperties<T extends AnyObject> = {
        [P in keyof T]: T[P] extends AnyFunction | undefined ? P : never;
    }[keyof T];
    export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
    export type Not<A extends boolean> = A extends true ? false : true;
    // export type Or<A extends boolean, B extends boolean> = A extends true ? true : B extends true ? true : false;
    export type IsReadonly<O extends Record<any, any>, P extends keyof O> = Not<Equals<{ [_ in P]: O[P] }, { -readonly [_ in P]: O[P] }>>;

    export type GetReadOnlyProperties<A extends Record<string, any>> = Exclude<{ [P in keyof A]: IsReadonly<A, P> extends true ? P : never }[keyof A], undefined>;
    export type GetNonReadOnlyProperties<A extends Record<string, any>> = Exclude<{ [P in keyof A]: IsReadonly<A, P> extends true ? never : P }[keyof A], undefined>;
    // eslint-disable-next-line @typescript-eslint/ban-types
    export type Writable<T extends AnyObject> = Pick<T, Exclude<Exclude<keyof T, FunctionProperties<T>>, GetReadOnlyProperties<T>>>;
    export type InitialValue<T extends AnyObject> = { [P in keyof Writable<T>]: T[P] extends Realm.Types.List<infer R> ? R[] : T[P] extends Realm.Types.Dictionary<infer R> ? Record<string, R> : T[P] extends Realm.Types.Set<infer R> ? R[] : T[P] };

    export type EditFunctionParams<T extends MRT_RowData, TValue = any> = Parameters<Exclude<MRT_ColumnDef<T, TValue>['Edit'], undefined>>[0];
    export type EditFunctionComponent<T extends MRT_RowData, TValue = any> = React.FunctionComponent<EditFunctionParams<T, TValue>>;
    export type EditPrimitiveFunctionComponent<U extends JSPrimitives> = React.FunctionComponent<Parameters<Exclude<MRT_ColumnDef<PrimitiveRecord<U>, any>['Edit'], undefined>>[0]>;
    export type ListBack<T> = DBList<T> | T[] | undefined;
    export type DictionaryBack<T> = DBDictionary<T> | Record<string, T> | undefined;
    export type DictionaryItem<T> = { key: string, value: T; }
    export type StandardDictionary<T> = DictionaryBack<DictionaryItem<T>>;
    export type CellFunctionParams<T extends MRT_RowData, TValue> = Parameters<Exclude<MRT_ColumnDef<T, TValue>['Cell'], undefined>>[0]
    export type CellFunctionComponent<T extends MRT_RowData, TValue = any> = React.FunctionComponent<CellFunctionParams<T, TValue>>;

    export type MouseEv<T extends HTMLElement> = (((ev: React.MouseEvent<T>) => void) | (() => void));
    export type MouseButtonEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
    export type ConsoleLoggingLevel = 'log' | 'info' | 'warn' | 'error' | 'none';
    export type ArrayOf<T> = T extends (infer R)[] ? Exclude<R, undefined> : never;
}

export const i = 1;