"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.properties = void 0;
const getProperty_1 = require("../../../common/object/getProperty");
const surround_1 = require("../../../common/text/surround");
const sizes_1 = require("../../../schema/enums/sizes");
const titleParts_1 = require("./titleParts");
exports.properties = [
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Has Original Packaging',
        key: 'flags-inOriginalPackaging',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('inOriginalPackaging'),
        titleIndex: null,
        importance: 118
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.asins', p),
        section: 'attributes',
        header: 'ASINs',
        key: 'asins',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.comma),
        titleIndex: null,
        importance: 138
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.brand', p),
        section: 'attributes',
        header: 'Brand Name',
        key: 'brand',
        titleFunc: (0, titleParts_1.ofLookup)('name'),
        narrativeFunc: (0, titleParts_1.ofLookup)('name'),
        titleIndex: 2,
        importance: 0
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.includes', p),
        section: 'lists',
        header: 'Includes',
        key: 'includes',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.newLine, titleParts_1.ofIncludedItem),
        titleIndex: null,
        importance: 97
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.features', p),
        section: 'lists',
        header: 'Features',
        key: 'features',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.newLine),
        titleIndex: null,
        importance: 92
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Vintage',
        key: 'flags-isVintage',
        titleFunc: (0, titleParts_1.ofFlag)('isVintage'),
        narrativeFunc: (0, titleParts_1.ofFlag)('isVintage'),
        titleIndex: null,
        importance: 22
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Rare',
        key: 'flags-isRare',
        titleFunc: (0, titleParts_1.ofFlag)('isRare'),
        narrativeFunc: (0, titleParts_1.ofFlag)('isRare'),
        titleIndex: 1,
        importance: 23
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Collectible',
        key: 'flags-isCollectible',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isCollectible'),
        titleIndex: null,
        importance: 98
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Has Manual',
        key: 'flags-hasManual',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('hasManual'),
        titleIndex: null,
        importance: 99
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: "Collector's Edition",
        key: 'flags-isCollectorsEdition',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isCollectorsEdition'),
        titleIndex: null,
        importance: 117
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: "Director's Edition",
        key: 'flags-isDirectorsEdition',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isDirectorsEdition'),
        titleIndex: null,
        importance: 116
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Widescreen',
        key: 'flags-isWidescreen',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isWidescreen'),
        titleIndex: null,
        importance: 75
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Subtitled',
        key: 'flags-isSubtitled',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isSubtitled'),
        titleIndex: null,
        importance: 132
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Discontinued',
        key: 'flags-isDiscontinued',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isDiscontinued'),
        titleIndex: null,
        importance: 131
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Unopened',
        key: 'flags-isUnopened',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isUnopened'),
        titleIndex: null,
        importance: 77
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Unrated',
        key: 'flags-isUnrated',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isUnrated'),
        titleIndex: null,
        importance: 76
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flags', p),
        section: 'flags',
        header: 'Closed-Captioned',
        key: 'flags-isClosedCaptioned',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofFlag)('isClosedCaptioned'),
        titleIndex: null,
        importance: 141
    },
    {
        extractor: (p) => ({ length: (0, getProperty_1.getProperty)('product.length', p), width: (0, getProperty_1.getProperty)('product.width', p), height: (0, getProperty_1.getProperty)('product.height', p) }),
        section: 'specifications',
        header: 'Dimensions',
        key: 'dimensions',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofDimension,
        titleIndex: null,
        importance: 67
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.weight', p),
        section: 'specifications',
        header: 'Weight',
        key: 'weight',
        titleFunc: null,
        narrativeFunc: titleParts_1.OBSOLETE_ofWeight,
        titleIndex: null,
        importance: 69
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.modelName', p),
        section: 'attributes',
        header: 'Model Name',
        key: 'modelName',
        titleFunc: titleParts_1.ofIdentity,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: 62,
        importance: 6
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.modelNo', p),
        section: 'attributes',
        header: 'Model #',
        key: 'modelNo',
        titleFunc: titleParts_1.ofIdentity,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: 49,
        importance: 44
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.notes', p),
        section: 'attributes',
        header: 'Notes',
        key: 'notes',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 86
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.upcs', p),
        section: 'attributes',
        header: 'UPCs',
        key: 'upcs-upc-a',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofBarcode)('upc'),
        titleIndex: null,
        importance: 68
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.upcs', p),
        section: 'attributes',
        header: 'EANs',
        key: 'upcs-ean',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofBarcode)('ean'),
        titleIndex: null,
        importance: 111
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.upcs', p),
        section: 'attributes',
        header: 'ISBN10',
        key: 'upcs-isbn-10',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofBarcode)('isbn-10'),
        titleIndex: null,
        importance: 81
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.upcs', p),
        section: 'attributes',
        header: 'ISBN13',
        key: 'upcs-isbn-13',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofBarcode)('isbn-13'),
        titleIndex: null,
        importance: 82
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.circa', p),
        section: 'attributes',
        header: 'Circa',
        key: 'circa',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 130
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.color', p),
        section: 'attributes',
        header: 'Color',
        key: 'color',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(', ', (0, titleParts_1.ofEnum)('productColors')),
        titleIndex: null,
        importance: 109
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.description', p),
        section: 'attributes',
        header: 'Description',
        key: 'description',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 66
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.testedOn', p),
        section: 'attributes',
        header: 'Tested On',
        key: 'testedOn',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofDate)('mm-dd-yyyy'),
        titleIndex: null,
        importance: 112
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.itemType', p),
        section: 'none',
        header: 'Item Type',
        key: 'itemType',
        titleFunc: titleParts_1.ofIdentity,
        narrativeFunc: null,
        titleIndex: 70,
        importance: 4
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.gender', p),
        section: 'attributes',
        header: 'Gender',
        key: 'gender',
        titleFunc: (0, titleParts_1.ofEnum)('genders'),
        narrativeFunc: (0, titleParts_1.ofEnum)('genders'),
        titleIndex: 3,
        importance: 2
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.cutNo', p),
        section: 'attributes',
        header: 'Cut #',
        key: 'cutNo',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 139
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.styleNo', p),
        section: 'attributes',
        header: 'Style #',
        key: 'styleNo',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 144
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.text', p),
        section: 'attributes',
        header: 'Text',
        key: 'text',
        titleFunc: surround_1.surroundQuotesIgnore,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: 28,
        importance: 27
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.rnNo', p),
        section: 'attributes',
        header: 'RN #',
        key: 'rnNo',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 140
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.clothingCare', p),
        section: 'attributes',
        header: 'Care Instructions',
        key: 'clothingCare',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofClothingCare,
        titleIndex: null,
        importance: 106
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.madeOf', p),
        section: 'attributes',
        header: 'Made Of',
        key: 'madeOf',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofMadeOf,
        titleIndex: null,
        importance: 96
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.bootType', p),
        section: 'attributes',
        header: 'Boot Type',
        key: 'bootType',
        titleFunc: (0, titleParts_1.ofEnum)('bootTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('bootTypes'),
        titleIndex: 24,
        importance: 12
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.footSize', p),
        section: 'measurements',
        header: 'Shoe',
        key: 'footSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 91
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.heelHeight', p),
        section: 'specifications',
        header: 'Heel Height',
        key: 'heelHeight',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 34
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.heightMapType', p),
        section: 'attributes',
        header: 'Height Map',
        key: 'heightMapType',
        titleFunc: (0, titleParts_1.ofEnum)('heightMaps'),
        narrativeFunc: (0, titleParts_1.ofEnum)('heightMaps'),
        titleIndex: 7,
        importance: 51
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.shoeHeelType', p),
        section: 'attributes',
        header: 'Heel Type',
        key: 'shoeHeelType',
        titleFunc: (0, titleParts_1.ofEnum)('shoeHeelTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('shoeHeelTypes'),
        titleIndex: 8,
        importance: 33
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.shoeWidth', p),
        section: 'attributes',
        header: 'Width Type',
        key: 'shoeWidth',
        titleFunc: (0, titleParts_1.ofEnum)('shoeWidths'),
        narrativeFunc: (0, titleParts_1.ofEnum)('shoeWidths'),
        titleIndex: 22,
        importance: 36
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.strapType', p),
        section: 'attributes',
        header: 'Strap Type',
        key: 'strapType',
        titleFunc: (0, titleParts_1.ofEnum)('strapTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('strapTypes'),
        titleIndex: 23,
        importance: 46
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.toeStyle', p),
        section: 'attributes',
        header: 'Toe Style',
        key: 'toeStyle',
        titleFunc: (0, titleParts_1.ofEnum)('toeStyles'),
        narrativeFunc: (0, titleParts_1.ofEnum)('toeStyles'),
        titleIndex: 6,
        importance: 50
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.closureType', p),
        section: 'attributes',
        header: 'Closure Type',
        key: 'closureType',
        titleFunc: (0, titleParts_1.ofEnum)('closureTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('closureTypes'),
        titleIndex: 5,
        importance: 53
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.fitType', p),
        section: 'attributes',
        header: 'Fit Type',
        key: 'fitType',
        titleFunc: (0, titleParts_1.ofEnum)('fitTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('fitTypes'),
        titleIndex: 9,
        importance: 54
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.inseamSize', p),
        section: 'measurements',
        header: 'Inseam',
        key: 'inseamSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 90
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.legStyle', p),
        section: 'attributes',
        header: 'Leg Style',
        key: 'legStyle',
        titleFunc: (0, titleParts_1.ofEnum)('legStyles'),
        narrativeFunc: (0, titleParts_1.ofEnum)('legStyles'),
        titleIndex: 19,
        importance: 9
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.lengthSize', p),
        section: 'measurements',
        header: 'Length',
        key: 'lengthSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 89
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.lengthType', p),
        section: 'attributes',
        header: 'Length Type',
        key: 'lengthType',
        titleFunc: (0, titleParts_1.ofEnum)('garmentLengths'),
        narrativeFunc: (0, titleParts_1.ofEnum)('garmentLengths'),
        titleIndex: 20,
        importance: 37
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.lifestyleType', p),
        section: 'attributes',
        header: 'Lifestyle Type',
        key: 'lifestyleType',
        titleFunc: (0, titleParts_1.ofEnum)('lifestyleTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('lifestyleTypes'),
        titleIndex: 12,
        importance: 55
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.pocketType', p),
        section: 'attributes',
        header: 'Pocket Type',
        key: 'pocketType',
        titleFunc: (0, titleParts_1.ofEnum)('pocketTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('pocketTypes'),
        titleIndex: 13,
        importance: 48
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.riseType', p),
        section: 'attributes',
        header: 'Rise Type',
        key: 'riseType',
        titleFunc: (0, titleParts_1.ofEnum)('riseTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('riseTypes'),
        titleIndex: 14,
        importance: 30
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.size', p),
        section: 'attributes',
        header: 'Size',
        key: 'size',
        titleFunc: (value) => (0, surround_1.surroundParensIgnore)(value ? sizes_1.sizes[value.toString()].size : undefined),
        narrativeFunc: (value) => (0, surround_1.surroundParensIgnore)(value ? sizes_1.sizes[value.toString()].size : undefined),
        titleIndex: 29,
        importance: 7
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.waistSize', p),
        section: 'measurements',
        header: 'Waist',
        key: 'waistSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 84
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.bustSize', p),
        section: 'measurements',
        header: 'Bust',
        key: 'bustSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 104
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.swimsuitBottomStyle', p),
        section: 'attributes',
        header: 'Swim Bottoms Style',
        key: 'swimsuitBottomStyle',
        titleFunc: (0, titleParts_1.ofEnum)('swimsuitBottomStyles'),
        narrativeFunc: (0, titleParts_1.ofEnum)('swimsuitBottomStyles'),
        titleIndex: 27,
        importance: 28
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.swimsuitTopStyle', p),
        section: 'attributes',
        header: 'Swim Tops Style',
        key: 'swimsuitTopStyle',
        titleFunc: (0, titleParts_1.ofEnum)('swimsuitTopStyles'),
        narrativeFunc: (0, titleParts_1.ofEnum)('swimsuitTopStyles'),
        titleIndex: 26,
        importance: 29
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.backlineType', p),
        section: 'attributes',
        header: 'Backline Type',
        key: 'backlineType',
        titleFunc: (0, titleParts_1.ofEnum)('backlineTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('backlineTypes'),
        titleIndex: 15,
        importance: 56
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.chestSize', p),
        section: 'measurements',
        header: 'Chest',
        key: 'chestSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 95
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.collarType', p),
        section: 'attributes',
        header: 'Collar Type',
        key: 'collarType',
        titleFunc: (0, titleParts_1.ofEnum)('collarTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('collarTypes'),
        titleIndex: 10,
        importance: 32
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.cuffType', p),
        section: 'attributes',
        header: 'Cuff Type',
        key: 'cuffType',
        titleFunc: (0, titleParts_1.ofEnum)('cuffTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('cuffTypes'),
        titleIndex: 17,
        importance: 35
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.dressType', p),
        section: 'attributes',
        header: 'Dress Type',
        key: 'dressType',
        titleFunc: (0, titleParts_1.ofEnum)('dressTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('dressTypes'),
        titleIndex: 21,
        importance: 10
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.neckSize', p),
        section: 'measurements',
        header: 'Neck',
        key: 'neckSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 87
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.neckType', p),
        section: 'attributes',
        header: 'Neck Type',
        key: 'neckType',
        titleFunc: (0, titleParts_1.ofEnum)('neckTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('neckTypes'),
        titleIndex: 11,
        importance: 49
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.sleeveSize', p),
        section: 'measurements',
        header: 'Sleeve',
        key: 'sleeveSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 85
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.sleeveType', p),
        section: 'attributes',
        header: 'Sleeve Type',
        key: 'sleeveType',
        titleFunc: (0, titleParts_1.ofEnum)('sleeveTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('sleeveTypes'),
        titleIndex: 16,
        importance: 47
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.sleeveLength', p),
        section: 'attributes',
        header: 'Sleeve Length',
        key: 'sleeveLength',
        titleFunc: (0, titleParts_1.ofEnum)('sleeveLengths'),
        narrativeFunc: (0, titleParts_1.ofEnum)('sleeveLengths'),
        titleIndex: 18,
        importance: 8
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.suitType', p),
        section: 'attributes',
        header: 'Suit Type',
        key: 'suitType',
        titleFunc: (0, titleParts_1.ofEnum)('suitTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('suitTypes'),
        titleIndex: 25,
        importance: 11
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.awards', p),
        section: 'lists',
        header: 'Awards',
        key: 'awards',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.newLine),
        titleIndex: null,
        importance: 121
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.copyright', p),
        section: 'attributes',
        header: 'Copyright',
        key: 'copyright',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 110
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.mediaSubtitle', p),
        section: 'none',
        header: 'Subtitle',
        key: 'mediaSubtitle',
        titleFunc: surround_1.surroundParensIgnore,
        narrativeFunc: null,
        titleIndex: 31,
        importance: 20
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.mediaTitle', p),
        section: 'none',
        header: 'Title',
        key: 'mediaTitle',
        titleFunc: titleParts_1.ofIdentity,
        narrativeFunc: null,
        titleIndex: 30,
        importance: 1
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.authors', p),
        section: 'attributes',
        header: 'Authors',
        key: 'authors',
        titleFunc: (value) => { var _a; return (value != null && value.length > 0 ? 'by '.concat((_a = (0, titleParts_1.ofList)(titleParts_1.char.comma)(value)) !== null && _a !== void 0 ? _a : '') : undefined); },
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.comma),
        titleIndex: 39,
        importance: 45
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.blurb', p),
        section: 'text',
        header: 'Blurb',
        key: 'blurb',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 146
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.bookGenre', p),
        section: 'attributes',
        header: 'Genre',
        key: 'bookGenre',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('bookGenres'),
        titleIndex: null,
        importance: 105
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.bookType', p),
        section: 'attributes',
        header: 'Book Type',
        key: 'bookType',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('bookTypes'),
        titleIndex: null,
        importance: 129
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.edition', p),
        section: 'attributes',
        header: 'Edition',
        key: 'edition',
        titleFunc: (0, titleParts_1.ofSuffix)(' edition', titleParts_1.ofFirst),
        narrativeFunc: titleParts_1.ofFirst,
        titleIndex: 33,
        importance: 38
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.illustrators', p),
        section: 'lists',
        header: 'Illustrators',
        key: 'illustrators',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.comma),
        titleIndex: null,
        importance: 136
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.language', p),
        section: 'attributes',
        header: 'Language',
        key: 'language',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('languages'),
        titleIndex: null,
        importance: 123
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.pages', p),
        section: 'attributes',
        header: 'Pages',
        key: 'pages',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)(' pages'),
        titleIndex: null,
        importance: 133
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.publishers', p),
        section: 'attributes',
        header: 'Publishers',
        key: 'publishers',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.comma),
        titleIndex: null,
        importance: 142
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.collectionOf', p),
        section: 'lists',
        header: 'In Collection',
        key: 'collectionOf',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.newLine),
        titleIndex: null,
        importance: 108
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.count', p),
        section: 'attributes',
        header: 'Disk Count',
        key: 'count',
        titleFunc: (value) => (0, surround_1.surroundParensIgnore)(value ? `${value} disc` : undefined),
        narrativeFunc: (value) => (0, surround_1.surroundParensIgnore)(value ? `${value} disc` : undefined),
        titleIndex: 35,
        importance: 52
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.directedBy', p),
        section: 'attributes',
        header: 'Directed By',
        key: 'directedBy',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.comma),
        titleIndex: null,
        importance: 137
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.videoFormat', p),
        section: 'attributes',
        header: 'Format',
        key: 'videoFormat',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('videoFormatTypes'),
        titleIndex: null,
        importance: 70
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.videoGenre', p),
        section: 'attributes',
        header: 'Genre',
        key: 'videoGenre',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('movieGenres'),
        titleIndex: null,
        importance: 83
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.movieRating', p),
        section: 'attributes',
        header: 'Rating',
        key: 'movieRating',
        titleFunc: (0, titleParts_1.ofRating)('movieRatings'),
        narrativeFunc: (0, titleParts_1.ofEnum)('movieRatings'),
        titleIndex: 36,
        importance: 39
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.runtime', p),
        section: 'attributes',
        header: 'Runtime',
        key: 'runtime',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('min'),
        titleIndex: null,
        importance: 114
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.starring', p),
        section: 'attributes',
        header: 'Starring',
        key: 'starring',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.comma),
        titleIndex: null,
        importance: 135
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.tvRating', p),
        section: 'attributes',
        header: 'Rating',
        key: 'tvRating',
        titleFunc: (0, titleParts_1.ofRating)('tvRatings'),
        narrativeFunc: (0, titleParts_1.ofEnum)('tvRatings'),
        titleIndex: 37,
        importance: 40
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.videoType', p),
        section: 'attributes',
        header: 'Video Type',
        key: 'videoType',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('videoTypes'),
        titleIndex: null,
        importance: 113
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.ESRBRating', p),
        section: 'attributes',
        header: 'ESRB Rating',
        key: 'ESRBRating',
        titleFunc: (0, titleParts_1.ofRating)('ESRBRatings'),
        narrativeFunc: (0, titleParts_1.ofRating)('ESRBRatings'),
        titleIndex: 38,
        importance: 41
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.consoleType', p),
        section: 'attributes',
        header: 'Console Type',
        key: 'consoleType',
        titleFunc: (0, titleParts_1.ofPrefix)('For ', (0, titleParts_1.ofEnum)('consoleTypes')),
        narrativeFunc: (0, titleParts_1.ofEnum)('consoleTypes'),
        titleIndex: 32,
        importance: 5
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.studio', p),
        section: 'attributes',
        header: 'Studio',
        key: 'studio',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 143
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.artist', p),
        section: 'attributes',
        header: 'Artist',
        key: 'artist',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 103
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.musicFormat', p),
        section: 'attributes',
        header: 'Format',
        key: 'musicFormat',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('musicFormatTypes'),
        titleIndex: null,
        importance: 73
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.musicGenre', p),
        section: 'attributes',
        header: 'Genre',
        key: 'musicGenre',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('musicGenres'),
        titleIndex: null,
        importance: 88
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.tracks', p),
        section: 'lists',
        header: 'Tracks',
        key: 'tracks',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.newLine, titleParts_1.ofTrack),
        titleIndex: null,
        importance: 134
    },
    {
        extractor: (p) => ({ videoFormat: (0, getProperty_1.getProperty)('product.videoFormat', p), musicFormat: (0, getProperty_1.getProperty)('product.musicFormat', p), copyright: (0, getProperty_1.getProperty)('product.copyright', p) }),
        section: 'none',
        header: null,
        key: 'copyright-format',
        titleFunc: titleParts_1.ofCopyright,
        narrativeFunc: null,
        titleIndex: 34,
        importance: 24
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.cableType', p),
        section: 'attributes',
        header: 'Cable Type',
        key: 'cableType',
        titleFunc: titleParts_1.ofCableType,
        narrativeFunc: titleParts_1.ofCableType,
        titleIndex: 48,
        importance: 31
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.cordLength', p),
        section: 'specifications',
        header: 'Cord Length',
        key: 'cordLength',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 93
    },
    {
        extractor: (p) => ({ connectors: (0, getProperty_1.getProperty)('product.connectors', p), cableType: (0, getProperty_1.getProperty)('product.cableType', p) }),
        section: 'specifications',
        header: 'Connectors',
        key: 'connectors',
        titleFunc: titleParts_1.ofConnector,
        narrativeFunc: titleParts_1.ofConnector,
        titleIndex: 47,
        importance: 16
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.compatibleWith', p),
        section: 'lists',
        header: 'Compatible With',
        key: 'compatibleWith',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.newLine),
        titleIndex: null,
        importance: 119
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.input', p),
        section: 'specifications',
        header: 'Input',
        key: 'input',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofCurrent,
        titleIndex: null,
        importance: 74
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.output', p),
        section: 'specifications',
        header: 'Output',
        key: 'output',
        titleFunc: titleParts_1.ofCurrent,
        narrativeFunc: titleParts_1.ofCurrent,
        titleIndex: 46,
        importance: 17
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.powerTypes', p),
        section: 'attributes',
        header: 'Powered By',
        key: 'powerTypes',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.comma),
        titleIndex: null,
        importance: 101
    },
    {
        extractor: (p) => ({ batteryCount: (0, getProperty_1.getProperty)('product.batteryCount', p), batteryType: (0, getProperty_1.getProperty)('product.batteryType', p) }),
        section: 'attributes',
        header: 'Takes:',
        key: 'battery',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofBattery,
        titleIndex: null,
        importance: 107
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.testedOn', p),
        section: 'attributes',
        header: 'Tested On',
        key: 'testedOn',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofDate)('mm-dd-yyyy'),
        titleIndex: null,
        importance: 112
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.aspectRatio', p),
        section: 'specifications',
        header: 'Aspect Ratio',
        key: 'aspectRatio',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('aspectRatios'),
        titleIndex: null,
        importance: 102
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.capacity', p),
        section: 'specifications',
        header: 'Capacity',
        key: 'capacity',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('GB'),
        titleIndex: null,
        importance: 78
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.cellCarrier', p),
        section: 'attributes',
        header: 'Cell Carrier',
        key: 'cellCarrier',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('cellCarriers'),
        titleIndex: null,
        importance: 120
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.os', p),
    //     section: 'attributes',
    //     header: 'OS',
    //     key: 'os',
    //     titleFunc: null,
    //     narrativeFunc: ofEnum('operatingSystems'),
    //     titleIndex: null,
    //     importance: 126
    // },
    // {
    //     extractor: (p: ISku) => getProperty('product.osVersion', p),
    //     section: 'attributes',
    //     header: 'OS Version',
    //     key: 'osVersion',
    //     titleFunc: null,
    //     narrativeFunc: ofIdentity,
    //     titleIndex: null,
    //     importance: 127
    // },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.screenSize', p),
        section: 'specifications',
        header: 'Screen Size',
        key: 'screenSize',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)(titleParts_1.char.quote),
        titleIndex: null,
        importance: 71
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.density', p),
        section: 'specifications',
        header: 'Density',
        key: 'readonly density',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('g/cm3'),
        titleIndex: null,
        importance: 79
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.metal', p),
        section: 'attributes',
        header: 'Metal',
        key: 'metal',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('metalTypes'),
        titleIndex: null,
        importance: 72
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flatwareInventory', p),
        section: 'lists',
        header: 'Set of',
        key: 'flatwareInventory',
        titleFunc: (0, titleParts_1.ofDictionary)((0, titleParts_1.ofPiece)('flatwareTypes')),
        narrativeFunc: (0, titleParts_1.ofDictionary)((0, titleParts_1.ofPiece)('flatwareTypes')),
        titleIndex: 50,
        importance: 18
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.pattern', p),
        section: 'lists',
        header: 'Pattern',
        key: 'pattern',
        titleFunc: surround_1.surroundQuotesIgnore,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: 52,
        importance: 26
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.dinnerwareInventory', p),
        section: 'attributes',
        header: 'Set of',
        key: 'dinnerwareInventory',
        titleFunc: (0, titleParts_1.ofDictionary)((0, titleParts_1.ofPiece)('dinnerwareTypes'), titleParts_1.char.comma),
        narrativeFunc: (0, titleParts_1.ofDictionary)((0, titleParts_1.ofPiece)('dinnerwareTypes')),
        titleIndex: 51,
        importance: 19
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.applianceType', p),
        section: 'attributes',
        header: 'Appliance Type',
        key: 'applianceType',
        titleFunc: (0, titleParts_1.ofEnum)('applianceTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('applianceTypes'),
        titleIndex: 63,
        importance: 3
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.clubType', p),
        section: 'attributes',
        header: 'Club Type',
        key: 'clubType',
        titleFunc: (0, titleParts_1.ofEnum)('clubTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('clubTypes'),
        titleIndex: 44,
        importance: 13
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.flexType', p),
        section: 'attributes',
        header: 'Flex Type',
        key: 'flexType',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('flexTypes'),
        titleIndex: null,
        importance: 128
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.handOrientation', p),
        section: 'attributes',
        header: 'Hand Orientation',
        key: 'handOrientation',
        titleFunc: titleParts_1.ofHandOrientation,
        narrativeFunc: (0, titleParts_1.ofEnum)('handOrientations'),
        titleIndex: 45,
        importance: 25
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.ironType', p),
        section: 'attributes',
        header: 'Iron Type',
        key: 'ironType',
        titleFunc: (0, titleParts_1.ofEnum)('ironTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('ironTypes'),
        titleIndex: 42,
        importance: 14
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.clubLength', p),
        section: 'specifications',
        header: 'Club Length',
        key: 'clubLength',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('in', 'cm', 2.54),
        titleIndex: null,
        importance: 94
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.lie', p),
        section: 'specifications',
        header: 'Lie',
        key: 'lie',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('°'),
        titleIndex: null,
        importance: 124
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.loft', p),
        section: 'specifications',
        header: 'Loft',
        key: 'loft',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('°'),
        titleIndex: null,
        importance: 125
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.material', p),
        section: 'attributes',
        header: 'Material',
        key: 'material',
        titleFunc: (0, titleParts_1.ofEnum)('materials'),
        narrativeFunc: (0, titleParts_1.ofEnum)('materials'),
        titleIndex: 40,
        importance: 43
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.shaftType', p),
        section: 'specifications',
        header: 'Shaft Type',
        key: 'shaftType',
        titleFunc: (0, titleParts_1.ofSuffix)(' shaft', (0, titleParts_1.ofEnum)('shaftTypes')),
        narrativeFunc: (0, titleParts_1.ofEnum)('shaftTypes'),
        titleIndex: 41,
        importance: 42
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.swingWeight', p),
        section: 'attributes',
        header: 'Swing Weight',
        key: 'swingWeight',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 145
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.wedgeType', p),
        section: 'attributes',
        header: 'Wedge Type',
        key: 'wedgeType',
        titleFunc: (0, titleParts_1.ofEnum)('wedgeTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('wedgeTypes'),
        titleIndex: 43,
        importance: 15
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.ages', p),
        section: 'attributes',
        header: 'Ages',
        key: 'ages',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofMinMax,
        titleIndex: null,
        importance: 122
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.players', p),
        section: 'attributes',
        header: 'Players',
        key: 'players',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofMinMax,
        titleIndex: null,
        importance: 115
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.pieceCount', p),
        section: 'attributes',
        header: 'Piece Count',
        key: 'pieceCount',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: null,
        importance: 100
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('condition', p),
        section: 'none',
        header: null,
        key: 'condition',
        titleFunc: null,
        narrativeFunc: null,
        titleIndex: null,
        importance: 147
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('defects', p),
        section: 'lists',
        header: 'Defects',
        key: 'defects',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.newLine),
        titleIndex: null,
        importance: 80
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('quantity', p),
        section: 'none',
        header: null,
        key: 'quantity',
        titleFunc: null,
        narrativeFunc: null,
        titleIndex: null,
        importance: 149
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('skus', p),
        section: 'attributes',
        header: 'SKU',
        key: 'skus',
        titleFunc: null,
        narrativeFunc: titleParts_1.ofSku,
        titleIndex: null,
        importance: 148
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.partNumbers', p),
        section: 'lists',
        header: 'Part #s',
        key: 'partNumbers',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofList)(titleParts_1.char.newLine),
        titleIndex: null,
        importance: 150
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.driveType', p),
        section: 'attributes',
        header: 'Drive Type',
        key: 'driveType',
        titleFunc: (0, titleParts_1.ofEnum)('driveTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('driveTypes'),
        titleIndex: 69,
        importance: 151
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.driveForm', p),
        section: 'attributes',
        header: 'Drive Format',
        key: 'driveForm',
        titleFunc: (0, titleParts_1.ofEnum)('driveFormFactors'),
        narrativeFunc: (0, titleParts_1.ofEnum)('driveFormFactors'),
        titleIndex: 64,
        importance: 152
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.connectivity', p),
        section: 'attributes',
        header: 'Connectivity',
        key: 'connectivity',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofEnum)('connectivity'),
        titleIndex: null,
        importance: 153
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.driveInterface', p),
        section: 'attributes',
        header: 'Drive Interface',
        key: 'driveInterface',
        titleFunc: (0, titleParts_1.ofEnum)('driveInterfaces'),
        narrativeFunc: (0, titleParts_1.ofEnum)('driveInterfaces'),
        titleIndex: 67,
        importance: 154
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.capacity', p),
        section: 'attributes',
        header: 'Capacity',
        key: 'capacity',
        titleFunc: titleParts_1.ofCapacity,
        narrativeFunc: titleParts_1.ofCapacity,
        titleIndex: 65,
        importance: 155
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.writeSpeed', p),
        section: 'attributes',
        header: 'Write Speed',
        key: 'writeSpeed',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('MB/s'),
        titleIndex: null,
        importance: 159
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.readSpeed', p),
        section: 'attributes',
        header: 'Read Speed',
        key: 'readSpeed',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('MB/s'),
        titleIndex: null,
        importance: 160
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.dataTransferRate', p),
        section: 'attributes',
        header: 'Data Transfer Rate',
        key: 'dataTransferRate',
        titleFunc: null,
        narrativeFunc: (0, titleParts_1.ofMeasure)('MBit/s'),
        titleIndex: null,
        importance: 156
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.rpm', p),
        section: 'attributes',
        header: 'RPM',
        key: 'rpm',
        titleFunc: titleParts_1.ofIdentity,
        narrativeFunc: (0, titleParts_1.ofMeasure)('RPM'),
        titleIndex: 66,
        importance: 157
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.memoryType', p),
        section: 'attributes',
        header: 'Memory Type',
        key: 'memoryType',
        titleFunc: (0, titleParts_1.ofEnum)('memoryTypes'),
        narrativeFunc: (0, titleParts_1.ofEnum)('memoryTypes'),
        titleIndex: 53,
        importance: 58
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.memoryForm', p),
        section: 'attributes',
        header: 'Memory Format',
        key: 'memoryForm',
        titleFunc: (0, titleParts_1.ofEnum)('memoryFormFactors'),
        narrativeFunc: (0, titleParts_1.ofEnum)('memoryFormFactors'),
        titleIndex: 59,
        importance: 61
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.compatibleDevices', p),
        section: 'attributes',
        header: 'Compatible Devices',
        key: 'compatibleDevices',
        titleFunc: (0, titleParts_1.ofList)(', ', (0, titleParts_1.ofEnum)('compatibleDevices')),
        narrativeFunc: (0, titleParts_1.ofList)(', ', (0, titleParts_1.ofEnum)('compatibleDevices')),
        titleIndex: 61,
        importance: 65
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.memorySize', p),
    //     section: 'attributes',
    //     header: 'Memory Size',
    //     key: 'memorySize',
    //     titleFunc: OBSOLETE_ofCapacity,
    //     narrativeFunc: OBSOLETE_ofCapacity,
    //     titleIndex: 54,
    //     importance: 57
    // },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.memorySpeed', p),
        section: 'attributes',
        header: 'Memory Speed',
        key: 'memorySpeed',
        titleFunc: (0, titleParts_1.ofMeasure)('MHz'),
        narrativeFunc: (0, titleParts_1.ofMeasure)('MHz'),
        titleIndex: 55,
        importance: 59
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.pinCount', p),
        section: 'attributes',
        header: '# of Pins',
        key: 'pinCount',
        titleFunc: titleParts_1.ofIdentity,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: 60,
        importance: 64
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.dataTransferBandwidth', p),
        section: 'attributes',
        header: 'Data Transfer Bandwidth',
        key: 'dataTransferBandwidth',
        titleFunc: titleParts_1.ofIdentity,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: 56,
        importance: 60
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.voltage', p),
    //     section: 'attributes',
    //     header: 'Voltage',
    //     key: 'voltage',
    //     titleFunc: ofMeasure('V'),
    //     narrativeFunc: ofMeasure('V'),
    //     titleIndex: 58,
    //     importance: 63
    // },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.CASLatency', p),
        section: 'attributes',
        header: 'CAS Latency',
        key: 'CASLatency',
        titleFunc: titleParts_1.ofIdentity,
        narrativeFunc: titleParts_1.ofIdentity,
        titleIndex: 57,
        importance: 62
    },
    {
        extractor: (p) => (0, getProperty_1.getProperty)('product.cacheSize', p),
        section: 'attributes',
        header: 'Cache Size',
        key: 'cacheSize',
        titleFunc: (0, titleParts_1.ofMeasure)('MB'),
        narrativeFunc: (0, titleParts_1.ofMeasure)('MB'),
        titleIndex: 68,
        importance: 158
    }
];
// console.log(properties.filter(x => x.importance != null && x.narrativeFunc == null && x.section !== 'none'));
//# sourceMappingURL=buildProperties.js.map