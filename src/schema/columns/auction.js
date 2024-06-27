"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auctionColumns = void 0;
const material_react_table_1 = require("material-react-table");
const col_1 = require("../defs/col");
const auctionSite_1 = require("../enums/auctionSite");
const squareFootage_1 = require("../columns/squareFootage");
const groupCol_1 = require("../defs/groupCol");
const _depend_1 = require("./$depend");
const helper = (0, material_react_table_1.createMRTColumnHelper)();
const $helper = (0, col_1.col)(helper);
exports.auctionColumns = [
    $helper.PK(),
    $helper.lookup()('facility', 'Facility', { objectType: 'facility' }),
    $helper.enum()('auctionSite', 'Auction Site', { options: auctionSite_1.auctionSites }),
    $helper.string(_depend_1.$depend.notNilOrEmpty('auctionSite', true))('auctionId', 'Auction ID', undefined, { required: false }),
    $helper.string()('invoiceId', 'Invoice ID', undefined, { required: false }),
    $helper.date()('closeDate', 'Close Date', {}, true),
    $helper.dollar()('finalBid', 'Final Bid', { min: 0, required: true }),
    $helper.percent()('premiumPercent', 'Premium %', { min: 0 }),
    $helper.percent(_depend_1.$depend.isFalse('taxExempt', true))('salesTaxPercent', 'Sales Tax %', { min: 0 }),
    $helper.bool(_depend_1.$depend.isZeroOrNull('salesTaxPercent', true))('taxExempt', 'Tax Exempt'),
    $helper.dollar(_depend_1.$depend.notZeroOrNull('finalBid', true))('totalPrice', 'Total Price', { min: 0, readonly: true }),
    $helper.string()('unit', 'Unit #', undefined, { maxLength: 25 }),
    (0, groupCol_1.groupCol)(helper, 'Sq Footage', squareFootage_1.squareFootageColumns, 'size', 'bg-blue-700', 'text-white')
];
//# sourceMappingURL=auction.js.map