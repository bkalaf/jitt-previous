import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { IClassifier } from '../../types';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<IClassifier>();
export const helper = col(h);

// export function createStringValueCell<T extends MRT_RowData>() {
//     return function StringValueCell(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Cell'], undefined>>[0]) {
//         useWhyDidIUpdate('StringValueCell', props);
//         const { cell } = props;
//         const value = cell.getValue() ?? '';
//         return value;
//     } as Exclude<MRT_ColumnDef<T>['Cell'], undefined>;
// }
// export const stringColumn = [
//     createMRTColumnHelper<{ value?: string }>().accessor('value', {
//         header: 'Value',
//         Cell: StringTableCell<{ value?: string }, string | undefined>,
//         Edit: StringControl<{ value?: string }, string | undefined>,
//         meta: {
//             maxLength: 150
//         }
//     })
// ] as MRT_ColumnDef<{ value: string }, string | undefined>[];

export const classifierColumns: MRT_ColumnDef<IClassifier>[] = [
    helper.pk(),
    helper.lookup('taxonomy', 'Taxonomy', { objectType: 'mercariTaxonomy' }),
    helper.string('shortName', 'Short Name', undefined, { maxLength: 50, required: true }),
    helper.lookup('parent', 'Parent', { objectType: 'classifier' }),
    {
        ...helper.string('name', 'Name', undefined, { maxLength: 150, required: false })
        // muiTableBodyCellProps: (props) => ({
        //     className: fromDepth(props.row.depth)
        // })
    },
    helper.listofFreeSolo('type', 'Detail Types', 'string', (x: string, y: string) => x.localeCompare(y) as Compared),
    helper.listOfPrimitive('detailTypes', 'ALL Detail Types', 'string', true),
    helper.listOfObject('hashTags', 'Hash Tags', 'hashTag'),
    helper.listOfObject('allHashTags', 'ALL Hash Tags', 'hashTag', true),
    helper.listOfEmbed('attributes', 'Attribute', 'attribute'),
    helper.listOfEmbed('allAttributes', 'ALL Attribute', 'attribute', true)
] as MRT_ColumnDef<IClassifier>[];
