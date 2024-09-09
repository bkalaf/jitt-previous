/* eslint-disable no-console */
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
export type ClassificationOption = [string, string, ApparelTaxonomy, FlagOptions?];
export type EndPoint<TKey extends string> = Record<TKey, ClassificationOption[]>;

const value = {
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
                    ['bandana', 'bandana', ["Men::Men's accessories::Bandanas", "Women::Women's accessories::Bandanas", null, null]],
                    ['bow-tie', 'bowtie', ["Men::Men's accessories::Bow Ties", null, null, null]],
                    ['collar-stay', 'collar stay', ["Men::Men's accessories::Collar Stays", null, null, null]],
                    ['hat', 'hat', ["Men::Men's accessories::Hats", "Women::Women's accessories::Hats", null, null]],
                    ['fedora', 'fedora', ["Men::Men's accessories::Hats", "Women::Women's accessories::Hats", null, null]],
                    [
                        'ballcap',
                        'ballcap',
                        ["Men::Men's accessories::Hats", "Women::Women's accessories::Hats", null, null],
                        {
                            isMLB: ['ballcap', 'Sports & outdoors::Fan shop::MLB', 'Sports & outdoors::Fan shop::MLB'],
                            isNBA: ['ballcap', 'Sports & outdoors::Fan shop::NBA', 'Sports & outdoors::Fan shop::NBA'],
                            isNCAA: ['ballcap', 'Sports & outdoors::Fan shop::NCAA', 'Sports & outdoors::Fan shop::NCAA'],
                            isNFL: ['ballcap', 'Sports & outdoors::Fan shop::NFL', 'Sports & outdoors::Fan shop::NFL'],
                            isNHL: ['ballcap', 'Sports & outdoors::Fan shop::NHL', 'Sports & outdoors::Fan shop::NHL']
                        }
                    ],
                    ['sunglasses', 'sunglasses', ["Men::Men's accessories::Sunglasses", "Women::Women's accessories::Sunglasses", null, null]],
                    ['tie', 'tie', ["Men::Men's accessories::Ties", null, null, null]],
                    ['hair-accessory', 'hair accessory', [null, "Women::Women's accessories::Hair accessories", null, null]],
                    ['headband', 'headband', [null, "Women::Women's accessories::Headbands", null, null]],
                    ['hijab', 'hijab', [null, "Women::Women's accessories::Hijabs", null, null]],
                    ['scarf', 'scarf', ["Men::Men's accessories::Scarves", "Women::Women's accessories::Scarves", null, null]]
                ]
            }
        },
        footwear: {
            footwearType: [
                [
                    'sneakers',
                    'sneakers',
                    ['Men::Shoes::Fashion sneakers', 'Women::Shoes::Fashion sneakers', null, null],
                    {
                        isAthletic: ['sneakers', 'Men::Shoes::Athletic', 'Women::Shoes::Athletic']
                    }
                ],
                ['fashion-sneakers', 'sneakers', ['Men::Shoes::Fashion sneakers', 'Women::Shoes::Fashion sneakers', null, null]],
                ['loafers', 'loafers', ['Men::Shoes::Loafers', 'Women::Shoes::Loafers', null, null]],
                ['clogs', 'clogs', ['Men::Shoes::Clogs', 'Women::Shoes::Clogs', null, null]],
                ['boots', 'boots', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['mules', 'mules', ['Men::Shoes::Mules', 'Women::Shoes::Mules', null, null]],
                ['oxfords', 'oxfords', ['Men::Shoes::Oxfords', 'Women::Shoes::Oxfords', null, null]],
                ['outdoors', 'outdoors', ['Men::Shoes::Outdoor', 'Women::Shoes::Outdoor', null, null]],
                ['sandals', 'sandals', ['Men::Shoes::Sandals', 'Women::Shoes::Sandals', null, null]],
                ['slip-ons', 'slip-ons', ['Men::Shoes::Slip-Ons', 'Women::Shoes::Slip-Ons', null, null]],
                ['slippers', 'slippers', ['Men::Shoes::Slippers', 'Women::Shoes::Slippers', null, null]],
                ['work-shoes', 'work shoes', ['Men::Shoes::Work & safety', 'Women::Shoes::Work & safety', null, null]],
                ['safety-shoes', 'safety shoes', ['Men::Shoes::Work & safety', 'Women::Shoes::Work & safety', null, null]],
                ['flats', 'flats', ['Men::Shoes::All Shoes', 'Women::Shoes::Flats', null, null]],
                ['heels', 'heels', ['Men::Shoes::All Shoes', 'Women::Shoes::Heels', null, null]]
            ],
            shoeType: [
                ['ankle-boot', 'ankle-boot', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['ankle-strap', 'ankle-strap', ['Men::Shoes::All Shoes', 'Women::Shoes::Heels', null, null]],
                ['clog', 'clog', ['Men::Shoes::Clogs', 'Women::Shoes::Clogs', null, null]],
                ['country', 'country', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['deck', 'deck', ['Men::Shoes::Loafers', 'Women::Shoes::Loafers', null, null]],
                ['desert', 'desert', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['dockside', 'dockside', ['Men::Shoes::Slip-Ons', 'Women::Shoes::Slip-Ons', null, null]],
                ['espadrilla', 'espadrilla', ['Men::Shoes::Slippers', 'Women::Shoes::Slippers', null, null]],
                ['espadrille', 'espadrille', ['Men::Shoes::All Shoes', 'Women::Shoes::Heels', null, null]],
                ['flip-flop', 'flip-flop', ['Men::Shoes::Sandals', 'Women::Shoes::Sandals', null, null]],
                ['frye', 'frye', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['jockey-boot', 'jockey-boot', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['loafer', 'loafer', ['Men::Shoes::Loafers', 'Women::Shoes::Loafers', null, null]],
                ['mary-jane', 'mary-jane', ['Men::Shoes::All Shoes', 'Women::Shoes::Heels', null, null]],
                ['mocassin', 'mocassin', ['Men::Shoes::Slip-Ons', 'Women::Shoes::Slip-Ons', null, null]],
                ['monk', 'monk', ['Men::Shoes::Loafers', 'Women::Shoes::Loafers', null, null]],
                ['mule', 'mule', ['Men::Shoes::Mules', 'Women::Shoes::Mules', null, null]],
                ['over-the-knee-boot', 'over-the-knee-boot', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['oxford', 'oxford', ['Men::Shoes::Oxfords', 'Women::Shoes::Oxfords', null, null]],
                ['penny-loafer', 'penny-loafer', ['Men::Shoes::Loafers', 'Women::Shoes::Loafers', null, null]],
                ['pump', 'pump', ['Men::Shoes::All Shoes', 'Women::Shoes::Heels', null, null]],
                ['saddle', 'saddle', ['Men::Shoes::Oxfords', 'Women::Shoes::Oxfords', null, null]],
                ['sandal', 'sandal', ['Men::Shoes::Sandals', 'Women::Shoes::Sandals', null, null]],
                ['sling-back', 'sling-back', ['Men::Shoes::All Shoes', 'Women::Shoes::Heels', null, null]],
                ['slip-on', 'slip-on', ['Men::Shoes::Slip-Ons', 'Women::Shoes::Slip-Ons', null, null]],
                ['slipper', 'slipper', ['Men::Shoes::Slippers', 'Women::Shoes::Slippers', null, null]],
                [
                    'sneaker',
                    'sneaker',
                    ['Men::Shoes::Fashion sneakers', 'Women::Shoes::Fashion sneakers', null, null],
                    {
                        isAthletic: ['sneaker', 'Men::Shoes::Athletic', 'Women::Shoes::Athletic']
                    }
                ],
                ['snow-boot', 'snow-boot', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['t-strap', 't-strap', ['Men::Shoes::All Shoes', 'Women::Shoes::Heels', null, null]],
                ['wellington', 'wellington', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['western-boot', 'western-boot', ['Men::Shoes::Boots', 'Women::Shoes::Boots', null, null]],
                ['wing-tip', 'wing-tip', ['Men::Shoes::Oxfords', 'Women::Shoes::Oxfords', null, null]],
                ['winkle-picker', 'winkle-picker', ['Men::Shoes::Oxfords', 'Women::Shoes::Oxfords', null, null]]
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
                        [null, 'Women::Dresses::High Low', null, null],
                        {
                            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
                            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
                        }
                    ],
                    [
                        'jumpsuit',
                        'jumpsuit',
                        [null, 'Women::Dresses::Jumpsuits & Rompers', null, null],
                        {
                            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
                            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
                        }
                    ],
                    [
                        'romper',
                        'romper',
                        [null, 'Women::Dresses::Jumpsuits & Rompers', null, null],
                        {
                            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
                            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
                        }
                    ],
                    [
                        'knee-length',
                        'dress',
                        [null, 'Women::Dresses::Knee-length', null, null],
                        {
                            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
                            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
                        }
                    ],
                    [
                        'maxi',
                        'dress',
                        [null, 'Women::Dresses::Maxi', null, null],
                        {
                            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
                            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
                        }
                    ],
                    [
                        'midi',
                        'dress',
                        [null, 'Women::Dresses::Midi', null, null],
                        {
                            isMaternity: ['dress', null, 'Women::Maternity::Dresses'],
                            isAthletic: ['dress', null, 'Women::Athletic apparel::Athletic Dresses']
                        }
                    ]
                ]
            },
            suit: {
                blazerType: [
                    ['double-breasted', 'suit', ['Men::Suits::Double breasted', null, null, null]],
                    ['one-button', 'suit', ['Men::Suits::One button', null, null, null]],
                    ['two-button', 'suit', ['Men::Suits::Two button', null, null, null]],
                    ['three-button', 'suit', ['Men::Suits::Three button', null, null, null]],
                    ['four-button', 'suit', ['Men::Suits::Four button', null, null, null]]
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
                        ['Men::Coats & jackets::Varsity/baseball', 'Women::Coats & jackets::Other', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'bomber',
                        'jacket',
                        ['Men::Coats & jackets::Flight/bomber', 'Women::Coats & jackets::Other', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'cape',
                        'cape',
                        [null, 'Women::Coats & jackets::Cape', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'fleece',
                        'jacket',
                        ['Men::Coats & jackets::Fleece jacket', 'Women::Coats & jackets::Fleece jacket', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'hoodie',
                        'hoodie',
                        ['Men::Sweats & hoodies::Hoodie', 'Women::Coats & jackets::Other', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Athletic Hoodies']
                        }
                    ],
                    [
                        'jean',
                        'jacket',
                        ['Men::Coats & jackets::Jean jacket', 'Women::Coats & jackets::Jean jacket', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'military',
                        'jacket',
                        ['Men::Coats & jackets::Military', 'Women::Coats & jackets::Military', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'leather',
                        'jacket',
                        ['Men::Coats & jackets::Motorcycle', 'Women::Coats & jackets::Motorcycle', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    ['parka', 'parka', ['Men::Coats & jackets::Parka', 'Women::Coats & jackets::Parka', null, null]],
                    [
                        'peacoat',
                        'peacoat',
                        ['Men::Coats & jackets::Peacoat', 'Women::Coats & jackets::Peacoat', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    ['poncho', 'poncho', ['Men::Coats & jackets::Poncho', 'Women::Coats & jackets::Poncho', null, null]],
                    [
                        'puffer',
                        'jacket',
                        ['Men::Coats & jackets::Puffer', 'Women::Coats & jackets::Puffer', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'raincoat',
                        'raincoat',
                        ['Men::Coats & jackets::Rainwear', 'Women::Coats & jackets::Raincoat', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'trenchcoat',
                        'trenchcoat',
                        ['Men::Coats & jackets::Trench', 'Women::Coats & jackets::Trench', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    ['vest', 'vest', ['Men::Coats & jackets::Vest', 'Women::Coats & jackets::Vest', null, null]],
                    [
                        'windbreaker',
                        'windbreaker',
                        ['Men::Coats & jackets::Windbreaker', 'Women::Coats & jackets::Windbreaker', null, null],
                        {
                            isMaternity: ['jacket', null, 'Women::Maternity::Coats & jackets'],
                            isAthletic: ['jacket', 'Men::Athletic apparel::Jackets', 'Women::Athletic apparel::Jackets']
                        }
                    ],
                    [
                        'winter',
                        'jacket',
                        ['Men::Coats & jackets::Wool', 'Women::Coats & jackets::Wool', null, null],
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
                        [null, 'Women::Tops & blouses::Camisoles', null, null],
                        {
                            isMaternity: ['camisole', null, 'Women::Maternity::Maternity Camisoles']
                        }
                    ],
                    [
                        'jersey',
                        'jersey',
                        ['Men::Athletic apparel::Jerseys', 'Women::Athletic apparel::Jerseys', null, null],
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
                        ['Men::Tops::Polos', 'Women::Tops & blouses::Polo shirt', null, null],
                        {
                            isMaternity: ['polo', null, 'Women::Maternity::Maternity Polos'],
                            isAthletic: ['polo', 'Men::Athletic apparel::Athletic Polos', 'Women::Athletic apparel::Athletic Polos']
                        }
                    ],
                    ['rugby', 'rugby', ['Men::Tops::Rugby Shirts', null, null, null]],
                    ['snow-bib', 'snow bib', ['Men::Athletic apparel::Snow Bibs', 'Women::Athletic apparel::Snow Bibs', null, null]],
                    [
                        'sweater',
                        'sweater',
                        ['Men::Sweaters::Other', 'Women::Sweaters::Other', null, null],
                        {
                            isMaternity: ['sweater', null, 'Women::Maternity::Sweaters']
                        }
                    ],
                    [
                        'sweatshirt',
                        'sweatshirt',
                        ['Men::Sweats & hoodies::Sweatshirt, pullover', 'Women::Athletic apparel::Athletic Sweatshirts', null, null],
                        {
                            isMaternity: ['sweatshirt', null, 'Women::Maternity::Sweaters'],
                            isAthletic: ['sweatshirt', 'Men::Athletic apparel::Athletic Sweatshirts', 'Women::Athletic apparel::Athletic Sweatshirts']
                        }
                    ],
                    [
                        'tank-top',
                        'tank top',
                        ['Men::Tops::Tank', 'Women::Tops & blouses::Tank Tops', null, null],
                        {
                            isMaternity: ['tank top', null, 'Women::Maternity::Maternity Tank Tops'],
                            isAthletic: ['tank top', 'Men::Athletic apparel::Athletic Tank Tops', 'Women::Athletic apparel::Athletic Tank Tops']
                        }
                    ],
                    [
                        't-shirt',
                        'T-shirt',
                        ['Men::Tops::T-shirts', 'Women::Tops & blouses::T-shirts', null, null],
                        {
                            isMaternity: ['T-shirt', null, 'Women::Maternity::Maternity T-Shirts'],
                            isAthletic: ['T-shirt', 'Men::Athletic apparel::Athletic T-Shirts', 'Women::Athletic apparel::Athletic T-Shirts']
                        }
                    ],
                    ['tube-top', 'tube top', [null, 'Women::Tops & blouses::Other', null, null]],
                    ['tunic', 'tunic', [null, 'Women::Tops & blouses::Tunic', null, null]]
                ],
                neckType: [
                    ['halter', 'halter top', [null, 'Women::Tops & blouses::Halter', null, null]],
                    ['henley', 'henley', ['Men::Tops::Henley', 'Women::Sweaters::Henley', null, null]],
                    ['turtleneck', 'turtleneck', ['Men::Tops::Turtleneck', 'Women::Tops & blouses::Turtleneck', null, null]]
                ],
                sleeveLength: [
                    [
                        'long',
                        'shirt',
                        [null, null, null, null],
                        {
                            isAthletic: ['shirt', 'Men::Athletic apparel::Athletic Long Sleeve Shirts', null]
                        }
                    ],
                    [
                        'short',
                        'shirt',
                        [null, null, null, null],
                        {
                            isAthletic: ['shirt', 'Men::Athletic apparel::Athletic Short Sleeve Shirts', null]
                        }
                    ]
                ]
            },
            buttonUp: {
                blazerType: [
                    ['double-breasted', 'blazer', ['Men::Blazers & sport coats::Double breasted', null, null, null]],
                    ['one-button', 'blazer', ['Men::Blazers & sport coats::One button', null, null, null]],
                    ['two-button', 'blazer', ['Men::Blazers & sport coats::Two button', null, null, null]],
                    ['three-button', 'blazer', ['Men::Blazers & sport coats::Three button', null, null, null]],
                    ['four-button', 'blazer', ['Men::Blazers & sport coats::Four button', null, null, null]]
                ],
                formalShirtType: [
                    [
                        'blazer',
                        'blazer',
                        ['Men::Blazers & sport coats::Other', 'Women::Suits & blazers::Blazer', null, null],
                        {
                            isMaternity: ['blazer', null, 'Women::Maternity::Maternity Blazers']
                        }
                    ],
                    [
                        'blouse',
                        'blouse',
                        [null, 'Women::Tops & blouses::Blouse', null, null],
                        {
                            isMaternity: ['blouse', null, 'Women::Maternity::Maternity Blouses']
                        }
                    ],
                    [
                        'button-down',
                        'button-down',
                        ['Men::Tops::Button-front', 'Women::Tops & blouses::Button down shirt', null, null],
                        {
                            isMaternity: ['button-down', null, 'Women::Maternity::Maternity Button-Ups']
                        }
                    ],
                    ['cardigan', 'cardigan', ['Men::Sweaters::Cardigan', 'Women::Sweaters::Cardigan', null, null]],
                    ['fitted', 'fitted shirt', ['Men::Tops::Dress shirts', 'Women::Tops & blouses::Button down shirt', null, null]],
                    ['full-zip', 'full-zip', ['Men::Sweaters::Full zip', 'Women::Sweaters::Full zip', null, null]],
                    ['hawaiian', 'hawaiian shirt', ['Men::Tops::Hawaiian', 'Women::Tops & blouses::Other', null, null]],
                    ['knit-top', 'knit-top', [null, 'Women::Tops & blouses::Knit top', null, null]],
                    ['sport-coat', 'sport coat', ['Men::Blazers & sport coats::Other', 'Women::Suits & blazers::Blazer', null, null]],
                    ['suit-jacket', 'suit jacket', ['Men::Blazers & sport coats::Other', 'Women::Suits & blazers::Blazer', null, null]],
                    [
                        'vest',
                        'vest',
                        ['Men::Coats & jackets::Vest', 'Women::Coats & jackets::Vest', null, null],
                        {
                            isAthletic: ['vest', 'Men::Athletic apparel::Vests', 'Women::Athletic apparel::Vests']
                        }
                    ]
                ],
                neckType: [
                    ['collared', 'sweater', [null, 'Women::Sweaters::Collared', null, null]],
                    ['cowl', 'sweater', [null, 'Women::Sweaters::Cowl neck', null, null]],
                    ['crew', 'sweater', ['Men::Sweaters::Crewneck', 'Women::Sweaters::Crewneck', null, null]],
                    ['mock', 'sweater', [null, 'Women::Sweaters::Mock Sweaters', null, null]],
                    ['scoop', 'sweater', [null, 'Women::Sweaters::Scoop neck', null, null]],
                    ['v', 'sweater', ['Men::Sweaters::V-neck', null, null, null]]
                ],
                sleeveLength: [['sleeveless', 'sweater', [null, 'Women::Sweaters::Sleeveless Sweaters', null, null]]]
            }
        },
        bottoms: {
            skirt: {
                skirtType: [
                    [
                        'asymmetrical',
                        'skirt',
                        [null, 'Women::Skirts::Asymmetrical', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'bubble',
                        'skirt',
                        [null, 'Women::Skirts::Bubble', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'full',
                        'skirt',
                        [null, 'Women::Skirts::Full skirt', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'maxi',
                        'skirt',
                        [null, 'Women::Skirts::Maxi', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'mini',
                        'skirt',
                        [null, 'Women::Skirts::Mini', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'peasant',
                        'skirt',
                        [null, 'Women::Skirts::Peasant', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'pleated',
                        'skirt',
                        [null, 'Women::Skirts::Pleated', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'pencil',
                        'skirt',
                        [null, 'Women::Skirts::Straight, pencil', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'tiered',
                        'skirt',
                        [null, 'Women::Skirts::Tiered', null, null],
                        {
                            isAthletic: ['skirt', null, 'Women::Athletic apparel::Athletic Skirts'],
                            isMaternity: ['skirt', null, 'Women::Maternity::Skirts']
                        }
                    ],
                    [
                        'wrap',
                        'skirt',
                        [null, 'Women::Skirts::Wrap', null, null],
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
                        ['Men::Pants::Khakis, chinos', 'Women::Pants::Khakis, chinos', null, null],
                        {
                            isAthletic: ['chinos', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'corduroy',
                        'corduroys',
                        ['Men::Pants::Corduroys', 'Women::Pants::Corduroys', null, null],
                        {
                            isAthletic: ['corduroys', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'khakis',
                        'khakis',
                        ['Men::Pants::Khakis, chinos', 'Women::Pants::Khakis, chinos', null, null],
                        {
                            isAthletic: ['khakis', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'leather',
                        'leather pants',
                        ['Men::Pants::Other', 'Women::Pants::Leather', null, null],
                        {
                            isAthletic: ['leather pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'linen',
                        'linen pants',
                        ['Men::Pants::Other', 'Women::Pants::Linen', null, null],
                        {
                            isAthletic: ['linen pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ]
                ],
                pantStyle: [
                    [
                        'capri',
                        'capri pants',
                        ['Men::Pants::Other', 'Women::Pants::Capri Pants', null, null],
                        {
                            isAthletic: ['capri pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'cargo',
                        'cargo pants',
                        ['Men::Pants::Cargo', 'Women::Pants::Cargo', null, null],
                        {
                            isAthletic: ['cargo pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'carpenter',
                        'carpenter pants',
                        ['Men::Pants::Carpenter', 'Women::Pants::Other', null, null],
                        {
                            isAthletic: ['carpenter pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'casual',
                        'casual pants',
                        ['Men::Pants::Casual pants', 'Men::Pants::Casual pants', null, null],
                        {
                            isAthletic: ['casual pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'cropped',
                        'cropped pants',
                        ['Men::Pants::Other', 'Women::Pants::Cropped Pants', null, null],
                        {
                            isAthletic: ['cropped pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'dress',
                        'dress pants',
                        ['Men::Pants::Dress - flat front', 'Women::Pants::Dress pants', null, null],
                        {
                            isAthletic: ['dress pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ],
                    [
                        'pleated',
                        'pleated pants',
                        ['Men::Pants::Dress - pleat', 'Women::Pants::Other', null, null],
                        {
                            isAthletic: ['pleated pants', 'Men::Athletic apparel::Pants', 'Women::Athletic apparel::Athletic Pants']
                        }
                    ]
                ]
            },
            shorts: {
                materialStyle: [
                    [
                        'chinos',
                        'chino shorts',
                        ['Men::Shorts::Khakis, chinos', 'Women::Shorts::Chino & khaki', null, null],
                        {
                            isAthletic: ['chino shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'corduroy',
                        'corduroy shorts',
                        ['Men::Shorts::Corduroys', 'Women::Shorts::Other', null, null],
                        {
                            isAthletic: ['corduroy shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'denim',
                        'denim shorts',
                        ['Men::Shorts::Denim', 'Women::Shorts::Denim', null, null],
                        {
                            isAthletic: ['denim shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'khakis',
                        'khaki shorts',
                        ['Men::Shorts::Khakis, chinos', 'Women::Shorts::Chino & khaki', null, null],
                        {
                            isAthletic: ['khaki shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'leather',
                        'leather shorts',
                        ['Men::Shorts::Other', 'Women::Shorts::Other', null, null],
                        {
                            isAthletic: ['leather shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'linen',
                        'linen shorts',
                        ['Men::Shorts::Other', 'Women::Shorts::Other', null, null],
                        {
                            isAthletic: ['linen shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ]
                ],
                pantStyle: [
                    [
                        'bermuda',
                        'bermuda shorts',
                        ['Men::Shorts::Other', 'Women::Shorts::Bermuda', null, null],
                        {
                            isAthletic: ['bermuda shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'bike',
                        'bike shorts',
                        ['Men::Shorts::Other', 'Women::Shorts::Bike', null, null],
                        {
                            isAthletic: ['bike shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'board',
                        'board shorts',
                        ['Men::Shorts::Board, surf', 'Women::Shorts::Other', null, null],
                        {
                            isAthletic: ['board shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'cargo',
                        'cargo shorts',
                        ['Men::Shorts::Cargo', 'Women::Shorts::Cargo', null, null],
                        {
                            isAthletic: ['cargo shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'carpenter',
                        'carpenter shorts',
                        ['Men::Shorts::Carpenter, utility', null, null, null],
                        {
                            isAthletic: ['carpenter shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'casual',
                        'casual shorts',
                        ['Men::Shorts::Casual shorts', 'Women::Shorts::Other', null, null],
                        {
                            isAthletic: ['casual shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'dress',
                        'dress shorts',
                        ['Men::Shorts::Dress shorts', 'Women::Shorts::Other', null, null],
                        {
                            isAthletic: ['dress shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'high-waisted',
                        'high-waisted shorts',
                        [null, 'Women::Shorts::High-waisted', null, null],
                        {
                            isAthletic: ['high-waisted shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'short-shorts',
                        'short-shorts',
                        [null, 'Women::Shorts::Short shorts', null, null],
                        {
                            isAthletic: ['short-shorts', 'Men::Shorts::Athletic', 'Women::Athletic apparel::Shorts']
                        }
                    ],
                    [
                        'skort',
                        'skort',
                        [null, 'Women::Shorts::Skort', null, null],
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
                        ['Men::Jeans::Baggy, loose', 'Women::Jeans::Other', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'bootcut',
                        'jeans',
                        ['Men::Jeans::Boot cut', 'Women::Jeans::Boot cut', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'capri',
                        'jeans',
                        ['Men::Jeans::Other', 'Women::Jeans::Capri Jeans', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'cropped',
                        'jeans',
                        ['Men::Jeans::Other', 'Women::Jeans::Cropped Jeans', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'flare',
                        'jeans',
                        ['Men::Jeans::Other', 'Women::Jeans::Flare', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'straight',
                        'jeans',
                        ['Men::Jeans::Classic, straight leg', 'Women::Jeans::Straight leg', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'relaxed',
                        'jeans',
                        ['Men::Jeans::Relaxed', 'Women::Jeans::Relaxed', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'skinny',
                        'jeans',
                        ['Men::Jeans::Skinny Jeans', 'Women::Jeans::Skinny Jeans', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'slim',
                        'jeans',
                        ['Men::Jeans::Slim Jeans', 'Women::Jeans::Slim Jeans', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'wide',
                        'jeans',
                        ['Men::Jeans::Other', 'Women::Jeans::Wide leg', null, null],
                        {
                            isMaternity: ['jeans', null, 'Women::Maternity::Jeans']
                        }
                    ]
                ],
                pantStyle: [
                    [
                        'boyfriend',
                        'boyfriend jeans',
                        ['Men::Jeans::Other', 'Women::Jeans::Boyfriend', null, null],
                        {
                            isMaternity: ['boyfriend jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'cargo',
                        'cargo jeans',
                        ['Men::Jeans::Cargo', 'Women::Jeans::Cargo', null, null],
                        {
                            isMaternity: ['cargo jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'carpenter',
                        'carpenter jeans',
                        ['Men::Jeans::Carpenter', 'Women::Jeans::Other', null, null],
                        {
                            isMaternity: ['carpenter jeans', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'leggings',
                        'leggings',
                        ['Men::Jeans::Other', 'Women::Jeans::Leggings', null, null],
                        {
                            isMaternity: ['leggings', null, 'Women::Maternity::Jeans']
                        }
                    ],
                    [
                        'overalls',
                        'overalls',
                        ['Men::Jeans::Overalls', 'Women::Jeans::Overalls', null, null],
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
}
      

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addNull(value: [string, string, string | null, string | null, FlagOptions | undefined][]) {
    function internal([key, itemType, male, female, options]: [string, string, string | null, string | null, FlagOptions | undefined]) {
        return options ? [key, itemType, [male, female, null, null], options] : [key, itemType, [male, female, null, null]];
    }
    return value.map(internal);
}
function addKids(value: [string, string, [string | null, string | null, null, null], FlagOptions | undefined][], [boys, girls]: [[string | null,string | null,string | null] | null,[string | null,string | null,string | null]]) {
    function internal([key, itemType, [male, female], options]: [string, string, [string | null, string | null, null, null], FlagOptions | undefined]) {
        return options ? [key, itemType, [male, female, boys, girls], options] : [key, itemType, [male, female, boys, girls]];
    }
    return value.map(internal);
}

// console.log(JSON.stringify(addNull(value.fullbody.dress.dressType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.fullbody.suit.blazerType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.fullbody.suit.suitType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.tops.buttonUp.blazerType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.tops.buttonUp.formalShirtType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.tops.buttonUp.neckType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.tops.buttonUp.sleeveLength as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.tops.coats.jacketType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.tops.pullOver.casualShirtType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.tops.pullOver.neckType as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.tops.pullOver.sleeveLength as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.bottoms.jeans.legStyle as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.bottoms.jeans.pantStyle as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.bottoms.pants.materialStyle as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.bottoms.pants.pantStyle as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.bottoms.shorts.materialStyle as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.bottoms.shorts.pantStyle as any), null, '\t'));
// console.log(JSON.stringify(addNull(value.bottoms.skirt.skirtType as any), null, '\t'));

// console.log(
//     JSON.stringify(
//         addKids(value.apparel.footwear.footwearType as any, [
//             ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
//             ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.footwear.shoeType as any, [
//             ['Kids::Boys shoes::Boys 0-24 mos', 'Kids::Boys shoes::Boys 2T-5T', 'Kids::Boys shoes::Boys (4+)'],
//             ['Kids::Girls shoes::Girls 0-24 mos', 'Kids::Girls shoes::Girls 2T-5T', 'Kids::Girls shoes::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.tops.buttonUp.blazerType as any, [
//             ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
//             ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.tops.buttonUp.formalShirtType as any, [
//             ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
//             ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.tops.buttonUp.neckType as any, [
//             ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
//             ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.tops.buttonUp.sleeveLength as any, [
//             ['Kids::Boys tops & t-shirts::Boys 0-24 mos', 'Kids::Boys tops & t-shirts::Boys 2T-5T', 'Kids::Boys tops & t-shirts::Boys (4+)'],
//             ['Kids::Girls tops & t-shirts::Girls 0-24 mos', 'Kids::Girls tops & t-shirts::Girls 2T-5T', 'Kids::Girls tops & t-shirts::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.bottoms.skirt.skirtType as any, [
//             ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
//             ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.bottoms.jeans.legStyle as any, [
//             ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
//             ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.bottoms.jeans.pantStyle as any, [
//             ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
//             ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.bottoms.pants.materialStyle as any, [
//             ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
//             ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.bottoms.pants.pantStyle as any, [
//             ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
//             ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.bottoms.shorts.materialStyle as any, [
//             ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
//             ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.bottoms.shorts.pantStyle as any, [
//             ['Kids::Boys bottoms::Boys 0-24 mos', 'Kids::Boys bottoms::Boys 2T-5T', 'Kids::Boys bottoms::Boys (4+)'],
//             ['Kids::Girls bottoms::Girls 0-24 mos', 'Kids::Girls bottoms::Girls 2T-5T', 'Kids::Girls bottoms::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.fullbody.dress.dressType as any, [
//             null, ["Kids::Girls dresses::Girls 0-24 mos", "Kids::Girls dresses::Girls 2T-5T", "Kids::Girls dresses::Girls (4+)"]
//         ]),
//         null,
//         '\t'
//     )
// );
// console.log(
//     JSON.stringify(
//         addKids(value.apparel.fullbody.suit.blazerType as any, [
//             ['Kids::Boys coats & jackets::Boys 0-24 mos', 'Kids::Boys coats & jackets::Boys 2T-5T', 'Kids::Boys coats & jackets::Boys (4+)'],
//             ['Kids::Girls coats & jackets::Girls 0-24 mos', 'Kids::Girls coats & jackets::Girls 2T-5T', 'Kids::Girls coats & jackets::Girls (4+)']
//         ]),
//         null,
//         '\t'
//     )
// );


console.log(
    JSON.stringify(
        addKids(value.apparel.fullbody.suit.suitType as any, [
            ['Kids::Boys one-pieces::Boys 0-24 mos', 'Kids::Boys one-pieces::Boys 2T-5T', 'Kids::Boys one-pieces::All Boys one-pieces'],
            ['Kids::Girls one-pieces::Girls 0-24 mos', 'Kids::Girls one-pieces::Girls 2T-5T', 'Kids::Girls one-pieces::All Girls one-pieces']
        ]),
        null,
        '\t'
    )
);
console.log(
    JSON.stringify(
        addKids(value.apparel.undergarments.misc.undergarmentType as any, [
            ['Kids::Boys other::Boys 0-24 mos', 'Kids::Boys other::Boys 2T-5T', 'Kids::Boys other::Boys (4+)'],
            ['Kids::Girls other::Girls 0-24 mos', 'Kids::Girls other::Girls 2T-5T', 'Kids::Girls other::Girls (4+)']
        ]),
        null,
        '\t'
    )
);
console.log(
    JSON.stringify(
        addKids(value.apparel.undergarments.sleepwear.sleepwearType as any, [
            ['Kids::Boys other::Boys 0-24 mos', 'Kids::Boys other::Boys 2T-5T', 'Kids::Boys other::Boys (4+)'],
            ['Kids::Girls other::Girls 0-24 mos', 'Kids::Girls other::Girls 2T-5T', 'Kids::Girls other::Girls (4+)']
        ]),
        null,
        '\t'
    )
);
console.log(
    JSON.stringify(
        addKids(value.apparel.undergarments.swimwear.swimwearType as any, [
            ['Kids::Boys swimwear::Boys 0-24 mos', 'Kids::Boys swimwear::Boys 2T-5T', 'Kids::Boys swimwear::Boys (4+)'],
            ['Kids::Girls swimwear::Girls 0-24 mos', 'Kids::Girls swimwear::Girls 2T-5T', 'Kids::Girls swimwear::Girls (4+)']
        ]),
        null,
        '\t'
    )
);