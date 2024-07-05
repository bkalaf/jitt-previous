import { MRT_RowData } from 'material-react-table';


export function resolveColumns<T extends MRT_RowData>(columns: JITTColumns<T>, ...dependencies: IDependency<any, any>[]) {
    return Array.isArray(columns) ? columns : columns(...dependencies);
}
