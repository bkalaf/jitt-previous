"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$productInfo = exports.$hasDetailType = exports.$depend = void 0;
exports.$depend = {
    notZeroOrNull: (property, isLocal = false) => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: 0 }] }),
    notNilOrEmpty: (property, isLocal = false) => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: '' }] }),
    isZeroOrNull: (property, isLocal = false) => ({ isLocal, type: 'enable', property, dependency: ['or', { isNull: true }, { equalTo: 0 }] }),
    isTrue: (property, isLocal = false) => ({ isLocal, type: 'disable', property, dependency: ['or', { isNull: true }, { equalTo: false }] }),
    isFalse: (property, isLocal = false) => ({ isLocal, type: 'disable', property, dependency: { equalTo: true } }),
    equalTo: (property, equalTo, isLocal = false) => ({ isLocal, type: 'enable', property, dependency: { equalTo } }),
    notEqualTo: (property, equalTo, isLocal = false) => ({ isLocal, type: 'enable', property, dependency: ['not', { equalTo }] }),
    in: (property, isLocal = false) => (...values) => ({ isLocal, type: 'enable', property, dependency: { in: values } }),
    hasOneOf: (property, isLocal = false) => (...values) => ({ isLocal, type: 'enable', property, dependency: { hasOneOf: values } }),
    notIn: (property, isLocal = false) => (...values) => ({ isLocal, type: 'disable', property, dependency: { in: values } })
};
function hasDetailType(detailType) {
    return exports.$depend.hasOneOf('detailTypes')(detailType);
}
function propertyEqualTo(propertyName) {
    return (value) => exports.$depend.equalTo(propertyName, value);
}
function propertyOneOf(propertyName) {
    return (...values) => exports.$depend.in(propertyName)(...values);
}
const apparel = function () {
    return hasDetailType('apparel');
};
const tops = function () {
    return hasDetailType('apparel/tops');
};
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
exports.$hasDetailType = {
    apparel,
    cables,
    electronics,
    homeGoods,
    media,
    sportingGoods,
    jewelry,
    toys
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
    notNull: exports.$depend.notNilOrEmpty('shoeHeelType')
};
const $cableType = (type) => exports.$depend.equalTo('cableType', type);
const cableType = {
    data: $cableType('data'),
    power: $cableType('power'),
    video: $cableType('video')
};
exports.$productInfo = {
    gender,
    shoeHeelType,
    cableType
};
//# sourceMappingURL=$depend.js.map