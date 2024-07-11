import 'dotenv/config';
import * as fs from 'graceful-fs';
import { openRealm } from './openRealm';
import { IClassifier, IMercariTaxonomy } from '../types';
import Realm from 'realm';

const FILENAME = [__dirname, `cif-brands-2.json`].join('\\');
const OUTPUT = [__dirname, 'normalized-taxonomy.json'].join('\\');

const data = JSON.parse(fs.readFileSync(FILENAME).toString()) as Record<string, { selector: string; children: Record<string, { selector: string; brands: string[] }> }>;

let db: Realm | undefined;

function mapClassifier(obj: IClassifier): [string, any] {
    return [obj.shortName, Object.fromEntries(obj.subRows.map(mapClassifier)) ?? {}];
}
async function run(){
    db = await openRealm();
    const root = db.objects<IClassifier>('classifier').filtered('parent == $0', null);
    const result = Object.fromEntries(root.map(mapClassifier));
    console.log(JSON.stringify(result, null, '\t'))
}

run()
// async function run() {
//     const d = Object.entries(data);
//     db = await openRealm();

//     const collector = [] as [string, string, string, string[]][];

//     for (const [categoryName, { selector: categorySelector, children }] of d) {
//         const childObj = Object.entries(children);
//         for (const [subCategoryName, { selector: subCategorySelector, brands }] of childObj) {
//             const taxonomies = db
//                 .objects<IMercariTaxonomy>('mercariTaxonomy')
//                 .filtered('category.selector == $0 AND subCategory.selector == $1 AND category.name == $2 AND subCategory.name == $3', categorySelector, subCategorySelector, categoryName, subCategoryName);
//             console.log(`taxonomies`, taxonomies);
//             const next = taxonomies.map((tax) => [tax.category?.selector ?? '', tax.subCategory?.selector ?? '', tax.subSubCategory?.selector, brands] as [string, string, string, string[]]);
//             if (brands.length > 0) collector.push(...next);
//             fs.writeFileSync(OUTPUT, JSON.stringify(collector, null, '\t'));
//         }
//     }
//     console.log(`collector.length: ${collector.length}`);
// }

// run()
//     .then(() => console.log('DONE!'))
//     .finally(() => db?.close());
