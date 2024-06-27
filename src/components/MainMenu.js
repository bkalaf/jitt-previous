"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = exports.Actions = exports.MainMenu2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const CategoryMenuItem_1 = require("./CategoryMenuItem");
const RootCategoryMenuItem_1 = require("./RootCategoryMenuItem");
const MainMenuItem_1 = require("./MainMenuItem");
const getAppConfigPathed_1 = require("../contexts/getAppConfigPathed");
const react_1 = require("react");
const BaseMenuItem_1 = require("./BaseMenuItem");
const fs = __importStar(require("graceful-fs"));
const useLocalRealm_1 = require("../hooks/useLocalRealm");
const runTransaction_1 = require("../util/runTransaction");
const useToaster_1 = require("../hooks/useToaster");
const path = __importStar(require("path"));
const mercariTaxonomy_1 = require("../schema/entity/mercariTaxonomy");
const surround_1 = require("../common/text/surround");
const realm_1 = require("realm");
const cp = __importStar(require("child_process"));
const ignore_1 = require("../common/ignore");
// const mainMenuOptions = {
//     auctions: {
//         selfStorage: $.selfStorage(),
//         facility: $.facility(),
//         auction: $.auction()
//     },
//     mercari: {
//         hashTag: $.hashTag(),
//         mercariBrand: $.mercariBrand(),
//         mercariTaxonomy: $.mercariTaxonomy()
//     },
//     products: {
//         brand: $.brand(),
//         classifier: $.classifier(),
//         productImages: $.productImage(),
//         product: $.product()
//     },
//     inventory: {
//         barcode: $.barcode(),
//         bin: $.bin(),
//         sku: $.sku()
//     },
//     listings: {
//         draft: $.draft(),
//         listing: $.listing()
//     }
// };
function MainMenu2() {
    return ((0, jsx_runtime_1.jsx)(RootCategoryMenuItem_1.RootCategoryMenuItem, { header: 'Queries', direction: 'down', children: (0, jsx_runtime_1.jsx)(material_1.MenuList, { dense: true, children: (0, jsx_runtime_1.jsx)(CategoryMenuItem_1.CategoryMenuItem, { direction: 'right', Component: material_1.MenuItem, label: 'Classifiers', children: (0, jsx_runtime_1.jsx)(material_1.MenuList, { dense: true, children: (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/queries/v1/', segment: 'classifierHierarchy' }) }) }) }) }));
}
exports.MainMenu2 = MainMenu2;
const barcodePrintFile = (_a = process.env.BARCODE_PRINT_FILE) !== null && _a !== void 0 ? _a : '';
const downloads = (_b = process.env.DOWNLOADS_FOLDER) !== null && _b !== void 0 ? _b : '';
function Actions(props) {
    console.log(props);
    const [progressValue] = (0, react_1.useState)(undefined);
    const hashtags = (0, getAppConfigPathed_1.getAppConfigPathed)('hashTags.json');
    const brands = (0, getAppConfigPathed_1.getAppConfigPathed)('brands.json');
    const taxonomy = (0, getAppConfigPathed_1.getAppConfigPathed)('taxonomy.json');
    const skuToPrint = (0, getAppConfigPathed_1.getAppConfigPathed)(barcodePrintFile.replaceAll(path.extname(barcodePrintFile), '-sku'.concat(path.extname(barcodePrintFile))));
    const binToPrint = (0, getAppConfigPathed_1.getAppConfigPathed)(barcodePrintFile.replaceAll(path.extname(barcodePrintFile), '-bin'.concat(path.extname(barcodePrintFile))));
    const db = (0, useLocalRealm_1.useLocalRealm)();
    const { error: noInputFileExists } = (0, useToaster_1.useToaster)(() => `No input file exists.`);
    // const { success: processed } = useToaster((count: number) => `Processed (${count.toFixed(0)}) records.`);
    const { success: processedByType } = (0, useToaster_1.useToaster)((total, inserted, modified) => `Inserted: (${inserted.toFixed(0)}). Modified: (${modified.toFixed(0)}). Unchanged: (${(total - modified).toFixed(0)}).`);
    const { msg: begin } = (0, useToaster_1.useToaster)((txt) => `Beginning import of ${txt}.`);
    const runTaxonomy = (0, react_1.useCallback)(() => {
        if (!fs.existsSync(taxonomy)) {
            return noInputFileExists();
        }
        begin('Taxonomy');
        const total = db.objects('mercariTaxonomy').length;
        let modified = 0, inserted = 0;
        const data = JSON.parse(fs.readFileSync(taxonomy).toString());
        const func = () => {
            for (const { category, subCategory, subSubCategory } of data) {
                const objs = db.objects('mercariTaxonomy').filtered('category.selector == $0 && subCategory.selector == $1 && subSubCategory.selector == $2', category.selector, subCategory.selector, subSubCategory.selector);
                if (objs.length === 0) {
                    const item = db.create('mercariTaxonomy', {
                        _id: new realm_1.BSON.ObjectId(),
                        category: Object.assign(Object.assign({}, category), { hashTags: [] }),
                        subCategory: Object.assign(Object.assign({}, subCategory), { hashTags: [] }),
                        subSubCategory: Object.assign(Object.assign({}, subSubCategory), { hashTags: [] }),
                        hashTags: [],
                        timestamp: new Date(Date.now())
                    });
                    mercariTaxonomy_1.MercariTaxonomy.update(item);
                    inserted++;
                }
                else {
                    objs[0].timestamp = new Date(Date.now());
                    modified++;
                }
            }
        };
        (0, runTransaction_1.runTransaction)(db, func);
        processedByType(total, inserted, modified);
        const ctime = new Date(Date.now());
        const dateText = [ctime.getMonth().toFixed(0).padStart(2, '0'), ctime.getDate().toFixed(0).padStart(2, '0'), ctime.getFullYear().toString()].join('-');
        fs.renameSync(taxonomy, (0, getAppConfigPathed_1.getAppConfigPathed)(taxonomy
            .split('\\')
            .reverse()[0]
            .replaceAll(path.extname(taxonomy), '-completed-'.concat(dateText.concat(path.extname(taxonomy))))));
    }, [begin, db, noInputFileExists, processedByType, taxonomy]);
    const runBrands = (0, react_1.useCallback)(() => {
        if (!fs.existsSync(brands)) {
            return noInputFileExists();
        }
        begin('Brands');
        const total = db.objects('mercariBrand').length;
        let modified = 0, inserted = 0;
        const data = JSON.parse(fs.readFileSync(brands).toString());
        const func = () => {
            for (const b of data) {
                const objs = db.objects('mercariBrand').filtered('name ==[c] $0', b);
                if (objs.length === 0) {
                    db.create('mercariBrand', { _id: new realm_1.BSON.ObjectId(), name: b, timestamp: new Date(Date.now()) });
                    inserted++;
                }
                else {
                    objs[0].timestamp = new Date(Date.now());
                    modified++;
                }
            }
        };
        (0, runTransaction_1.runTransaction)(db, func);
        processedByType(total, inserted, modified);
        const ctime = new Date(Date.now());
        const dateText = [ctime.getMonth().toFixed(0).padStart(2, '0'), ctime.getDate().toFixed(0).padStart(2, '0'), ctime.getFullYear().toString()].join('-');
        fs.renameSync(brands, (0, getAppConfigPathed_1.getAppConfigPathed)(brands
            .split('\\')
            .reverse()[0]
            .replaceAll(path.extname(brands), '-completed-'.concat(dateText.concat(path.extname(brands))))));
    }, [begin, brands, db, noInputFileExists, processedByType]);
    const runHashTags = (0, react_1.useCallback)(() => {
        if (!fs.existsSync(hashtags)) {
            return noInputFileExists();
        }
        begin('Hash Tag');
        const data = JSON.parse(fs.readFileSync(hashtags).toString());
        let modified = 0, inserted = 0;
        const total = db.objects('hashTag').length;
        const func = () => {
            data.forEach(({ count, from, name }) => {
                const objs = db.objects('hashTag').filtered('name ==[c] $0', name);
                if (objs.length === 0) {
                    db.create('hashTag', { name, _id: new realm_1.BSON.ObjectId(), usage: [{ count, from: new Date(from) }] });
                    inserted++;
                }
                else {
                    const obj = objs[0];
                    console.info(`obj`, obj);
                    const maxCount = obj.maxCount;
                    const mostRecent = obj.mostRecent;
                    const $maxCount = obj.usage.find((x) => x.count === maxCount);
                    const $mostRecent = obj.usage.find((x) => x.from === mostRecent && ($maxCount === null || $maxCount === void 0 ? void 0 : $maxCount.from) !== x.from);
                    console.log(maxCount, mostRecent, $maxCount, $mostRecent);
                    // obj.usage.map((x, ix) => [ix, x] as [number, IHashTagUsage]).filter(x => x[1] !== $mostRecent && x[1] !== $maxCount).map(x => x[0]).reverse().forEach(x => obj.usage.remove(x));
                    obj.usage.push({ count, from: new Date(from) });
                    modified++;
                }
            });
        };
        (0, runTransaction_1.runTransaction)(db, func);
        processedByType(total, inserted, modified);
        const ctime = new Date(Date.now());
        const dateText = [ctime.getMonth().toFixed(0).padStart(2, '0'), ctime.getDate().toFixed(0).padStart(2, '0'), ctime.getFullYear().toString()].join('-');
        fs.renameSync(hashtags, (0, getAppConfigPathed_1.getAppConfigPathed)(hashtags
            .split('\\')
            .reverse()[0]
            .replaceAll(path.extname(hashtags), '-completed-'.concat(dateText.concat(path.extname(hashtags))))));
    }, [begin, db, hashtags, noInputFileExists, processedByType]);
    const fileNoExist = (0, react_1.useCallback)((name) => !fs.existsSync(name), []);
    const hasSkuToExport = (0, react_1.useCallback)(() => db
        .objects('barcode')
        .filtered('beenPrinted == $0', false)
        .map((x) => x.kind === 'sku').length === 0, [db]);
    const exportSkuBarcodes = (0, react_1.useCallback)(() => {
        const bcs = db
            .objects('barcode')
            .filtered('beenPrinted == $0', false)
            .filter((x) => x.kind === 'sku');
        const lines = bcs.map((bc) => { var _a, _b, _c, _d, _e, _f, _g; return [(0, surround_1.surroundQuotesNoIgnore)((_a = bc.scanValue) !== null && _a !== void 0 ? _a : ''), (0, surround_1.surroundQuotesNoIgnore)((_e = (_d = (_c = (_b = bc.linkedSkus[0]) === null || _b === void 0 ? void 0 : _b.product) === null || _c === void 0 ? void 0 : _c.brand) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : '-'), (0, surround_1.surroundQuotesNoIgnore)((_g = (_f = bc.linkedSkus[0]) === null || _f === void 0 ? void 0 : _f.getTitle) !== null && _g !== void 0 ? _g : '')]; }).join(',');
        const data = [['UPC', 'Brand', 'Description'].map(surround_1.surroundQuotesIgnore).join(','), ...lines].join('\n');
        const outputfile = [downloads, skuToPrint.split('\\').reverse()[0]].join('\\');
        fs.writeFileSync(outputfile, data);
        fs.writeFileSync(skuToPrint, data);
        const func = () => {
            bcs.forEach((bc) => {
                bc.beenPrinted = true;
            });
        };
        (0, runTransaction_1.runTransaction)(db, func);
        cp.spawnSync('bash', [`./toxlsx.sh`, `${outputfile.split('\\').reverse()[0]}`, `${outputfile.split('\\').reverse()[0].replaceAll('.csv', '.xlsx')}`], { cwd: 'C:/Users/bobby/Downloads/' });
    }, [db, skuToPrint]);
    const hasBinToExport = (0, react_1.useCallback)(() => db
        .objects('barcode')
        .filtered('beenPrinted == $0', false)
        .map((x) => x.kind === 'bin').length === 0, [db]);
    const exportBinBarcodes = (0, react_1.useCallback)(() => {
        const bcs = db
            .objects('barcode')
            .filtered('beenPrinted == $0', false)
            .filter((x) => x.kind === 'bin');
        const lines = bcs.map((bc) => { var _a, _b, _c; return [(0, surround_1.surroundQuotesNoIgnore)((_a = bc.scanValue) !== null && _a !== void 0 ? _a : ''), (0, surround_1.surroundQuotesNoIgnore)((_b = bc.linkedBin[0].name) !== null && _b !== void 0 ? _b : '-'), (0, surround_1.surroundQuotesNoIgnore)((_c = bc.linkedBin[0].notes) !== null && _c !== void 0 ? _c : '')]; }).join(',');
        const data = [['UPC', 'Name', 'Notes'].map(surround_1.surroundQuotesIgnore).join(','), ...lines].join('\n');
        const outputfile = [downloads, binToPrint.split('\\').reverse()[0]].join('\\');
        fs.writeFileSync(outputfile, data);
        fs.writeFileSync(binToPrint, data);
        const func = () => {
            bcs.forEach((bc) => {
                bc.beenPrinted = true;
            });
        };
        (0, runTransaction_1.runTransaction)(db, func);
        cp.spawnSync('bash', [`./toxlsx.sh`, `${outputfile.split('\\').reverse()[0]}`, `${outputfile.split('\\').reverse()[0].replaceAll('.csv', '.xlsx')}`], { cwd: 'C:/Users/bobby/Downloads/' });
    }, [db, binToPrint]);
    const modalOpen = (0, react_1.useMemo)(() => progressValue != null, [progressValue]);
    return ((0, jsx_runtime_1.jsxs)(RootCategoryMenuItem_1.RootCategoryMenuItem, { header: 'Actions', direction: 'down', children: [(0, jsx_runtime_1.jsxs)(material_1.Dialog, { fullWidth: true, maxWidth: 'sm', open: modalOpen, onClose: ignore_1.ignore, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Progress" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(material_1.LinearProgress, { variant: 'determinate', value: progressValue, color: 'error' }) })] }), (0, jsx_runtime_1.jsx)(material_1.MenuList, { dense: true, children: (0, jsx_runtime_1.jsx)(CategoryMenuItem_1.CategoryMenuItem, { direction: 'right', Component: material_1.MenuItem, label: 'Admin', children: (0, jsx_runtime_1.jsxs)(material_1.MenuList, { dense: true, children: [(0, jsx_runtime_1.jsx)(BaseMenuItem_1.BaseMenuItem, { label: 'Run Brands', onClick: runBrands, disabled: fileNoExist(brands) }), (0, jsx_runtime_1.jsx)(BaseMenuItem_1.BaseMenuItem, { label: 'Run HashTags', onClick: runHashTags, disabled: fileNoExist(hashtags) }), (0, jsx_runtime_1.jsx)(BaseMenuItem_1.BaseMenuItem, { label: 'Run Taxonomy', onClick: runTaxonomy, disabled: fileNoExist(taxonomy) }), (0, jsx_runtime_1.jsx)(material_1.Divider, {}), (0, jsx_runtime_1.jsx)(BaseMenuItem_1.BaseMenuItem, { label: 'Print SKU Labels', onClick: exportSkuBarcodes, disabled: hasSkuToExport() }), (0, jsx_runtime_1.jsx)(BaseMenuItem_1.BaseMenuItem, { label: 'Print Bin Labels', onClick: exportBinBarcodes, disabled: hasBinToExport() })] }) }) })] }));
}
exports.Actions = Actions;
function MainMenu(props) {
    return ((0, jsx_runtime_1.jsxs)(material_1.List, { component: 'nav', className: 'grid grid-cols-4', children: [(0, jsx_runtime_1.jsx)(RootCategoryMenuItem_1.RootCategoryMenuItem, { header: 'Data', direction: 'down', children: (0, jsx_runtime_1.jsxs)(material_1.MenuList, { dense: true, children: [(0, jsx_runtime_1.jsx)(CategoryMenuItem_1.CategoryMenuItem, { direction: 'right', Component: material_1.MenuItem, label: 'Auctions', children: (0, jsx_runtime_1.jsxs)(material_1.MenuList, { dense: true, children: [(0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'selfStorage' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'facility' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'auction' })] }) }), (0, jsx_runtime_1.jsx)(CategoryMenuItem_1.CategoryMenuItem, { direction: 'right', Component: material_1.MenuItem, label: 'Mercari', children: (0, jsx_runtime_1.jsxs)(material_1.MenuList, { dense: true, children: [(0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'hashTag' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'mercariBrand' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'mercariTaxonomy' })] }) }), (0, jsx_runtime_1.jsx)(CategoryMenuItem_1.CategoryMenuItem, { direction: 'right', Component: material_1.MenuItem, label: 'Inventory', children: (0, jsx_runtime_1.jsxs)(material_1.MenuList, { dense: true, children: [(0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'bin' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'barcode' })] }) }), (0, jsx_runtime_1.jsx)(CategoryMenuItem_1.CategoryMenuItem, { direction: 'right', Component: material_1.MenuItem, label: 'Products', children: (0, jsx_runtime_1.jsxs)(material_1.MenuList, { dense: true, children: [(0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'brand' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'classifier' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'product' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'productImage' }), (0, jsx_runtime_1.jsx)(MainMenuItem_1.MainMenuItem, { baseUrl: '/data/v1/', segment: 'sku' })] }) })] }) }), (0, jsx_runtime_1.jsx)(MainMenu2, {}), (0, jsx_runtime_1.jsx)(Actions, Object.assign({}, props))] }));
}
exports.MainMenu = MainMenu;
//# sourceMappingURL=MainMenu.js.map