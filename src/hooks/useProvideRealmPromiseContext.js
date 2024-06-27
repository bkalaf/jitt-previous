"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProvideRealmPromiseContext = void 0;
const react_1 = require("react");
const useEnv_1 = require("./useEnv");
const openRealm_1 = require("../contexts/openRealm");
const realm_1 = __importDefault(require("realm"));
const use_async_resource_1 = require("use-async-resource");
const EntityBase_1 = require("../schema/entity/EntityBase");
function useProvideRealmPromiseContext() {
    const { REALM_APP_ID, REALM_PASSWORD, REALM_USER } = (0, useEnv_1.useEnv)();
    const app = (0, react_1.useMemo)(() => new realm_1.default.App(REALM_APP_ID), [REALM_APP_ID]);
    const [user, setUser] = (0, react_1.useState)(app.currentUser);
    const isInit = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(() => {
        if (user == null) {
            app.logIn(realm_1.default.Credentials.emailPassword({ email: REALM_USER, password: REALM_PASSWORD }))
                .then(setUser)
                .then(() => console.info('USER LOGGED IN'));
        }
    }, [REALM_PASSWORD, REALM_USER, app, user]);
    const [realmResource] = (0, use_async_resource_1.useAsyncResource)(() => __awaiter(this, void 0, void 0, function* () {
        try {
            if (user == null)
                return undefined;
            const result = yield (0, openRealm_1.openRealm)(REALM_USER)(user);
            // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 5000, message: `Local db opened!`, variant: 'success' });
            if (!isInit.current) {
                if (EntityBase_1.EntityBase.localRealm == null && result != null) {
                    EntityBase_1.EntityBase.localRealm = result;
                    isInit.current = true;
                }
            }
            return result;
        }
        catch (error) {
            // enqueueSnackbar({ preventDuplicate: true, autoHideDuration: 6000, message: error.message, variant: 'error' });
            console.error(error);
            throw error;
        }
    }), []);
    console.log(app, user, realmResource);
    return (0, react_1.useMemo)(() => ({
        realmResource,
        app,
        user
    }), [app, realmResource, user]);
}
exports.useProvideRealmPromiseContext = useProvideRealmPromiseContext;
//# sourceMappingURL=useProvideRealmPromiseContext.js.map