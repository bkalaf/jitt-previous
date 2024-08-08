import { $className } from './$className';

export function $depthClassName<T extends { className?: string }>(props: T, flags: Record<string, boolean>, ...classes: string[]): (depth: number) => T {
    return (depth: number) =>
        $className(
            props,
            {
                ...flags,
                'before:content-["▸_"]': depth === 1,
                'before:content-["▸_▸_"]': depth === 2,
                'before:content-["▸_▸_▸_"]': depth === 3,
                'before:content-["▸_▸_▸_▸_"]': depth === 4,
                'before:content-["▸_▸_▸_▸_▸_"]': depth === 5,
                'before:content-["▸_▸_▸_▸_▸_▸_"]': depth === 6,
                'before:content-["▸_▸_▸_▸_▸_▸_▸_"]': depth === 7,
                'before:content-["▸_▸_▸_▸_▸_▸_▸_▸_"]': depth === 8,
                'before:content-["▸_▸_▸_▸_▸_▸_▸_▸_▸_"]': depth === 9,
                'before:content-["▸_▸_▸_▸_▸_▸_▸_▸_▸_▸_"]': depth === 10
            },
            ...classes
        );
}
