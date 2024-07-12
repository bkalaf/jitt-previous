import React from 'react';
import $masterEnum from './enum-info.json';
import { useFormContext } from 'react-hook-form';
import { CheckboxElement, TextFieldElement, SelectElement } from 'react-hook-form-mui';

export type AwardNames = 'oscar' | 'emmy' | 'tony' | 'pulitzer' | 'grammy' | 'hugo' | 'ny-times' | 'unknown';
export type HugoAwardCategories = 'novel' | 'novella' | 'novelette' | 'short-story' | 'series' | 'graphic-story' | 'fan-writer' | 'game' | 'related-work';
export type EmmyAwardCategories =
    | 'comedy'
    | 'drama'
    | 'limited'
    | 'reality'
    | 'variety'
    | 'talk'
    | 'movie'
    | 'directing-comedy'
    | 'directing-drama'
    | 'directing-limited'
    | 'directing-variety'
    | 'writing-comedy'
    | 'writing-drama'
    | 'writing-limited'
    | 'writing-variety'
    | 'actor-comedy'
    | 'actor-drama'
    | 'actor-limited'
    | 'actress-comedy'
    | 'actress-drama'
    | 'actress-limited'
    | 'supporting-actor-comedy'
    | 'supporting-actor-drama'
    | 'supporting-actor-limited'
    | 'supporting-actress-comedy'
    | 'supporting-actress-drama'
    | 'supporting-actress-limited'
    | 'documentary-series'
    | 'documentary-special'
    | 'animated';
export type OscarAwardCategories =
    | 'picture'
    | 'actor'
    | 'actress'
    | 'director'
    | 'supporting-actor'
    | 'supporting-actress'
    | 'original-screenplay'
    | 'song'
    | 'cinematography'
    | 'design'
    | 'adapted-screenplay'
    | 'sound'
    | 'animated'
    | 'editing'
    | 'score'
    | 'effects'
    | 'short-documentary'
    | 'documentary'
    | 'international'
    | 'costume'
    | 'makeup'
    | 'animated-short'
    | 'casting';
export type NYTimesAwardCategories = 'fiction' | 'nonfiction' | 'childrens';
export type PulitzerPrizeAwardCategories = 'biography' | 'memoir' | 'history' | 'nonfiction' | 'fiction' | 'poetry' | 'drama' | 'music';
export type GrammyAwardCategories =
    | 'album'
    | 'record'
    | 'song'
    | 'artist'
    | 'songwriter'
    | 'producer'
    | 'pop-solo'
    | 'pop-duo'
    | 'pop-vocal'
    | 'dance'
    | 'dance-pop'
    | 'dance-album'
    | 'remix'
    | 'rock'
    | 'metal'
    | 'rock-song'
    | 'rock-album'
    | 'alternative'
    | 'alternative-album'
    | 'rnb'
    | 'traditional-rnb'
    | 'rnb-song'
    | 'progressive-rnb'
    | 'rnb-album'
    | 'rap'
    | 'melodic-rap'
    | 'rap-song'
    | 'rap-album'
    | 'spoken-word'
    | 'musical-theatre'
    | 'country-solo'
    | 'country-duo'
    | 'country-song'
    | 'country-album'
    | 'bluegrass'
    | 'folk'
    | 'americana-album'
    | 'americana'
    | 'american-roots'
    | 'traditional-blues'
    | 'contemporary-blues'
    | 'regional-roots'
    | 'gospel'
    | 'gospel-album'
    | 'contemporary-christian'
    | 'contemporary-christian-album'
    | 'traditional-pop'
    | 'jazz'
    | 'jazz-vocal'
    | 'jazz-instrumental'
    | 'large-jazz'
    | 'latin-jazz'
    | 'alternative-jazz'
    | 'latin-pop'
    | 'musica-urbana'
    | 'latin-rock'
    | 'musica mexicana'
    | 'tropical-latin'
    | 'global-music'
    | 'raggae'
    | 'new-age'
    | 'childrens'
    | 'comedy'
    | 'audio-book'
    | 'compilation'
    | 'soundtrack'
    | 'soundtrack-video-games'
    | 'song-visual-media'
    | 'music-video'
    | 'music-film';
export type TonyAwardCategories = 'play' | 'musical' | 'choreography' | 'actor-play' | 'actor-musical' | 'featured-actor-play' | 'featured-actor-musical' | 'actress-play' | 'actress-musical' | 'featured-actress-play' | 'featured-actress-musical';
export type BacklineTypes = 'open-back' | 'u-shape-back' | 'v-shape-back' | 'bare-back' | 'x-cross-back' | 'bow-back' | 'strappy-back' | 'open back' | 'u-shape back' | 'v-shape back' | 'bare back' | 'x-cross back' | 'bow back' | 'strappy back';

export type BarcodeTypes = 'upc' | 'ean' | 'isbn-10' | 'isbn-13' | 'locator' | 'sku' | 'unknown';

export type BookGenres =
    | 'fiction'
    | 'history'
    | 'mystery'
    | 'sci-fi'
    | 'biography'
    | 'young-adult-fiction'
    | 'romance'
    | 'childrens'
    | 'self-help'
    | 'fantasy'
    | 'poetry'
    | 'cookbook'
    | 'social-science'
    | 'travel'
    | 'reference-study'
    | 'photography'
    | 'business'
    | 'technology'
    | 'politics';

export type BookTypes = 'hardback' | 'paperback' | 'boardbook' | 'textbook' | 'hard back' | 'hard-back' | 'paper back' | 'paper-back' | 'board-book' | 'board book' | 'text-book' | 'text book';

export type BootTypes = 'ankle & bootie' | 'mid-calf' | 'knee-high' | 'over-the-knee';

export type VideoConnectorTypes = 'hdmi' | 'dvi' | 'mini-dvi' | 'displayport' | 'vga';
export type DataConnectorTypes = 'usb-a' | 'usb-b' | 'usb-c' | 'usb-mini-a' | 'usb-mini-b' | 'usb-micro-a' | 'usb-micro-b' | 'usb-micro-b-superspeed' | 'lightning';
export type PowerConnectorTypes = 'C5' | 'C7' | 'C8' | 'C13' | 'C14' | 'C15' | 'C18' | 'C19' | 'C20' | 'C22';
export type CableTypes = 'data' | 'power' | 'video';

export type ClosureTypes = 'backstrap' | 'buckle' | 'bungee' | 'button' | 'clip' | 'drawstring' | 'half-zip' | 'hook & bar' | 'hook & eye' | 'hook & loop' | 'lace-up' | 'magnetic' | 'pull-on' | 'slip-on' | 'snap' | 'speed laces' | 'tie' | 'zipper';

export type CollarTypes =
    | 'band-collar'
    | 'button-down-collar'
    | 'camp-collar'
    | 'classic-collar'
    | 'club-collar'
    | 'collarless'
    | 'cutaway-collar'
    | 'hidden-button-down-collar'
    | 'lapel-collar'
    | 'mandarin-collar'
    | 'point-collar'
    | 'spread-collar'
    | 'tab-collar'
    | 'wingtip-collar';

export type Countries =
    | 'AD'
    | 'AE'
    | 'AF'
    | 'AG'
    | 'AI'
    | 'AL'
    | 'AM'
    | 'AO'
    | 'AQ'
    | 'AR'
    | 'AS'
    | 'AT'
    | 'AU'
    | 'AW'
    | 'AX'
    | 'AZ'
    | 'BA'
    | 'BB'
    | 'BD'
    | 'BE'
    | 'BF'
    | 'BG'
    | 'BH'
    | 'BI'
    | 'BJ'
    | 'BL'
    | 'BM'
    | 'BN'
    | 'BO'
    | 'BQ'
    | 'BR'
    | 'BS'
    | 'BT'
    | 'BV'
    | 'BW'
    | 'BY'
    | 'BZ'
    | 'CA'
    | 'CC'
    | 'CD'
    | 'CF'
    | 'CG'
    | 'CH'
    | 'CI'
    | 'CK'
    | 'CL'
    | 'CM'
    | 'CN'
    | 'CO'
    | 'CR'
    | 'CU'
    | 'CV'
    | 'CW'
    | 'CX'
    | 'CY'
    | 'CZ'
    | 'DE'
    | 'DJ'
    | 'DK'
    | 'DM'
    | 'DO'
    | 'DZ'
    | 'EC'
    | 'EE'
    | 'EG'
    | 'EH'
    | 'ER'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FJ'
    | 'FK'
    | 'FM'
    | 'FO'
    | 'FR'
    | 'GA'
    | 'GB'
    | 'GD'
    | 'GE'
    | 'GF'
    | 'GG'
    | 'GH'
    | 'GI'
    | 'GL'
    | 'GM'
    | 'GN'
    | 'GP'
    | 'GQ'
    | 'GR'
    | 'GS'
    | 'GT'
    | 'GU'
    | 'GW'
    | 'GY'
    | 'HK'
    | 'HM'
    | 'HN'
    | 'HR'
    | 'HT'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IM'
    | 'IN'
    | 'IO'
    | 'IQ'
    | 'IR'
    | 'IS'
    | 'IT'
    | 'JE'
    | 'JM'
    | 'JO'
    | 'JP'
    | 'KE'
    | 'KG'
    | 'KH'
    | 'KI'
    | 'KM'
    | 'KN'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KY'
    | 'KZ'
    | 'LA'
    | 'LB'
    | 'LC'
    | 'LI'
    | 'LK'
    | 'LR'
    | 'LS'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'LY'
    | 'MA'
    | 'MC'
    | 'MD'
    | 'ME'
    | 'MF'
    | 'MG'
    | 'MH'
    | 'MK'
    | 'ML'
    | 'MM'
    | 'MN'
    | 'MO'
    | 'MP'
    | 'MQ'
    | 'MR'
    | 'MS'
    | 'MT'
    | 'MU'
    | 'MV'
    | 'MW'
    | 'MX'
    | 'MY'
    | 'MZ'
    | 'NA'
    | 'NC'
    | 'NE'
    | 'NF'
    | 'NG'
    | 'NI'
    | 'NL'
    | 'NO'
    | 'NP'
    | 'NR'
    | 'NU'
    | 'NZ'
    | 'OM'
    | 'PA'
    | 'PE'
    | 'PF'
    | 'PG'
    | 'PH'
    | 'PK'
    | 'PL'
    | 'PM'
    | 'PN'
    | 'PR'
    | 'PS'
    | 'PT'
    | 'PW'
    | 'PY'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RS'
    | 'RU'
    | 'RW'
    | 'SA'
    | 'SB'
    | 'SC'
    | 'SD'
    | 'SE'
    | 'SG'
    | 'SH'
    | 'SI'
    | 'SJ'
    | 'SK'
    | 'SL'
    | 'SM'
    | 'SN'
    | 'SO'
    | 'SR'
    | 'SS'
    | 'ST'
    | 'SV'
    | 'SX'
    | 'SY'
    | 'SZ'
    | 'TC'
    | 'TD'
    | 'TF'
    | 'TG'
    | 'TH'
    | 'TJ'
    | 'TK'
    | 'TL'
    | 'TM'
    | 'TN'
    | 'TO'
    | 'TR'
    | 'TT'
    | 'TV'
    | 'TW'
    | 'TZ'
    | 'UA'
    | 'UG'
    | 'UM'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VA'
    | 'VC'
    | 'VE'
    | 'VG'
    | 'VI'
    | 'VN'
    | 'VU'
    | 'WF'
    | 'WS'
    | 'YE'
    | 'YT'
    | 'ZA'
    | 'ZM'
    | 'ZW';

export type CuffTypes =
    | 'angle-cut-cuff'
    | 'barrel-cuff'
    | 'double-cuff'
    | 'french-cuff'
    | 'ribbed-cuff'
    | 'two-button-cuff'
    | 'one-button-cuff'
    | 'rounded-cuff'
    | 'single-cuff'
    | 'angle-cut cuff'
    | 'angle-cut'
    | 'barrel cuff'
    | 'double cuff'
    | 'french cuff'
    | 'ribbed cuff'
    | 'two-button cuff'
    | 'one-button cuff'
    | 'rounded cuff'
    | 'round-cut cuff'
    | 'round-cut-cuff'
    | 'single cuff';

export type ConsoleTypes = 'nes' | 'snes' | 'n64' | 'gameboy' | 'gameboy-advance' | 'ds' | 'ps1' | 'ps2' | 'ps3' | 'ps4' | 'ps5' | 'wii' | 'xbox';

export type DetailsTypes =
    | 'apparel-bottoms'
    | 'apparel-bras'
    | 'apparel-footwear'
    | 'apparel-tops'
    | 'apparel'
    | 'cables-data'
    | 'cables-power'
    | 'cables-video'
    | 'cables'
    | 'cell-phones'
    | 'electronics'
    | 'general'
    | 'home-goods-dinnerware'
    | 'home-goods-flatware'
    | 'home-goods'
    | 'jewelry'
    | 'kitchen-appliances'
    | 'media-books'
    | 'media-music'
    | 'media-video-games'
    | 'media-videos-film'
    | 'media-videos-tv-series'
    | 'media-videos'
    | 'media'
    | 'sporting-goods-golf-clubs'
    | 'sporting-goods'
    | 'toys';

export type DressTypes = 'above-knee' | 'knee-length' | 'midi' | 'maxi' | 'high-low' | 'ball-gown';

export type ESRBRatings = 'E' | 'E10+' | 'T' | 'M' | 'AO' | 'RP' | 'RPLM' | 'Not Rated' | 'No Rating';

export type FabricTypes = 'acrylic' | 'cashmere' | 'cotton' | 'denim' | 'lace' | 'leather' | 'linen' | 'modal' | 'nylon' | 'organicCotton' | 'polyester' | 'rayon' | 'satin' | 'silk' | 'spandex' | 'suede' | 'velvet' | 'viscose' | 'wool';

export type FitTypes = 'loose-fit' | 'relaxed-fit' | 'athletic-fit' | 'classic-fit' | 'fitted' | 'oversized' | 'modern-fit' | 'regular-fit' | 'skinny' | 'slim-fit' | 'snug-fit' | 'straight' | 'tailored';

export type GarmentLengths = 'extra-long' | 'extra-short' | 'long' | 'short' | 'standard';

export type Genders = 'mens' | 'womens' | 'boys' | 'girls' | 'unisex';

export type HeightMaps = 'high-top' | 'low-top' | 'mid-top';

export type Languages = 'en' | 'es' | 'ja';

export type LegStyles =
    | 'ankle-leg'
    | 'baggy'
    | 'bootcut'
    | 'cropped'
    | 'flared'
    | 'skinny'
    | 'straight-leg'
    | 'tapered-leg'
    | 'trouser-leg'
    | 'wide-leg'
    | 'baggy-leg'
    | 'baggy leg'
    | 'bootcut-leg'
    | 'bootcut leg'
    | 'cropped-leg'
    | 'cropped leg'
    | 'flared-leg'
    | 'flared leg'
    | 'skinny-leg'
    | 'skinny leg'
    | 'straight leg'
    | 'tapered leg'
    | 'trouser leg'
    | 'wide leg';

export type LifestyleTypes = 'business casual' | 'casual' | 'club' | 'comfort' | 'evening' | 'formal';

export type Materials = 'aluminum';

export type MusicFormatTypes = 'cd' | 'cassette' | 'lp' | '8-track';

export type MusicGenres =
    | 'pop'
    | 'rock'
    | 'rhythm-and-blues'
    | 'hip-hop'
    | 'country'
    | 'jazz'
    | 'blues'
    | 'electronic-dance'
    | 'heavy-metal'
    | 'classical'
    | 'punk-rock'
    | 'alternative-rock'
    | 'funk'
    | 'soul'
    | 'folk'
    | 'reggae'
    | 'indie-rock'
    | 'latin'
    | 'techno'
    | 'easy-listening'
    | 'jungle'
    | 'dubstep'
    | 'ska'
    | 'industrial'
    | 'new-wave';

export type PocketTypes = 'cargo-pocket' | 'coin-pocket' | 'flap-pocket' | 'jetted-pocket' | 'kangaroo-pocket' | 'patch-pocket' | 'round-pocket' | 'seam-pocket' | 'slant-pocket' | 'slit-pocket' | 'straight-pocket' | 'welt-pocket';

export type NeckTypes =
    | 'boat-neck'
    | 'choker-neck'
    | 'collared-neck'
    | 'cowl-neck'
    | 'crew-neck'
    | 'halter-neck'
    | 'henley-neck'
    | 'high-neck'
    | 'hooded-neck'
    | 'jewel-neck'
    | 'mandarin-neck'
    | 'mock-neck'
    | 'notch-neck'
    | 'off-shoulder-neck'
    | 'one-shoulder-neck'
    | 'sailor-collar-neck'
    | 'scoop-neck'
    | 'shawl-neck'
    | 'square-neck'
    | 'turtle-neck'
    | 'v-neck'
    | 'v neck'
    | 'scoop neck'
    | 'off-shoulder';

export type ProductColors =
    | 'silver'
    | 'gold'
    | 'yellow'
    | 'brown'
    | 'orange'
    | 'pink'
    | 'red'
    | 'purple'
    | 'blue'
    | 'green'
    | 'black'
    | 'white'
    | 'gray'
    | 'beige'
    | 'charcoal'
    | 'grey'
    | 'cream'
    | 'eggshell'
    | 'tan'
    | 'burgundy'
    | 'rose'
    | 'crimson'
    | 'scarlet'
    | 'magenta'
    | 'fuchsia'
    | 'violet'
    | 'cyan'
    | 'aqua'
    | 'teal'
    | 'navy'
    | 'denim'
    | 'light-blue'
    | 'lime'
    | 'emerald'
    | 'dark-green'
    | 'forest-green'
    | 'sea-green'
    | 'amber'
    | 'copper'
    | 'goldenrod';

export type Provinces =
    | 'AB'
    | 'AK'
    | 'AL'
    | 'AR'
    | 'AZ'
    | 'BC'
    | 'CA'
    | 'CO'
    | 'CT'
    | 'DC'
    | 'DE'
    | 'FL'
    | 'GA'
    | 'HI'
    | 'IA'
    | 'ID'
    | 'IL'
    | 'IN'
    | 'KS'
    | 'KY'
    | 'LA'
    | 'MA'
    | 'MB'
    | 'MD'
    | 'ME'
    | 'MI'
    | 'MN'
    | 'MO'
    | 'MS'
    | 'MT'
    | 'NB'
    | 'NC'
    | 'ND'
    | 'NE'
    | 'NH'
    | 'NJ'
    | 'NL'
    | 'NM'
    | 'NS'
    | 'NT'
    | 'NU'
    | 'NV'
    | 'NY'
    | 'OH'
    | 'OK'
    | 'ON'
    | 'OR'
    | 'PA'
    | 'PE'
    | 'PR'
    | 'QC'
    | 'RI'
    | 'SC'
    | 'SD'
    | 'SK'
    | 'TN'
    | 'TX'
    | 'UT'
    | 'VA'
    | 'VT'
    | 'WA'
    | 'WI'
    | 'WV'
    | 'WY'
    | 'YT';

export type RiseTypes = 'high-rise' | 'mid-rise' | 'low-rise';

export type ShoeHeelTypes = 'block heel' | 'cone heel' | 'flare heel' | 'kitten heel' | 'platform' | 'stiletto heel' | 'wedge heel';

export type ShoeWidths = 'extra-narrow' | 'extra-wide' | 'medium' | 'narrow' | 'wide';

export type SleeveTypes =
    | 'balloon-sleeve'
    | 'batwing-sleeve'
    | 'bell-sleeve'
    | 'bishop-sleeve'
    | 'butterfly-sleeve'
    | 'cap-sleeve'
    | 'cape-sleeve'
    | 'cold-shoulder-sleeve'
    | 'cuff-sleeve'
    | 'flutter-sleeve'
    | 'kimono-sleeve'
    | 'lantern-sleeve'
    | 'leg-of-mutton-sleeve'
    | 'puff-sleeve'
    | 'raglan-sleeve'
    | 'ruffle-sleeve'
    | 'split-sleeve';

export type StrapTypes = 'adjustable-strap' | 'ankle-strap' | 'double-strap' | 'padded-strap' | 'single-strap' | 'slingback-strap' | 'strapless' | 't-strap' | 'toe-strap' | 'x-strap';

export type SuitTypes = 'one-button suit' | 'two-button suit' | 'three-button suit' | 'four-button suit' | 'tuxedo suit' | 'double-breasted suit' | 'dress suit' | 'skirt suit' | 'pantsuit';

export type SwimsuitBottomStyles = 'bikini & hipster' | 'brazilian' | 'high-waisted' | 'skirted';

export type SwimsuitTopStyles = 'bandeau' | 'halter' | 'one-shoulder' | 'racerback & crossback' | 'tank' | 'triangle' | 'underwire';

export type ToeStyles = 'almond toe' | 'bump toe' | 'cap toe' | 'closed toe' | 'composite toe' | 'moc toe' | 'open toe' | 'peep toe' | 'plain toe' | 'pointed toe' | 'round toe' | 'split toe' | 'square toe' | 'steel toe';

export type VideoFormatTypes = 'dvd' | 'blu-ray' | 'vhs';

export type VideoTypes = 'tv-show' | 'film';

export type TVRatings = 'TV-Y' | 'TV-Y7' | 'TV-Y7-FV ' | 'TV-G' | 'TV-PG' | 'TV-14' | 'TV-MA' | 'Not Rated' | 'No Rating';

export type MovieRatings = 'G' | 'PG' | 'PG-13' | 'R' | 'X' | 'UR' | 'NR' | 'Not Rated' | 'No Rating';

export type MovieGenres = 'horror' | 'sci-fi' | 'action' | 'classic' | 'family' | 'comedy' | 'drama' | 'thriller' | 'documentary' | 'western' | 'romance' | 'anime' | 'mystery' | 'musical' | 'sports';

export type AmperageUOM = 'A' | 'mA';

export type ApplianceTypes =
    | 'bread maker'
    | 'coffee maker'
    | 'dehydrator'
    | 'electric kettle'
    | 'food processor'
    | 'hand mixer'
    | 'ice cream maker'
    | 'indoor grill'
    | 'juicer'
    | 'microwave'
    | 'mixer'
    | 'rice cooker'
    | 'soda maker'
    | 'toaster'
    | 'toaster oven'
    | 'waffle iron';

export type AspectRatios = '16:10' | '16:9' | '4:3' | '5:3' | '5:4';

export type AuctionSites = 'storageTreasures' | 'lockerfox';

export type BatteryTypes = 'AA' | 'AAA' | 'C' | 'D' | 'CR2032' | '9V';

export type CellCarriers =
    | 'AT&T WirelessAT&T Wireless'
    | 'Blue WirelessBlue Wireless'
    | 'Boost MobileBoost Mobile'
    | 'Consumer CellularConsumer Cellular'
    | 'Cricket WirelessCricket Wireless'
    | 'H2O WirelessH2O Wireless'
    | 'Net10 WirelessNet10 Wireless'
    | 'Simple MobileSimple Mobile'
    | 'SprintSprint'
    | 'Straight TalkStraight Talk'
    | 'T-MobileT-Mobile'
    | 'TingTing'
    | 'Total WirelessTotal Wireless'
    | 'TracFone WirelessTracFone Wireless'
    | 'UnlockedUnlocked'
    | 'UScellularUScellular'
    | 'Verizon WirelessVerizon Wireless'
    | 'Virgin MobileVirgin Mobile';

export type ClubTypes = 'iron' | 'driver' | 'putter' | 'wedge';

export type ConnectorGenders = 'm' | 'f';

export type DinnerwareTypes = 'bread-butter' | 'coffee-mug' | 'dinner-plate' | 'salad-plate';
export type FlatwareTypes = 'salad-fork' | 'dinner-fork' | 'spoon' | 'butter-knife';
export type FlexTypes = 'ladies' | 'regular' | 'senior' | 'stiff';

export type HandOrientations = 'right-handed' | 'left-handed';

export type IronTypes = '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type ItemConditions = 'new' | 'like-new' | 'good' | 'fair' | 'poor' | 'parts';

export type ItemDispositions = 'not-listed' | 'ready-to-list' | 'listed' | 'removed' | 'sold' | 'damaged' | 'destroyed' | 'remediation';

export type MetalTypes = 'brass' | 'copper' | 'nickel' | 'steel' | 'tin' | 'zinc' | 'gold' | 'silver' | 'platinum' | 'palladium' | 'gold-18ct-yellow' | 'gold-18ct-white' | 'gold-14ct' | 'gold-9ct' | 'gold-22ct' | 'sterling-silver' | 'platinum-950';

export type OperatingSystems = 'Android' | 'Blackberry' | 'iOS' | 'Linux' | 'Nucleus OS' | 'Symbian' | 'Amazon Fire';

export type PayorTypes = 'buyer' | 'seller';

export type PowerTypes = 'battery' | 'ac';

export type ShaftTypes = 'graphite' | 'steel';

export type ShapeTypes = 'hexagon' | 'square' | 'rectangle';

export type Shippers = 'USPS Ground Advantage' | 'USPS Media Mail' | 'UPS SurePost' | 'FedEx Ground Economy' | 'UPS Ground' | 'FedEx Home';

export type ShippingSpeeds = 'media-mail' | 'standard';

export type WedgeTypes = 'PW' | 'AW' | 'SW' | 'LW';

export type SleeveLengths = '3/4-sleeve' | 'half-sleeve' | 'short-sleeve' | 'long-sleeve' | 'short-sleeved' | 'long-sleeved' | 'sleeveless';
export type HardDriveFormFactor = string;
export type HardDriveConnectivity = string;
export type HardDriveInterface = string;
export type MemoryType = string;
export type MemoryFormFactor = string;
export type DriveType = string;
export type CapacityUOM = 'GB' | 'TB';
export type CompatibleDevices = string;
export type CASLatency = string;

// fs.writeFileSync('enum-info.json', JSON.stringify($masterEnum, null, '\t'));
function CheckboxValueControl() {
    const formContext = useFormContext();
    return (
        <>
            <CheckboxElement name='value' label='Value' control={formContext.control} />
            <CheckboxElement name='unset' label='Value' hidden className='hidden' checked />
        </>
    );
}
function TextValueControl() {
    const formContext = useFormContext();
    return <TextFieldElement name='value' label='Value' control={formContext.control} type='text' />;
}

function toSelectValueControl(enumKey: keyof typeof $me) {
    const options = $masterEnum[enumKey as keyof typeof $masterEnum].sort((l, r) => l.text?.localeCompare(r?.text ?? '') ?? 0);
    return function SelectValueControl() {
        const formContext = useFormContext();
        return <SelectElement name='value' label='Value' labelKey='text' valueKey='key' control={formContext.control} options={options} />;
    };
}
export const attributePaths = [
    {
        key: 'flags.isMediaMail',
        text: 'isMediaMail',
        Component: CheckboxValueControl
    },
    {
        key: 'flags.hasInstructionManual',
        text: 'hasInstructionManual',
        Component: CheckboxValueControl
    },
    {
        key: 'itemType',
        text: 'itemType',
        Component: TextValueControl
    },
    {
        key: 'gender',
        text: 'gender',
        Component: toSelectValueControl('genders')
    },
    {
        key: 'closureType',
        text: 'closureType',
        Component: toSelectValueControl('closureTypes')
    },
    {
        key: 'fitType',
        text: 'fitType',
        Component: toSelectValueControl('fitTypes')
    },
    {
        key: 'legStyle',
        text: 'legStyle',
        Component: toSelectValueControl('legStyles')
    },

    {
        key: 'lengthType',
        text: 'lengthType',
        Component: toSelectValueControl('garmentLengths')
    },
    {
        key: 'lifestyleType',
        text: 'lifestyleType',
        Component: toSelectValueControl('lifestyleTypes')
    },
    {
        key: 'pocketType',
        text: 'pocketType',
        Component: toSelectValueControl('pocketTypes')
    },
    {
        key: 'riseType',
        text: 'riseType',
        Component: toSelectValueControl('riseTypes')
    },

    {
        key: 'bootType',
        text: 'bootType',
        Component: toSelectValueControl('bootTypes')
    },

    {
        key: 'heightMapType',
        text: 'heightMapType',
        Component: toSelectValueControl('heightMaps')
    },
    {
        key: 'shoeHeelType',
        text: 'shoeHeelType',
        Component: toSelectValueControl('shoeHeelTypes')
    },
    {
        key: 'shoeWidth',
        text: 'shoeWidth',
        Component: toSelectValueControl('shoeWidths')
    },
    {
        key: 'strapType',
        text: 'strapType',
        Component: toSelectValueControl('strapTypes')
    },
    {
        key: 'toeStyle',
        text: 'toeStyle',
        Component: toSelectValueControl('toeStyles')
    },

    {
        key: 'swimsuitBottomStyle',
        text: 'swimsuitBottomStyle',
        Component: toSelectValueControl('swimsuitBottomStyles')
    },
    {
        key: 'swimsuitTopStyle',
        text: 'swimsuitTopStyle',
        Component: toSelectValueControl('swimsuitTopStyles')
    },
    {
        key: 'backlineType',
        text: 'backlineType',
        Component: toSelectValueControl('backlineTypes')
    },

    {
        key: 'collarType',
        text: 'collarType',
        Component: toSelectValueControl('collarTypes')
    },
    {
        key: 'cuffType',
        text: 'cuffType',
        Component: toSelectValueControl('cuffTypes')
    },
    {
        key: 'dressType',
        text: 'dressType',
        Component: toSelectValueControl('dressTypes')
    },

    {
        key: 'neckType',
        text: 'neckType',
        Component: toSelectValueControl('neckTypes')
    },

    {
        key: 'sleeveType',
        text: 'sleeveType',
        Component: toSelectValueControl('sleeveTypes')
    },
    {
        key: 'suitType',
        text: 'suitType',
        Component: toSelectValueControl('suitTypes')
    },
    {
        key: 'sleeveLength',
        text: 'sleeveLength',
        Component: toSelectValueControl('sleeveLengths')
    },

    {
        key: 'bookGenre',
        text: 'bookGenre',
        Component: toSelectValueControl('bookGenres')
    },
    {
        key: 'bookType',
        text: 'bookType',
        Component: toSelectValueControl('bookTypes')
    },
    {
        key: 'cableType',
        text: 'cableType',
        Component: toSelectValueControl('cableTypes')
    },
    {
        key: 'language',
        text: 'language',
        Component: toSelectValueControl('languages')
    },

    {
        key: 'videoFormat',
        text: 'videoFormat',
        Component: toSelectValueControl('videoFormatTypes')
    },
    {
        key: 'movieRating',
        text: 'movieRating',
        Component: toSelectValueControl('movieRatings')
    },
    {
        key: 'videoGenre',
        text: 'videoGenre',
        Component: toSelectValueControl('movieGenres')
    },

    {
        key: 'tvRating',
        text: 'tvRating',
        Component: toSelectValueControl('tvRatings')
    },
    {
        key: 'videoType',
        text: 'videoType',
        Component: toSelectValueControl('videoTypes')
    },

    {
        key: 'consoleType',
        text: 'consoleType',
        Component: toSelectValueControl('consoleTypes')
    },

    {
        key: 'musicFormat',
        text: 'musicFormat',
        Component: toSelectValueControl('musicFormatTypes')
    },
    {
        key: 'musicGenre',
        text: 'musicGenre',
        Component: toSelectValueControl('musicGenres')
    },

    {
        key: 'os',
        text: 'os',
        Component: toSelectValueControl('operatingSystems')
    },

    {
        key: 'metal',
        text: 'metal',
        Component: toSelectValueControl('metalTypes')
    },

    {
        key: 'applianceType',
        text: 'applianceType',
        Component: toSelectValueControl('applianceTypes')
    },
    {
        key: 'clubType',
        text: 'clubType',
        Component: toSelectValueControl('clubTypes')
    },
    {
        key: 'flexType',
        text: 'flexType',
        Component: toSelectValueControl('flexTypes')
    },
    {
        key: 'handOrientation',
        text: 'handOrientation',
        Component: toSelectValueControl('handOrientations')
    },
    {
        key: 'ironType',
        text: 'ironType',
        Component: toSelectValueControl('ironTypes')
    },

    {
        key: 'shaftType',
        text: 'shaftType',
        Component: toSelectValueControl('shaftTypes')
    },

    {
        key: 'wedgeType',
        text: 'wedgeType',
        Component: toSelectValueControl('wedgeTypes')
    },
    {
        key: 'material',
        text: 'material',
        Component: toSelectValueControl('materials')
    },
    {
        key: 'driveType',
        text: 'driveType',
        Component: toSelectValueControl('driveTypes')
    },
    {
        key: 'driveInterface',
        text: 'driveInterface',
        Component: toSelectValueControl('driveInterfaces')
    },
    {
        key: 'driveForm',
        text: 'driveForm',
        Component: toSelectValueControl('driveFormFactors')
    },
    {
        key: 'memoryForm',
        text: 'memoryForm',
        Component: toSelectValueControl('memoryFormFactors')
    },
    {
        key: 'memoryType',
        text: 'memoryType',
        Component: toSelectValueControl('memoryTypes')
    },
    {
        key: 'casLatency',
        text: 'casLatency',
        Component: toSelectValueControl('casLatency')
    },
    {
        key: 'compatibleDevices',
        text: 'compatibleDevices',
        Component: toSelectValueControl('compatibleDevices')
    }
];

export type EnumName = keyof typeof $masterEnum;
// eslint-disable-next-line @typescript-eslint/ban-types
const $me = { ...$masterEnum, attributePaths: attributePaths } as Record<EnumName, EnumItem<string>[]> & Record<'attributePaths', { text: string; key: string; Component: React.FunctionComponent<{}> }[]>;
export default $me;

// console.log(Object.keys($me).join('\n'))
