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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateRecord = void 0;
const react_1 = require("react");
const react_query_1 = require("@tanstack/react-query");
const realm_1 = require("realm");
const useCollectionRoute_1 = require("./useCollectionRoute");
const useUpdater_1 = require("./useUpdater");
const useFailureNotification_1 = require("./useFailureNotification");
const useSuccessNotification_1 = require("./useSuccessNotification");
const useLocalRealm_1 = require("./useLocalRealm");
const useConvert_1 = require("./useConvert");
const runTransaction_1 = require("../util/runTransaction");
function useUpdateRecord(table) {
    const collection = (0, useCollectionRoute_1.useCollectionRoute)();
    const convert = (0, useConvert_1.useConvert)('object', collection);
    const db = (0, useLocalRealm_1.useLocalRealm)();
    const [, updater] = (0, useUpdater_1.useUpdater)();
    const successMessage = (0, useSuccessNotification_1.useSuccessNotification)((obj) => `1 new record created. [${obj._id.toHexString()}]`, collection);
    const failureMessage = (0, useFailureNotification_1.useFailureNotification)((errors) => {
        var _a;
        console.error(errors);
        console.error(errors.root);
        return [(_a = errors.root) === null || _a === void 0 ? void 0 : _a.message].join('\n');
    });
    const onSuccess = (0, react_1.useCallback)((result) => __awaiter(this, void 0, void 0, function* () {
        table.setCreatingRow(null);
        successMessage(result);
    }), [successMessage, table]);
    const onError = (0, react_1.useCallback)((errors) => __awaiter(this, void 0, void 0, function* () {
        failureMessage(errors);
    }), [failureMessage]);
    const { mutate } = (0, react_query_1.useMutation)({
        mutationFn: (values) => {
            return new Promise((resolve) => {
                if (db == null)
                    throw new Error('no db');
                console.log(`values`, values);
                const converted = convert(values);
                const func = () => {
                    const result = db.create(collection, converted, realm_1.UpdateMode.Modified);
                    return resolve(updater(result));
                };
                (0, runTransaction_1.runTransaction)(db, func);
            });
        },
        onSuccess,
        onError
    });
    return {
        onSuccess,
        onError,
        handleSubmit: mutate
    };
}
exports.useUpdateRecord = useUpdateRecord;
//# sourceMappingURL=useUpdateRecord.js.map