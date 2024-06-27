"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoot = exports.queryClient = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Router_1 = require("./Router");
const react_query_1 = require("@tanstack/react-query");
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
exports.queryClient = new react_query_1.QueryClient();
function AppRoot({ ProviderComponents }) {
    return ((0, jsx_runtime_1.jsx)(react_1.default.Suspense, { fallback: (0, jsx_runtime_1.jsx)(material_1.Backdrop, { sx: { color: '#fff', zIndex: 50 }, open: true, children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: 'inherit' }) }), children: (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: (0, Router_1.appRouter)(ProviderComponents) }) }));
}
exports.AppRoot = AppRoot;
//# sourceMappingURL=AppRoot.js.map