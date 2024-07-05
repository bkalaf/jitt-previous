import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Tab } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { useCollectionRoute } from './useCollectionRoute';
import { Panel } from './Panel';
import { ProductImageTab } from './ProductImageTab';
import { DetailTypes, IProduct } from '../types';
import { ProductDetailsTab } from './ProductDetailsTab';
import { detailsTypes } from '../schema/enums/detailsTypes';

export const tabList: Record<
    string,
    Record<string, { value: string; key: string; label: string; detailType: keyof typeof detailsTypes; Component: any; objectType: string } | { value: string; key: string; label: string; Component: any; property?: string }>
> = {
    sku: {
        getProductImages: {
            value: 'getProductImages',
            key: 'getProductImages',
            label: 'Images',
            property: 'getProductImages',
            Component: ProductImageTab
        },
        getAttachments: {
            value: 'getAttachments',
            key: 'getAttachments',
            property: 'getAttachments',
            label: 'Attachments',
            Component: ProductImageTab
        }
    },
    product: {
        general: {
            value: 'general',
            key: 'general',
            label: 'General',
            detailType: 'general',
            objectType: 'generalDetails',
            Component: ProductDetailsTab
        },
        apparel: {
            value: 'apparel',
            key: 'apparel',
            label: 'Apparel',
            detailType: 'apparel',
            objectType: 'apparelDetails',
            Component: ProductDetailsTab
        },
        apparelTops: {
            value: 'apparelTops',
            key: 'apparelTops',
            label: 'Apparel - Tops',
            detailType: 'apparel/tops',
            objectType: 'apparelTopsDetails',
            Component: ProductDetailsTab
        },
        apparelBottoms: {
            value: 'apparelBottoms',
            key: 'apparelBottoms',
            label: 'Apparel - Bottoms',
            detailType: 'apparel/bottoms',
            objectType: 'apparelBottomsDetails',
            Component: ProductDetailsTab
        },
        apparelBras: {
            value: 'apparelBras',
            key: 'apparelBras',
            label: 'Apparel - Bras',
            detailType: 'apparel/bras',
            objectType: 'apparelBrasDetails',
            Component: ProductDetailsTab
        },
        apparelFootwear: {
            value: 'apparelFootwear',
            key: 'apparelFootwear',
            label: 'Apparel - Footwear',
            detailType: 'apparel/footwear',
            objectType: 'apparelFootwearDetails',
            Component: ProductDetailsTab
        },
        mediaDetails: {
            value: 'media',
            key: 'media',
            label: 'Media',
            detailType: 'media',
            objectType: 'mediaDetails',
            Component: ProductDetailsTab
        },
        mediaBooks: {
            value: 'mediaBooks',
            key: 'mediaBooks',
            label: 'Media - Books',
            detailType: 'media/books',
            objectType: 'mediaBooksDetails',
            Component: ProductDetailsTab
        },
        mediaMusic: {
            value: 'mediaMusic',
            key: 'mediaMusic',
            label: 'Media - Music',
            detailType: 'media/music',
            objectType: 'mediaMusicDetails',
            Component: ProductDetailsTab
        },
        mediaVideoGames: {
            value: 'mediaVideoGames',
            key: 'mediaVideoGames',
            label: 'Media - Video Games',
            detailType: 'media/video-games',
            objectType: 'mediaVideoGameDetails',
            Component: ProductDetailsTab
        },
        mediaVideos: {
            value: 'mediaVideos',
            key: 'mediaVideos',
            label: 'Media - Videos',
            detailType: 'media/videos',
            objectType: 'mediaVideoDetails',
            Component: ProductDetailsTab
        },
        mediaVideosTvSeries: {
            value: 'mediaVideosTvSeries',
            key: 'mediaVideosTvSeries',
            label: 'Media - Videos - TV Series',
            detailType: 'media/videos/tv-series',
            objectType: 'mediaVideosTvSeriesDetails',
            Component: ProductDetailsTab
        },
        mediaVideosFilm: {
            value: 'mediaVideosFilm',
            key: 'mediaVideosFilm',
            label: 'Media - Videos - Film',
            detailType: 'media/videos/film',
            objectType: 'mediaVideosFilmDetails',
            Component: ProductDetailsTab
        },
        cables: {
            value: 'cables',
            key: 'cables',
            label: 'Cables',
            detailType: 'cables',
            objectType: 'cablesDetails',
            Component: ProductDetailsTab
        },
        cablesData: {
            value: 'cablesData',
            key: 'cablesData',
            label: 'Cables - Data',
            detailType: 'cables/data',
            objectType: 'cablesDataDetails',
            Component: ProductDetailsTab
        },
        cablesPower: {
            value: 'cablesPower',
            key: 'cablesPower',
            label: 'Cables - Power',
            detailType: 'cables/power',
            objectType: 'cablesPowerDetails',
            Component: ProductDetailsTab
        },
        cablesVideo: {
            value: 'cablesVideo',
            key: 'cablesVideo',
            label: 'Cables - Video',
            detailType: 'cables/video',
            objectType: 'cablesVideoDetails',
            Component: ProductDetailsTab
        },
        cellPhones: {
            value: 'cellPhones',
            key: 'cellPhones',
            label: 'Electronics - Visual - Cell Phones',
            detailType: 'electronics/visual/cell-phones',
            objectType: 'electronicsVisualCellPhonesDetails',
            Component: ProductDetailsTab
        },
        electronics: {
            value: 'electronics',
            key: 'electronics',
            label: 'Electronics',
            detailType: 'electronics',
            objectType: 'electronicsDetails',
            Component: ProductDetailsTab
        },
        visual: {
            value: 'visual',
            key: 'visual',
            label: 'Electronics - Visual',
            detailType: 'electronics/visual',
            objectType: 'electronicsVisualDetails',
            Component: ProductDetailsTab
        },
        kitchenAppliances: {
            value: 'kitchenAppliances',
            key: 'kitchenAppliances',
            label: 'Electronics - Kitchen Appliances',
            detailType: 'electronics/kitchen-appliances',
            objectType: 'electronicsKitchenAppliancesDetails',
            Component: ProductDetailsTab
        },
        homeGoods: {
            value: 'homeGoods',
            key: 'homeGoods',
            label: 'Home Goods',
            detailType: 'home-goods',
            objectType: 'homeGoodsDetails',
            Component: ProductDetailsTab
        },
        homeGoodsDecor: {
            value: 'homeGoodsDecor',
            key: 'homeGoodsDecor',
            label: 'Home Goods - Decor',
            detailType: 'home-goods/decor',
            objectType: 'homeGoodsDecorDetails',
            Component: ProductDetailsTab
        },
        homeGoodsDecorWallArt: {
            value: 'homeGoodsDecorWallArt',
            key: 'homeGoodsDecorWallArt',
            label: 'Home Goods - Decor - Wall Art',
            detailType: 'home-goods/decor/wall-art',
            objectType: 'homeGoodsDecorWallArtDetails',
            Component: ProductDetailsTab
        },
        homeGoodsDinnerware: {
            value: 'homeGoodsDinnerware',
            key: 'homeGoodsDinnerware',
            label: 'Home Goods - Dinnereware',
            detailType: 'home-goods/dinnerware',
            objectType: 'homeGoodsDinnerwareDetails',
            Component: ProductDetailsTab
        },
        homeGoodsFlatware: {
            value: 'homeGoodsFlatware',
            key: 'homeGoodsFlatware',
            label: 'Home Goods - Flatware',
            detailType: 'home-goods/flatware',
            objectType: 'homeGoodsFlatwareDetails',
            Component: ProductDetailsTab
        },
        sportingGoods: {
            value: 'sportingGoods',
            key: 'sportingGoods',
            label: 'Sporting Goods',
            detailType: 'sporting-goods',
            objectType: 'sportingGoodsDetails',
            Component: ProductDetailsTab
        },
        sportingGoodsGolfClubs: {
            value: 'sportingGoodsGolfClubs',
            key: 'sportingGoodsGolfClubs',
            label: 'Sporting Goods - Golf - Clubs',
            detailType: 'sporting-goods/golf/clubs',
            objectType: 'sportingGoodsGolfClubsDetails',
            Component: ProductDetailsTab
        },
        toys: {
            value: 'toys',
            key: 'toys',
            label: 'Toys',
            detailType: 'toys',
            objectType: 'toysDetails',
            Component: ProductDetailsTab
        },
        boardGames: {
            value: 'boardGames',
            key: 'boardGames',
            label: 'Toys - Board Games',
            detailType: 'toys/board-games',
            objectType: 'toysBoardGamesDetails',
            Component: ProductDetailsTab
        },
        jewelry: {
            value: 'jewelry',
            key: 'jewelry',
            label: 'Jewelry',
            detailType: 'jewelry',
            objectType: 'jewelryDetails',
            Component: ProductDetailsTab
        },
        jewelryPreciousMetal: {
            value: 'jewelryPreciousMetal',
            key: 'jewelryPreciousMetal',
            label: 'Jewelry - Precious Metal',
            detailType: 'jewelry/precious-metal',
            objectType: 'jewelryPreciousMetalDetails',
            Component: ProductDetailsTab
        },
        jewelryCostume: {
            value: 'jewelryCostume',
            key: 'jewelryCostume',
            label: 'Jewelry - Costume',
            detailType: 'jewelry/costume',
            objectType: 'jewelryCostumeDetails',
            Component: ProductDetailsTab
        },
        computerComponents: {
            value: 'computerComponents',
            key: 'computerComponents',
            label: 'Computer Components',
            detailType: 'electronics/computer-components',
            objectType: 'electronicsComputerComponentsDetails',
            Component: ProductDetailsTab
        },
        computerComponentsDrives: {
            value: 'computerComponentsDrives',
            key: 'computerComponentsDrives',
            label: 'Computer Components - Drives',
            detailType: 'electronics/computer-components/drives',
            objectType: 'electronicsComputerComponentsDrivesDetails',
            Component: ProductDetailsTab
        },
        computerComponentsRam: {
            value: 'computerComponentsRam',
            key: 'computerComponentRam',
            label: 'Computer Components - RAM',
            detailType: 'electronics/computer-components/ram',
            objectType: 'electronicsComputerComponentsRamDetails',
            Component: ProductDetailsTab
        },
        computerComponentsBattery: {
            value: 'computerComponentsBattery',
            key: 'computerComponentsBattery',
            label: 'Computer Components - Battery',
            detailType: 'electronics/computer-components/battery',
            objectType: 'electronicsComputerComponentsBatteryDetails',
            Component: ProductDetailsTab
        }
    }
};

export function CreateRenderDetailPanel<T extends MRT_RowData>(props: Parameters<Exclude<MRT_TableOptions<T>['renderDetailPanel'], undefined>>[0]) {
    useWhyDidIUpdate('createRenderDetailPanel', props);
    const collection = useCollectionRoute();
    const tabs = useMemo(
        () =>
            Object.values(tabList[collection as keyof typeof tabList]) as {
                value: string;
                key: string;
                label: string;
                objectType: string;

                property?: string;
                detailType?: string | string[];
                Component: React.FunctionComponent<{ isCurrent: boolean; objectType: string; data: any[]; original: any }>;
            }[],
        [collection]
    );
    const [currentValue, setValue] = useState<string>(tabs[0].key);
    const handleChange = useCallback((ev: any, newValue: string) => {
        setValue(newValue);
    }, []);
    const checkForDetailType = useCallback(
        (type?: string | string[]) => {
            if (type == null) return true;
            const types = typeof type === 'string' ? [type] : type;
            const product = props.row.original as any as IProduct;
            return types.some((t) => product.detailTypes.includes(t as DetailTypes));
        },
        [props.row.original]
    );
    return (
        ((props.table.getState().expanded as any) ?? {})[props.row.id] && (
            <Container className='w-screen'>
                <Box className='w-full'>
                    <TabContext value={currentValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label='Tabs'>
                                {tabs.map(({ value, label, detailType }) => checkForDetailType(detailType) && <Tab key={value} label={label} value={value} />)}
                            </TabList>
                        </Box>
                        {tabs.map(
                            ({ value, Component, property, detailType, objectType }) =>
                                checkForDetailType(detailType) && (
                                    <TabPanel key={value} value={value}>
                                        <Panel Component={Component} property={property} original={props.row.original} objectType={objectType} isCurrent={checkForDetailType(detailType)} />
                                    </TabPanel>
                                )
                        )}
                    </TabContext>
                </Box>
            </Container>
        )
    );
}
