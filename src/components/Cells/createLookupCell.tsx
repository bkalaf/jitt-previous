import { MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { getProperty } from '../../common/object';
import { Path } from 'react-hook-form-mui';
import { useNavigate } from 'react-router';
import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BSON } from 'realm';
import { Link } from '@mui/material';
import { $calculateSize } from '../Views/calculateSize';
import { useLogger } from '../../contexts/useLogger';
import { distinctBy } from '../../common/array/distinct';

export function createLookupCell<T extends MRT_RowData, U extends MRT_RowData>(objectType: string, labelProperty: Path<U>) {
    return function LookupCell({ cell, column, table }: Parameters<Exclude<MRT_ColumnDef<T, U | undefined>['Cell'], undefined>>[0]) {
        const value = cell.getValue<U | undefined>();
        const { info } = useLogger();
        console.info(cell.column.columnDef.accessorKey, `value`, value);
        const navigate = useNavigate();
        const [searchParams] = useSearchParams({ _id: value != null ? (value as { _id: BSON.ObjectId })._id.toHexString() : '' });
        const onClick = useCallback(() => navigate(`/data/v1/${objectType}?${searchParams.toString()}`), [navigate, searchParams]);
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
        const uqLengths = uqValues.map(x => x.length);
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
        return (
            // <span className='w-full cursor-alias'
            <Link className='w-full cursor-pointer text-left indent-1 font-extrabold underline text-pink-500 decoration-pink-500 group-data-[row-depth="4"]:text-pink-500 group-data-[row-depth="5"]:text-pink-700 group-data-[row-depth="6"]:text-pink-700 group-data-[row-depth="4"]:decoration-pink-500 group-data-[row-depth="5"]:decoration-pink-700 group-data-[row-depth="6"]:decoration-pink-700' underline='always'  variant='button' component='button' onClick={onClick}>
                {value == null ? '' : (getProperty(labelProperty, value) as string)}
            </Link>
            // <span className='w-full cursor-link-select' onClick={onClick}>
            //     {value == null ? '' : (getProperty(labelProperty, value) as string)}
            // </span>
        );
    };
}
