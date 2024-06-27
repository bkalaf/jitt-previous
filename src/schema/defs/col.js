"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.col = void 0;
const colString_1 = require("./colString");
const colText_1 = require("./colText");
const colDate_1 = require("./colDate");
const colBool_1 = require("./colBool");
const colLookup_1 = require("./colLookup");
const colEnum_1 = require("./colEnum");
const colRadio_1 = require("./colRadio");
const colDollar_1 = require("./colDollar");
const colPercent_1 = require("./colPercent");
const colMeasure_1 = require("./colMeasure");
const colIntMeasure_1 = require("./colIntMeasure");
const colInt_1 = require("./colInt");
const pk_1 = require("./pk");
const colDBList_1_1 = require("./colDBList.1");
const colFlags_1 = require("./colFlags");
const colClothingCare_1 = require("./colClothingCare");
const dbDictCol_1 = require("./dbDictCol");
const colDBListObject_1 = require("./colDBListObject");
const colDBFreeSolo_1 = require("./colDBFreeSolo");
const colDbMultiEnum_1 = require("./colDbMultiEnum");
const colFreeSolo_1 = require("./colFreeSolo");
const colDouble_1 = require("./colDouble");
// export const col = <T extends MRT_RowData>(helper: MRT_ColumnHelper<T>) => ({
//     bool: colBool(helper),
//     clothingCare: colClothingCare(helper),
//     date: colDate(helper),
//     dictionary: dbDictCol(helper),
//     dollar: colDollar(helper),
//     double: colDouble(helper),
//     enum: colEnum(helper),
//     flags: colFlags(helper),
//     freeSolo: colFreeSolo(helper),
//     int: colInt(helper),
//     intMeasure: colIntMeasure(helper),
//     listOfEmbed: colDBList(helper), //listEmbedCol(helper),
//     listofEnum: colDbMultiEnum(helper),
//     listofFreeSolo: colDBFreeSolo(helper),
//     listOfObject: colDBListObject(helper),
//     listOfPrimitive: colDBList(helper), // listPrimitiveCol(helper),
//     lookup: colLookup(helper),
//     measure: colMeasure(helper),
//     percent: colPercent(helper),
//     pk: pk(helper),
//     radio: colRadio(helper),
//     string: colString(helper),
//     text: colText(helper),
// });
const col = (helper) => ({
    bool: (...dependencies) => (0, colBool_1.colBool)(helper)(...dependencies),
    clothingCare: (...dependencies) => (0, colClothingCare_1.colClothingCare)(helper)(...dependencies),
    date: (...dependencies) => (0, colDate_1.colDate)(helper)(...dependencies),
    dictionary: (...dependencies) => (0, dbDictCol_1.dbDictCol)(helper)(...dependencies),
    dollar: (...dependencies) => (0, colDollar_1.colDollar)(helper)(...dependencies),
    double: (...dependencies) => (0, colDouble_1.colDouble)(helper)(...dependencies),
    enum: (...dependencies) => (0, colEnum_1.colEnum)(helper)(...dependencies),
    flags: (...dependencies) => (0, colFlags_1.colFlags)(helper)(...dependencies),
    freeSolo: (...dependencies) => (0, colFreeSolo_1.colFreeSolo)(helper)(...dependencies),
    int: (...dependencies) => (0, colInt_1.colInt)(helper)(...dependencies),
    intMeasure: (...dependencies) => (0, colIntMeasure_1.colIntMeasure)(helper)(...dependencies),
    listOfEmbed: (...dependencies) => (0, colDBList_1_1.colDBList)(helper)(...dependencies),
    listOfEnum: (...dependencies) => (0, colDbMultiEnum_1.colDbMultiEnum)(helper)(...dependencies),
    listOfFreeSolo: (...dependencies) => (0, colDBFreeSolo_1.colDBFreeSolo)(helper)(...dependencies),
    listOfObject: (...dependencies) => (0, colDBListObject_1.colDBListObject)(helper)(...dependencies),
    listOfPrimitive: (...dependencies) => (0, colDBList_1_1.colDBList)(helper)(...dependencies),
    lookup: (...dependencies) => (0, colLookup_1.colLookup)(helper)(...dependencies),
    measure: (...dependencies) => (0, colMeasure_1.colMeasure)(helper)(...dependencies),
    percent: (...dependencies) => (0, colPercent_1.colPercent)(helper)(...dependencies),
    PK: (0, pk_1.pk)(helper),
    radio: (...dependencies) => (0, colRadio_1.colRadio)(helper)(...dependencies),
    string: (...dependencies) => (0, colString_1.colString)(helper)(...dependencies),
    text: (...dependencies) => (0, colText_1.colText)(helper)(...dependencies)
});
exports.col = col;
//# sourceMappingURL=col.js.map