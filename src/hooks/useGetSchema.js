"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetSchema = void 0;
const useTypes_1 = require("./useTypes");
function useGetSchema(objectType) {
    const types = (0, useTypes_1.useTypes)();
    const thisSchema = types.find((x) => x.name === objectType);
    return thisSchema;
}
exports.useGetSchema = useGetSchema;
//# sourceMappingURL=useGetSchema.js.map