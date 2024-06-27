"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStringHeaderCell = void 0;
const react_1 = require("react");
const calculateSize_1 = require("../Views/calculateSize");
// export function createHeaderCell() {
//     return function HeaderCell(props: Parameters<Exclude<MRT_ColumnDef<any, any>['Header'], undefined | null | string | number | boolean | React.ReactElement<any> | Iterable<React.ReactNode>>>[0]) {
//         useWhyDidIUpdate('HeaderCell', props);
//         const { column, table } = props;
//         const lengths = Array.from(column.getFacetedUniqueValues().keys()).map((x: string) => x.length);
//         const minLength = _calculateBodySize(Math.min(...lengths));
//         const maxLength = _calculateBodySize(Math.max(...lengths));
//         const name = column.columnDef.accessorKey ?? column.columnDef.id ?? 'n/a';
//         const currentSizes = Object.fromEntries(Object.entries(table.getState().columnSizing))
//         const currentSize = name in currentSizes ? currentSizes[name]: undefined;
//         const updateSize = () => {
//             table.setColumnSizingInfo
//         }
//     }
// }
function createStringHeaderCell() {
    return function LookupCell({ column, table }) {
        var _a, _b;
        const lengths = Array.from(column.getFacetedUniqueValues().keys()).map((x) => { var _a; return (_a = x === null || x === void 0 ? void 0 : x.length) !== null && _a !== void 0 ? _a : 0; });
        const minLength = (0, calculateSize_1.$calculateSize)(9.75)(Math.min(...[0, ...lengths]));
        const maxLength = (0, calculateSize_1.$calculateSize)(9.75)(Math.max(...[0, ...lengths]));
        const name = (_b = (_a = column.columnDef.accessorKey) !== null && _a !== void 0 ? _a : column.columnDef.id) !== null && _b !== void 0 ? _b : 'n/a';
        const currentSizes = Object.fromEntries(Object.entries(table.getState().columnSizing));
        const currentSize = name in currentSizes ? currentSizes[name] : undefined;
        const func = (0, react_1.useCallback)(() => {
            console.log('stringCell.func in useEffect', minLength, maxLength, name);
            table.setColumnSizing((old) => {
                if (maxLength === 0)
                    return old;
                if (currentSize != null && currentSize >= maxLength) {
                    console.info('SHORTING stringCell.func');
                    return old;
                }
                const newState = Object.assign(Object.assign({}, old), { [name]: maxLength });
                console.info(`sizeChange`, old, newState);
                return newState;
            });
        }, [currentSize, maxLength, minLength, name, table]);
        (0, react_1.useEffect)(func, [func]);
        return column.columnDef.header;
    };
}
exports.createStringHeaderCell = createStringHeaderCell;
//# sourceMappingURL=_createStringHeaderCell.js.map