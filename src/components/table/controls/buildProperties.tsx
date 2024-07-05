/* eslint-disable @typescript-eslint/no-unused-vars */
import { getProperty } from '../../../common/object/getProperty';
import { surroundQuotesIgnore, surroundParensIgnore } from '../../../common/text/surround';
import { sizes } from '../../../schema/enums/sizes';
import { ISku } from '../../../types';
import {
    ofLookup,
    ofList,
    ofFlag,
    ofDimension,
    OBSOLETE_ofWeight,
    char,
    ofBarcode,
    ofBattery,
    ofCableType,
    ofClothingCare,
    ofConnector,
    ofCurrent,
    ofDate,
    ofDictionary,
    ofEnum,
    ofFirst,
    ofHandOrientation,
    ofIdentity,
    ofMadeOf,
    ofMeasure,
    ofMinMax,
    ofPiece,
    ofPrefix,
    ofRating,
    ofSuffix,
    ofTrack,
    ofIncludedItem,
    ofSku,
    ofCapacity
} from './titleParts';

export const properties = [
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Has Original Packaging',
        key: 'flags-inOriginalPackaging',
        titleFunc: null,
        narrativeFunc: ofFlag('inOriginalPackaging'),
        titleIndex: null,
        importance: 118
    },
    {
        extractor: (p: ISku) => getProperty('product.asins', p),
        section: 'attributes',
        header: 'ASINs',
        key: 'asins',
        titleFunc: null,
        narrativeFunc: ofList(char.comma),
        titleIndex: null,
        importance: 138
    },
    {
        extractor: (p: ISku) => getProperty('product.brand', p),
        section: 'attributes',
        header: 'Brand Name',
        key: 'brand',
        titleFunc: ofLookup('name'),
        narrativeFunc: ofLookup('name'),
        titleIndex: 2,
        importance: 0
    },
    {
        extractor: (p: ISku) => getProperty('product.includes', p),
        section: 'lists',
        header: 'Includes',
        key: 'includes',
        titleFunc: null,
        narrativeFunc: ofList(char.newLine, ofIncludedItem),
        titleIndex: null,
        importance: 97
    },
    {
        extractor: (p: ISku) => getProperty('product.features', p),
        section: 'lists',
        header: 'Features',
        key: 'features',
        titleFunc: null,
        narrativeFunc: ofList(char.newLine),
        titleIndex: null,
        importance: 92
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Vintage',
        key: 'flags-isVintage',
        titleFunc: ofFlag('isVintage'),
        narrativeFunc: ofFlag('isVintage'),
        titleIndex: null,
        importance: 22
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Rare',
        key: 'flags-isRare',
        titleFunc: ofFlag('isRare'),
        narrativeFunc: ofFlag('isRare'),
        titleIndex: 1,
        importance: 23
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Collectible',
        key: 'flags-isCollectible',
        titleFunc: null,
        narrativeFunc: ofFlag('isCollectible'),
        titleIndex: null,
        importance: 98
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Has Manual',
        key: 'flags-hasManual',
        titleFunc: null,
        narrativeFunc: ofFlag('hasManual'),
        titleIndex: null,
        importance: 99
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: "Collector's Edition",
        key: 'flags-isCollectorsEdition',
        titleFunc: null,
        narrativeFunc: ofFlag('isCollectorsEdition'),
        titleIndex: null,
        importance: 117
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: "Director's Edition",
        key: 'flags-isDirectorsEdition',
        titleFunc: null,
        narrativeFunc: ofFlag('isDirectorsEdition'),
        titleIndex: null,
        importance: 116
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Widescreen',
        key: 'flags-isWidescreen',
        titleFunc: null,
        narrativeFunc: ofFlag('isWidescreen'),
        titleIndex: null,
        importance: 75
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Subtitled',
        key: 'flags-isSubtitled',
        titleFunc: null,
        narrativeFunc: ofFlag('isSubtitled'),
        titleIndex: null,
        importance: 132
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Discontinued',
        key: 'flags-isDiscontinued',
        titleFunc: null,
        narrativeFunc: ofFlag('isDiscontinued'),
        titleIndex: null,
        importance: 131
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Unopened',
        key: 'flags-isUnopened',
        titleFunc: null,
        narrativeFunc: ofFlag('isUnopened'),
        titleIndex: null,
        importance: 77
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Unrated',
        key: 'flags-isUnrated',
        titleFunc: null,
        narrativeFunc: ofFlag('isUnrated'),
        titleIndex: null,
        importance: 76
    },
    {
        extractor: (p: ISku) => getProperty('product.flags', p),
        section: 'flags',
        header: 'Closed-Captioned',
        key: 'flags-isClosedCaptioned',
        titleFunc: null,
        narrativeFunc: ofFlag('isClosedCaptioned'),
        titleIndex: null,
        importance: 141
    },
    {
        extractor: (p: ISku) => ({ length: getProperty('product.length', p), width: getProperty('product.width', p), height: getProperty('product.height', p) }),
        section: 'specifications',
        header: 'Dimensions',
        key: 'dimensions',
        titleFunc: null,
        narrativeFunc: ofDimension,
        titleIndex: null,
        importance: 67
    },
    {
        extractor: (p: ISku) => getProperty('product.weight', p),
        section: 'specifications',
        header: 'Weight',
        key: 'weight',
        titleFunc: null,
        narrativeFunc: OBSOLETE_ofWeight,
        titleIndex: null,
        importance: 69
    },
    {
        extractor: (p: ISku) => getProperty('product.modelName', p),
        section: 'attributes',
        header: 'Model Name',
        key: 'modelName',
        titleFunc: ofIdentity,
        narrativeFunc: ofIdentity,
        titleIndex: 62,
        importance: 6
    },
    {
        extractor: (p: ISku) => getProperty('product.modelNo', p),
        section: 'attributes',
        header: 'Model #',
        key: 'modelNo',
        titleFunc: ofIdentity,
        narrativeFunc: ofIdentity,
        titleIndex: 49,
        importance: 44
    },
    {
        extractor: (p: ISku) => getProperty('product.notes', p),
        section: 'attributes',
        header: 'Notes',
        key: 'notes',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 86
    },
    {
        extractor: (p: ISku) => getProperty('product.upcs', p),
        section: 'attributes',
        header: 'UPCs',
        key: 'upcs-upc-a',
        titleFunc: null,
        narrativeFunc: ofBarcode('upc'),
        titleIndex: null,
        importance: 68
    },
    {
        extractor: (p: ISku) => getProperty('product.upcs', p),
        section: 'attributes',
        header: 'EANs',
        key: 'upcs-ean',
        titleFunc: null,
        narrativeFunc: ofBarcode('ean'),
        titleIndex: null,
        importance: 111
    },
    {
        extractor: (p: ISku) => getProperty('product.upcs', p),
        section: 'attributes',
        header: 'ISBN10',
        key: 'upcs-isbn-10',
        titleFunc: null,
        narrativeFunc: ofBarcode('isbn-10'),
        titleIndex: null,
        importance: 81
    },
    {
        extractor: (p: ISku) => getProperty('product.upcs', p),
        section: 'attributes',
        header: 'ISBN13',
        key: 'upcs-isbn-13',
        titleFunc: null,
        narrativeFunc: ofBarcode('isbn-13'),
        titleIndex: null,
        importance: 82
    },
    {
        extractor: (p: ISku) => getProperty('product.circa', p),
        section: 'attributes',
        header: 'Circa',
        key: 'circa',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 130
    },
    {
        extractor: (p: ISku) => getProperty('product.color', p),
        section: 'attributes',
        header: 'Color',
        key: 'color',
        titleFunc: null,
        narrativeFunc: ofList(', ', ofEnum('productColors')),
        titleIndex: null,
        importance: 109
    },
    {
        extractor: (p: ISku) => getProperty('product.description', p),
        section: 'attributes',
        header: 'Description',
        key: 'description',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 66
    },
    {
        extractor: (p: ISku) => getProperty('product.testedOn', p),
        section: 'attributes',
        header: 'Tested On',
        key: 'testedOn',
        titleFunc: null,
        narrativeFunc: ofDate('mm-dd-yyyy'),
        titleIndex: null,
        importance: 112
    },
    {
        extractor: (p: ISku) => getProperty('product.itemType', p),
        section: 'none',
        header: 'Item Type',
        key: 'itemType',
        titleFunc: ofIdentity,
        narrativeFunc: null,
        titleIndex: 70,
        importance: 4
    },
    {
        extractor: (p: ISku) => getProperty('product.gender', p),
        section: 'attributes',
        header: 'Gender',
        key: 'gender',
        titleFunc: ofEnum('genders'),
        narrativeFunc: ofEnum('genders'),
        titleIndex: 3,
        importance: 2
    },
    {
        extractor: (p: ISku) => getProperty('product.cutNo', p),
        section: 'attributes',
        header: 'Cut #',
        key: 'cutNo',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 139
    },
    {
        extractor: (p: ISku) => getProperty('product.styleNo', p),
        section: 'attributes',
        header: 'Style #',
        key: 'styleNo',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 144
    },
    {
        extractor: (p: ISku) => getProperty('product.text', p),
        section: 'attributes',
        header: 'Text',
        key: 'text',
        titleFunc: surroundQuotesIgnore,
        narrativeFunc: ofIdentity,
        titleIndex: 28,
        importance: 27
    },
    {
        extractor: (p: ISku) => getProperty('product.rnNo', p),
        section: 'attributes',
        header: 'RN #',
        key: 'rnNo',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 140
    },
    {
        extractor: (p: ISku) => getProperty('product.clothingCare', p),
        section: 'attributes',
        header: 'Care Instructions',
        key: 'clothingCare',
        titleFunc: null,
        narrativeFunc: ofClothingCare,
        titleIndex: null,
        importance: 106
    },
    {
        extractor: (p: ISku) => getProperty('product.madeOf', p),
        section: 'attributes',
        header: 'Made Of',
        key: 'madeOf',
        titleFunc: null,
        narrativeFunc: ofMadeOf,
        titleIndex: null,
        importance: 96
    },
    {
        extractor: (p: ISku) => getProperty('product.bootType', p),
        section: 'attributes',
        header: 'Boot Type',
        key: 'bootType',
        titleFunc: ofEnum('bootTypes'),
        narrativeFunc: ofEnum('bootTypes'),
        titleIndex: 24,
        importance: 12
    },
    {
        extractor: (p: ISku) => getProperty('product.footSize', p),
        section: 'measurements',
        header: 'Shoe',
        key: 'footSize',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 91
    },
    {
        extractor: (p: ISku) => getProperty('product.heelHeight', p),
        section: 'specifications',
        header: 'Heel Height',
        key: 'heelHeight',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 34
    },
    {
        extractor: (p: ISku) => getProperty('product.heightMapType', p),
        section: 'attributes',
        header: 'Height Map',
        key: 'heightMapType',
        titleFunc: ofEnum('heightMaps'),
        narrativeFunc: ofEnum('heightMaps'),
        titleIndex: 7,
        importance: 51
    },
    {
        extractor: (p: ISku) => getProperty('product.shoeHeelType', p),
        section: 'attributes',
        header: 'Heel Type',
        key: 'shoeHeelType',
        titleFunc: ofEnum('shoeHeelTypes'),
        narrativeFunc: ofEnum('shoeHeelTypes'),
        titleIndex: 8,
        importance: 33
    },
    {
        extractor: (p: ISku) => getProperty('product.shoeWidth', p),
        section: 'attributes',
        header: 'Width Type',
        key: 'shoeWidth',
        titleFunc: ofEnum('shoeWidths'),
        narrativeFunc: ofEnum('shoeWidths'),
        titleIndex: 22,
        importance: 36
    },
    {
        extractor: (p: ISku) => getProperty('product.strapType', p),
        section: 'attributes',
        header: 'Strap Type',
        key: 'strapType',
        titleFunc: ofEnum('strapTypes'),
        narrativeFunc: ofEnum('strapTypes'),
        titleIndex: 23,
        importance: 46
    },
    {
        extractor: (p: ISku) => getProperty('product.toeStyle', p),
        section: 'attributes',
        header: 'Toe Style',
        key: 'toeStyle',
        titleFunc: ofEnum('toeStyles'),
        narrativeFunc: ofEnum('toeStyles'),
        titleIndex: 6,
        importance: 50
    },
    {
        extractor: (p: ISku) => getProperty('product.closureType', p),
        section: 'attributes',
        header: 'Closure Type',
        key: 'closureType',
        titleFunc: ofEnum('closureTypes'),
        narrativeFunc: ofEnum('closureTypes'),
        titleIndex: 5,
        importance: 53
    },
    {
        extractor: (p: ISku) => getProperty('product.fitType', p),
        section: 'attributes',
        header: 'Fit Type',
        key: 'fitType',
        titleFunc: ofEnum('fitTypes'),
        narrativeFunc: ofEnum('fitTypes'),
        titleIndex: 9,
        importance: 54
    },
    {
        extractor: (p: ISku) => getProperty('product.inseamSize', p),
        section: 'measurements',
        header: 'Inseam',
        key: 'inseamSize',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 90
    },
    {
        extractor: (p: ISku) => getProperty('product.legStyle', p),
        section: 'attributes',
        header: 'Leg Style',
        key: 'legStyle',
        titleFunc: ofEnum('legStyles'),
        narrativeFunc: ofEnum('legStyles'),
        titleIndex: 19,
        importance: 9
    },
    {
        extractor: (p: ISku) => getProperty('product.lengthSize', p),
        section: 'measurements',
        header: 'Length',
        key: 'lengthSize',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 89
    },
    {
        extractor: (p: ISku) => getProperty('product.lengthType', p),
        section: 'attributes',
        header: 'Length Type',
        key: 'lengthType',
        titleFunc: ofEnum('garmentLengths'),
        narrativeFunc: ofEnum('garmentLengths'),
        titleIndex: 20,
        importance: 37
    },
    {
        extractor: (p: ISku) => getProperty('product.lifestyleType', p),
        section: 'attributes',
        header: 'Lifestyle Type',
        key: 'lifestyleType',
        titleFunc: ofEnum('lifestyleTypes'),
        narrativeFunc: ofEnum('lifestyleTypes'),
        titleIndex: 12,
        importance: 55
    },
    {
        extractor: (p: ISku) => getProperty('product.pocketType', p),
        section: 'attributes',
        header: 'Pocket Type',
        key: 'pocketType',
        titleFunc: ofEnum('pocketTypes'),
        narrativeFunc: ofEnum('pocketTypes'),
        titleIndex: 13,
        importance: 48
    },
    {
        extractor: (p: ISku) => getProperty('product.riseType', p),
        section: 'attributes',
        header: 'Rise Type',
        key: 'riseType',
        titleFunc: ofEnum('riseTypes'),
        narrativeFunc: ofEnum('riseTypes'),
        titleIndex: 14,
        importance: 30
    },
    {
        extractor: (p: ISku) => getProperty('product.size', p),
        section: 'attributes',
        header: 'Size',
        key: 'size',
        titleFunc: (value: Opt<number>) => surroundParensIgnore(value ? sizes[value.toString() as keyof typeof sizes].size : undefined),
        narrativeFunc: (value: Opt<number>) => surroundParensIgnore(value ? sizes[value.toString() as keyof typeof sizes].size : undefined),
        titleIndex: 29,
        importance: 7
    },
    {
        extractor: (p: ISku) => getProperty('product.waistSize', p),
        section: 'measurements',
        header: 'Waist',
        key: 'waistSize',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 84
    },
    {
        extractor: (p: ISku) => getProperty('product.bustSize', p),
        section: 'measurements',
        header: 'Bust',
        key: 'bustSize',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 104
    },
    {
        extractor: (p: ISku) => getProperty('product.swimsuitBottomStyle', p),
        section: 'attributes',
        header: 'Swim Bottoms Style',
        key: 'swimsuitBottomStyle',
        titleFunc: ofEnum('swimsuitBottomStyles'),
        narrativeFunc: ofEnum('swimsuitBottomStyles'),
        titleIndex: 27,
        importance: 28
    },
    {
        extractor: (p: ISku) => getProperty('product.swimsuitTopStyle', p),
        section: 'attributes',
        header: 'Swim Tops Style',
        key: 'swimsuitTopStyle',
        titleFunc: ofEnum('swimsuitTopStyles'),
        narrativeFunc: ofEnum('swimsuitTopStyles'),
        titleIndex: 26,
        importance: 29
    },
    {
        extractor: (p: ISku) => getProperty('product.backlineType', p),
        section: 'attributes',
        header: 'Backline Type',
        key: 'backlineType',
        titleFunc: ofEnum('backlineTypes'),
        narrativeFunc: ofEnum('backlineTypes'),
        titleIndex: 15,
        importance: 56
    },
    {
        extractor: (p: ISku) => getProperty('product.chestSize', p),
        section: 'measurements',
        header: 'Chest',
        key: 'chestSize',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 95
    },
    {
        extractor: (p: ISku) => getProperty('product.collarType', p),
        section: 'attributes',
        header: 'Collar Type',
        key: 'collarType',
        titleFunc: ofEnum('collarTypes'),
        narrativeFunc: ofEnum('collarTypes'),
        titleIndex: 10,
        importance: 32
    },
    {
        extractor: (p: ISku) => getProperty('product.cuffType', p),
        section: 'attributes',
        header: 'Cuff Type',
        key: 'cuffType',
        titleFunc: ofEnum('cuffTypes'),
        narrativeFunc: ofEnum('cuffTypes'),
        titleIndex: 17,
        importance: 35
    },
    {
        extractor: (p: ISku) => getProperty('product.dressType', p),
        section: 'attributes',
        header: 'Dress Type',
        key: 'dressType',
        titleFunc: ofEnum('dressTypes'),
        narrativeFunc: ofEnum('dressTypes'),
        titleIndex: 21,
        importance: 10
    },
    {
        extractor: (p: ISku) => getProperty('product.neckSize', p),
        section: 'measurements',
        header: 'Neck',
        key: 'neckSize',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 87
    },
    {
        extractor: (p: ISku) => getProperty('product.neckType', p),
        section: 'attributes',
        header: 'Neck Type',
        key: 'neckType',
        titleFunc: ofEnum('neckTypes'),
        narrativeFunc: ofEnum('neckTypes'),
        titleIndex: 11,
        importance: 49
    },
    {
        extractor: (p: ISku) => getProperty('product.sleeveSize', p),
        section: 'measurements',
        header: 'Sleeve',
        key: 'sleeveSize',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 85
    },
    {
        extractor: (p: ISku) => getProperty('product.sleeveType', p),
        section: 'attributes',
        header: 'Sleeve Type',
        key: 'sleeveType',
        titleFunc: ofEnum('sleeveTypes'),
        narrativeFunc: ofEnum('sleeveTypes'),
        titleIndex: 16,
        importance: 47
    },
    {
        extractor: (p: ISku) => getProperty('product.sleeveLength', p),
        section: 'attributes',
        header: 'Sleeve Length',
        key: 'sleeveLength',
        titleFunc: ofEnum('sleeveLengths'),
        narrativeFunc: ofEnum('sleeveLengths'),
        titleIndex: 18,
        importance: 8
    },
    {
        extractor: (p: ISku) => getProperty('product.suitType', p),
        section: 'attributes',
        header: 'Suit Type',
        key: 'suitType',
        titleFunc: ofEnum('suitTypes'),
        narrativeFunc: ofEnum('suitTypes'),
        titleIndex: 25,
        importance: 11
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.awards', p),
    //     section: 'lists',
    //     header: 'Awards',
    //     key: 'awards',
    //     titleFunc: null,
    //     narrativeFunc: ofList(char.newLine),
    //     titleIndex: null,
    //     importance: 121
    // },
    // {
    //     extractor: (p: ISku) => getProperty('product.copyright', p),
    //     section: 'attributes',
    //     header: 'Copyright',
    //     key: 'copyright',
    //     titleFunc: null,
    //     narrativeFunc: ofIdentity,
    //     titleIndex: null,
    //     importance: 110
    // },
    {
        extractor: (p: ISku) => getProperty('product.mediaSubtitle', p),
        section: 'none',
        header: 'Subtitle',
        key: 'mediaSubtitle',
        titleFunc: surroundParensIgnore,
        narrativeFunc: null,
        titleIndex: 31,
        importance: 20
    },
    {
        extractor: (p: ISku) => getProperty('product.mediaTitle', p),
        section: 'none',
        header: 'Title',
        key: 'mediaTitle',
        titleFunc: ofIdentity,
        narrativeFunc: null,
        titleIndex: 30,
        importance: 1
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.authors', p),
    //     section: 'attributes',
    //     header: 'Authors',
    //     key: 'authors',
    //     titleFunc: (value: DBList<string>) => (value != null && value.length > 0 ? 'by '.concat(ofList<string>(char.comma)(value) ?? '') : undefined),
    //     narrativeFunc: ofList(char.comma),
    //     titleIndex: 39,
    //     importance: 45
    // },
    {
        extractor: (p: ISku) => getProperty('product.blurb', p),
        section: 'text',
        header: 'Blurb',
        key: 'blurb',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 146
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.bookGenre', p),
    //     section: 'attributes',
    //     header: 'Genre',
    //     key: 'bookGenre',
    //     titleFunc: null,
    //     narrativeFunc: ofEnum('bookGenres'),
    //     titleIndex: null,
    //     importance: 105
    // },
    {
        extractor: (p: ISku) => getProperty('product.bookType', p),
        section: 'attributes',
        header: 'Book Type',
        key: 'bookType',
        titleFunc: null,
        narrativeFunc: ofEnum('bookTypes'),
        titleIndex: null,
        importance: 129
    },
    {
        extractor: (p: ISku) => getProperty('product.edition', p),
        section: 'attributes',
        header: 'Edition',
        key: 'edition',
        titleFunc: ofSuffix(' edition', ofFirst),
        narrativeFunc: ofFirst,
        titleIndex: 33,
        importance: 38
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.illustrators', p),
    //     section: 'lists',
    //     header: 'Illustrators',
    //     key: 'illustrators',
    //     titleFunc: null,
    //     narrativeFunc: ofList(char.comma),
    //     titleIndex: null,
    //     importance: 136
    // },
    {
        extractor: (p: ISku) => getProperty('product.language', p),
        section: 'attributes',
        header: 'Language',
        key: 'language',
        titleFunc: null,
        narrativeFunc: ofEnum('languages'),
        titleIndex: null,
        importance: 123
    },
    {
        extractor: (p: ISku) => getProperty('product.pages', p),
        section: 'attributes',
        header: 'Pages',
        key: 'pages',
        titleFunc: null,
        narrativeFunc: ofMeasure(' pages'),
        titleIndex: null,
        importance: 133
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.publishers', p),
    //     section: 'attributes',
    //     header: 'Publishers',
    //     key: 'publishers',
    //     titleFunc: null,
    //     narrativeFunc: ofList(char.comma),
    //     titleIndex: null,
    //     importance: 142
    // },
    {
        extractor: (p: ISku) => getProperty('product.collectionOf', p),
        section: 'lists',
        header: 'In Collection',
        key: 'collectionOf',
        titleFunc: null,
        narrativeFunc: ofList(char.newLine),
        titleIndex: null,
        importance: 108
    },
    {
        extractor: (p: ISku) => getProperty('product.count', p),
        section: 'attributes',
        header: 'Disk Count',
        key: 'count',
        titleFunc: (value: Opt<number>) => surroundParensIgnore(value ? `${value} disc` : undefined),
        narrativeFunc: (value: Opt<number>) => surroundParensIgnore(value ? `${value} disc` : undefined),
        titleIndex: 35,
        importance: 52
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.directedBy', p),
    //     section: 'attributes',
    //     header: 'Directed By',
    //     key: 'directedBy',
    //     titleFunc: null,
    //     narrativeFunc: ofList(char.comma),
    //     titleIndex: null,
    //     importance: 137
    // },
    {
        extractor: (p: ISku) => getProperty('product.videoFormat', p),
        section: 'attributes',
        header: 'Format',
        key: 'videoFormat',
        titleFunc: null,
        narrativeFunc: ofEnum('videoFormatTypes'),
        titleIndex: null,
        importance: 70
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.videoGenre', p),
    //     section: 'attributes',
    //     header: 'Genre',
    //     key: 'videoGenre',
    //     titleFunc: null,
    //     narrativeFunc: ofEnum('movieGenres'),
    //     titleIndex: null,
    //     importance: 83
    // },
    // {
    //     extractor: (p: ISku) => getProperty('product.movieRating', p),
    //     section: 'attributes',
    //     header: 'Rating',
    //     key: 'movieRating',
    //     titleFunc: ofRating('movieRatings'),
    //     narrativeFunc: ofEnum('movieRatings'),
    //     titleIndex: 36,
    //     importance: 39
    // },
    // {
    //     extractor: (p: ISku) => getProperty('product.runtime', p),
    //     section: 'attributes',
    //     header: 'Runtime',
    //     key: 'runtime',
    //     titleFunc: null,
    //     narrativeFunc: ofMeasure('min'),
    //     titleIndex: null,
    //     importance: 114
    // },
    // {
    //     extractor: (p: ISku) => getProperty('product.starring', p),
    //     section: 'attributes',
    //     header: 'Starring',
    //     key: 'starring',
    //     titleFunc: null,
    //     narrativeFunc: ofList(char.comma),
    //     titleIndex: null,
    //     importance: 135
    // },
    // {
    //     extractor: (p: ISku) => getProperty('product.tvRating', p),
    //     section: 'attributes',
    //     header: 'Rating',
    //     key: 'tvRating',
    //     titleFunc: ofRating('tvRatings'),
    //     narrativeFunc: ofEnum('tvRatings'),
    //     titleIndex: 37,
    //     importance: 40
    // },
    {
        extractor: (p: ISku) => getProperty('product.videoType', p),
        section: 'attributes',
        header: 'Video Type',
        key: 'videoType',
        titleFunc: null,
        narrativeFunc: ofEnum('videoTypes'),
        titleIndex: null,
        importance: 113
    },
    {
        extractor: (p: ISku) => getProperty('product.ESRBRating', p),
        section: 'attributes',
        header: 'ESRB Rating',
        key: 'ESRBRating',
        titleFunc: ofRating('ESRBRatings'),
        narrativeFunc: ofRating('ESRBRatings'),
        titleIndex: 38,
        importance: 41
    },
    {
        extractor: (p: ISku) => getProperty('product.consoleType', p),
        section: 'attributes',
        header: 'Console Type',
        key: 'consoleType',
        titleFunc: ofPrefix('For ', ofEnum('consoleTypes')),
        narrativeFunc: ofEnum('consoleTypes'),
        titleIndex: 32,
        importance: 5
    },
    {
        extractor: (p: ISku) => getProperty('product.studio', p),
        section: 'attributes',
        header: 'Studio',
        key: 'studio',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 143
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.artist', p),
    //     section: 'attributes',
    //     header: 'Artist',
    //     key: 'artist',
    //     titleFunc: null,
    //     narrativeFunc: ofIdentity,
    //     titleIndex: null,
    //     importance: 103
    // },
    {
        extractor: (p: ISku) => getProperty('product.musicFormat', p),
        section: 'attributes',
        header: 'Format',
        key: 'musicFormat',
        titleFunc: null,
        narrativeFunc: ofEnum('musicFormatTypes'),
        titleIndex: null,
        importance: 73
    },
    // {
    //     extractor: (p: ISku) => getProperty('product.musicGenre', p),
    //     section: 'attributes',
    //     header: 'Genre',
    //     key: 'musicGenre',
    //     titleFunc: null,
    //     narrativeFunc: ofEnum('musicGenres'),
    //     titleIndex: null,
    //     importance: 88
    // },
    // {
    //     extractor: (p: ISku) => getProperty('product.tracks', p),
    //     section: 'lists',
    //     header: 'Tracks',
    //     key: 'tracks',
    //     titleFunc: null,
    //     narrativeFunc: ofList(char.newLine, ofTrack),
    //     titleIndex: null,
    //     importance: 134
    // },
    // {
    //     extractor: (p: ISku) => ({ videoFormat: getProperty('product.videoFormat', p), musicFormat: getProperty('product.musicFormat', p), copyright: getProperty('product.copyright', p) }),
    //     section: 'none',
    //     header: null,
    //     key: 'copyright-format',
    //     titleFunc: ofCopyright,
    //     narrativeFunc: null,
    //     titleIndex: 34,
    //     importance: 24
    // },
    {
        extractor: (p: ISku) => getProperty('product.cableType', p),
        section: 'attributes',
        header: 'Cable Type',
        key: 'cableType',
        titleFunc: ofCableType,
        narrativeFunc: ofCableType,
        titleIndex: 48,
        importance: 31
    },
    {
        extractor: (p: ISku) => getProperty('product.cordLength', p),
        section: 'specifications',
        header: 'Cord Length',
        key: 'cordLength',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 93
    },
    {
        extractor: (p: ISku) => ({ connectors: getProperty('product.connectors', p), cableType: getProperty('product.cableType', p) }),
        section: 'specifications',
        header: 'Connectors',
        key: 'connectors',
        titleFunc: ofConnector,
        narrativeFunc: ofConnector,
        titleIndex: 47,
        importance: 16
    },
    {
        extractor: (p: ISku) => getProperty('product.compatibleWith', p),
        section: 'lists',
        header: 'Compatible With',
        key: 'compatibleWith',
        titleFunc: null,
        narrativeFunc: ofList(char.newLine),
        titleIndex: null,
        importance: 119
    },
    {
        extractor: (p: ISku) => getProperty('product.input', p),
        section: 'specifications',
        header: 'Input',
        key: 'input',
        titleFunc: null,
        narrativeFunc: ofCurrent,
        titleIndex: null,
        importance: 74
    },
    {
        extractor: (p: ISku) => getProperty('product.output', p),
        section: 'specifications',
        header: 'Output',
        key: 'output',
        titleFunc: ofCurrent,
        narrativeFunc: ofCurrent,
        titleIndex: 46,
        importance: 17
    },
    {
        extractor: (p: ISku) => getProperty('product.powerTypes', p),
        section: 'attributes',
        header: 'Powered By',
        key: 'powerTypes',
        titleFunc: null,
        narrativeFunc: ofList(char.comma),
        titleIndex: null,
        importance: 101
    },
    {
        extractor: (p: ISku) => ({ batteryCount: getProperty('product.batteryCount', p), batteryType: getProperty('product.batteryType', p) }),
        section: 'attributes',
        header: 'Takes:',
        key: 'battery',
        titleFunc: null,
        narrativeFunc: ofBattery,
        titleIndex: null,
        importance: 107
    },
    {
        extractor: (p: ISku) => getProperty('product.testedOn', p),
        section: 'attributes',
        header: 'Tested On',
        key: 'testedOn',
        titleFunc: null,
        narrativeFunc: ofDate('mm-dd-yyyy'),
        titleIndex: null,
        importance: 112
    },
    {
        extractor: (p: ISku) => getProperty('product.aspectRatio', p),
        section: 'specifications',
        header: 'Aspect Ratio',
        key: 'aspectRatio',
        titleFunc: null,
        narrativeFunc: ofEnum('aspectRatios'),
        titleIndex: null,
        importance: 102
    },
    {
        extractor: (p: ISku) => getProperty('product.capacity', p),
        section: 'specifications',
        header: 'Capacity',
        key: 'capacity',
        titleFunc: null,
        narrativeFunc: ofMeasure('GB'),
        titleIndex: null,
        importance: 78
    },
    {
        extractor: (p: ISku) => getProperty('product.cellCarrier', p),
        section: 'attributes',
        header: 'Cell Carrier',
        key: 'cellCarrier',
        titleFunc: null,
        narrativeFunc: ofEnum('cellCarriers'),
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
        extractor: (p: ISku) => getProperty('product.screenSize', p),
        section: 'specifications',
        header: 'Screen Size',
        key: 'screenSize',
        titleFunc: null,
        narrativeFunc: ofMeasure(char.quote),
        titleIndex: null,
        importance: 71
    },
    {
        extractor: (p: ISku) => getProperty('product.density', p),
        section: 'specifications',
        header: 'Density',
        key: 'readonly density',
        titleFunc: null,
        narrativeFunc: ofMeasure('g/cm3'),
        titleIndex: null,
        importance: 79
    },
    {
        extractor: (p: ISku) => getProperty('product.metal', p),
        section: 'attributes',
        header: 'Metal',
        key: 'metal',
        titleFunc: null,
        narrativeFunc: ofEnum('metalTypes'),
        titleIndex: null,
        importance: 72
    },
    {
        extractor: (p: ISku) => getProperty('product.flatwareInventory', p),
        section: 'lists',
        header: 'Set of',
        key: 'flatwareInventory',
        titleFunc: ofDictionary(ofPiece('flatwareTypes')),
        narrativeFunc: ofDictionary(ofPiece('flatwareTypes')),
        titleIndex: 50,
        importance: 18
    },
    {
        extractor: (p: ISku) => getProperty('product.pattern', p),
        section: 'lists',
        header: 'Pattern',
        key: 'pattern',
        titleFunc: surroundQuotesIgnore,
        narrativeFunc: ofIdentity,
        titleIndex: 52,
        importance: 26
    },
    {
        extractor: (p: ISku) => getProperty('product.dinnerwareInventory', p),
        section: 'attributes',
        header: 'Set of',
        key: 'dinnerwareInventory',
        titleFunc: ofDictionary(ofPiece('dinnerwareTypes'), char.comma),
        narrativeFunc: ofDictionary(ofPiece('dinnerwareTypes')),
        titleIndex: 51,
        importance: 19
    },
    {
        extractor: (p: ISku) => getProperty('product.applianceType', p),
        section: 'attributes',
        header: 'Appliance Type',
        key: 'applianceType',
        titleFunc: ofEnum('applianceTypes'),
        narrativeFunc: ofEnum('applianceTypes'),
        titleIndex: 63,
        importance: 3
    },
    {
        extractor: (p: ISku) => getProperty('product.clubType', p),
        section: 'attributes',
        header: 'Club Type',
        key: 'clubType',
        titleFunc: ofEnum('clubTypes'),
        narrativeFunc: ofEnum('clubTypes'),
        titleIndex: 44,
        importance: 13
    },
    {
        extractor: (p: ISku) => getProperty('product.flexType', p),
        section: 'attributes',
        header: 'Flex Type',
        key: 'flexType',
        titleFunc: null,
        narrativeFunc: ofEnum('flexTypes'),
        titleIndex: null,
        importance: 128
    },
    {
        extractor: (p: ISku) => getProperty('product.handOrientation', p),
        section: 'attributes',
        header: 'Hand Orientation',
        key: 'handOrientation',
        titleFunc: ofHandOrientation,
        narrativeFunc: ofEnum('handOrientations'),
        titleIndex: 45,
        importance: 25
    },
    {
        extractor: (p: ISku) => getProperty('product.ironType', p),
        section: 'attributes',
        header: 'Iron Type',
        key: 'ironType',
        titleFunc: ofEnum('ironTypes'),
        narrativeFunc: ofEnum('ironTypes'),
        titleIndex: 42,
        importance: 14
    },
    {
        extractor: (p: ISku) => getProperty('product.clubLength', p),
        section: 'specifications',
        header: 'Club Length',
        key: 'clubLength',
        titleFunc: null,
        narrativeFunc: ofMeasure('in', 'cm', 2.54),
        titleIndex: null,
        importance: 94
    },
    {
        extractor: (p: ISku) => getProperty('product.lie', p),
        section: 'specifications',
        header: 'Lie',
        key: 'lie',
        titleFunc: null,
        narrativeFunc: ofMeasure('°'),
        titleIndex: null,
        importance: 124
    },
    {
        extractor: (p: ISku) => getProperty('product.loft', p),
        section: 'specifications',
        header: 'Loft',
        key: 'loft',
        titleFunc: null,
        narrativeFunc: ofMeasure('°'),
        titleIndex: null,
        importance: 125
    },
    {
        extractor: (p: ISku) => getProperty('product.material', p),
        section: 'attributes',
        header: 'Material',
        key: 'material',
        titleFunc: ofEnum('materials'),
        narrativeFunc: ofEnum('materials'),
        titleIndex: 40,
        importance: 43
    },
    {
        extractor: (p: ISku) => getProperty('product.shaftType', p),
        section: 'specifications',
        header: 'Shaft Type',
        key: 'shaftType',
        titleFunc: ofSuffix(' shaft', ofEnum('shaftTypes')),
        narrativeFunc: ofEnum('shaftTypes'),
        titleIndex: 41,
        importance: 42
    },
    {
        extractor: (p: ISku) => getProperty('product.swingWeight', p),
        section: 'attributes',
        header: 'Swing Weight',
        key: 'swingWeight',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 145
    },
    {
        extractor: (p: ISku) => getProperty('product.wedgeType', p),
        section: 'attributes',
        header: 'Wedge Type',
        key: 'wedgeType',
        titleFunc: ofEnum('wedgeTypes'),
        narrativeFunc: ofEnum('wedgeTypes'),
        titleIndex: 43,
        importance: 15
    },
    {
        extractor: (p: ISku) => getProperty('product.ages', p),
        section: 'attributes',
        header: 'Ages',
        key: 'ages',
        titleFunc: null,
        narrativeFunc: ofMinMax,
        titleIndex: null,
        importance: 122
    },
    {
        extractor: (p: ISku) => getProperty('product.players', p),
        section: 'attributes',
        header: 'Players',
        key: 'players',
        titleFunc: null,
        narrativeFunc: ofMinMax,
        titleIndex: null,
        importance: 115
    },
    {
        extractor: (p: ISku) => getProperty('product.pieceCount', p),
        section: 'attributes',
        header: 'Piece Count',
        key: 'pieceCount',
        titleFunc: null,
        narrativeFunc: ofIdentity,
        titleIndex: null,
        importance: 100
    },
    {
        extractor: (p: ISku) => getProperty('condition', p),
        section: 'none',
        header: null,
        key: 'condition',
        titleFunc: null,
        narrativeFunc: null,
        titleIndex: null,
        importance: 147
    },
    {
        extractor: (p: ISku) => getProperty('defects', p),
        section: 'lists',
        header: 'Defects',
        key: 'defects',
        titleFunc: null,
        narrativeFunc: ofList(char.newLine),
        titleIndex: null,
        importance: 80
    },
    {
        extractor: (p: ISku) => getProperty('quantity', p),
        section: 'none',
        header: null,
        key: 'quantity',
        titleFunc: null,
        narrativeFunc: null,
        titleIndex: null,
        importance: 149
    },
    {
        extractor: (p: ISku) => getProperty('skus', p),
        section: 'attributes',
        header: 'SKU',
        key: 'skus',
        titleFunc: null,
        narrativeFunc: ofSku,
        titleIndex: null,
        importance: 148
    },
    {
        extractor: (p: ISku) => getProperty('product.partNumbers', p),
        section: 'lists',
        header: 'Part #s',
        key: 'partNumbers',
        titleFunc: null,
        narrativeFunc: ofList(char.newLine),
        titleIndex: null,
        importance: 150
    },
    {
        extractor: (p: ISku) => getProperty('product.driveType', p),
        section: 'attributes',
        header: 'Drive Type',
        key: 'driveType',
        titleFunc: ofEnum('driveTypes'),
        narrativeFunc: ofEnum('driveTypes'),
        titleIndex: 69,
        importance: 151
    },
    {
        extractor: (p: ISku) => getProperty('product.driveForm', p),
        section: 'attributes',
        header: 'Drive Format',
        key: 'driveForm',
        titleFunc: ofEnum('driveFormFactors'),
        narrativeFunc: ofEnum('driveFormFactors'),
        titleIndex: 64,
        importance: 152
    },
    {
        extractor: (p: ISku) => getProperty('product.connectivity', p),
        section: 'attributes',
        header: 'Connectivity',
        key: 'connectivity',
        titleFunc: null,
        narrativeFunc: ofEnum('connectivity'),
        titleIndex: null,
        importance: 153
    },
    {
        extractor: (p: ISku) => getProperty('product.driveInterface', p),
        section: 'attributes',
        header: 'Drive Interface',
        key: 'driveInterface',
        titleFunc: ofEnum('driveInterfaces'),
        narrativeFunc: ofEnum('driveInterfaces'),
        titleIndex: 67,
        importance: 154
    },
    {
        extractor: (p: ISku) => getProperty('product.capacity', p),
        section: 'attributes',
        header: 'Capacity',
        key: 'capacity',
        titleFunc: ofCapacity,
        narrativeFunc: ofCapacity,
        titleIndex: 65,
        importance: 155
    },
    {
        extractor: (p: ISku) => getProperty('product.writeSpeed', p),
        section: 'attributes',
        header: 'Write Speed',
        key: 'writeSpeed',
        titleFunc: null,
        narrativeFunc: ofMeasure('MB/s'),
        titleIndex: null,
        importance: 159
    },
    {
        extractor: (p: ISku) => getProperty('product.readSpeed', p),
        section: 'attributes',
        header: 'Read Speed',
        key: 'readSpeed',
        titleFunc: null,
        narrativeFunc: ofMeasure('MB/s'),
        titleIndex: null,
        importance: 160
    },
    {
        extractor: (p: ISku) => getProperty('product.dataTransferRate', p),
        section: 'attributes',
        header: 'Data Transfer Rate',
        key: 'dataTransferRate',
        titleFunc: null,
        narrativeFunc: ofMeasure('MBit/s'),
        titleIndex: null,
        importance: 156
    },
    {
        extractor: (p: ISku) => getProperty('product.rpm', p),
        section: 'attributes',
        header: 'RPM',
        key: 'rpm',
        titleFunc: ofIdentity,
        narrativeFunc: ofMeasure('RPM'),
        titleIndex: 66,
        importance: 157
    },
    {
        extractor: (p: ISku) => getProperty('product.memoryType', p),
        section: 'attributes',
        header: 'Memory Type',
        key: 'memoryType',
        titleFunc: ofEnum('memoryTypes'),
        narrativeFunc: ofEnum('memoryTypes'),
        titleIndex: 53,
        importance: 58
    },
    {
        extractor: (p: ISku) => getProperty('product.memoryForm', p),
        section: 'attributes',
        header: 'Memory Format',
        key: 'memoryForm',
        titleFunc: ofEnum('memoryFormFactors'),
        narrativeFunc: ofEnum('memoryFormFactors'),
        titleIndex: 59,
        importance: 61
    },
    {
        extractor: (p: ISku) => getProperty('product.compatibleDevices', p),
        section: 'attributes',
        header: 'Compatible Devices',
        key: 'compatibleDevices',
        titleFunc: ofList(', ', ofEnum('compatibleDevices')),
        narrativeFunc: ofList(', ', ofEnum('compatibleDevices')),
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
        extractor: (p: ISku) => getProperty('product.memorySpeed', p),
        section: 'attributes',
        header: 'Memory Speed',
        key: 'memorySpeed',
        titleFunc: ofMeasure('MHz'),
        narrativeFunc: ofMeasure('MHz'),
        titleIndex: 55,
        importance: 59
    },
    {
        extractor: (p: ISku) => getProperty('product.pinCount', p),
        section: 'attributes',
        header: '# of Pins',
        key: 'pinCount',
        titleFunc: ofIdentity,
        narrativeFunc: ofIdentity,
        titleIndex: 60,
        importance: 64
    },
    {
        extractor: (p: ISku) => getProperty('product.dataTransferBandwidth', p),
        section: 'attributes',
        header: 'Data Transfer Bandwidth',
        key: 'dataTransferBandwidth',
        titleFunc: ofIdentity,
        narrativeFunc: ofIdentity,
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
        extractor: (p: ISku) => getProperty('product.CASLatency', p),
        section: 'attributes',
        header: 'CAS Latency',
        key: 'CASLatency',
        titleFunc: ofIdentity,
        narrativeFunc: ofIdentity,
        titleIndex: 57,
        importance: 62
    },
    {
        extractor: (p: ISku) => getProperty('product.cacheSize', p),
        section: 'attributes',
        header: 'Cache Size',
        key: 'cacheSize',
        titleFunc: ofMeasure('MB'),
        narrativeFunc: ofMeasure('MB'),
        titleIndex: 68,
        importance: 158
    }
];

// console.log(properties.filter(x => x.importance != null && x.narrativeFunc == null && x.section !== 'none'));
