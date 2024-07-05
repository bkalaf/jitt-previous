export const detailsTypes = {
    apparel: 'apparel',
    'apparel/bottoms': 'apparel/bottoms',
    'apparel/bottoms/legged': 'apparel/bottoms/legged',
    'apparel/bras': 'apparel/bras',
    'apparel/bras/swimsuit': 'apparel/bras/swimsuit',
    'apparel/footwear': 'apparel/footwear',
    'apparel/tops': 'apparel/tops',
    cables: 'cables',
    'cables/data': 'cables/data',
    'cables/power': 'cables/power',
    'cables/video': 'cables/video',
    electronics: 'electronics',
    'electronics/visual': 'electronics/visual',
    'electronics/visual/cell-phones': 'electronics/visual/cell-phones',
    'electronics/computer-components': 'electronics/computer-components',
    'electronics/computer-components/drives': 'electronics/computer-components/drives',
    'electronics/computer-components/ram': 'electronics/computer-components/ram',
    'electronics/computer-components/battery': 'electronics/computer-components/battery',
    'electronics/kitchen-appliances': 'electronics/kitchen-appliances',
    'home-goods': 'home-goods',
    'home-goods/decor': 'home-goods/decor',
    'home-goods/decor/wall-art': 'home-goods/decor/wall-art',
    'home-goods/dinnerware': 'home-goods/dinnerware',
    'home-goods/flatware': 'home-goods/flatware',
    'home-goods/glassware': 'home-goods/glassware',
    media: 'media',
    'media/books': 'media/books',
    'media/music': 'media/music',
    'media/video-games': 'media/video-games',
    'media/videos': 'media/videos',
    'media/videos/film': 'media/videos/film',
    'media/videos/tv-series': 'media/videos/tv-series',
    'sporting-goods': 'sporting-goods',
    'sporting-goods/golf': 'sporting-goods/golf',
    'sporting-goods/golf/clubs': 'sporting-goods/golf/clubs',
    'sporting-goods/tennis': 'sporting-goods/tennis',
    'sporting-goods/tennis/rackets': 'sporting-goods/tennis/rackets',
    'sporting-goods/bowling': 'sporting-goods/bowling',
    'sporting-goods/bowling/balls': 'sporting-goods/bowling/balls',
    general: 'general',
    jewelry: 'jewelry',
    'jewelry/precious-metal': 'jewelry/precious-metal',
    'jewelry/costume': 'jewelry/costume',
    toys: 'toys',
    'toys/board-games': 'toys/board-games',
    'toys/stuffed-animals': 'toys/stuffed-animals'

};

// console.log(JSON.stringify(Object.fromEntries(Object.keys(detailsTypes).map((x) => [x, x] as [string, string])), null, '\t'));

// console.log(
//     JSON.stringify(
//         Object.keys(detailsTypes).map((x) => ({
//             aliases: [],
//             key: x,
//             text: x
//         })),
//         null,
//         '\t'
//     )
// );

// console.log(`export type DetailTypes = ${Object.keys(detailsTypes).map(surroundQuotesIgnore).join(' | ').concat(';')}`);
