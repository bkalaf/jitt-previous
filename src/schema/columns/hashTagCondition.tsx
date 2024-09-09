import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IHashTagCondition } from '../../types';
import { col } from '../defs/col';
import classifierPath from './../../assets/data/classifierPath.json';
import { distinctByString } from '../../common/array/distinct';

const h = createMRTColumnHelper<IHashTagCondition>();
const helper = col(h);

export function getConditions(obj: Record<string, any>): string[] {
    if (Array.isArray(obj)) return []
    if ('nodes' in obj) {
        return obj.flagOptions ?? [];
    }
    return distinctByString(
        Object.values(obj)
            .map(getConditions)
            .reduce((pv, cv) => [...pv, ...cv], [])
    );
}
export const hashTagConditionColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => [
    // h.accessor('path', {
    //     header: 'Path',
    //     Cell: (props) => {
    //         return (props.cell.getValue() ?? []).join('/') ?? ''
    //     },
    //     Edit: () => <PathControl />
    // }),
    helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag'),
    helper.listOfObject(...dependencies)('brands', 'Brands', 'brand'),
    helper.listOfEmbed(...dependencies)('attributes', 'Attributes', 'attribute'),
    helper.listOfEmbed(...dependencies)('material', 'Materials', 'materialCondition'),
    helper.flags(...dependencies)('conditions', 'Conditions', getConditions(classifierPath))
] as MRT_ColumnDef<T>[];