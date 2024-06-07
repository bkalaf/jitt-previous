// export function getProductImagePaths(image: IProductImage) {
//     const { fileSystemContext, scheduleFileChange, filename, extension, caption } = image;
//     const { downloads, products, inbound, remBgExt, remBgSuffix, updateValue } = fileSystemContext;
//     const fn = [filename, extension].join('.');
//     const remBgFn = [[filename.replaceAll(path.extname(filename), ''), remBgSuffix].join(''), remBgExt].join('.');
//     console.info(`remBgFn`, remBgFn);
//     const originalInbound = [inbound, fn].join('/');
//     const originalDownloads = [downloads, fn].join('/');
//     const originalBase = (base: string) => [base, fn].join('/');
//     const remBgDownloads = [downloads, remBgFn].join('/');
//     const [brand, product, sku] = getFolderNames(image.sku);
//     const partialFinalDest = (destFile: string) => [products, brand, product, sku, destFile].join('/');
//     const step1 = fs.existsSync(originalInbound)
//         ? scheduleFileChange('move', originalInbound, partialFinalDest(fn))
//         : fs.existsSync(originalDownloads)
//         ? scheduleFileChange('move', originalDownloads, partialFinalDest(fn))
//         : fs.existsSync(remBgDownloads)
//         ? scheduleFileChange('move', remBgDownloads, partialFinalDest(remBgFn))
//         : updateValue(image.realm, 'productImage', 'stage', 'uploaded')(image);
//     return {
//         fileSystemContext,
//         scheduleFileChange,
//         originalInbound,
//         originalBase,
//         remBgDownloads,
//         partialFinalDest
//     };
// }

export enum ProductImageDisposition {
    uploaded = 'uploaded',
    bgRemoval = 'bg-removal',
    pendingApproval = 'pending-approval',
    ready = 'ready'
}
