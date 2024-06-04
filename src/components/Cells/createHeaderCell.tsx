import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { Path } from 'react-hook-form-mui';
import React, { useCallback, useEffect } from 'react';
import { $calculateSize } from '../Views/calculateSize';
import { useLogger } from '../../hooks/useLogger';
import { distinctBy } from '../../common/array/distinct';

export function createHeaderCell<T extends MRT_RowData, U extends MRT_RowData>(labelProperty: Path<U>) {
    return function LookupCell({ column, table }: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Header'], null | undefined | string | number | boolean | React.ReactElement<any> | Iterable<React.ReactNode>>>[0]) {
        const { info } = useLogger();
        const uqValues = distinctBy<string>(
            (s1, s2) => s1.localeCompare(s2) === 0,
            Array.from(column.getFacetedUniqueValues().keys())
                .map((x) => {
                    try {
                        return x != null ? (eval(`x.${labelProperty}`) as string) : undefined;
                    } catch (error) {
                        console.error('UQ VALUES ERROR', error);
                    }
                })
                .filter((x) => x != null) as string[]
        );
        info('uqValues', uqValues);
        const uqLengths = uqValues.map((x) => x.length);
        info('uqLengths', uqLengths);
        const maxLength = $calculateSize(9.5)(Math.max(...[0, ...uqLengths]) + 4);
        const name = column.columnDef.accessorKey ?? column.columnDef.id ?? 'n/a';
        const currentSizes = Object.fromEntries(Object.entries(table.getState().columnSizing));
        const currentSize = name in currentSizes ? currentSizes[name] : undefined;
        const func = useCallback(() => {
            console.log('stringCell.func in useEffect', maxLength, name);
            table.setColumnSizing((old) => {
                if (maxLength === 0) return old;
                if (currentSize != null && currentSize >= maxLength) {
                    console.info('SHORTING stringCell.func');
                    return old;
                }
                const newState = { ...old, [name]: maxLength };
                console.info(`sizeChange`, old, newState);
                return newState;
            });
        }, [currentSize, maxLength, name, table]);
        useEffect(func, [func]);
        return column.columnDef.header;
    };
}
