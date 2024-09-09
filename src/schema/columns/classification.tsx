import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IClassification } from '../../types';
import { col } from '../defs/col';
import { PathControl } from '../../taxonomy/graph';
import { CreateHashTagAssignmentModal } from '../../components/Views/renderProperties/CreateHashTagAssignmentModal';

const h = createMRTColumnHelper<IClassification>();
const helper = col(h);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const classificationColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        h.accessor('path', {
            header: 'Path',
            Cell: function PathCell(props) {
                return props.cell.getValue()?.join('/') ?? '';
            },
            Edit: PathControl
        }),
        helper.string(...dependencies)('itemType', 'Item Type', undefined),
        helper.lookup(...dependencies)('taxonomy', 'Taxonomy', { objectType: 'mercariTaxonomy' }),
        helper.dictionary(...dependencies)('attributes', 'Attributes', 'string', {
            enumKey: 'attributePaths'
        }),
        helper.flags(...dependencies)('flags', 'Flags', ['isMaternity', 'isBoxedSet', 'isAthletic', 'isNBA', 'isNFL', 'isNHL', 'isNCAA', 'isMLB']),
        helper.listOfPrimitive(...dependencies)('additionalPaths', 'Adtl Paths', 'string'),
        helper.listOfPrimitive(...dependencies)('paths', 'Paths', 'string', undefined, true),
        helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag'),
        helper.listOfObject(...dependencies)('allHashTags', 'ALL Hash Tags', 'hashTag', true),
        helper.listOfEmbed(...dependencies)('hashTagAssignments', 'Assignments', 'hashTagAssignment', CreateHashTagAssignmentModal),
        helper.listOfEmbed(...dependencies)('allHashTagAssignments', 'ALL Assignments', 'hashTagAssignment', undefined, true),
        helper.listOfEmbed(...dependencies)('hashTagConditions', 'Hash Tag Conditions', 'hashTagCondition')
    ] as MRT_ColumnDef<T>[];

// attributew and hashTagAssignments and allHashTagAssignments