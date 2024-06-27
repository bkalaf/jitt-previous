"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemConditionsMap = exports.itemConditions = exports._itemConditions = void 0;
const getEnumColor_1 = require("./getEnumColor");
const getEnumSelector_1 = require("./getEnumSelector");
const getEnumText_1 = require("./getEnumText");
exports._itemConditions = {
    new: {
        key: 'new',
        text: 'New',
        selector: '[data-testid="ConditionNew"]',
        color: 'bg-sky-500 text-white'
    },
    'like-new': {
        key: 'like-new',
        text: 'Like New',
        selector: '[data-testid="ConditionLikeNew"]',
        color: 'bg-emerald-500 text-white',
        aliases: ['like new']
    },
    good: {
        key: 'good',
        text: 'Good',
        selector: '[data-testid="ConditionGood"]',
        color: 'bg-yellow-500 text-black'
    },
    fair: {
        key: 'fair',
        text: 'Fair',
        selector: '[data-testid="ConditionFair"]',
        color: 'bg-orange-500 text-white'
    },
    poor: {
        key: 'poor',
        text: 'Poor',
        selector: '[data-testid="ConditionPoor"]',
        color: 'bg-rose-500 text-white'
    },
    parts: {
        key: 'parts',
        text: 'For Parts',
        selector: '[data-testid="ConditionPoor"]',
        color: 'bg-rose-500 text-white'
    }
};
exports.itemConditions = {
    getText: (0, getEnumText_1.getEnumText)(exports._itemConditions),
    getColor: (0, getEnumColor_1.getEnumColor)(exports._itemConditions),
    getSelector: (0, getEnumSelector_1.getEnumSelector)(exports._itemConditions)
};
exports.ItemConditionsMap = Object.fromEntries(Object.entries(exports._itemConditions).map(([k, v]) => [k, v.text]));
//# sourceMappingURL=itemConditions.js.map