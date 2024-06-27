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
exports.openRealm = void 0;
const realm_1 = __importDefault(require("realm"));
const schema_1 = require("../schema/schema");
function openRealm(partitionValue) {
    return function openRealmInner(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!user)
                return undefined;
            const realm = yield realm_1.default.open({
                schema: schema_1.schema,
                sync: {
                    partitionValue,
                    user,
                    newRealmFileBehavior: {
                        type: realm_1.default.OpenRealmBehaviorType.DownloadBeforeOpen,
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
            return realm;
        });
    };
}
exports.openRealm = openRealm;
//# sourceMappingURL=openRealm.js.map