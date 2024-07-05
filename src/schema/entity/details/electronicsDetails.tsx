import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { DetailTypes, IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { intMeasureColumns } from './measureColumns';
import { PowerTypes } from '../../enums';
import { $productInfo } from '../../columns/$depend';
import { distinctByString } from '../../../common/array/distinct';
import { monthYearColumns } from '../../columns/monthYearColumns';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const electronicsDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.listOfEnum(...dependencies)('powerTypes', 'Power Types', {
            enumKey: 'powerTypes',
            onChange: (formContext, oldValue: any, newValue: PowerTypes[]) => {
                const current = formContext.getValues()['type'] as DetailTypes[];
                const toSet: DetailTypes[] = [...newValue.includes('ac') ? ['cables/power'] as DetailTypes[] : [], ...newValue.includes('battery') ? ['electronics/computer-components/battery'] as DetailTypes[] : []];
                const next = distinctByString<DetailTypes>([...current.filter((x) => x !== 'cables/power' && x !== 'electronics/computer-components/battery'), ...toSet]);
                formContext.setValue('type', next);        
            }
        }),
        groupCol(h, 'Manufacture Date', monthYearColumns, 'manufactureDate', 'bg-red-500', 'text-white')(...dependencies),
        groupCol(h, 'Capacity', intMeasureColumns(h, 'capacityUnitOfMeasure'), 'capacity', 'bg-teal-500', 'text-white')($productInfo.hasCapacity, ...dependencies)
    ] as MRT_ColumnDef<T>[];
