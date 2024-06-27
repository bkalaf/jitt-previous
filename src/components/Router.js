"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = exports.on = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const ErrorBoundary_1 = require("./ErrorBoundary");
const App_1 = require("./App");
const CollectionView_1 = require("./Views/CollectionView");
const react_1 = __importDefault(require("react"));
function on(source, event, listener) {
    source.addEventListener(event, listener);
    return () => source.removeEventListener(event, listener);
}
exports.on = on;
const collectionRoute = (name) => ({ path: name, errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}), element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}), children: [{ index: true, element: (0, jsx_runtime_1.jsx)(CollectionView_1.CollectionView, {}), errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}) }] });
const queryRoute = (name) => ({ path: name, errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}), element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}), children: [{ index: true, element: (0, jsx_runtime_1.jsx)(CollectionView_1.CollectionView, {}), errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}) }] });
// export const appRouter = createHashRouter([
//     {
//         path: '/',
//         element: <App />,
//         errorElement: <ErrorBoundary />,
//         children: [
//             {
//                 path: 'data',
//                 errorElement: <ErrorBoundary />,
//                 children: [
//                     {
//                         path: 'v1',
//                         errorElement: <ErrorBoundary />,
//                         children: [
//                             collectionRoute('hashTag'),
//                             collectionRoute('brand'),
//                             collectionRoute('mercariBrand'),
//                             collectionRoute('selfStorage'),
//                             collectionRoute('facility'),
//                             collectionRoute('auction'),
//                             collectionRoute('mercariTaxonomy'),
//                             collectionRoute('classifier'),
//                             { index: true, element: <div>CATEGORY INDEX</div>, errorElement: <ErrorBoundary /> }
//                         ]
//                     },
//                     { index: true, element: <Navigate to='v1' />, errorElement: <ErrorBoundary /> }
//                 ]
//             },
//             { index: true, element: <div>APP ROOT</div>, errorElement: <ErrorBoundary /> }
//         ]
//     }
// ]);
const appRouter = (ProviderComponent) => (0, react_router_dom_1.createHashRouter)([
    {
        path: '/',
        element: ((0, jsx_runtime_1.jsx)(react_1.default.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { children: "Loading..." }), children: (0, jsx_runtime_1.jsx)(ProviderComponent, { children: (0, jsx_runtime_1.jsx)(App_1.App, {}) }) })),
        errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}),
        children: [
            {
                path: 'queries',
                errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}),
                children: [
                    { path: 'v1', errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}), children: [queryRoute('classifierHierarchy'), { index: true, element: (0, jsx_runtime_1.jsx)("div", { children: "QUERY INDEX" }), errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}) }] },
                    { index: true, errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}), element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: 'v1' }) }
                ]
            },
            {
                path: 'data',
                errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}),
                children: [
                    {
                        path: 'v1',
                        errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}),
                        children: [
                            collectionRoute('hashTag'),
                            collectionRoute('brand'),
                            collectionRoute('mercariBrand'),
                            collectionRoute('selfStorage'),
                            collectionRoute('facility'),
                            collectionRoute('auction'),
                            collectionRoute('mercariTaxonomy'),
                            collectionRoute('classifier'),
                            collectionRoute('bin'),
                            collectionRoute('barcode'),
                            collectionRoute('product'),
                            collectionRoute('productImage'),
                            collectionRoute('sku'),
                            { index: true, element: (0, jsx_runtime_1.jsx)("div", { children: "CATEGORY INDEX" }), errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}) }
                        ]
                    },
                    { index: true, element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: 'v1' }), errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}) }
                ]
            },
            { index: true, element: (0, jsx_runtime_1.jsx)("div", { children: "APP ROOT" }), errorElement: (0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, {}) }
        ]
    }
]);
exports.appRouter = appRouter;
//# sourceMappingURL=Router.js.map