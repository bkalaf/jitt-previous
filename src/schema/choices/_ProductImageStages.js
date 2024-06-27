// export enum ProductImageStages {
//     unknown = 'unknown',
//     uploaded = 'uploaded',
//     cropped = 'cropped',
//     pendingBgRemoval = 'pending-bg-removal',
//     bgRemoved = 'bg-removed',
//     captioned = 'captioned',
//     awaitingReview = 'awaiting-review',
//     approved = 'approved',
//     rejected = 'rejected',
//     exempted = 'exempted'
// }
// export function nextStep<T extends string>(...ladder: T[]) {
//     return function (current: T, advance = false) {
//         const op = advance ? (index: number) => index + 1 : (index: number) => index - 1;
//         const i = ladder.indexOf(current);
//         return ladder[op(i)];
//     };
// }
// // export function cycleProductImageStage(db: Realm, image: IProductImage, advance = false) {
// //     const current = image?. ?? 'uploaded' as ProductImageStages;
// //     const steps = ['uploaded', 'pending-bg-removal', 'bg-removed', 'captioned', 'awaiting-review'] as ProductImageStages[];
// //     const getNextStage = nextStep<ProductImageStages>(...steps);
// //     const $next = getNextStage(current, advance);
// //     const func = () => {
// //         db.create('productImage', { ...image, disposition: $next }, Realm.UpdateMode.Modified);
// //     };
// //     runTransaction(db, func);
// // }
//# sourceMappingURL=_ProductImageStages.js.map