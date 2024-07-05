import { IClassifier, IProduct, Opt } from '../../types';
import { flagOptions } from '../enums/flags';
import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { col } from '../defs/col';
import { UseFormReturn } from 'react-hook-form-mui';
import { groupCol } from '../defs/groupCol';
import { doubleMeasureColumns } from './details/measureColumns';
import { $productInfo } from '../columns/$depend';

export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);
export const productColumns: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.PK(),
        helper.lookup(...dependencies)('brand', 'Brand', { objectType: 'brand' }),
        helper.lookup(...dependencies)('classifier', 'Classifier', {
            objectType: 'classifier',
            onChange: (formContext: UseFormReturn<any, any, any>, oldValue: Opt<IClassifier>, newValue: Opt<IClassifier>) => {
                if (oldValue) {
                    oldValue.allAttributes.forEach(({ path, value }) => {
                        formContext.setValue(path, typeof value === 'boolean' ? !value : undefined);
                    });
                }
                if (newValue) {
                    newValue.allAttributes.forEach(({ path, unset, value }) => {
                        if (unset) {
                            formContext.setValue(path, undefined);
                        } else {
                            formContext.setValue(path, value);
                        }
                    });
                }
            }
        }),
        helper.listOfEmbed(...dependencies)('includes', 'Includes', 'includedItem'),
        helper.listOfEmbed(...dependencies)('customAttributes', 'Custom Item Field', 'customItemField'),
        helper.listOfPrimitive(...dependencies)('asins', 'ASINs', 'string'),
        helper.listOfPrimitive(...dependencies)('features', 'Features', 'string'),
        helper.flags(...dependencies)('flags', 'Flags', flagOptions),
        helper.listOfObject(...dependencies)('hashTags', 'Hash Tags', 'hashTag'),
        groupCol(h, 'Length', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'length', 'bg-red-500', 'text-white')(...dependencies),
        groupCol(h, 'Width', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'width', 'bg-yellow-500', 'text-black')($productInfo.hasLength, ...dependencies),
        groupCol(h, 'Height', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'height', 'bg-blue-500', 'text-white')($productInfo.hasWidth, ...dependencies),
        groupCol(h, 'Weight', doubleMeasureColumns(h, 'weightUnitOfMeasure'), 'weight', 'bg-orange-500', 'text-white')(...dependencies),
        helper.enum(...dependencies)('origin', 'Origin', { enumKey: 'countries' }),
        helper.string(...dependencies)('modelNo', 'Model #', undefined, {}),
        helper.string(...dependencies)('modelName', 'Model Name', undefined, {}),
        helper.listOfEmbed(...dependencies)('partNumbers', 'Part #s', 'partNumber'),
        helper.string(...dependencies)('notes', 'Notes', undefined, { maxLength: 500 }),
        helper.string(...dependencies)('title', 'Title', undefined, { maxLength: 80 }),
        helper.bool(...dependencies)('overrideTitle', 'Override Title'),
        helper.listOfObject(...dependencies)('upcs', 'UPCS', 'barcode'),
        helper.year(...dependencies)('circa', 'Circa'),
        helper.listOfEnum(...dependencies)('color', 'Colors', { enumKey: 'productColors' }),
        helper.text(...dependencies)('description', 'Description', undefined, { maxLength: 150 }),
        helper.listOfEnum(...dependencies)('detailTypes', 'Detail Types', { enumKey: 'detailsTypes' })
    ] as MRT_ColumnDef<T>[];