"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const groupCol_1 = require("../defs/groupCol");
const h = (0, material_react_table_1.createMRTColumnHelper)();
const helper = (0, col_1.col)(h);
exports.trackColumns = [
    helper.listOfPrimitive()('feat', 'Featuring', 'string'),
    helper.int()('index', 'Index', { min: 0, required: true }),
    helper.string()('name', 'Name', undefined, { required: true }),
    (0, groupCol_1.groupCol)(h, 'Duration (sec)', durationDimension(), 'duration', 'bg-magenta-500', 'text-white')()
];
//# sourceMappingURL=track.js.map