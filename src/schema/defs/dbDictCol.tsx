import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { baseCol } from './baseCol';
import { DictionaryTableCell } from '../../components/table/cells/DictionaryTableCell';
import { DBDictionaryControl } from '../../components/table/controls/DBDictionaryControl';
import $me from '../enums';
import { standardizeOptions } from './standardizeOptions';

export type DBDictFacetedColOptions = {
    readonly?: boolean;
    faceted: true;
};
export type DBDictEnumColOptions = {
    readonly?: boolean;
    enumKey: string;
};
export type DBDictStringColOptions = {
    readonly?: boolean;
    maxLength?: number;
    minLength?: number;
};

export type DBDictColOptions = DBDictEnumColOptions | DBDictFacetedColOptions | DBDictStringColOptions;

export function dbDictCol<T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, header: string, objectType: string, opts?: DBDictColOptions): MRT_ColumnDef<T> {
            const { readonly, faceted, enumKey } = { readonly: false, faceted: false, enumKey: undefined, ...(opts ?? {}) };
            const enumInfo = enumKey != null ? standardizeOptions($me[enumKey as keyof typeof $me] ?? {}) : undefined;
            // eslint-disable-next-line no-console
            console.info(`enumInfo`, enumInfo);
            // const Edit = createDBDictionaryControl(objectType, faceted, enumMap) as MRT_ColumnDef<T, DictionaryBack<any>>['Edit'];
            return baseCol<T, DictionaryBack<any>>(
                helper,
                name,
                DictionaryTableCell,
                DBDictionaryControl,
                header,
                false,
                readonly,
                {
                    enumInfo,
                    objectType,
                    keyType: faceted ? 'faceted' : enumKey ?? 'string'
                },
                undefined,
                ...dependencies
            ) as MRT_ColumnDef<T>;
            // return helper.accessor(name as any, {
            //     header: header ?? camelToProper(name),
            //     enableEditing: !readonly,
            //     Cell: createDictionaryCell(objectType),
            //     Edit: (readonly ? NullCell : createDBDictionaryControl(objectType, faceted, enumMap)) as any
            // }) as any;
        };
    };
}
