import Realm, { BSON } from 'realm';
import { IDraft, ISku, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import $me, { PayorTypes, Shippers, ShippingSpeeds } from '../enums';
import { getShippingById } from '../enums/shippingRates';
import { itemConditions } from '../enums/itemConditions';
import { is } from '../../common/is';
import { generateNarrative, generateTitle } from '../../components/table/controls/titleGenerator';
import { runTransaction } from '../../util/runTransaction';
import { EntityBase } from './EntityBase';

export class Draft extends EntityBase<IDraft> implements IDraft {
    listingID: Opt<string>;
    get isListed(): boolean {
        return this.listingID == null;
    }
    get getIsNoBrand(): boolean {
        return this.sku.product?.brand?.mercariBrand == null;
    }
    _id: BSON.ObjectId;
    sku: ISku;
    title: string;
    description: string;
    price: number;
    isLocalDelivery: boolean;
    payor: PayorTypes;
    smartPricing: boolean;
    smartPrice: Opt<number>;
    get getDims(): { length: number; width: number; height: number } {
        const { length, width, height } = { length: 0, width: 0, height: 0, ...(this.sku.product ?? {}) };
        return { length, width, height };
    }
    get getWeight(): { pounds: number; ounces: number } {
        const { pounds, ounces } = { pounds: 0, ounces: 0, ...(this.sku.getMaxWeight ?? {}) };
        return { pounds, ounces };
    }
    get getShipping(): { carrier: Shippers; service: ShippingSpeeds; price: number; selector: string } {
        // const service = this.sku.getIsMediaMail ? 'media-mail' : 'standard';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, version } = { id: 0, version: 0, ...(this.sku.getShipping ?? {}) };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { category: service, carrier, price, weight } = { category: 'standard' as ShippingSpeeds, price: 0, carrier: 'USPS Ground Advantage' as Shippers, weight: 0, ...(getShippingById(id) ?? {}) };
        const selector = `input#{id}`;
        return { carrier, price, selector, service };
    }
    get getColor(): Opt<{ selector: string; name: string }> {
        const colorMap = $me.productColors.map((x) => Object.fromEntries([[x.key, x] as [string, EnumItem<string>], ...x.aliases.map((y) => [y, x] as [string, EnumItem<string>])])).reduce((pv, cv) => ({ ...pv, ...cv }), {});
        const colors = this.sku.product?.color ?? [];
        const color = colors.length > 0 ? colors[0] : undefined;
        return color ? { selector: colorMap[color as keyof typeof colorMap].selector!, name: color as string } : undefined;
    }
    get getCondition(): { selector: string; name: string } {
        const selector = itemConditions.getSelector(this.sku.condition ?? 'like-new');
        const name = itemConditions.getText(this.sku.condition ?? 'like-new');
        return { selector, name };
    }
    get getBrandName(): Opt<string> {
        return this.sku.product?.brand?.mercariBrand?.name;
    }
    get getCategory(): { selector: string; name: string } {
        const category = this.sku.product?.classifier?.taxonomy?.category;
        if (category == null) throw new Error('no category');
        return category;
    }
    get getSubCategory(): { selector: string; name: string } {
        const category = this.sku.product?.classifier?.taxonomy?.subCategory;
        if (category == null) throw new Error('no category');
        return category;
    }
    get getSubSubCategory(): { selector: string; name: string } {
        const category = this.sku.product?.classifier?.taxonomy?.subSubCategory;
        if (category == null) throw new Error('no category');
        return category;
    }
    get getHashTags(): string[] {
        return (
            this.sku.allHashTags
                .sort((l, r) => {
                    return (
                        l.maxCount > r.maxCount ? -1
                        : l.maxCount < r.maxCount ? 1
                        : 0
                    );
                })
                .map((x) => x.name)
                .slice(0, 7) ?? []
        );
    }
    get getImages(): string[] {
        return this.sku?.getProductImages.map((x) => x.effective).filter(is.not.nil) as string[];
    }
    get getShouldLocalDelivery(): boolean {
        return this.getShipping.price > 14;
    }
    get getShouldSmartPricing(): boolean {
        return this.price > 13;
    }
    static schema: Realm.ObjectSchema = {
        name: schemaName($.draft()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            sku: $.sku(),
            title: $.string(),
            description: $.string(),
            price: $.float(),
            isLocalDelivery: $.bool.default(false),
            payor: $.string.default('buyer'),
            smartPricing: $.bool.default(false),
            smartPrice: $.float.opt,
            listingID: $.string.opt
        }
    };
    static labelProperty = 'title';
    static update(item: IDraft) {
        const realm = Draft.localRealm;
        const func = () => {
            if (item.sku == null) throw new Error('no sku');
            if (item.sku.product == null) throw new Error('no product');
            item.title = (item.sku.product.overrideTitle ? item.sku.product.title : generateTitle(item.sku, true)) ?? '';
            item.description = generateNarrative(item.sku, true);
            item.isLocalDelivery = item.getShouldLocalDelivery;
            item.smartPricing = item.getShouldSmartPricing;
            item.smartPrice = item.getShouldSmartPricing ? item.price * 0.8 : undefined;
        };
        runTransaction(realm, func);
        return item;
    }
    static createDraft(realm: Realm, sku: ISku, price: number = 10) {
        let result: IDraft = undefined as any as IDraft;
        const func = () => {
            const draft = {
                _id: new BSON.ObjectId(),
                sku,
                title: '',
                description: '',
                price,
                isLocalDelivery: false,
                payor: 'buyer' as PayorTypes,
                smartPricing: false,
                smartPrice: undefined
            };
            result = realm.create<IDraft>(schemaName($.draft()), draft);
        };
        runTransaction(realm, func);
        return Draft.update(result);
    }
    static init(): InitValue<IDraft> {
        return {
            _id: new BSON.ObjectId(),
            sku: undefined as any,
            title: '',
            description: '',
            price: 0,
            isLocalDelivery: false,
            payor: 'buyer' as PayorTypes,
            smartPricing: false,
            smartPrice: undefined
        };
    }
}
