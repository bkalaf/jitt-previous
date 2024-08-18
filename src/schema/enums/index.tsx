import React from 'react';
import $masterEnum from './enum-info.json';
import { useFormContext } from 'react-hook-form';
import { CheckboxElement, TextFieldElement, SelectElement } from 'react-hook-form-mui';
import { standardizeOptions } from '../../util/standardizeOptions';

export type AdminTaskTypes = "unknown" | "mercari-promote" | "mercari-import-brands" | "mercari-import-shipping" | "mercari-import-taxonomy" | "mercari-import-hashtags" | "mercari-import-custom-item-fields";
export type AmperageUnits = "A" | "mA";
export type AngleUnitOfMeasure = "°";
export type ApplianceTypes = "bread-maker" | "coffee-maker" | "dehydrator" | "electric-kettle" | "food-processor" | "hand-mixer" | "ice-cream-maker" | "indoor-grill" | "juicer" | "microwave" | "mixer" | "rice-cooker" | "soda-maker" | "toaster" | "toaster-oven" | "waffle-iron";
export type AspectRatios = "16:10" | "16:9" | "4:3" | "5:3" | "5:4";
export type AuctionSites = "storage-treasures" | "lockerfox";
export type AutofocusTechnologies = "selective-single" | "multi" | "single" | "live-view" | "contrast-detection" | "hybrid" | "phase-detection";
export type AwardNames = "oscar" | "emmy" | "tony" | "pulitzer" | "grammy" | "hugo" | "ny-times" | "unknown";
export type AwardStatus = "unclear" | "won" | "nominated";
export type BacklineTypes = "bare" | "bow" | "open" | "strappy" | "u-shape" | "v-shape" | "x-cross";
export type ApparelAccessoryTypes = "belt" | "carholder" | "gloves" | "handkerchief" | "turban" | "umbrella" | "wallet" | "fascinator";

export type BagTypes = "baguette" | "barrel" | "clutch" | "doctor" | "duffel" | "flap" | "frame"  | "quilited" | "saddle" |"shopper" | "wristlet" | "backpack" | "bag" | "briefcase" | "bucket" | "cosmetic" | "cross-body" | "messenger" | "hobo" | "satchel" | "shoulder" | "tote" | "fanny-pack";
export type HeadAccessoryTypes = "bandana" | "bow-tie" | "collar-stay" | "hat" | "ballcap" | "sunglasses" | "tie" | "hair-accessory" | "headband" | "hijab" | "scarf";

export type BarcodeTypes = "upc" | "ean" | "isbn-10" | "isbn-13" | "locator" | "sku" | "unknown";
export type BatteryTypes = "AA" | "AAA" | "C" | "D" | "CR2032" | "9V" | "li-ion";
export type BookGenres = "fiction" | "history" | "mystery" | "sci-fi" | "biography" | "young-adult-fiction" | "romance" | "childrens" | "self-help" | "fantasy" | "poetry" | "cookbook" | "social-science" | "travel" | "reference-study" | "photography" | "business" | "technology" | "politics";
export type BookTypes = "hb" | "pb" | "bb" | "tb";
export type BootTypes = "ankle & bootie" | "mid-calf" | "knee-high" | "over-the-knee";
export type BottomTypes = "5-pocket" | "bermuda-shorts" | "bermuda" | "boot-cut" | "bush-pants" | "cargo-pants" | "cargo" | "carpenter" | "flare" | "hot-pants" | "jodhpurs" | "jumpsuit" | "pegged" | "skinny" | "skort" | "stirrup" | "straight" | "sweat-pants" | "wide-leg";
export type ShortsTypes = 'gym-shorts' | 'board-shorts' | 'cargo-shorts' | 'casual-shorts' | 'corduroy-shorts' | 'dress-shorts' | 'board-swim-trunks' | 'bermuda-shorts' | 'bike-shorts' | 'high-waisted-shorts' | 'skort' | 'short-shorts' | 'denim-shorts';	

export type BraTypes = "bralette" | "bullet" | "plunge" | "push-up" | "soft-cup" | "sport" | "strapless" | "triangle" | "underwire";
export type CableTypes = "data" | "power" | "video";
export type CaliperSizeUnitOfMeasure = "mm" | "″";
export type CameraConnectionTypes = "ethernet" | "hdmi" | "micro-hdmi" | "micro-usb" | "usb";
export type CameraFlashTypes = "built-in" | "hotshoe" | "studio";
export type CameraSizes = "compact" | "slr-style" | "large-sensor";
export type CapacityUnitOfMeasure = "KB" | "MB" | "GB" | "TB";
export type CasLatency = "CL6" | "CL36" | "CL38" | "CL22" | "CL3" | "CL19" | "CL18" | "CL17" | "CL15" | "CL11" | "CL16" | "CL7" | "CL9" | "CL40" | "CL42";
export type CellCarriers = "at&t" | "blue" | "boost" | "consumer-cellular" | "cricket" | "h20" | "net-10" | "simple" | "sprint" | "straight-talk" | "t-mobile" | "ting" | "total" | "tracfone" | "unlocked" | "us-celluar" | "verizon" | "virgin";
export type ClosureTypes = "backstrap" | "buckle" | "bungee" | "button" | "clip" | "drawstring" | "half-zip" | "hook & bar" | "hook & eye" | "hook & loop" | "lace-up" | "magnetic" | "pull-on" | "slip-on" | "snap" | "speed laces" | "tie" | "zipper";
export type ClubTypes = "iron" | "driver" | "putter" | "wedge";
export type CollarTypes = "button-down" | "classic" | "club" | "mandarin" | "spread" | "wing-tip" | "band" | "camp" | "collarless" | "cutaway" | "hidden-button-down" | "lapel" | "point" | "tab";
export type CompatibleDevices = "desktop-computers" | "laptop-computers" | "smart-phones" | "tablet" | "e-readers";
export type CompatibleMountings = "canon-ef" | "canon-rf" | "fujifilm-x" | "micro-4/3" | "nikon-1" | "nikon-f" | "sony-e";
export type Connectivity = "bluetooth" | "esata" | "ethernet" | "firewire" | "hdmi" | "sata" | "usb";
export type ConnectorGenders = "m" | "f";
export type ConsoleTypes = "nes" | "snes" | "n64" | "gameboy" | "gameboy-advance" | "ds" | "ps1" | "ps2" | "ps3" | "ps4" | "ps5" | "wii" | "xbox";
export type ContributorRoles = "author" | "illustrator" | "publisher" | "actor" | "director" | "producer" | "studio" | "performer" | "songwriter";
export type Countries = "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
export type Coverstocks = "reactive-resin";
export type CuffTypes = "angle-cut" | "french" | "neapolitan" | "one-button" | "rounded" | "two-button" | "barrel" | "double" | "ribbed" | "single";
export type DataConnectorTypes = "usb-micro-b-superspeed" | "lightning" | "usb-3-micro-b" | "usb-3-type-a-f" | "usb-3-type-a-m" | "usb-3-type-b" | "usb-micro-a" | "usb-mini-a" | "usb-type-a-f" | "usb-type-a-m" | "usb-type-b-f" | "usb-type-b-m" | "usb-type-c-f" | "usb-type-c-m";
export type DataTransferRateUnitOfMeasure = "MB/s" | "MBit/s";
export type DensityUnitOfMeasure = "g/cm³" | "lb/floz";
export type DetailsTypes = "apparel" | "apparel/accessories" | "apparel/bottoms" | "apparel/bottoms/legged" | "apparel/bras" | "apparel/bras/swimsuit" | "apparel/footwear" | "apparel/tops" | "cables" | "cables/data" | "cables/power" | "cables/video" | "electronics" | "electronics/visual" | "electronics/visual/cell-phones" | "electronics/visual/camera" | "electronics/computer-components" | "electronics/computer-components/drives" | "electronics/computer-components/ram" | "electronics/computer-components/battery" | "electronics/computer-components/networking" | "electronics/kitchen-appliances" | "home-goods" | "home-goods/decor" | "home-goods/decor/wall-art" | "home-goods/dinnerware" | "home-goods/flatware" | "home-goods/glassware" | "media" | "media/books" | "media/music" | "media/video-games" | "media/videos" | "media/videos/film" | "media/videos/tv-series" | "office-goods" | "sporting-goods" | "sporting-goods/golf" | "sporting-goods/golf/clubs" | "sporting-goods/tennis" | "sporting-goods/tennis/rackets" | "sporting-goods/bowling" | "sporting-goods/bowling/balls" | "general" | "jewelry" | "jewelry/precious-metal" | "jewelry/costume" | "toys" | "toys/board-games" | "toys/stuffed-animals";
export type DinnerwareTypes = "bread-butter" | "mug" | "dinner" | "salad";
export type DisplayFixtureTypes = "articulating" | "fixed" | "tilting";
export type DisplayTypes = "amoled" | "lcd" | "oled";
export type DistanceUnitOfMeasure = "ft";
export type DressTypes = "1-shoulder" | "a-line" | "ball-gown" | "jumper-dress" | "maxi" | "wrap-dress" | "romper" | "maxi" | "above-knee" | "knee-length" | "midi" | "high-low";
export type DriveFormFactors = "2.5" | "3.5";
export type DriveInterfaces = "raid" | "fiber" | "pata" | "sas" | "sata" | "sataii" | "sataiii" | "scsi";
export type DriveTypes = "int" | "ext";
export type EarringBackTypes = "clip-on" | "fish-hoob" | "screw-back" | "snap-back";
export type EarringFrontTypes = "bajoran" | "barbell" | "c-hoop" | "cartilage" | "chain-ear-cuff" | "chain" | "chandeliers" | "cluster" | "crawler" | "cuff" | "dangle-2" | "dangle" | "drop-2" | "drop" | "hoop-2" | "hoop" | "huggies" | "jacket" | "lobe" | "pierced" | "stud" | "tassel" | "teardrop" | "threader" | "two-sided";
export type EmmyAwardCategories = "comedy" | "drama" | "limited" | "reality" | "variety" | "talk" | "movie" | "directing-comedy" | "directing-drama" | "directing-limited" | "directing-variety" | "writing-comedy" | "writing-drama" | "writing-limited" | "writing-variety" | "actor-comedy" | "actor-drama" | "actor-limited" | "actress-comedy" | "actress-drama" | "actress-limited" | "supporting-actor-comedy" | "supporting-actor-drama" | "supporting-actor-limited" | "supporting-actress-comedy" | "supporting-actress-drama" | "supporting-actress-limited" | "documentary-series" | "documentary-special" | "animated";
export type ESRBRatings = "E" | "E10+" | "T" | "M" | "AO" | "RP" | "RPLM" | "NR";
export type FabricTypes = "metallic" | "acrylic" | "cashmere" | "cotton" | "denim" | "lace" | "leather" | "linen" | "modal" | "nylon" | "organicCotton" | "polyester" | "rayon" | "satin" | "silk" | "spandex" | "suede" | "velvet" | "viscose" | "wool";
export type FacePOV = "barcode" | "inner" | "tag" | "defect" | "enhancer" | "logo" | "product-info";
export type FaceX = "left" | "right";
export type FaceY = "front" | "back";
export type FaceZ = "upper" | "lower";
export type FileFormats = "asf" | "flv" | "mjpeg" | "mkv" | "mov" | "mpeg-vx" | "xavc" | "avchd" | "avi" | "dng" | "jpeg" | "mp4" | "mpeg-4" | "raw";
export type Finishes = "matte";
export type FitTypes = "loose" | "relaxed" | "athletic" | "classic" | "fitted" | "oversized" | "modern" | "regular" | "skinny" | "slim" | "snug" | "straight" | "tailored";
export type Flags = "isMediaMail" | "isDiscontinued" | "isRare" | "isVintage" | "isCollectible" | "hasManual" | "isUnopened" | "isDirectorsEdition" | "isCollectorsEdition" | "isWidescreen" | "isSubtitled" | "isClosedCaptioned" | "isUnrated";
export type FlatwareTypes = "salad-fork" | "dinner-fork" | "spoon" | "butter-knife";
export type FlexTypes = "ladies" | "regular" | "senior" | "stiff";
export type FocusDescriptions = "active" | "hybrid" | "passive";
export type FocusTypes = "auto" | "fixed" | "manual";
export type GarmentLengths = "extra-long" | "extra-short" | "long" | "short" | "standard";
export type Genders = "mens" | "womens" | "boys" | "girls" | "unisex";
export type GrammyAwardCategories = "album" | "record" | "song" | "artist" | "songwriter" | "producer" | "pop-solo" | "pop-duo" | "pop-vocal" | "dance" | "dance-pop" | "dance-album" | "remix" | "rock" | "metal" | "rock-song" | "rock-album" | "alternative" | "alternative-album" | "rnb" | "traditional-rnb" | "rnb-song" | "progressive-rnb" | "rnb-album" | "rap" | "melodic-rap" | "rap-song" | "rap-album" | "spoken-word" | "musical-theatre" | "country-solo" | "country-duo" | "country-song" | "country-album" | "bluegrass" | "folk" | "americana-album" | "americana" | "american-roots" | "traditional-blues" | "contemporary-blues" | "regional-roots" | "gospel" | "gospel-album" | "contemporary-christian" | "contemporary-christian-album" | "traditional-pop" | "jazz" | "jazz-vocal" | "jazz-instrumental" | "large-jazz" | "latin-jazz" | "alternative-jazz" | "latin-pop" | "musica-urbana" | "latin-rock" | "musica mexicana" | "tropical-latin" | "global-music" | "raggae" | "new-age" | "childrens" | "comedy" | "audio-book" | "compilation" | "soundtrack" | "soundtrack-video-games" | "song-visual-media" | "music-video" | "music-film";
export type HandOrientations = "rh" | "lh";
export type HatTypes = "baseball-cap" | "beanie" | "bowler" | "bucket" | "cowboy" | "fedora";
export type HeightMaps = "high-top" | "low-top" | "mid-top";
export type HugoAwardCategories = "novel" | "novella" | "novelette" | "short-story" | "series" | "graphic-story" | "fan-writer" | "game" | "related-work";
export type ImageCaptureTypes = "stills" | "video";
export type IndividualPrefix = "dr" | "lord" | "lady";
export type IndividualSuffix = "jr" | "sr" | "iii" | "esq" | "phd" | "md";
export type IronTypes = "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type ItemConditions = "new" | "like-new" | "good" | "fair" | "poor" | "parts";
export type ItemDispositions = "not-listed" | "ready-to-list" | "listed" | "removed" | "sold" | "damaged" | "destroyed" | "remediation";
export type JacketTypes = "baseball" | "biker" | "blazer" | "bomber" | "denim" | "double-breasted" | "down" | "lumber" | "mackinaw" | "nehru" | "safari" | "single-breasted" | "tailored" | "western";
export type JeansTypes = "501" | "505" | "508" | "510" | "511" | "513" | "514" | "517" | "527" | "550" | "559" | "560" | "562" | "569";
export type JpegQualityLevels = "basic" | "fine" | "normal";
export type LaneConditions = "dry" | "medium" | "medium-heavy" | "heavy";
export type Languages = "en" | "es" | "ja";
export type LapelTypes = "chesterfield" | "clover" | "fish-mouth" | "framed" | "l-shaped" | "napoleone" | "notch" | "notched-shawl" | "peak" | "shawl" | "t-shaped" | "tab" | "tuxedo" | "ulster";
export type OuterwearTypes = "cape" | "fleece" | "bomber" | "jean" | "military" | "leather" | "parka" | "peacoat" | "puffer" | "raincoat" | "trenchcoat" | "baseball" | "vest" | "windbreaker" | "winter" | "hunting";

export type MaterialStyles = "corduroys" | "denim" | "khakis" | "leather" | "linen" | "leather"
;
export type LegStyles = "baggy" | "bootcut" | "capri" | "cropped" | "flare" | "relaxed" | "skinny" | "slim" | "slimbootcut" | "straight" | "wide" | "short-shorts" | "skort" | "leggings"
;
// "ankle" | "baggy" | "cropped" | "boot-cut" | "flare" | "skinny" | "straight" | "tapered" | "trouser" | "wide";
export type SweaterTypes =
    | 'cardigan'
    | 'crewneck-sweater'
    | 'full-zip-sweater'
    | 'polo-sweater'
    | 'turtleneck-sweater'
    | 'v-neck-sweater'
    | 'vest'
    | 'collared-sweater'
    | 'henley'
    | 'mock-sweater'
    | 'scoop-sweater'
    | 'shrug-sweater'
    | 'sleeveless-sweater'
    | 'sweater-vest'
    | 'maternity-sweater';

export type LengthUnitOfMeasure = "″" | "cm";
export type LensType = "fisheye" | "macro" | "telephoto" | "wide-angle";
export type LifestyleTypes = "business casual" | "casual" | "club" | "comfort" | "evening" | "formal";
export type Materials = "aluminum";
export type MemoryFormFactors = "dimm" | "rdimm" | "sodimm";
export type MemorySpeedUnitOfMeasure = "MHz";
export type MemoryTypes = "ddr" | "ddr2" | "ddr3" | "ddr4" | "ddr5";
export type MetalTypes = "brass" | "copper" | "nickel" | "steel" | "tin" | "zinc" | "gold" | "silver" | "platinum" | "palladium" | "gold-18ct-yellow" | "gold-18ct-white" | "gold-14ct" | "gold-9ct" | "gold-22ct" | "sterling-silver" | "platinum-950";
export type MeteringModes = "center-weighted" | "evaluative" | "spot";
export type MovieGenres = "horror" | "sci-fi" | "action" | "classic" | "family" | "comedy" | "drama" | "thriller" | "documentary" | "western" | "romance" | "anime" | "mystery" | "musical" | "sports";
export type MovieRatings = "G" | "PG" | "PG-13" | "R" | "X" | "UR" | "NR";
export type MovieRuntimeUnitOfMeasure = "m";
export type MusicDurationUnitOfMeasure = "s";
export type MusicFormatTypes = "cd" | "cassette" | "lp" | "8-track";
export type MusicGenres = "pop" | "rock" | "rhythm-and-blues" | "hip-hop" | "country" | "jazz" | "blues" | "electronic-dance" | "heavy-metal" | "classical" | "punk-rock" | "alternative-rock" | "funk" | "soul" | "folk" | "reggae" | "indie-rock" | "latin" | "techno" | "easy-listening" | "jungle" | "dubstep" | "ska" | "industrial" | "new-wave";
export type NeckTypes = "boat" | "choker" | "collared" | "crew" | "cowl" | "halter" | "high" | "jewel" | "queen-anne" | "scoop" | "spaghetti-strap" | "sweetheart" | "v" | "henley" | "hooded" | "mandarin" | "mock" | "notch" | "one-shoulder" | "sailor-collar" | "shawl" | "turtle";
export type Networks = "abc" | "cbs" | "nbc" | "wb" | "hbo" | "showtime" | "fox";
export type NyTimesAwardCategories = "fiction" | "nonfiction" | "childrens";
export type OperatingSystemNames = "unknown" | "android" | "ios" | "blackberry" | "linux" | "nucleus" | "symbian" | "macOS" | "fire" | "windows";
export type OperatingSystems = "android" | "blackbery" | "ios" | "linux" | "nucleus" | "symbian" | "amazon-fire";
export type OscarAwardCategories = "picture" | "actor" | "actress" | "director" | "supporting-actor" | "supporting-actress" | "original-screenplay" | "song" | "cinematography" | "design" | "adapted-screenplay" | "sound" | "animated" | "editing" | "score" | "effects" | "short-documentary" | "documentary" | "international" | "costume" | "makeup" | "animated-short" | "casting";
export type PayorTypes = "buyer" | "seller";
export type PhotoSensorTechnologies = "bsi-cmos" | "ccd" | "cmos" | "mos";
export type PocketTypes = "5-pocket" | "cargo" | "carpenter" | "coin" | "diagonal-patch" | "diagonal-with-zipped" | "embellished" | "flap-with-belt" | "flap-with-button" | "flap" | "oval" | "patch" | "seamed" | "slit-with-zipper" | "stiched-round" | "traditional";
export type PortConnectorTypes = "at-keyboard-f" | "at-keyboard-m" | "e-sata" | "ethernet" | "firewire-400" | "firewire-800" | "firewire" | "gameport" | "ide-40pin-port" | "ide-40pin" | "internal-50-pin-scsi-f" | "internal-50-pin-scsi-m" | "internal-68-pin-scsi-f" | "internal-68-pin-scsi-m" | "modem" | "parallel-36-pin" | "parallel-f" | "parallel-m" | "ps-2-f" | "ps-2-m" | "sata-type-a" | "scsi-8mm-68pin" | "scsi-micro-d850-m" | "scsi-micro-d868-f" | "scsi-micro-d868-m" | "serial-rs232-f" | "serial-rs232-m" | "thunderbolt";
export type PowerConnectorTypes = "iec-c13-14" | "iec-c13" | "iec-c14-m" | "iec-c14" | "iec-c15" | "iec-c16" | "iec-c19" | "C18" | "C22" | "iec-c20" | "iec-c05" | "iec-c6" | "iec-c07" | "iec-c08" | "nema-1-15p" | "nema-1-15r" | "nema-5-15p" | "nema-5-15r" | "nema-5-20p" | "nema-5-20r" | "np-iec-c7" | "np-iec-c8";
export type PowerConsumptionUnitOfMeasure = "Wh";
export type PowerTypes = "battery" | "ac" | "both";
export type ProductColors = "silver" | "gold" | "yellow" | "brown" | "orange" | "pink" | "red" | "purple" | "blue" | "green" | "black" | "white" | "gray" | "beige";
export type ProductImageDisposition = "ready" | "uploaded" | "bg-removal" | "pending-approval";
export type ProductImageType = "original" | "rembg";
export type Provinces = "AB" | "AK" | "AL" | "AR" | "AZ" | "BC" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "HI" | "IA" | "ID" | "IL" | "IN" | "KS" | "KY" | "LA" | "MA" | "MB" | "MD" | "ME" | "MI" | "MN" | "MO" | "MS" | "MT" | "NB" | "NC" | "ND" | "NE" | "NH" | "NJ" | "NL" | "NM" | "NS" | "NT" | "NU" | "NV" | "NY" | "OH" | "OK" | "ON" | "OR" | "PA" | "PE" | "PR" | "QC" | "RI" | "SC" | "SD" | "SK" | "TN" | "TX" | "UT" | "VA" | "VT" | "WA" | "WI" | "WV" | "WY" | "YT";
export type PulizerPrizeCategories = "biography" | "memoir" | "history" | "nonfiction" | "fiction" | "poetry" | "drama" | "music";
export type RateOfEnergyCapacityUnitOfMeasure = "mAh";
export type ResolutionUnitOfMeasure = "MP";
export type RingTypes = "anniversary-band" | "antique" | "baguette" | "band" | "beaded" | "bezel" | "birthstone" | "bypass" | "cathedral" | "chain" | "channel" | "charm" | "claddagh" | "cluster" | "cocktail" | "college" | "disconnected" | "dome" | "engagement" | "eternity" | "glass" | "graphic" | "halo" | "invisible" | "mood" | "nugget" | "pave" | "promise" | "prong" | "signet" | "solitaire" | "spinner" | "stack" | "statement" | "station" | "tension" | "triology" | "triple" | "trumb" | "wedding-band" | "wrap";
export type RiseTypes = "high-rise" | "mid-rise" | "low-rise";
export type RnBusinessType = "importer" | "unknown" | "manufacturing" | "wholesaler" | "mail-order";
export type RnCompanyType = "other" | "corporation";
export type RnMaterial = "wool";
export type RnType = "wpl" | "rn";
export type RotationalSpeedUnitOfMeasure = "rpm";
export type ShaftTypes = "graphite" | "steel";
export type ShapeTypes = "hexagon" | "square" | "rectangle";
export type Shippers = "usps-ground" | "usps-media" | "ups-surepost" | "fedex-ground" | "ups-ground" | "fedex-home";
export type ShippingSpeeds = "media-mail" | "standard";
export type YouthSize = '0-24M' | '2T-5T' | '4T+';
export type CasualShirtTypes = "camisole" | "jersey" | "polo" | "rugby" | "snow-bib" | "sweater" | "sweatshirt" | "tank-top" | "t-shirt" | "tube-top" | "tunic";
export type FormalShirtTypes = "blazer" | "blouse" | "button-down" | "cardigan" | "fitted" | "full-zip" | "hawaiian" | "knit-top" | "sport-coat" | "suit-jacket" | "vest";

export type ShirtTypes = "blouse" | "dress-shirt" | "flannel-shirt" | "hawaiian-shirt" | "henley" | "hoody" | "jacket" | "jersey" | "polo" | "sleeveless-shirt" | "smock" | "sweater" | "sweatshirt" | "t-shirt" | "tank-top" | "tube-top" | "tunic" | "turtleneck" | "tuxedo" | "v-neck-shirt"; // "blazer" "camisole"
export type PantStyles = "athletic" | "bermuda" | "bike" | "boyfriend" | "board" | "cargo" | "carpenter" | "casual" | "dress" | "high-waisted" | "overalls" | "pleated" | "short-shorts" | "skort" | "leggings";

export type ShoeHeelTypes = "chunky" | "cone" | "cuban" | "curved" | "flared" | "italian" | "kitten" | "luigi-xv" | "spool" | "stiletto" | "wedge" | "block heel" | "platform";
export type FootwearTypes = "sneakers" | "fashion-sneakers" | "loafers" | "clogs" | "boots" | "mules" | "oxfords" | "outdoors" | "sandals" | "slip-ons" | "slippers" | "work-shoes" | "safety-shoes" | "flats" | "heels" | "hunting";
export type JewelryTypes = "bracelet" | "cufflinks" | "earrings" | "necklace" | "pin" | "ring" | "watch" | "nose-ring" | "toe-ring";

export type ShoeTypes = "ankle-boot" | "ankle-strap" | "clog" | "country" | "deck" | "desert" | "dockside" | "espadrilla" | "espadrille" | "flip-flop" | "frye" | "jockey-boot" | "loafer" | "mary-jane" | "mocassin" | "moccasin" | "monk" | "mule" | "over-the-knee-boot" | "oxford" | "penny-loafer" | "pump" | "saddle" | "sandal" | "sling-back" | "slip-on" | "slipper" | "sneaker" | "snow-boot" | "t-strap" | "wellington" | "western-boot" | "wing-tip" | "winkle-picker";
export type ActivewearTypes =
    | 'athletic-dress'
    | 'athletic-hoodie'
    | 'athletic-long-sleeve-shirt'
    | 'athletic-short-sleeve-shirt'
    | 'athletic-t-shirt'
    | 'athletic-tank-top'
    | 'athletic-swimwear'
    | 'athletic-polo'
    | 'athletic-leggings'
    | 'athletic-pants'
    | 'athletic-skorts'
    | 'athletic-skirts'
    | 'athletic-tights'
    | 'athletic-sweatsuit'
    | 'jersey'
    | 'activewear-jacket'
    | 'activewear-shorts'
    | 'activewear-snow-pants'
    | 'activewear-socks'
    | 'activewear-sports-bra'
    | 'activewear-track-jacket'
    | 'activewear-track-pants'
    | 'activewear-track-suit'
    | 'activewear-vest'
    | 'activewear-snow-bib'
    | 'activewear-snowsuit';
export type BlazerTypes = 'double breasted' | 'one button' | 'two button' | 'three button' | 'four button';
export type ShoeWidths = "extra-narrow" | "extra-wide" | "medium" | "narrow" | "wide";
export type ShootingModes = "automatic" | "easy" | "landscape" | "manual" | "movie" | "portrait" | "sports";
export type SkillLevels = "amateur" | "novice" | "professional";
export type SkirtTypes = "a-line" | "asymmetrical" | "bubble" | "full" | "maxi" | "mini" | "peasant" | "pleated" | "pencil" | "tiered" | "wrap" | "midi" | "pencil" | "tulip";
export type SleepwearTypes = "robe" | "chemise" | "duster" | "negligee" | "nightshirt" | "pajamas" | "nightgown" | "teddy" | "nightgown" |  "pajama-top" | "pajama-bottom";
export type SleeveLengths = "3/4 sleeve" | "half" | "short" | "long" | "sleeveless";
export type SleeveTypes = "balloon" | "cap" | "cold-shoulder" | "cuff" | "flutter" | "batwing" | "bell" | "bishop" | "bracelet" | "butterfly" | "button-tab" | "cape" | "circular-cap" | "cowl" | "drop-shoulder" | "french" | "juliet" | "kimono" | "lantern" | "layered" | "leg-of-mutton" | "peasant" | "petal" | "poet" | "puffed" | "raglan" | "shirt" | "ruffle" | "split";
export type StrapTypes = "adjustable-strap" | "ankle-strap" | "double-strap" | "padded-strap" | "single-strap" | "slingback-strap" | "strapless" | "t-strap" | "toe-strap" | "x-strap";
export type SwimwearTypes = "surf-trunks" | "swim-trunks" | "board-trunks" | "speedo" | "beach-accessories" | "cover-up" | "one-piece" | "two-piece";
export type UndergarmentTypes = "socks" | "bra" | "g-string" | "thong" | "panties" | "thermals" | "briefs" | "boxers";
export type SuitTypes = "snowsuit" | "tracksuit" | "tuxedo" | "sweatsuit" | "dress-suit" | "pant-suit" | "skirt-suit" | "bodysuit";
export type SwimsuitBottomStyles = "brazilian" | "foldover" | "full-brief" | "high-cut" | "high-waist" | "hipster" | "skirted" | "thin-stringed" | "tie-side";
export type SwimsuitTopStyles = "bandeau" | "bow" | "boyshorts" | "bra" | "flounced" | "halter" | "plunge" | "tankini" | "triangle" | "twisted-bandeau" | "v-wire" | "one-shoulder" | "racerback & crossback" | "underwire";
export type TieTypes = "american-regimental" | "bolo" | "bow" | "british-regimental" | "club" | "knit";
export type ToeStyles = "almond" | "keyhole" | "open" | "peep" | "point" | "round" | "square" | "bump" | "cap" | "closed" | "composite" | "moc" | "plain" | "split" | "steel";
export type TonyAwardCategories = "play" | "musical" | "choreography" | "actor-play" | "actor-musical" | "featured-actor-play" | "featured-actor-musical" | "actress-play" | "actress-musical" | "featured-actress-play" | "featured-actress-musical";
export type TvRatings = "TV-Y" | "TV-Y7" | "TV-Y7-FV" | "TV-G" | "TV-PG" | "TV-14" | "TV-MA" | "Not Rated";
export type VideoCaptureResolutions = "1080p" | "2160p" | "240p" | "3840p" | "4320p" | "480p" | "720p";
export type VideoConnectorTypes = "apple-display-conn" | "coaxial-f" | "coaxial-m" | "component-f" | "component-m" | "displayport-f" | "displayport-m" | "div-d-single" | "dvi-d-dual-dms" | "dvi-d-dual" | "dvi-i-dual" | "dvi-i-single" | "hdmi-type-a-f" | "hdmi-type-a-m" | "micro-dvs" | "micro-hdmi-type-d" | "mini-displayport-f" | "mini-displayport-m" | "mini-dvs" | "mini-hdmi-type-c" | "rca" | "s-video" | "svga-f" | "svga-m";
export type VideoFormatTypes = "dvd" | "blu-ray" | "vhs";
export type VideoTypes = "tv-show" | "film";
export type ViewfinderTypes = "optical" | "lcd";
export type VoltageUnitOfMeasure = "V";
export type WattageUnitOfMeasure = "W";
export type WedgeTypes = "PW" | "AW" | "SW" | "LW";
export type WeightUnitOfMeasure = "g" | "lb" | "oz";
export type WhiteBalanceSettings = "auto" | "cloudy" | "custom" | "daylight" | "flash-torch" | "fluorescent" | "shade";
export type WirelessConnectionTypes = "bluetooth" | "infrared" | "nfc" | "wifi";
export type ZipperTypes = "close-end" | "end-to-end" | "head-to-head" | "open-end" | "two-ways";
export type ZoomTypes = "digital" | "ext-optical" | "optical";

// fs.writeFileSync('enum-info.json', JSON.stringify($masterEnum, null, '\t'));
export function CheckboxValueControl() {
    const formContext = useFormContext();
    return (
        <>
            <CheckboxElement name='value' label='Value' control={formContext.control} />
            <CheckboxElement name='unset' label='Value' hidden className='hidden' checked />
        </>
    );
}
export function TextValueControl() {
    const formContext = useFormContext();
    return <TextFieldElement name='value' label='Value' control={formContext.control} type='text' />;
}

function toSelectValueControl(enumKey: keyof typeof $me) {
    const options = standardizeOptions($masterEnum[enumKey as keyof typeof $masterEnum] as any).asArray.sort((l, r) => l.text?.localeCompare(r?.text ?? '') ?? 0);
    return function SelectValueControl() {
        const formContext = useFormContext();
        return <SelectElement name='value' label='Value' labelKey='text' valueKey='key' control={formContext.control} options={options} />;
    };
}
export const attributePaths = [
    {
        key: 'isMediaMail',
        text: 'flags.isMediaMail',
        Component: CheckboxValueControl
    },
    {
        key: 'hasInstructionManual',
        text: 'flags.hasInstructionManual',
        Component: CheckboxValueControl
    },
    {
        key: 'itemType',
        text: 'itemType',
        Component: TextValueControl
    },
    {
        key: 'applianceType',
        text: 'applianceType',
        Component: toSelectValueControl('applianceTypes')
    },
    {
        key: 'aspectRatio',
        text: 'aspectRatio',
        Component: toSelectValueControl('aspectRatios')
    },
    {
        key: 'autoFocusTechnology',
        text: 'autoFocusTechnology',
        Component: toSelectValueControl('autofocusTechnologies')
    },
    {
        key: 'backlingType',
        text: 'backlingType',
        Component: toSelectValueControl('backlineTypes')
    },
    {
        key: 'bagType',
        text: 'bagType',
        Component: toSelectValueControl('bagTypes')
    },
    {
        key: 'batteryType',
        text: 'batteryType',
        Component: toSelectValueControl('batteryTypes')
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
        key: 'bootType',
        text: 'bootType',
        Component: toSelectValueControl('bootTypes')
    },
    {
        key: 'bottomType',
        text: 'bottomType',
        Component: toSelectValueControl('bottomTypes')
    },
    {
        key: 'braType',
        text: 'braType',
        Component: toSelectValueControl('braTypes')
    },
    {
        key: 'cableType',
        text: 'cableType',
        Component: toSelectValueControl('cableTypes')
    },
    {
        key: 'connectivityTechnology',
        text: 'connectivityTechnology',
        Component: toSelectValueControl('cameraConnectionTypes')
    },
    {
        key: 'cameraFormFactor',
        text: 'cameraFormFactor',
        Component: toSelectValueControl('cameraSizes')
    },
    {
        key: 'casLatency',
        text: 'casLatency',
        Component: toSelectValueControl('casLatency')
    },
    {
        key: 'cellCarrier',
        text: 'cellCarrier',
        Component: toSelectValueControl('cellCarriers')
    },
    {
        key: 'closureType',
        text: 'closureType',
        Component: toSelectValueControl('closureTypes')
    },
    {
        key: 'clubType',
        text: 'clubType',
        Component: toSelectValueControl('clubTypes')
    },
    {
        key: 'collarType',
        text: 'collarType',
        Component: toSelectValueControl('collarTypes')
    },
    {
        key: 'compatibleDevices',
        text: 'compatibleDevices',
        Component: toSelectValueControl('compatibleDevices')
    },
    {
        key: 'compatibleMountings',
        text: 'compatibleMountings',
        Component: toSelectValueControl('compatibleMountings')
    },
    {
        key: 'connectivity',
        text: 'connectivity',
        Component: toSelectValueControl('connectivity')
    },
    {
        key: 'consoleType',
        text: 'consoleType',
        Component: toSelectValueControl('consoleTypes')
    },
    {
        key: 'coverstock',
        text: 'coverstock',
        Component: toSelectValueControl('coverstocks')
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
        key: 'driveForm',
        text: 'driveForm',
        Component: toSelectValueControl('driveFormFactors')
    },
    {
        key: 'driveInterface',
        text: 'driveInterface',
        Component: toSelectValueControl('driveInterfaces')
    },
    {
        key: 'driveType',
        text: 'driveType',
        Component: toSelectValueControl('driveTypes')
    },
    {
        key: 'ESRBRating',
        text: 'ESRBRating',
        Component: toSelectValueControl('ESRBRatings')
    },
    {
        key: 'finish',
        text: 'finish',
        Component: toSelectValueControl('finishes')
    },
    {
        key: 'fitType',
        text: 'fitType',
        Component: toSelectValueControl('fitTypes')
    },
    {
        key: 'flexType',
        text: 'flexType',
        Component: toSelectValueControl('flexTypes')
    },
    {
        key: 'focusType',
        text: 'focusType',
        Component: toSelectValueControl('focusTypes')
    },
    {
        key: 'lengthType',
        text: 'lengthType',
        Component: toSelectValueControl('garmentLengths')
    },
    {
        key: 'gender',
        text: 'gender',
        Component: toSelectValueControl('genders')
    },
    {
        key: 'handOrientation',
        text: 'handOrientation',
        Component: toSelectValueControl('handOrientations')
    },
    {
        key: 'hatType',
        text: 'hatType',
        Component: toSelectValueControl('hatTypes')
    },
    {
        key: 'heightMapType',
        text: 'heightMapType',
        Component: toSelectValueControl('heightMaps')
    },
    {
        key: 'ironType',
        text: 'ironType',
        Component: toSelectValueControl('ironTypes')
    },
    {
        key: 'condition',
        text: 'condition',
        Component: toSelectValueControl('itemConditions')
    },
    {
        key: 'disposition',
        text: 'disposition',
        Component: toSelectValueControl('itemDispositions')
    },
    {
        key: 'jacketType',
        text: 'jacketType',
        Component: toSelectValueControl('jacketTypes')
    },
    {
        key: 'jeansType',
        text: 'jeansType',
        Component: toSelectValueControl('jeansTypes')
    },
    {
        key: 'jpegQualityLevel',
        text: 'jpegQualityLevel',
        Component: toSelectValueControl('jpegQualityLevels')
    },
    {
        key: 'laneCondition',
        text: 'laneCondition',
        Component: toSelectValueControl('laneConditions')
    },
    {
        key: 'language',
        text: 'language',
        Component: toSelectValueControl('languages')
    },
    {
        key: 'lapelType',
        text: 'lapelType',
        Component: toSelectValueControl('lapelTypes')
    },
    {
        key: 'legStyle',
        text: 'legStyle',
        Component: toSelectValueControl('legStyles')
    },
    {
        key: 'lensType',
        text: 'lensType',
        Component: toSelectValueControl('lensType')
    },
    {
        key: 'lifestyleType',
        text: 'lifestyleType',
        Component: toSelectValueControl('lifestyleTypes')
    },
    {
        key: 'material',
        text: 'material',
        Component: toSelectValueControl('materials')
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
        key: 'metal',
        text: 'metal',
        Component: toSelectValueControl('metalTypes')
    },
    {
        key: 'videoGenre',
        text: 'videoGenre',
        Component: toSelectValueControl('movieGenres')
    },
    {
        key: 'movieRating',
        text: 'movieRating',
        Component: toSelectValueControl('movieRatings')
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
        key: 'neckType',
        text: 'neckType',
        Component: toSelectValueControl('neckTypes')
    },
    {
        key: 'os',
        text: 'os',
        Component: toSelectValueControl('operatingSystems')
    },
    {
        key: 'photoSensorTechnology',
        text: 'photoSensorTechnology',
        Component: toSelectValueControl('photoSensorTechnologies')
    },
    {
        key: 'pocketType',
        text: 'pocketType',
        Component: toSelectValueControl('pocketTypes')
    },
    {
        key: 'ringType',
        text: 'ringType',
        Component: toSelectValueControl('ringTypes')
    },
    {
        key: 'riseType',
        text: 'riseType',
        Component: toSelectValueControl('riseTypes')
    },
    {
        key: 'shaftType',
        text: 'shaftType',
        Component: toSelectValueControl('shaftTypes')
    },
    {
        key: 'shirtType',
        text: 'shirtType',
        Component: toSelectValueControl('shirtTypes')
    },
    {
        key: 'shoeHeelType',
        text: 'shoeHeelType',
        Component: toSelectValueControl('shoeHeelTypes')
    },
    {
        key: 'shoeType',
        text: 'shoeType',
        Component: toSelectValueControl('shoeTypes')
    },
    {
        key: 'shoeWidth',
        text: 'shoeWidth',
        Component: toSelectValueControl('shoeWidths')
    },
    {
        key: 'shootingModes',
        text: 'shootingModes',
        Component: toSelectValueControl('shootingModes')
    },
    {
        key: 'skillLevel',
        text: 'skillLevel',
        Component: toSelectValueControl('skillLevels')
    },
    {
        key: 'skirtType',
        text: 'skirtType',
        Component: toSelectValueControl('skirtTypes')
    },
    {
        key: 'sleepwearType',
        text: 'sleepwearType',
        Component: toSelectValueControl('sleepwearTypes')
    },
    {
        key: 'sleeveLength',
        text: 'sleeveLength',
        Component: toSelectValueControl('sleeveLengths')
    },
    {
        key: 'sleeveType',
        text: 'sleeveType',
        Component: toSelectValueControl('sleeveTypes')
    },
    {
        key: 'strapType',
        text: 'strapType',
        Component: toSelectValueControl('strapTypes')
    },
    {
        key: 'suitType',
        text: 'suitType',
        Component: toSelectValueControl('suitTypes')
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
        key: 'tieType',
        text: 'tieType',
        Component: toSelectValueControl('tieTypes')
    },
    {
        key: 'toeStyle',
        text: 'toeStyle',
        Component: toSelectValueControl('toeStyles')
    },
    {
        key: 'tvRating',
        text: 'tvRating',
        Component: toSelectValueControl('tvRatings')
    },
    {
        key: 'videoCaptureResolution',
        text: 'videoCaptureResolution',
        Component: toSelectValueControl('videoCaptureResolutions')
    },
    {
        key: 'videoFormat',
        text: 'videoFormat',
        Component: toSelectValueControl('videoFormatTypes')
    },
    {
        key: 'videoType',
        text: 'videoType',
        Component: toSelectValueControl('videoTypes')
    },
    {
        key: 'viewfinderType',
        text: 'viewfinderType',
        Component: toSelectValueControl('viewfinderTypes')
    },
    {
        key: 'wedgeType',
        text: 'wedgeType',
        Component: toSelectValueControl('wedgeTypes')
    },
    {
        key: 'whiteBalanceSetting',
        text: 'whiteBalanceSetting',
        Component: toSelectValueControl('whiteBalanceSettings')
    },
    {
        key: 'zipperType',
        text: 'zipperType',
        Component: toSelectValueControl('zipperTypes')
    },
    {
        key: 'zoomType',
        text: 'zoomType',
        Component: toSelectValueControl('zoomTypes')
    }
];

export type EnumName = keyof typeof $masterEnum;
// eslint-disable-next-line @typescript-eslint/ban-types
const $me = { ...$masterEnum, attributePaths: attributePaths } as Record<EnumName, EnumItem<string>[]> & Record<'attributePaths', { text: string; key: string; Component: React.FunctionComponent<{}> }[]>;
export default $me;

// console.log(Object.keys($me).join('\n'))
