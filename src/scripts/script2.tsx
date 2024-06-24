import 'dotenv/config';
import * as fs from 'graceful-fs';
import { openRealm } from './openRealm';
import { IMercariTaxonomy } from '../types';
import Realm from 'realm';

const FILENAME = [__dirname, `cif-brands-2.json`].join('\\');
const OUTPUT = [__dirname, 'normalized-taxonomy.json'].join('\\');

const data = JSON.parse(fs.readFileSync(FILENAME).toString()) as Record<string, { selector: string; children: Record<string, { selector: string; brands: string[] }> }>;

let db: Realm | undefined;
async function run() {
    const d = Object.entries(data);
    db = await openRealm();

    const collector = [] as [string, string, string, string[]][];

    for (const [categoryName, { selector: categorySelector, children }] of d) {
        const childObj = Object.entries(children);
        for (const [subCategoryName, { selector: subCategorySelector, brands }] of childObj) {
            const taxonomies = db
                .objects<IMercariTaxonomy>('mercariTaxonomy')
                .filtered('category.selector == $0 AND subCategory.selector == $1 AND category.name == $2 AND subCategory.name == $3', categorySelector, subCategorySelector, categoryName, subCategoryName);
            console.log(`taxonomies`, taxonomies);
            const next = taxonomies.map((tax) => [tax.category?.selector ?? '', tax.subCategory?.selector ?? '', tax.subSubCategory?.selector, brands] as [string, string, string, string[]]);
            if (brands.length > 0) collector.push(...next);
            fs.writeFileSync(OUTPUT, JSON.stringify(collector, null, '\t'));
        }
    }
    console.log(`collector.length: ${collector.length}`);
}

run()
    .then(() => console.log('DONE!'))
    .finally(() => db?.close());
