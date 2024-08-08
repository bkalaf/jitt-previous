import { $className } from '../util/$className';

export function Grid(props: { className?: string; children?: Children; columns: number; gap: number; start?: number }) {
    const { columns, children, gap, start, ...rest } = props;
    const spread = $className(
        rest,
        {
            'grid grid-cols-1': columns === 1,
            'grid grid-cols-2': columns === 2,
            'grid grid-cols-3': columns === 3,
            'grid grid-cols-4': columns === 4,
            'grid grid-cols-5': columns === 5,
            'grid grid-cols-6': columns === 6,
            'grid grid-cols-7': columns === 7,
            'grid grid-cols-8': columns === 8,
            'grid grid-cols-9': columns === 9,
            'grid grid-cols-10': columns === 10,
            'grid grid-cols-11': columns === 11,
            'grid grid-cols-12': columns === 12,
            'gap-1': gap === 1,
            'gap-2': gap === 2,
            'gap-3': gap === 3,
            'gap-4': gap === 4,
            'gap-5': gap === 5,
            'col-start-1': start === 1,
            'col-start-2': start === 2,
            'col-start-3': start === 3,
            'col-start-4': start === 4,
            'col-start-5': start === 5
        },
        ''
    );
    return <div {...spread}>{children}</div>;
}


