import { MRT_RowData } from 'material-react-table';
import { DetailTypes, IAward, IContributor, IProduct } from '../../types';
import { AwardNames } from '../enums';

export const $depend = {
    notZeroOrNull: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: 0 as T[TKey] }] }),
    notNilOrEmpty: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: '' as T[TKey] }] }),
    isZeroOrNull: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: ['or', { isNull: true }, { equalTo: 0 as T[TKey] }] }),
    isTrue: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: false as T[TKey] }] }),
    isFalse: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: { equalTo: true as T[TKey] } }),
    equalTo: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, equalTo: T[TKey], isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: { equalTo } }),
    notEqualTo: <T extends MRT_RowData, TKey extends keyof T>(property: TKey, equalTo: T[TKey], isLocal = false): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: ['not', { equalTo }] }),
    in:
        <T extends MRT_RowData, TKey extends keyof T, TValue extends T[TKey] = T[TKey]>(property: TKey, isLocal = false) =>
        (...values: TValue[]): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: { in: values } }),
    hasOneOf:
        <T extends MRT_RowData, TKey extends keyof T = keyof T, TValue extends T[TKey] = T[TKey]>(property: TKey, isLocal = false) =>
        (...values: ArrayOf<TValue>[]): IDependency<T, TKey> => ({ isLocal, type: 'enable', property, dependency: { hasOneOf: values } }),
    notIn:
        <T extends MRT_RowData, TKey extends keyof T>(property: TKey, isLocal = false) =>
        (...values: T[TKey][]): IDependency<T, TKey> => ({ isLocal, type: 'disable', property, dependency: { in: values } }),
    and: (type: 'enable' | 'disable', left: IDependency<any, any>, right: IDependency<any, any>): IDependency<any, any> => {
        if (left.property !== right.property) throw new Error(`property mismatch on and: ${left.property} ${right.property}`);
        return {
            isLocal: left.isLocal,
            type,
            property: left.property,
            dependency: ['and', left.dependency, right.dependency] as IDependencyBinary<any, any>
        };
    },
    or: (type: 'enable' | 'disable', left: IDependency<any, any>, right: IDependency<any, any>): IDependency<any, any> => {
        if (left.property !== right.property) throw new Error(`property mismatch on or: ${left.property} ${right.property}`);
        return {
            isLocal: left.isLocal,
            type,
            property: left.property,
            dependency: ['or', left.dependency, right.dependency] as IDependencyBinary<any, any>
        };
    }
};

function hasDetailType(detailType: DetailTypes) {
    return $depend.hasOneOf<IProduct, 'detailTypes'>('detailTypes')(detailType);
}
function propertyEqualTo<TKey extends keyof IProduct & string>(propertyName: TKey) {
    return (value: IProduct[TKey]) => $depend.equalTo(propertyName, value);
}
function propertyOneOf<TKey extends keyof IProduct & string>(propertyName: TKey) {
    return (...values: IProduct[TKey][]) => $depend.in(propertyName)(...values);
}
function propOneOf<T extends MRT_RowData, TKey extends keyof T & string>(propertyName: TKey, isLocal = false) {
    return (...values: T[TKey][]) => $depend.in(propertyName, isLocal)(...values);
}
const apparel = function () {
    return hasDetailType('apparel');
};
const tops = function() {
    return hasDetailType('apparel/tops');
}
const bottoms = function () {
    return hasDetailType('apparel/bottoms');
};
const legged = function () {
    return hasDetailType('apparel/bottoms/legged');
};

const bras = function () {
    return hasDetailType('apparel/bras');
};
const swimsuit = function () {
    return hasDetailType('apparel/bras/swimsuit');
};
const footwear = function () {
    return hasDetailType('apparel/footwear');
};
const cables = function () {
    return hasDetailType('cables');
};
const dataCable = function () {
    return hasDetailType('cables/data');
};
const powerCable = function () {
    return hasDetailType('cables/power');
};
const videoCable = function () {
    return hasDetailType('cables/video');
};
const media = function () {
    return hasDetailType('media');
};
const books = function () {
    return hasDetailType('media/books');
};
const music = function () {
    return hasDetailType('media/music');
};
const videoGames = function () {
    return hasDetailType('media/video-games');
};
const videos = function () {
    return hasDetailType('media/videos');
};
const tvSeries = function () {
    return hasDetailType('media/videos/tv-series');
};
const film = function () {
    return hasDetailType('media/videos/film');
};
const computerComponents = function () {
    return hasDetailType('electronics/computer-components');
};
const drives = function () {
    return hasDetailType('electronics/computer-components/drives');
};
const ram = function () {
    return hasDetailType('electronics/computer-components/ram');
};
const electronics = function () {
    return hasDetailType('electronics');
};
const battery = function () {
    return hasDetailType('electronics/computer-components/battery');
};
const visual = function () {
    return hasDetailType('electronics/visual');
};
const cellPhones = function () {
    return hasDetailType('electronics/visual/cell-phones');
};
const kitchenAppliances = function () {
    return hasDetailType('electronics/kitchen-appliances');
};
const homeGoods = function () {
    return hasDetailType('home-goods');
};
const decor = function () {
    return hasDetailType('home-goods/decor');
};
const wallArt = function () {
    return hasDetailType('home-goods/decor/wall-art');
};
const dinnerware = function () {
    return hasDetailType('home-goods/dinnerware');
};
const flatware = function () {
    return hasDetailType('home-goods/flatware');
};
const glassware = function () {
    return hasDetailType('home-goods/glassware');
};

const sportingGoods = function () {
    return hasDetailType('sporting-goods');
};
const golf = function () {
    return hasDetailType('sporting-goods/golf');
};
const tennis = function () {
    return hasDetailType('sporting-goods/tennis');
};
const bowling = function () {
    return hasDetailType('sporting-goods/bowling');
};
const rackets = function () {
    return hasDetailType('sporting-goods/tennis/rackets');
};
const balls = function () {
    return hasDetailType('sporting-goods/bowling/balls');
};
const golfClubs = function () {
    return hasDetailType('sporting-goods/golf/clubs');
};
const preciousMetal = function () {
    return hasDetailType('jewelry/precious-metal');
};
const costume = function () {
    return hasDetailType('jewelry/costume');
};
const jewelry = function () {
    return hasDetailType('jewelry');
};
const toys = function () {
    return hasDetailType('toys');
};
const boardGames = function () {
    return hasDetailType('toys/board-games');
};
apparel.tops = tops;
bottoms.legged = legged;
apparel.bottoms = bottoms;
bras.swimsuit = swimsuit;
apparel.bras = bras;
apparel.footwear = footwear;

cables.data = dataCable;
cables.power = powerCable;
cables.video = videoCable;

media.books = books;
media.music = music;
media.videoGames = videoGames;
videos.tvSeries = tvSeries;
videos.film = film;
media.videos = videos;

golf.clubs = golfClubs;
sportingGoods.golf = golf;
tennis.rackets = rackets;
sportingGoods.tennis = tennis;
bowling.balls = balls;
sportingGoods.bowling = bowling;

electronics.kitchenAppliances = kitchenAppliances;
visual.cellPhones = cellPhones;
electronics.visual = visual;
computerComponents.ram = ram;
computerComponents.drives = drives;
computerComponents.battery = battery;
electronics.computerComponents = computerComponents;

decor.wallArt = wallArt;
homeGoods.decor = decor;
homeGoods.dinnerware = dinnerware;
homeGoods.flatware = flatware;
homeGoods.glassware = glassware;

toys.boardGames = boardGames;

jewelry.costume = costume;
jewelry.preciousMetal = preciousMetal;

export const $hasDetailType = {
    apparel,
    cables,
    electronics,
    homeGoods,
    media,
    sportingGoods,
    jewelry,
    toys
};
const role = {
    group: propOneOf<IContributor, 'role'>('role')('publisher', 'studio'),
    individual: propOneOf<IContributor, 'role'>('role')('actor', 'author', 'director', 'illustrator', 'songwriter', 'performer', 'producer'),
    forBook: propOneOf<IContributor, 'role'>('role')('author', 'illustrator', 'publisher'),
    forAlbum: propOneOf<IContributor, 'role'>('role')('performer', 'songwriter', 'studio'),
    forMovie: propOneOf<IContributor, 'role'>('role')('actor', 'director', 'producer', 'studio'),
    forTvSeries: propOneOf<IContributor, 'role'>('role')('actor', 'director', 'producer', 'studio'),
    allowCreditedAs: propOneOf<IContributor, 'role'>('role')('actor')
};
const gender = {
    womens: propertyEqualTo('gender')('womens'),
    mens: propertyEqualTo('gender')('mens'),
    adult: propertyOneOf('gender')('womens', 'mens'),
    boys: propertyEqualTo('gender')('boys'),
    girls: propertyEqualTo('gender')('girls'),
    youth: propertyOneOf('gender')('boys', 'girls'),
    male: propertyOneOf('gender')('mens', 'boys'),
    female: propertyOneOf('gender')('womens', 'girls')
};
const shoeHeelType = {
    notNull: $depend.notNilOrEmpty<IProduct, 'shoeHeelType'>('shoeHeelType')
};
const $cableType = (type: Exclude<IProduct['cableType'], undefined>) => $depend.equalTo<IProduct, 'cableType'>('cableType', type);

const cableType = {
    data: $cableType('data'),
    power: $cableType('power'),
    video: $cableType('video')
};
const andTopsBottoms = $depend.and('enable', $hasDetailType.apparel.tops(), $hasDetailType.apparel.bottoms());

const capacity = $depend.or('enable', $hasDetailType.electronics.computerComponents.ram(), $depend.or('enable', $hasDetailType.electronics.visual.cellPhones(), $hasDetailType.electronics.computerComponents.drives()));     

const awardName = {
    oscar: propOneOf<IAward<AwardNames>, 'name'>('name', true)('oscar'),
    emmy: propOneOf<IAward<AwardNames>, 'name'>('name', true)('emmy'),
    nyTimes: propOneOf<IAward<AwardNames>, 'name'>('name', true)('ny-times'),
    hugo: propOneOf<IAward<AwardNames>, 'name'>('name', true)('hugo'),
    pulitzer: propOneOf<IAward<AwardNames>, 'name'>('name', true)('pulitzer'),
    grammy: propOneOf<IAward<AwardNames>, 'name'>('name', true)('grammy'),
    tony: propOneOf<IAward<AwardNames>, 'name'>('name', true)('tony')
};
const clubType = {
    iron: propertyEqualTo('clubType')('iron'),
    driver: propertyEqualTo('clubType')('driver'),
    wedge: propertyEqualTo('clubType')('wedge')
}
const hasLength = $depend.notZeroOrNull('length.value');
const hasWidth = $depend.notZeroOrNull('width.value');

export const $productInfo = {
    gender,
    shoeHeelType,
    cableType,
    andTopsBottoms,
    contributorRole: role,
    awardName,
    clubType,
    hasCapacity: capacity,
    hasLength,
    hasWidth
};
