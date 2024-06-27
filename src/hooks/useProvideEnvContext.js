"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProvideEnvContext = void 0;
const react_1 = require("react");
const AMQP = (_a = process.env.AMQP) !== null && _a !== void 0 ? _a : '';
const BARCODE_PRINT_FILE = (_b = process.env.BARCODE_PRINT_FILE) !== null && _b !== void 0 ? _b : '';
const DOWNLOADS_FOLDER = (_c = process.env.DOWNLOADS_FOLDER) !== null && _c !== void 0 ? _c : '';
const DROPBOX_PATH = (_d = process.env.DROPBOX_PATH) !== null && _d !== void 0 ? _d : '';
const DROPBOX_PWD = (_e = process.env.DROPBOX_PWD) !== null && _e !== void 0 ? _e : '';
const DROPBOX_USER = (_f = process.env.DROPBOX_USER) !== null && _f !== void 0 ? _f : '';
const FILESYSTEM_PRODUCTS = (_g = process.env.FILESYSTEM_PRODUCTS) !== null && _g !== void 0 ? _g : '';
const FILESYSTEM_ROOT = (_h = process.env.FILESYSTEM_ROOT) !== null && _h !== void 0 ? _h : '';
const IMAGES_FOLDER = (_j = process.env.IMAGES_FOLDER) !== null && _j !== void 0 ? _j : '';
const INBOUND_FILES_FOLDER = (_k = process.env.INBOUND_FILES_FOLDER) !== null && _k !== void 0 ? _k : '';
const LOG_LEVEL = ((_l = process.env.LOG_LEVEL) !== null && _l !== void 0 ? _l : 'log');
const MERCARI_PASSWORD = (_m = process.env.MERCARI_PASSWORD) !== null && _m !== void 0 ? _m : '';
const MERCARI_USER = (_o = process.env.MERCARI_USER) !== null && _o !== void 0 ? _o : '';
const PRODUCT_DOCS_FOLDER = (_p = process.env.PRODUCT_DOCS_FOLDER) !== null && _p !== void 0 ? _p : '';
const REALM_APP_ID = (_q = process.env.REALM_APP_ID) !== null && _q !== void 0 ? _q : '';
const REALM_PASSWORD = (_r = process.env.REALM_PASSWORD) !== null && _r !== void 0 ? _r : '';
const REALM_USER = (_s = process.env.REALM_USER) !== null && _s !== void 0 ? _s : '';
const REMOVE_BG_EXT = (_t = process.env.REMOVE_BG_EXT) !== null && _t !== void 0 ? _t : '';
const REMOVE_BG_SUFFIX = (_u = process.env.REMOVE_BG_SUFFIX) !== null && _u !== void 0 ? _u : '';
const VIDEOS_FOLDER = (_v = process.env.VIDEOS_FOLDER) !== null && _v !== void 0 ? _v : '';
function useProvideEnvContext() {
    return (0, react_1.useMemo)(() => ({
        AMQP,
        BARCODE_PRINT_FILE,
        DOWNLOADS_FOLDER,
        DROPBOX_PATH,
        DROPBOX_PWD,
        DROPBOX_USER,
        FILESYSTEM_PRODUCTS,
        FILESYSTEM_ROOT,
        IMAGES_FOLDER,
        INBOUND_FILES_FOLDER,
        LOG_LEVEL,
        MERCARI_PASSWORD,
        MERCARI_USER,
        PRODUCT_DOCS_FOLDER,
        REALM_APP_ID,
        REALM_PASSWORD,
        REALM_USER,
        REMOVE_BG_EXT,
        REMOVE_BG_SUFFIX,
        VIDEOS_FOLDER
    }), []);
}
exports.useProvideEnvContext = useProvideEnvContext;
//# sourceMappingURL=useProvideEnvContext.js.map