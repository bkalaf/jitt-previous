"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apparelFootwear = exports.apparelBras = exports.apparelTops = exports.apparelBottoms = exports.apparelDetails = exports.helper = exports.h = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../../defs/col");
const sizes_1 = require("../../enums/sizes");
const _depend_1 = require("../../columns/$depend");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.apparelDetails = [
    exports.helper.enum()('gender', 'Gender', { enumKey: 'genders', id: 'apparelDetails-gender' }),
    exports.helper.string()('cutNo', 'Cut #', undefined, {}),
    exports.helper.string()('styleNo', 'Style #', undefined, {}),
    exports.helper.string()('text', 'Text', undefined, {}),
    exports.helper.int()('rnNo', 'RN #', { min: 0, max: 250000 }),
    exports.helper.clothingCare()('clothingCare', 'Clothing Care', 'bleaching'),
    exports.helper.listOfEmbed()('madeOf', 'Made Of', 'madeOfSection')
];
exports.apparelBottoms = [
    exports.helper.enum()('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelBottoms-closureType' }),
    exports.helper.enum()('fitType', 'Fit Type', { enumKey: 'fitTypes', id: 'apparelBottoms-fitType' }),
    exports.helper.enum(_depend_1.$hasDetailType.apparel.bottoms.legged())('legStyle', 'Leg Style', { enumKey: 'legStyles' }),
    exports.helper.enum()('lengthType', 'Length Type', { enumKey: 'garmentLengths', id: 'apparelBottoms-lengthType' }),
    exports.helper.enum()('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelBottoms-lifestyleType' }),
    exports.helper.enum()('pocketType', 'Pocket Type', { enumKey: 'pocketTypes', id: 'apparelBottoms-pocketType' }),
    exports.helper.enum()('riseType', 'Rise Type', { enumKey: 'riseTypes' }),
    exports.helper.enum()('size', 'Size', { options: (0, sizes_1.getSizeOptions)('waistSizes'), id: 'apparelBottoms-waistSize' }),
    exports.helper.measure(_depend_1.$hasDetailType.apparel.bottoms.legged())('inseamSize', 'Inseam', 'in', {}),
    exports.helper.measure()('lengthSize', 'Length', 'in', { id: 'apparelBottoms-lengthSize' }),
    exports.helper.measure()('waistSize', 'Waist', 'in', {})
];
// whenProperty('gender', 'womens', helper.enum('dressType', 'Dress Type', { enumKey: 'dressTypes' })),
exports.apparelTops = [
    exports.helper.enum()('backlineType', 'Backline Type', { enumKey: 'backlineTypes' }),
    exports.helper.enum()('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelTops-closureType' }),
    exports.helper.enum()('collarType', 'Collar Type', { enumKey: 'collarTypes' }),
    exports.helper.enum()('cuffType', 'Cuff Type', { enumKey: 'cuffTypes' }),
    exports.helper.enum(_depend_1.$productInfo.gender.womens)('dressType', 'Dress Type', { enumKey: 'dressTypes' }),
    exports.helper.enum()('fitType', 'Fit Type', { enumKey: 'fitTypes', id: 'apparelTops-fitType' }),
    exports.helper.enum()('lengthType', 'Length Type', { enumKey: 'garmentLengths', id: 'apparelTops-lengthType' }),
    exports.helper.enum()('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelTops-lifestyleType' }),
    exports.helper.enum()('neckType', 'Neck Type', { enumKey: 'neckTypes' }),
    exports.helper.enum()('pocketType', 'Pocket Type', { enumKey: 'pocketTypes', id: 'apparelTops-pocketType' }),
    exports.helper.enum()('sleeveLength', 'Sleeve Length', { enumKey: 'sleeveLengths' }),
    exports.helper.enum()('sleeveType', 'Sleeve Type', { enumKey: 'sleeveTypes' }),
    exports.helper.enum(_depend_1.$productInfo.gender.mens, { property: 'detailTypes', type: 'enable', dependency: ['and', { hasOneOf: ['apparel-tops'] }, { hasOneOf: ['apparel-bottoms'] }] })('suitType', 'Suit Type', { enumKey: 'suitTypes' }),
    exports.helper.enum(_depend_1.$productInfo.gender.mens)('size', 'Mens Size', { options: (0, sizes_1.getSizeOptions)('menLetter'), id: 'apparelTops-size-mensLetter' }),
    exports.helper.enum(_depend_1.$productInfo.gender.womens)('size', 'Womens Size', { options: (0, sizes_1.getSizeOptions)('womenLetter'), id: 'apparelTops-size-womensLetter' }),
    exports.helper.enum({ property: 'detailTypes', type: 'enable', dependency: ['and', { hasOneOf: ['apparel-tops'] }, { hasOneOf: ['apparel-bottoms'] }] })('size', 'Suit Size', {
        options: (0, sizes_1.getSizeOptions)('suitSizes'),
        id: 'apparelTops-size-suitSize'
    }),
    exports.helper.measure()('neckSize', 'Neck Size', 'in', {}),
    exports.helper.measure()('sleeveSize', 'Sleeve Size', 'in', {}),
    exports.helper.measure()('chestSize', 'Chest Size', 'in', {}),
    exports.helper.measure()('lengthSize', 'Length Size', 'in', {})
];
exports.apparelBras = [
    exports.helper.enum(_depend_1.$productInfo.gender.womens, _depend_1.$hasDetailType.apparel.bras.swimsuit())('swimsuitBottomStyle', 'Swimsuit Bottom Style', { enumKey: 'swimsuitBottomStyles' }),
    exports.helper.enum(_depend_1.$productInfo.gender.womens, _depend_1.$hasDetailType.apparel.bras.swimsuit())('swimsuitTopStyle', 'Swimsuit Top Style', { enumKey: 'swimsuitTopStyles' }),
    exports.helper.enum(_depend_1.$productInfo.gender.womens)('size', 'Bra Size', { options: (0, sizes_1.getSizeOptions)('bustSizes'), id: 'apparelBras-size' }),
    exports.helper.measure(_depend_1.$productInfo.gender.womens)('bustSize', 'Bust Size', 'in', {})
];
exports.apparelFootwear = [
    exports.helper.enum()('bootType', 'Boot Type', { enumKey: 'bootTypes' }),
    exports.helper.enum()('closureType', 'Closure Type', { enumKey: 'closureTypes', id: 'apparelFootwear-closureType' }),
    exports.helper.enum()('heightMapType', 'Height Map Type', { enumKey: 'heightMaps' }),
    exports.helper.enum()('lifestyleType', 'Lifestyle Type', { enumKey: 'lifestyleTypes', id: 'apparelFootwear-lifestyleType' }),
    exports.helper.enum()('shoeHeelType', 'Shoe Heel Type', { enumKey: 'shoeHeelTypes' }),
    exports.helper.enum()('shoeWidth', 'Shoe Width Type', { enumKey: 'shoeWidths' }),
    exports.helper.enum()('strapType', 'Strap Type', { enumKey: 'strapTypes', id: 'apparelFootwear-strapType' }),
    exports.helper.enum()('toeStyle', 'Toe Style', { enumKey: 'toeStyles' }),
    exports.helper.measure()('footSize', 'Foot Size', 'in', {}),
    exports.helper.measure(_depend_1.$productInfo.shoeHeelType.notNull)('heelHeight', 'Heel Height', 'in', {}),
    exports.helper.enum(_depend_1.$productInfo.gender.male)('size', 'Mens Size', { options: (0, sizes_1.getSizeOptions)('menFootwear'), id: 'apparelFootwear-male-size' }),
    exports.helper.enum(_depend_1.$productInfo.gender.female)('size', 'Womens Size', { options: (0, sizes_1.getSizeOptions)('womenFootwear'), id: 'apparelFootwear-female-size' })
];
//# sourceMappingURL=apparelDetails.js.map