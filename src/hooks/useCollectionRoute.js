"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCollectionRoute = exports.useCollectionName = void 0;
const react_router_1 = require("react-router");
function useCollectionName() {
    var _a;
    const match = (0, react_router_1.useMatch)('/data/v1/:collection');
    // console.log(`match`, match);
    const result = (_a = match === null || match === void 0 ? void 0 : match.params.collection) === null || _a === void 0 ? void 0 : _a.split('/')[0];
    // console.log(`collectionRoute`, result);
    return result;
}
exports.useCollectionName = useCollectionName;
function useCollectionRoute() {
    const route = useCollectionName();
    if (route == null)
        throw new Error('no collection route');
    return route;
}
exports.useCollectionRoute = useCollectionRoute;
//# sourceMappingURL=useCollectionRoute.js.map