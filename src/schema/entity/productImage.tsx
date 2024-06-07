import { IFacing, IProductImage, ISku, ProductImageFlags } from '../../types';
import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { ProductImageDisposition } from './ProductImageDisposition';

export class ProductImage extends Realm.Object<IProductImage> implements IProductImage {
    static labelProperty = 'filename';
    static schema: Realm.ObjectSchema = {
        name: schemaName($.productImage()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            fullpath: $.string(),
            filename: $.string(),
            extension: $.string.opt,
            mimeType: $.string.opt,
            sku: $.sku(),
            flags: $.string.list,
            takenOn: $.date.opt,
            caption: $.string.opt,
            facing: $.productFacing(),
            selected: $.string.opt,
            stage: $.string.opt,
            hasRemBG: $.bool.default(false)
        }
    };

    get hasSelection(): boolean {
        return this.selected != null;
    }

    public _id: BSON.ObjectId;
    public fullpath: string;
    public filename: string;
    public extension: string;
    public mimeType: string;
    public sku: ISku;
    public flags: ListBack<ProductImageFlags>;
    public takenOn?: Date;
    public caption?: string | undefined;
    public facing?: IFacing | undefined;
    public selected?: 'original' | 'rembg';
    public disposition: ProductImageDisposition;
    public hasRemBG: boolean;
    get isDoNotRemBG(): boolean {
        return this.flags?.includes('do-not-rembg') ?? false;
    }
    get isIgnored(): boolean {
        return this.flags?.includes('ignore') ?? false;
    }

    // static update(realm: Realm, item: IProductImage) {
    //     const func = () => {
    //         const mimeType = fromExtensionToMimeType(item.extension);
    //         const caption = generateCaption(item.facing ?? ({ pov: [] as FacePOV[] } as any));
    //         if (item.facing?.pov == null) {
    //             if (item.facing == null) {
    //                 // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //                 item.facing = { pov: [] as FacePOV[] } as any;
    //             }
    //         }
    //         if (mimeType !== item.mimeType) {
    //             item.mimeType = mimeType;
    //         }
    //         if (item.takenOn == null) {
    //             item.takenOn = new Date(Date.now());
    //         }
    //         if (item.caption !== caption) {
    //             item.caption = caption;
    //         }
    //     };
    //     runTransaction(realm, func);
    //     return item;
    // }

    // constructor(realm: Realm, fn: string, sku: ISku, shouldRemoveBG: boolean, downloads: string, remBgExt: string, remBgSuffix: string, x?: IFacing['x'], y?: IFacing['y'], z?: IFacing['z'], creationTime?: Date, caption?: string, ...povs: FacePOV[]) {
    //     const remBG = [downloads, path.basename(fn).replaceAll(path.extname(fn), '').concat(remBgSuffix).concat('.').concat(remBgExt)].join('/');
    //     const $removeBG = fs.existsSync(remBG) ? false : shouldRemoveBG;
    //     const facing = { pov: povs ?? [], x, y, z } as any;
    //     const productImage: InitialValue<IProductImage> = {
    //         _id: new BSON.ObjectId(),
    //         extension: path.extname(fn).replaceAll('.', ''),
    //         filename: path.basename(fn),
    //         fullpath: fn,
    //         mimeType: fromExtensionToMimeType(path.extname(fn).replaceAll('.', '')),
    //         sku,
    //         flags: $removeBG ? [] : ['do-not-rembg'],
    //         facing,
    //         takenOn: creationTime ?? new Date(Date.now()),
    //         caption: [generateCaption(facing), caption].filter(is.not.nil).join(' - '),
    //         disposition: ProductImageDisposition.uploaded
    //     };
    //     super(realm, productImage);
    // }

    // static fromFileInput(realm: Realm, scheduleFileChange: IRabbitMQContext['scheduleFileChange'], fileSystemContext: IFileSystemContext, sku: ISku, el: HTMLInputElement) {
    //     const files = Array.from(el.files ?? []) ?? ([] as File[]);
    //     const filesToMove = files.map((file) => [file.name, fs.statSync(file.name).birthtime, fs.readFileSync(file.name).buffer] as [string, Date, ArrayBuffer]);
    //     const { products, downloads, remBgExt, remBgSuffix } = fileSystemContext;
    //     const productDestinationPartial = [products].concat(...getFolderNames(sku)).join('/');
    //     console.log(productDestinationPartial);
    //     const scheduleMove = (fn: string, takenOn?: Date = new Date(Date.now())) => (partialData: { caption: string; removeBG: boolean }) => {
    //         scheduleFileChange('move', fn, [productDestinationPartial, path.basename(fn)].join('/'));
    //         const remBG = [downloads, path.basename(fn).replaceAll(path.extname(fn), '').concat(remBgSuffix).concat('.').concat(remBgExt)].join('/');
    //         if (fs.existsSync(remBG)) {
    //             scheduleFileChange('move', remBG, [productDestinationPartial, path.basename(remBG)].join('/'));
    //         }
    //         const productImage: InitialValue<IProductImage> = {
    //             _id: new BSON.ObjectId(),
    //             extension: path.extname(fn).replaceAll('.', ''),
    //             filename: path.basename(fn),
    //             fullpath: fn,
    //             mimeType: fromExtensionToMimeType(path.extname(fn).replaceAll('.', '')),
    //             sku,
    //             flags: partialData.removeBG ? [] : ['do-not-rembg'],
    //             facing: ({ pov: [] as FacePOV[] } as InitialValue<IFacing>) as IFacing,
    //             takenOn,
    //             caption: partialData.caption
    //         };
    //         return new ProductImage(realm, productImage);
    //     };
    // }
}
//     markUpper(): void {
//         this.facing?.markUpper();
//     }
//     markLower(): void {
//         this.facing?.markLower();
//     }
//     markLeft(): void {
//         this.facing?.markLeft();
//     }
//     markRight(): void {
//         this.facing?.markRight();
//     }
//     markFront(): void {
//         this.facing?.markFront();
//     }
//     markBack(): void {
//         this.facing?.markBack();
//     }
//     markInner(): void {
//         this.facing?.markInner();
//     }
//     markLogo(): void {
//         this.facing?.markLogo();
//     }
//     markUPC(): void {
//         this.facing?.markUPC();
//     }
//     markEnhancer(): void {
//         this.facing?.markEnhancer();
//     }
//     markDefect(): void {
//         this.facing?.markDefect();
//     }
//     markTag(): void {
//         this.facing?.markTag();
//     }
// }
