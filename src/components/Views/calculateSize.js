"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSize = exports.calculateHeadSize = exports.calculateBodySize = exports._calculateBodySize = exports.$calculateSize = exports._calculateSize = void 0;
const curry_1 = require("../../common/text/curry");
const flip_1 = require("../../common/text/flip");
const roundUp_1 = require("./roundUp");
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
function _calculateSize(maxLength, pxPerChar = 7.5) {
    const size = pxPerChar * maxLength;
    // console.log(size);
    // console.log(Number.isInteger(size));
    // console.log(Number.isInteger(size.toString()))
    // console.log(size.toFixed(0).includes('.'))
    return (0, roundUp_1.roundUp)(5)(Number.isInteger(size) ? size : Math.ceil(size));
}
exports._calculateSize = _calculateSize;
const $calculateSize = (x) => (0, curry_1.curry)((0, flip_1.flip)(_calculateSize))(x);
exports.$calculateSize = $calculateSize;
exports._calculateBodySize = (0, exports.$calculateSize)();
const calculateBodySize = (opts) => ({
    maxSize: (opts === null || opts === void 0 ? void 0 : opts.maxLength) ? (0, exports._calculateBodySize)(opts === null || opts === void 0 ? void 0 : opts.maxLength) : undefined,
    minSize: (opts === null || opts === void 0 ? void 0 : opts.minLength) ? (0, exports._calculateBodySize)(opts === null || opts === void 0 ? void 0 : opts.minLength) : undefined
});
exports.calculateBodySize = calculateBodySize;
const calculateHeadSize = (headerJunkPx = 97) => (header) => ({
    minSize: (0, exports.$calculateSize)(8.8)(header.length + 5) + headerJunkPx
});
exports.calculateHeadSize = calculateHeadSize;
function calculateSize(maxLength) {
    const size = 7.5 * maxLength;
    // console.log(size);
    // console.log(Number.isInteger(size));
    // console.log(Number.isInteger(size.toString()))
    // console.log(size.toFixed(0).includes('.'))
    return (0, roundUp_1.roundUp)(5)(Number.isInteger(size) ? size : Math.ceil(size));
}
exports.calculateSize = calculateSize;
// export function calculateSizes(header: string, opts?: { options?: { text: string }[],  maxLength?: number, minLength?: number  }) {
//     return {}
//     // const body = calculateBodySize(opts);
//     // const head = calculateHeadSize()(header);
//     // const _minSize = Math.max(...[...body.minSize ? [body.minSize] : [], ...head.minSize ? [head.minSize] : [], 0]);
//     // const minSize = _minSize === 0 ? undefined : _minSize;
//     // const _maxSize = body.maxSize ? body.maxSize : undefined;
//     // const maxSize = _maxSize != null ? _maxSize < (minSize ?? 0) ? (minSize ?? 0) : _maxSize : undefined;
//     // const grow = opts?.options ? false : true;
//     // const size = opts?.options ? Math.max(...opts.options.map(x => x.text.length)) + 5 : undefined;
//     // console.info('calculateSize', header, opts, body, head, _minSize, _maxSize, minSize, maxSize, grow, size);
//     // return {
//     //     maxSize,
//     //     minSize,
//     //     grow,
//     //     size
//     // }
// }
//# sourceMappingURL=calculateSize.js.map