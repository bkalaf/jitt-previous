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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.useEventListener = exports.BreadcrumbItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
require("./../schema");
const resized_logo_png_1 = __importDefault(require("./../assets/logos/resized-logo.png"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const react_router_1 = require("react-router");
const react_router_dom_1 = require("react-router-dom");
const MainMenu_1 = require("./MainMenu");
const useEnv_1 = require("../hooks/useEnv");
const IconBtn_1 = require("./IconBtn");
const react_1 = __importStar(require("react"));
const remote_1 = require("@electron/remote");
const useConfiguration_1 = require("../hooks/useConfiguration");
const useToggler_1 = require("../hooks/useToggler");
const useTypes_1 = require("../hooks/useTypes");
const camelToProper_1 = require("../common/text/camelToProper");
function BreadcrumbItem({ path, name }) {
    return ((0, jsx_runtime_1.jsxs)(material_1.Link, { component: react_router_dom_1.NavLink, underline: 'hover', href: path, className: 'text-white', children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: 'mr-1.5 text-white', icon: pro_solid_svg_icons_1.faTable, size: 'sm' }), name] }));
}
exports.BreadcrumbItem = BreadcrumbItem;
function useEventListener(source, eventName, listener) {
    (0, react_1.useEffect)(() => {
        source.addEventListener(eventName, listener);
        return () => source.removeEventListener(eventName, listener);
    }, [eventName, listener, source]);
}
exports.useEventListener = useEventListener;
function App() {
    var _a, _b;
    const { updateConfig, configuration } = (0, useConfiguration_1.useConfiguration)();
    const context = (0, useEnv_1.useEnv)();
    console.log(context.REALM_APP_ID);
    const location = (0, react_router_1.useLocation)();
    const mh = ((_b = (_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0) - 66.95 - 35.99 - 35.99;
    const maxHeight = `${mh.toFixed(0)}px`;
    console.log(`location`, location, location.pathname);
    console.log(`segments`, location.pathname
        .slice(1)
        .split('/')
        .map((value, index, array) => [value, ['', ...array.slice(0, index), value].join('/')]));
    const modifyZoom = (0, react_1.useCallback)((modifier) => {
        return () => {
            updateConfig('zoomLevel', configuration.zoomLevel + modifier);
        };
    }, [configuration.zoomLevel, updateConfig]);
    const incrementZoom = (0, react_1.useMemo)(() => modifyZoom(0.1), [modifyZoom]);
    const decrementZoom = (0, react_1.useMemo)(() => modifyZoom(-0.1), [modifyZoom]);
    const types = (0, useTypes_1.useTypes)();
    console.log(`TYPES`, types);
    (0, react_1.useEffect)(() => {
        (0, remote_1.getCurrentWebContents)().setZoomFactor(configuration.zoomLevel);
    }, [configuration.zoomLevel]);
    useEventListener(document, 'wheel', (ev) => {
        const direction = ev.deltaY > 0 ? 'down' : 'up';
        console.error(direction, ev);
        if (ev.ctrlKey) {
            switch (direction) {
                case 'down':
                    return decrementZoom();
                case 'up':
                    return incrementZoom();
            }
        }
    });
    const [showProgress, toggleProgress] = (0, useToggler_1.useToggler)(false);
    const [progressValue, setProgressValue] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.CssBaseline, {}), (0, jsx_runtime_1.jsxs)(material_1.Box, { component: 'section', className: 'max-w-screen flex h-screen max-h-screen w-screen flex-grow flex-col justify-around', children: [(0, jsx_runtime_1.jsx)(material_1.AppBar, { color: 'primary', position: 'static', children: (0, jsx_runtime_1.jsxs)(material_1.Toolbar, { variant: 'dense', className: 'flex items-center justify-start gap-x-2', disableGutters: true, children: [(0, jsx_runtime_1.jsx)("img", { src: resized_logo_png_1.default, alt: 'logo', className: 'flex h-14' }), (0, jsx_runtime_1.jsx)(IconBtn_1.IconBtn, { icon: pro_solid_svg_icons_1.faHome, iconSize: 'sm', tooltip: 'Go to the home page.' }), (0, jsx_runtime_1.jsx)(IconBtn_1.IconBtn, { icon: pro_solid_svg_icons_1.faCircleLeft, iconSize: 'sm', tooltip: 'Go to the previous page.' }), (0, jsx_runtime_1.jsx)("span", { className: 'flex w-full justify-start', children: (0, jsx_runtime_1.jsx)(MainMenu_1.MainMenu, { toggleProgress: toggleProgress, setProgressValue: setProgressValue }) })] }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { className: 'flex w-full justify-between bg-slate-500 p-1 text-white', children: (0, jsx_runtime_1.jsxs)(material_1.Breadcrumbs, { separator: '>', className: 'text-SvgMachineWashGentleOrDelicate ml-3 flex', "aria-label": 'breadcrumbs', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: '/', children: "Home" }), location.pathname.length > 1 &&
                                    location.pathname
                                        .slice(1)
                                        .split('/')
                                        .map((value, index, array) => [value, ['', ...array.slice(0, index), value].join('/')])
                                        .map(([name, path]) => (0, jsx_runtime_1.jsx)(BreadcrumbItem, { name: (0, camelToProper_1.camelToProper)(name), path: path }, path))] }) }), (0, jsx_runtime_1.jsx)(react_1.default.Suspense, { fallback: (0, jsx_runtime_1.jsx)(material_1.Backdrop, { sx: { color: '#fff', zIndex: 50 }, open: true, children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: 'inherit' }) }), children: (0, jsx_runtime_1.jsx)(material_1.Box, { className: 'flex flex-grow bg-pink-400', sx: {
                                maxHeight
                            }, children: (0, jsx_runtime_1.jsx)(react_router_1.Outlet, {}) }) }), (0, jsx_runtime_1.jsx)(material_1.AppBar, { component: 'footer', position: 'static', className: 'flex w-full bg-black p-1', sx: { top: 'auto', bottom: 0 }, children: showProgress && (0, jsx_runtime_1.jsx)(material_1.LinearProgress, { variant: 'determinate', value: progressValue, color: 'error' }) })] })] }));
}
exports.App = App;
//# sourceMappingURL=App.js.map