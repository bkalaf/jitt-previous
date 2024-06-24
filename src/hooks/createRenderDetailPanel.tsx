import { MRT_RowData, MRT_TableOptions } from 'material-react-table';
import { useWhyDidIUpdate } from './useWhyDidIUpdate';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Tab } from '@mui/material';
import { useCallback, useState } from 'react';
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
            detailType: 'apparel-tops',
            objectType: 'apparelTopsDetails',
            Component: ProductDetailsTab
        },
        apparelBottoms: {
            value: 'apparelBottoms',
            key: 'apparelBottoms',
            label: 'Apparel - Bottoms',
            detailType: 'apparel-bottoms',
            objectType: 'apparelBottomsDetails',
            Component: ProductDetailsTab
        },
        apparelBras: {
            value: 'apparelBras',
            key: 'apparelBras',
            label: 'Apparel - Bras',
            detailType: 'apparel-bras',
            objectType: 'apparelBrasDetails',
            Component: ProductDetailsTab
        },
        apparelFootwear: {
            value: 'apparelFootwear',
            key: 'apparelFootwear',
            label: 'Apparel - Footwear',
            detailType: 'apparel-footwear',
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
            detailType: 'media-books',
            objectType: 'mediaBooksDetails',
            Component: ProductDetailsTab
        },
        mediaMusic: {
            value: 'mediaMusic',
            key: 'mediaMusic',
            label: 'Media - Music',
            detailType: 'media-music',
            objectType: 'mediaMusicDetails',
            Component: ProductDetailsTab
        },
        mediaVideoGames: {
            value: 'mediaVideoGames',
            key: 'mediaVideoGames',
            label: 'Media - Video Games',
            detailType: 'media-video-games',
            objectType: 'mediaVideoGameDetails',
            Component: ProductDetailsTab
        },
        mediaVideos: {
            value: 'mediaVideos',
            key: 'mediaVideos',
            label: 'Media - Videos',
            detailType: 'media-videos',
            objectType: 'mediaVideoDetails',
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
            detailType: 'cables-data',
            objectType: 'cablesDataDetails',
            Component: ProductDetailsTab
        },
        cablesPower: {
            value: 'cablesPower',
            key: 'cablesPower',
            label: 'Cables - Power',
            detailType: 'cables-power',
            objectType: 'cablesPowerDetails',
            Component: ProductDetailsTab
        },
        cablesVideo: {
            value: 'cablesVideo',
            key: 'cablesVideo',
            label: 'Cables - Video',
            detailType: 'cables-video',
            objectType: 'cablesVideoDetails',
            Component: ProductDetailsTab
        },
        cellPhones: {
            value: 'cellPhones',
            key: 'cellPhones',
            label: 'Cell Phones',
            detailType: 'cell-phones',
            objectType: 'cellPhonesDetails',
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
        kitchenAppliances: {
            value: 'kitchenAppliances',
            key: 'kitchenAppliances',
            label: 'Kitchen Appliances',
            detailType: 'kitchen-appliances',
            objectType: 'kitchenAppliancesDetails',
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
        homeGoodsDinnerware: {
            value: 'homeGoodsDinnerware',
            key: 'homeGoodsDinnerware',
            label: 'Home Goods - Dinnereware',
            detailType: 'home-goods-dinnerware',
            objectType: 'homeGoodsDinnerwareDetails',
            Component: ProductDetailsTab
        },
        homeGoodsFlatware: {
            value: 'homeGoodsFlatware',
            key: 'homeGoodsFlatware',
            label: 'Home Goods - Flatware',
            detailType: 'home-goods-flatware',
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
        sportingGoodsGolf: {
            value: 'sportingGoodsGolf',
            key: 'sportingGoodsGolf',
            label: 'Sporting Goods - Golf',
            detailType: 'sporting-goods-golf-clubs',
            objectType: 'sportingGoodsGolfDetails',
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
        jewelry: {
            value: 'jewelry',
            key: 'jewelry',
            label: 'Jewelry',
            detailType: 'jewelry',
            objectType: 'jewelryDetails',
            Component: ProductDetailsTab
        },
        computerComponents: {
            value: 'computerComponents',
            key: 'computerComponents',
            label: 'Computer Components',
            detailType: 'computer-components',
            objectType: 'computerComponentsDetails',
            Component: ProductDetailsTab
        },
        computerComponentsDrives: {
            value: 'computerComponentsDrives',
            key: 'computerComponentsDrives',
            label: 'Computer Components - Drives',
            detailType: 'computer-components-drives',
            objectType: 'computerComponentsDrivesDetails',
            Component: ProductDetailsTab
        },
        computerComponentsRam: {
            value: 'computerComponentsRam',
            key: 'computerComponentRam',
            label: 'Computer Components - RAM',
            detailType: 'computer-components-ram',
            objectType: 'computerComponentsRamDetails',
            Component: ProductDetailsTab
        }
    }
};

export function CreateRenderDetailPanel<T extends MRT_RowData>(props: Parameters<Exclude<MRT_TableOptions<T>['renderDetailPanel'], undefined>>[0]) {
    useWhyDidIUpdate('createRenderDetailPanel', props);
    const collection = useCollectionRoute();
    const tabs = Object.values(tabList[collection as keyof typeof tabList]) as {
        value: string;
        key: string;
        label: string;
        objectType: string;
        property?: string;
        detailType?: string | string[];
        Component: React.FunctionComponent<{ objectType: string; data: any[]; original: any }>;
    }[];
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
                                    <Panel Component={Component} property={property} original={props.row.original} objectType={objectType} />
                                </TabPanel>
                            )
                    )}
                </TabContext>
            </Box>
        </Container>
    );
}
