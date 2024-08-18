// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="./../global.d.ts" />
import { PropertyTypeName } from 'realm';
import { objectMap } from '../common/object/objectMap';
import { appendText } from '../common/text/appendText';

const obj = function (name: string) {
    const output = function () {
        return appendText('?')(name);
    };
    output.list = appendText('[]')(name);
    output.set = appendText('<>')(name);
    output.dictionary = appendText('{}')(name);
    return output;
};
const primitive = function (name: string) {
    const output = function () {
        return name;
    };
    output.opt = appendText('?')(name);
    output.list = appendText('[]')(name);
    output.set = appendText('<>')(name);
    output.dictionary = appendText('{}')(name);
    output.default = function (x?: any) {
        return { type: name as PropertyTypeName, optional: false, default: x };
    };
    return output;
};

const primitiveNames = {
    objectId: 'objectId',
    uuid: 'uuid',
    int: 'int',
    double: 'double',
    decimal128: 'decimal128',
    float: 'float',
    bool: 'bool',
    string: 'string',
    date: 'date',
    data: 'data'
};

const _primitives = objectMap(primitive)(primitiveNames) as Record<keyof typeof primitiveNames, ReturnType<typeof primitive>>;

const objectNames = {
    monthYear: 'monthYear',
    contributor: 'contributor',
    book: 'book',
    movie: 'movie',
    tvSeries: 'tvSeries',
    episode: 'episode',
    album: 'album',
    apiResult: 'apiResult',
    individual: 'individual',
    address: 'address',
    attachment: 'attachment',
    attribute: 'attribute',
    auction: 'auction',
    auctionCost: 'auctionCost',
    barcode: 'barcode',
    bin: 'bin',
    brand: 'brand',
    capacity: 'capacity',
    classifier: 'classifier',
    classification: 'classification',
    clothingCare: 'clothingCare',
    customItemField: 'customItemField',
    customItemFieldValue: 'customItemFieldValue',
    customItemFieldType: 'customItemFieldType',
    customItemFieldTypes: 'customItemFieldTypes',
    draft: 'draft',
    award: 'award',
    operatingSystemInfo: 'operatingSystemInfo',
    facility: 'facility',
    hashTag: 'hashTag',
    hashTagUsage: 'hashTagUsage',
    includedItem: 'includedItem',
    listing: 'listing',
    madeOfSection: 'madeOfSection',
    mercariBrand: 'mercariBrand',
    mercariCategory: 'mercariCategory',
    mercariTaxonomy: 'mercariTaxonomy',
    price: 'price',
    product: 'product',
    productDetails: 'productDetails',
    productFacing: 'productFacing',
    productImage: 'productImage',
    scan: 'scan',
    selfStorage: 'selfStorage',
    shipping: 'shipping',
    sku: 'sku',
    squareFootage: 'squareFootage',
    track: 'track',
    connector: 'connector',
    currentSetting: 'currentSetting',
    minMax: 'minMax',
    piece: 'piece',
    apparelSize: 'apparelSize',
    amperageMeasure: 'amperageMeasure',
    angleMeasure: 'angleMeasure',
    caliperSizeMeasure: 'caliperSizeMeasure',
    capacityMeasure: 'capacityMeasure',
    dataTransferRateMeasure: 'dataTransferRateMeasure',
    densityMeasure: 'densityMeasure',
    distanceMeasure: 'distanceMeasure',
    lengthMeasure: 'lengthMeasure',
    resolutionMeasure: 'resolutionMeasure',
    memorySpeedMeasure: 'memorySpeedMeasure',
    musicDurationMeasure: 'musicDurationMeasure',
    powerConsumptionMeasure: 'powerConsumptionMeasure',
    rateOfEnergyMeasure: 'rateOfEnergyMeasure',
    rotationalSpeedMeasure: 'rotationalSpeedMeasure',
    videoRuntimeMeasure: 'videoRuntimeMeasure',
    voltageMeasure: 'voltageMeasure',
    wattageMeasure: 'wattageMeasure',
    weightMeasure: 'weightMeasure',
    nyTimesAward: 'nyTimesAward',
    oscarAward: 'oscarAward',
    grammyAward: 'grammyAward',
    tonyAward: 'tonyAward',
    emmyAward: 'emmyAward',
    pulitzerAward: 'pulitzerAward',
    hugoAward: 'hugoAward',
    partNumber: 'partNumber',
    rn: 'rn',
    scrape: 'scrape',
    scrapeKVP:'scrapeKVP',
    scrapeStoreInfo: 'scrapeStoreInfo',
    adminTask: 'adminTask'
};

const details = {
    apparel: 'apparelDetails',
    apparelAccessories: 'apparelAccessoriesDetails',
    apparelTops: 'apparelTopsDetails',
    apparelBottoms: 'apparelBottomsDetails',
    apparelBottomsLegged: 'apparelBottomsLeggedDetails',
    apparelFootwear: 'apparelFootwearDetails',
    apparelBras: 'apparelBrasDetails',
    apparelBrasSwimsuit: 'apparelBrasSwimsuitDetails',
    cables: 'cablesDetails',
    cablesData: 'cablesDataDetails',
    cablesPower: 'cablesPowerDetails',
    cablesVideo: 'cablesVideoDetails',
    electronics: 'electronicsDetails',
    electronicsVisual: 'electronicsVisualDetails',
    electronicsVisualCamera: 'electronicsVisualCameraDetails',
    electronicsVisualCellPhones: 'electronicsVisualCellPhonesDetails',
    electronicsComputerComponents: 'electronicsComputerComponentsDetails',
    electronicsComputerComponentsRAM: 'electronicsComputerComponentsRamDetails',
    electronicsComputerComponentsBattery: 'electronicsComputerComponentsBatteryDetails',
    electronicsComputerComponentsDrives: 'electronicsComputerComponentsDrivesDetails',
    electronicsComputerComponentsNetworking: 'electronicsComputerComponentsNetworkingDetails',
    electronicsKitchenAppliances: 'electronicsKitchenAppliancesDetails',
    general: 'generalDetails',
    homeGoods: 'homeGoodsDetails',
    homeGoodsDecor: 'homeGoodsDecorDetails',
    homeGoodsFlatware: 'homeGoodsFlatwareDetails',
    homeGoodsDinnerware: 'homeGoodsDinnerwareDetails',
    homeGoodsGlassware: 'homeGoodsGlasswareDetails',
    jewelry: 'jewelryDetails',
    media: 'mediaDetails',
    mediaBooks: 'mediaBooksDetails',
    mediaMusic: 'mediaMusicDetails',
    mediaVideoGames: 'mediaVideoGamesDetails',
    mediaVideos: 'mediaVideosDetails',
    mediaVideosFilm: 'mediaVideosFilmDetails',
    mediaVideosTvSeries: 'mediaVideosTvSeriesDetails',
    sportingGoods: 'sportingGoodsDetails',
    sportingGoodsGolf: 'sportingGoodsGolfDetails',
    sportingGoodsGolfClubs: 'sportingGoodsGolfClubsDetails',
    sportingGoodsTennis: 'sportingGoodsTennisDetails',
    sportingGoodsTennisRackets: 'sportingGoodsTennisRacketsDetails',
    sportingGoodsBowling: 'sportingGoodsBowlingDetails',
    sportingGoodsBowlingBalls: 'sportingGoodsBowlingBallsDetails',
    toys: 'toysDetails',
    toysBoardGames: 'toysBoardGamesDetails',
    toysStuffedAnimals: 'toysStuffedAnimalsDetails',
    officeGoods: 'officeGoodsDetails'
};

const _objects = objectMap(obj)(objectNames) as Record<keyof typeof objectNames, ReturnType<typeof obj>>;

export const $ = {
    ..._objects,
    ..._primitives,
    details: details,
    mixed: () => 'mixed'
};

// console.log(
//     Object.entries(details)
//         .map(([k, v]) => `${k}: '${v}?',`)
//         .join('\n')
// );
// console.log(
//     Object.entries(details)
//         .map(([k, v]) => `${k}: I${capitalize(v)},`)
//         .join('\n')
// );
// console.log(
//     Object.entries(details)
//         .map(([k, v]) => `export type I${capitalize(v)} = { value: unknown; }`)
//         .join('\n')
// );
// console.log(
//     Object.entries(details)
//         .map(([k, v]) => {
//             const $interfaceName = `I${capitalize(v)}`;
//             const $className = capitalize(v);
//             const $columnsName = k;
//             const $nameProperty = k;
//             return `export class ${$className} extends EntityBase<${$interfaceName}> implements ${$interfaceName} {
//     static columns: MRT_ColumnDef<IProduct>[] = ${$columnsName}();
//     value: unknown;
//     static schema: Realm.ObjectSchema = {
//         name: $.details.${$nameProperty},
//         embedded: true,
//         properties: {
//             value: 'mixed'
//         }
//     };
// }`;
//         })
//         .join('\n')
// );
// console.log(
//     Object.entries(details)
//         .map(([k, v]) => {
//             const $interfaceName = `I${capitalize(v)}`;
//             const $className = capitalize(v);
//             const $columnsName = k;
//             const $nameProperty = k;
//             return `${$className} as DetailsClass,`;
//         })
//         .join('\n')
// );
// console.log(
//     Object.entries(details)
//         .map(([k, v]) => {
//             const $interfaceName = `I${capitalize(v)}`;
//             const $className = capitalize(v);
//             const $columnsName = k;
//             const $nameProperty = k;
//             const $label = splitWhen(isUpper)(k.split('')).map((x) => capitalize(x.join(''))).join(' ');
//             const $detailType = splitWhen(isUpper)(k.split('')).map(x => x.join('')).map(x => x.toLowerCase()).join('/');
//             return [`static label = '${$label}';`, `static type: DetailTypes = '${$detailType}';`, `static objectType = ${$className}.schema.name;`].join('\n');
//         })
//         .join('\n')
// );
// console.log(
//     Object.entries(details)
//         .map(([, v]) => {
//             const $className = capitalize(v);
//             return `${v}: ${$className},`;
//         })
//         .join('\n')
// );