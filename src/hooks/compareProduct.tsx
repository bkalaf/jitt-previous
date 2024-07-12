import { IProduct } from '../types';
import { deepEqual } from '../common/deepEqual';
import * as fs from 'graceful-fs';
import { PRODUCT_SEARCH_QUEUE } from './useUpdateRecord';

export function ok(value?: string): value is NonNullable<string> {
    return value != null && value.trim() !== '';
}
export function compareProduct(oldProduct: undefined | IProduct, newProduct: IProduct) {
    // console.log(`compareProduct`, `oldProduct`, `newProduct`, oldProduct, newProduct);
    function processProduct(product?: IProduct) {
        const title = product?.mediaTitle ?? product?.book?.title ?? product?.album?.title ?? product?.movie?.title ?? product?.tvSeries?.title;
        const subtitle = product?.mediaSubtitle ?? product?.book?.subtitle ?? product?.album?.subtitle ?? product?.movie?.subtitle ?? product?.tvSeries?.subtitle;
        const fulltitle = title ? [title, subtitle].filter((x) => x != null && x.length > 0).join(': ') : undefined;
        return {
            id: product?._id.toHexString(),
            title: fulltitle,
            modelNo: product?.modelNo,
            modelName: product?.modelName,
            brand: product?.brand?.name,
            category: product?.classifier?.name,
            styleNo: product?.styleNo,
            partNumbers: product?.partNumbers?.map(x => x.partNumber),
            upcs: product?.upcs?.map(x => x.value)
        }
    }
    function gatherSearchParams({ id, upcs, brand, category, modelName, modelNo, partNumbers, styleNo, title }: ReturnType<typeof processProduct>) {
        const args = [
            ...(upcs ?? []).map(upc => ({ id, upc: upc })),
            ...ok(title) ? [{ id, title }] : [],
            ...ok(brand) ? [modelName, modelNo, category, ...partNumbers ?? [], styleNo].filter(ok).map(search => ({ id, search, brand })) : [],
            ...ok(category) && (ok(modelNo) || ok(modelName)) ? [{ id, category, search: modelNo ?? modelName }] : []
        ] as { id: string, upc?: string, title?: string, search?: string, brand?: string, category?: string }[]
        return Array.from(new Set(args).values());
    }
    const current = fs.existsSync(PRODUCT_SEARCH_QUEUE) ? (JSON.parse(fs.readFileSync(PRODUCT_SEARCH_QUEUE).toString()) as any[]) : [];
    const oldValue = processProduct(oldProduct);
    const newValue = processProduct(newProduct);
    // console.log(`oldValue, newValue`, oldValue, newValue);
    if (deepEqual(oldValue, newValue)) return [];
    const next = [...current, ...gatherSearchParams(newValue)];
    // console.log(`current`, current, `next`, next);
    fs.writeFileSync(PRODUCT_SEARCH_QUEUE, JSON.stringify(next, null, '\t'));
}
// export function compareProduct(oldProduct: undefined | IProduct, newProduct: IProduct) {
//     console.log(`compareProduct`, `oldProduct`, `newProduct`, oldProduct, newProduct);
//     const func = (p?: IProduct) => {
//         if (p == null) return {};
//         const title = p.mediaTitle ?? p.book?.title ?? p.album?.title ?? p.movie?.title ?? p.tvSeries?.title;
//         const subtitle = p.mediaSubtitle ?? p.book?.subtitle ?? p.album?.subtitle ?? p.movie?.subtitle ?? p.tvSeries?.subtitle;
//         const fulltitle = title ? [title, subtitle].filter((x) => x != null && x.length > 0).join(': ') : undefined;
//         return {
//             id: p._id.toHexString(),
//             modelNo: p.modelNo,
//             modelName: p.modelName,
//             styleNo: p.styleNo,
//             brandName: p.brand?.name || p.description ? [p.brand?.name, p.description].filter((x) => x != null && x.length > 0).join(' ') : undefined,
//             title: fulltitle,
//             partNumbers: p.partNumbers?.map((x) => x.partNumber),
//             upcs: p.upcs?.map((x) => x.value)
//         };
//     };
//     const oldP = func(oldProduct);
//     const newP = func(newProduct);
//     const args: string[] = [];
//     console.log(`oldP, newP, args`, oldP, newP, args);
//     function innerSingle(key: keyof ReturnType<typeof func>) {
//         if (!deepEqual(oldP[key], newP[key])) {
//             if (newP[key] != null) args.push(newP[key] as string);
//         }
//     }
//     function innerArray(key: keyof ReturnType<typeof func>) {
//         if (!deepEqual(oldP[key], newP[key])) {
//             const oldArr = (oldP[key] ?? []) as string[];
//             const newArr = (newP[key] ?? []) as string[];
//             if (newArr.length > 0) {
//                 const additions = newArr.filter((x) => !oldArr.includes(x));
//                 additions.forEach((x) => args.push(x));
//             }
//         }
//     }
//     innerSingle('modelName');
//     console.log(`after modelName`, args);
//     innerSingle('modelNo');
//     console.log(`after modelNo`, args);
//     innerSingle('styleNo');
//     console.log(`after styleNo`, args);
//     innerSingle('brandName');
//     console.log(`after brandName`, args);
//     innerSingle('title');
//     console.log(`after title`, args);
//     innerArray('upcs');
//     console.log(`after upcs`, args);
//     innerArray('partNumbers');
//     console.log(`after partNumbers`, args);

//     const current = fs.existsSync(PRODUCT_SEARCH_QUEUE) ? (JSON.parse(fs.readFileSync(PRODUCT_SEARCH_QUEUE).toString()) as any[]) : [];
//     const next = [...current, ...args.map((arg) => ({ id: oldP.id, value: arg }))];
//     console.log(`current`, current, `args`, args, `next`, next);
//     fs.writeFileSync(PRODUCT_SEARCH_QUEUE, JSON.stringify(next, null, '\t'));
// }
