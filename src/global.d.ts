import React from 'react';
import './image-png.d.ts';
import { DetailTypes, IProduct, ISku } from './types';
import Realm, { Types, BSON } from 'realm';
import {
    MRT_ColumnDef,
    MRT_ColumnFiltersState,
    MRT_ColumnOrderState,
    MRT_ColumnPinningState,
    MRT_ColumnSizingState,
    MRT_DensityState,
    MRT_TableState,
    MRT_ExpandedState,
    MRT_GroupingState,
    MRT_RowSelectionState,
    MRT_SortingState,
    MRT_VisibilityState,
    MRT_RowData,
    MRT_TableOptions
} from 'material-react-table';
import './mui.d.ts';
import { UseFormReturn } from 'react-hook-form';

declare global {
    export type Opt<T> = T | undefined;
    export type AmperageUnitsOfMeasure = 'A' | 'mA';
    export type AngleUnitsOfMeasure = '°';
    export type CaliperSizeUnitsOfMeasure = 'mm' | '″';
    export type CapacityUnitsOfMeasure = 'GB' | 'TB' | 'MB';
    export type DataTransferRateUnitsOfMeasure = 'MB/s' | 'MBit/s';
    export type DensityUnitsOfMeasure = 'g/cm³' | 'lb/floz';
    export type DistanceUnitsOfMeasure = 'ft' | 'm';
    export type LengthUnitsOfMeasure = 'cm' | '″';
    export type MemorySpeedUnitsOfMeasure = 'MHz';
    export type MusicDurationUnitsOfMeasure = 's' | 'm';
    export type PowerConsumptionUnitsOfMeasure = 'WHr';
    export type RateOfEnergyCapacityUnitsOfMeasure = 'mAh';
    export type RotationalSpeedUnitsOfMeasure = 'RPM';
    export type VideoRuntimeUnitsOfMeasure = 'm' | 'h';
    export type VoltageUnitsOfMeasure = 'V' | 'mV';
    export type WattageUnitsOfMeasure = 'W';
    export type WeightUnitsOfMeasure = 'lb' | 'oz' | 'g';
    export type IMeasure<TUnit extends string> = {
        value: number;
        uom: TUnit;
    };
    export type TabPanelProps = {
        value: string;
        key: string;
        label: string;
        objectType: string;
        property?: string;
        detailType?: string | string[];
        Component: React.FunctionComponent<{ isCurrent: boolean; objectType: string; data: any[]; original: any }>;
    };
    export type JITTTableState<T extends MRT_RowData> = Partial<
        Pick<
            MRT_TableState<T>,
            | 'columnFilters'
            | 'columnOrder'
            | 'columnSizing'
            | 'columnVisibility'
            | 'rowSelection'
            | 'expanded'
            | 'grouping'
            | 'isLoading'
            | 'sorting'
            | 'pagination'
            | 'showGlobalFilter'
            | 'globalFilter'
            | 'columnPinning'
            | 'showColumnFilters'
            | 'density'
            | 'columnFilters'
        >
    >;
    export type OptionsParameters<T extends MRT_RowData, TKey extends keyof MRT_TableOptions<T>, TExclude extends MRT_TableOptions<T>[TKey]> = Parameters<Exclude<MRT_TableOptions<T>[TKey], TExclude | undefined>>[0];
    // Parameters<Exclude<MRT_TableOptions<T>['muiTableBodyRowProps'], TableRowProps | undefined>>[0];
    export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
    export type OnCollectionSettingChange<T extends MRT_RowData, TKey extends keyof MRT_TableState<T>> = StateSetter<MRT_TableState<T>[TKey]>;
    export type OnTableStateChange<T extends MRT_RowData, TKey extends keyof MRT_TableOptions<T>> = StateSetter<Exclude<MRT_TableOptions<T>[TKey], undefined>>;
    export type Sections = 'attributes' | 'none' | 'measurements' | 'lists' | 'flags' | 'specifications' | 'shipping' | 'text';
    export type SkuGetter<T = string> = (sku: ISku) => T | undefined;
    export type Len1<TArr extends any[]> = ((...args: TArr) => any) extends (...[x, ...args]: [any, ...infer R]) => any ? R['length'] : never;
    export type Last<TArr extends any[]> = TArr[Len1<TArr>];
    export type IDependencyEqualTo<T extends MRT_RowData, TKey extends keyof T> = {
        equalTo: T[TKey];
    };
    export type IDependencyNull = {
        isNull: true;
    };
    export type IDependencyEmpty = {
        isEmpty: true;
    };
    export type IDependencyIn<T extends MRT_RowData, TKey extends keyof T> = {
        in: T[TKey][];
    };

    export type IDependencyHasOneOf<T extends MRT_RowData, TKey extends keyof T> = {
        hasOneOf: ArrayOf<T[TKey]>[];
    };
    export type IDependencyUnary<T extends MRT_RowData, TKey extends keyof T> = [kind: 'not' | null, left: IDeps<T, TKey>];
    export type IDependencyBinary<T extends MRT_RowData, TKey extends keyof T> = [kind: 'and' | 'or', left: IDeps<T, TKey>, right: IDeps<T, TKey>];
    export type IDeps<T extends MRT_RowData, TKey extends keyof T> = IDependencyEmpty | IDependencyNull | IDependencyEqualTo<T, TKey> | IDependencyIn<T, TKey> | IDependencyUnary<T, TKey> | IDependencyBinary<T, TKey> | IDependencyHasOneOf<T, TKey>;
    export type IDependency<T extends MRT_RowData, TKey extends keyof T> = {
        type: 'enable' | 'disable';
        property: TKey;
        dependency: IDeps<T, TKey>;
        isLocal?: boolean;
    };
    export type OnChangeFn = (formContext: UseFormReturn<any, any, any>, oldValue: any, newValue: any) => void;
    // export interface Window {
    //     columns: Record<string, <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[]>;
    // }
    export type PrimitiveRecord<T> = { value: T };
    export type JSPrimitives = string | number | null | Date | ArrayBuffer | boolean | BSON.ObjectId | BSON.UUID;
    export type IRowCell<T> = React.FunctionComponent<{ data: T; className?: string }>;
    export type IKVPCell<T> = React.FunctionComponent<{ id: string; value: T; className?: string }>;

    // eslint-disable-next-line @typescript-eslint/ban-types
    export type ListItemCellComponent<T> = (value?: T) => React.FunctionComponent<{}>;
    export type StringifyComponent<T> = (value?: T, emptyStringForNull?: boolean) => () => string | undefined;
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
    export type JITTColumns<T> = ((...dependencies: IDependency<any, any>[]) => MRT_ColumnDef<T>[]) | MRT_ColumnDef<T>[];
    export type InitFunction<T> = () => InitValue<T>;
    export type AnyFunction = (...args: any[]) => any;
    export type UpdateFunction<T> = (item: T) => T;
    export type ReferenceClass<T extends Record<string, unknown>> = Realm.ObjectClass<any> & { labelProperty: keyof T & string; init: InitFunction<T>; update: UpdateFunction<T>; columns: MRT_ColumnDef<T>[] };
    export type EmbeddedClass<T extends Record<string, unknown>> = Realm.ObjectClass<any> & { stringify: StringifyComponent<T>; init: InitFunction<T>; update: UpdateFunction<T>; columns: MRT_ColumnDef<T>[] };
    export type DetailsClass = Realm.ObjectClass<any> & {
        columns: MRT_ColumnDef<IProduct>[];
        label: string;
        type: DetailTypes;
        objectType: string;
    };
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
    export type UseViewSettingsReturn<T extends MRT_RowData> = {
        state: JITTTableState<T>;
        initialState: JITTTableState<T>;
        resetCollectionState: ({ collection }: { collection: keyof CollectionOptionsConfig<T> }) => () => void;
        setCollectionOption: <TKey extends keyof JITTTableState<T>>(params: { collection: keyof CollectionOptionsConfig<T>; option: TKey; value?: JITTTableState<T>[TKey] }) => void;
        onColumnFiltersChange: StateSetter<Exclude<JITTTableState<T>['columnFilters'], undefined>>;
        onColumnOrderChange: StateSetter<Exclude<JITTTableState<T>['columnOrder']>>;
        onColumnPinningChange: StateSetter<Exclude<JITTTableState<T>['columnPinning']>>;
        onColumnSizingChange: StateSetter<Exclude<JITTTableState<T>['columnSizing']>>;
        onColumnVisibilityChange: StateSetter<Exclude<JITTTableState<T>['columnVisibility']>>;
        onDensityChange: StateSetter<Exclude<JITTTableState<T>['density']>>;
        onExpandedChange: StateSetter<Exclude<JITTTableState<T>['expanded']>>;
        onGlobalFilterChange: StateSetter<Exclude<JITTTableState<T>['globalFilter']>>;
        onGroupingChange: StateSetter<Exclude<JITTTableState<T>['grouping']>>;
        onPaginationChange: StateSetter<Exclude<JITTTableState<T>['pagination']>>;
        onRowSelectionChange: StateSetter<Exclude<JITTTableState<T>['rowSelection']>>;
        onShowColumnFiltersChange: StateSetter<Exclude<JITTTableState<T>['showColumnFilters']>>;
        onShowGlobalFilterChange: StateSetter<Exclude<JITTTableState<T>['showGlobalFilter']>>;
        onSortingChange: StateSetter<Exclude<JITTTableState<T>['sorting']>>;
    };
}

export const i = 1;
