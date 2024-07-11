import { useMemo } from 'react';
import { Item } from '../hooks/Grid';
import { $className } from '../util/$className';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { CircularProgress } from '@mui/material';

export function DashboardCategory({ label, ...rest }: { label: string; className?: string }) {
    const { className } = useMemo(
        () =>
            $className(
                rest,
                {
                    'bg-sky-700 text-white border-cyan-500 shadow-white': !(rest.className?.includes('bg-') ?? false)
                },
                'rounded-md border p-0.5 px-3 indent-1 text-lg font-bold shadow-inner justify-center flex w-full'
            ),
        [rest]
    );
    return (
        <Item className='col-span-3 col-start-2 flex w-full justify-center'>
            <span className={className}>{label}</span>
        </Item>
    );
}
export function DashboardEntry({
    label,
    start,
    query,
    subName,
    collection,
    isDate,
    limit,
    ...rest
}: {
    label: string;
    className?: string;
    start?: 1 | 2 | 3 | 4 | 5 | 6;
    query: () => number;
    subName: string;
    collection: string;
    isDate?: boolean;
    limit: number;
}) {
    const { data: value, isLoading } = useQuery<number | Date>({
        queryKey: [collection, subName],
        queryFn: () => Promise.resolve(isDate ? new Date(query()) : query()),
        initialData: isDate ? new Date(Date.parse('1990-01-01T00:00:00.000Z')) : 0
    });
    const { className } = useMemo(
        () =>
            $className(
                rest,
                {
                    'bg-sky-700 text-white border-cyan-500 shadow-white': !(rest.className?.includes('bg-') ?? false)
                },
                'rounded-md border p-0.5 px-3 indent-1 text-lg font-bold shadow-inner '
            ),
        [rest]
    );
    const { className: classes } = useMemo(
        () =>
            $className(
                { className: 'col-span-2 flex justify-end' },
                {
                    'col-start-1': start === 1,
                    'col-start-2': start === 2,
                    'col-start-3': start === 3,
                    'col-start-4': start === 4,
                    'col-start-5': start === 5
                },
                'overlimit:bg-rose-500 overlimit:text-white overlimit:border-pink-300'
            ),

        [start]
    );
    const output = useMemo(() => (isDate ? dayjs(value as Date).format('YYYY-MM-DD') : (value as number).toFixed(0)), [isDate, value]);
    return (
        <>
            <Item className={classes}>
                <span className={className}>
                    {label.concat(' :')}
                </span>
            </Item>
            <Item className='flex justify-start'>
                {isLoading ?
                    <CircularProgress color='highlight' />
                :   <span
                        className='overlimit:bg-red-500 overlimit:text-white overlimit:border-pink-300 ml-5 rounded-md border border-cyan-500 bg-black p-0.5 px-3 text-lg font-bold text-white shadow-inner shadow-white'
                        data-value={!isDate && (value as number) >= limit ? 'overlimit' : 'underlimit'}>
                        {output}
                    </span>
                }
            </Item>
        </>
    );
}
