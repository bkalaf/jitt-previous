import { renderProductImagePanel } from './ProductImageTab';
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
import { IProductImage, ISku } from '../types';
import { createUpdateTabPanel } from './createUpdateTabPanel';
import { MRT_ColumnDef } from 'material-react-table';

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

// const zinc = (Ctor: DetailsClass, ...children: Node[]): Node => ({ Ctor, bg: 'bg-zinc-500', text: 'text-white', children: children.length > 1 ? children : undefined });
// const pink = (Ctor: DetailsClass, ...children: Node[]): Node => ({ Ctor, bg: 'bg-pink-500', text: 'text-white', children: children.length > 1 ? children : undefined });
// const sky = (Ctor: DetailsClass, ...children: Node[]): Node => ({ Ctor, bg: 'bg-sky-500', text: 'text-white', children: children.length > 1 ? children : undefined });
// const amber = (Ctor: DetailsClass, ...children: Node[]): Node => ({ Ctor, bg: 'bg-amber-500', text: 'text-black', children: children.length > 1 ? children : undefined });
// const indigo = (Ctor: DetailsClass, ...children: Node[]): Node => ({ Ctor, bg: 'bg-indigo-500', text: 'text-white', children: children.length > 1 ? children : undefined });
// const red = (Ctor: DetailsClass, ...children: Node[]): Node => ({ Ctor, bg: 'bg-red-500', text: 'text-white', children: children.length > 1 ? children : undefined });

// const toNode =
//     (func: (Ctor: DetailsClass, ...children: Node[]) => Node) =>
//     (Ctor: DetailsClass) =>
//     (...children: Node[]) =>
//         func(Ctor, ...children);

// const TopLevel = [
//     toNode(zinc)(GeneralDetails)(),
//     toNode(pink)(ApparelDetails)(toNode(pink)(ApparelTopsDetails)(), toNode(pink)(ApparelBottomsDetails)(toNode(pink)(ApparelBottomsLeggedDetails)()), toNode(pink)(ApparelFootwearDetails)(), toNode(pink)(ApparelBrasDetails)()),

//     toNode(sky)(MediaDetails)(
//         toNode(sky)(MediaBooksDetails)(),
//         toNode(sky)(MediaMusicDetails)(),
//         toNode(sky)(MediaVideoGamesDetails)(),
//         toNode(sky)(MediaVideosDetails)(toNode(sky)(MediaVideosFilmDetails)(), toNode(sky)(MediaVideosTvSeriesDetails)())
//     ),

//     toNode(amber)(ElectronicsDetails)(
//         toNode(amber)(ElectronicsComputerComponentsDetails)(toNode(amber)(ElectronicsComputerComponentsDrivesDetails)(), toNode(amber)(ElectronicsComputerComponentsBatteryDetails)(), toNode(amber)(ElectronicsComputerComponentsRamDetails)()),
//         toNode(amber)(ElectronicsVisualDetails)(toNode(amber)(ElectronicsVisualCellPhonesDetails)()),
//         toNode(amber)(ElectronicsKitchenAppliancesDetails)()
//     ),

//     toNode(indigo)(HomeGoodsDetails)(toNode(indigo)(HomeGoodsDinnerwareDetails)(), toNode(indigo)(HomeGoodsFlatwareDetails)(), toNode(indigo)(HomeGoodsDecorDetails)()),

//     toNode(red)(SportingGoodsDetails)(
//         toNode(red)(SportingGoodsGolfDetails)(toNode(red)(SportingGoodsGolfClubsDetails)()),
//         toNode(red)(SportingGoodsTennisDetails)(toNode(red)(SportingGoodsTennisRacketsDetails)()),
//         toNode(red)(SportingGoodsBowlingDetails)(toNode(red)(SportingGoodsBowlingBallsDetails)())
//     )
// ];

type DetailsTabs = {
    label: string;
    type: string;
    Component: React.FunctionComponent<RenderDetailTabPanelProps>;
};

function fromDetailsClass(Ctor: DetailsClass) {
    const { columns, label, type } = Ctor;
    return { label, type, Component: createUpdateTabPanel(columns as MRT_ColumnDef<any>[]) } as DetailsTabs;
}
export const tabList: Record<string, DetailsTabs[]> = {
    sku: [{ label: 'Images', type: 'images', Component: renderProductImagePanel<any>((sku?: ISku) => Array.from(sku?.getProductImages ?? []) as IProductImage[]) }],
    product: [
        fromDetailsClass(ApparelDetails),
        fromDetailsClass(ApparelFootwearDetails),
        fromDetailsClass(ApparelBrasDetails),
        fromDetailsClass(ApparelTopsDetails),
        fromDetailsClass(ApparelBottomsDetails),
        fromDetailsClass(ApparelBottomsLeggedDetails),
        fromDetailsClass(CablesDetails),
        fromDetailsClass(CablesDataDetails),
        fromDetailsClass(CablesPowerDetails),
        fromDetailsClass(CablesVideoDetails),
        fromDetailsClass(ElectronicsDetails),
        fromDetailsClass(ElectronicsVisualDetails),
        fromDetailsClass(ElectronicsVisualCellPhonesDetails),
        fromDetailsClass(ElectronicsKitchenAppliancesDetails),
        fromDetailsClass(ElectronicsComputerComponentsDetails),
        fromDetailsClass(ElectronicsComputerComponentsDrivesDetails),
        fromDetailsClass(ElectronicsComputerComponentsBatteryDetails),
        fromDetailsClass(ElectronicsComputerComponentsRamDetails),
        fromDetailsClass(ElectronicsComputerComponentsNetworkingDetails),
        fromDetailsClass(GeneralDetails),
        fromDetailsClass(HomeGoodsDetails),
        fromDetailsClass(HomeGoodsDecorDetails),
        fromDetailsClass(HomeGoodsFlatwareDetails),
        fromDetailsClass(HomeGoodsDinnerwareDetails),
        fromDetailsClass(HomeGoodsGlasswareDetails),
        fromDetailsClass(JewelryDetails),
        fromDetailsClass(MediaDetails),
        fromDetailsClass(MediaBooksDetails),
        fromDetailsClass(MediaMusicDetails),
        fromDetailsClass(MediaVideoGamesDetails),
        fromDetailsClass(MediaVideosDetails),
        fromDetailsClass(MediaVideosFilmDetails),
        fromDetailsClass(MediaVideosTvSeriesDetails),
        fromDetailsClass(SportingGoodsDetails),
        fromDetailsClass(SportingGoodsGolfDetails),
        fromDetailsClass(SportingGoodsGolfClubsDetails),
        fromDetailsClass(SportingGoodsTennisDetails),
        fromDetailsClass(SportingGoodsTennisRacketsDetails),
        fromDetailsClass(SportingGoodsBowlingDetails),
        fromDetailsClass(SportingGoodsBowlingBallsDetails),
        fromDetailsClass(ToysDetails),
        fromDetailsClass(ToysBoardGamesDetails),
        fromDetailsClass(ToysStuffedAnimalsDetails)
    ]
};

console.log(`detailsTabList`, JSON.stringify(tabList['product'], null, '\t'));
