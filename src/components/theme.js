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
exports.theme = void 0;
const material_1 = require("@mui/material");
const colors = __importStar(require("tailwindcss/colors"));
exports.theme = (0, material_1.createTheme)({
    components: {
        MuiFormControl: {
            defaultProps: {
                classes: {
                    root: 'w-full'
                }
            }
        }
    },
    palette: {
        mode: 'light',
        dimmed: {
            light: colors.neutral[300],
            main: colors.neutral[500],
            dark: colors.neutral[800],
            contrastText: colors.black
        },
        vivid: {
            light: colors.yellow[300],
            main: colors.yellow[500],
            dark: colors.yellow[800],
            contrastText: colors.black
        },
        ash: {
            light: colors.zinc[300],
            main: colors.zinc[500],
            dark: colors.zinc[800],
            contrastText: colors.white
        },
        callout: {
            light: colors.rose[300],
            main: colors.rose[500],
            dark: colors.rose[800],
            contrastText: colors.white
        },
        neutral: {
            light: colors.gray[300],
            main: colors.gray[500],
            dark: colors.gray[800],
            contrastText: colors.white
        },
        neon: {
            light: colors.lime[300],
            main: colors.lime[500],
            dark: colors.lime[800],
            contrastText: colors.black
        },
        highlight: {
            light: colors.fuchsia[300],
            main: colors.fuchsia[500],
            dark: colors.fuchsia[800],
            contrastText: colors.white
        },
        metal: {
            light: colors.slate[300],
            main: colors.slate[500],
            dark: colors.slate[800],
            contrastText: colors.white
        },
        important: {
            light: colors.cyan[300],
            main: colors.cyan[500],
            dark: colors.cyan[800],
            contrastText: colors.white
        },
        caution: {
            light: colors.yellow[300],
            main: colors.yellow[500],
            dark: colors.yellow[800],
            contrastText: colors.black
        },
        tertiary: {
            light: colors.teal[300],
            main: colors.teal[500],
            dark: colors.teal[800],
            contrastText: colors.black
        }
    }
});
//# sourceMappingURL=theme.js.map