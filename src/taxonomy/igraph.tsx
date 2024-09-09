import { Genders } from '../schema/enums';
import { IClassification, IMercariTaxonomy } from '../types';
import Realm from 'realm';
import { queryClient } from '../components/AppRoot';

export type FlagOptions = {
    isMLB?: [string, string, string];
    isNBA?: [string, string, string];
    isNCAA?: [string, string, string];
    isNHL?: [string, string, string];
    isNFL?: [string, string, string];
    isAthletic?: [string, string | null, string | null];
    isMaternity?: [string, null, string];
};
export type ApparelTaxonomy = [string | null, string | null, [string | null, string | null, string | null] | null, [string | null, string | null, string | null] | null];
export type ClassificationOption = [string, string, ApparelTaxonomy, FlagOptions?] | [key: string, itemType: string, taxonomy: [string], flags: Record<string, [string]>];
export type EndPoint<TKey extends string> = Record<TKey, ClassificationOption[]>;

export const $graph: any = {
    bag: {
        bagType: [
            ['backpack', 'backpack', ["Men::Men's accessories::Backpacks", "Women::Women's handbags::Backpacks", null, null]],
            ['bag', 'bag', ["Men::Men's accessories::Bags", null, null, null]],
            ['briefcase', 'briefcase', ["Men::Men's accessories::Briefcases", null, null, null]],
            ['bucket', 'bucket bag', [null, "Women::Women's handbags::Bucket Bags", null, null]],
            ['cosmetic', 'cosmetic bag', [null, "Women::Women's handbags::Cosmetic bags", null, null]],
            ['cross-body', 'cross-body bag', [null, "Women::Women's handbags::Crossbody Bags", null, null]],
            ['messenger', 'messenger bag', [null, "Women::Women's handbags::Messenger Bags", null, null]],
            ['hobo', 'hobo bag', [null, "Women::Women's handbags::Hobo Bags", null, null]],
            ['satchel', 'satchel', [null, "Women::Women's handbags::Satchel", null, null]],
            ['shoulder', 'shoulder bag', [null, "Women::Women's handbags::Shoulder Bags", null, null]],
            ['tote', 'tote', [null, "Women::Women's handbags::Tote Bags", null, null]],
            ['fanny-pack', 'fanny-pack', [null, "Women::Women's handbags::Waist Bags & Fanny Packs", null, null]]
        ]
    },
    jewelry: {
        jewelryType: [
            ['bracelet', 'bracelet', ['Men::Jewelry::Bracelets', 'Women::Jewelry::Bracelets', null, null]],
            ['cufflinks', 'cufflinks', ['Men::Jewelry::Cufflinks', null, null, null]],
            ['earrings', 'earrings', ['Men::Jewelry::Earrings', 'Women::Jewelry::Earrings', null, null]],
            ['necklace', 'necklace', ['Men::Jewelry::Necklaces', 'Women::Jewelry::Necklaces', null, null]],
            ['pin', 'pin', ['Men::Jewelry::Pins', 'Women::Jewelry::Pins', null, null]],
            ['ring', 'ring', ['Men::Jewelry::Rings', 'Women::Jewelry::Rings', null, null]],
            ['watch', 'watch', ["Men::Men's accessories::Watches", "Women::Women's accessories::Watches", null, null]],
            ['nose-ring', 'nose ring', [null, 'Women::Jewelry::Nose Rings', null, null]],
            ['toe-ring', 'toe ring', [null, 'Women::Jewelry::Toe Rings', null, null]]
        ]
    },
    apparel: {
        accessories: {
            misc: {
                accessoryType: [
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
                ]
            },
            head: {
                headAccessoryType: [
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
                ]
            }
        },
        footwear: {
            footwearType: [
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
                    'loafers',
                    'loafers',
                    [
                        'Men::Shoes::Loafers',
                        'Women::Shoes::Loafers',
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
                ],
                [
                    'boots',
                    'boots',
                    [
                        'Men::Shoes::Boots',
                        'Women::Shoes::Boots',
                        ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
                        ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
                    ]
                ],
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
                    'oxfords',
                    'oxfords',
                    [
                        'Men::Shoes::Oxfords',
                        'Women::Shoes::Oxfords',
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
                ],
                [
                    'sandals',
                    'sandals',
                    [
                        'Men::Shoes::Sandals',
                        'Women::Shoes::Sandals',
                        ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
                        ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
                    ]
                ],
                [
                    'slip-ons',
                    'slip-ons',
                    [
                        'Men::Shoes::Slip-Ons',
                        'Women::Shoes::Slip-Ons',
                        ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
                        ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
                    ]
                ],
                [
                    'slippers',
                    'slippers',
                    [
                        'Men::Shoes::Slippers',
                        'Women::Shoes::Slippers',
                        ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
                        ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
                    ]
                ],
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
                    'flats',
                    'flats',
                    [
                        'Men::Shoes::All Shoes',
                        'Women::Shoes::Flats',
                        ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
                        ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
                    ]
                ],
                [
                    'heels',
                    'heels',
                    [
                        'Men::Shoes::All Shoes',
                        'Women::Shoes::Heels',
                        ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
                        ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
                    ]
                ]
            ],
            shoeType: [
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
                    'clog',
                    'clog',
                    [
                        'Men::Shoes::Clogs',
                        'Women::Shoes::Clogs',
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
                    'loafer',
                    'loafer',
                    [
                        'Men::Shoes::Loafers',
                        'Women::Shoes::Loafers',
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
                    'mule',
                    'mule',
                    [
                        'Men::Shoes::Mules',
                        'Women::Shoes::Mules',
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
                    'oxford',
                    'oxford',
                    [
                        'Men::Shoes::Oxfords',
                        'Women::Shoes::Oxfords',
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
                    'sandal',
                    'sandal',
                    [
                        'Men::Shoes::Sandals',
                        'Women::Shoes::Sandals',
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
                    'slip-on',
                    'slip-on',
                    [
                        'Men::Shoes::Slip-Ons',
                        'Women::Shoes::Slip-Ons',
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
                ],
                [
                    'sneaker',
                    'sneaker',
                    [
                        'Men::Shoes::Fashion sneakers',
                        'Women::Shoes::Fashion sneakers',
                        ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
                        ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
                    ],
                    {
                        isAthletic: ['sneaker', 'Men::Shoes::Athletic', 'Women::Shoes::Athletic']
                    }
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
                    't-strap',
                    't-strap',
                    [
                        'Men::Shoes::All Shoes',
                        'Women::Shoes::Heels',
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
                ]
            ]
        },
        undergarments: {
            misc: {
                undergarmentType: [
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
                ]
            },
            sleepwear: {
                sleepwearType: [
                    ['nightgowns', 'nightgown', ['Men::Other::All Other', 'Women::Sleepwear & robes::Nightgowns & sleep shirts', null, null]],
                    ['sleep-shirt', 'sleep-shirt', ['Men::Other::All Other', 'Women::Sleepwear & robes::Nightgowns & sleep shirts', null, null]],
                    ['pajamas', 'pajamas', ['Men::Other::All Other', 'Women::Sleepwear & robes::Pajama sets', null, null]],
                    ['pajama-top', 'pajama top', ['Men::Other::All Other', 'Women::Sleepwear & robes::Pajama tops', null, null]],
                    ['pajama-bottom', 'pajama bottom', ['Men::Other::All Other', 'Women::Sleepwear & robes::Pajama pants', null, null]],
                    ['robe', 'robe', ['Men::Other::All Other', 'Women::Sleepwear & robes::Robes', null, null]]
                ]
            },
            swimwear: {
                swimwearType: [
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
                ]
            }
        },
        fullbody: {
            dress: {
                dressType: [
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
                ]
            },
            suit: {
                blazerType: [
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
                ],
                suitType: [
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
                ]
            }
        },
        tops: {
            coats: {
                jacketType: [
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
                ]
            },
            pullOver: {
                casualShirtType: [
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
                    [
                        'sweater',
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
                    ]
                ],
                neckType: [
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
                ],
                sleeveLength: [
                    [
                        'long',
                        'shirt',
                        [
                            null,
                            null,
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ],
                        {
                            isAthletic: ['shirt', 'Men::Athletic apparel::Athletic Long Sleeve Shirts', null]
                        }
                    ],
                    [
                        'short',
                        'shirt',
                        [
                            null,
                            null,
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ],
                        {
                            isAthletic: ['shirt', 'Men::Athletic apparel::Athletic Short Sleeve Shirts', null]
                        }
                    ]
                ]
            },
            buttonUp: {
                blazerType: [
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
                ],
                formalShirtType: [
                    [
                        'blazer',
                        'blazer',
                        [
                            'Men::Blazers & sport coats::Other',
                            'Women::Suits & blazers::Blazer',
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ],
                        {
                            isMaternity: ['blazer', null, 'Women::Maternity::Maternity Blazers']
                        }
                    ],
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
                        'button-down',
                        'button-down',
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
                        'full-zip',
                        'full-zip',
                        [
                            'Men::Sweaters::Full zip',
                            'Women::Sweaters::Full zip',
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
                        'sport-coat',
                        'sport coat',
                        [
                            'Men::Blazers & sport coats::Other',
                            'Women::Suits & blazers::Blazer',
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
                ],
                neckType: [
                    [
                        'collared',
                        'sweater',
                        [
                            null,
                            'Women::Sweaters::Collared',
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ]
                    ],
                    [
                        'cowl',
                        'sweater',
                        [
                            null,
                            'Women::Sweaters::Cowl neck',
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ]
                    ],
                    [
                        'crew',
                        'sweater',
                        [
                            'Men::Sweaters::Crewneck',
                            'Women::Sweaters::Crewneck',
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ]
                    ],
                    [
                        'mock',
                        'sweater',
                        [
                            null,
                            'Women::Sweaters::Mock Sweaters',
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ]
                    ],
                    [
                        'scoop',
                        'sweater',
                        [
                            null,
                            'Women::Sweaters::Scoop neck',
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ]
                    ],
                    [
                        'v',
                        'sweater',
                        [
                            'Men::Sweaters::V-neck',
                            null,
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ]
                    ]
                ],
                sleeveLength: [
                    [
                        'sleeveless',
                        'sweater',
                        [
                            null,
                            'Women::Sweaters::Sleeveless Sweaters',
                            ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
                            ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
                        ]
                    ]
                ]
            }
        },
        bottoms: {
            skirt: {
                skirtType: [
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
                ]
            },
            pants: {
                materialStyle: [
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
                    ]
                ],
                pantStyle: [
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
                ]
            },
            shorts: {
                materialStyle: [
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
                    ]
                ],
                pantStyle: [
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
                ]
            },
            jeans: {
                legStyle: [
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
                ],
                pantStyle: [
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
                    ]
                ]
            }
            // bottomType: {

            //     jeans: {
            //         legStyle: {
            //             baggy: {
            //                 gender: {
            //                     mens: 'Men::Jeans::Baggy, loose'
            //                 }
            //             },
            //             bootcut: {
            //                 gender: {
            //                     mens: 'Men::Jeans::Boot cut'
            //                 }
            //             },
            //             capri: true,
            //             cropped: true,
            //             flare: true,
            //             relaxed: true,
            //             skinny: true,
            //             slim: true,
            //             slimbootcut: true,
            //             straight: true
            //         },
            //         pantStyle: {
            //             cargo: {
            //                 gender: {
            //                     mens: 'Men::Jeans::Cargo'
            //                 }
            //             },
            //             carpenter: {
            //                 gender: {
            //                     mens: 'Men::Jeans::Carpenter'
            //                 }
            //             }
            //         }
            //     },
            //     pants: true,
            //     shorts: true
            // }
            // flags: ['isAthletic', 'isActive', 'isMaternity'],
            // legStyle: {
            //     baggy: { bottomType: ['jeans'], gender: ['mens', 'womens'] },
            //     bootcut: { bottomType: ['jeans'], gender: ['mens', 'womens'] },
            //     capri: { bottomType: ['jeans', 'pants'], gender: ['womens'] },
            //     cropped: { bottomType: ['jeans', 'pants'], gender: ['womens'] },
            //     flare: { bottomType: ['jeans'], gender: ['womens'] },
            //     relaxed: { bottomType: ['jeans'], gender: ['mens', 'womens'] },
            //     skinny: { bottomType: ['jeans'], gender: ['mens', 'womens'] },
            //     slim: { bottomType: ['jeans'], gender: ['mens', 'womens'] },
            //     slimbootcut: { bottomType: ['jeans'], gender: ['womens'] },
            //     straight: { bottomType: ['jeans'], gender: ['mens', 'womens'] }
            // },
            // pantType: {
            //     bermuda: { bottomType: ['shorts'], gender: ['womens'] },
            //     bike: { bottomType: ['shorts'], gender: ['womens'] },
            //     boyfriend: { bottomType: ['jeans'], gender: ['womens'] },
            //     cargo: { bottomType: ['jeans', 'pants', 'shorts'], gender: ['mens', 'womens'] },
            //     carpenter: { bottomType: ['jeans', 'pants', 'shorts'], gender: ['mens', 'womens'] },
            //     casual: { bottomType: ['pants', 'shorts'], gender: ['mens', 'womens'] },
            //     dress: { bottomType: ['pants', 'shorts'], gender: ['mens', 'womens'] },
            //     'high-wasted': { bottomType: ['shorts'], gender: ['womens'] },
            //     leggings: { bottomType: ['pants'], gender: ['womens'] },
            //     overalls: { bottomType: ['jeans'], gender: ['mens', 'womens'] },
            //     pleated: { bottomType: ['pants'], gender: ['mens', 'womens'] },
            //     'short-shorts': { bottomType: ['shorts'], gender: ['womens'] },
            //     skort: { bottomType: ['shorts'], gender: ['womens'] }
            // },
            // materialType: {
            //     chinos: { bottomType: ['pants', 'shorts'], gender: ['mens', 'womens'] },
            //     corduroys: { bottomType: ['pants'], gender: ['mens', 'womens'] },
            //     denim: { bottomType: ['shorts'], gender: ['mens', 'womens'] },
            //     khakis: { bottomType: ['pants', 'shorts'], gender: ['mens', 'womens'] },
            //     leather: { bottomType: ['pants'], gender: ['mens', 'womens'] },
            //     linen: { bottomType: ['pants'], gender: ['womens'] }
            // }
        }
    }
};
export type IGraph = {
    bag: EndPoint<'bagType'>;
    jewelry: EndPoint<'jewelryType'>;
    apparel: {
        accessories: {
            misc: EndPoint<'accessoryType'>;
            head: EndPoint<'headAccessoryType'>;
        };
        footwear: EndPoint<'shoeType' | 'footwearType'>;
        undergarments: {
            misc: EndPoint<'undergarmentType'>;
            sleepwear: EndPoint<'sleepwearType'>;
            swimwear: EndPoint<'swimwearType'>;
        };
        fullbody: {
            dress: EndPoint<'dressType'>;
            suit: EndPoint<'blazerType' | 'suitType'>;
        };
        tops: {
            coats: EndPoint<'jacketType'>;
            pullOver: EndPoint<'casualShirtType' | 'sleeveLength' | 'neckType'>;
            buttonUp: EndPoint<'blazerType' | 'formalShirtType' | 'sleeveLength' | 'neckType'>;
        };
        bottoms: {
            skirt: EndPoint<'skirtType'>;
            pants: EndPoint<'materialStyle' | 'pantStyle'>;
            jeans: EndPoint<'legStyle' | 'pantStyle'>;
            shorts: EndPoint<'materialStyle' | 'pantStyle'>;
        };
    };
};

export type IGraph2 = {
    apparel: {
        accessories: {
            endpoint: true;
            misc: {
                earmuffs: ItemTypes;
            };
        };
        tops: {
            buttonUp: {
                endpoint: true;
                formalShirtType: {
                    flannel: ItemTypes;
                };
            };
            pullOver: {
                endpoint: true;
                casualShirtType: {
                    't-shirt': ItemTypes;
                };
            };
        };
        bottoms: {
            pants: {
                endpoint: true;
                pantStyle: {
                    'flat-front': ItemTypes;
                };
            };
        };
    };
    bag: {
        endpoint: true;
        bagType: {
            suitcase: ItemTypes;
            'carry-on': ItemTypes;
        };
    };
    personalCare: {
        beauty: {
            fragrances: {
                endpoint: true;
                gender: Partial<Record<Genders, ItemTypes>>;
            };
            hairCare: {
                curlingIrons: ItemTypes;
                hairDryers: ItemTypes;
            };
        };
        babyCare: {
            teethers: ItemTypes;
        };
    };
    media: {
        books: {
            endpoint: true;
            fiction: {
                adventure: ItemTypes;
                childrensBooks: ItemTypes;
                literaryFiction: ItemTypes;
                sciFi: ItemTypes;
                fantasy: ItemTypes;
                comics: ItemTypes;
                horror: ItemTypes;
                romance: ItemTypes;
                mystery: ItemTypes;
                thriller: ItemTypes;
                action: ItemTypes;
                western: ItemTypes;
                historicalFiction: ItemTypes;
                other: ItemTypes;
            };
            nonfiction: {
                childrensBooks: ItemTypes;
                dictionaries: ItemTypes;
                thesauruses: ItemTypes;
                encyclopedias: ItemTypes;
                spirtuality: ItemTypes;
                biographies: ItemTypes;
                cookbooks: ItemTypes;
                politics: ItemTypes;
                instructional: ItemTypes;
                business: ItemTypes;
                art: ItemTypes;
                photography: ItemTypes;
                fitness: ItemTypes;
                selfHelp: ItemTypes;
                other: ItemTypes;
                craft: ItemTypes;
                textbooks: ItemTypes;
            };
        };
        music: {
            cd: ItemTypes;
        };
        videos: {
            vhs: ItemTypes;
            bluRay: ItemTypes;
            dvd: ItemTypes;
        };
        videoGames: {
            consoleGames: ItemTypes;
            strategyGuides: ItemTypes;
            pcGames: ItemTypes;
        };
        magazines: {
            endpoint: true;
            trade: ItemTypes;
            professional: ItemTypes;
            culture: ItemTypes;
            lifestyle: ItemTypes;
            international: ItemTypes;
            other: ItemTypes;
        };
    };
    homeGoods: {
        cleaning: {
            dusters: ItemTypes;
        };
        kitchen: {
            cookware: {
                kettles: ItemTypes;
                stockPots: ItemTypes;
                colanders: ItemTypes;
            };
            bakeware: {
                bakingSheets: ItemTypes;
            };
            dinnerware: {
                dinnerPlates: ItemTypes;
                saladPlates: ItemTypes;
                napkinRings: ItemTypes;
            };
            servingware: {
                platters: ItemTypes;
                servingTrays: ItemTypes;
            };
            drinkware: {
                tumblers: ItemTypes;
                coffeeMugs: ItemTypes;
            };
            utensils: {
                chefKnives: ItemTypes;
                flourSifter: ItemTypes;
                measuringCups: ItemTypes;
                measuringSpoons: ItemTypes;
                misc: ItemTypes;
                tongs: ItemTypes;
                spatulas: ItemTypes;
            };
        };
        decor: {
            holidays: {
                christmas: {
                    ornaments: ItemTypes;
                    misc: ItemTypes;
                };
                valentines: ItemTypes;
                halloween: ItemTypes;
                patriotic: ItemTypes;
                easter: ItemTypes;
                hanukkah: ItemTypes;
            };
            accents: {
                pillows: ItemTypes;
                photoAlbums: ItemTypes;
                baskets: ItemTypes;
                areaRugs: ItemTypes;
                pictureFrames: ItemTypes;
                clocks: ItemTypes;
                ceramics: ItemTypes;
                pottery: ItemTypes;
                vases: ItemTypes;
                candles: ItemTypes;
                planters: ItemTypes;
            };
            wallHangings: {
                tapestries: ItemTypes;
                mirrors: ItemTypes;
                windowTreatments: ItemTypes;
            };
            lighting: {
                bulbs: ItemTypes;
                tableLamps: ItemTypes;
            };
        };
        storage: {
            cdStorage: ItemTypes;
            jewelryOrganizer: ItemTypes;
            jewelryBox: ItemTypes;
            food: ItemTypes;
            kitchenDrawerOrganizer: ItemTypes;
            kitchenCanisters: ItemTypes;
        };
        linens: {
            bathmats: ItemTypes;
            towels: ItemTypes;
            bedSheets: ItemTypes;
            comforters: ItemTypes;
            ironingBoard: ItemTypes;
        };
        fineChina: {
            teapots: ItemTypes;
        };
    };
    sportingGoods: {
        sports: {
            golf: {
                clubs: {
                    endpoint: true;
                    gender: Record<'mens' | 'womens' | 'boys' | 'girls', ItemTypes>;
                };
            };
            tennis: {
                rackets: ItemTypes;
            };
            bowling: {
                balls: ItemTypes;
                accessories: ItemTypes;
                pins: ItemTypes;
            };
        };
        outdoors: {
            campingCoolers: ItemTypes;
            campingChairs: ItemTypes;
            hikingEquipment: ItemTypes;
        };
    };
    cables: {
        data: ItemTypes;
        power: ItemTypes;
        video: ItemTypes;
        audio: ItemTypes;
    };
    electronics: {
        audio: {
            radios: ItemTypes;
            cdPlayers: ItemTypes;
            speakers: {
                bluetooth: ItemTypes;
                desktop: ItemTypes;
            };
            turntables: ItemTypes;
        };
        gaming: {
            consoles: ItemTypes;
            accessories: {
                gamepads: ItemTypes;
            };
        };
        video: {
            cableBoxes: {
                dvrs: ItemTypes;
            };
            streamingDevices: ItemTypes;
            dvdPlayer: ItemTypes;
            vhsPlayer: ItemTypes;
            projectors: ItemTypes;
        };
        telephones: ItemTypes;
        cellPhones: {
            smartPhones: ItemTypes;
            accessories: {
                cases: ItemTypes;
                mounts: ItemTypes;
                wirelessChargers: ItemTypes;
            };
        };
        components: {
            drives: {
                hardDrives: {
                    external: ItemTypes;
                    internal: ItemTypes;
                };
                cdDrive: ItemTypes;
                dvdDrive: ItemTypes;
                dvdrwDrive: ItemTypes;
            };
            memory: {
                ddrRam: ItemTypes;
            };
            networking: ItemTypes;
            cpu: ItemTypes;
            rechargableBattery: ItemTypes;
        };
        computers: {
            desktops: ItemTypes;
            laptops: ItemTypes;
            scanners: ItemTypes;
            printers: ItemTypes;
            allInOne: ItemTypes;
        };
        photography: {
            digitalCameras: ItemTypes;
            filmCameras: ItemTypes;
            polaroidCameras: ItemTypes;
        };
        homeSecurity: {
            surveillanceCameras: ItemTypes;
            doorAlarms: ItemTypes;
        };
    };
    toysGames: {
        groupGames: {
            boardGames: {
                chess: ItemTypes;
                checkers: ItemTypes;
                other: ItemTypes;
            };
            cardGames: ItemTypes;
            stackingGames: ItemTypes;
        };
        puzzles: {
            jigsawPuzzles: ItemTypes;
        };
        stuffedToys: {
            stuffedAnimals: ItemTypes;
            beanBagPlushes: ItemTypes;
            plushFigures: ItemTypes;
            plushPuppets: ItemTypes;
        };
        toyGuns: {
            nerfBlasters: ItemTypes;
            ammunition: ItemTypes;
        };
    };
    appliances: {
        hvac: {
            airCirculators: ItemTypes;
            spaceHeaters: ItemTypes;
            fans: ItemTypes;
        };
        smallKitchen: {
            indoorGrills: ItemTypes;
            waffleIrons: ItemTypes;
            toasters: ItemTypes;
            toasterOvens: ItemTypes;
            coffeeMakers: ItemTypes;
            sodaMakers: ItemTypes;
            electricKettles: ItemTypes;
            electricCanOpeners: ItemTypes;
            foodProcessors: ItemTypes;
            handMixers: ItemTypes;
        };
        floorCare: {
            vacuum: ItemTypes;
            attachments: ItemTypes;
        };
    };
    tools: {
        powerTools: {
            drills: {
                straightDrills: ItemTypes;
            };
        };
        vehicleTools: {
            emergencyEquipment: {
                jumperCables: ItemTypes;
                jumperBox: ItemTypes;
            };
            maintenance: {
                tireGauge: ItemTypes;
            };
        };
        electrical: {
            timer: ItemTypes;
        };
        fasteningTools: {
            hooks: ItemTypes;
        };
    };
    officeGoods: {
        printerPaper: {
            photoPaper: ItemTypes;
        };
        notebooks: {
            journals: ItemTypes;
        };
        inkAndToner: {
            inkjetCartridges: ItemTypes;
        };
    };
    petSupplies: {
        dogs: {
            poopBags: ItemTypes;
            harnesses: ItemTypes;
        };
    };
    collectibles: {
        figurines: {
            ceramic: ItemTypes;
            crystal: ItemTypes;
        };
        toys: {
            dolls: ItemTypes;
            happyMealToys: ItemTypes;
        };
        novelty: ItemTypes;
        tradingCards: {
            baseballCards: ItemTypes;
        };
    };
};

// export const tree: IGraph2 = {
//     electronics: ,
//     appliances: ,
//     tools: ,
//     collectibles: ,
//     petSupplies: ,
//     officeGoods: ,
//     cables: ,
//     homeGoods: ,
//     sportingGoods: ,
//     media: ,
//     apparel: {
//         accessories: {
//             endpoint: true,
//             misc: {
//                 earmuffs: ['earmuffs', "Women::Women's accessories::Other", null]
//             }
//         },
//         bottoms: {
//             pants: {
//                 endpoint: true,
//                 pantStyle: {
//                     'flat-front': [
//                         'flat-front pants',
//                         'Men::Pants::Dress - flat front',
//                         'Women::Pants::Dress pants',
//                         ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
//                         ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
//                     ]
//                 }
//             }
//         },
//         tops: {
//             pullOver: {
//                 endpoint: true,
//                 casualShirtType: {
//                     't-shirt': [
//                         'T-shirt',
//                         undefined,
//                         {
//                             isGraphic: [
//                                 'graphic T-shirt',
//                                 'Men::Tops::T-shirts',
//                                 'Women::Tops & blouses::T-shirts',
//                                 ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
//                                 ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
//                             ],
//                             isHooded: [
//                                 'hooded T-shirt',
//                                 'Men::Tops::T-shirts',
//                                 'Women::Tops & blouses::T-shirts',
//                                 ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
//                                 ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
//                             ]
//                         }
//                     ]
//                 }
//             },
//             buttonUp: {
//                 endpoint: true,
//                 formalShirtType: {
//                     flannel: [
//                         'fitted shirt',
//                         'Men::Tops::Dress shirts',
//                         'Women::Tops & blouses::Button down shirt',
//                         ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
//                         ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
//                     ]
//                 }
//             }
//         }
//     },
//     bag: {
//         endpoint: true,
//         bagType: {
            
//         }
//     },
//     personalCare: 
// };

export const isLeaf = (x: unknown): x is ItemTypes => Array.isArray(x);
export const isNode = (x: unknown): x is Record<string, ItemTypes | Record<string, unknown>> => !isLeaf(x);

export function checkClassification(realm: Realm) {
    return async function (item: Omit<InitValue<IClassification>, '_id'>) {
        const classifications = queryClient.fetchQuery({
            queryKey: ['classification'],
            queryFn: () => {
                return Array.from(realm.objects<IClassification>('classification') ?? []);
            }
        });
        const objs = await classifications;
        return objs.some((x) => x.equalTo(item));
    };
}
export function findTaxonomy(realm: Realm) {
    return async function (fullname: string) {
        const taxonomies = queryClient.fetchQuery({
            queryKey: ['mercariTaxonomy', fullname],
            queryFn: () => {
                return Array.from(realm.objects<IMercariTaxonomy>('mercariTaxonomy') ?? []).find((x) => x.fullname === fullname);
            }
        });
        const objs = await taxonomies;
        return objs ? [objs] : [undefined];
    };
}
export type NodePathInfo = {
    path: string[];
    attributes: string[];
    flags: string[];
    options: string[];
    type: 'leaf' | 'node';
};

export type ItemTypeAndTaxon = [string, string | null];
export type ItemTypeAndMensWomens = [string, string | null, string | null];
export type KidsTaxon = [string | null, string | null, string | null];
export type ItemTypeAndApparel = [string, string | null, string | null, KidsTaxon, KidsTaxon];
export type ItemTypeOptions = Record<string, ItemTypeAndTaxon | ItemTypeAndMensWomens | ItemTypeAndApparel>;
export type ItemTypes1 = [...ItemTypeAndTaxon, ItemTypeOptions?];
export type ItemTypes2 = [...ItemTypeAndMensWomens, ItemTypeOptions?];
export type ItemTypes3 = [...ItemTypeAndApparel, ItemTypeOptions?];
export type ItemTypes = ItemTypes1 | ItemTypes2 | ItemTypes3;
export function parseNodeValue(value: ItemTypes): {
    itemType: string;
    fullName?: string;
    mens?: string;
    womens?: string;
    boys?: KidsTaxon;
    girls?: KidsTaxon;
    flagOptions?: ItemTypeOptions;
} {
    if (value.length === 2) {
        const [itemType, fullName] = value;
        return { itemType, fullName: fullName ?? undefined };
    } else if (value.length === 3) {
        const [itemType, arg2, arg3] = value;
        const [mens, womens, fullName, options] = typeof arg3 === 'string' ? [arg2, arg3] : [undefined, undefined, arg2, arg3];
        return { itemType, mens: mens ?? undefined, womens, fullName: fullName ?? undefined, flagOptions: options ?? undefined };
    } else if (value.length === 4) {
        const [itemType, mens, womens, options] = value;
        return { itemType, mens: mens ?? undefined, womens: womens ?? undefined, flagOptions: options ?? undefined };
    } else if (value.length === 5) {
        const [itemType, mens, womens, boys, girls] = value;
        return { itemType, mens: mens ?? undefined, womens: womens ?? undefined, boys, girls };
    } else if (value.length === 6) {
        const [itemType, mens, womens, boys, girls, options] = value;
        return { itemType, mens: mens ?? undefined, womens: womens ?? undefined, boys, girls, flagOptions: options ?? undefined };
    }
    throw new Error(JSON.stringify(value, null, '\t'));
}
// export async function handleNode(
//     realm: Realm,
//     node: Record<string, ItemTypes | Record<string, unknown>>,
//     currentPath: string[] = [],
//     { e, dne, pathInfo }: { e: (Omit<InitValue<IClassification>, '_id'> & { type: 'node' | 'leaf' })[]; dne: (Omit<InitValue<IClassification>, '_id'> & { type: 'node' | 'leaf' })[]; pathInfo: Map<string, NodePathInfo> } = {
//         e: [],
//         dne: [],
//         pathInfo: new Map()
//     }
// ) {
//     const entries = Object.entries(node);
//     for (const [key, value] of entries) {
//         const path = [...currentPath, key];
//         if (isNode(value)) {
//             await handleNode(realm, value, path, { e, dne, pathInfo });
//             const options = Object.keys(value);
//             const flags = [];
//             const attributes = [];
//             if (pathInfo.has(path.join('/'))) {
//                 const { options: currentOptions, flags: currentFlags, attributes: currentAttributes } = pathInfo.get(path.join('/'))!;
//                 options.push(...currentOptions);
//                 attributes.push(...currentAttributes);
//                 flags.push(...currentFlags);
//             }
//             pathInfo.set(path.join('/') ?? '', { path, options, flags, attributes, type: 'node' });
//         }
//         if (isLeaf(value)) {
//             function handleEntry(e: any[], dne: any[]) {
//                 return async function (path: string[], itemType: string, flags: string[] = [], name: string | undefined, gender: Genders | undefined, youthSize: YouthSize | undefined) {
//                     if (name == null) return {} as Record<string, any>;
//                     const taxonomy = await findTaxonomy(realm)(name);
//                     const classification = {
//                         itemType,
//                         attributes: Object.fromEntries([...(gender ? [['gender', gender]] : []), ...(youthSize ? [['youthSize', youthSize]] : [])]),
//                         flags,
//                         type: 'leaf' as const,
//                         taxonomy,
//                         path
//                     };
//                     if (await checkClassification(realm)(classification)) {
//                         e.push(classification);
//                         return classification.attributes as Record<string, any>;
//                     } else {
//                         dne.push(classification);
//                         return classification.attributes as Record<string, any>;
//                     }
//                 };
//             }
//             const { itemType, boys, girls, mens, womens, fullName, flagOptions } = parseNodeValue(value);
//             await handleEntry(e, dne)(path, itemType, [], fullName, undefined, undefined);
//             await handleEntry(e, dne)(path, itemType, [], mens, 'mens', undefined);
//             await handleEntry(e, dne)(path, itemType, [], womens, 'womens', undefined);

//             await handleEntry(e, dne)(path, itemType, [], boys ? boys[0] ?? undefined : undefined, 'boys', '0-24M');
//             await handleEntry(e, dne)(path, itemType, [], boys ? boys[1] ?? undefined : undefined, 'boys', '2T-5T');
//             await handleEntry(e, dne)(path, itemType, [], boys ? boys[2] ?? undefined : undefined, 'boys', '4T+');

//             await handleEntry(e, dne)(path, itemType, [], girls ? girls[0] ?? undefined : undefined, 'girls', '0-24M');
//             await handleEntry(e, dne)(path, itemType, [], girls ? girls[1] ?? undefined : undefined, 'girls', '2T-5T');
//             await handleEntry(e, dne)(path, itemType, [], girls ? girls[2] ?? undefined : undefined, 'girls', '4T+');

//             const $flags = Object.entries(flagOptions ?? {});
//             const totalFlags = [] as string[];
//             const attributes = [];
//             if (mens || womens || boys || girls) {
//                 attributes.push('gender');
//             }
//             if (boys || girls) {
//                 attributes.push('youthSize');
//             }
//             for (const [individualFlag, individualValue] of $flags) {
//                 totalFlags.push(individualFlag);
//                 const { itemType: $itemType, boys: $boys, girls: $girls, mens: $mens, womens: $womens, fullName: $name } = parseNodeValue(individualValue);
//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $name, undefined, undefined);
//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $mens, 'mens', undefined);
//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $womens, 'womens', undefined);

//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $boys ? $boys[0] ?? undefined : undefined, 'boys', '0-24M');
//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $boys ? $boys[1] ?? undefined : undefined, 'boys', '2T-5T');
//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $boys ? $boys[2] ?? undefined : undefined, 'boys', '4T+');

//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $girls ? $girls[0] ?? undefined : undefined, 'girls', '0-24M');
//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $girls ? $girls[1] ?? undefined : undefined, 'girls', '2T-5T');
//                 await handleEntry(e, dne)(path, $itemType, [individualFlag], $girls ? $girls[2] ?? undefined : undefined, 'girls', '4T+');
//             }
//             const opts = [] as string[];

//             if (pathInfo.has(path.join('/'))) {
//                 const { options: currentOptions, flags: currentFlags, attributes: currentAttributes } = pathInfo.get(path.join('/'))!;
//                 opts.push(...currentOptions);
//                 attributes.push(...currentAttributes);
//                 totalFlags.push(...currentFlags);
//             }
//             pathInfo.set(path.join('/') ?? '', { type: 'leaf', path, options: opts, flags, attributes });
//         }
//     }

//     return { e, dne, pathInfo };
// }

// const func = () => {
//     if ($REALM) {
//         const r = Object.assign({}, tree, $graph);
//         console.info(`graph`, r);
//         handleNode($REALM, r).then((result) => {
//             console.info('BUILDER', JSON.stringify(result, null, '\t'));
//             console.info(result);
//             fs.writeFileSync('classification-nodes.json', JSON.stringify(result, null, '\t'));
//             return result;
//         });
//     } else {
//         setTimeout(func, 4000);
//     }
// };

// func();
