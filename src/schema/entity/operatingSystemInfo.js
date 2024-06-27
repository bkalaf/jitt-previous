"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatingSystemInfo = void 0;
const _1 = require("../$");
const is_1 = require("../../common/is");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
const os = {
    unknown: 'unknown',
    android: 'Android',
    ios: 'iOS',
    blackberry: 'Blackberry',
    linux: 'Linux',
    nucleus: 'Nucleus OS',
    symbian: 'Symbian',
    macOS: 'macOS',
    fire: 'Amazon Fire',
    windows: 'Windows'
};
// console.log(`export type OperatingSystemNames = ${Object.keys(os).map(surroundQuotesIgnore).join(' | ')}`);
// console.log(
//     JSON.stringify(
//         Object.entries(os).map(([k, v]) => ({
//             key: k,
//             text: v,
//             aliases: []
//         })),
//         null,
//         '\t'
//     )
// );
class OperatingSystemInfo extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            operatingSystem: 'unknown'
        };
    }
}
exports.OperatingSystemInfo = OperatingSystemInfo;
OperatingSystemInfo.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.operatingSystemInfo()),
    embedded: true,
    properties: {
        operatingSystem: _1.$.string.default('unknown'),
        version: _1.$.string.opt
    }
};
OperatingSystemInfo.liComponent = (value) => () => (value == null ? '' : [os[value.operatingSystem], value.version].filter(is_1.is.not.nil).join(' '));
//# sourceMappingURL=operatingSystemInfo.js.map