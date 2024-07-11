import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const mediaDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [        
        helper.text(...dependencies)('blurb', 'Blurb', undefined, { maxLength: 1000 }),
        helper.dollar(...dependencies)('suggestedRetailPrice', 'Suggested Retail Price', { min: 0 })
    ] as MRT_ColumnDef<T>[];


