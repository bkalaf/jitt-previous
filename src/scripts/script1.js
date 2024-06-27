"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.sleep = void 0;
require("dotenv/config");
const openRealm_1 = require("./openRealm");
function sleep(delay = 0) {
    return new Promise((resolve) => setTimeout(() => {
        console.log('SLEEP DONE');
        resolve(undefined);
    }, delay));
}
exports.sleep = sleep;
const collector = new Set();
function run() {
    return (0, openRealm_1.openRealm)().then((db) => {
        const objs = db.objects('mercariTaxonomy');
        console.log(`objs`, objs.length);
        const proms = Promise.all(objs.map((o) => {
            if (o.category == null || o.subCategory == null)
                return Promise.resolve();
            const tax = { category: { name: o.category.name, selector: o.category.selector }, subCategory: { name: o.subCategory.name, selector: o.subCategory.selector } };
            console.log(tax);
            if (!collector.has(tax)) {
                collector.add(tax);
            }
            return Promise.resolve();
        }));
        return proms;
    });
}
exports.run = run;
run().then(() => {
    const eles = Array.from(collector.values());
    const map = new Map();
    for (const { category: { name, selector }, subCategory } of eles) {
        if (map.has(name)) {
            const current = map.get(name);
            const value = current[1].find((x) => x.name === subCategory.name && x.selector === subCategory.selector) != null ? current[1] : [...current[1], subCategory];
            map.set(name, [current[0], value]);
        }
        else {
            map.set(name, [selector, [subCategory]]);
        }
    }
    console.log(JSON.stringify(Object.fromEntries(Array.from(map.entries()).map(([key, value]) => [
        key,
        { selector: value[0], children: Object.fromEntries(value[1].map(({ name: n, selector: s }) => [n, { selector: s, brands: [] }])) }
    ])), null, '\t'));
    console.log('DONE!');
});
//# sourceMappingURL=script1.js.map