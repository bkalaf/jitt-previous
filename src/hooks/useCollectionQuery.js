"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCollectionQuery = void 0;
const react_1 = require("react");
const react_query_1 = require("@tanstack/react-query");
const useLocalRealm_1 = require("./useLocalRealm");
function handleFilter(collection, db, filterString, filterArgs) {
    if (filterString == null || filterString.length === 0) {
        if (db == null)
            throw new Error('no db');
        const result = Array.from(db.objects(collection));
        console.info(`result`, result);
        return Promise.resolve(result);
    }
    if (db == null)
        throw new Error('no db');
    const result = Array.from(db.objects(collection).filtered(filterString, ...(filterArgs !== null && filterArgs !== void 0 ? filterArgs : [])));
    console.info(`result`, result);
    return Promise.resolve(result);
}
function useCollectionQuery(collection) {
    const db = (0, useLocalRealm_1.useLocalRealm)();
    const [filterString, filterArgs] = (0, react_1.useMemo)(() => (collection === 'classifier' ? ['parent == $0', [null]] : []), [collection]);
    const { data } = (0, react_query_1.useQuery)({
        queryKey: [collection],
        queryFn: () => {
            return handleFilter(collection, db, filterString, filterArgs);
        }
    });
    return data;
}
exports.useCollectionQuery = useCollectionQuery;
//# sourceMappingURL=useCollectionQuery.js.map