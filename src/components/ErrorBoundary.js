"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_1 = require("react-router");
function ErrorBoundary() {
    var _a;
    const error = (0, react_router_1.useRouteError)();
    const navigate = (0, react_router_1.useNavigate)();
    console.info('error', error);
    if ((0, react_router_1.isRouteErrorResponse)(error)) {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Oops!" }), (0, jsx_runtime_1.jsx)("h2", { children: error.status }), (0, jsx_runtime_1.jsx)("p", { children: error.statusText }), ((_a = error.data) === null || _a === void 0 ? void 0 : _a.message) && (0, jsx_runtime_1.jsx)("p", { children: error.data.message })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: 'border-2 border-white bg-red-500 text-xl font-bold uppercase text-white', onClick: () => navigate('/'), children: "Redirect" }) })] }));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: "Oops" }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: 'border-2 border-white bg-red-500 text-xl font-bold uppercase text-white', onClick: () => navigate('/'), children: "Redirect" }) })] }));
    }
}
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map