import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { addID, whenProperty } from '../../defs/when';
import { getSizeOptions } from '../../enums/sizes';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const apparelDetails = [
    helper.enum('gender', 'Gender', { enumKey: 'genders' }),
    helper.string('cutNo', 'Cut #', undefined, {}),
    helper.string('styleNo', 'Style #', undefined, {}),
    helper.string('text', 'Text', undefined, {}),
    helper.int('rnNo', 'RN #', { min: 0, max: 250000 }),
    helper.clothingCare('clothingCare', 'Clothing Care', 'bleaching'),
    helper.listOfEmbed('madeOf', 'Made Of', 'madeOfSection')
    // whenType('apparel', helper.enum('gender', 'Gender', { options: genders })),
    // whenType('apparel', helper.string('cutNo', 'Cut #', undefined, {})),
    // whenType('apparel', helper.string('styleNo', 'Style #', undefined, {})),
    // whenType('apparel', helper.string('text', 'Text', undefined, {})),
    // whenType('apparel', helper.int('rnNo', 'RN #', { min: 0, max: 250000 })),
    // whenType(
    //     'apparel',
    //     h.group({
    //         header: 'Clothing Care',
    //         columns: [
    //             helper.clothingCare('clothingCare.bleaching', 'Bleaching', 'bleaching'),
    //             helper.clothingCare('clothingCare.dryClean', 'Dry Clean', 'dryClean'),
    //             helper.clothingCare('clothingCare.drying', 'Drying', 'drying'),
    //             helper.clothingCare('clothingCare.gentleOrDelicate', 'Gentle Or Delicate', 'gentleOrDelicate'),
    //             helper.clothingCare('clothingCare.ironing', 'Ironing', 'ironing'),
    //             helper.clothingCare('clothingCare.permanentPress', 'Permanent Press', 'permanentPress'),
    //             helper.clothingCare('clothingCare.tumbleDry', 'Tumble Dry', 'tumbleDry'),
    //             helper.clothingCare('clothingCare.wash', 'Wash', 'wash'),
    //             helper.clothingCare('clothingCare.washTemperature', 'Wash Temperature', 'washTemperature')
    //         ] as MRT_ColumnDef<any>[]
    //     })
    // ),
    // whenType('apparel', helper.dictionary('madeOf', 'Made Of', 'madeOfSection', { maxLength: 25 }))
] as MRT_ColumnDef<IProduct>[];

export const apparelBottoms: MRT_ColumnDef<IProduct>[] = [
    helper.enum('closureType', 'Closure Type', { enumKey: 'closureTypes' }),
    helper.enum('fitType', 'Fit Type', { enumKey: 'fitTypes' }),
    helper.enum('legStyle', 'Leg Style', { enumKey: 'legStyles' }),
    helper.enum('lengthType', 'Length Type', { enumKey: 'garmentLengths' }),
    helper.enum('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes' }),
    helper.enum('pocketType', 'Pocket Type', { enumKey: 'pocketTypes' }),
    helper.enum('riseType', 'Rise Type', { enumKey: 'riseTypes' }),
    helper.enum('size', 'Size', { options: getSizeOptions('waistSizes') as any }),
    helper.measure('inseamSize', 'Inseam', 'in', {}),
    helper.measure('lengthSize', 'Length', 'in', {}),
    helper.measure('waistSize', 'Waist', 'in', {})
] as MRT_ColumnDef<IProduct>[];

export const apparelTops: MRT_ColumnDef<IProduct>[] = [
    helper.enum('backlineType', 'Backline Type', { enumKey: 'backlineTypes' }),
    helper.enum('closureType', 'Closure Type', { enumKey: 'closureTypes' }),
    helper.enum('collarType', 'Collar Type', { enumKey: 'collarTypes' }),
    helper.enum('cuffType', 'Cuff Type', { enumKey: 'cuffTypes' }),
    whenProperty('gender', 'womens', helper.enum('dressType', 'Dress Type', { enumKey: 'dressTypes' })),
    helper.enum('fitType', 'Fit Type', { enumKey: 'fitTypes' }),
    helper.enum('lengthType', 'Length Type', { enumKey: 'garmentLengths' }),
    helper.enum('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes' }),
    helper.enum('neckType', 'Neck Type', { enumKey: 'neckTypes' }),
    helper.enum('pocketType', 'Pocket Type', { enumKey: 'pocketTypes' }),
    helper.enum('sleeveLength', 'Sleeve Length', { enumKey: 'sleeveLengths' }),
    helper.enum('sleeveType', 'Sleeve Type', { enumKey: 'sleeveTypes' }),
    whenProperty('gender', 'mens', helper.enum('suitType', 'Suit Type', { enumKey: 'suitTypes' })),
    addID('tops-mens-size', whenProperty('gender', 'mens', helper.enum('size', 'Mens Size', { options: getSizeOptions('menLetter') }))),
    addID('tops-womens-size', whenProperty('gender', 'womens', helper.enum('size', 'Womens Size', { options: getSizeOptions('womenLetter') as any }))),
    addID('tops-suit-size', helper.enum('size', 'Suit Size', { options: getSizeOptions('suitSizes') as any })),
    helper.measure('neckSize', 'Neck Size', 'in', {}),
    helper.measure('sleeveSize', 'Sleeve Size', 'in', {}),
    helper.measure('chestSize', 'Chest Size', 'in', {}),
    helper.measure('lengthSize', 'Length Size', 'in', {})
] as MRT_ColumnDef<IProduct>[];

export const apparelBras: MRT_ColumnDef<IProduct>[] = [
    helper.enum('swimsuitBottomStyle', 'Swimsuit Bottom Style', { enumKey: 'swimsuitBottomStyles' }),
    helper.enum('swimsuitTopStyle', 'Swimsuit Top Style', { enumKey: 'swimsuitTopStyles' }),
    helper.enum('size', 'Bra Size', { options: getSizeOptions('bustSizes') }),
    helper.measure('bustSize', 'Bust Size', 'in', {})
] as MRT_ColumnDef<IProduct>[];

export const apparelFootwear: MRT_ColumnDef<IProduct>[] = [
    helper.enum('bootType', 'Boot Type', { enumKey: 'bootTypes' }),
    helper.enum('closureType', 'Closure Type', { enumKey: 'closureTypes' }),
    helper.enum('heightMapType', 'Height Map Type', { enumKey: 'heightMaps' }),
    helper.enum('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes' }),
    helper.enum('shoeHeelType', 'Shoe Heel Type', { enumKey: 'shoeHeelTypes' }),
    helper.enum('shoeWidth', 'Shoe Width Type', { enumKey: 'shoeWidths' }),
    helper.enum('strapType', 'Strap Type', { enumKey: 'strapTypes' }),
    helper.enum('toeStyle', 'Toe Style', { enumKey: 'toeStyles' }),
    helper.measure('footSize', 'Foot Size', 'in', {}),
    helper.measure('heelHeight', 'Heel Height', 'in', {}),
    whenProperty('gender', 'mens', addID('footwear-mens-size', helper.enum('size', 'Mens Size', { options: getSizeOptions('menFootwear') }))),
    whenProperty('gender', 'womens', addID('footwear-womens-size', helper.enum('size', 'Womens Size', { options: getSizeOptions('womenFootwear') }))),
    whenProperty('gender', 'boys', addID('footwear-boys-size', helper.enum('size', 'Boys Size', { options: getSizeOptions('menFootwear') }))),
    whenProperty('gender', 'girls', addID('footwear-girls-size', helper.enum('size', 'Womens Size', { options: getSizeOptions('womenFootwear') })))
] as MRT_ColumnDef<IProduct>[];
