import React from 'react';
import './image-png.d.ts';
import './types';
import Realm, { Types, BSON } from 'realm';
import {
    MRT_ColumnDef,
    MRT_ColumnFiltersState,
    MRT_ColumnOrderState,
    MRT_ColumnPinningState,
    MRT_ColumnSizingState,
    MRT_DensityState,
    MRT_ExpandedState,
    MRT_GroupingState,
    MRT_RowSelectionState,
    MRT_SortingState,
    MRT_VisibilityState
} from 'material-react-table';
import './mui.d.ts';

declare global {
    export interface Window {
        columns: Record<string, MRT_ColumnDef<any>[]>;
    }
    export type PrimitiveRecord<T> = { value: T };
    export type JSPrimitives = string | number | null | Date | ArrayBuffer | boolean | BSON.ObjectId | BSON.UUID;
    export type IRowCell<T> = React.FunctionComponent<{ data: T; className?: string }>;
    export type IKVPCell<T> = React.FunctionComponent<{ id: string; value: T; className?: string }>;

    // eslint-disable-next-line @typescript-eslint/ban-types
    export type ListItemCellComponent<T> = (value: T) => React.FunctionComponent<{}>;

    export type EnumInfo = { key: string; text: string };
    export type ExtendedEnumInfo =
        | {
              text: string;
              key: string;
              classes: string;
          }
        | {
              text: string;
              key: string;
              selector: string;
          }
        | {
              text: string;
              key: string;
              classes: string;
              selector: string;
          };

    export type EnumInfos = string | EnumInfo | ExtendedEnumInfo;
    export type EnumMap<T extends string> = Record<T, EnumInfos>;
    export type EnumItem<T extends string = string> = { key: T; text: string; aliases: string[]; classes?: string; selector?: string };
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
    export type AutoOption = { key: string; text: string };
    export type Updater<T> = (x: T) => T;
    export type DBList<T> = Types.List<T>;
    export type DBDictionary<T> = Types.Dictionary<T>;
    export type DBSet<T> = Types.Set<T>;
    export type OnChangeFn<T> = React.Dispatch<React.SetStateAction<T>>;
    export type RealmObj<T> = T & Realm.Object<T>;
    export type RealmSchema = (Realm.ObjectSchema & { ctor?: Realm.ObjectClass & { update?: <T>(realm: Realm, obj: RealmObj<T>) => RealmObj<T>; labelProperty: string; asString: () => string } })[];

    export type TypeOf = 'string' | 'number' | 'bigint' | 'object' | 'undefined' | 'boolean' | 'symbol' | 'function';
    export type AppSettings<T> = Record<string, Record<string, T>>;

    export type AnyObject = Record<string, any>;
    export type FunctionProperties<T extends AnyObject> = {
        [P in keyof T]: T[P] extends AnyFunction | undefined ? P : never;
    }[keyof T];
    export type NonFunctionProperties<T extends AnyObject> = {
        [P in keyof T]: Exclude<T[P], undefined> extends BSON.ObjectId ? P
        : Exclude<T[P], undefined> extends BSON.UUID ? P
        : Exclude<T[P], undefined> extends string ? P
        : Exclude<T[P], undefined> extends number ? P
        : Exclude<T[P], undefined> extends boolean ? P
        : Exclude<T[P], undefined> extends Types.Data ? P
        : Exclude<T[P], undefined> extends Date ? P
        : Exclude<T[P], undefined> extends Types.Dictionary<any> ? P
        : Exclude<T[P], undefined> extends Types.List<any> ? P
        : Exclude<T[P], undefined> extends Types.Double ? P
        : '_id' extends keyof Exclude<T[P], undefined> ? P
        : Exclude<T[P], undefined> extends Record<string, unknown> ? P
        : never;
    }[keyof T];
    export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
    export type Not<A extends boolean> = A extends true ? false : true;
    // export type Or<A extends boolean, B extends boolean> = A extends true ? true : B extends true ? true : false;
    export type IsReadonly<O extends Record<any, any>, P extends keyof O> = Not<Equals<{ [_ in P]: O[P] }, { -readonly [_ in P]: O[P] }>>;

    export type GetReadOnlyProperties<A extends Record<string, any>> = Exclude<{ [P in keyof A]: IsReadonly<A, P> extends true ? P : never }[keyof A], undefined>;
    export type GetNonReadOnlyProperties<A extends Record<string, any>> = Exclude<{ [P in keyof A]: IsReadonly<A, P> extends true ? never : P }[keyof A], undefined>;
    export type GetWritableProperties<T extends AnyObject> = Extract<GetNonReadOnlyProperties<T>, NonFunctionProperties<T>>;
    /**
     * @deprecated
     */
    export type Writable<T extends AnyObject> = Pick<T, Exclude<Exclude<keyof T, FunctionProperties<T>>, GetReadOnlyProperties<T>>>;
    /**
     * @deprecated
     */
    export type InitialValue<T extends AnyObject> = {
        [P in keyof Writable<T>]: T[P] extends Realm.Types.List<infer R> ? R[]
        : T[P] extends Realm.Types.Dictionary<infer R> ? Record<string, R>
        : T[P] extends Realm.Types.Set<infer R> ? R[]
        : T[P] extends Realm.Types.LinkingObjects<any, any> ? never
        : T[P];
    };

    export type CanBeNullProperties<T extends AnyObject> = { [P in GetWritableProperties<T>]: undefined extends T[P] ? P : never }[GetWritableProperties<T>];
    export type NonNullableProperties<T extends AnyObject> = Exclude<GetWritableProperties<T>, CanBeNullProperties<T>>;
    export type InitValue<T extends AnyObject> = {
        [P in NonNullableProperties<T>]: T[P] extends Realm.Types.List<infer R> ? R[]
        : T[P] extends Realm.Types.Dictionary<infer R> ? Record<string, R>
        : T[P] extends Realm.Types.Set<infer R> ? R[]
        : T[P] extends Realm.Types.LinkingObjects<any, any> ? never
        : T[P] extends Record<string, unknown> ? InitValue<T[P]>
        : T[P];
    } & Partial<{
        [P in CanBeNullProperties<T>]: T[P] extends Realm.Types.List<infer R> ? R[]
        : T[P] extends Realm.Types.Dictionary<infer R> ? Record<string, R>
        : T[P] extends Realm.Types.Set<infer R> ? R[]
        : T[P] extends Realm.Types.LinkingObjects<any, any> ? never
        : Exclude<T[P], undefined> extends Record<string, unknown> ? InitValue<T[P]>
        : T[P];
    }>;

    export type InitFunction<T> = () => InitValue<T>;
    export type UpdateFunction<T> = (item: T) => T;
    export type ReferenceClass<T extends Record<string, unknown>> = Realm.ObjectClass<any> & { labelProperty: keyof T; init: InitFunction<T>; update: UpdateFunction<T> };
    export type EmbeddedClass<T extends Record<string, unknown>> = Realm.ObjectClass<any> & { liComponent: ListItemCellComponent<T>; init: InitFunction<T>; update: UpdateFunction<T> };
    export type MyClass<T extends Record<string, unknown>> = ReferenceClass<T> | EmbeddedClass<T>;
    export type EditFunctionParams<T extends MRT_RowData, TValue = any> = Parameters<Exclude<MRT_ColumnDef<T, TValue>['Edit'], undefined>>[0];
    export type EditFunctionComponent<T extends MRT_RowData, TValue = any> = React.FunctionComponent<EditFunctionParams<T, TValue>>;
    export type EditPrimitiveFunctionComponent<U extends JSPrimitives> = React.FunctionComponent<Parameters<Exclude<MRT_ColumnDef<PrimitiveRecord<U>, any>['Edit'], undefined>>[0]>;
    export type ListBack<T> = DBList<T> | T[] | undefined;
    export type DictionaryBack<T> = DBDictionary<T> | Record<string, T> | undefined;
    export type DictionaryItem<T> = { key: string; value: T };
    export type StandardDictionary<T> = DictionaryBack<DictionaryItem<T>>;
    export type CellFunctionParams<T extends MRT_RowData, TValue> = Parameters<Exclude<MRT_ColumnDef<T, TValue>['Cell'], undefined>>[0];
    export type CellFunctionComponent<T extends MRT_RowData, TValue = any> = React.FunctionComponent<CellFunctionParams<T, TValue>>;

    export type MouseEv<T extends HTMLElement> = ((ev: React.MouseEvent<T>) => void) | (() => void);
    export type MouseButtonEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
    export type ConsoleLoggingLevel = 'log' | 'info' | 'warn' | 'error' | 'none';
    export type ArrayOf<T> = T extends (infer R)[] ? Exclude<R, undefined> : never;

    export type CollectionNames = 'selfStorage' | 'facility' | 'auction' | 'bin' | 'barcode' | 'product' | 'mercariBrand' | 'brand' | 'mercariTaxonomy' | 'classifier' | 'productImage' | 'sku' | 'draft' | 'attachment';
    export type IConfig = {
        columnPinning: MRT_ColumnPinningState;

        expanded: MRT_ExpandedState;

        columnFilters: MRT_ColumnFiltersState;
        columnOrder: MRT_ColumnOrderState;
        grouping: MRT_GroupingState;
        sorting: MRT_SortingState;

        columnSizing: MRT_ColumnSizingState;
        columnVisibility: MRT_VisibilityState;
        rowSelection: MRT_RowSelectionState;

        density: MRT_DensityState;
        globalFilter: unknown;
        pagination: {
            pageIndex: number;
            pageSize: number;
        };

        showColumnFilters: boolean;
        showGlobalFilter: boolean;
    };

    export type IConfiguration = {
        collections: Partial<Record<CollectionNames, IConfig>>;
        zoomLevel: number;
    };

    export type FileSystemActions = FileMoved | FileDeleted | FileCopied | FolderRenamed | FolderRemoved | FolderCreated;

    export type FileMoved = {
        type: 'move';
        origin: string;
        destination: string;
    };
    export type FileDeleted = {
        type: 'delete';
        origin: string;
    };
    export type FileCopied = {
        type: 'copy';
        origin: string;
        destination: string;
    };
    export type FolderRenamed = {
        type: 'rename';
        origin: string;
        destination: string;
    };
    export type FolderRemoved = {
        type: 'remove';
        origin: string;
    };
    export type FolderCreated = {
        type: 'create';
        origin: string;
    };
}

export const i = 1;
