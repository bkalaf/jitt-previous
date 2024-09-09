import { distinctByString } from '../common/array/distinct';
import { getProperty } from '../common/object/getProperty';
import { setProperty } from '../common/object/setProperty';
import { camelToKebab } from '../common/text/camelToKebab';
import { BookTypes, YouthSize } from '../schema/enums';
import * as fs from 'graceful-fs';

export type ITaxonomyFlagNode = {
    traits: Record<string, string>;
    fullname?: string;
    itemType?: string;
    conditions: Record<
        string,
        {
            fullname?: string;
            itemType?: string;
        }
    >;
};
export type IClassifier = {
    attributes: Record<string, string>;
    fullname?: string;
    itemType?: string;
    conditions: string[];
};
export type TaxonomyFlag = 'isMaternity' | 'isAtheltic' | 'isGraphic' | 'isHooded';
export type ITaxonomyNode = {
    name: string;
    path: string[];
    selectOptions: string[];
    flagOptions: string[];
    traitOptions: string[];
    nodes: ITaxonomyFlagNode[];
};

type NewApparelTaxonomy = [string, string, [string | null, string | null, [string?, string?, string?] | null, [string?, string?, string?] | null], Record<string, [string, string | null, string | null] | [string, string]>?];

type TaxonomyValue = NewApparelTaxonomy | [string, string, string];
type TaxonomyObj = Record<string, TaxonomyValue>;

const sneakers: NewApparelTaxonomy[] = [
    [
        'sneakers',
        'sneakers',
        [
            'Men::Shoes::Fashion sneakers',
            'Women::Shoes::Fashion sneakers',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ],
        {
            isAthletic: ['sneakers', 'Men::Shoes::Athletic', 'Women::Shoes::Athletic']
        }
    ],
    [
        'fashion-sneakers',
        'sneakers',
        [
            'Men::Shoes::Fashion sneakers',
            'Women::Shoes::Fashion sneakers',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'basketball-sneakers',
        'basketball sneakers',
        [
            'Men::Shoes::Athletic',
            'Women::Shoes::Athletic',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const loafers: NewApparelTaxonomy[] = [
    [
        'other',
        'loafers',
        [
            'Men::Shoes::Loafers',
            'Women::Shoes::Loafers',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'deck',
        'deck',
        [
            'Men::Shoes::Loafers',
            'Women::Shoes::Loafers',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'monk',
        'monk',
        [
            'Men::Shoes::Loafers',
            'Women::Shoes::Loafers',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'penny-loafer',
        'penny-loafer',
        [
            'Men::Shoes::Loafers',
            'Women::Shoes::Loafers',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const mulesAndClogs: NewApparelTaxonomy[] = [
    [
        'mules',
        'mules',
        [
            'Men::Shoes::Mules',
            'Women::Shoes::Mules',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'clogs',
        'clogs',
        [
            'Men::Shoes::Clogs',
            'Women::Shoes::Clogs',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const boots: NewApparelTaxonomy[] = [
    [
        'other',
        'boots',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'ankle-boot',
        'ankle-boot',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'country',
        'country',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'desert',
        'desert',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'frye',
        'frye',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'jockey-boot',
        'jockey-boot',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'over-the-knee-boot',
        'over-the-knee-boot',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'snow-boot',
        'snow-boot',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'wellington',
        'wellington',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'western-boot',
        'western-boot',
        [
            'Men::Shoes::Boots',
            'Women::Shoes::Boots',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const heels: NewApparelTaxonomy[] = [
    [
        'ankle-strap',
        'ankle-strap',
        [
            'Men::Shoes::All Shoes',
            'Women::Shoes::Heels',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'espadrille',
        'espadrille',
        [
            'Men::Shoes::All Shoes',
            'Women::Shoes::Heels',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'mary-jane',
        'mary-jane',
        [
            'Men::Shoes::All Shoes',
            'Women::Shoes::Heels',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'pump',
        'pump',
        [
            'Men::Shoes::All Shoes',
            'Women::Shoes::Heels',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'sling-back',
        'sling-back',
        [
            'Men::Shoes::All Shoes',
            'Women::Shoes::Heels',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        't-strap',
        't-strap',
        [
            'Men::Shoes::All Shoes',
            'Women::Shoes::Heels',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
// const footwearType: NewApparelTaxonomy[] = [
//     [
//         'oxfords',
//         'oxfords',
//         [
//             'Men::Shoes::Oxfords',
//             'Women::Shoes::Oxfords',
//             ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
//             ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
//         ]
//     ],

//     [
//         'sandals',
//         'sandals',
//         [
//             'Men::Shoes::Sandals',
//             'Women::Shoes::Sandals',
//             ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
//             ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
//         ]
//     ],
//     [
//         'slip-ons',
//         'slip-ons',
//         [
//             'Men::Shoes::Slip-Ons',
//             'Women::Shoes::Slip-Ons',
//             ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
//             ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
//         ]
//     ],
//     [
//         'slippers',
//         'slippers',
//         [
//             'Men::Shoes::Slippers',
//             'Women::Shoes::Slippers',
//             ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
//             ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
//         ]
//     ],

//     [
//         'flats',
//         'flats',
//         [
//             'Men::Shoes::All Shoes',
//             'Women::Shoes::Flats',
//             ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
//             ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
//         ]
//     ],
//     [
//         'heels',
//         'heels',
//         [
//             'Men::Shoes::All Shoes',
//             'Women::Shoes::Heels',
//             ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
//             ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
//         ]
//     ]
// ];
const slippers: NewApparelTaxonomy[] = [
    [
        'espadrilla',
        'espadrilla',
        [
            'Men::Shoes::Slippers',
            'Women::Shoes::Slippers',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'slipper',
        'slipper',
        [
            'Men::Shoes::Slippers',
            'Women::Shoes::Slippers',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const slipOns: NewApparelTaxonomy[] = [
    [
        'dockside',
        'dockside',
        [
            'Men::Shoes::Slip-Ons',
            'Women::Shoes::Slip-Ons',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'mocassin',
        'mocassin',
        [
            'Men::Shoes::Slip-Ons',
            'Women::Shoes::Slip-Ons',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'slip-on',
        'slip-on',
        [
            'Men::Shoes::Slip-Ons',
            'Women::Shoes::Slip-Ons',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const sandals: NewApparelTaxonomy[] = [
    [
        'flip-flop',
        'flip-flop',
        [
            'Men::Shoes::Sandals',
            'Women::Shoes::Sandals',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'sandal',
        'sandal',
        [
            'Men::Shoes::Sandals',
            'Women::Shoes::Sandals',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const specialized: NewApparelTaxonomy[] = [
    [
        'work-shoes',
        'work shoes',
        [
            'Men::Shoes::Work & safety',
            'Women::Shoes::Work & safety',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'safety-shoes',
        'safety shoes',
        [
            'Men::Shoes::Work & safety',
            'Women::Shoes::Work & safety',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'outdoors',
        'outdoors',
        [
            'Men::Shoes::Outdoor',
            'Women::Shoes::Outdoor',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const oxfords: NewApparelTaxonomy[] = [
    [
        'saddle',
        'saddle',
        [
            'Men::Shoes::Oxfords',
            'Women::Shoes::Oxfords',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'wing-tip',
        'wing-tip',
        [
            'Men::Shoes::Oxfords',
            'Women::Shoes::Oxfords',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'winkle-picker',
        'winkle-picker',
        [
            'Men::Shoes::Oxfords',
            'Women::Shoes::Oxfords',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ],
    [
        'other',
        'oxford',
        [
            'Men::Shoes::Oxfords',
            'Women::Shoes::Oxfords',
            ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
            ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
        ]
    ]
];
const hats: NewApparelTaxonomy[] = [
    [
        'hat',
        'hat',
        [
            "Men::Men's accessories::Hats",
            "Women::Women's accessories::Hats",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'fedora',
        'fedora',
        [
            "Men::Men's accessories::Hats",
            "Women::Women's accessories::Hats",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'ballcap',
        'ballcap',
        [
            "Men::Men's accessories::Hats",
            "Women::Women's accessories::Hats",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ],
        {
            isMLB: ['ballcap', 'Sports & outdoors::Fan shop::MLB', 'Sports & outdoors::Fan shop::MLB'],
            isNBA: ['ballcap', 'Sports & outdoors::Fan shop::NBA', 'Sports & outdoors::Fan shop::NBA'],
            isNCAA: ['ballcap', 'Sports & outdoors::Fan shop::NCAA', 'Sports & outdoors::Fan shop::NCAA'],
            isNFL: ['ballcap', 'Sports & outdoors::Fan shop::NFL', 'Sports & outdoors::Fan shop::NFL'],
            isNHL: ['ballcap', 'Sports & outdoors::Fan shop::NHL', 'Sports & outdoors::Fan shop::NHL']
        }
    ],
    [
        'fitted-cap',
        'fitted-cap',
        [
            "Men::Men's accessories::Hats",
            "Women::Women's accessories::Hats",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ],
        {
            isMLB: ['ballcap', 'Sports & outdoors::Fan shop::MLB', 'Sports & outdoors::Fan shop::MLB'],
            isNBA: ['ballcap', 'Sports & outdoors::Fan shop::NBA', 'Sports & outdoors::Fan shop::NBA'],
            isNCAA: ['ballcap', 'Sports & outdoors::Fan shop::NCAA', 'Sports & outdoors::Fan shop::NCAA'],
            isNFL: ['ballcap', 'Sports & outdoors::Fan shop::NFL', 'Sports & outdoors::Fan shop::NFL'],
            isNHL: ['ballcap', 'Sports & outdoors::Fan shop::NHL', 'Sports & outdoors::Fan shop::NHL']
        }
    ]
];
const head: NewApparelTaxonomy[] = [
    [
        'bandana',
        'bandana',
        [
            "Men::Men's accessories::Bandanas",
            "Women::Women's accessories::Bandanas",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'bow-tie',
        'bowtie',
        [
            "Men::Men's accessories::Bow Ties",
            null,
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'collar-stay',
        'collar stay',
        [
            "Men::Men's accessories::Collar Stays",
            null,
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],

    [
        'sunglasses',
        'sunglasses',
        [
            "Men::Men's accessories::Sunglasses",
            "Women::Women's accessories::Sunglasses",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'tie',
        'tie',
        [
            "Men::Men's accessories::Ties",
            null,
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'hair-accessory',
        'hair accessory',
        [
            null,
            "Women::Women's accessories::Hair accessories",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'headband',
        'headband',
        [
            null,
            "Women::Women's accessories::Headbands",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'hijab',
        'hijab',
        [
            null,
            "Women::Women's accessories::Hijabs",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'scarf',
        'scarf',
        [
            "Men::Men's accessories::Scarves",
            "Women::Women's accessories::Scarves",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ]
];
const miscAccessories: NewApparelTaxonomy[] = [
    [
        'belt',
        'belt',
        [
            "Men::Men's accessories::Belts",
            "Women::Women's accessories::Belts",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'carholder',
        'carholder',
        [
            "Men::Men's accessories::Cardholders",
            "Women::Women's accessories::Cardholders",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'earmuffs',
        'earmuffs',
        [
            "Men::Men's accessories::Other",
            "Women::Women's accessories::Other",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'gloves',
        'gloves',
        [
            "Men::Men's accessories::Fashion Gloves",
            "Women::Women's accessories::Fashion Gloves",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'handkerchief',
        'handkerchief',
        [
            "Men::Men's accessories::Handkerchiefs",
            null,
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'turban',
        'turban',
        [
            "Men::Men's accessories::Turbans",
            null,
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'umbrella',
        'umbrella',
        [
            "Men::Men's accessories::Umbrellas",
            "Women::Women's accessories::Umbrellas",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'wallet',
        'wallet',
        [
            "Men::Men's accessories::Wallets",
            "Women::Women's accessories::Wallets",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ],
    [
        'fascinator',
        'fascinator',
        [
            null,
            "Women::Women's accessories::Fascinators",
            ['Kids::Boys accessories::Boys 0-24 mos', 'Kids::Boys accessories::Boys 2T-5T', 'Kids::Boys accessories::Boys (4+)'],
            ['Kids::Girls accessories::Girls 0-24 mos', 'Kids::Girls accessories::Girls 2T-5T', 'Kids::Girls accessories::Girls (4+)']
        ]
    ]
];

const miscUndergarment: NewApparelTaxonomy[] = [
    ['socks', 'socks', ['Men::Athletic apparel::Socks', 'Women::Athletic apparel::Socks', null, null]],
    [
        'bra',
        'bra',
        [null, 'Women::Underwear::Bras', null, null],
        {
            isAthletic: ['sports bra', null, 'Women::Athletic apparel::Sports bras']
        }
    ],
    ['g-string', 'g-string', ['Men::Other::All Other', 'Women::Underwear::G-strings & thongs', null, null]],
    ['thong', 'thong', ['Men::Other::All Other', 'Women::Underwear::G-strings & thongs', null, null]],
    ['panties', 'panties', ['Men::Other::All Other', 'Women::Underwear::Panties', null, null]],
    ['thermals', 'thermals', ['Men::Other::All Other', 'Women::Underwear::Thermal underwear', null, null]],
    ['briefs', 'briefs', ['Men::Other::All Other', 'Women::Underwear::Other', null, null]],
    ['boxers', 'boxers', ['Men::Other::All Other', 'Women::Underwear::Other', null, null]]
];
const sleepwear: NewApparelTaxonomy[] = [
    ['nightgowns', 'nightgown', ['Men::Other::All Other', 'Women::Sleepwear & robes::Nightgowns & sleep shirts', null, null]],
    ['sleep-shirt', 'sleep-shirt', ['Men::Other::All Other', 'Women::Sleepwear & robes::Nightgowns & sleep shirts', null, null]],
    ['pajamas', 'pajamas', ['Men::Other::All Other', 'Women::Sleepwear & robes::Pajama sets', null, null]],
    ['pajama-top', 'pajama top', ['Men::Other::All Other', 'Women::Sleepwear & robes::Pajama tops', null, null]],
    ['pajama-bottom', 'pajama bottom', ['Men::Other::All Other', 'Women::Sleepwear & robes::Pajama pants', null, null]],
    ['robe', 'robe', ['Men::Other::All Other', 'Women::Sleepwear & robes::Robes', null, null]]
];

const golf: NewApparelTaxonomy[] = [
    [
        'irons',
        'golf club',
        ["Sports & outdoors::Golf::Men's golf clubs", "Sports & outdoors::Golf::Women's golf clubs", null, null],
        {
            isBoxedSet: ['golf clubs', "Sports & outdoors::Golf::Men's golf clubs", "Sports & outdoors::Golf::Women's golf clubs"]
        }
    ],
    [
        'drivers',
        'golf club',
        ["Sports & outdoors::Golf::Men's golf clubs", "Sports & outdoors::Golf::Women's golf clubs", null, null],
        {
            isBoxedSet: ['golf clubs', "Sports & outdoors::Golf::Men's golf clubs", "Sports & outdoors::Golf::Women's golf clubs"]
        }
    ]
];
const swimwear: NewApparelTaxonomy[] = [
    ['surf-trunks', 'surf trunks', ['Men::Swimwear::Board shorts', null, null, null]],
    ['swim-trunks', 'swim trunks', ['Men::Swimwear::Swim trunks', null, null, null]],
    ['board-trunks', 'board shorts', ['Men::Swimwear::Board shorts', null, null, null]],
    [
        'speedo',
        'speedo',
        ['Men::Swimwear::Swim briefs', null, null, null],
        {
            isAthletic: ['speedo', 'Men::Athletic apparel::Competitive swimwear', null]
        }
    ],
    ['beach-accessories', 'beach accessories', [null, 'Women::Swimwear::Beach accessories', null, null]],
    ['cover-up', 'cover up', [null, 'Women::Swimwear::Cover-ups', null, null]],
    ['one-piece', 'one piece bikini', [null, 'Women::Swimwear::One-piece', null, null]],
    ['two-piece', 'two piece bikini', [null, 'Women::Swimwear::Two-piece', null, null]]
];
const dress: NewApparelTaxonomy[] = [
    [
        'high-low',
        'dress',
        [null, 'Women::Dresses::High Low', null, ['Kids::Girls dresses::Girls 0-24 mos', 'Kids::Girls dresses::Girls 2T-5T', 'Kids::Girls dresses::Girls (4+)']],
        {
            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
        }
    ],
    [
        'jumpsuit',
        'jumpsuit',
        [null, 'Women::Dresses::Jumpsuits & Rompers', null, ['Kids::Girls dresses::Girls 0-24 mos', 'Kids::Girls dresses::Girls 2T-5T', 'Kids::Girls dresses::Girls (4+)']],
        {
            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
        }
    ],
    [
        'romper',
        'romper',
        [null, 'Women::Dresses::Jumpsuits & Rompers', null, ['Kids::Girls dresses::Girls 0-24 mos', 'Kids::Girls dresses::Girls 2T-5T', 'Kids::Girls dresses::Girls (4+)']],
        {
            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
        }
    ],
    [
        'knee-length',
        'dress',
        [null, 'Women::Dresses::Knee-length', null, ['Kids::Girls dresses::Girls 0-24 mos', 'Kids::Girls dresses::Girls 2T-5T', 'Kids::Girls dresses::Girls (4+)']],
        {
            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
        }
    ],
    [
        'maxi',
        'dress',
        [null, 'Women::Dresses::Maxi', null, ['Kids::Girls dresses::Girls 0-24 mos', 'Kids::Girls dresses::Girls 2T-5T', 'Kids::Girls dresses::Girls (4+)']],
        {
            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
        }
    ],
    [
        'midi',
        'dress',
        [null, 'Women::Dresses::Midi', null, ['Kids::Girls dresses::Girls 0-24 mos', 'Kids::Girls dresses::Girls 2T-5T', 'Kids::Girls dresses::Girls (4+)']],
        {
            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
        }
    ]
];

const blazerType: NewApparelTaxonomy[] = [
    [
        'double-breasted',
        'suit',
        [
            'Men::Suits::Double breasted',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'one-button',
        'suit',
        [
            'Men::Suits::One button',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'two-button',
        'suit',
        [
            'Men::Suits::Two button',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'three-button',
        'suit',
        [
            'Men::Suits::Three button',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'four-button',
        'suit',
        [
            'Men::Suits::Four button',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ]
];
const suitType: NewApparelTaxonomy[] = [
    ['snowsuit', 'snowsuit', ['Men::Athletic apparel::Snowsuits', 'Women::Athletic apparel::Snowsuits', null, null]],
    ['tracksuit', 'tracksuit', ['Men::Athletic apparel::Tracksuits', 'Women::Athletic apparel::Tracksuits', null, null]],
    ['tuxedo', 'tuxedo', ['Men::Suits::Tuxedo', null, null, null]],
    ['sweatsuit', 'sweatsuit', ['Men::Sweats & hoodies::Sweatsuits', 'Women::Athletic apparel::Athletic Sweatsuits', null, null]],
    [
        'dress-suit',
        'dress suit',
        [null, 'Women::Suits & blazers::Dress suit', null, null],
        {
            isMaternity: ['dress suit', null, 'Women::Maternity::Maternity Suits']
        }
    ],
    [
        'pant-suit',
        'pant suit',
        [null, 'Women::Suits & blazers::Pant suit', null, null],
        {
            isMaternity: ['pant suit', null, 'Women::Maternity::Maternity Suits']
        }
    ],
    [
        'skirt-suit',
        'skirt suit',
        [null, 'Women::Suits & blazers::Skirt suit', null, null],
        {
            isMaternity: ['skirt suit', null, 'Women::Maternity::Maternity Suits']
        }
    ],
    ['bodysuit', 'bodysuit', [null, 'Women::Tops & blouses::Bodysuits', null, null]]
];
const coats: NewApparelTaxonomy[] = [
    [
        'baseball',
        'jacket',
        [
            'Men::Coats & jackets::Varsity/baseball',
            'Women::Coats & jackets::Other',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'bomber',
        'jacket',
        [
            'Men::Coats & jackets::Flight/bomber',
            'Women::Coats & jackets::Other',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'cape',
        'cape',
        [
            null,
            'Women::Coats & jackets::Cape',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'fleece',
        'jacket',
        [
            'Men::Coats & jackets::Fleece jacket',
            'Women::Coats & jackets::Fleece jacket',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'hoodie',
        'hoodie',
        [
            'Men::Sweats & hoodies::Hoodie',
            'Women::Coats & jackets::Other',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Athletic Hoodies']
        }
    ],
    [
        'jean',
        'jacket',
        [
            'Men::Coats & jackets::Jean jacket',
            'Women::Coats & jackets::Jean jacket',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'military',
        'jacket',
        [
            'Men::Coats & jackets::Military',
            'Women::Coats & jackets::Military',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'leather',
        'jacket',
        [
            'Men::Coats & jackets::Motorcycle',
            'Women::Coats & jackets::Motorcycle',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'parka',
        'parka',
        [
            'Men::Coats & jackets::Parka',
            'Women::Coats & jackets::Parka',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'peacoat',
        'peacoat',
        [
            'Men::Coats & jackets::Peacoat',
            'Women::Coats & jackets::Peacoat',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'poncho',
        'poncho',
        [
            'Men::Coats & jackets::Poncho',
            'Women::Coats & jackets::Poncho',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'puffer',
        'jacket',
        [
            'Men::Coats & jackets::Puffer',
            'Women::Coats & jackets::Puffer',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'raincoat',
        'raincoat',
        [
            'Men::Coats & jackets::Rainwear',
            'Women::Coats & jackets::Raincoat',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'trenchcoat',
        'trenchcoat',
        [
            'Men::Coats & jackets::Trench',
            'Women::Coats & jackets::Trench',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'vest',
        'vest',
        [
            'Men::Coats & jackets::Vest',
            'Women::Coats & jackets::Vest',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'windbreaker',
        'windbreaker',
        [
            'Men::Coats & jackets::Windbreaker',
            'Women::Coats & jackets::Windbreaker',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ],
    [
        'winter',
        'jacket',
        [
            'Men::Coats & jackets::Wool',
            'Women::Coats & jackets::Wool',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
        }
    ]
];
const sweaters: NewApparelTaxonomy[] = [
    [
        'collared',
        'sweater',
        [
            'Men::Sweaters::Other',
            'Women::Sweaters::Collared',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
        }
    ],
    [
        'cowl',
        'sweater',
        [
            'Men::Sweaters::Other',
            'Women::Sweaters::Cowl neck',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
        }
    ],
    [
        'crew',
        'sweater',
        [
            'Men::Sweaters::Crewneck',
            'Women::Sweaters::Crewneck',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
        }
    ],
    [
        'mock',
        'sweater',
        [
            'Men::Sweaters::Other',
            'Women::Sweaters::Mock Sweaters',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
        }
    ],
    [
        'scoop',
        'sweater',
        [
            'Men::Sweaters::Other',
            'Women::Sweaters::Scoop neck',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
        }
    ],
    [
        'v',
        'sweater',
        [
            'Men::Sweaters::V-neck',
            null,
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
        }
    ],
    [
        'other',
        'sweater',
        [
            'Men::Sweaters::Other',
            'Women::Sweaters::Other',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
        }
    ],
    [
        'full-zip',
        'full-zip',
        [
            'Men::Sweaters::Full zip',
            'Women::Sweaters::Full zip',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
        }
    ]
];
const casualShirt: NewApparelTaxonomy[] = [
    [
        'camisole',
        'camisole',
        [
            null,
            'Women::Tops & blouses::Camisoles',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['camisole', null, 'Women::Maternity::Maternity Camisoles']
        }
    ],
    [
        'jersey',
        'jersey',
        [
            'Men::Athletic apparel::Jerseys',
            'Women::Athletic apparel::Jerseys',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMLB: ['jersey', 'Sports & outdoors::Fan shop::MLB', 'Sports & outdoors::Fan shop::MLB'],
            isNBA: ['jersey', 'Sports & outdoors::Fan shop::NBA', 'Sports & outdoors::Fan shop::NBA'],
            isNCAA: ['jersey', 'Sports & outdoors::Fan shop::NCAA', 'Sports & outdoors::Fan shop::NCAA'],
            isNFL: ['jersey', 'Sports & outdoors::Fan shop::NFL', 'Sports & outdoors::Fan shop::NFL'],
            isNHL: ['jersey', 'Sports & outdoors::Fan shop::NHL', 'Sports & outdoors::Fan shop::NHL']
        }
    ],
    [
        'polo',
        'polo',
        [
            'Men::Tops::Polos',
            'Women::Tops & blouses::Polo shirt',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['polo', null, 'Women::Maternity::Maternity Polos'],
            isAthletic: ['polo', 'Men::Athletic apparel::Athletic Polos', 'Women::Athletic apparel::Athletic Polos']
        }
    ],
    [
        'rugby',
        'rugby',
        [
            'Men::Tops::Rugby Shirts',
            null,
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    [
        'snow-bib',
        'snow bib',
        [
            'Men::Athletic apparel::Snow Bibs',
            'Women::Athletic apparel::Snow Bibs',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    // [
    //     'sweater',
    //     'sweater',
    //     [
    //         'Men::Sweaters::Other',
    //         'Women::Sweaters::Other',
    //         ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
    //         ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
    //     ],
    // {
    //     isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
    // }
    // ],
    [
        'sweatshirt',
        'sweatshirt',
        [
            'Men::Sweats & hoodies::Sweatshirt, pullover',
            'Women::Athletic apparel::Athletic Sweatshirts',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['sweatshirt', null, 'Women::Maternity::Sweaters'],
            isAthletic: ['sweatshirt', 'Men::Athletic apparel::Athletic Sweatshirts', 'Women::Athletic apparel::Athletic Sweatshirts']
        }
    ],
    [
        'tank-top',
        'tank top',
        [
            'Men::Tops::Tank',
            'Women::Tops & blouses::Tank Tops',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['tank top', null, 'Women::Maternity::Maternity Tank Tops'],
            isAthletic: ['tank top', 'Men::Athletic apparel::Athletic Tank Tops', 'Women::Athletic apparel::Athletic Tank Tops']
        }
    ],
    [
        't-shirt',
        'T-shirt',
        [
            'Men::Tops::T-shirts',
            'Women::Tops & blouses::T-shirts',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['T-shirt', null, 'Women::Maternity::Maternity T-Shirts'],
            isAthletic: ['T-shirt', 'Men::Athletic apparel::Athletic T-Shirts', 'Women::Athletic apparel::Athletic T-Shirts']
        }
    ],
    [
        'tube-top',
        'tube top',
        [
            null,
            'Women::Tops & blouses::Other',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    [
        'tunic',
        'tunic',
        [
            null,
            'Women::Tops & blouses::Tunic',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    [
        'halter',
        'halter top',
        [
            null,
            'Women::Tops & blouses::Halter',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    [
        'henley',
        'henley',
        [
            'Men::Tops::Henley',
            'Women::Sweaters::Henley',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    [
        'turtleneck',
        'turtleneck',
        [
            'Men::Tops::Turtleneck',
            'Women::Tops & blouses::Turtleneck',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ]
];
const sportCoats: NewApparelTaxonomy[] = [
    [
        'double-breasted',
        'blazer',
        [
            'Men::Blazers & sport coats::Double breasted',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'one-button',
        'blazer',
        [
            'Men::Blazers & sport coats::One button',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'two-button',
        'blazer',
        [
            'Men::Blazers & sport coats::Two button',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'three-button',
        'blazer',
        [
            'Men::Blazers & sport coats::Three button',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ],
    [
        'four-button',
        'blazer',
        [
            'Men::Blazers & sport coats::Four button',
            null,
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ]
];
const blazers: NewApparelTaxonomy[] = [
    [
        'double-breasted',
        'blazer',
        [
            'Men::Blazers & sport coats::Double breasted',
            'Women::Suits & blazers::Blazer',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['blazer', null, 'Women::Maternity::Maternity Blazers']
        }
    ],
    [
        'one-button',
        'blazer',
        [
            'Men::Blazers & sport coats::One button',
            'Women::Suits & blazers::Blazer',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['blazer', null, 'Women::Maternity::Maternity Blazers']
        }
    ],
    [
        'two-button',
        'blazer',
        [
            'Men::Blazers & sport coats::Two button',
            'Women::Suits & blazers::Blazer',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['blazer', null, 'Women::Maternity::Maternity Blazers']
        }
    ],
    [
        'three-button',
        'blazer',
        [
            'Men::Blazers & sport coats::Three button',
            'Women::Suits & blazers::Blazer',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['blazer', null, 'Women::Maternity::Maternity Blazers']
        }
    ],
    [
        'four-button',
        'blazer',
        [
            'Men::Blazers & sport coats::Four button',
            'Women::Suits & blazers::Blazer',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ],
        {
            isMaternity: ['blazer', null, 'Women::Maternity::Maternity Blazers']
        }
    ],
    [
        'tuxedo',
        'tuxedo jacket',
        [
            'Men::Suits::Tuxedo',
            'Women::Suits & blazers::Blazer',
            ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
            ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
        ]
    ]
];
const buttonDowns: NewApparelTaxonomy[] = [
    [
        'oxford-shirt',
        'oxford shirt',
        [
            'Men::Tops::Button-front',
            'Women::Tops & blouses::Button down shirt',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['button-down', null, 'Women::Maternity::Maternity Button-Ups']
        }
    ],
    [
        'button-up',
        'button-down shirt',
        [
            'Men::Tops::Button-front',
            'Women::Tops & blouses::Button down shirt',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['button-down', null, 'Women::Maternity::Maternity Button-Ups']
        }
    ],
    [
        'fitted',
        'fitted shirt',
        [
            'Men::Tops::Dress shirts',
            'Women::Tops & blouses::Button down shirt',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    [
        'dress',
        'dress shirt',
        [
            'Men::Tops::Dress shirts',
            'Women::Tops & blouses::Button down shirt',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ]
];

const formalShirt: NewApparelTaxonomy[] = [
    [
        'blouse',
        'blouse',
        [
            null,
            'Women::Tops & blouses::Blouse',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isMaternity: ['blouse', null, 'Women::Maternity::Maternity Blouses']
        }
    ],

    [
        'cardigan',
        'cardigan',
        [
            'Men::Sweaters::Cardigan',
            'Women::Sweaters::Cardigan',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],

    [
        'hawaiian',
        'hawaiian shirt',
        [
            'Men::Tops::Hawaiian',
            'Women::Tops & blouses::Other',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    [
        'knit-top',
        'knit-top',
        [
            null,
            'Women::Tops & blouses::Knit top',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],

    [
        'suit-jacket',
        'suit jacket',
        [
            'Men::Blazers & sport coats::Other',
            'Women::Suits & blazers::Blazer',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ]
    ],
    [
        'vest',
        'vest',
        [
            'Men::Coats & jackets::Vest',
            'Women::Coats & jackets::Vest',
            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
        ],
        {
            isAthletic: ['vest', 'Men::Athletic apparel::Vests', 'Women::Athletic apparel::Vests']
        }
    ]
];
const skirts: NewApparelTaxonomy[] = [
    [
        'asymmetrical',
        'skirt',
        [
            null,
            'Women::Skirts::Asymmetrical',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'bubble',
        'skirt',
        [
            null,
            'Women::Skirts::Bubble',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'full',
        'skirt',
        [
            null,
            'Women::Skirts::Full skirt',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'maxi',
        'skirt',
        [
            null,
            'Women::Skirts::Maxi',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'mini',
        'skirt',
        [
            null,
            'Women::Skirts::Mini',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'peasant',
        'skirt',
        [
            null,
            'Women::Skirts::Peasant',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'pleated',
        'skirt',
        [
            null,
            'Women::Skirts::Pleated',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'pencil',
        'skirt',
        [
            null,
            'Women::Skirts::Straight, pencil',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'tiered',
        'skirt',
        [
            null,
            'Women::Skirts::Tiered',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ],
    [
        'wrap',
        'skirt',
        [
            null,
            'Women::Skirts::Wrap',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
        }
    ]
];
const pants: NewApparelTaxonomy[] = [
    [
        'chinos',
        'chinos',
        [
            'Men::Pants::Khakis, chinos',
            'Women::Pants::Khakis, chinos',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['chinos', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
        }
    ],
    [
        'corduroy',
        'corduroys',
        [
            'Men::Pants::Corduroys',
            'Women::Pants::Corduroys',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['corduroys', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
        }
    ],
    [
        'khakis',
        'khakis',
        [
            'Men::Pants::Khakis, chinos',
            'Women::Pants::Khakis, chinos',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['khakis', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
        }
    ],
    [
        'leather',
        'leather pants',
        [
            'Men::Pants::Other',
            'Women::Pants::Leather',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['leather pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
        }
    ],
    [
        'linen',
        'linen pants',
        [
            'Men::Pants::Other',
            'Women::Pants::Linen',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['linen pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
        }
    ],
    [
        'cargo',
        'cargo pants',
        [
            'Men::Pants::Cargo',
            'Women::Pants::Cargo',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ]
    ],
    [
        'carpenter',
        'carpenter pants',
        [
            'Men::Pants::Carpenter',
            null,
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ]
    ],
    [
        'casual',
        'casual pants',
        [
            'Men::Pants::Casual pants',
            'Women::Pants::Casual pants',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ]
    ],
    [
        'dress',
        'dress pants',
        [
            'Men::Pants::Dress - flat front',
            'Women::Pants::Dress pants',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ]
    ]
];
const shorts: NewApparelTaxonomy[] = [
    [
        'chinos',
        'chino shorts',
        [
            'Men::Shorts::Khakis, chinos',
            'Women::Shorts::Chino & khaki',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['chino shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'corduroy',
        'corduroy shorts',
        [
            'Men::Shorts::Corduroys',
            'Women::Shorts::Other',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['corduroy shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'denim',
        'denim shorts',
        [
            'Men::Shorts::Denim',
            'Women::Shorts::Denim',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['denim shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'khakis',
        'khaki shorts',
        [
            'Men::Shorts::Khakis, chinos',
            'Women::Shorts::Chino & khaki',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['khaki shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'leather',
        'leather shorts',
        [
            'Men::Shorts::Other',
            'Women::Shorts::Other',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['leather shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'linen',
        'linen shorts',
        [
            'Men::Shorts::Other',
            'Women::Shorts::Other',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['linen shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'bermuda',
        'bermuda shorts',
        [
            'Men::Shorts::Other',
            'Women::Shorts::Bermuda',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['bermuda shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'bike',
        'bike shorts',
        [
            'Men::Shorts::Other',
            'Women::Shorts::Bike',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['bike shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'board',
        'board shorts',
        [
            'Men::Shorts::Board, surf',
            'Women::Shorts::Other',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['board shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'cargo',
        'cargo shorts',
        [
            'Men::Shorts::Cargo',
            'Women::Shorts::Cargo',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['cargo shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'carpenter',
        'carpenter shorts',
        [
            'Men::Shorts::Carpenter, utility',
            null,
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['carpenter shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'casual',
        'casual shorts',
        [
            'Men::Shorts::Casual shorts',
            'Women::Shorts::Other',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['casual shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'dress',
        'dress shorts',
        [
            'Men::Shorts::Dress shorts',
            'Women::Shorts::Other',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['dress shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'high-waisted',
        'high-waisted shorts',
        [
            null,
            'Women::Shorts::High-waisted',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['high-waisted shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'short-shorts',
        'short-shorts',
        [
            null,
            'Women::Shorts::Short shorts',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['short-shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
        }
    ],
    [
        'skort',
        'skort',
        [
            null,
            'Women::Shorts::Skort',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isAthletic: ['skort', null, 'Women::Athletic apparel::Athletic Skorts']
        }
    ]
];
const jeans: NewApparelTaxonomy[] = [
    [
        'boyfriend',
        'boyfriend jeans',
        [
            'Men::Jeans::Other',
            'Women::Jeans::Boyfriend',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['boyfriend jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'cargo',
        'cargo jeans',
        [
            'Men::Jeans::Cargo',
            'Women::Jeans::Cargo',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['cargo jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'carpenter',
        'carpenter jeans',
        [
            'Men::Jeans::Carpenter',
            'Women::Jeans::Other',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['carpenter jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'leggings',
        'leggings',
        [
            'Men::Jeans::Other',
            'Women::Jeans::Leggings',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['leggings', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'overalls',
        'overalls',
        [
            'Men::Jeans::Overalls',
            'Women::Jeans::Overalls',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['overalls', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'baggy',
        'jeans',
        [
            'Men::Jeans::Baggy, loose',
            'Women::Jeans::Other',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'bootcut',
        'jeans',
        [
            'Men::Jeans::Boot cut',
            'Women::Jeans::Boot cut',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'capri',
        'jeans',
        [
            'Men::Jeans::Other',
            'Women::Jeans::Capri Jeans',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'cropped',
        'jeans',
        [
            'Men::Jeans::Other',
            'Women::Jeans::Cropped Jeans',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'flare',
        'jeans',
        [
            'Men::Jeans::Other',
            'Women::Jeans::Flare',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'straight',
        'jeans',
        [
            'Men::Jeans::Classic, straight leg',
            'Women::Jeans::Straight leg',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'relaxed',
        'jeans',
        [
            'Men::Jeans::Relaxed',
            'Women::Jeans::Relaxed',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'skinny',
        'jeans',
        [
            'Men::Jeans::Skinny Jeans',
            'Women::Jeans::Skinny Jeans',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'slim',
        'jeans',
        [
            'Men::Jeans::Slim Jeans',
            'Women::Jeans::Slim Jeans',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ],
    [
        'wide',
        'jeans',
        [
            'Men::Jeans::Other',
            'Women::Jeans::Wide leg',
            ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
            ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
        ],
        {
            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
        }
    ]
];
const bag: TaxonomyObj = {
    backpack: ['', 'backpack', ["Men::Men's accessories::Backpacks", "Women::Women's handbags::Backpacks", null, null]],
    bag: ['', 'bag', ["Men::Men's accessories::Bags", null, null, null]],
    briefcase: ['', 'briefcase', ["Men::Men's accessories::Briefcases", null, null, null]],
    bucket: ['', 'bucket bag', [null, "Women::Women's handbags::Bucket Bags", null, null]],
    cosmetic: ['', 'cosmetic bag', [null, "Women::Women's handbags::Cosmetic bags", null, null]],
    crossBody: ['', 'cross-body bag', [null, "Women::Women's handbags::Crossbody Bags", null, null]],
    messenger: ['', 'messenger bag', [null, "Women::Women's handbags::Messenger Bags", null, null]],
    hobo: ['', 'hobo bag', [null, "Women::Women's handbags::Hobo Bags", null, null]],
    stachel: ['', 'satchel', [null, "Women::Women's handbags::Satchel", null, null]],
    shoulder: ['', 'shoulder bag', [null, "Women::Women's handbags::Shoulder Bags", null, null]],
    tote: ['', 'tote', [null, "Women::Women's handbags::Tote Bags", null, null]],
    fannyPack: ['', 'fanny-pack', [null, "Women::Women's handbags::Waist Bags & Fanny Packs", null, null]],
    'carry-on': ['', 'carry-on bag', ['Other::Travel & Luggage::Carry-On Luggage', 'Other::Travel & Luggage::Carry-On Luggage', null, null]],
    suitcase: ['', 'suitcase', ['Other::Travel & Luggage::Suitcases', 'Other::Travel & Luggage::Suitcases', null, null]]
};
const jewelry: TaxonomyObj = {
    bracelet: ['', 'bracelet', ['Men::Jewelry::Bracelets', 'Women::Jewelry::Bracelets', null, null]],
    cufflinks: ['', 'cufflinks', ['Men::Jewelry::Cufflinks', null, null, null]],
    earrings: ['', 'earrings', ['Men::Jewelry::Earrings', 'Women::Jewelry::Earrings', null, null]],
    necklace: ['', 'necklace', ['Men::Jewelry::Necklaces', 'Women::Jewelry::Necklaces', null, null]],
    pin: ['', 'pin', ['Men::Jewelry::Pins', 'Women::Jewelry::Pins', null, null]],
    ring: ['', 'ring', ['Men::Jewelry::Rings', 'Women::Jewelry::Rings', null, null]],
    watch: ['', 'watch', ["Men::Men's accessories::Watches", "Women::Women's accessories::Watches", null, null]],
    noseRing: ['', 'nose ring', [null, 'Women::Jewelry::Nose Rings', null, null]],
    toeRing: ['', 'toe ring', [null, 'Women::Jewelry::Toe Rings', null, null]]
};

export function isTerminal(node: ITaxonomyNode) {
    return (node?.nodes ?? []).length > 0;
}
function convertKey(key: string) {
    if (/[A-Z]/.test(key)) {
        return camelToKebab(key);
    }
    return key;
}

function isNewApparel(value: TaxonomyValue): value is NewApparelTaxonomy {
    return Array.isArray(value[2]);
}

function tripUnzip<T, U, V>(arr: [T, U, V][]) {
    function inner(todo: [T, U, V][], accumT: T[] = [], accumU: U[] = [], accumV: V[] = []) {
        if (todo.length === 0) {
            return [accumT, accumU, accumV] as [Exclude<T, null>[], Exclude<U, null>[], Exclude<V, null>[]];
        }
        const [[headT, headU, headV], ...tail] = todo;
        return inner(tail, headT == null ? accumT : [...accumT, headT], headU == null ? accumU : [...accumU, headU], headV == null ? accumV : [...accumV, headV]);
    }
    return inner(arr);
}

function convertToNode(
    obj: TaxonomyObj,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _oldNodes: ITaxonomyFlagNode[] = [],
    property: string | undefined,
    ...path: string[]
) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => {
            const nodes: ITaxonomyFlagNode[] = [];
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [propertyValue, itemType, [mens, womens, boys, girls], opts, fullname] = isNewApparel(value) ? value : [value[0], value[1], [null, null, null, null], null, value[2]];
            const $opts = Object.entries(opts ?? {}).map(([k, v]) => {
                const [itemType, fullname, mens, womens] = v.length === 2 ? v : [v[0], null, v[1], v[2]];
                return [
                    fullname ?
                        [
                            k,
                            {
                                itemType,
                                fullname
                            }
                        ]
                    :   null,
                    mens ?
                        [
                            k,
                            {
                                itemType,
                                fullname: mens
                            }
                        ]
                    :   null,
                    womens ?
                        [
                            k,
                            {
                                itemType,
                                fullname: womens
                            }
                        ]
                    :   null
                ] as [
                    (
                        | [
                              string,
                              {
                                  itemType?: string;
                                  fullname?: string;
                              }
                          ]
                        | null
                    ),
                    (
                        | [
                              string,
                              {
                                  itemType?: string;
                                  fullname?: string;
                              }
                          ]
                        | null
                    ),
                    (
                        | [
                              string,
                              {
                                  itemType?: string;
                                  fullname?: string;
                              }
                          ]
                        | null
                    )
                ];
            });
            const [_optFull, _optMens, _optWomens] = tripUnzip($opts);
            const [optFull, optMens, optWomens] = [Object.fromEntries(_optFull), Object.fromEntries(_optMens), Object.fromEntries(_optWomens)];
            if (fullname) {
                nodes.push({
                    traits: property ? { [property]: propertyValue } : {},
                    conditions: optFull,
                    itemType,
                    fullname: mens!
                });
            } else {
                if (mens) {
                    nodes.push({
                        traits: {
                            gender: 'mens',
                            ...(property ? { [property]: propertyValue } : {})
                        },
                        conditions: optMens,
                        itemType,
                        fullname: mens
                    });
                }
                if (womens) {
                    nodes.push({
                        traits: {
                            gender: 'womens',
                            ...(property ? { [property]: propertyValue } : {})
                        },
                        conditions: optWomens,
                        itemType,
                        fullname: womens
                    });
                }
                if (boys) {
                    const [low, mid, high] = boys;
                    if (low) {
                        nodes.push({
                            traits: {
                                gender: 'boys',
                                youthSize: '0-24M' as YouthSize,
                                ...(property ? { [property]: propertyValue } : {})
                            },
                            conditions: {},
                            itemType,
                            fullname: low
                        });
                    }
                    if (mid) {
                        nodes.push({
                            traits: {
                                gender: 'boys',
                                youthSize: '2T-5T' as YouthSize,
                                ...(property ? { [property]: propertyValue } : {})
                            },
                            conditions: {},
                            itemType,
                            fullname: mid
                        });
                    }
                    if (high) {
                        nodes.push({
                            traits: {
                                gender: 'boys',
                                youthSize: '4T+' as YouthSize,
                                ...(property ? { [property]: propertyValue } : {})
                            },
                            conditions: {},
                            itemType,
                            fullname: high
                        });
                    }
                }
                if (girls) {
                    const [low, mid, high] = girls;
                    if (low) {
                        nodes.push({
                            traits: {
                                gender: 'girls',
                                youthSize: '0-24M' as YouthSize,
                                ...(property ? { [property]: propertyValue } : {})
                            },
                            conditions: {},
                            itemType,
                            fullname: low
                        });
                    }
                    if (mid) {
                        nodes.push({
                            traits: {
                                gender: 'girls',
                                youthSize: '2T-5T' as YouthSize,
                                ...(property ? { [property]: propertyValue } : {})
                            },
                            conditions: {},
                            itemType,
                            fullname: mid
                        });
                    }
                    if (high) {
                        nodes.push({
                            traits: {
                                gender: 'girls',
                                youthSize: '4T+' as YouthSize,
                                ...(property ? { [property]: propertyValue } : {})
                            },
                            conditions: {},
                            itemType,
                            fullname: high
                        });
                    }
                }
            }

            const flagOptions = distinctByString(nodes.map((x) => Object.keys(x.conditions)).reduce((pv, cv) => [...(pv ?? []), ...(cv ?? [])], []));
            const traitOptions = distinctByString(nodes.map((x) => Object.keys(x.traits)).reduce((pv, cv) => [...(pv ?? []), ...(cv ?? [])], []));
            const $key = convertKey(key);
            return [$key, { nodes, path: property == null ? [...path, $key] : path, name: key, selectOptions: [], traitOptions, flagOptions } as ITaxonomyNode] as [string, ITaxonomyNode];
        })
    );
}

function convertToGraph(graph: any, obj: TaxonomyObj, property: string | undefined, ...path: string[]) {
    const value = convertToNode(obj, [], property, ...path);
    const value2 =
        property == null ? value : (
            (Object.values(value).reduce(
                (pv, cv) => ({
                    path: cv.path,
                    selectOptions: [],
                    traitOptions: distinctByString([...(pv.traitOptions ?? []), ...(cv.traitOptions ?? [])]),
                    flagOptions: distinctByString([...(pv.flagOptions ?? []), ...(cv.flagOptions ?? [])]),
                    name: convertKey(path[path.length - 1]),
                    nodes: [...(pv.nodes ?? []), ...(cv.nodes ?? [])]
                }),
                { path: path, name: '', nodes: [], flagOptions: [], traitOptions: [], selectOptions: [] } as ITaxonomyNode
            ) as any)
        );
    const current = getProperty<any, ITaxonomyNode>(path.map(convertKey).join('.'), graph);
    const next =
        current == null ? value2 : (
            [value2, current].reduce(
                (pv, cv) => ({
                    path: cv.path,
                    selectOptions: [],
                    traitOptions: distinctByString([...pv.traitOptions ?? [], ...cv.traitOptions ?? []]),
                    flagOptions: distinctByString([...pv.flagOptions ?? [], ...cv.flagOptions ?? []]),
                    name: convertKey(path[path.length - 1]),
                    nodes: [...pv.nodes ?? [], ...cv.nodes ?? []]
                }),
                { path: path, name: '', nodes: [], flagOptions: [], traitOptions: [], selectOptions: [] } as ITaxonomyNode
            )
        );
    console.log('convertToGraph');
    console.log(JSON.stringify(next, null, '\t'));
    const result = setProperty(path.map(convertKey).join('.'), graph, next);
    return result;
}
function convertFromArray(graph: any, obj: NewApparelTaxonomy[], property: string | undefined, ...path: string[]) {
    const obj2 = Object.fromEntries(obj.map((x) => [x[0], x] as [string, [string, string, [string | null, string | null, [string?, string?, string?] | null, [string?, string?, string?] | null]]]));
    const result = convertToGraph(graph, obj2 as any, property, ...path.map(convertKey));
    console.log(`convertFromArray`, JSON.stringify(result, null, '\t'));
    return result;
}
function convertBook(graph: any, obj: Record<string, [string, string]>, n: string, ...path: string[]) {
    const value = Object.entries(obj).map(([genre, [itemType, fullname]]) => {
        const nodes = [
            {
                itemType,
                fullname,
                conditions: {},
                traits: {
                    bookType: 'hb' as BookTypes
                }
            },
            {
                itemType,
                fullname,
                conditions: {},
                traits: {
                    bookType: 'pb' as BookTypes
                }
            },
            {
                itemType,
                fullname,
                conditions: {},
                traits: {
                    bookType: 'bb' as BookTypes
                }
            },
            {
                itemType,
                fullname,
                conditions: {},
                traits: {
                    bookType: 'tb' as BookTypes
                }
            }
        ] as ITaxonomyFlagNode[];
        return Object.fromEntries([
            [
                convertKey(genre),
                {
                    name: genre,
                    nodes,
                    flagOptions: [],
                    traitOptions: ['bookType'],
                    selectOptions: [],
                    path: [...path, n, genre].map(convertKey)
                }
            ]
        ]);
    });
    const value2 = value.reduce((pv, cv) => ({ ...pv, ...cv }), {
        // name: convertKey(n),
        // flagOptions: [],
        // traitOptions: [],
        // selectOptions: Object.keys(obj).map(convertKey),
        // path: [...path, n].map(convertKey)
    } as any as ITaxonomyNode);
    const $path = [...path, n].map(convertKey).join('.');
    const current = getProperty($path, graph) as ITaxonomyNode;
    const next =
        current == null ? value2 : (
            [value2, current].reduce(
                (pv, cv) => ({
                    path: cv.path,
                    selectOptions: [],
                    traitOptions: distinctByString([...pv.traitOptions ?? [], ...cv.traitOptions ?? []]),
                    flagOptions: distinctByString([...pv.flagOptions ?? [], ...cv.flagOptions ?? []]),
                    name: convertKey(path[path.length - 1]),
                    nodes: [...pv.nodes ?? [], ...cv.nodes ?? []]
                }),
                { path: path, name: '', nodes: [], flagOptions: [], traitOptions: [], selectOptions: [] } as ITaxonomyNode
            )
        );
    const result = setProperty($path, graph, next);
    return result;
}
function handleSelectOptions(obj: Record<string, ITaxonomyNode | Record<string, any>>, ...path: string[]) {
    if (Object.keys(obj).includes('nodes')) {
        return { ...obj, nodes: (obj.nodes as ITaxonomyFlagNode[]).map((x) => ({ ...x, path: obj.path })) };
    }
    for (const [key, value] of Object.entries(obj)) {
        obj[key] = handleSelectOptions(value as any, ...[...path, key]);
    }
    obj.selectOptions = Object.keys(obj);
    obj.flagOptions = [];
    obj.traitOptions = [];
    return obj;
}
function extractNodes(obj: Record<string, ITaxonomyNode | Record<string, any>>, ...currentPath: string[]): IClassifier[] {
    if (Array.isArray(obj)) return [];
    if (Object.keys(obj).includes('nodes') && (obj.nodes as any[]).length > 0) {
        return (obj.nodes as ITaxonomyFlagNode[])
            .map((x) => {
                const baseNode = { ...x, attributes: x.traits, conditions: [] as string[] } as IClassifier;
                return [
                    baseNode,
                    ...Object.entries(x.conditions).map(([condition, value]) => {
                        const itemType = value.itemType ?? x.itemType!;
                        const fullname = value.fullname ?? x.fullname!;
                        const nextNode = {
                            itemType,
                            fullname,
                            attributes: x.traits,
                            path: (x as any).path as string[],
                            conditions: [condition]
                        } as IClassifier;
                        return nextNode;
                    })
                ] as IClassifier[];
            })
            .reduce((pv, cv) => [...pv, ...cv], []);
    }
    return Object.entries(obj)
        .map(([currentKey, x]) => {
            console.log(`x`, x);
            const result = extractNodes(x as any, ...[...currentPath, currentKey]);
            return (
                result.length === 0 ? []
                : (x as any)?.nodes?.length ?? 0 > 0 ?
                    [
                        {
                            attributes: {},
                            conditions: [],
                            path: [...currentPath, currentKey].map(convertKey)
                        },
                        ...result
                    ]
                :   [
                        {
                            attributes: {},
                            conditions: [],
                            path: [...currentPath, currentKey].map(convertKey)
                        },
                        ...result
                    ]
            );
        })
        .reduce((pv, cv) => [...pv, ...cv], []);
}
type SimpleTaxonomyOptions = Record<string, [string, string]>;
type SimpleTaxonomyValue = [string, string, (SimpleTaxonomyOptions | null)?];
type SimpleRecord<T> = Record<string, T>;
type Taxonomy = Record<string, SimpleTaxonomyValue | SimpleRecord<SimpleTaxonomyValue | SimpleRecord<SimpleTaxonomyValue | SimpleRecord<SimpleTaxonomyValue>>>>;

function testValue(value: Taxonomy | SimpleTaxonomyValue): value is SimpleTaxonomyValue {
    return Array.isArray(value);
}
function handleArray(obj: SimpleTaxonomyValue) {
    const [itemType, fullname, options] = obj;
    return {
        traits: {},
        itemType,
        fullname,
        conditions: Object.fromEntries(Object.entries(options ?? {}).map(([k2, [itemType2, fullname2]]) => [k2, { itemType: itemType2, fullname: fullname2 }]))
    } as ITaxonomyFlagNode;
}
function handleObject(obj: Taxonomy, outerKey?: string, ...path: string[]): any {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) =>
            testValue(value) ?
                [
                    convertKey(key),
                    {
                        nodes: [handleArray(value)],
                        selectOptions: [] as string[],
                        traitOptions: [] as string[],
                        flagOptions: [] as string[],
                        name: convertKey(key),
                        path: ([...path, outerKey, key].filter((x) => x != null) as string[]).map(convertKey)
                    }
                ]
            :   [convertKey(key), handleObject(value, convertKey(key), ...([...path, outerKey].filter((x) => x != null) as string[]))]
        )
        // .map(
        //     ([key, value]) =>
        //         [
        //             key,
        //             {
        //                 nodes: [value],
        //                 selectOptions: [] as string[],
        //                 traitOptions: [] as string[],
        //                 flagOptions: [] as string[],
        //                 name: convertKey(key),
        //                 path: ([...path, innerKey, key].filter((x) => x != null) as string[]).map(convertKey)
        //             }
        //         ] as [string, ITaxonomyNode]
        // )
    );
}
function convertFromTaxonomy(graph: any, obj: Taxonomy, ...path: string[]) {
    console.log(`obj`, obj);
    const result = handleObject(obj, undefined, ...path);
    const result2 = setProperty(path.map(convertKey).join('.'), graph, result);
    return result2;
}

const toysGames: Taxonomy = {
    puzzles: {
        jigsawPuzzles: ['jigsaw puzzle', 'Toys & Collectibles::Games & Puzzles::Jigsaw Puzzles']
    },
    groupGames: {
        cardGames: ['card game', 'Toys & Collectibles::Games & Puzzles::Card Games'],
        stackingGames: ['', 'Toys & Collectibles::Games & Puzzles::Stacking Games'],
        boardGames: {
            other: ['board game', 'Toys & Collectibles::Games & Puzzles::Board Games'],
            checkers: ['checkers', 'Toys & Collectibles::Games & Puzzles::Chess & Checkers'],
            chess: ['chess', 'Toys & Collectibles::Games & Puzzles::Chess & Checkers']
        }
    },
    toyGuns: {
        nerfBlasters: ['NERF blaster', 'Toys & Collectibles::Sports & Outdoor Play::NERF & Blaster Guns'],
        ammunition: ['NERF ammunition', 'Toys & Collectibles::Sports & Outdoor Play::NERF & Blaster Darts']
    },
    stuffedToys: {
        beanBagPlushes: ['beanbag plush', 'Toys & Collectibles::Stuffed Animals & Plush::Beanbag Plushies'],
        plushPuppets: ['plush puppet', 'Toys & Collectibles::Stuffed Animals & Plush::Plush Puppets'],
        plushFigures: ['plush', 'Toys & Collectibles::Stuffed Animals & Plush::Plush Figures'],
        stuffedAnimals: ['stuffed animal', 'Toys & Collectibles::Stuffed Animals & Plush::Stuffed Animals']
    }
};
const tools: Taxonomy = {
    electrical: {
        timer: ['timer', 'Tools::Electrical Tools::Other Electrical Tools']
    },
    fasteningTools: {
        hooks: ['hooks', 'Tools::Fastening Tools::Other Fastening Tools']
    },
    powerTools: {
        drills: {
            straightDrills: ['power drill', 'Tools::Power Tools::Power Drills']
        }
    },
    vehicleTools: {
        emergencyEquipment: {
            jumperBox: ['jumper box', 'Other::Automotive::Tools & equipment'],
            powerStation: ['power station jump starter', 'Other::Automotive::Tools & equipment'],
            jumperCables: ['jumper cables', 'Other::Automotive::Tools & equipment']
        },
        maintenance: {
            errorCodeReader: ['error code reader', 'Other::Automotive::Tools & equipment'],
            tireGauge: ['tire gauge', 'Other::Automotive::Automotive Tire & Wheel Accessories']
        }
    }
};
const appliances: Taxonomy = {
    hvac: {
        spaceHeaters: ['space heater', 'Home::Home appliances::Space heaters'],
        airCirculators: ['air circulator', 'Home::Home appliances::Fans'],
        fans: ['fan', 'Home::Home appliances::Fans']
    },
    floorCare: {
        vacuum: ['vacuum', 'Home::Home appliances::Vacuums'],
        attachments: ['attachments', 'Home::Home appliances::Vacuums']
    },
    smallKitchen: {
        coffeeMakers: ['coffee maker', 'Home::Kitchen Coffee & Espresso Makers::Coffee Drippers'],
        toasterOvens: ['toaster oven', 'Home::Kitchen Small Appliances::Toaster Ovens'],
        toasters: ['toaster', 'Home::Kitchen Small Appliances::Toasters'],
        sodaMakers: ['soda maker', 'Home::Kitchen Small Appliances::Soda Makers'],
        indoorGrills: ['indoor grill', 'Home::Kitchen Small Appliances::Contact Grills'],
        foodProcessors: ['food processor', 'Home::Kitchen Small Appliances::Food Processors'],
        waffleIrons: ['waffle iron', 'Home::Kitchen Small Appliances::Waffle Makers'],
        handMixers: ['hand mixer', 'Home::Kitchen Small Appliances::Hand Mixers'],
        electricKettles: ['electric kettle', 'Home::Kitchen Tea & Accessories::Electric Kettles'],
        electricCanOpeners: ['electric can opener', 'Home::Kitchen Small Appliances::Other Small Appliances']
    }
};
const electronics: Taxonomy = {
    components: {
        drives: {
            hardDrives: {
                external: ['hard drive', 'Electronics::Computer Components & Parts::Computer Drive Enclosures'],
                internal: ['hard drive', 'Electronics::Computers & Laptops::Computer Drives']
            },
            cdDrive: ['CD-rom drive', 'Electronics::Computers & Laptops::Computer Drives'],
            dvdDrive: ['DVD drive', 'Electronics::Computers & Laptops::Computer Drives'],
            dvdrwDrive: ['DVD/RW drive', 'Electronics::Computers & Laptops::Computer Drives']
        },
        memory: {
            ddrRam: ['DDR RAM', 'Electronics::Computer Components & Parts::Computer Memory (RAM)']
        },
        cpu: ['CPU', 'Electronics::Computer Components & Parts::Computer CPUs'],
        networking: ['network card', 'Electronics::Computer Components & Parts::Other Computer Parts & Components'],
        rechargableBattery: ['rechargable battery', 'Electronics::Computer Components & Parts::Computer Power Supplies']
    },
    computers: {
        desktops: ['desktop computer', 'Electronics::Computers & Laptops::Desktops Computers'],
        laptops: ['laptop computer', 'Electronics::Computers & Laptops::Laptops'],
        scanners: ['scanner', 'Electronics::Computers & Laptops::Scanners'],
        printers: {
            inkjet: ['inkjet printer', 'Electronics::Computers & Laptops::Printers'],
            laser: ['laser printer', 'Electronics::Computers & Laptops::Printers'],
            other: ['printer', 'Electronics::Computers & Laptops::Printers']
        },
        allInOne: ['all-in-one printer', 'Electronics::Computers & Laptops::All-In-One Printers']
    },
    cellPhones: {
        accessories: {
            wirelessChargers: ['wireless charger', 'Electronics::Cell phones & accessories::Wireless Cell Phone Chargers'],
            cases: ['phone case', 'Electronics::Cell phones & accessories::Cell Phone Cases'],
            mounts: ['cell phone mount', 'Electronics::Cell phones & accessories::Cell Phone Cradles']
        },
        smartPhones: ['smart phone', 'Electronics::Cell phones & accessories::Cell phones & smartphones']
    },
    audio: {
        cdPlayers: ['CD player', 'Electronics::Home Audio::CD Players'],
        radios: ['radio', 'Electronics::Home Audio::Radios'],
        turntables: ['turntable', 'Electronics::Home Audio::Home Audio Turntables'],
        speakers: {
            bluetooth: ['bluetooth speaker', 'Electronics::Home Audio::Bluetooth Speakers'],
            desktop: ['speakers', 'Electronics::Home Audio::Home Speakers']
        }
    },
    gaming: {
        consoles: ['video game console', 'Electronics::Video games & consoles::Consoles'],
        accessories: {
            gamepads: ['gamepad', 'Electronics::Video games & consoles::Accessories']
        }
    },
    photography: {
        digitalCameras: ['digital camera', 'Electronics::Cameras & photography::Digital cameras'],
        filmCameras: ['camera', 'Electronics::Cameras & photography::Film & Polaroid Cameras'],
        polaroidCameras: ['polaroid camera', 'Electronics::Cameras & photography::Film & Polaroid Cameras']
    },
    homeSecurity: {
        surveillanceCameras: ['survelliance camera', 'Electronics::Smart Home & Security::Home surveillance'],
        doorAlarms: ['door alarm', 'Electronics::Smart Home & Security::Other']
    },
    video: {
        cableBoxes: {
            dvrs: ['DVR', 'Electronics::TV & Video::DVRs']
        },
        dvdPlayer: ['DVD player', 'Electronics::TV & Video::DVD Players'],
        vhsPlayer: ['VHS player', 'Electronics::TV & Video::Other'],
        projectors: ['projector', 'Electronics::TV & Video::Projectors'],
        streamingDevices: ['streaming device', 'Electronics::TV & Video::Streaming Devices']
    },
    telephones: ['telephone', 'Vintage & collectibles::Electronics::Telephone']
};
const collectibles: Taxonomy = {
    figurines: {
        ceramic: ['ceramic figurine', 'Toys & Collectibles::Vintage & Antique Collectibles::Figurines'] as [string, string],
        crystal: ['crystal figurine', 'Toys & Collectibles::Vintage & Antique Collectibles::Figurines'] as [string, string]
    },
    novelty: ['novelty collectible', 'Toys & Collectibles::Novelty & Gag Toys::All Novelty & Gag Toys'] as [string, string],
    toys: {
        dolls: ['doll', 'Toys & Collectibles::Vintage & Antique Toys::Dolls'],
        happyMealToys: ['happy meal toy', 'Toys & Collectibles::Vintage & Antique Toys::Other']
    },
    tradingCards: {
        baseballCards: ['baseball cards', 'Toys & Collectibles::Sports Trading Cards::Baseball Trading Cards']
    }
};
const cables: Taxonomy = {
    data: ['cord', 'Electronics::Cell phones & accessories::Cell Phone Cables'],
    audio: ['cord', 'Electronics::Home Audio::Home Audio Cables'],
    power: ['cord', 'Other::Other::All Other'],
    video: ['cord', 'Other::Other::All Other']
};
const homeGoods: Taxonomy = {
    cleaning: {
        dusters: ['duster', 'Home::Cleaning supplies::Dusting']
    },
    fineChina: {
        teapots: [
            'fine china teapot',
            'Vintage & collectibles::Serving::Teapot',
            {
                isBoxedSet: ['fine china teapot set', 'Vintage & collectibles::Serving::Teapot']
            }
        ]
    },
    kitchen: {
        servingware: {
            platters: ['platter', 'Home::Kitchen Serveware::Serving Platters'],
            servingTrays: ['serving tray', 'Home::Kitchen Serveware::Serving Trays']
        },
        drinkware: {
            coffeeMugs: ['coffee mug', 'Home::Kitchen Drinkware::Coffee Mugs'],
            tumblers: [
                'drinking glass',
                'Home::Kitchen Drinkware::Drinking Glasses',
                {
                    isBoxedSet: ['glassware set', 'Home::Kitchen Drinkware::Glassware Collections']
                }
            ]
        },
        utensils: {
            tongs: ['kitchen tongs', 'Home::Kitchen Utensils::Kitchen Tongs'],
            spatulas: [
                'spatula',
                'Home::Kitchen Utensils::Kitchen Spatulas',
                {
                    isBoxedSet: ['spatula set', 'Home::Kitchen Utensils::Kitchen Spatulas']
                }
            ],
            misc: ['kitchen utensil set', 'Home::Kitchen Utensils::Kitchen Utensil Sets'],
            measuringSpoons: [
                'measuring spoon',
                'Home::Kitchen Utensils::Measuring Spoons',
                {
                    isBoxedSet: ['measuring spoon set', 'Home::Kitchen Utensils::Measuring Spoons']
                }
            ],
            measuringCups: [
                'measuring cup',
                'Home::Kitchen Utensils::Measuring Cups',
                {
                    isBoxedSet: ['measuring cup set', 'Home::Kitchen Utensils::Measuring Cups']
                }
            ],
            chefKnives: [
                'chef knives',
                "Home::Kitchen Cutlery::Chef's Knives",
                {
                    isBoxedSet: ['kitchen knife set', 'Home::Kitchen Cutlery::Kitchen Knife Sets']
                }
            ],
            flourSifter: ['flour sifter', 'Home::Kitchen Utensils::Kitchen Sifters']
        },
        bakeware: {
            bakingSheets: [
                'baking sheet',
                'Home::Kitchen Bakeware::Baking Sheets',
                {
                    isBoxedSet: ['bakeware set', 'Home::Kitchen Bakeware::Bakeware Sets']
                }
            ]
        },
        cookware: {
            colanders: ['colander', 'Home::Kitchen Utensils::Kitchen Colanders'],
            kettles: ['kettle', 'Home::Kitchen Tea & Accessories::Stovetop Kettles'],
            stockPots: [
                'stock pot',
                'Home::Kitchen Cookware::Stock Pots & Multipots',
                {
                    isBoxedSet: ['cookware set', 'Home::Kitchen Cookware::Cookware Sets']
                }
            ]
        },
        dinnerware: {
            napkinRings: ['napkin ring', 'Home::Kitchen & Table Linens::Kitchen Napkin Rings'],
            dinnerPlates: [
                'dinner plate',
                'Home::Kitchen Dinnerware::Dinner Plates',
                {
                    isBoxedSet: ['dinnerware set', 'Home::Kitchen Dinnerware::Dinnerware Sets']
                }
            ],
            saladPlates: [
                'salad plate',
                'Home::Kitchen Dinnerware::Salad Plates',
                {
                    isBoxedSet: ['dinnerware set', 'Home::Kitchen Dinnerware::Dinnerware Sets']
                }
            ]
        }
    },
    linens: {
        ironingBoard: ['ironing board', 'Home::Home appliances::Ironing Boards'],
        bathmats: [
            'bathmat',
            'Home::Bath::Bath rugs',
            {
                isBoxedSet: ['bathmat set', 'Home::Bath::Bath rugs']
            }
        ],
        towels: [
            'bath towels',
            'Home::Bath::Towels',
            {
                isBoxedSet: ['bath towel set', 'Home::Bath::Towels']
            }
        ],
        bedSheets: [
            'bed sheets',
            'Home::Bedding::Bed Sheets',
            {
                isBoxedSet: ['bed sheet set', 'Home::Bedding::Bed Sheets']
            }
        ],
        comforters: [
            'bed comforter',
            'Home::Bedding::Comforters',
            {
                isBoxedSet: ['comforter set', 'Home::Bedding::Comforter Sets']
            }
        ]
    },
    storage: {
        kitchenCanisters: [
            'kitchen canister',
            'Home::Kitchen Storage::Kitchen Canisters',
            {
                isBoxedSet: ['kitchen canister set', 'Home::Kitchen Storage::Kitchen Canisters']
            }
        ],
        cdStorage: ['cd storage', 'Home::Storage & organization::Clothing & closet storage'],
        kitchenDrawerOrganizer: ['kitchen drawer organizer', 'Home::Kitchen Storage::Kitchen Drawers Organizers'],
        jewelryOrganizer: ['jewelry organizer', 'Home::Storage & organization::Jewelry boxes & organizers'],
        jewelryBox: ['jewelry box', 'Home::Storage & organization::Jewelry boxes & organizers'],
        food: ['food storage container', 'Home::Kitchen Storage::Food Storage Containers']
    },
    decor: {
        accents: {
            areaRugs: ['area rug', 'Home::Home decor::Area Rugs'],
            baskets: ['basket', 'Home::Home decor::Baskets'],
            clocks: ['clock', 'Home::Home decor::Clocks'],
            pillows: ['accent pillow', 'Home::Home decor::Decorative pillows'],
            candles: ['candle', 'Home::Home decor::Home Candles'],
            photoAlbums: ['photo album', 'Home::Home decor::Photo Albums'],
            pictureFrames: ['picture frame', 'Home::Home decor::Picture Frames'],
            vases: ['vase', 'Home::Home decor::Vases'],
            pottery: ['pottery', 'Home::Home decor::Home decor accents'],
            ceramics: ['ceramic decor', 'Home::Home decor::Home decor accents'],
            planters: ['planter', 'Handmade::Ceramics and pottery::Planters']
        },
        lighting: {
            bulbs: ['light bulbs', 'Home::Home decor::Home Decor Lighting'],
            tableLamps: ['table lamp', 'Home::Home decor::Home Decor Lamps']
        },
        wallHangings: {
            mirrors: ['wall mirror', 'Home::Home decor::Mirrors'],
            tapestries: ['tapestry', 'Home::Home decor::Tapestries'],
            windowTreatments: ['window treatment', 'Home::Home decor::Window treatments']
        },
        holidays: {
            easter: ['easter decor', 'Handmade::Holidays::Easter'],
            halloween: ['halloween decor', 'Handmade::Holidays::Halloween'],
            hanukkah: ['hanukkah decor', 'Handmade::Holidays::Hanukkah'],
            patriotic: ['holiday decor', 'Handmade::Holidays::Patriotic'],
            valentines: ["valentine's day decor", 'Handmade::Holidays::Valentine'],
            christmas: {
                misc: ['christmas decor', 'Handmade::Holidays::Christmas'],
                ornaments: ['christmas ornament', 'Handmade::Holidays::Christmas']
            }
        }
    }
};
const sportingGoods: Taxonomy = {
    outdoors: {
        campingCoolers: ['cooler', 'Sports & outdoors::Camping Equipment::Camping Coolers & Ice Chests'],
        campingChairs: ['camping chair', 'Sports & outdoors::Camping Equipment::Camping Chairs'],
        hikingEquipment: ['hiking equipment', 'Sports & outdoors::Outdoors::Hiking Equipment']
    },
    sports: {
        tennis: {
            rackets: ['tennis racquet', 'Sports & outdoors::Team sports::Tennis & racquets']
        },
        bowling: {
            balls: ['bowling ball', 'Sports & outdoors::Exercise::Bowling'],
            accessories: ['bowling accessory', 'Sports & outdoors::Exercise::Bowling'],
            pins: ['bowling pin', 'Sports & outdoors::Exercise::Bowling']
        }
    }
};
const petSupplies: Taxonomy = {
    dogs: {
        harnesses: ['dog harness', 'Pet Supplies::Dog Supplies::Dog Harnesses'],
        poopBags: ['dog poop bags', 'Pet Supplies::Dog Supplies::Dog Waste Bags']
    }
};
const officeGoods: Taxonomy = {
    inkAndToner: {
        inkjetCartridges: ['inkjet cartridges', 'Office::Ink & Toner::Ink Cartidges']
    },
    notebooks: {
        journals: ['journal', 'Office::Notebooks & Writing Pads::Journals']
    },
    printerPaper: {
        photoPaper: ['photo paper', 'Office::Paper::Photo Paper']
    }
};
const fiction: Record<string, [string, string]> = {
    adventure: ['', 'Books::Fiction Books::Action & Adventure Books'],
    comics: ['', 'Books::Fiction Books::Comics'],
    childrensBooks: ['', "Books::Fiction Books::Fictional Children's Books"],
    historicalFiction: ['', 'Books::Fiction Books::Historical Fiction Books'],
    horror: ['', 'Books::Fiction Books::Horror Fiction Books'],
    literaryFiction: ['', 'Books::Fiction Books::Literary Fiction Books'],
    mystery: ['', 'Books::Fiction Books::Mystery & Crime Fiction Books'],
    other: ['', 'Books::Fiction Books::Other Fiction Books'],
    romance: ['', 'Books::Fiction Books::Romance Fiction Books'],
    fantasy: ['', 'Books::Fiction Books::Sci-fi & Fantasy Books'],
    sciFi: ['', 'Books::Fiction Books::Sci-fi & Fantasy Books'],
    thriller: ['', 'Books::Fiction Books::Thriller Fiction Books'],
    western: ['', 'Books::Fiction Books::Western Books'],
    action: ['', 'Books::Fiction Books::Action & Adventure Books']
};
const nonfiction: Record<string, [string, string]> = {
    art: ['', 'Books::Nonfiction Books::Art Books'],
    biographies: ['', 'Books::Nonfiction Books::Biographies & Memoirs'],
    business: ['', 'Books::Nonfiction Books::Business & Finance Books'],
    craft: ['', 'Books::Nonfiction Books::Craft Books'],
    childrensBooks: ['', "Books::Nonfiction Books::Nonfiction Children's Books"],
    other: ['', 'Books::Nonfiction Books::Other Nonfiction Books'],
    photography: ['', 'Books::Nonfiction Books::Photography Books'],
    politics: ['', 'Books::Nonfiction Books::Politics Books'],
    spirtuality: ['', 'Books::Nonfiction Books::Religion & Spirituality Books'],
    cookbooks: ['', 'Books::Reference Books::Cookbooks'],
    dictionaries: ['', 'Books::Reference Books::Dictionaries'],
    instructional: ['', 'Books::Reference Books::Educational & Instructional Books'],
    encyclopedias: ['', 'Books::Reference Books::Encyclopedias'],
    fitness: ['', 'Books::Reference Books::Health & Fitness Books'],
    selfHelp: ['', 'Books::Reference Books::Self-Help Books'],
    textbooks: ['', 'Books::Reference Books::Textbooks'],
    thesauruses: ['', 'Books::Reference Books::Thesauruses']
};
const media: Taxonomy = {
    videos: {
        vhs: ['', 'Electronics::Media::VHS'],
        dvd: ['', 'Electronics::Media::DVD'],
        bluRay: ['', 'Electronics::Media::Blu-ray']
    },
    music: {
        cd: ['', 'Electronics::Media::CD']
    },
    videoGames: {
        consoleGames: ['', 'Electronics::Video games & consoles::Games'],
        pcGames: ['', 'Electronics::Video games & consoles::PC Gaming'],
        strategyGuides: ['', 'Electronics::Video games & consoles::Strategy guides']
    },
    magazines: {
        international: ['', 'Books::Magazines::International Magazines'],
        lifestyle: ['', 'Books::Magazines::Lifestyle & Culture Magazines'],
        culture: ['', 'Books::Magazines::Lifestyle & Culture Magazines'],
        professional: ['', 'Books::Magazines::Professional & Trade Magazines'],
        trade: ['', 'Books::Magazines::Professional & Trade Magazines'],
        other: ['', 'Books::Magazines::Other Magazines']
    }
};
const fragrances: NewApparelTaxonomy[] = [
    [
        'perfume',
        'perfume',
        ['Beauty::Fragrance::Men', 'Beauty::Fragrance::Women', ['Beauty::Fragrance::Kids', 'Beauty::Fragrance::Kids', 'Beauty::Fragrance::Kids'], ['Beauty::Fragrance::Kids', 'Beauty::Fragrance::Kids', 'Beauty::Fragrance::Kids']],
        {
            isBoxedSet: ['perfume boxed set', 'Beauty::Fragrance::Sets', 'Beauty::Fragrance::Sets']
        }
    ],
    [
        'cologne',
        'cologne',
        ['Beauty::Fragrance::Men', 'Beauty::Fragrance::Women', ['Beauty::Fragrance::Kids', 'Beauty::Fragrance::Kids', 'Beauty::Fragrance::Kids'], ['Beauty::Fragrance::Kids', 'Beauty::Fragrance::Kids', 'Beauty::Fragrance::Kids']],
        {
            isBoxedSet: ['cologne boxed set', 'Beauty::Fragrance::Sets', 'Beauty::Fragrance::Sets']
        }
    ]
];
const personalCare: Taxonomy = {
    beauty: {
        hairCare: {
            hairDryers: ['hair dryer', 'Beauty::Tools & accessories::Hair styling tools', null],
            curlingIrons: ['curling iron', 'Beauty::Tools & accessories::Hair styling tools', null]
        }
    },
    babyCare: {
        teethers: ['teether', 'Kids::Health & baby care::Teethers', null]
    }
};
let result: any = {};
result = convertToGraph(result, bag, undefined, 'bag');
result = convertToGraph(result, jewelry, undefined, 'jewelry');
result = convertFromArray(result, head, undefined, 'apparel', 'accessories', 'head');
result = convertFromArray(result, hats, undefined, 'apparel', 'accessories', 'head', 'hats');
result = convertFromArray(result, miscAccessories, undefined, 'apparel', 'accessories', 'misc');
// result = convertFromArray(result, footwearType, 'footwearType', 'apparel', 'footwear');
// result = convertFromArray(result, shoeType, 'shoeType', 'apparel', 'footwear');
result = convertFromArray(result, loafers, undefined, 'apparel', 'footwear', 'loafers');
result = convertFromArray(result, sneakers, undefined, 'apparel', 'footwear', 'sneakers');
result = convertFromArray(result, heels, undefined, 'apparel', 'footwear', 'heels');
result = convertFromArray(result, sandals, undefined, 'apparel', 'footwear', 'sandals');
result = convertFromArray(result, specialized, undefined, 'apparel', 'footwear', 'specialized');
result = convertFromArray(result, mulesAndClogs, undefined, 'apparel', 'footwear', 'mules-and-clogs');
result = convertFromArray(result, boots, undefined, 'apparel', 'footwear', 'boots');
result = convertFromArray(result, oxfords, undefined, 'apparel', 'footwear', 'oxfords');
result = convertFromArray(result, slipOns, undefined, 'apparel', 'footwear', 'slip-ons');
result = convertFromArray(result, slippers, undefined, 'apparel', 'footwear', 'slippers');

result = convertFromArray(result, miscUndergarment, undefined, 'apparel', 'undergarments', 'misc');
result = convertFromArray(result, sleepwear, undefined, 'apparel', 'undergarments', 'sleepwear');
result = convertFromArray(result, swimwear, undefined, 'apparel', 'undergarments', 'swimwear');
result = convertFromArray(result, dress, undefined, 'apparel', 'full-body', 'dress');
result = convertFromArray(result, blazerType, 'blazerType', 'apparel', 'full-body', 'suit');
result = convertFromArray(result, suitType, 'suitType', 'apparel', 'full-body', 'suit');
result = convertFromArray(result, coats, undefined, 'apparel', 'tops', 'jackets');
result = convertFromArray(result, sweaters, undefined, 'apparel', 'tops', 'sweaters');
result = convertFromArray(result, casualShirt, undefined, 'apparel', 'tops', 'casual-shirts');
result = convertFromArray(result, blazers, undefined, 'apparel', 'tops', 'jackets', 'blazers');
result = convertFromArray(result, sportCoats, undefined, 'apparel', 'tops', 'jackets', 'sport-coats');
result = convertFromArray(result, formalShirt, undefined, 'apparel', 'tops', 'formal-shirts');
result = convertFromArray(result, buttonDowns, undefined, 'apparel', 'tops', 'formal-shirts', 'button-downs');

result = convertFromArray(result, skirts, undefined, 'apparel', 'bottoms', 'skirts');
result = convertFromArray(result, shorts, undefined, 'apparel', 'bottoms', 'shorts');
result = convertFromArray(result, pants, undefined, 'apparel', 'bottoms', 'pants');
result = convertFromArray(result, jeans, undefined, 'apparel', 'bottoms', 'jeans');
result = convertFromTaxonomy(result, toysGames, 'toysGames');
result = convertFromTaxonomy(result, officeGoods, 'officeGoods');
result = convertFromTaxonomy(result, petSupplies, 'petSupplies');
result = convertFromTaxonomy(result, tools, 'tools');

result = convertFromTaxonomy(result, appliances, 'appliances');
result = convertFromTaxonomy(result, electronics, 'electronics');
result = convertFromTaxonomy(result, homeGoods, 'homeGoods');
result = convertFromTaxonomy(result, collectibles, 'collectibles');
result = convertFromTaxonomy(result, sportingGoods, 'sportingGoods');
result = convertFromTaxonomy(result, personalCare, 'personalCare');
result = convertFromTaxonomy(result, media, 'media');
result = convertFromTaxonomy(result, cables, 'cables');
result = convertBook(result, fiction, 'fiction', 'media', 'books');
result = convertBook(result, nonfiction, 'nonfiction', 'media', 'books');
result = convertFromArray(result, golf, undefined, 'sportingGoods', 'sports', 'golf', 'clubs');
result = convertFromArray(result, fragrances, undefined, 'personalCare', 'beauty', 'fragrances');

// result = convertFromTaxonomy(result, , '');

result = handleSelectOptions(result);

console.log(JSON.stringify(result, null, '\t'));
fs.writeFileSync('classifierPath.json', JSON.stringify(result, null, '\t'));
fs.renameSync('classifierPath.json', './src/assets/data/classifierPath.json');

const extracted = [{ conditions: [], attributes: {}, path: [] } as IClassifier, ...extractNodes(result)];
fs.writeFileSync('classifier.json', JSON.stringify(extracted, null, '\t'));
fs.renameSync('classifier.json', './src/assets/data/classifier.json');
