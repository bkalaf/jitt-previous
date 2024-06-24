import 'dotenv/config';
import { IMercariCategory, IMercariTaxonomy } from '../types';
import { openRealm } from './openRealm';

export function sleep(delay = 0) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log('SLEEP DONE');
            resolve(undefined);
        }, delay)
    );
}

const collector = new Set<{ category: Omit<IMercariCategory, 'hashTags'>; subCategory: Omit<IMercariCategory, 'hashTags'> }>();
export function run() {
    return openRealm().then((db) => {
        const objs = db.objects<IMercariTaxonomy>('mercariTaxonomy');
        console.log(`objs`, objs.length);

        const proms = Promise.all(
            objs.map((o) => {
                if (o.category == null || o.subCategory == null) return Promise.resolve();
                const tax = { category: { name: o.category.name, selector: o.category.selector }, subCategory: { name: o.subCategory.name, selector: o.subCategory.selector } };
                console.log(tax);
                if (!collector.has(tax)) {
                    collector.add(tax);
                }
                return Promise.resolve();
            })
        );
        return proms;
    });
}

run().then(() => {
    const eles = Array.from(collector.values());
    const map = new Map<string, [string, Omit<IMercariCategory, 'hashTags'>[]]>();
    for (const {
        category: { name, selector },
        subCategory
    } of eles) {
        if (map.has(name)) {
            const current = map.get(name)!;
            const value = current[1].find((x) => x.name === subCategory.name && x.selector === subCategory.selector) != null ? current[1] : [...current[1], subCategory];
            map.set(name, [current[0], value]);
        } else {
            map.set(name, [selector, [subCategory]]);
        }
    }
    console.log(
        JSON.stringify(
            Object.fromEntries(
                Array.from(map.entries()).map(([key, value]) => [
                    key,
                    { selector: value[0], children: Object.fromEntries(value[1].map(({ name: n, selector: s }) => [n, { selector: s, brands: [] }] as [string, { selector: string; brands: any[] }])) }
                ])
            ),
            null,
            '\t'
        )
    );
    console.log('DONE!');
});
