import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { addressColumns } from './columns/address';
import { Address } from './entity/address';
import { attributeColumns } from './columns/attribute';
import { Attribute } from './entity/attribute';
import { auctionColumns } from './columns/auction';
import { Auction } from './entity/auction';
import { Brand } from './entity/brand';
import { Classifier } from './entity/classifier';
import { Facility } from './entity/facility';
import { HashTag } from './entity/hashTag';
import { hashTagUsage } from './entity/hashTagUsage';
import { MercariBrand } from './entity/mercariBrand';
import { MercariCategory } from './entity/mercariCategory';
import { MercariTaxonomy } from './entity/mercariTaxonomy';
import { SelfStorage } from './entity/selfStorage';
import { squareFootage } from './entity/squareFootage';
import { col } from './defs/col';
import { Barcode, barcodeColumns } from './entity/barcode';
import { Bin } from './entity/bin';
import { customItemField } from './entity/customItemField';
import { IncludedItem, includedItemColumns } from './entity/includedItem';
import { clothingCare } from './entity/clothingCare';
import { madeOfSection } from './entity/madeOfSection';
import { Product } from './entity/product';
import { productColumns } from './entity/productColumns';
import { trackSchema } from '../realmTypes';
import { connector } from './entity/connector';
import { currentSetting } from './entity/currentSetting';
import { minMax } from './entity/minMax';
import { Sku, sku } from './entity/sku';
import { ProductImage } from './entity/productImage';
import { Facing } from './entity/facing';
import { shippingSchema } from './entity/shipping';
import { facing } from './columns/facing';
import { facilityColumns } from './columns/facility';
import { binColumns } from './columns/bin';
import { brandColumns } from './columns/brand';
import { classifierColumns } from './columns/classifier';
import { clothingCareColumns } from './columns/clothingCare';
import { connectorColumns } from './columns/connector';
import { currentSettingColumns } from './columns/currentSetting';
import { customItemFieldColumns } from './columns/customItemField';
import { shippingColumns } from './columns/shipping';
import { hashTagColumns } from './columns/hashTag';
import { hashTagUsageColumns } from './columns/hashTagUsage';
import { madeOfSectionColumns } from './columns/madeOfSection';
import { mercariBrandColumns } from './columns/mercariBrand';
import { mercariCategoryColumns } from './columns/mercariCategory';
import { mercariTaxonomyColumns } from './columns/mercariTaxonomy';
import { minMaxColumns } from './columns/minMax';
import { selfStorageColumns } from './columns/selfStorage';
import { productImage } from './columns/productImage';
import { squareFootageColumns } from './columns/squareFootage';
import { trackColumns } from './columns/track';

const h = createMRTColumnHelper<{ value: any; }>();
const helper = col(h);
const stringColumn = helper.string('value', 'Value', undefined, { required: true });
const intColumn = helper.int('value', 'Value', { required: true });
const doubleColumn = helper.double('value', 'Value', { required: true });
const boolColumn = helper.bool('value', 'Value');
const dateColumn = helper.date('value', 'Value', {}, true);

// (Realm.ObjectSchema | Realm.ObjectClass<any>)
type ReferenceClass<T extends Record<string, unknown>> = Realm.ObjectClass<any> & { labelProperty: keyof T };
type EmbeddedClass<T extends Record<string, unknown>> = Realm.ObjectClass<any> & { liComponent: ListItemCellComponent<T> };

type MyClass<T extends Record<string, unknown>> = ReferenceClass<T> | EmbeddedClass<T>;

export const schema: (MyClass<any> | Realm.ObjectSchema)[] = [
    SelfStorage,
    Facility,
    Address,
    Auction,
    hashTagUsage,
    HashTag,
    MercariBrand,
    Brand,
    squareFootage,
    MercariCategory,
    MercariTaxonomy,
    Attribute,
    Classifier,
    Barcode,
    Bin,
    IncludedItem,
    customItemField,
    clothingCare,
    madeOfSection,
    trackSchema,
    Product,
    connector,
    currentSetting,
    minMax,
    shippingSchema,
    Facing,
    ProductImage,
    Sku
];

if (window.columns == null) window.columns = {};
window.columns.string = [stringColumn] as MRT_ColumnDef<any>[];
window.columns.int = [intColumn] as MRT_ColumnDef<any>[];
window.columns.double = [doubleColumn] as MRT_ColumnDef<any>[];
window.columns.date = [dateColumn] as MRT_ColumnDef<any>[];
window.columns.bool = [boolColumn] as MRT_ColumnDef<any>[];
// window.columns. = [Column] as MRT_ColumnDef<any>[];

window.columns.address = addressColumns as MRT_ColumnDef<any>[];
window.columns.attribute = attributeColumns as MRT_ColumnDef<any>[];
window.columns.auction = auctionColumns as MRT_ColumnDef<any>[];
window.columns.barcode = barcodeColumns as MRT_ColumnDef<any>[];
window.columns.bin = binColumns as MRT_ColumnDef<any>[];
window.columns.brand = brandColumns as MRT_ColumnDef<any>[];
window.columns.classifier = classifierColumns as MRT_ColumnDef<any>[];
window.columns.clothingCare = clothingCareColumns as MRT_ColumnDef<any>[];
window.columns.connector = connectorColumns as MRT_ColumnDef<any>[];
window.columns.currentSetting = currentSettingColumns as MRT_ColumnDef<any>[];
window.columns.customItemField = customItemFieldColumns as MRT_ColumnDef<any>[];
window.columns.facility = facilityColumns as MRT_ColumnDef<any>[];
window.columns.hashTag = hashTagColumns as MRT_ColumnDef<any>[];
window.columns.hashTagUsage = hashTagUsageColumns as MRT_ColumnDef<any>[];
window.columns.includedItem = includedItemColumns as MRT_ColumnDef<any>[];
window.columns.madeOfSection = madeOfSectionColumns as MRT_ColumnDef<any>[];
window.columns.mercariBrand = mercariBrandColumns as MRT_ColumnDef<any>[];
window.columns.mercariCategory = mercariCategoryColumns as MRT_ColumnDef<any>[];
window.columns.mercariTaxonomy = mercariTaxonomyColumns as MRT_ColumnDef<any>[];
window.columns.minMax = minMaxColumns as MRT_ColumnDef<any>[];
window.columns.product = productColumns as MRT_ColumnDef<any>[];
window.columns.productFacing = facing as MRT_ColumnDef<any>[];
window.columns.productImage = productImage as MRT_ColumnDef<any>[];
window.columns.selfStorage = selfStorageColumns as MRT_ColumnDef<any>[];
window.columns.shipping = shippingColumns as MRT_ColumnDef<any>[];
window.columns.sku = sku as MRT_ColumnDef<any>[];
window.columns.squareFootage = squareFootageColumns as MRT_ColumnDef<any>[];
window.columns.track = trackColumns as MRT_ColumnDef<any>[];