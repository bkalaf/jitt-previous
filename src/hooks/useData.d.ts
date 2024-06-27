import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
export declare function createIcon(icon: IconDefinition): (props: any) => import("react/jsx-runtime").JSX.Element;
export declare function useData<T extends MRT_RowData>(data: RealmObj<T>[], columns: MRT_ColumnDef<T>[], objectType?: string): import("material-react-table").MRT_TableInstance<T>;
