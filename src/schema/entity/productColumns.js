"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productColumns = exports.helper = exports.h = void 0;
const flags_1 = require("../enums/flags");
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
exports.h = (0, material_react_table_1.createMRTColumnHelper)();
exports.helper = (0, col_1.col)(exports.h);
exports.productColumns = [
    exports.helper.pk(),
    exports.helper.lookup('brand', 'Brand', { objectType: 'brand' }),
    exports.helper.lookup('classifier', 'Classifier', {
        objectType: 'classifier',
        onChange: (setValue, oldValue, newValue) => {
            if (oldValue) {
                oldValue.allAttributes.forEach(({ path, value }) => {
                    setValue(path, typeof value === 'boolean' ? !value : undefined);
                });
            }
            if (newValue) {
                newValue.allAttributes.forEach(({ path, unset, value }) => {
                    if (unset) {
                        setValue(path, undefined);
                    }
                    else {
                        setValue(path, value);
                    }
                });
            }
        }
    }),
    exports.helper.listOfEmbed('includes', 'Includes', 'includedItem'),
    exports.helper.listOfEmbed('customAttributes', 'Custom Item Field', 'customItemField'),
    exports.helper.listOfPrimitive('asins', 'ASINs', 'string'),
    exports.helper.listOfPrimitive('features', 'Features', 'string'),
    exports.helper.flags('flags', 'Flags', flags_1.flagOptions),
    exports.helper.listOfObject('hashTags', 'Hash Tags', 'hashTag'),
    exports.helper.measure('length', 'Length', 'in', {}),
    exports.helper.measure('width', 'Width', 'in', {}),
    exports.helper.measure('height', 'Height', 'in', {}),
    exports.helper.measure('weight', 'Weight', 'g', {}),
    exports.helper.enum('origin', 'Origin', { enumKey: 'countries' }),
    exports.helper.string('modelNo', 'Model #', undefined, {}),
    exports.helper.string('modelName', 'Model Name', undefined, {}),
    exports.helper.listOfPrimitive('partNumbers', 'Part #s', 'string'),
    exports.helper.string('notes', 'Notes', undefined, { maxLength: 500 }),
    exports.helper.string('title', 'Title', undefined, { maxLength: 80 }),
    exports.helper.bool('overrideTitle', 'Override Title'),
    exports.helper.listOfObject('upcs', 'UPCS', 'barcode'),
    exports.helper.string('circa', 'Circa', undefined, {}),
    exports.helper.listofEnum('color', 'Colors', { enumKey: 'productColors' }),
    exports.helper.string('description', 'Description', undefined, { maxLength: 150 }),
    exports.helper.listOfPrimitive('detailTypes', 'Detail Types', 'string', true)
];
//# sourceMappingURL=productColumns.js.map