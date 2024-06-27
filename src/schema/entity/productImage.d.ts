import { IFacing, IProductImage, ISku, Opt, ProductImageFlags } from '../../types';
import Realm, { BSON } from 'realm';
import { ProductImageDisposition } from './ProductImageDisposition';
import { EntityBase } from './EntityBase';
export declare class ProductImage extends EntityBase<IProductImage> implements IProductImage {
    static init(): InitValue<IProductImage>;
    static update(item: IProductImage): void;
    get effective(): Opt<string>;
    static labelProperty: string;
    static schema: Realm.ObjectSchema;
    get hasSelection(): boolean;
    _id: BSON.ObjectId;
    fullpath: string;
    filename: string;
    extension: string;
    mimeType: string;
    sku: ISku;
    flags: DBList<ProductImageFlags>;
    takenOn?: Date;
    caption?: string | undefined;
    facing?: IFacing | undefined;
    selected?: 'original' | 'rembg';
    disposition: ProductImageDisposition;
    hasRemBG: boolean;
    get isDoNotRemBG(): boolean;
    get isIgnored(): boolean;
}
