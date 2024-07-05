import { IFacing, IProductImage, ISku, ProductImageFlags } from '../../types';
import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { ProductImageDisposition } from './ProductImageDisposition';
import { getFolderNames, getRemBgName } from '../../util/getFolderNames';
import { runTransaction } from '../../util/runTransaction';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';

const FILESYSTEM_PRODUCTS = process.env.FILESYSTEM_PRODUCTS ?? '';
const FILESYSTEM_ROOT = process.env.FILESYSTEM_ROOT ?? '';
const REMOVE_BG_EXT = process.env.REMOVE_BG_EXT ?? '';
const REMOVE_BG_SUFFIX = process.env.REMOVE_BG_SUFFIX ?? '';

export class ProductImage extends EntityBase<IProductImage> implements IProductImage {
    static columns: MRT_ColumnDef<IProductImage>[] = [];
    static init(): InitValue<IProductImage> {
        return {
            _id: new BSON.ObjectId(),
            flags: [],
            takenOn: new Date(Date.now()),
            disposition: ProductImageDisposition.pendingApproval,
            fullpath: '',
            filename: '',
            extension: '',
            mimeType: '',
            hasRemBG: false,
            sku: undefined as any
        };
    }
    static update(item: IProductImage) {
        const func = () => {
            if (item.selected != null) {
                item.disposition = ProductImageDisposition.ready;
            } else if (item.flags?.includes('do-not-rembg')) {
                item.selected = 'original';
                item.disposition = ProductImageDisposition.ready;
            } else if (item.flags?.includes('ignore')) {
                item.selected = undefined;
                item.disposition = ProductImageDisposition.ready;
            } else if (item.selected == null && item.hasRemBG === false) {
                item.disposition = ProductImageDisposition.bgRemoval;
            }
        };
        runTransaction(ProductImage.localRealm, func);
    }
    get effective(): Opt<string> {
        const folders = getFolderNames(this.sku);
        return this.hasSelection ? [FILESYSTEM_ROOT, FILESYSTEM_PRODUCTS, ...folders, this.selected === 'original' ? this.filename : getRemBgName(this.filename, REMOVE_BG_SUFFIX, REMOVE_BG_EXT)].join('\\') : undefined;
    }
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
            hasRemBG: $.bool.default(false),
            disposition: $.string.opt
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
    public flags: DBList<ProductImageFlags>;
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
