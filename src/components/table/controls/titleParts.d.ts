import $me, { BarcodeTypes, CableTypes, HandOrientations, ProductColors } from '../../../schema/enums';
import { Flags } from '../../../schema/enums/flags';
import { CaliperSizeUnitsOfMeasure, DistanceUnitsOfMeasure, IBarcode, IClothingCare, ICurrentSetting, IIncludedItem, IMadeOfSection, IMeasure, IMinMax, IPiece, IProduct, ISku, ITrack, LengthUnitsOfMeasure, MusicDurationUnitsOfMeasure, Opt, CapacityUnitsOfMeasure, AmperageUnitsOfMeasure, VoltageUnitsOfMeasure, WattageUnitsOfMeasure, PowerConsumptionUnitsOfMeasure, RateOfEnergyCapacityUnitsOfMeasure, DataTransferRateUnitsOfMeasure, MemorySpeedUnitsOfMeasure, RotationalSpeedUnitsOfMeasure, VideoRuntimeUnitsOfMeasure } from '../../../types';
import { AngleMeasure } from '../../../schema/dimensions/AngleMeasure';
import { DensityMeasure } from '../../../schema/dimensions/DensityMeasure';
import { WeightMeasure } from '../../../schema/dimensions/WeightMeasure';
export declare const char: {
    newLine: string;
    comma: string;
    quote: string;
    bullet: string;
};
export type TitleParts<TKey extends keyof IProduct = keyof IProduct> = [name: TKey, func: (value: IProduct[TKey]) => string | undefined, importance: number];
export declare function toPart<TKey extends keyof IProduct>(name: TKey, func: (value: IProduct[TKey]) => string | undefined, importance: number): TitleParts<keyof import("../../../types").IApparelBottom | "madeOf" | "gender" | "cutNo" | "styleNo" | "text" | "rnNo" | "clothingCare" | "_id" | "asins" | "brand" | "classifier" | "includes" | "customAttributes" | "features" | "flags" | "hashTags" | "height" | "width" | "length" | "weight" | "modelNo" | "notes" | "title" | "upcs" | "origin" | "circa" | "color" | "description" | "testedOn" | "itemType" | "bootType" | "footSize" | "heelHeight" | "heightMapType" | "shoeHeelType" | "shoeWidth" | "strapType" | "toeStyle" | "bustSize" | "swimsuitBottomStyle" | "swimsuitTopStyle" | "backlineType" | "chestSize" | "collarType" | "cuffType" | "dressType" | "neckSize" | "neckType" | "sleeveSize" | "sleeveType" | "sleeveLength" | "suitType" | "awards" | "copyright" | "mediaSubtitle" | "mediaTitle" | "authors" | "blurb" | "bookGenre" | "bookType" | "edition" | "illustrators" | "language" | "pages" | "publishers" | "collectionOf" | "count" | "directedBy" | "videoFormat" | "videoGenre" | "movieRating" | "runtime" | "starring" | "tvRating" | "videoType" | "season" | "ESRBRating" | "consoleType" | "studio" | "artist" | "musicFormat" | "musicGenre" | "tracks" | "cableType" | "cordLength" | "connectors" | "compatibleWith" | "input" | "output" | "batteryCount" | "batteryType" | "batteryCapacity" | "batteryStats" | "powerTypes" | "manufactureDate" | "rateOfEnergyCapacity" | "acAdapter" | "aspectRatio" | "capacity" | "cellCarrier" | "operatingSystem" | "screenSize" | "driveType" | "driveForm" | "connectivity" | "driveInterface" | "writeSpeed" | "readSpeed" | "dataTransferRate" | "rpm" | "cacheSize" | "memoryType" | "memoryForm" | "compatibleDevices" | "memorySpeed" | "pinCount" | "dataTransferBandwidth" | "CASLatency" | "massInAir" | "massWaterDisplaced" | "density" | "metal" | "dinnerwareInventory" | "flatwareInventory" | "pattern" | "applianceType" | "clubType" | "flexType" | "handOrientation" | "ironType" | "clubLength" | "lie" | "loft" | "shaftType" | "swingWeight" | "wedgeType" | "material" | "ages" | "players" | "pieceCount" | "modelName" | "overrideTitle" | "partNumbers" | "type" | "allHashTags" | "detailTypes" | "primaryColor" | "primaryColorSelector" | "sizeText" | "sizeSelector">;
export declare function toAttribute<TKey extends keyof IProduct>(header: string, ...params: Parameters<typeof toPart<TKey>>): [string, TitleParts<keyof import("../../../types").IApparelBottom | "madeOf" | "gender" | "cutNo" | "styleNo" | "text" | "rnNo" | "clothingCare" | "_id" | "asins" | "brand" | "classifier" | "includes" | "customAttributes" | "features" | "flags" | "hashTags" | "height" | "width" | "length" | "weight" | "modelNo" | "notes" | "title" | "upcs" | "origin" | "circa" | "color" | "description" | "testedOn" | "itemType" | "bootType" | "footSize" | "heelHeight" | "heightMapType" | "shoeHeelType" | "shoeWidth" | "strapType" | "toeStyle" | "bustSize" | "swimsuitBottomStyle" | "swimsuitTopStyle" | "backlineType" | "chestSize" | "collarType" | "cuffType" | "dressType" | "neckSize" | "neckType" | "sleeveSize" | "sleeveType" | "sleeveLength" | "suitType" | "awards" | "copyright" | "mediaSubtitle" | "mediaTitle" | "authors" | "blurb" | "bookGenre" | "bookType" | "edition" | "illustrators" | "language" | "pages" | "publishers" | "collectionOf" | "count" | "directedBy" | "videoFormat" | "videoGenre" | "movieRating" | "runtime" | "starring" | "tvRating" | "videoType" | "season" | "ESRBRating" | "consoleType" | "studio" | "artist" | "musicFormat" | "musicGenre" | "tracks" | "cableType" | "cordLength" | "connectors" | "compatibleWith" | "input" | "output" | "batteryCount" | "batteryType" | "batteryCapacity" | "batteryStats" | "powerTypes" | "manufactureDate" | "rateOfEnergyCapacity" | "acAdapter" | "aspectRatio" | "capacity" | "cellCarrier" | "operatingSystem" | "screenSize" | "driveType" | "driveForm" | "connectivity" | "driveInterface" | "writeSpeed" | "readSpeed" | "dataTransferRate" | "rpm" | "cacheSize" | "memoryType" | "memoryForm" | "compatibleDevices" | "memorySpeed" | "pinCount" | "dataTransferBandwidth" | "CASLatency" | "massInAir" | "massWaterDisplaced" | "density" | "metal" | "dinnerwareInventory" | "flatwareInventory" | "pattern" | "applianceType" | "clubType" | "flexType" | "handOrientation" | "ironType" | "clubLength" | "lie" | "loft" | "shaftType" | "swingWeight" | "wedgeType" | "material" | "ages" | "players" | "pieceCount" | "modelName" | "overrideTitle" | "partNumbers" | "type" | "allHashTags" | "detailTypes" | "primaryColor" | "primaryColorSelector" | "sizeText" | "sizeSelector">];
export declare function ofSku(skus: DBList<IBarcode>): string | undefined;
export declare function quickFold(n: number, uom: string): string;
export declare function toMetricConversion({ original, originalUOM, target, targetUOM }: {
    original: number;
    originalUOM: string;
    target: number;
    targetUOM: string;
}): string;
export declare function ofAngle(value?: AngleMeasure): string | undefined;
export declare function ofDensity(value?: DensityMeasure): string | undefined;
export declare function ofRPM(value?: IMeasure<RotationalSpeedUnitsOfMeasure>): string | undefined;
export declare function ofMemorySpeed(value?: IMeasure<MemorySpeedUnitsOfMeasure>): string | undefined;
export declare function ofDataTransfer(value?: IMeasure<DataTransferRateUnitsOfMeasure>): string | undefined;
export declare function ofPowerConsumption(value?: IMeasure<PowerConsumptionUnitsOfMeasure>): string | undefined;
export declare function ofRateOfEnergy(value?: IMeasure<RateOfEnergyCapacityUnitsOfMeasure>): string | undefined;
export declare function ofVoltage(value?: IMeasure<VoltageUnitsOfMeasure>): string | undefined;
export declare function ofWattage(value?: IMeasure<WattageUnitsOfMeasure>): string | undefined;
export declare function ofAmperage(value?: IMeasure<AmperageUnitsOfMeasure>): string | undefined;
export declare function ofCapacity(value?: IMeasure<CapacityUnitsOfMeasure>): string | undefined;
export declare function ofLength(value?: IMeasure<LengthUnitsOfMeasure>): string | undefined;
export declare function ofCaliper(value?: IMeasure<CaliperSizeUnitsOfMeasure>): string | undefined;
export declare function ofDistance(value?: IMeasure<DistanceUnitsOfMeasure>): string | undefined;
export declare function ofDuration(value?: IMeasure<MusicDurationUnitsOfMeasure>): string | undefined;
export declare function ofRuntime(value?: IMeasure<VideoRuntimeUnitsOfMeasure>): string | undefined;
export declare function ofEnum<T extends string>(key: keyof typeof $me): (value: Opt<T>) => string | undefined;
export declare function ofRating<T extends string>(key: keyof typeof $me): (value: Opt<T>) => string | undefined;
export declare function ofLookup<T extends Record<string, unknown>>(key: keyof T): (value: Opt<T>) => string | undefined;
export declare function ofIdentity(value: Opt<string>): string | undefined;
export declare function ofList<T>(joiner: string, func?: (x: Opt<T>) => string | undefined): (value: DBList<T>) => string | undefined;
export declare function toMeasure(uom: string): (value: Opt<number>) => string | undefined;
export declare function ofIncludedItem(item: Opt<IIncludedItem>): string;
export declare function ofFirst(value: Opt<number>): string | undefined;
export declare function ofMeasure(uom: string, metricUOM?: string, conversion?: number, flip?: boolean): (value: Opt<number>) => string | undefined;
export declare function ofPrefix(pre: string, func: (value: Opt<string>) => string | undefined): (value: Opt<string>) => string | undefined;
export declare function ofSuffix(suff: string, func: (value: Opt<any>) => string | undefined): (value: Opt<number>) => string | undefined;
export declare function ofHandOrientation(value?: Opt<HandOrientations>): string | undefined;
export declare function ofBarcode(barcodeType: BarcodeTypes): (value: DBList<IBarcode>) => string | undefined;
export declare function ofDate(format: string): (value: Opt<Date>) => string | undefined;
export declare function ofWeight(weight?: Opt<WeightMeasure>): string | undefined;
/** @deprecated */
export declare function OBSOLETE_ofWeight(grams?: Opt<number>): string | undefined;
export declare function ofFlag(flag: Flags): (value: IProduct['flags']) => string | undefined;
export declare function ofPrimaryColor(color: DBList<ProductColors>): string | undefined;
export declare function ofCopyright({ copyright, musicFormat, videoFormat }: IProduct): string | undefined;
export declare function unparent(str?: string): string | undefined;
export declare function ofDimension({ height, width, length }: IProduct): string | undefined;
export declare function ofTrack(value?: ITrack): string;
export declare function ofPiece(enumKey: keyof typeof $me): ([key, piece]: [string, Opt<IPiece | number>]) => string | undefined;
export declare function ofDictionary<T>(func: (tuple: [string, T]) => string | undefined, joiner?: string): (value: Opt<DBDictionary<T>>) => string | undefined;
export declare function ofBattery({ batteryCount, batteryType }: IProduct): string | undefined;
export declare function ofCurrent(value: ICurrentSetting): string | undefined;
export declare function ofCableType(value: Opt<CableTypes>): "Data Cable" | "AC Power Cable" | "Video Cable" | undefined;
export declare function ofConnector({ connectors, cableType }: IProduct): string | undefined;
export declare function ofClothingCare(value?: IClothingCare): string | undefined;
export declare function ofMinMax(value?: IMinMax<number>): string | undefined;
export declare function ofMadeOf(value?: DBList<IMadeOfSection>): string | undefined;
export type IBuilderProperty<T> = {
    key: string;
    extractor: (x: ISku) => T;
    titleIndex?: number;
    titleFunc?: (x: T) => string | undefined;
    narrativeFunc?: (x: T) => string | undefined;
    section: 'attributes' | 'lists' | 'flags' | 'none' | 'specificiations' | 'measurements' | 'text';
    importance: number;
    header?: string;
};
