// // eslint-disable-next-line @typescript-eslint/triple-slash-reference
// ///<reference path="./../../../global.d.ts" />
// import * as fs from 'graceful-fs';
// import { surroundQuotesIgnore } from '../../../common/text/surround';
// import builderData from './builder-properties.json';
// // const data = fs
// //     .readFileSync('./builder-data.csv')
// //     .toString()
// //     .split('\n')
// //     .map((x) => x.split(','));
// // console.log(`data`, data);
// // function text(str?: string) {
// //     if (str == null) return 'null';
// //     if (str.startsWith('"') && str.endsWith('"')) {
// //         return str.slice(1, str.length - 1);
// //     }
// //     return str;
// // }
// function doubleSlash(str?: string | null) {
//     return str?.replaceAll('\\', '\\\\');
// }
// function buildItem({ extractor, header, importance, key, narrativeFunc, titleFunc, titleIndex, section }: ArrayOf<typeof builderData>) {
//     return `{
//         extractor: ${doubleSlash(extractor)?.replace('(p)', '(p: ISku)') ?? 'null'},
//         section: ${surroundQuotesIgnore(section ?? undefined) ?? 'null'},
//         header: ${surroundQuotesIgnore(header ?? undefined) ?? 'null'},
//         key: ${surroundQuotesIgnore(key ?? undefined) ?? 'null'},
//         titleFunc: ${doubleSlash(titleFunc) ?? 'null'},
//         narrativeFunc: ${doubleSlash(narrativeFunc) ?? 'null'},
//         titleIndex: ${titleIndex ?? 'null'},
//         importance: ${importance ?? 'null'}
//     },`;
// }
// console.log(builderData.map(buildItem).join('\n'));
// const codeText = `import { getProperty } from '../../../common/object';
// import { surroundQuotesIgnore, surroundParensIgnore } from '../../../common/text/surround';
// import { sizes } from '../../../schema/enums/sizes';
// import { ISku, Opt } from '../../../types';
// import { ofLookup, ofList, ofFlag, ofDimension, ofWeight, char, ofBarcode, ofBattery, ofCableType, ofClothingCare, ofConnector, ofCopyright, ofCurrent, ofDate, ofDictionary, ofEnum, ofFirst, ofHandOrientation, ofIdentity, ofMadeOf, ofMeasure, ofMinMax, ofPiece, ofPrefix, ofRating, ofSuffix, ofTrack, ofIncludedItem, ofSku } from './titleParts';
// export const properties = [
// ${builderData.map(buildItem).join('\n')}
// ]`;
// fs.writeFileSync('./buildProperties.tsx', codeText);
//# sourceMappingURL=_builder.js.map