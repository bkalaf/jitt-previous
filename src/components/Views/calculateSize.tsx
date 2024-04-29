import { curry, flip } from '../../common/text';
import { roundUp } from './roundUp';

// import { useEffectiveCollection } from '../../hooks/useEffectiveCollection';
// import { useMemo } from 'react';
// export function useSubRows(objectType?: string) {
//     const route = useEffectiveCollection(objectType);
//     return useMemo(() => {
//         return route === 'classifier' ?
//     }, [])
// }
// const v: MRT_TableOptions<any>['enable']
// export function BoundedContainer({ h, w, children }: { h: number; w: number; children: Children }) {
//     const style = useMemo(() => ({ width: `${w.toFixed(0)}px`, height: `${h.toFixed(0)}px` } as React.CSSProperties), [h, w]);
//     return <div className='flex overflow-scroll' style={style}>{children}</div>;
// }
// export function BoundingContainer({ children, Component }: { children: Children; Component: React.FunctionComponent<{ children: Children; h: number; w: number }> }) {
//     const [dims, setDims] = useState<{ h: number; w: number }>({ h: 0, w: 0 });
//     const ref = useCallback((el: HTMLDivElement | null) => {
//         if (el != null) {
//             const { height, width } = el.getBoundingClientRect();
//             setDims({ h: height, w: width });
//         }
//     }, []);
//     useEffect(() => {
//         console.info('DIMS', dims);
//     }, [dims]);
//     return (
//         <div ref={ref} className='flex flex-grow w-full h-full'>
//             <Component h={dims.h} w={dims.w}>
//                 {children}
//             </Component>
//         </div>
//     );
// }

export function _calculateSize(maxLength: number, pxPerChar = 7.5) {
    const size = pxPerChar * maxLength;
    // console.log(size);
    // console.log(Number.isInteger(size));
    // console.log(Number.isInteger(size.toString()))
    // console.log(size.toFixed(0).includes('.'))
    return roundUp(5)(Number.isInteger(size) ? size : Math.ceil(size));
}
export const $calculateSize = (x?: number) => curry(flip(_calculateSize))(x);
export const _calculateBodySize = $calculateSize();
export const calculateBodySize = (opts?: { maxLength?: number, minLength?: number }) => ({
    maxSize: opts?.maxLength ? _calculateBodySize(opts?.maxLength) : undefined,
    minSize: opts?.minLength ? _calculateBodySize(opts?.minLength) : undefined
})
export const calculateHeadSize = (headerJunkPx = 97) => (header: string) => ({
    minSize: $calculateSize(8.8)(header.length + 5) + headerJunkPx
});

export function calculateSize(maxLength: number) {
    const size = 7.5 * maxLength;
    // console.log(size);
    // console.log(Number.isInteger(size));
    // console.log(Number.isInteger(size.toString()))
    // console.log(size.toFixed(0).includes('.'))
    return roundUp(5)(Number.isInteger(size) ? size : Math.ceil(size));
}


export function calculateSizes(header: string, opts?: { options?: { text: string }[],  maxLength?: number, minLength?: number  }) {
    const body = calculateBodySize(opts);
    const head = calculateHeadSize()(header);

    const _minSize = Math.max(...[...body.minSize ? [body.minSize] : [], ...head.minSize ? [head.minSize] : [], 0]);
    const minSize = _minSize === 0 ? undefined : _minSize;
    const _maxSize = body.maxSize ? body.maxSize : undefined;
    const maxSize = _maxSize != null ? _maxSize < (minSize ?? 0) ? (minSize ?? 0) : _maxSize : undefined;
    const grow = opts?.options ? false : true;
    const size = opts?.options ? Math.max(...opts.options.map(x => x.text.length)) + 5 : undefined;
    console.info('calculateSize', header, opts, body, head, _minSize, _maxSize, minSize, maxSize, grow, size);
    return {
        maxSize,
        minSize,
        grow,
        size
    }
}