"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PulitzerAward = exports.HugoAward = exports.TonyAward = exports.GrammyAward = exports.EmmyAward = exports.OscarAward = exports.NYTimesAward = exports.Award = exports.BaseAward = void 0;
const _1 = require("../$");
const schemaName_1 = require("../../util/schemaName");
const EntityBase_1 = require("./EntityBase");
const getChoiceText_1 = require("./getChoiceText");
const is_1 = require("../../common/is");
const surround_1 = require("../../common/text/surround");
class BaseAward extends EntityBase_1.EntityBase {
    static update(item) {
        return item;
    }
    static init() {
        return {
            name: 'unknown'
        };
    }
    constructor(name, realm, values) {
        super(BaseAward.localRealm, values);
        this.name = name;
    }
}
exports.BaseAward = BaseAward;
BaseAward.schema = {
    name: (0, schemaName_1.schemaName)(_1.$.award()),
    embedded: true,
    properties: {
        name: _1.$.string(),
        category: _1.$.string.opt,
        year: _1.$.string.opt,
        who: _1.$.string.opt,
        status: _1.$.string.default('unclear')
    }
};
BaseAward.liComponent = (value) => () => {
    var _q;
    if (value == null)
        return '';
    const { name, status, who, year, category } = value;
    const nameCategory = [(0, getChoiceText_1.getChoiceText)('awardNames')(name), category != null ? (0, getChoiceText_1.getChoiceText)(categoryFromName[name])(category) : undefined].filter(is_1.is.not.nil).join(' for ');
    return [year === null || year === void 0 ? void 0 : year.concat(': '), [nameCategory, who].join(' - '), status === 'unclear' ? '' : ' '.concat((_q = (0, surround_1.surroundParensIgnore)(status)) !== null && _q !== void 0 ? _q : '')].join('');
};
class Award extends BaseAward {
    constructor(realm, values) {
        var _q;
        super((_q = values.name) !== null && _q !== void 0 ? _q : 'unknown', realm, values);
    }
}
exports.Award = Award;
class NYTimesAward extends (_b = BaseAward) {
    constructor() {
        super(...arguments);
        this.name = 'ny-times';
    }
}
exports.NYTimesAward = NYTimesAward;
_a = NYTimesAward;
NYTimesAward.schema = Object.assign(Object.assign({}, Reflect.get(_b, "schema", _a)), { name: (0, schemaName_1.schemaName)(_1.$.nyTimesAward()) });
class OscarAward extends (_d = BaseAward) {
    constructor() {
        super(...arguments);
        this.name = 'oscar';
    }
}
exports.OscarAward = OscarAward;
_c = OscarAward;
OscarAward.schema = Object.assign(Object.assign({}, Reflect.get(_d, "schema", _c)), { name: (0, schemaName_1.schemaName)(_1.$.oscarAward()) });
class EmmyAward extends (_f = BaseAward) {
    constructor() {
        super(...arguments);
        this.name = 'emmy';
    }
}
exports.EmmyAward = EmmyAward;
_e = EmmyAward;
EmmyAward.schema = Object.assign(Object.assign({}, Reflect.get(_f, "schema", _e)), { name: (0, schemaName_1.schemaName)(_1.$.emmyAward()) });
class GrammyAward extends (_h = BaseAward) {
    constructor() {
        super(...arguments);
        this.name = 'grammy';
    }
}
exports.GrammyAward = GrammyAward;
_g = GrammyAward;
GrammyAward.schema = Object.assign(Object.assign({}, Reflect.get(_h, "schema", _g)), { name: (0, schemaName_1.schemaName)(_1.$.grammyAward()) });
class TonyAward extends (_k = BaseAward) {
    constructor() {
        super(...arguments);
        this.name = 'tony';
    }
}
exports.TonyAward = TonyAward;
_j = TonyAward;
TonyAward.schema = Object.assign(Object.assign({}, Reflect.get(_k, "schema", _j)), { name: (0, schemaName_1.schemaName)(_1.$.tonyAward()) });
class HugoAward extends (_m = BaseAward) {
    constructor() {
        super(...arguments);
        this.name = 'hugo';
    }
}
exports.HugoAward = HugoAward;
_l = HugoAward;
HugoAward.schema = Object.assign(Object.assign({}, Reflect.get(_m, "schema", _l)), { name: (0, schemaName_1.schemaName)(_1.$.hugoAward()) });
class PulitzerAward extends (_p = BaseAward) {
    constructor() {
        super(...arguments);
        this.name = 'pulitzer';
    }
}
exports.PulitzerAward = PulitzerAward;
_o = PulitzerAward;
PulitzerAward.schema = Object.assign(Object.assign({}, Reflect.get(_p, "schema", _o)), { name: (0, schemaName_1.schemaName)(_1.$.pulitzerAward()) });
const categoryFromName = {
    'ny-times': 'nyTimesAwardCategories',
    emmy: 'emmyAwardCategories',
    oscar: 'oscarAwardCategories',
    tony: 'tonyAwardCategories',
    hugo: 'hugoAwardCategories',
    pulitzer: 'pulizerPrizeCategories',
    grammy: 'grammyAwardCategories',
    unknown: 'oscarAwardCategories'
};
//# sourceMappingURL=award.js.map