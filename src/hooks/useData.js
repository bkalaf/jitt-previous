"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useData = exports.createIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_react_table_1 = require("material-react-table");
const createRenderCreateRowDialogContent_1 = require("../components/Views/renderProperties/createRenderCreateRowDialogContent");
const createRenderTopToolbarCustomActions_1 = require("../components/Views/renderProperties/createRenderTopToolbarCustomActions");
const useInitial_1 = require("./useInitial");
const createRenderEditRowDialogContent_1 = require("../components/Views/renderProperties/createRenderEditRowDialogContent");
const react_table_1 = require("@tanstack/react-table");
const useEffectiveCollection_1 = require("./useEffectiveCollection");
const createRenderRowActions_1 = require("../components/Views/renderProperties/createRenderRowActions");
const useGetTableCanExpand_1 = require("./useGetTableCanExpand");
const usePersistState_1 = require("./usePersistState");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
const createRenderDetailPanel_1 = require("./createRenderDetailPanel");
function createIcon(icon) {
    return function FAIcon(props) {
        return (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, Object.assign({ icon: icon }, props));
    };
}
exports.createIcon = createIcon;
// const c: MRT_TableOptions<any>['muiDetailPanelProps'];
function useData(data, columns, objectType) {
    const route = (0, useEffectiveCollection_1.useEffectiveCollection)(objectType);
    const init = (0, useInitial_1.useInitial)(route);
    const getTableCanExpand = (0, useGetTableCanExpand_1.useGetTableCanExpand)();
    const _a = (0, usePersistState_1.usePersistState)(route), { resetSettings, onColumnFiltersChange } = _a, opts = __rest(_a, ["resetSettings", "onColumnFiltersChange"]);
    console.log(`tableState`, route, opts.state);
    // const { resetSettings, onColumnFiltersChange, ...opts } = usePersistedState<T>(objectType);
    // const c: MRT_TableOptions<any>['muiTableBodyRowProps'];
    return (0, material_react_table_1.useMaterialReactTable)(Object.assign({ autoResetExpanded: false, autoResetPageIndex: false, columnResizeMode: 'onEnd', columns, createDisplayMode: 'modal', data, displayColumnDefOptions: {
            'mrt-row-actions': {
                size: 80,
                grow: true,
                visibleInShowHideMenu: false
            },
            'mrt-row-expand': {
                size: 70,
                grow: true,
                visibleInShowHideMenu: false
                // muiTableHeadCellProps: {
                //     classes: {
                //         root: 'text-center p-0',
                //     },
                //     id: 'mrt-row-expand',
                //     'data-id': 'mrt-row-expand'
                // } as any,
                // muiTableBodyCellProps: {
                //     className: 'ml-0'
                // } as TableCellProps,
                // Cell: createJITTExpandButton(expandSingleRow),
                // Header: createJITTExpandButton(expandAllRows)
            },
            'mrt-row-select': {
                size: 50,
                grow: true,
                visibleInShowHideMenu: false
            }
        }, editDisplayMode: 'modal', enableColumnActions: true, enableColumnDragging: true, enableColumnOrdering: true, enableColumnPinning: true, enableColumnResizing: true, enableEditing: true, enableExpandAll: getTableCanExpand(route), enableExpanding: getTableCanExpand(route), enableFacetedValues: true, enableGrouping: true, enableRowSelection: true, enableSelectAll: true, enableSorting: true, enableStickyFooter: true, enableStickyHeader: true, getFacetedMinMaxValues: (0, react_table_1.getFacetedMinMaxValues)(), getFacetedRowModel: (0, react_table_1.getFacetedRowModel)(), getFacetedUniqueValues: (0, react_table_1.getFacetedUniqueValues)(), getSubRows: getTableCanExpand(route) ? (original) => original.subRows : undefined, groupedColumnMode: 'remove', icons: {
            ArrowDownwardIcon: createIcon(pro_solid_svg_icons_1.faArrowDown),
            ArrowRightIcon: createIcon(pro_solid_svg_icons_1.faArrowRight),
            ChevronLeftIcon: createIcon(pro_solid_svg_icons_1.faChevronLeft),
            ChevronRightIcon: createIcon(pro_solid_svg_icons_1.faChevronRight),
            ContentCopy: createIcon(pro_solid_svg_icons_1.faClipboard),
            DensityLargeIcon: createIcon(pro_solid_svg_icons_1.faGrid),
            DensityMediumIcon: createIcon(pro_solid_svg_icons_1.faGrid4),
            DensitySmallIcon: createIcon(pro_solid_svg_icons_1.faGrid5),
            DragHandleIcon: createIcon(pro_solid_svg_icons_1.faGripLines),
            EditIcon: createIcon(pro_solid_svg_icons_1.faPencil),
            ExpandMoreIcon: createIcon(pro_solid_svg_icons_1.faPlusSquare),
            FilterAltIcon: createIcon(pro_solid_svg_icons_1.faFilter),
            FilterListIcon: createIcon(pro_solid_svg_icons_1.faFilterList),
            FilterListOffIcon: createIcon(pro_solid_svg_icons_1.faFilterCircleXmark),
            FirstPageIcon: createIcon(pro_solid_svg_icons_1.faBackwardFast),
            FullscreenExitIcon: createIcon(pro_solid_svg_icons_1.faCompress),
            FullscreenIcon: createIcon(pro_solid_svg_icons_1.faExpand),
            LastPageIcon: createIcon(pro_solid_svg_icons_1.faForwardFast),
            PushPinIcon: createIcon(pro_solid_svg_icons_1.faThumbTack),
            SaveIcon: createIcon(pro_solid_svg_icons_1.faFloppyDisk),
            SearchIcon: createIcon(pro_solid_svg_icons_1.faMagnifyingGlass),
            SearchOffIcon: createIcon(pro_solid_svg_icons_1.faMagnifyingGlassMinus),
            SortIcon: createIcon(pro_solid_svg_icons_1.faSort),
            ViewColumnIcon: createIcon(pro_solid_svg_icons_1.faEye),
            VisibilityOffIcon: createIcon(pro_solid_svg_icons_1.faEyeSlash)
        }, layoutMode: 'grid', 
        // muiExpandAllButtonProps: {
        //     classes: {
        //         root: 'inline-flex'
        //     },
        //     sx: {
        //         width: iconButtonDim,
        //         height: iconButtonDim
        //     }
        // },
        // muiExpandButtonProps: {
        //     classes: {
        //         root: 'text-center mx-auto'
        //     },
        //     sx: {
        //         width: iconButtonDim,
        //         height: iconButtonDim
        //     }
        // },
        muiTableBodyCellProps: {
            className: 'whitespace-pre font-medium group-data-[row-depth="4"]:text-white group-data-[row-depth="5"]:text-white group-data-[row-depth="6"]:text-white aria-readonly:bg-black aria-readonly:text-white'
        }, 
        //  (props) => ({
        //     ...{
        //         className: 'whitespace-pre font-medium group-data-[row-depth="4"]:text-white group-data-[row-depth="5"]:text-white group-data-[row-depth="6"]:text-white data-is-calc:bg-black data-is-calc:text-white'
        //     },
        //     ...props.column.columnDef.muiTableBodyCellProps
        // }),
        muiDetailPanelProps: {
            className: 'w-screen'
        }, muiTableBodyRowProps: (props) => ({
            className: 'group data-[row-depth="0"]:bg-transparent data-[row-depth="1"]:bg-blue-100 data-[row-depth="2"]:bg-blue-200 data-[row-depth="3"]:bg-blue-300 data-[row-depth="4"]:bg-blue-400 data-[row-depth="5"]:bg-blue-500 data-[row-depth="6"]:bg-blue-600 data-[row-depth="4"]:text-white data-[row-depth="5"]:text-white data-[row-depth="6"]:text-white',
            'data-row-depth': props.row.depth
        }), muiTableHeadCellProps: {
            // classes: {
            //     head: 'relative'
            //     // head: 'flex justify-center'
            // },
            className: 'grouped-header:bg-blue-700 grouped-header:text-white single-header:bg-transparent single-header:text-black grouped-header:shadow-inner grouped-header:shadow-black'
        }, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        muiTableContainerProps: (theme) => {
            var _a, _b;
            const mh = ((_b = (_a = window.visualViewport) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0) - 66.95 - 35.99 - 35.99;
            const maxHeight = `${mh.toFixed(0)}px`;
            return {
                sx: {
                    display: 'flex',
                    maxHeight,
                    overflowX: 'scroll',
                    overflowY: 'scroll'
                }
            };
        }, onColumnFiltersChange: onColumnFiltersChange, paginationDisplayMode: 'pages', renderCreateRowDialogContent: (0, createRenderCreateRowDialogContent_1.createRenderCreateRowDialogContent)(), renderEditRowDialogContent: (0, createRenderEditRowDialogContent_1.createRenderEditRowDialogContent)(), renderRowActions: (0, createRenderRowActions_1.createRenderRowActions)(), 
        // renderRowActionMenuItems: createRenderRowActionMenuItems(),
        renderTopToolbarCustomActions: (0, createRenderTopToolbarCustomActions_1.createRenderTopToolbarCustomActions)(init, resetSettings), renderDetailPanel: route === 'sku' || route === 'product' ? createRenderDetailPanel_1.CreateRenderDetailPanel : undefined }, opts));
}
exports.useData = useData;
//# sourceMappingURL=useData.js.map