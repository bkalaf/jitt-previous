import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../../hooks/useWhyDidIUpdate';
import { LinkingControl } from '../../components/LinkingControl';

export function createLinkingControl<T extends MRT_RowData>(objectType: string, labelProperty: string) {
    return function LinkingObjectControl(props: Parameters<Exclude<MRT_ColumnDef<T, any>['Edit'], undefined>>[0]) {
        useWhyDidIUpdate('LinkingObjectControl', props);
        const { cell } = props;
        return <LinkingControl objectType={objectType} labelProperty={labelProperty} cell={cell as any} />;
    };
}
