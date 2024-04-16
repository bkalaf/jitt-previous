import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { faCheckSquare } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

export function createBoolCell<T extends MRT_RowData>() {
    return function BoolCell({ cell }: Parameters<Exclude<MRT_ColumnDef<T, boolean | undefined>['Cell'], undefined>>[0]) {
        const value = cell.getValue<boolean | undefined>() ?? false;
        const icon = value ? faCheckSquare : faSquare;
        return <FontAwesomeIcon icon={icon} className='text-blue-500' size='lg' />;
    };
}
