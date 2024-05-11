import Realm from "realm";
import { DetailTypes, IBarcode, IBrand, IClassifier, IClothingCare, ICustomItemField, IHashTag, IIncludedItem, IMadeOfSection, IProduct } from '../../types';
import { ObjectId } from 'bson';
import { ProductColors, productColors } from '../enums/productColors';
import { Genders, genders } from '../enums/genders';
import { Flags, flagOptions } from '../enums/flags';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { col } from '../defs/col';
import { distinctByOID } from '../../common/array/distinct';
import { whenType } from '../defs/when';
import { madeOfSection } from './madeOfSection';

export class Product extends Realm.Object<IProduct> implements IProduct {
    get allHashTags(): IHashTag[] {
        return distinctByOID([...this.brand?.allHashTags ?? [], ...this?.classifier?.allHashTags ?? []])
    }
    get detailTypes(): DetailTypes[] {
        return this.classifier?.detailTypes ?? ['general'];
    }
    static schema: Realm.ObjectSchema = {
        name: schemaName($.product()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            asins: $.string.list,
            brand: $.brand(),
            classifier: $.classifier(),
            includes: $.includedItem.list,
            customAttributes: $.customItemField.list,
            features: $.string.list,
            hashTags: $.hashTag.list,
            flags: $.string.list,
            weight: $.double(),
            length: $.double(),
            width: $.double(),
            height: $.double(),
            modelNo: $.string(),
            notes: $.string(),
            title: $.string(),
            upcs: $.barcode.list,
            circa: $.string(),
            color: $.string.list,
            description: $.string(),
            madeOf: $.madeOfSection.list,
            gender: $.string(),
            styleNo: $.string(),
            cutNo: $.string(),
            text: $.string(),
            rnNo: $.int(),
            clothingCare: $.clothingCare()
        }
    }
    _id: ObjectId;
    asins: DBList<string>;
    brand?: IBrand | undefined;
    classifier?: IClassifier | undefined;
    includes: DBList<IIncludedItem>;
    customAttributes: DBList<ICustomItemField>;
    features: DBList<string>;
    flags: DBList<Flags>;
    hashTags: DBList<IHashTag>;
    height?: number | undefined;
    width?: number | undefined;
    length?: number | undefined;
    weight?: number | undefined;
    modelNo?: string | undefined;
    notes?: string | undefined;
    title?: string | undefined;
    upcs: DBList<IBarcode>;
    circa?: string | undefined;
    color?: DBList<ProductColors>;
    description?: string | undefined;
    madeOf: DBList<IMadeOfSection>;
    gender?: Genders;
    cutNo?: string | undefined;
    styleNo?: string | undefined;
    text?: string | undefined;
    rnNo?: number | undefined;
    clothingCare?: IClothingCare | undefined;


}

const h = createMRTColumnHelper<IProduct>();
const helper = col(h);

export const productColumns: MRT_ColumnDef<IProduct>[] = [
    helper.pk(),
    helper.lookup('brand', 'Brand', { objectType: 'brand', labelProperty: 'name' }),
    helper.lookup('classifier', 'Classifier', { objectType: 'classifier', labelProperty: 'name' }),
    helper.listOfEmbed('includes', 'Includes', 'includedItem'),
    helper.listOfEmbed('customAttributes', 'Custom Item Field', 'customItemField'),
    helper.listOfPrimitive('asins', 'ASINs', 'string'),
    helper.listOfPrimitive('features', 'Features', 'string'),
    helper.flags('flags', 'Flags', flagOptions),
    helper.listOfObject('hashTags', 'Hash Tags', 'hashTag', 'name'),
    helper.measure('length', 'Length', 'in', {}),
    helper.measure('width', 'Width', 'in', {}),
    helper.measure('height', 'Height', 'in', {}),
    helper.measure('weight', 'Weight', 'g', {}),
    helper.string('modelNo', 'Model #', undefined, {}),
    helper.string('notes', 'Notes', undefined, { maxLength: 500 }),
    helper.string('title', 'Title', undefined, { maxLength: 80 }),
    helper.listOfObject('upcs', 'UPCS', 'barcode', 'value'),
    helper.string('circa', 'Circa', undefined, {}),
    helper.listofEnum('color', 'Colors', { options: productColors }),
    helper.string('description', 'Description', undefined, { maxLength: 150 }),
    whenType('apparel', helper.enum('gender', 'Gender', { options: genders })),
    whenType('apparel', helper.string('cutNo', 'Cut #', undefined, {})),
    whenType('apparel', helper.string('styleNo', 'Style #', undefined, {})),
    whenType('apparel', helper.string('text', 'Text', undefined, {})),
    whenType('apparel', helper.int('rnNo', 'RN #', { min: 0, max: 250000 })),
    whenType('apparel', h.group({
        header: 'Clothing Care',
        columns: [
            helper.clothingCare('clothingCare.bleaching', 'Bleaching', 'bleaching'),
            helper.clothingCare('clothingCare.dryClean', 'Dry Clean', 'dryClean'),
            helper.clothingCare('clothingCare.drying', 'Drying', 'drying'),
            helper.clothingCare('clothingCare.gentleOrDelicate', 'Gentle Or Delicate', 'gentleOrDelicate'),
            helper.clothingCare('clothingCare.ironing', 'Ironing', 'ironing'),
            helper.clothingCare('clothingCare.permanentPress', 'Permanent Press', 'permanentPress'),
            helper.clothingCare('clothingCare.tumbleDry', 'Tumble Dry', 'tumbleDry'),
            helper.clothingCare('clothingCare.wash', 'Wash', 'wash'),
            helper.clothingCare('clothingCare.washTemperature', 'Wash Temperature', 'washTemperature'),
        ]   
    })),
    whenType('apparel', helper.dictionary('madeOf', 'Made Of', 'madeOfSection', { maxLength: 25 }))
]