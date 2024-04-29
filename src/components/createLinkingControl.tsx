import { MRT_RowData } from 'material-react-table';
import { useWhyDidIUpdate } from '../hooks/useWhyDidIUpdate';
import { LinkingControl } from './LinkingControl';


export function createLinkingControl<T extends MRT_RowData, TValue>(objectType: string, labelProperty: string) {
    return function LinkingControl2(props: EditFunctionParams<T, TValue>) {
        useWhyDidIUpdate('LinkingControl2', props);
        const { cell } = props;
        return <LinkingControl cell={cell as any} objectType={objectType} labelProperty={labelProperty} />;
    };
}
