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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useWhyDidIUpdate_1 = require("./useWhyDidIUpdate");
const react_1 = require("react");
const is_1 = require("../common/is");
const fs = __importStar(require("graceful-fs"));
function Image(props) {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('Image', props);
    const { filepath, caption, selected } = props;
    const [src, setSrc] = (0, react_1.useState)(undefined);
    const blob = (0, react_1.useMemo)(() => (fs.existsSync(filepath) ? new Blob([new Uint8Array(fs.readFileSync(filepath).buffer)]) : undefined), [filepath]);
    (0, react_1.useEffect)(() => {
        const func = () => {
            if (blob == null)
                return;
            const local = URL.createObjectURL(blob);
            console.log(`local: ${local}`);
            setSrc(local);
            return () => {
                if (local != null) {
                    URL.revokeObjectURL(local);
                    console.log(`revoke: ${local}`);
                }
            };
        };
        func();
    }, [blob]);
    return is_1.is.not.nil(filepath) ? (0, jsx_runtime_1.jsx)("img", { src: src, alt: caption, className: 'flex object-scale-down aria-selected:ring-4 aria-selected:ring-red-500', width: 250, "aria-selected": selected !== null && selected !== void 0 ? selected : false }) : null;
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map