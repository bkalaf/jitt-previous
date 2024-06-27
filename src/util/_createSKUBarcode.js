// import { ISku } from '../../@types';
// import { surround } from '../../drafting/surround';
// export function createSKUBarcode(sku: ISku) {
//     const barcode = sku.skus.map((x) => x.scanValue);
//     const brandName = sku.product?.brand?.name;
//     const title = sku.product?.title;
//     return barcode.map((bc) => [surround('"', '"')(bc), surround('"', '"')(brandName ?? '-'), surround('"', '"')(title ?? '-')].join(',')).join('\n');
// }
//# sourceMappingURL=_createSKUBarcode.js.map