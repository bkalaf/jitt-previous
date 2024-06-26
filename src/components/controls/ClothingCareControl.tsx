import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { IndividualClothingCareControl } from './IndividualClothingCareControl';
import { FlattenedClothingCareCell } from '../table/cells/FlattenedListTableCell';
import { ColumnMeta } from '@tanstack/react-table';

export function FlattenedClothingCare<T extends MRT_RowData>(props: CellFunctionParams<T, any>): JSX.Element {
    const BleachingCell = FlattenedClothingCareCell('bleaching');
    const DryCleanCell = FlattenedClothingCareCell('dryClean');
    const DryingCell = FlattenedClothingCareCell('drying');
    const GentleOrDelicateCell = FlattenedClothingCareCell('gentleOrDelicate');
    const IroningCell = FlattenedClothingCareCell('ironing');
    const PermanentPressCell = FlattenedClothingCareCell('permanentPress');
    const TumbleDryCell = FlattenedClothingCareCell('tumbleDry');
    const WashCell = FlattenedClothingCareCell('wash');
    const WashTemperatureCell = FlattenedClothingCareCell('washTemperature');
    return (
        <ul>
            <li>
                <BleachingCell {...props} />
            </li>
            <li>
                <DryCleanCell {...props} />
            </li>
            <li>
                <DryingCell {...props} />
            </li>
            <li>
                <GentleOrDelicateCell {...props} />
            </li>
            <li>
                <IroningCell {...props} />
            </li>
            <li>
                <PermanentPressCell {...props} />
            </li>
            <li>
                <TumbleDryCell {...props} />
            </li>
            <li>
                <WashCell {...props} />
            </li>
            <li>
                <WashTemperatureCell {...props} />
            </li>
        </ul>
    );
}

export function ClothingCareControl<T extends MRT_RowData>(props: EditFunctionParams<T>): JSX.Element {
    useWhyDidIUpdate('ClothingCareControl', props);
    const { dependencies } = props.column.columnDef.meta as ColumnMeta<any, any>;
    const BleachingControl = IndividualClothingCareControl('bleaching', 'clothingCare.bleaching', ...dependencies ?? []);
    const DryCleanControl = IndividualClothingCareControl('dryClean', 'clothingCare.dryClean', ...dependencies ?? []);
    const DryingControl = IndividualClothingCareControl('drying', 'clothingCare.drying', ...dependencies ?? []);
    const GentleOrDelicateControl = IndividualClothingCareControl('gentleOrDelicate', 'clothingCare.gentleOrDelicate', ...dependencies ?? []);
    const IroningControl = IndividualClothingCareControl('ironing', 'clothingCare.ironing', ...(dependencies ?? []));
    const PermanentPressControl = IndividualClothingCareControl('permanentPress', 'clothingCare.permanentPress', ...(dependencies ?? []));
    const TumbleDryControl = IndividualClothingCareControl('tumbleDry', 'clothingCare.tumbleDry', ...(dependencies ?? []));
    const WashControl = IndividualClothingCareControl('wash', 'clothingCare.wash', ...(dependencies ?? []));
    const WashTemperatureControl = IndividualClothingCareControl('washTemperature', 'clothingCare.washTemperature', ...(dependencies ?? []));
    return (
        <div className='flex flex-col'>
            <BleachingControl />
            <DryCleanControl />
            <DryingControl />
            <GentleOrDelicateControl />
            <IroningControl />
            <PermanentPressControl />
            <TumbleDryControl />
            <WashControl />
            <WashTemperatureControl />
        </div>
    );
}
