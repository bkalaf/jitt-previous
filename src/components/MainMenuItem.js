"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const BaseMenuItem_1 = require("./BaseMenuItem");
const camelToProper_1 = require("../common/text/camelToProper");
function MainMenuItem({ segment, baseUrl }) {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const onClick = (0, react_1.useCallback)(() => navigate([baseUrl, segment].join('')), [baseUrl, navigate, segment]);
    return (0, jsx_runtime_1.jsx)(BaseMenuItem_1.BaseMenuItem, { label: (0, camelToProper_1.camelToProper)(segment), onClick: onClick });
}
exports.MainMenuItem = MainMenuItem;
//# sourceMappingURL=MainMenuItem.js.map