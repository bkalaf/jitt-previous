import { getEnumColor } from './getEnumColor';
import { getEnumSelector } from './getEnumSelector';
import { getEnumText } from './getEnumText';

export const _itemConditions = {
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

export const itemConditions = {
    getText: getEnumText(_itemConditions),
    getColor: getEnumColor(_itemConditions),
    getSelector: getEnumSelector(_itemConditions)
};

export const ItemConditionsMap = Object.fromEntries(Object.entries(_itemConditions).map(([k, v]) => [k, v.text] as [string, string]));
