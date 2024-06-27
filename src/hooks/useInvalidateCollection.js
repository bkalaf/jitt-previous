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
exports.useInvalidateCollection = void 0;
const react_1 = require("react");
const react_query_1 = require("@tanstack/react-query");
const useEffectiveCollection_1 = require("./useEffectiveCollection");
function useInvalidateCollection(objectType) {
    const collection = (0, useEffectiveCollection_1.useEffectiveCollection)(objectType);
    const queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_1.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
        yield queryClient.invalidateQueries({
            queryKey: [collection]
        }, {
            throwOnError: true
        });
        // await queryClient.refetchQueries({
        //     queryKey: [collection]
        // }, {
        //     throwOnError: true
        // });
    }), [collection, queryClient]);
}
exports.useInvalidateCollection = useInvalidateCollection;
//# sourceMappingURL=useInvalidateCollection.js.map