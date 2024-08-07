import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const generalDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.date(...dependencies)('testedOn', 'Tested On', { dateType: 'past' }),
        helper.string(...dependencies)('itemType', 'Item Type', undefined, {}),
        helper.enum(...dependencies)('bagType', 'Bag Type', { enumKey: 'bagTypes' }),
        helper.enum(...dependencies)('bottomType', 'Bottom Type', { enumKey: 'bottomTypes' }),
        helper.enum(...dependencies)('braType', 'Bra Type', { enumKey: 'braTypes' }),
        helper.enum(...dependencies)('earringBackType', 'Earring Back Type', { enumKey: 'earringBackTypes' }),
        helper.enum(...dependencies)('earringFrontType', 'Earring Front Type', { enumKey: 'earringFrontTypes' }),
        helper.enum(...dependencies)('hatType', 'Hat Type', { enumKey: 'hatTypes' }),
        helper.enum(...dependencies)('jacketType', 'Jacket Type', { enumKey: 'jacketTypes' }),
        helper.enum(...dependencies)('jeansType', 'Jeans Type', { enumKey: 'jeansTypes' }),
        helper.enum(...dependencies)('lapelType', 'Lapel Type', { enumKey: 'lapelTypes' }),
        helper.enum(...dependencies)('ringType', 'Ring Type', { enumKey: 'ringTypes' }),
        helper.enum(...dependencies)('shirtType', 'Shirt Type', { enumKey: 'shirtTypes' }),
        helper.enum(...dependencies)('skirtType', 'Skirt Type', { enumKey: 'skirtTypes' }),
        helper.enum(...dependencies)('shoeType', 'Shoe Type', { enumKey: 'shoeTypes' }),
        helper.enum(...dependencies)('sleepwearType', 'Sleepwear Type', { enumKey: 'sleepwearTypes' }),
        helper.enum(...dependencies)('tieType', 'Tie Type', { enumKey: 'tieTypes' }),
        helper.enum(...dependencies)('zipperType', 'Zipper Type', { enumKey: 'zipperTypes' })
    ] as MRT_ColumnDef<T>[];
