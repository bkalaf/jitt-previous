import { UseFormSetValue, useFormContext, useWatch } from 'react-hook-form-mui';
import { distinctByString } from '../common/array/distinct';
import { deepEqual } from '../common/deepEqual';
import { Genders, YouthSize } from '../schema/enums';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useCallback } from 'react';
import { Item } from '../components/Item';
import { ClassificationOption, EndPoint, IGraph } from './igraph';
import { useMatchClassificationPath } from '../components/Tabs/useMatchClassificationPath';

export const $graph: IGraph = {
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

export type ProductClassifier = {
    graph: any;
    gender?: Genders;
    youthSize?: YouthSize;
    isAthletic: boolean;
    isActive: boolean;
    isMaternity: boolean;
};
export const $classifier = {
    graph: $graph,
    gender: undefined,
    youthSize: undefined,
    isAthletic: false,
    isActive: false,
    isMaternity: false
};

// function* optionGenerator(enumMap: Record<string, { bottomType: string[]; gender: string[] }>, flags: string[]) {
//     for (const [key, { bottomType, gender }] of Object.entries(enumMap)) {
//         for (const thisBottomType of bottomType) {
//             for (const thisGender of gender) {
//                 const f = thisGender === 'mens' ? flags.filter((x) => x != 'isMaternity').concat('<none>') : flags.concat('<none>');
//                 for (const thisFlag of f) {
//                     yield [thisGender, thisBottomType, thisFlag, key];
//                 }
//             }
//         }
//     }
//     return;
// }

export type IClassificationNode = {
    path: string[];
    attributes: Record<string, string>;
    flags: string[];
    itemType: string;
    taxonomy: string;
};

export function isLink(value: Record<string, any> | EndPoint<string>) {
    const fields = Object.keys(value);
    const fieldValue = value[fields[0]];
    return !Array.isArray(fieldValue);
}
export function isNotLink(value: Record<string, any> | EndPoint<string>) {
    return !isLink(value);
}
export function buildNodes(value: Record<string, any> | EndPoint<string>, path: string[] = [], accum: IClassificationNode[] = []) {
    function handleYouth(c: IClassificationNode[], p: string[], it: string, gender: Genders, [low, medium, high]: [string | null, string | null, string | null], key: string, value: string) {
        if (low) {
            c.push({
                path: p,
                itemType: it,
                flags: [],
                attributes: {
                    [key]: value,
                    gender,
                    youthSize: '0-24M'
                },
                taxonomy: low
            });
        }
        if (medium) {
            c.push({
                path: p,
                itemType: it,
                flags: [],
                attributes: {
                    [key]: value,
                    gender,
                    youthSize: '2T-5T'
                },
                taxonomy: medium
            });
        }
        if (high) {
            c.push({
                path: p,
                itemType: it,
                flags: [],
                attributes: {
                    [key]: value,
                    gender,
                    youthSize: '4T+'
                },
                taxonomy: high
            });
        }
    }
    const keys = Object.keys(value);
    const isNode = isNotLink(value);
    if (isNode) {
        const current: IClassificationNode[] = [];
        for (const key of keys) {
            const fieldValue = value[key] as ClassificationOption[];
            for (const [value, itemType, apparel, options] of fieldValue) {
                const [mens, womens, boys, girls] = apparel;
                if (mens) {
                    current.push({
                        path,
                        flags: [],
                        itemType,
                        attributes: {
                            [key]: value,
                            gender: 'mens'
                        },
                        taxonomy: mens
                    });
                }
                if (womens) {
                    current.push({
                        path,
                        flags: [],
                        itemType,
                        attributes: {
                            [key]: value,
                            gender: 'womens'
                        },
                        taxonomy: womens
                    });
                }
                if (boys) {
                    handleYouth(current, path, itemType, 'boys', boys, key, value);
                }
                if (girls) {
                    handleYouth(current, path, itemType, 'girls', girls, key, value);
                }
                if (options) {
                    const opts = Object.entries(options);
                    for (const [optionKey, [optItemType, mensOpt, womensOpt]] of opts) {
                        if (mensOpt) {
                            current.push({
                                path,
                                flags: [optionKey],
                                itemType: optItemType,
                                attributes: {
                                    [key]: value,
                                    gender: 'mens'
                                },
                                taxonomy: mensOpt
                            });
                        }
                        if (womensOpt) {
                            current.push({
                                path,
                                flags: [optionKey],
                                itemType: optItemType,
                                attributes: {
                                    [key]: value,
                                    gender: 'womens'
                                },
                                taxonomy: womensOpt
                            });
                        }
                    }
                }
            }
        }
        accum.push(...current);
    } else {
        for (const key of keys) {
            buildNodes(value[key], [...path, key], accum);
        }
    }
    return accum;
}
// const allPossible = () => {
//     const { bottoms } = $graph.apparel;
//     const { flags, legStyle, materialType, pantType } = bottoms;
//     const genny = optionGenerator(legStyle, flags);
//     for (const element of genny) {
//         console.log(element);
//     }
//     console.log('<--->');
//     const genny2 = optionGenerator(pantType, flags);
//     for (const element of genny2) {
//         console.log(element);
//     }
//     console.log('<--->');
//     const genny3 = optionGenerator(materialType, flags);
//     for (const element of genny3) {
//         console.log(element);
//     }
// };

// allPossible();

export const $$graph = buildNodes($graph);
// console.log(JSON.stringify($$graph, null, '\t'));
// console.log($$graph.length);
// if ($REALM.objects('classification').length === 0) {
//     for (const element of $$graph) {
//         Classification.ctor(element);
//     }
// }    else {
//     console.log(`CLASSIFICATION LENGTH: ${$REALM.objects('classification').length}`);
// }

export type IClassifyNode = {
    path: string[];
    options: string[];
    attributes: string[];
    flags: string[];
};

export function buildPathNodes(value: Record<string, any> | EndPoint<string>, path: string[] = [], accum: IClassifyNode[] = []) {
    const keys = Object.keys(value);
    const isNode = isNotLink(value);
    if (isNode) {
        const nodes = $$graph.filter((x) => deepEqual(path, x.path));
        const flags = distinctByString(nodes.map((x) => x.flags).reduce((pv, cv) => [...pv, ...cv], []));
        const attributes = distinctByString(nodes.map((x) => Object.keys(x.attributes)).reduce((pv, cv) => [...pv, ...cv], []));
        accum.push({ path, flags, options: [], attributes });
    } else {
        accum.push({ path, options: keys, flags: [], attributes: [] });
        for (const key of keys) {
            buildPathNodes(value[key], [...path, key], accum);
        }
    }
    return accum;
}

// export const $$pathNodes = buildPathNodes($graph);
// console.log(JSON.stringify($$pathNodes, null, '\t'));
// console.log(distinctByString($$pathNodes.map((x) => x.attributes).reduce((pv, cv) => [...pv, ...cv], [])));

export function PathStepControl({ path, index, setValue }: { path: string[]; index: number; setValue: UseFormSetValue<{ path: string[] }> }) {
    const value = path[index];
    const { selectOptions } = useMatchClassificationPath(path.slice(0, index))
    // if (selectOptions.length === 0) throw new Error('no node');
    const onChange = useCallback(
        (ev: SelectChangeEvent<string>) => {
            const value = ev.target.value;
            setValue('path', [...path.slice(0, index), value]);
        },
        [index, path, setValue]
    );
    return (
        selectOptions.length > 0 ?
        <Select label={`Path ${index}`} value={value ?? ''} onChange={onChange}>
            {selectOptions.map((x, ix) => (
                <MenuItem key={ix} value={x}>
                    {x}
                </MenuItem>
            ))}
        </Select> :  null
    );
}
export function PathControl() {
    const formContext = useFormContext<{ path: string[] }>();
    const path = useWatch({
        control: formContext.control,
        name: 'path'
    });
    // const path = formContext.watch('path') as string[];
    return (
        <Item>
            {[...path ?? [], ''].map((_, ix) => (
                <PathStepControl key={ix} index={ix} path={path ?? []} setValue={formContext.setValue} />
            ))}
        </Item>
    );
}
