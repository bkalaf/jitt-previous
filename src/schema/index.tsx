import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { Address, address, addressColumns } from './entity/address';
import { Attribute, attribute, attributeColumns } from './entity/attribute';
import { Auction, auctionColumns } from './entity/auction';
import { Brand, brandColumns } from './entity/brand';
import { Classifier, classifierColumns } from './entity/classifier';
import { Facility, facilityColumns } from './entity/facility';
import { HashTag, hashTagColumns } from './entity/hashTag';
import { hashTagUsage, hashTagUsageColumns } from './entity/hashTagUsage';
import { MercariBrand, mercariBrand, mercariBrandColumns } from './entity/mercariBrand';
import { MercariCategory, mercariCategoryColumns } from './entity/mercariCategory';
import { MercariTaxonomy, mercariTaxonomyColumns } from './entity/mercariTaxonomy';
import { SelfStorage, selfStorage, selfStorageColumns } from './entity/selfStorage';
import { squareFootage, squareFootageColumns } from './entity/squareFootage';
import dayjs from 'dayjs';
import { col } from './defs/col';
import { Barcode, barcodeColumns } from './entity/barcode';
import { Bin, binColumns } from './entity/bin';
import { customItemFieldColumns, customItemField } from './entity/customItemField';
import { IncludedItem, includedItem, includedItemColumns } from './entity/includedItem';
import { clothingCare, clothingCareColumns } from './entity/clothingCare';
import { madeOfSection, madeOfSectionColumns } from './entity/madeOfSection';
import { Product } from './entity/product';
import { productColumns } from './entity/productColumns';
import { trackSchema } from '../realmTypes';
import { trackColumns } from './entity/track';
import { connector, connectorColumns } from './entity/connector';
import { currentSetting, currentSettingColumns } from './entity/currentSetting';
import { minMax, minMaxColumns } from './entity/minMax';

const h = createMRTColumnHelper<{ value: any }>();
const helper = col(h);
const stringColumn = helper.string('value', 'Value', undefined, { required: true });
const intColumn = helper.int('value', 'Value', { required: true });
const doubleColumn = helper.double('value', 'Value', { required: true });
const boolColumn = helper.bool('value', 'Value');
const dateColumn = helper.date('value', 'Value', (x) => (x == null ? '' : dayjs(x).format('YYYY-MM-DD')), { required: true });

// (Realm.ObjectSchema | Realm.ObjectClass<any>)
export const schema: (Realm.ObjectClass<any> & ({ labelProperty: string; } | { liComponent: ListItemCellComponent<any> }) | Realm.ObjectSchema)[] = [
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
    minMax
];

if (window.columns == null) window.columns = {};
window.columns.string = [stringColumn] as MRT_ColumnDef<any>[];
window.columns.int = [intColumn] as MRT_ColumnDef<any>[];
window.columns.double = [doubleColumn] as MRT_ColumnDef<any>[];
window.columns.date = [dateColumn] as MRT_ColumnDef<any>[];
window.columns.bool = [boolColumn] as MRT_ColumnDef<any>[];
// window.columns. = [Column] as MRT_ColumnDef<any>[];

window.columns.selfStorage = selfStorageColumns as MRT_ColumnDef<any>[];
window.columns.facility = facilityColumns as MRT_ColumnDef<any>[];
window.columns.address = addressColumns as MRT_ColumnDef<any>[];
window.columns.auction = auctionColumns as MRT_ColumnDef<any>[];
window.columns.hashTagUsage = hashTagUsageColumns as MRT_ColumnDef<any>[];
window.columns.hashTag = hashTagColumns as MRT_ColumnDef<any>[];
window.columns.mercariBrand = mercariBrandColumns as MRT_ColumnDef<any>[];
window.columns.brand = brandColumns as MRT_ColumnDef<any>[];
window.columns.squareFootage = squareFootageColumns as MRT_ColumnDef<any>[];
window.columns.mercariCategory = mercariCategoryColumns as MRT_ColumnDef<any>[];
window.columns.mercariTaxonomy = mercariTaxonomyColumns as MRT_ColumnDef<any>[];
window.columns.attribute = attributeColumns as MRT_ColumnDef<any>[];
window.columns.classifier = classifierColumns as MRT_ColumnDef<any>[];
window.columns.barcode = barcodeColumns as MRT_ColumnDef<any>[];
window.columns.bin = binColumns as MRT_ColumnDef<any>[];
window.columns.includedItem = includedItemColumns as MRT_ColumnDef<any>[];
window.columns.customItemField = customItemFieldColumns as MRT_ColumnDef<any>[];
window.columns.madeOfSection = madeOfSectionColumns as MRT_ColumnDef<any>[];
window.columns.clothingCare = clothingCareColumns as MRT_ColumnDef<any>[];
window.columns.product = productColumns as MRT_ColumnDef<any>[];
window.columns.track = trackColumns as MRT_ColumnDef<any>[];
window.columns.connector = connectorColumns as MRT_ColumnDef<any>[];
window.columns.currentSetting = currentSettingColumns as MRT_ColumnDef<any>[];
window.columns.minMax = minMaxColumns as MRT_ColumnDef<any>[];