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
exports.standardizeOptions = void 0;
function standardizeOptions(inc) {
    if (Array.isArray(inc)) {
        const asArray1 = inc.map((v) => (typeof v === 'string' ? { key: v, text: v, aliases: [] } : Object.assign({ aliases: [] }, v)));
        const asArray2 = asArray1.map((_a) => {
            var { aliases } = _a, rest = __rest(_a, ["aliases"]);
            return aliases.map((alias) => (Object.assign(Object.assign({}, rest), { key: alias, text: alias })));
        }).reduce((pv, cv) => [...pv, ...cv], asArray1);
        const asRecord = Object.fromEntries(asArray2.map((x) => [x.key, x]));
        return {
            asRecord,
            asArray: asArray2
        };
    }
    const asArray = Object.entries(inc).map(([k, v]) => {
        const spread = typeof v === 'string' ? { text: v, key: k } : v;
        return spread;
    });
    const asRecord = Object.fromEntries(asArray.map((v) => [v.key, Object.assign(Object.assign({}, v), { aliases: [] })]));
    return {
        asArray,
        asRecord
    };
}
exports.standardizeOptions = standardizeOptions;
//# sourceMappingURL=standardizeOptions.js.map