import { ProductImageTab } from './ProductImageTab';
import { ProductDetailsTab } from './ProductDetailsTab';
import { detailsTypes } from '../schema/enums/detailsTypes';
import { ApparelBottomsDetails } from '../schema/entity/detailEntity/ApparelBottomsDetails';
import { ApparelBottomsLeggedDetails } from '../schema/entity/detailEntity/ApparelBottomsLeggedDetails';
import { ApparelBrasDetails } from '../schema/entity/detailEntity/ApparelBrasDetails';
import { ApparelBrasSwimsuitDetails } from '../schema/entity/detailEntity/ApparelBrasSwimsuitDetails';
import { ApparelDetails } from '../schema/entity/detailEntity/ApparelDetails';
import { ApparelFootwearDetails } from '../schema/entity/detailEntity/ApparelFootwearDetails';
import { ApparelTopsDetails } from '../schema/entity/detailEntity/ApparelTopsDetails';
import { CablesDataDetails } from '../schema/entity/detailEntity/CablesDataDetails';
import { CablesDetails } from '../schema/entity/detailEntity/CablesDetails';
import { CablesPowerDetails } from '../schema/entity/detailEntity/CablesPowerDetails';
import { CablesVideoDetails } from '../schema/entity/detailEntity/CablesVideoDetails';
import { ElectronicsComputerComponentsBatteryDetails } from '../schema/entity/detailEntity/ElectronicsComputerComponentsBatteryDetails';
import { ElectronicsComputerComponentsDetails } from '../schema/entity/detailEntity/ElectronicsComputerComponentsDetails';
import { ElectronicsComputerComponentsDrivesDetails } from '../schema/entity/detailEntity/ElectronicsComputerComponentsDrivesDetails';
import { ElectronicsComputerComponentsNetworkingDetails } from '../schema/entity/detailEntity/ElectronicsComputerComponentsNetworkingDetails';
import { ElectronicsComputerComponentsRamDetails } from '../schema/entity/detailEntity/ElectronicsComputerComponentsRamDetails';
import { ElectronicsDetails } from '../schema/entity/detailEntity/ElectronicsDetails';
import { ElectronicsKitchenAppliancesDetails } from '../schema/entity/detailEntity/ElectronicsKitchenAppliancesDetails';
import { ElectronicsVisualCellPhonesDetails } from '../schema/entity/detailEntity/ElectronicsVisualCellPhonesDetails';
import { ElectronicsVisualDetails } from '../schema/entity/detailEntity/ElectronicsVisualDetails';
import { GeneralDetails } from '../schema/entity/detailEntity/GeneralDetails';
import { HomeGoodsDecorDetails } from '../schema/entity/detailEntity/HomeGoodsDecorDetails';
import { HomeGoodsDetails } from '../schema/entity/detailEntity/HomeGoodsDetails';
import { HomeGoodsDinnerwareDetails } from '../schema/entity/detailEntity/HomeGoodsDinnerwareDetails';
import { HomeGoodsFlatwareDetails } from '../schema/entity/detailEntity/HomeGoodsFlatwareDetails';
import { HomeGoodsGlasswareDetails } from '../schema/entity/detailEntity/HomeGoodsGlasswareDetails';
import { JewelryDetails } from '../schema/entity/detailEntity/JewelryDetails';
import { MediaBooksDetails } from '../schema/entity/detailEntity/MediaBooksDetails';
import { MediaDetails } from '../schema/entity/detailEntity/MediaDetails';
import { MediaMusicDetails } from '../schema/entity/detailEntity/MediaMusicDetails';
import { MediaVideoGamesDetails } from '../schema/entity/detailEntity/MediaVideoGamesDetails';
import { MediaVideosDetails } from '../schema/entity/detailEntity/MediaVideosDetails';
import { MediaVideosFilmDetails } from '../schema/entity/detailEntity/MediaVideosFilmDetails';
import { MediaVideosTvSeriesDetails } from '../schema/entity/detailEntity/MediaVideosTvSeriesDetails';
import { SportingGoodsBowlingBallsDetails } from '../schema/entity/detailEntity/SportingGoodsBowlingBallsDetails';
import { SportingGoodsBowlingDetails } from '../schema/entity/detailEntity/SportingGoodsBowlingDetails';
import { SportingGoodsDetails } from '../schema/entity/detailEntity/SportingGoodsDetails';
import { SportingGoodsGolfClubsDetails } from '../schema/entity/detailEntity/SportingGoodsGolfClubsDetails';
import { SportingGoodsGolfDetails } from '../schema/entity/detailEntity/SportingGoodsGolfDetails';
import { SportingGoodsTennisDetails } from '../schema/entity/detailEntity/SportingGoodsTennisDetails';
import { SportingGoodsTennisRacketsDetails } from '../schema/entity/detailEntity/SportingGoodsTennisRacketsDetails';
import { ToysBoardGamesDetails } from '../schema/entity/detailEntity/ToysBoardGamesDetails';
import { ToysDetails } from '../schema/entity/detailEntity/ToysDetails';
import { ToysStuffedAnimalsDetails } from '../schema/entity/detailEntity/ToysStuffedAnimalsDetails';

export const detailsTabList: Record<string, DetailsClass> = {
    apparelDetails: ApparelDetails,
    apparelTopsDetails: ApparelTopsDetails,
    apparelBottomsDetails: ApparelBottomsDetails,
    apparelBottomsLeggedDetails: ApparelBottomsLeggedDetails,
    apparelFootwearDetails: ApparelFootwearDetails,
    apparelBrasDetails: ApparelBrasDetails,
    apparelBrasSwimsuitDetails: ApparelBrasSwimsuitDetails,
    cablesDetails: CablesDetails,
    cablesDataDetails: CablesDataDetails,
    cablesPowerDetails: CablesPowerDetails,
    cablesVideoDetails: CablesVideoDetails,
    electronicsDetails: ElectronicsDetails,
    electronicsVisualDetails: ElectronicsVisualDetails,
    electronicsVisualCellPhonesDetails: ElectronicsVisualCellPhonesDetails,
    electronicsComputerComponentsDetails: ElectronicsComputerComponentsDetails,
    electronicsComputerComponentsRamDetails: ElectronicsComputerComponentsRamDetails,
    electronicsComputerComponentsBatteryDetails: ElectronicsComputerComponentsBatteryDetails,
    electronicsComputerComponentsDrivesDetails: ElectronicsComputerComponentsDrivesDetails,
    electronicsComputerComponentsNetworkingDetails: ElectronicsComputerComponentsNetworkingDetails,
    electronicsKitchenAppliancesDetails: ElectronicsKitchenAppliancesDetails,
    generalDetails: GeneralDetails,
    homeGoodsDetails: HomeGoodsDetails,
    homeGoodsDecorDetails: HomeGoodsDecorDetails,
    homeGoodsFlatwareDetails: HomeGoodsFlatwareDetails,
    homeGoodsDinnerwareDetails: HomeGoodsDinnerwareDetails,
    homeGoodsGlasswareDetails: HomeGoodsGlasswareDetails,
    jewelryDetails: JewelryDetails,
    mediaDetails: MediaDetails,
    mediaBooksDetails: MediaBooksDetails,
    mediaMusicDetails: MediaMusicDetails,
    mediaVideoGamesDetails: MediaVideoGamesDetails,
    mediaVideosDetails: MediaVideosDetails,
    mediaVideosFilmDetails: MediaVideosFilmDetails,
    mediaVideosTvSeriesDetails: MediaVideosTvSeriesDetails,
    sportingGoodsDetails: SportingGoodsDetails,
    sportingGoodsGolfDetails: SportingGoodsGolfDetails,
    sportingGoodsGolfClubsDetails: SportingGoodsGolfClubsDetails,
    sportingGoodsTennisDetails: SportingGoodsTennisDetails,
    sportingGoodsTennisRacketsDetails: SportingGoodsTennisRacketsDetails,
    sportingGoodsBowlingDetails: SportingGoodsBowlingDetails,
    sportingGoodsBowlingBallsDetails: SportingGoodsBowlingBallsDetails,
    toysDetails: ToysDetails,
    toysBoardGamesDetails: ToysBoardGamesDetails,
    toysStuffedAnimalsDetails: ToysStuffedAnimalsDetails
};
export const tabList: Record<
    string, Record<string, { value: string; key: string; label: string; detailType: keyof typeof detailsTypes; Component: any; objectType: string; } | { value: string; key: string; label: string; Component: any; property?: string; }>
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
    product: Object.fromEntries(
        Object.entries(detailsTabList).map(
            ([key, detailsClass]: [string, DetailsClass]) => [
                key,
                {
                    value: detailsClass.objectType,
                    objectType: detailsClass.objectType,
                    key: key,
                    label: detailsClass.label,
                    property: detailsClass.type,
                    detailType: detailsClass.type,
                    Component: ProductDetailsTab
                } as TabPanelProps
            ] as [string, TabPanelProps]
        )
    )
};

console.log(JSON.stringify(tabList['product'], null, '\t'));
