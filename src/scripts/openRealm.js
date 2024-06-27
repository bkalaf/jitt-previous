"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.openRealm = exports.password = exports.email = exports.appID = void 0;
const realm_1 = __importDefault(require("realm"));
const schema_1 = require("../schema/schema");
exports.appID = (_a = process.env.REALM_APP_ID) !== null && _a !== void 0 ? _a : '';
exports.email = (_b = process.env.REALM_USER) !== null && _b !== void 0 ? _b : '';
exports.password = (_c = process.env.REALM_PASSWORD) !== null && _c !== void 0 ? _c : '';
function openRealm() {
    console.log(exports.appID);
    console.log(exports.email);
    console.log(exports.password);
    const app = new realm_1.default.App(exports.appID);
    return app
        .logIn(realm_1.default.Credentials.emailPassword({
        email: exports.email,
        password: exports.password
    }))
        .then((user) => {
        console.log(user);
        return realm_1.default.open({
            schema: schema_1.schema,
            sync: {
                partitionValue: exports.email,
                user,
                newRealmFileBehavior: {
                    type: realm_1.default.OpenRealmBehaviorType.OpenImmediately,
                    timeOut: 1000 * 60 * 5,
                    timeOutBehavior: realm_1.default.OpenRealmTimeOutBehavior.ThrowException
                },
                existingRealmFileBehavior: {
                    type: realm_1.default.OpenRealmBehaviorType.OpenImmediately,
                    timeOut: 1000 * 60 * 5,
                    timeOutBehavior: realm_1.default.OpenRealmTimeOutBehavior.ThrowException
                }
            }
        });
    });
}
exports.openRealm = openRealm;
//# sourceMappingURL=openRealm.js.map