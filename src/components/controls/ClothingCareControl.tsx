import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { $createClothingCareControl } from './$createClothingCareControl';
import { FlattenedClothingCareCell } from '../table/cells/FlattenedListTableCell';

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
    const BleachingControl = $createClothingCareControl('bleaching', 'clothingCare.bleaching');
    const DryCleanControl = $createClothingCareControl('dryClean', 'clothingCare.dryClean');
    const DryingControl = $createClothingCareControl('drying', 'clothingCare.drying');
    const GentleOrDelicateControl = $createClothingCareControl('gentleOrDelicate', 'clothingCare.gentleOrDelicate');
    const IroningControl = $createClothingCareControl('ironing', 'clothingCare.ironing');
    const PermanentPressControl = $createClothingCareControl('permanentPress', 'clothingCare.permanentPress');
    const TumbleDryControl = $createClothingCareControl('tumbleDry', 'clothingCare.tumbleDry');
    const WashControl = $createClothingCareControl('wash', 'clothingCare.wash');
    const WashTemperatureControl = $createClothingCareControl('washTemperature', 'clothingCare.washTemperature');
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
