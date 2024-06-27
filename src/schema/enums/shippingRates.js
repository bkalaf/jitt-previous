"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENT_SHIPPING_VERSION = exports.getShippingById = exports.getShipping = exports.getLowestShippingRate = exports.sortShippingRate = void 0;
const is_1 = require("../../common/is");
const titleGenerator_1 = require("../../components/table/controls/titleGenerator");
const parseNumber_1 = require("./parseNumber");
const shipping_rates_json_1 = __importDefault(require("C:\\Users\\bobby\\AppData\\Roaming\\jitt\\shipping-rates.json"));
function sortShippingRate(rates) {
    const { standard, 'media-mail': mediaMail } = (0, titleGenerator_1.sortToKey)((x) => x.category)(rates);
    function inner(cat, incoming) {
        const byWeight = (0, titleGenerator_1.sortToKey)((x) => x.weight.toFixed(2))(incoming);
        return { [cat]: byWeight };
    }
    const result = Object.assign(Object.assign({}, inner('media-mail', mediaMail)), inner('standard', standard));
    return result;
}
exports.sortShippingRate = sortShippingRate;
function getLowestShippingRate(result) {
    const { 'media-mail': mediaMail, standard } = result;
    function inner(rates) {
        return Object.entries(rates).map(([weight, innerRates]) => {
            const max = (0, parseNumber_1.parseNumber)(weight);
            const min = max <= 1 ? max - 0.25 : max - 1;
            const price = Math.min(...innerRates.map((x) => x.price));
            const lowest = innerRates.filter((x) => x.price === price);
            const multiple = lowest.length > 1;
            const rate = innerRates.find((x) => x.price === price);
            if (rate == null)
                return undefined;
            return {
                min,
                max,
                price,
                carrier: rate === null || rate === void 0 ? void 0 : rate.carrier,
                id: rate === null || rate === void 0 ? void 0 : rate.id,
                multiple
            };
        });
    }
    return {
        'media-mail': inner(mediaMail).filter(is_1.is.not.nil),
        standard: inner(standard).filter(is_1.is.not.nil)
    };
}
exports.getLowestShippingRate = getLowestShippingRate;
const shippingRatesV1 = getLowestShippingRate(sortShippingRate(shipping_rates_json_1.default));
// export const shippingRates3 = [
//     { min: 0, max: 0.25, 'media-mail': { carrier: 'USPS Media Mail', id: 1753, price: 4.99 }, standard: { carrier: 'USPS Ground Advantage', id: 1698, price: 3.99 } },
//     { min: 0.25, max: 0.5, 'media-mail': { carrier: 'USPS Media Mail', id: 1753, price: 4.99 }, standard: { carrier: 'USPS Ground Advantage', id: 1699, price: 4.99 } },
//     { min: 0.5, max: 0.75, 'media-mail': { carrier: 'USPS Media Mail', id: 1753, price: 4.99 }, standard: { carrier: 'USPS Ground Advantage', id: 1700, price: 5.99 } },
//     { min: 0.75, max: 1, 'media-mail': { carrier: 'USPS Media Mail', id: 1753, price: 4.99 }, standard: { carrier: 'USPS Ground Advantage', id: 1701, price: 6.99 } },
//     { min: 1, max: 2, 'media-mail': { carrier: 'USPS Media Mail', id: 1754, price: 5.99 }, standard: { carrier: 'UPS SurePost', id: 1749, price: 7.99 } },
//     { min: 2, max: 3, 'media-mail': { carrier: 'USPS Media Mail', id: 1755, price: 6.99 }, standard: { carrier: 'UPS SurePost', id: 1750, price: 7.99 } },
//     { min: 3, max: 4, 'media-mail': { carrier: 'USPS Media Mail', id: 1756, price: 6.99 }, standard: { carrier: 'UPS SurePost', id: 1751, price: 8.99 } },
//     { min: 4, max: 5, 'media-mail': { carrier: 'USPS Media Mail', id: 1757, price: 7.99 }, standard: { carrier: 'UPS SurePost', id: 1752, price: 8.99 } },
//     { min: 5, max: 6, 'media-mail': { carrier: 'USPS Media Mail', id: 1758, price: 8.99 }, standard: { carrier: 'UPS Ground', id: 1728, price: 13.5 } },
//     { min: 6, max: 7, 'media-mail': { carrier: 'USPS Media Mail', id: 1759, price: 9.99 }, standard: { carrier: 'UPS Ground', id: 1729, price: 17.25 } },
//     { min: 7, max: 8, 'media-mail': { carrier: 'USPS Media Mail', id: 1760, price: 11.99 }, standard: { carrier: 'UPS Ground', id: 1730, price: 17.25 } },
//     { min: 8, max: 9, 'media-mail': { carrier: 'USPS Media Mail', id: 1761, price: 11.99 }, standard: { carrier: 'UPS Ground', id: 1731, price: 17.25 } },
//     { min: 9, max: 10, 'media-mail': { carrier: 'USPS Media Mail', id: 1762, price: 11.99 }, standard: { carrier: 'UPS Ground', id: 1732, price: 17.25 } },
//     { min: 10, max: 11, 'media-mail': { carrier: 'USPS Media Mail', id: 1763, price: 16.99 }, standard: { carrier: 'UPS Ground', id: 1733, price: 40 } },
//     { min: 11, max: 12, 'media-mail': { carrier: 'USPS Media Mail', id: 1764, price: 16.99 }, standard: { carrier: 'UPS Ground', id: 1734, price: 40 } },
//     { min: 12, max: 13, 'media-mail': { carrier: 'USPS Media Mail', id: 1765, price: 16.99 }, standard: { carrier: 'FedEx Ground', id: 1680, price: 40 } },
//     { min: 13, max: 14, 'media-mail': { carrier: 'USPS Media Mail', id: 1766, price: 16.99 }, standard: { carrier: 'FedEx Ground', id: 1681, price: 40 } },
//     { min: 14, max: 15, 'media-mail': { carrier: 'USPS Media Mail', id: 1767, price: 16.99 }, standard: { carrier: 'FedEx Ground', id: 1682, price: 40 } },
//     { min: 15, max: 16, 'media-mail': { carrier: 'USPS Media Mail', id: 1768, price: 19.99 }, standard: { carrier: 'FedEx Ground', id: 1683, price: 40 } },
//     { min: 16, max: 17, 'media-mail': { carrier: 'USPS Media Mail', id: 1769, price: 19.99 }, standard: { carrier: 'FedEx Ground', id: 1684, price: 40 } },
//     { min: 17, max: 18, 'media-mail': { carrier: 'USPS Media Mail', id: 1770, price: 19.99 }, standard: { carrier: 'FedEx Ground', id: 1685, price: 40 } },
//     { min: 18, max: 19, 'media-mail': { carrier: 'USPS Media Mail', id: 1771, price: 19.99 }, standard: { carrier: 'FedEx Ground', id: 1686, price: 40 } },
//     { min: 19, max: 20, 'media-mail': { carrier: 'USPS Media Mail', id: 1772, price: 19.99 }, standard: { carrier: 'FedEx Ground', id: 1687, price: 40 } },
//     { min: 20, max: 30, standard: { carrier: 'FedEx Ground', id: 1688, price: 40 } },
//     { min: 30, max: 40, standard: { carrier: 'FedEx Ground', id: 1689, price: 40 } },
//     { min: 40, max: 50, standard: { carrier: 'UPS Ground', id: 1745, price: 95 } }
// ];
// const shippingRatesMap = Object.fromEntries(shippingRates3.map((rates) => {
//     const { min, max, standard, ['media-mail']: mediaMail } = rates;
//     return [
//         [standard.id, { type: 'standard', ...standard, min, max }],
//         ...(mediaMail != null ? [[mediaMail.id, { type: 'media-mail', ...mediaMail, min, max }]] : [])
//     ] as [number, { type: ShippingSpeeds, carrier: Shippers, id: number, price: number, min: number, max: number; }][];
// }).reduce((pv, cv) => [...pv, ...cv], []))
// console.log(shippingRatesMap);
function getShipping(weight, isMediaMail = false) {
    const type = isMediaMail ? 'media-mail' : 'standard';
    const result = shippingRatesV1[type].find((x) => x.min < weight && x.max >= weight);
    return result == null ? undefined : result;
}
exports.getShipping = getShipping;
const shippingRatesMap = Object.fromEntries(shipping_rates_json_1.default.map((rate) => [rate.id, rate]));
function getShippingById(key) {
    if (key == null)
        return undefined;
    return shippingRatesMap[key];
}
exports.getShippingById = getShippingById;
console.log(getShipping(1));
console.log(getShipping(1.3));
console.log(getShipping(1.3, true));
console.log(getShippingById(1721));
console.log(getShippingById(1668));
console.log('SHIPPING RATES V1', shippingRatesV1);
exports.CURRENT_SHIPPING_VERSION = 1;
// console.log(JSON.stringify(shippingRatesV1, null, '\t'));
//# sourceMappingURL=shippingRates.js.map