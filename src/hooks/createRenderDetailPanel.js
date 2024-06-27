"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRenderDetailPanel = exports.tabList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useWhyDidIUpdate_1 = require("./useWhyDidIUpdate");
const lab_1 = require("@mui/lab");
const material_1 = require("@mui/material");
const react_1 = require("react");
const useCollectionRoute_1 = require("./useCollectionRoute");
const Panel_1 = require("./Panel");
const ProductImageTab_1 = require("./ProductImageTab");
const ProductDetailsTab_1 = require("./ProductDetailsTab");
exports.tabList = {
    sku: {
        getProductImages: {
            value: 'getProductImages',
            key: 'getProductImages',
            label: 'Images',
            property: 'getProductImages',
            Component: ProductImageTab_1.ProductImageTab
        },
        getAttachments: {
            value: 'getAttachments',
            key: 'getAttachments',
            property: 'getAttachments',
            label: 'Attachments',
            Component: ProductImageTab_1.ProductImageTab
        }
    },
    product: {
        general: {
            value: 'general',
            key: 'general',
            label: 'General',
            detailType: 'general',
            objectType: 'generalDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        apparel: {
            value: 'apparel',
            key: 'apparel',
            label: 'Apparel',
            detailType: 'apparel',
            objectType: 'apparelDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        apparelTops: {
            value: 'apparelTops',
            key: 'apparelTops',
            label: 'Apparel - Tops',
            detailType: 'apparel/tops',
            objectType: 'apparelTopsDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        apparelBottoms: {
            value: 'apparelBottoms',
            key: 'apparelBottoms',
            label: 'Apparel - Bottoms',
            detailType: 'apparel/bottoms',
            objectType: 'apparelBottomsDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        apparelBras: {
            value: 'apparelBras',
            key: 'apparelBras',
            label: 'Apparel - Bras',
            detailType: 'apparel/bras',
            objectType: 'apparelBrasDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        apparelFootwear: {
            value: 'apparelFootwear',
            key: 'apparelFootwear',
            label: 'Apparel - Footwear',
            detailType: 'apparel/footwear',
            objectType: 'apparelFootwearDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        mediaDetails: {
            value: 'media',
            key: 'media',
            label: 'Media',
            detailType: 'media',
            objectType: 'mediaDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        mediaBooks: {
            value: 'mediaBooks',
            key: 'mediaBooks',
            label: 'Media - Books',
            detailType: 'media/books',
            objectType: 'mediaBooksDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        mediaMusic: {
            value: 'mediaMusic',
            key: 'mediaMusic',
            label: 'Media - Music',
            detailType: 'media/music',
            objectType: 'mediaMusicDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        mediaVideoGames: {
            value: 'mediaVideoGames',
            key: 'mediaVideoGames',
            label: 'Media - Video Games',
            detailType: 'media/video-games',
            objectType: 'mediaVideoGameDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        mediaVideos: {
            value: 'mediaVideos',
            key: 'mediaVideos',
            label: 'Media - Videos',
            detailType: 'media/videos',
            objectType: 'mediaVideoDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        mediaVideosTvSeries: {
            value: 'mediaVideosTvSeries',
            key: 'mediaVideosTvSeries',
            label: 'Media - Videos - TV Series',
            detailType: 'media/videos/tv-series',
            objectType: 'mediaVideosTvSeriesDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        mediaVideosFilm: {
            value: 'mediaVideosFilm',
            key: 'mediaVideosFilm',
            label: 'Media - Videos - Film',
            detailType: 'media/videos/film',
            objectType: 'mediaVideosFilmDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        cables: {
            value: 'cables',
            key: 'cables',
            label: 'Cables',
            detailType: 'cables',
            objectType: 'cablesDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        cablesData: {
            value: 'cablesData',
            key: 'cablesData',
            label: 'Cables - Data',
            detailType: 'cables/data',
            objectType: 'cablesDataDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        cablesPower: {
            value: 'cablesPower',
            key: 'cablesPower',
            label: 'Cables - Power',
            detailType: 'cables/power',
            objectType: 'cablesPowerDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        cablesVideo: {
            value: 'cablesVideo',
            key: 'cablesVideo',
            label: 'Cables - Video',
            detailType: 'cables/video',
            objectType: 'cablesVideoDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        cellPhones: {
            value: 'cellPhones',
            key: 'cellPhones',
            label: 'Electronics - Visual - Cell Phones',
            detailType: 'electronics/visual/cell-phones',
            objectType: 'cellPhonesDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        electronics: {
            value: 'electronics',
            key: 'electronics',
            label: 'Electronics',
            detailType: 'electronics',
            objectType: 'electronicsDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        visual: {
            value: 'visual',
            key: 'visual',
            label: 'Electronics - Visual',
            detailType: 'electronics/visual',
            objectType: 'electronicsVisualDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        kitchenAppliances: {
            value: 'kitchenAppliances',
            key: 'kitchenAppliances',
            label: 'Electronics - Kitchen Appliances',
            detailType: 'electronics/kitchen-appliances',
            objectType: 'kitchenAppliancesDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        homeGoods: {
            value: 'homeGoods',
            key: 'homeGoods',
            label: 'Home Goods',
            detailType: 'home-goods',
            objectType: 'homeGoodsDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        homeGoodsDecor: {
            value: 'homeGoodsDecor',
            key: 'homeGoodsDecor',
            label: 'Home Goods - Decor',
            detailType: 'home-goods/decor',
            objectType: 'homeGoodsDecorDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        homeGoodsDecorWallArt: {
            value: 'homeGoodsDecorWallArt',
            key: 'homeGoodsDecorWallArt',
            label: 'Home Goods - Decor - Wall Art',
            detailType: 'home-goods/decor/wall-art',
            objectType: 'homeGoodsDecorWallArtDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        homeGoodsDinnerware: {
            value: 'homeGoodsDinnerware',
            key: 'homeGoodsDinnerware',
            label: 'Home Goods - Dinnereware',
            detailType: 'home-goods/dinnerware',
            objectType: 'homeGoodsDinnerwareDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        homeGoodsFlatware: {
            value: 'homeGoodsFlatware',
            key: 'homeGoodsFlatware',
            label: 'Home Goods - Flatware',
            detailType: 'home-goods/flatware',
            objectType: 'homeGoodsFlatwareDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        sportingGoods: {
            value: 'sportingGoods',
            key: 'sportingGoods',
            label: 'Sporting Goods',
            detailType: 'sporting-goods',
            objectType: 'sportingGoodsDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        sportingGoodsGolfClubs: {
            value: 'sportingGoodsGolfClubs',
            key: 'sportingGoodsGolfClubs',
            label: 'Sporting Goods - Golf - Clubs',
            detailType: 'sporting-goods/golf/clubs',
            objectType: 'sportingGoodsGolfDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        toys: {
            value: 'toys',
            key: 'toys',
            label: 'Toys',
            detailType: 'toys',
            objectType: 'toysDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        boardGames: {
            value: 'boardGames',
            key: 'boardGames',
            label: 'Toys - Board Games',
            detailType: 'toys/board-games',
            objectType: 'toysBoardGameDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        jewelry: {
            value: 'jewelry',
            key: 'jewelry',
            label: 'Jewelry',
            detailType: 'jewelry',
            objectType: 'jewelryDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        jewelryPreciousMetal: {
            value: 'jewelryPreciousMetal',
            key: 'jewelryPreciousMetal',
            label: 'Jewelry - Precious Metal',
            detailType: 'jewelry/precious-metal',
            objectType: 'jewelryPreciousMetalDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        jewelryCostume: {
            value: 'jewelryCostume',
            key: 'jewelryCostume',
            label: 'Jewelry - Costume',
            detailType: 'jewelry/costume',
            objectType: 'jewelryCostumeDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        computerComponents: {
            value: 'computerComponents',
            key: 'computerComponents',
            label: 'Computer Components',
            detailType: 'electronics/computer-components',
            objectType: 'computerComponentsDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        computerComponentsDrives: {
            value: 'computerComponentsDrives',
            key: 'computerComponentsDrives',
            label: 'Computer Components - Drives',
            detailType: 'electronics/computer-components/drives',
            objectType: 'computerComponentsDrivesDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        computerComponentsRam: {
            value: 'computerComponentsRam',
            key: 'computerComponentRam',
            label: 'Computer Components - RAM',
            detailType: 'electronics/computer-components/ram',
            objectType: 'computerComponentsRamDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        },
        computerComponentsBattery: {
            value: 'computerComponentsBattery',
            key: 'computerComponentsBattery',
            label: 'Computer Components - Battery',
            detailType: 'electronics/computer-components/battery',
            objectType: 'computerComponentsBatteryDetails',
            Component: ProductDetailsTab_1.ProductDetailsTab
        }
    }
};
function CreateRenderDetailPanel(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('createRenderDetailPanel', props);
    const collection = (0, useCollectionRoute_1.useCollectionRoute)();
    const tabs = Object.values(exports.tabList[collection]);
    const [currentValue, setValue] = (0, react_1.useState)(tabs[0].key);
    const handleChange = (0, react_1.useCallback)((ev, newValue) => {
        setValue(newValue);
    }, []);
    const checkForDetailType = (0, react_1.useCallback)((type) => {
        if (type == null)
            return true;
        const types = typeof type === 'string' ? [type] : type;
        const product = props.row.original;
        return types.some((t) => product.detailTypes.includes(t));
    }, [props.row.original]);
    return ((0, jsx_runtime_1.jsx)(material_1.Container, { className: 'w-screen', children: (0, jsx_runtime_1.jsx)(material_1.Box, { className: 'w-full', children: (0, jsx_runtime_1.jsxs)(lab_1.TabContext, { value: currentValue, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { sx: { borderBottom: 1, borderColor: 'divider' }, children: (0, jsx_runtime_1.jsx)(lab_1.TabList, { onChange: handleChange, "aria-label": 'Tabs', children: tabs.map(({ value, label, detailType }) => checkForDetailType(detailType) && (0, jsx_runtime_1.jsx)(material_1.Tab, { label: label, value: value }, value)) }) }), tabs.map(({ value, Component, property, detailType, objectType }) => checkForDetailType(detailType) && ((0, jsx_runtime_1.jsx)(lab_1.TabPanel, { value: value, children: (0, jsx_runtime_1.jsx)(Panel_1.Panel, { Component: Component, property: property, original: props.row.original, objectType: objectType }) }, value)))] }) }) }));
}
exports.CreateRenderDetailPanel = CreateRenderDetailPanel;
//# sourceMappingURL=createRenderDetailPanel.js.map