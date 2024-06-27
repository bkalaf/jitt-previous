import { MRT_ColumnDef } from 'material-react-table';
import { IPiece } from '../../types';
export declare const h: import("material-react-table").MRT_ColumnHelper<IPiece>;
export declare const helper: {
    bool: <U, UKey extends keyof U>(...dependencies: IDependency<U, UKey>[]) => (name: "count" | "shape", $header?: string | undefined) => MRT_ColumnDef<IPiece, boolean | undefined>;
    clothingCare: <U_1, UKey_1 extends keyof U_1>(...dependencies: IDependency<U_1, UKey_1>[]) => (name: "count" | "shape", header: string, section: "bleaching" | "drying" | "ironing" | "dryClean" | "tumbleDry" | "washTemperature" | "wash" | "permanentPress" | "gentleOrDelicate", readonly?: boolean) => MRT_ColumnDef<IPiece>;
    date: <U_2, UKey_2 extends keyof U_2>(...dependencies: IDependency<U_2, UKey_2>[]) => (name: "count" | "shape", $header?: string | undefined, opts?: {
        min?: Date | undefined;
        max?: Date | undefined;
        dateType?: "past" | "future" | undefined;
    } | undefined, required?: boolean, readonly?: boolean) => MRT_ColumnDef<IPiece>;
    dictionary: <U_3, UKey_3 extends keyof U_3>(...dependencies: IDependency<U_3, UKey_3>[]) => (name: "count" | "shape", header: string, objectType: string, opts?: import("../defs/dbDictCol").DBDictColOptions | undefined) => MRT_ColumnDef<IPiece>;
    dollar: <U_4, UKey_4 extends keyof U_4>(...dependencies: IDependency<U_4, UKey_4>[]) => (name: "count" | "shape", $header: string, opts: {
        min?: number | undefined;
        max?: number | undefined;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
    }) => MRT_ColumnDef<IPiece, number | undefined>;
    double: <U_5, UKey_5 extends keyof U_5>(...dependencies: IDependency<U_5, UKey_5>[]) => (name: "count" | "shape", $header: string, opts: {
        min?: number | undefined;
        max?: number | undefined;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
    }) => MRT_ColumnDef<IPiece>;
    enum: <U_6, UKey_6 extends keyof U_6>(...dependencies: IDependency<U_6, UKey_6>[]) => (name: "count" | "shape", $header: string, opts: {
        id?: string | undefined;
        options?: Record<string, string | {
            text: string;
            key: string;
        }> | undefined;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
        enumKey?: "amperageUnits" | "rateOfEnergyCapacityUOM" | "powerConsumptionUOM" | "voltageUOM" | "wattageUOM" | "applianceTypes" | "aspectRatios" | "auctionSites" | "backlineTypes" | "barcodeTypes" | "batteryTypes" | "bookGenres" | "bookTypes" | "bootTypes" | "cellCarriers" | "closureTypes" | "clubTypes" | "collarTypes" | "connectorGenders" | "consoleTypes" | "dataConnectorTypes" | "videoConnectorTypes" | "powerConnectorTypes" | "cableTypes" | "countries" | "cuffTypes" | "detailsTypes" | "dinnerwareTypes" | "dressTypes" | "ESRBRatings" | "fabricTypes" | "face-pov" | "face-x" | "face-y" | "face-z" | "fitTypes" | "flags" | "flatwareTypes" | "flexTypes" | "garmentLengths" | "genders" | "handOrientations" | "heightMaps" | "ironTypes" | "itemConditions" | "itemDispositions" | "languages" | "legStyles" | "lifestyleTypes" | "metalTypes" | "movieGenres" | "movieRatings" | "musicFormatTypes" | "musicGenres" | "neckTypes" | "operatingSystems" | "operatingSystemNames" | "payorTypes" | "pocketTypes" | "powerTypes" | "productColors" | "productImageDisposition" | "provinces" | "riseTypes" | "materials" | "shaftTypes" | "shapeTypes" | "shippers" | "shippingSpeeds" | "shoeHeelTypes" | "shoeWidths" | "sleeveLengths" | "sleeveTypes" | "productImageType" | "strapTypes" | "suitTypes" | "swimsuitBottomStyles" | "swimsuitTopStyles" | "toeStyles" | "tvRatings" | "videoFormatTypes" | "videoTypes" | "wedgeTypes" | "driveTypes" | "memorySpeedUOM" | "memoryFormFactors" | "compatibleDevices" | "memoryTypes" | "driveInterfaces" | "connectivity" | "driveFormFactors" | "awardNames" | "hugoAwardCategories" | "emmyAwardCategories" | "grammyAwardCategories" | "tonyAwardCategories" | "pulizerPrizeCategories" | "oscarAwardCategories" | "durationUOM" | "nyTimesAwardCategories" | "capacityUOM" | "casLatency" | "attributePaths" | undefined;
    }) => MRT_ColumnDef<IPiece, string | undefined>;
    flags: <U_7, UKey_7 extends keyof U_7>(...dependencies: IDependency<U_7, UKey_7>[]) => (name: "count" | "shape", header: string, flags: string[], readonly?: boolean) => MRT_ColumnDef<IPiece>;
    freeSolo: <U_8, UKey_8 extends keyof U_8>(...dependencies: IDependency<U_8, UKey_8>[]) => (name: "count" | "shape", header: string, comparator: (x?: string | undefined, y?: string | undefined) => Compared, opts?: {
        required?: boolean | undefined;
        readonly?: boolean | undefined;
        multiple?: boolean | undefined;
    } | undefined) => MRT_ColumnDef<IPiece, string | undefined>;
    int: <U_9, UKey_9 extends keyof U_9>(...dependencies: IDependency<U_9, UKey_9>[]) => (name: "count" | "shape", $header: string, opts: {
        min?: number | undefined;
        max?: number | undefined;
        readonly?: boolean | undefined;
        required?: boolean | undefined;
    }) => MRT_ColumnDef<IPiece>;
    intMeasure: <U_10, UKey_10 extends keyof U_10>(...dependencies: IDependency<U_10, UKey_10>[]) => (name: "count" | "shape", $header: string, uom: string, opts: {
        min?: number | undefined;
        max?: number | undefined;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
    }) => MRT_ColumnDef<IPiece, number | undefined>;
    listOfEmbed: <U_11, UKey_11 extends keyof U_11>(...dependencies: IDependency<U_11, UKey_11>[]) => (name: "count" | "shape", header: string, objectType: string, readonly?: boolean) => MRT_ColumnDef<IPiece, ListBack<unknown>>;
    listOfEnum: <U_12, UKey_12 extends keyof U_12>(...dependencies: IDependency<U_12, UKey_12>[]) => (name: "count" | "shape", $header: string, opts: {
        options?: Record<string, string | {
            text: string;
            key: string;
        }> | undefined;
        required?: boolean | undefined;
        readonly?: false | undefined;
        enumKey: "amperageUnits" | "rateOfEnergyCapacityUOM" | "powerConsumptionUOM" | "voltageUOM" | "wattageUOM" | "applianceTypes" | "aspectRatios" | "auctionSites" | "backlineTypes" | "barcodeTypes" | "batteryTypes" | "bookGenres" | "bookTypes" | "bootTypes" | "cellCarriers" | "closureTypes" | "clubTypes" | "collarTypes" | "connectorGenders" | "consoleTypes" | "dataConnectorTypes" | "videoConnectorTypes" | "powerConnectorTypes" | "cableTypes" | "countries" | "cuffTypes" | "detailsTypes" | "dinnerwareTypes" | "dressTypes" | "ESRBRatings" | "fabricTypes" | "face-pov" | "face-x" | "face-y" | "face-z" | "fitTypes" | "flags" | "flatwareTypes" | "flexTypes" | "garmentLengths" | "genders" | "handOrientations" | "heightMaps" | "ironTypes" | "itemConditions" | "itemDispositions" | "languages" | "legStyles" | "lifestyleTypes" | "metalTypes" | "movieGenres" | "movieRatings" | "musicFormatTypes" | "musicGenres" | "neckTypes" | "operatingSystems" | "operatingSystemNames" | "payorTypes" | "pocketTypes" | "powerTypes" | "productColors" | "productImageDisposition" | "provinces" | "riseTypes" | "materials" | "shaftTypes" | "shapeTypes" | "shippers" | "shippingSpeeds" | "shoeHeelTypes" | "shoeWidths" | "sleeveLengths" | "sleeveTypes" | "productImageType" | "strapTypes" | "suitTypes" | "swimsuitBottomStyles" | "swimsuitTopStyles" | "toeStyles" | "tvRatings" | "videoFormatTypes" | "videoTypes" | "wedgeTypes" | "driveTypes" | "memorySpeedUOM" | "memoryFormFactors" | "compatibleDevices" | "memoryTypes" | "driveInterfaces" | "connectivity" | "driveFormFactors" | "awardNames" | "hugoAwardCategories" | "emmyAwardCategories" | "grammyAwardCategories" | "tonyAwardCategories" | "pulizerPrizeCategories" | "oscarAwardCategories" | "durationUOM" | "nyTimesAwardCategories" | "capacityUOM" | "casLatency" | "attributePaths";
    }) => MRT_ColumnDef<IPiece>;
    listOfFreeSolo: <U_13, UKey_13 extends keyof U_13>(...dependencies: IDependency<U_13, UKey_13>[]) => (name: "count" | "shape", header: string, objectType: string, comparator: (x: any, y: any) => Compared, readonly?: boolean) => MRT_ColumnDef<IPiece, any>;
    listOfObject: <U_14, UKey_14 extends keyof U_14>(...dependencies: IDependency<U_14, UKey_14>[]) => (name: "count" | "shape", header: string, objectType: string, readonly?: boolean) => MRT_ColumnDef<IPiece, ListBack<import("material-react-table").MRT_RowData & {
        _id: import("bson").ObjectId;
    }>>;
    listOfPrimitive: <U_15, UKey_15 extends keyof U_15>(...dependencies: IDependency<U_15, UKey_15>[]) => (name: "count" | "shape", header: string, objectType: string, readonly?: boolean) => MRT_ColumnDef<IPiece, ListBack<unknown>>;
    lookup: <U_16, UKey_16 extends keyof U_16>(...dependencies: IDependency<U_16, UKey_16>[]) => (name: "count" | "shape", header: string, opts: {
        onChange?: ((setValue: (name: string, value: any) => void, oldValue: any, newValue: any) => void) | undefined;
        objectType: string;
    }) => MRT_ColumnDef<IPiece, any>;
    measure: <U_17, UKey_17 extends keyof U_17>(...dependencies: IDependency<U_17, UKey_17>[]) => (name: "count" | "shape", $header: string, uom: string, opts: {
        min?: number | undefined;
        max?: number | undefined;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
        id?: string | undefined;
    }) => MRT_ColumnDef<IPiece, number | undefined>;
    percent: <U_18, UKey_18 extends keyof U_18>(...dependencies: IDependency<U_18, UKey_18>[]) => (name: "count" | "shape", $header: string, opts: {
        min?: number | undefined;
        max?: number | undefined;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
    }) => MRT_ColumnDef<IPiece, number | undefined>;
    PK: () => MRT_ColumnDef<IPiece>;
    radio: <U_19, UKey_19 extends keyof U_19>(...dependencies: IDependency<U_19, UKey_19>[]) => (name: "count" | "shape", $header: string, opts: {
        enumKey: string;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
    }) => MRT_ColumnDef<IPiece>;
    string: <U_20, UKey_20 extends keyof U_20>(...dependencies: IDependency<U_20, UKey_20>[]) => (name: "count" | "shape", $header?: string | undefined, formatter?: ((x?: unknown) => string) | undefined, opts?: Pick<import("@tanstack/table-core").ColumnMeta<IPiece, unknown>, "type" | "pattern" | "required" | "min" | "max" | "maxLength" | "minLength" | "step" | "validate" | "readonly"> | undefined) => MRT_ColumnDef<IPiece, unknown>;
    text: <U_21, UKey_21 extends keyof U_21>(...dependencies: IDependency<U_21, UKey_21>[]) => (name: "count" | "shape", $header?: string | undefined, formatter?: ((x?: unknown) => string) | undefined, opts?: Pick<import("@tanstack/table-core").ColumnMeta<IPiece, unknown>, "type" | "pattern" | "required" | "min" | "max" | "maxLength" | "minLength" | "step" | "validate" | "readonly"> | undefined) => MRT_ColumnDef<IPiece, unknown>;
};
export declare const pieceColumns: MRT_ColumnDef<IPiece>[];
