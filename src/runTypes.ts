// eslint-disable-next-line @typescript-eslint/triple-slash-reference
///<reference path="./global.d.ts" />
import { flags } from 'realm';
import { backlineTypes } from './schema/enums/backlineType';
import { barcodeTypes } from './schema/enums/barcodeTypes';
import { bookGenres } from './schema/enums/bookGenre';
import { bookTypes } from './schema/enums/bookType';
import { bootTypes } from './schema/enums/bootType';
import { closureTypes } from './schema/enums/closureType';
import { collarTypes } from './schema/enums/collarType';
import { consoleTypes } from './schema/enums/consoleType';
import { cuffTypes } from './schema/enums/cuffType';
import { detailsTypes } from './schema/enums/detailsTypes';
import { dressTypes } from './schema/enums/dressType';
import { esrbRatings } from './schema/enums/esrbRating';
import { fabric } from './schema/enums/fabric';
import { fitTypes } from './schema/enums/fitType';
import { garmentLengths } from './schema/enums/garmentLength';
import { genders } from './schema/enums/genders';
import { heightMaps } from './schema/enums/heightMap';
import { languages } from './schema/enums/languages';
import { legStyles } from './schema/enums/legStyle';
import { lifestyleTypes } from './schema/enums/lifestyleType';
import { musicFormatTypes } from './schema/enums/musicFormat';
import { musicGenres } from './schema/enums/musicGenre';
import { pocketTypes } from './schema/enums/pocketType';
import { neckTypes } from './schema/enums/neckType';
import { productColors } from './schema/enums/productColors';
import { provinces } from './schema/enums/provinces';
import { riseTypes } from './schema/enums/riseType';
import { shoeHeelTypesMap } from './schema/enums/shoeHeelType';
import { shoeWidthsMap } from './schema/enums/shoeWidth';
import { sizes } from './schema/enums/sizes';
import { sleeveTypes } from './schema/enums/sleeveType';
import { strapTypesMap } from './schema/enums/strapType';
import { suitTypes } from './schema/enums/suitType';
import { swimsuitBottomStyles } from './schema/enums/swimsuitBottomStyle';
import { swimsuitTopStyles } from './schema/enums/swimsuitTopStyle';
import { toeStylesMap } from './schema/enums/toeStyle';
import { countries } from './schema/enums/countries';
import { surround } from './common/text/surround';
import { videoFormatTypes } from './schema/enums/videoFormatType';
import { videoTypes } from './schema/enums/videoType';
import { tvShowRatings } from './schema/enums/tvShowRating';
import { movieRatings } from './schema/enums/movieRating';
import { movieGenres } from './schema/enums/movieGenre';
import { amperageUnits } from './schema/enums/amperageUnit';
import { applianceTypes } from './schema/enums/applianceTypes';
import { aspectRatios } from './schema/enums/aspectRatios';
import { auctionSites } from './schema/enums/auctionSite';
import { batteryTypes } from './schema/enums/batteryType';
import { cellCarriers } from './schema/enums/cellCarriers';
import { connectorGenders } from './schema/enums/connectorGender';
import { dinnerwareTypes } from './schema/enums/dinnerwareTypes';
import { flexTypes } from './schema/enums/flexTypes';
import { handOrientations } from './schema/enums/handOrientations';
import { ironTypes } from './schema/enums/ironTypes';
import { _itemConditions } from './schema/enums/itemConditions';
import { itemDispositions } from './schema/enums/itemDispositions';
import { clubTypes } from './schema/enums/clubTypes';
import { metalTypes } from './schema/enums/metalTypes';
import { operatingSystems } from './schema/enums/operatingSystems';
import { payorTypes } from './schema/enums/payorTypes';
import { shippers } from './schema/enums/shippers';
import { powerTypes } from './schema/enums/powerTypes';
import { shaftTypes } from './schema/enums/shaftTypes';
import { shapeTypes } from './schema/enums/shapeTypes';
import { shippingSpeeds } from './schema/enums/shippingSpeeds';
import { wedgeTypes } from './schema/enums/wedgeTypes';
import { sleeveLengths } from './schema/enums/sleeveLength';

const maps = [
    ['BacklineTypes', backlineTypes],
    ['BarcodeTypes', barcodeTypes],
    ['BookGenres', bookGenres],
    ['BookTypes', bookTypes],
    ['BootTypes', bootTypes],
    ['ClosureTypes', closureTypes],
    ['CollarTypes', collarTypes],
    ['Countries', countries],
    ['CuffTypes', cuffTypes],
    ['ConsoleTypes', consoleTypes],
    ['DetailsTypes', detailsTypes],
    ['DressTypes', dressTypes],
    ['ESRBRatings', esrbRatings],
    ['FabricTypes', fabric],
    ['FitTypes', fitTypes],
    ['Flags', flags],
    ['GarmentLengths', garmentLengths],
    ['Genders', genders],
    ['HeightMaps', heightMaps],
    ['Languages', languages],
    ['LegStyles', legStyles],
    ['LifestyleTypes', lifestyleTypes],
    ['MusicFormatTypes', musicFormatTypes],
    ['MusicGenres', musicGenres],
    ['PocketTypes', pocketTypes],
    ['NeckTypes', neckTypes],
    ['ProductColors', productColors],
    ['Provinces', provinces],
    ['RiseTypes', riseTypes],
    ['ShoeHeelTypes', shoeHeelTypesMap],
    ['ShoeWidths', shoeWidthsMap],
    ['SleeveTypes', sleeveTypes],
    ['StrapTypes', strapTypesMap],
    ['SuitTypes', suitTypes],
    ['SwimsuitBottomStyles', swimsuitBottomStyles],
    ['SwimsuitTopStyles', swimsuitTopStyles],
    ['ToeStyles', toeStylesMap],
    ['VideoFormatTypes', videoFormatTypes],
    ['VideoTypes', videoTypes],
    ['TVRatings', tvShowRatings],
    ['MovieRatings', movieRatings],
    ['MovieGenres', movieGenres],
    ['AmperageUnits', amperageUnits],
    ['ApplianceTypes', applianceTypes],
    ['AspectRatios', aspectRatios],
    ['AuctionSites', auctionSites],
    ['BatteryTypes', batteryTypes],
    ['CellCarriers', cellCarriers],
    ['ClubTypes', clubTypes],
    ['ConnectorGenders', connectorGenders],
    ['DinnerwareTypes', dinnerwareTypes],
    ['FlexTypes', flexTypes],
    ['HandOrientations', handOrientations],
    ['IronTypes', ironTypes],
    ['ItemConditions', _itemConditions],
    ['ItemDispositions', itemDispositions],
    ['MetalTypes', metalTypes],
    ['OperatingSystems', operatingSystems],
    ['PayorTypes', payorTypes],
    ['PowerTypes', powerTypes],
    ['ShaftTypes', shaftTypes],
    ['ShapeTypes', shapeTypes],
    ['Shippers', shippers],
    ['ShippingSpeeds', shippingSpeeds],
    ['WedgeTypes', wedgeTypes],
    ['SleeveLengths', sleeveLengths]
]

const text = maps.map(([key, enumMap]) => `export type ${key} = ${Object.keys(enumMap).map(surround('"', '"')).join(' | ')}`)

console.log(text.join('\n\n'));