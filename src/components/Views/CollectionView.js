"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_react_table_1 = require("material-react-table");
const material_1 = require("@mui/material");
const useCollectionQuery_1 = require("../../hooks/useCollectionQuery");
const useColumns_1 = require("../../hooks/useColumns");
const useWhyDidIUpdate_1 = require("../../hooks/useWhyDidIUpdate");
const useEffectiveCollection_1 = require("../../hooks/useEffectiveCollection");
const useData_1 = require("../../hooks/useData");
// const c: MRT_TableOptions<any>['getRowCanExpand'];
function CollectionView() {
    (0, useWhyDidIUpdate_1.useWhyDidIUpdate)('CollectionView', {});
    const columns = (0, useColumns_1.useColumns)();
    const route = (0, useEffectiveCollection_1.useEffectiveCollection)();
    const data = (0, useCollectionQuery_1.useCollectionQuery)(route);
    const table = (0, useData_1.useData)(data !== null && data !== void 0 ? data : [], columns);
    // useEffect(() => {
    //     if (route === 'sku') {
    //         ((data ?? []) as any as RealmObj<ISku>[]).map(item => {
    //             generateNarrative(item, true);
    //         })
    //     }
    // }, [data, route]);
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { component: 'section', className: 'border-seperate table-auto overflow-scroll', children: (0, jsx_runtime_1.jsx)(material_react_table_1.MaterialReactTable, { table: table }) }));
}
exports.CollectionView = CollectionView;
//# sourceMappingURL=CollectionView.js.map