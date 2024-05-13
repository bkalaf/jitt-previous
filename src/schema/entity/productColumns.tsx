import { IProduct } from '../../types';
import { productColors } from '../enums/productColors';
import { genders } from '../enums/genders';
import { flagOptions } from '../enums/flags';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { whenProperty, whenType } from '../defs/when';
import { col } from '../defs/col';
import { closureTypes } from '../enums/closureType';
import { fitTypes } from '../enums/fitType';
import { legStyles } from '../enums/legStyle';
import { garmentLengths } from '../enums/garmentLength';
import { lifestyleTypes } from '../enums/lifestyleType';
import { pocketTypes } from '../enums/pocketType';
import { riseTypes } from '../enums/riseType';
import { getSizeOptions } from '../enums/sizes';
import { bootTypes } from '../enums/bootType';
import { swimsuitBottomStyles } from '../enums/swimsuitBottomStyle';
import { swimsuitTopStyles } from '../enums/swimsuitTopStyle';
import { backlineTypes } from '../enums/backlineType';
import { dressTypes } from '../enums/dressType';
import { suitTypes } from '../enums/suitType';
import { sleeveTypes } from '../enums/sleeveType';
import { collarTypes } from '../enums/collarType';
import { cuffTypes } from '../enums/cuffType';
import { neckTypes } from '../enums/neckType';
import { sleeveLengths } from '../enums/sleeveLength';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);
export const productColumns: MRT_ColumnDef<IProduct>[] = [
    helper.pk(),
    helper.lookup('brand', 'Brand', { objectType: 'brand', labelProperty: 'name' }),
    helper.lookup('classifier', 'Classifier', { objectType: 'classifier', labelProperty: 'name' }),
    helper.listOfEmbed('includes', 'Includes', 'includedItem'),
    helper.listOfEmbed('customAttributes', 'Custom Item Field', 'customItemField'),
    helper.listOfPrimitive('asins', 'ASINs', 'string'),
    helper.listOfPrimitive('features', 'Features', 'string'),
    helper.flags('flags', 'Flags', flagOptions),
    helper.listOfObject('hashTags', 'Hash Tags', 'hashTag', 'name'),
    helper.measure('length', 'Length', 'in', {}),
    helper.measure('width', 'Width', 'in', {}),
    helper.measure('height', 'Height', 'in', {}),
    helper.measure('weight', 'Weight', 'g', {}),
    helper.string('modelNo', 'Model #', undefined, {}),
    helper.string('notes', 'Notes', undefined, { maxLength: 500 }),
    helper.string('title', 'Title', undefined, { maxLength: 80 }),
    helper.listOfObject('upcs', 'UPCS', 'barcode', 'value'),
    helper.string('circa', 'Circa', undefined, {}),
    helper.listofEnum('color', 'Colors', { options: productColors }),
    helper.string('description', 'Description', undefined, { maxLength: 150 }),
    whenType('apparel', helper.enum('gender', 'Gender', { options: genders })),
    whenType('apparel', helper.string('cutNo', 'Cut #', undefined, {})),
    whenType('apparel', helper.string('styleNo', 'Style #', undefined, {})),
    whenType('apparel', helper.string('text', 'Text', undefined, {})),
    whenType('apparel', helper.int('rnNo', 'RN #', { min: 0, max: 250000 })),
    whenType(
        'apparel',
        h.group({
            header: 'Clothing Care',
            columns: [
                helper.clothingCare('clothingCare.bleaching', 'Bleaching', 'bleaching'),
                helper.clothingCare('clothingCare.dryClean', 'Dry Clean', 'dryClean'),
                helper.clothingCare('clothingCare.drying', 'Drying', 'drying'),
                helper.clothingCare('clothingCare.gentleOrDelicate', 'Gentle Or Delicate', 'gentleOrDelicate'),
                helper.clothingCare('clothingCare.ironing', 'Ironing', 'ironing'),
                helper.clothingCare('clothingCare.permanentPress', 'Permanent Press', 'permanentPress'),
                helper.clothingCare('clothingCare.tumbleDry', 'Tumble Dry', 'tumbleDry'),
                helper.clothingCare('clothingCare.wash', 'Wash', 'wash'),
                helper.clothingCare('clothingCare.washTemperature', 'Wash Temperature', 'washTemperature')
            ]
        })
    ),
    whenType('apparel', helper.dictionary('madeOf', 'Made Of', 'madeOfSection', { maxLength: 25 })),
    whenType(['apparel-bottoms', 'apparel-tops', 'apparel-footwear'], helper.enum('closureType', 'Closure Type', { options: closureTypes })),
    whenType(['apparel-bottoms', 'apparel-tops'], helper.enum('fitType', 'Fit Type', { options: fitTypes })),
    whenType('apparel-bottoms', helper.enum('legStyle', 'Leg Style', { options: legStyles })),
    whenType(['apparel-bottoms', 'apparel-tops'], helper.enum('lengthType', 'Length Type', { options: garmentLengths })),
    whenType(['apparel-bottoms', 'apparel-tops', 'apparel-footwear'], helper.enum('lifestyleType', 'Lifestyle Type', { options: lifestyleTypes })),
    whenType(['apparel-bottoms', 'apparel-tops'], helper.enum('pocketType', 'Pocket Type', { options: pocketTypes })),
    whenType('apparel-bottoms', helper.enum('riseType', 'Rise Type', { options: riseTypes })),
    whenType('apparel-bottoms', helper.enum('size', 'Size', { options: getSizeOptions('waistSizes') })),
    whenType('apparel-bottoms', helper.measure('inseamSize', 'Inseam', 'in', {})),
    whenType('apparel-bottoms', helper.measure('lengthSize', 'Length', 'in', {})),
    whenType('apparel-bottoms', helper.measure('waistSize', 'Waist', 'in', {})),
    whenType('apparel-footwear', helper.enum('bootType', 'Boot Type', { options: bootTypes })),
    whenType('apparel-footwear', helper.enum('heightMapType', 'Boot Type', { options: bootTypes })),
    whenType('apparel-footwear', helper.enum('shoeHeelType', 'Boot Type', { options: bootTypes })),
    whenType('apparel-footwear', helper.enum('shoeWidth', 'Boot Type', { options: bootTypes })),
    whenType('apparel-footwear', helper.enum('strapType', 'Boot Type', { options: bootTypes })),
    whenType('apparel-footwear', helper.enum('toeStyle', 'Boot Type', { options: bootTypes })),
    whenType('apparel-footwear', helper.measure('footSize', 'Foot Size', 'in', {})),
    whenType('apparel-footwear', helper.measure('heelHeight', 'Heel Height', 'in', {})),
    whenType('apparel-footwear', whenProperty('gender', 'mens', helper.enum('size', 'Mens Size', { options: getSizeOptions('menFootwear') }))),
    whenType('apparel-footwear', whenProperty('gender', 'womens', helper.enum('size', 'Womens Size', { options: getSizeOptions('womenFootwear') }))),
    // whenType('apparel-footwear', whenProperty('gender', 'boys', helper.enum('size', 'Womens Size', { options: getSizeOptions('womenFootwear')}))),
    // whenType('apparel-footwear', whenProperty('gender', 'girls', helper.enum('size', 'Womens Size', { options: getSizeOptions('')}))),
    whenType('apparel-bras', helper.measure('bustSize', 'Bust Size', 'in', {})),
    whenType('apparel-bras', helper.enum('size', 'Bra Size', { options: getSizeOptions('bustSizes') })),
    whenType('apparel-bras', helper.enum('swimsuitBottomStyle', 'Swimsuit Bottom Style', { options: swimsuitBottomStyles })),
    whenType('apparel-bras', helper.enum('swimsuitTopStyle', 'Swimsuit Top Style', { options: swimsuitTopStyles })),
    whenType('apparel-tops', helper.measure('neckSize', 'Neck Size', 'in', {})),
    whenType('apparel-tops', helper.measure('sleeveSize', 'Sleeve Size', 'in', {})),
    whenType('apparel-tops', helper.measure('chestSize', 'Chest Size', 'in', {})),
    whenType('apparel-tops', helper.measure('lengthSize', 'Length Size', 'in', {})),
    whenType('apparel-tops', helper.enum('backlineType', 'Backline Type', { options: backlineTypes })),
    whenType('apparel-tops', helper.enum('dressType', 'Dress Type', { options: dressTypes })),
    whenType('apparel-tops', helper.enum('suitType', 'Suit Type', { options: suitTypes })),
    whenType('apparel-tops', helper.enum('sleeveType', 'Sleeve Type', { options: sleeveTypes })),
    whenType('apparel-tops', helper.enum('collarType', 'Collar Type', { options: collarTypes })),
    whenType('apparel-tops', helper.enum('cuffType', 'Cuff Type', { options: cuffTypes })),
    whenType('apparel-tops', helper.enum('neckType', 'Neck Type', { options: neckTypes })),
    whenType('apparel-tops', helper.enum('sleeveLength', 'Sleeve Length', { options: sleeveLengths })),
    whenType('apparel-tops', whenProperty('gender', 'mens', helper.enum('size', 'Mens Size', { options: getSizeOptions('menLetter') }))),
    whenType('apparel-tops', whenProperty('gender', 'womens', helper.enum('size', 'Womens Size', { options: getSizeOptions('womenLetter') }))),
    whenType('apparel-tops', helper.enum('size', 'Suit Size', { options: getSizeOptions('suitSizes') }))
];
