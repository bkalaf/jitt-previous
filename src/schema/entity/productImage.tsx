import { FacePOV, IFacing, IProductImage, ISku, ProductImageFlags } from '../../types';
import Realm, { BSON } from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { generateCaption } from './generateCaption';
import path from 'path-browserify';
import fs from 'graceful-fs';
import { IRabbitMQContext } from '../../contexts/RabbitMQContext';
import { IFileSystemContext } from '../../contexts/FileSystemContext';
import { barcodeFormatter } from './barcodeFormatter';
import { is } from '../../common/is';
import { runTransaction } from '../../util/runTransaction';
import { fromExtensionToMimeType } from './fromExtensionToMimeType';

export class ProductImage extends Realm.Object<IProductImage> implements IProductImage {
    #realm: Realm;
    #fileSystemContext: IFileSystemContext;
    #scheduleFileChange: IRabbitMQContext['scheduleFileChange'];
    _id: BSON.ObjectId;
    fullpath: string;
    filename: string;
    extension: string;
    mimeType: string;
    sku: ISku;
    flags: ListBack<ProductImageFlags>;
    takenOn?: Date;
    caption?: string | undefined;
    facing?: IFacing | undefined;
    enabled?: 'original' | 'rembg';
    get productionFolder(): string {
        return [this.#fileSystemContext.products, this.brandFolder, this.productFolder, this.skuFolder].join('/');
    }
    get brandFolder(): string {
        return this.sku?.product?.brand?.name ?? 'no-brand';
    }
    get productFolder(): string {
        return [barcodeFormatter(this?.sku?.product?.upcs.at(0)), this?.sku?.product?.modelNo, this?.sku?.product?.description].find(is.not.nil) ?? new BSON.UUID().toHexString(false);
    }
    get skuFolder(): string {
        return barcodeFormatter(this.sku?.skus[0].value);
    }
    get uploadPath(): string | undefined {
        return [this.#fileSystemContext.inbound, [this.filename, this.extension].join('.')].join('/');
    }

    get hasRemBg(): boolean | undefined {
        return fs.existsSync(this.remBGFromDownload) || fs.existsSync(this.remBGInProductFolder);
    }
    get effectivePath(): string | undefined {
        return this.isIgnored ? undefined : this.enabled === 'original' ? this.originalInProductFolder : this.enabled === 'rembg' ? this.remBGInProductFolder : undefined;
    }

    get remBGFn(): string {
        return this.#fileSystemContext.toRemBG(this.filename);
    }
    get remBGFromDownload(): string {
        return [this.#fileSystemContext.inbound, this.remBGFn].join('/');
    }
    get remBGInProductFolder(): string {
        return [this.productionFolder, this.#fileSystemContext.imagesVideosDocs[0], this.remBGFn].join('/');
    }
    get originalFromUpload(): string {
        return this.fullpath;
    }
    get originalInProductFolder(): string {
        return [this.productionFolder, this.#fileSystemContext.imagesVideosDocs[0], [this.filename, this.extension].join('.')].join('/');
    }
    stageRemBG(): void {
        const stageFolder = [this.#fileSystemContext.root, 'rembg-stage'].join('/');
        const destination = [stageFolder, [this.filename, this.extension].join('.')].join('/');
        this.#scheduleFileChange('copy', this.originalInProductFolder, destination);
    }
    moveOriginal(): void {
        this.#scheduleFileChange('move', this.originalFromUpload, this.originalInProductFolder);
    }
    moveRemBG(): void {
        this.#scheduleFileChange('move', this.remBGFromDownload, this.remBGInProductFolder);
    }
    createFolders(): void {
        // Promise.all([
        //     [this.productionFolder, this.#fileSystemContext.imagesVideosDocs[0]].join('/'),
        //     [this.productionFolder, this.#fileSystemContext.imagesVideosDocs[1]].join('/'),
        //     [this.productionFolder, this.#fileSystemContext.imagesVideosDocs[2]].join('/'),
        // ].map(x => checkFolder(x))).then(x => x.every(y => y === true));
        const dirs = [
            [this.productionFolder, this.#fileSystemContext.imagesVideosDocs[0]].join('/'),
            [this.productionFolder, this.#fileSystemContext.imagesVideosDocs[1]].join('/'),
            [this.productionFolder, this.#fileSystemContext.imagesVideosDocs[2]].join('/')
        ];
        dirs.forEach(d => this.#scheduleFileChange('create', d));
    }

    get isDoNotRemBG(): boolean {
        return this.flags?.includes('do-not-rembg') ?? false;
    }
    get isIgnored(): boolean {
        return this.flags?.includes('ignore') ?? false;
    }
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
            enabled: $.string.opt
        }
    };
    static update(realm: Realm, item: IProductImage) {
        const func = () => {
            const mimeType = fromExtensionToMimeType(item.extension);
            const caption = generateCaption(item.facing ?? { pov: [] as FacePOV[] } as any);
            if (item.facing?.pov == null) {
                if (item.facing == null) {
                    item.facing = { pov: [] as FacePOV[] } as any
                }
            }
            if (mimeType !== item.mimeType) {
                item.mimeType = mimeType;
            }
            if (item.takenOn == null) {
                item.takenOn = new Date(Date.now());
            }
            if (item.caption !== caption) {
                item.caption = caption;
            }
        };
        runTransaction(realm, func)
        return item;
    }

    static ctor(realm: Realm, fullname: string, sku: ISku, fileSystemContext: IFileSystemContext, scheduleFileChange: IRabbitMQContext['scheduleFileChange']) {
        const result = new ProductImage(realm, fullname, sku, fileSystemContext, scheduleFileChange);
        return result;
    }
    constructor(realm: Realm, fullname: string, sku: ISku, fileSystemContext: IFileSystemContext, scheduleFileChange: IRabbitMQContext['scheduleFileChange']) {
        const extension = path.extname(fullname).slice(1);
        const filename = path.basename(fullname).replaceAll('.'.concat(extension), '');
        const values = {
            _id: new BSON.ObjectId(),
            fullpath: fullname,
            filename,
            extension,
            sku,
            flags: [],
            takenOn: fs.statSync(fullname).birthtime ?? new Date(Date.now()),
            facing: {
                pov: [] as FacePOV[]
            } as any,
            caption: '',
            mimeType: fromExtensionToMimeType(path.extname(fullname))
        } as InitialValue<IProductImage>;
        super(realm, values);
        this.createFolders();
        this.#fileSystemContext = fileSystemContext;
        this.#scheduleFileChange = scheduleFileChange;
        this.#realm = realm;
    }
    markUpper(): void {
        this.facing?.markUpper();
    }
    markLower(): void {
        this.facing?.markLower();
    }
    markLeft(): void {
        this.facing?.markLeft();
    }
    markRight(): void {
        this.facing?.markRight();
    }
    markFront(): void {
        this.facing?.markFront();
    }
    markBack(): void {
        this.facing?.markBack();
    }
    markInner(): void {
        this.facing?.markInner();
    }
    markLogo(): void {
        this.facing?.markLogo();
    }
    markUPC(): void {
        this.facing?.markUPC();
    }
    markEnhancer(): void {
        this.facing?.markEnhancer();
    }
    markDefect(): void {
        this.facing?.markDefect();
    }
    markTag(): void {
        this.facing?.markTag();
    }
}
