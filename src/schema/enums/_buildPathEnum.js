// import { Product } from '../entity/product';
// import * as fs from 'graceful-fs';
// const paths = Object.entries(Product.schema.properties).map(([key, value]) => ({
//     key: key,
//     text: key,
//     type: typeof value === 'string' ? value : value.objectType ?? value.type
// }));
// // console.log(JSON.stringify(paths, null, '\t'));
// const text = `export const attributePaths = ${JSON.stringify(paths, null, '\t')}`;
// console.log(text);
// fs.writeFileSync('./src/schema/enums/attributePaths.ts', text);
//# sourceMappingURL=_buildPathEnum.js.map