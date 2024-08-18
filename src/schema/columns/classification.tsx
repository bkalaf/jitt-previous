import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IClassification } from '../../types';
import { col } from '../defs/col';
import { PathControl } from '../../taxonomy/graph';

const h = createMRTColumnHelper<IClassification>();
const helper = col(h);

export const classificationColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        h.accessor('path', {
            header: 'Path',
            Cell: function PathCell(props) {
                return props.cell.getValue()?.join('/') ?? ''
            },
            Edit: PathControl
        }), 
        helper.dictionary()
    ] as MRT_ColumnDef<T>[];
