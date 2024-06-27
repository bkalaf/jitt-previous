import { MRT_RowData } from 'material-react-table';
import Realm from 'realm';
export declare function useCollectionQuery<T extends MRT_RowData>(collection: string): (Realm.Object<T, never> & T)[] | undefined;
