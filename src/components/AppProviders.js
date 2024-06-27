"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProviders = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@emotion/react");
const theme_1 = require("./theme");
const x_date_pickers_1 = require("@mui/x-date-pickers");
const AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
const notistack_1 = require("notistack");
const react_query_1 = require("@tanstack/react-query");
const ForagerProvider_1 = require("../contexts/ForagerProvider");
const RealmProvider_1 = require("../contexts/RealmProvider");
const react_2 = __importDefault(require("react"));
const AppRoot_1 = require("./AppRoot");
const ConfigurationProvider_1 = require("../contexts/ConfigurationProvider");
const FileSystemContextProvider_1 = require("./../contexts/FileSystemContextProvider");
const EnvProvider_1 = require("./../contexts/EnvProvider");
const BarcodeGeneratorProvider_1 = require("../contexts/BarcodeGeneratorProvider");
function AppProviders({ children }) {
    return ((0, jsx_runtime_1.jsx)(react_2.default.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(react_1.ThemeProvider, { theme: theme_1.theme, children: (0, jsx_runtime_1.jsx)(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs, children: (0, jsx_runtime_1.jsx)(notistack_1.SnackbarProvider, { maxSnack: 10, anchorOrigin: { horizontal: 'right', vertical: 'bottom' }, autoHideDuration: 4000, children: (0, jsx_runtime_1.jsx)(EnvProvider_1.EnvProvider, { children: (0, jsx_runtime_1.jsx)(FileSystemContextProvider_1.FileSystemContextProvider, { children: (0, jsx_runtime_1.jsx)(RealmProvider_1.RealmProvider, { children: (0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, { client: AppRoot_1.queryClient, children: (0, jsx_runtime_1.jsx)(ForagerProvider_1.ForagerProvider, { children: (0, jsx_runtime_1.jsx)(ConfigurationProvider_1.ConfigurationProvider, { children: (0, jsx_runtime_1.jsx)(BarcodeGeneratorProvider_1.BarcodeGeneratorProvider, { children: children }) }) }) }) }) }) }) }) }) }) }));
}
exports.AppProviders = AppProviders;
//# sourceMappingURL=AppProviders.js.map