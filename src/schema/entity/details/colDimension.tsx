import { MRT_ColumnDef, MRT_ColumnHelper, MRT_RowData } from 'material-react-table';
import { $disableWhen } from '../../defs/when';
import { colInt } from '../../defs/colInt';
import { colDouble } from '../../defs/colDouble';
import { colEnum } from '../../defs/colEnum';
import $me from '../../enums';

export function colDimension<T extends MRT_RowData>(help: MRT_ColumnHelper<T>) {
    return function <TKey extends keyof T>(...dependencies: IDependency<T, TKey>[]) {
        return function (name: keyof T & string, $header: string, uom: keyof typeof $me, numberType: 'int' | 'double'): MRT_ColumnDef<T>[] {
            const func = numberType === 'int' ? colInt : colDouble;
            return [func(help)(...dependencies)(`${name}.value` as any, $header, { min: 0 }), ...$disableWhen.property(`${name}.value` as any, 0, true)(colEnum(help)(`${name}.uom` as any, `${$header} UOM`, { enumKey: uom }))] as MRT_ColumnDef<T>[];
        };
    };
}
