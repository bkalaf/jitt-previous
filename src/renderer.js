"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const realm_1 = __importDefault(require("realm"));
realm_1.default.flags.THROW_ON_GLOBAL_REALM = true;
require("./assets/css/app.css");
const client_1 = require("react-dom/client");
const AppRoot_1 = require("./components/AppRoot");
const AppProviders_1 = require("./components/AppProviders");
const el = document.getElementById('root');
if (el == null)
    throw new Error('no root');
(0, client_1.createRoot)(el).render((0, AppRoot_1.AppRoot)({ ProviderComponents: AppProviders_1.AppProviders }));
//# sourceMappingURL=renderer.js.map