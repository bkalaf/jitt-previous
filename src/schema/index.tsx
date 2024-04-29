import { createMRTColumnHelper, MRT_ColumnDef } from 'material-react-table';
import { address, addressColumns } from './address';
import { attribute, attributeColumns } from './attribute';
import { Auction, auctionColumns } from './auction';
import { Brand, brandColumns } from './brand';
import { Classifier, classifierColumns } from './classifier';
import { Facility, facilityColumns } from './facility';
import { HashTag, hashTagColumns } from './hashTag';
import { hashTagUsage, hashTagUsageColumns } from './hashTagUsage';
import { mercariBrand, mercariBrandColumns } from './mercariBrand';
import { MercariCategory, mercariCategoryColumns } from './mercariCategory';
import { MercariTaxonomy, mercariTaxonomyColumns } from './mercariTaxonomy';
import { selfStorage, selfStorageColumns } from './selfStorage';
import { squareFootage, squareFootageColumns } from './squareFootage';
import dayjs from 'dayjs';
import { col } from './defs/col';

const h = createMRTColumnHelper<{ value: any }>();
const helper = col(h);
const stringColumn = helper.string('value', 'Value', undefined, { required: true });
const intColumn = helper.int('value', 'Value', { required: true });
const doubleColumn = helper.double('value', 'Value', { required: true });
const boolColumn = helper.bool('value', 'Value');
const dateColumn = helper.date('value', 'Value', (x) => x == null ? "" : dayjs(x).format('YYYY-MM-DD'), { required: true });

export const schema: (Realm.ObjectSchema | Realm.ObjectClass<any>)[] = [
    selfStorage,
    Facility,
    address,
    Auction,
    hashTagUsage,
    HashTag,
    mercariBrand,
    Brand,
    squareFootage,
    MercariCategory,
    MercariTaxonomy,
    attribute,
    Classifier
]

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