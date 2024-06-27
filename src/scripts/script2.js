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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fs = __importStar(require("graceful-fs"));
const openRealm_1 = require("./openRealm");
const FILENAME = [__dirname, `cif-brands-2.json`].join('\\');
const OUTPUT = [__dirname, 'normalized-taxonomy.json'].join('\\');
const data = JSON.parse(fs.readFileSync(FILENAME).toString());
let db;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const d = Object.entries(data);
        db = yield (0, openRealm_1.openRealm)();
        const collector = [];
        for (const [categoryName, { selector: categorySelector, children }] of d) {
            const childObj = Object.entries(children);
            for (const [subCategoryName, { selector: subCategorySelector, brands }] of childObj) {
                const taxonomies = db
                    .objects('mercariTaxonomy')
                    .filtered('category.selector == $0 AND subCategory.selector == $1 AND category.name == $2 AND subCategory.name == $3', categorySelector, subCategorySelector, categoryName, subCategoryName);
                console.log(`taxonomies`, taxonomies);
                const next = taxonomies.map((tax) => { var _a, _b, _c, _d, _e; return [(_b = (_a = tax.category) === null || _a === void 0 ? void 0 : _a.selector) !== null && _b !== void 0 ? _b : '', (_d = (_c = tax.subCategory) === null || _c === void 0 ? void 0 : _c.selector) !== null && _d !== void 0 ? _d : '', (_e = tax.subSubCategory) === null || _e === void 0 ? void 0 : _e.selector, brands]; });
                if (brands.length > 0)
                    collector.push(...next);
                fs.writeFileSync(OUTPUT, JSON.stringify(collector, null, '\t'));
            }
        }
        console.log(`collector.length: ${collector.length}`);
    });
}
run()
    .then(() => console.log('DONE!'))
    .finally(() => db === null || db === void 0 ? void 0 : db.close());
//# sourceMappingURL=script2.js.map