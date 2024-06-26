import { IClassifier, IProduct, Opt } from '../../types';
import { flagOptions } from '../enums/flags';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { col } from '../defs/col';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);
export const productColumns: MRT_ColumnDef<IProduct>[] = [
    helper.pk(),
    helper.lookup('brand', 'Brand', { objectType: 'brand' }),
    helper.lookup('classifier', 'Classifier', {
        objectType: 'classifier',
        onChange: (setValue: (name: string, value: any) => void, oldValue: Opt<IClassifier>, newValue: Opt<IClassifier>) => {
            if (oldValue) {
                oldValue.allAttributes.forEach(({ path, value }) => {
                    setValue(path, typeof value === 'boolean' ? !value : undefined);
                });
            }
            if (newValue) {
                newValue.allAttributes.forEach(({ path, unset, value }) => {
                    if (unset) {
                        setValue(path, undefined);
                    } else {
                        setValue(path, value);
                    }
                });
            }
        }
    }),
    helper.listOfEmbed('includes', 'Includes', 'includedItem'),
    helper.listOfEmbed('customAttributes', 'Custom Item Field', 'customItemField'),
    helper.listOfPrimitive('asins', 'ASINs', 'string'),
    helper.listOfPrimitive('features', 'Features', 'string'),
    helper.flags('flags', 'Flags', flagOptions),
    helper.listOfObject('hashTags', 'Hash Tags', 'hashTag'),
    helper.measure('length', 'Length', 'in', {}),
    helper.measure('width', 'Width', 'in', {}),
    helper.measure('height', 'Height', 'in', {}),
    helper.measure('weight', 'Weight', 'g', {}),
    helper.enum('origin', 'Origin', { enumKey: 'countries' }),
    helper.string('modelNo', 'Model #', undefined, {}),
    helper.string('modelName', 'Model Name', undefined, {}),
    helper.listOfPrimitive('partNumbers', 'Part #s', 'string'),
    helper.string('notes', 'Notes', undefined, { maxLength: 500 }),
    helper.string('title', 'Title', undefined, { maxLength: 80 }),
    helper.bool('overrideTitle', 'Override Title'),
    helper.listOfObject('upcs', 'UPCS', 'barcode'),
    helper.string('circa', 'Circa', undefined, {}),
    helper.listofEnum('color', 'Colors', { enumKey: 'productColors' }),
    helper.string('description', 'Description', undefined, { maxLength: 150 }),
    helper.listOfPrimitive('detailTypes', 'Detail Types', 'string', true)
] as MRT_ColumnDef<IProduct>[];
