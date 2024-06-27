"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetTableCanExpand = void 0;
const react_1 = require("react");
function useGetTableCanExpand() {
    return (0, react_1.useCallback)((ot) => {
        return ot === 'classifier' || ot === 'sku' || ot === 'product';
        // return Object.keys(types.find(x => x.name === ot)?.properties ?? {}).includes('subRows');
    }, []);
}
exports.useGetTableCanExpand = useGetTableCanExpand;
//# sourceMappingURL=useGetTableCanExpand.js.map