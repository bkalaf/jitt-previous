"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitFor = void 0;
const cnvrt_1 = require("../conversion/cnvrt");
const initialValue_1 = require("../../initialValue");
function getInitFor(Ctor, name) {
    if ((0, cnvrt_1.isPrimitive)(name))
        return initialValue_1.initialValue[name];
    const { localRealm: { schema } } = Ctor;
    const $schema = schema;
    const ctor = $schema.find((x) => x.name === name);
    if (ctor == null)
        throw new Error(`could not find schema for ${name}`);
    return ctor.ctor.init;
}
exports.getInitFor = getInitFor;
//# sourceMappingURL=getInitFor.js.map