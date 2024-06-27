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
exports.useProvideConfigurationContext = void 0;
const react_1 = require("react");
const fs = __importStar(require("graceful-fs"));
const remote_1 = require("@electron/remote");
const deepEqual_1 = require("./deepEqual");
const is_1 = require("../common/is");
const defaultState_1 = require("./defaultState");
const getProperty_1 = require("../common/object/getProperty");
const setProperty_1 = require("../common/object/setProperty");
function useProvideConfigurationContext() {
    const appDataPath = (0, react_1.useMemo)(() => remote_1.app.getPath('appData'), []);
    const configPath = [appDataPath, 'jitt', 'config.json'].join('\\');
    console.log(`configPath`, configPath);
    const fileOps = (0, react_1.useMemo)(() => ({
        read: () => {
            var _a, _b;
            if (!fs.existsSync(configPath)) {
                fs.writeFileSync(configPath, JSON.stringify({}, null, '\t'));
            }
            const data = (_b = (_a = fs.readFileSync(configPath)) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '{}';
            const readData = JSON.parse(data.length === 0 ? '{}' : data);
            return readData;
        },
        write: (data) => {
            fs.writeFileSync(configPath, JSON.stringify(data, null, '\t'));
        }
    }), [configPath]);
    const [configuration, setConfiguration] = (0, react_1.useState)(fileOps.read());
    (0, react_1.useEffect)(() => {
        fileOps.write(configuration);
    }, [configuration, fileOps]);
    const updateConfig = (0, react_1.useCallback)((name, value) => {
        setConfiguration((old) => {
            const current = (0, getProperty_1.getProperty)(name, old);
            const upcoming = is_1.is.function(value) ? value(current) : value;
            const next = (0, setProperty_1.setProperty)(name, old, upcoming);
            console.log(`setConfiguration`, current, upcoming, next, old);
            if ((0, deepEqual_1.deepEqual)(next, old)) {
                return old;
            }
            return next;
        });
    }, []);
    const checkCollection = (0, react_1.useCallback)((collection) => {
        const fullname = ['collections', collection].join('.');
        if (!Object.hasOwn(configuration.collections, collection)) {
            updateConfig(fullname, defaultState_1.defaultState);
        }
    }, [configuration.collections, updateConfig]);
    const setCollectionSetting = (0, react_1.useCallback)((collection, name) => {
        return (value) => {
            checkCollection(collection);
            const fullname = ['collections', collection, name].join('.');
            updateConfig(fullname, value);
        };
    }, [checkCollection, updateConfig]);
    const getSection = (0, react_1.useCallback)((name) => {
        return () => (0, getProperty_1.getProperty)(name, configuration);
    }, [configuration]);
    const getCollectionSetting = (0, react_1.useCallback)((collection, name) => {
        return () => {
            var _a;
            checkCollection(collection);
            const fullname = ['collections', collection, name].join('.');
            return (_a = (0, getProperty_1.getProperty)(fullname, configuration)) !== null && _a !== void 0 ? _a : defaultState_1.defaultState[name];
        };
    }, [checkCollection, configuration]);
    const getCollectionSection = (0, react_1.useCallback)((collection) => {
        return () => getSection('collections')()[collection];
    }, [getSection]);
    return (0, react_1.useMemo)(() => ({
        configPath,
        getSection,
        configuration,
        updateConfig,
        getCollectionSection,
        setCollectionSetting,
        getCollectionSetting
    }), [configPath, configuration, getCollectionSection, getCollectionSetting, getSection, setCollectionSetting, updateConfig]);
}
exports.useProvideConfigurationContext = useProvideConfigurationContext;
//# sourceMappingURL=useProvideConfigurationContext.js.map