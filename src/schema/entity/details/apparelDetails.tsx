import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { DetailTypes, IProduct } from '../../../types';
import { col } from '../../defs/col';
import { getSizeOptions } from '../../enums/sizes';
import { $hasDetailType, $productInfo } from '../../columns/$depend';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const apparelDetails = [
    helper.enum()('gender', 'Gender', { enumKey: 'genders', id: 'apparelDetails-gender' }),
    helper.string()('cutNo', 'Cut #', undefined, {}),
    helper.string()('styleNo', 'Style #', undefined, {}),
    helper.string()('text', 'Text', undefined, {}),
    helper.int()('rnNo', 'RN #', { min: 0, max: 250000 }),
    helper.clothingCare()('clothingCare', 'Clothing Care', 'bleaching'),
    helper.listOfEmbed()('madeOf', 'Made Of', 'madeOfSection')
] as MRT_ColumnDef<IProduct>[];

export const apparelBottoms: MRT_ColumnDef<IProduct>[] = [
    helper.enum()('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelBottoms-closureType' }),
    helper.enum()('fitType', 'Fit Type', { enumKey: 'fitTypes', id: 'apparelBottoms-fitType' }),
    helper.enum($hasDetailType.apparel.bottoms.legged())('legStyle', 'Leg Style', { enumKey: 'legStyles' }),
    helper.enum()('lengthType', 'Length Type', { enumKey: 'garmentLengths', id: 'apparelBottoms-lengthType' }),
    helper.enum()('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelBottoms-lifestyleType' }),
    helper.enum()('pocketType', 'Pocket Type', { enumKey: 'pocketTypes', id: 'apparelBottoms-pocketType' }),
    helper.enum()('riseType', 'Rise Type', { enumKey: 'riseTypes' }),
    helper.enum()('size', 'Size', { options: getSizeOptions('waistSizes') as any, id: 'apparelBottoms-waistSize' }),
    helper.measure($hasDetailType.apparel.bottoms.legged())('inseamSize', 'Inseam', 'in', {}),
    helper.measure()('lengthSize', 'Length', 'in', { id: 'apparelBottoms-lengthSize' }),
    helper.measure()('waistSize', 'Waist', 'in', {})
] as MRT_ColumnDef<IProduct>[];

// whenProperty('gender', 'womens', helper.enum('dressType', 'Dress Type', { enumKey: 'dressTypes' })),
export const apparelTops: MRT_ColumnDef<IProduct>[] = [
    helper.enum()('backlineType', 'Backline Type', { enumKey: 'backlineTypes' }),
    helper.enum()('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelTops-closureType' }),
    helper.enum()('collarType', 'Collar Type', { enumKey: 'collarTypes' }),
    helper.enum()('cuffType', 'Cuff Type', { enumKey: 'cuffTypes' }),
    helper.enum($productInfo.gender.womens)('dressType', 'Dress Type', { enumKey: 'dressTypes' }),
    helper.enum()('fitType', 'Fit Type', { enumKey: 'fitTypes', id: 'apparelTops-fitType' }),
    helper.enum()('lengthType', 'Length Type', { enumKey: 'garmentLengths', id: 'apparelTops-lengthType' }),
    helper.enum()('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelTops-lifestyleType' }),
    helper.enum()('neckType', 'Neck Type', { enumKey: 'neckTypes' }),
    helper.enum()('pocketType', 'Pocket Type', { enumKey: 'pocketTypes', id: 'apparelTops-pocketType' }),
    helper.enum()('sleeveLength', 'Sleeve Length', { enumKey: 'sleeveLengths' }),
    helper.enum()('sleeveType', 'Sleeve Type', { enumKey: 'sleeveTypes' }),
    helper.enum($productInfo.gender.mens, { property: 'detailTypes', type: 'enable', dependency: ['and', { hasOneOf: ['apparel-tops'] as DetailTypes[] }, { hasOneOf: ['apparel-bottoms'] as DetailTypes[] }] } as IDependency<IProduct, 'detailTypes'>)(
        'suitType',
        'Suit Type',
        { enumKey: 'suitTypes' }
    ),
    helper.enum($productInfo.gender.mens)('size', 'Mens Size', { options: getSizeOptions('menLetter'), id: 'apparelTops-size-mensLetter' }),
    helper.enum($productInfo.gender.womens)('size', 'Womens Size', { options: getSizeOptions('womenLetter'), id: 'apparelTops-size-womensLetter' }),
    helper.enum({ property: 'detailTypes', type: 'enable', dependency: ['and', { hasOneOf: ['apparel-tops'] as DetailTypes[] }, { hasOneOf: ['apparel-bottoms'] as DetailTypes[] }] } as IDependency<IProduct, 'detailTypes'>)('size', 'Suit Size', {
        options: getSizeOptions('suitSizes'),
        id: 'apparelTops-size-suitSize'
    }),
    helper.measure()('neckSize', 'Neck Size', 'in', {}),
    helper.measure()('sleeveSize', 'Sleeve Size', 'in', {}),
    helper.measure()('chestSize', 'Chest Size', 'in', {}),
    helper.measure()('lengthSize', 'Length Size', 'in', {})
] as MRT_ColumnDef<IProduct>[];

export const apparelBras: MRT_ColumnDef<IProduct>[] = [
    helper.enum($productInfo.gender.womens, $hasDetailType.apparel.bras.swimsuit())('swimsuitBottomStyle', 'Swimsuit Bottom Style', { enumKey: 'swimsuitBottomStyles' }),
    helper.enum($productInfo.gender.womens, $hasDetailType.apparel.bras.swimsuit())('swimsuitTopStyle', 'Swimsuit Top Style', { enumKey: 'swimsuitTopStyles' }),
    helper.enum($productInfo.gender.womens)('size', 'Bra Size', { options: getSizeOptions('bustSizes'), id: 'apparelBras-size' }),
    helper.measure($productInfo.gender.womens)('bustSize', 'Bust Size', 'in', {})
] as MRT_ColumnDef<IProduct>[];

export const apparelFootwear: MRT_ColumnDef<IProduct>[] = [
    helper.enum()('bootType', 'Boot Type', { enumKey: 'bootTypes' }),
    helper.enum()('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelFootwear-closureType' }),
    helper.enum()('heightMapType', 'Height Map Type', { enumKey: 'heightMaps' }),
    helper.enum()('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelFootwear-lifestyleType' }),
    helper.enum()('shoeHeelType', 'Shoe Heel Type', { enumKey: 'shoeHeelTypes' }),
    helper.enum()('shoeWidth', 'Shoe Width Type', { enumKey: 'shoeWidths' }),
    helper.enum()('strapType', 'Strap Type', { enumKey: 'strapTypes', id: 'apparelFootwear-strapType' }),
    helper.enum()('toeStyle', 'Toe Style', { enumKey: 'toeStyles' }),
    helper.measure()('footSize', 'Foot Size', 'in', {}),
    helper.measure($productInfo.shoeHeelType.notNull)('heelHeight', 'Heel Height', 'in', {}),
    helper.enum($productInfo.gender.male)('size', 'Mens Size', { options: getSizeOptions('menFootwear'), id: 'apparelFootwear-male-size' }),
    helper.enum($productInfo.gender.female)('size', 'Womens Size', { options: getSizeOptions('womenFootwear'), id: 'apparelFootwear-female-size' })
] as MRT_ColumnDef<IProduct>[];
