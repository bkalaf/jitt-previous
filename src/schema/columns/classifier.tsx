import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IClassifier } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<IClassifier>();
export const helper = col(h);

export const classifierColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.lookup(...dependencies)('taxonomy', 'Taxonomy', { objectType: 'mercariTaxonomy' }),
        helper.string(...dependencies)('shortName', 'Short Name', undefined, { maxLength: 50, required: true }),
        helper.lookup(...dependencies)('parent', 'Parent', { objectType: 'classifier' }),
        helper.string(...dependencies)('name', 'Name', undefined, { maxLength: 150, required: false }),
        helper.listOfEnum(...dependencies)('type', 'Detail Types', { enumKey: 'detailsTypes' }),
        helper.listOfPrimitive(...dependencies)('detailTypes', 'ALL Detail Types', 'string', true),
        helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag'),
        helper.listOfObject(...dependencies)('allHashTags', 'ALL Hash Tags', 'hashTag', true),
        helper.listOfEmbed(...dependencies)('attributes', 'Attribute', 'attribute'),
        helper.listOfEmbed(...dependencies)('allAttributes', 'ALL Attribute', 'attribute', true)
    ] as MRT_ColumnDef<T>[];
