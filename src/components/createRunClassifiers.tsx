import Realm, { BSON } from 'realm';
import Classifiers from '../assets/data/classifier.json';
import { IClassification, IMercariTaxonomy } from '../types';
import { runTransaction } from '../util/runTransaction';
import { unzip2 } from '../scripts/unzip2';
import { deepEqual } from '../common/deepEqual';

type A = {
    attributes?: Record<string, string>;
    traits: Record<string, string>;
    conditions: string[];
    itemType: string;
    fullname?: string;
    path: string[];
};

const createImported = (realm: Realm) => {
    const C: A[] = Classifiers;
    return C.map((x) => {
        const next = { ...x };
        delete next.fullname;
        const result = realm.objects<IMercariTaxonomy>('mercariTaxonomy').filtered('fullname == $0', x.fullname);
        const parentResult = realm.objects<IClassification>('classification').filtered('path == $0', result.length > 0 ? x.path : x.path.slice(0, x.path.length - 1));
        const parent = parentResult.length > 0 ? parentResult[0] : undefined;
        if (x.fullname && result.length === 0) {
            console.error(`could not find: ${x.fullname}`);
        }
        return {
            _id: new BSON.ObjectId(),
            attributes: x.attributes ?? x.traits ?? {},
            flags: x.conditions ?? [],
            itemType: x.itemType,
            path: x.path,
            taxonomy: result.length === 0 ? undefined : result[0],
            additionalPaths: [],
            hashTags: [],
            parent
        } as InitValue<IClassification>;
    });
};

export function createRunClassifiers(realm: Realm) {
    return () => {
        const imported = createImported(realm);
        console.log(imported);
        const needToDelete = realm
            .objects<IClassification>('classification')
            .filtered('path != nil && path != {}')
            .filter((classification) => {
                const { flags, attributes, path } = classification;
                const result = imported.filter((importedItem) => {
                    const { attributes: itemAttributes, flags: itemFlags, path: itemPath } = importedItem;
                    return deepEqual(Array.from(path), itemPath) && deepEqual(Array.from(flags), itemFlags) && deepEqual(Object.fromEntries(attributes.entries()), itemAttributes);
                });
                return result.length === 0;
            });
        const needToAdd = imported.filter(
            (item) => {
                const [texts, argArray] = unzip2(Object.entries(item.attributes).map(([k, v], ix) => [`attributes['${k}'] == $${ix}`, v] as [string, string]));
                const text = texts.length > 0 ? texts.join(' && ') : '';
                const baseText = 'path.@count == $0 && path == $1 && itemType == $2';
                const baseArgs = [item.path.length, item.path, item.itemType];
                const flagText = item.flags.length === 0 ? 'flags == $1 || flags.@count == $0' : 'flags.@count == $0 && ALL flags IN $1';
                const flagArgs = [item.flags.length, item.flags.length === 0 ? null : item.flags];
                const attributeText = Object.keys(item.attributes).length === 0 ? 'attributes == $1 || attributes.@size == $0' : 'attributes.@size == $0 && ALL attributes.@keys IN $1';
                const attributeArgs = [Object.keys(item.attributes).length, Object.keys(item.attributes).length === 0 ? null : Object.keys(item.attributes)];

                const preResult = realm
                    .objects<IClassification>('classification')
                    .filtered(baseText, ...baseArgs)
                    .filtered(flagText, ...flagArgs)
                    .filtered(attributeText, ...attributeArgs);
                const result = texts.length === 0 ? preResult : preResult.filtered(text, ...argArray);
                // const result = queryBase.filter(
                //     (dbObj) =>
                //         dbListCompare(item.path, dbObj.path) &&
                //         dbListIncludes(item.flags, dbObj.flags) &&
                //         dbDictionaryCompare(item.attributes, dbObj.attributes)
                // );
                // if (result.length >= 2) {
                //     console.error(
                //         `result.high length`,
                //         JSON.stringify(item, null, '\t'),
                //         JSON.stringify(
                //             result.map((x) => x.toJSON()),
                //             null,
                //             '\t'
                //         )
                //     );
                // }
                if (result.length !== 1) {
                    console.log(`result.length`, result.length);
                    console.log(`filteredText`, baseText, flagText, attributeText, text);
                    console.log(`filteredArgs`, JSON.stringify(baseArgs), JSON.stringify(flagArgs), JSON.stringify(attributeArgs), JSON.stringify(argArray));
                }
                return result.length === 0;
            }
            // classifier.filter(
            //     (x) =>
            //         dbListCompare(x.path, item.path) &&
            //         (item.flags.length === 0 || item.flags.every((condition) => x.flags.includes(condition))) &&
            //         (Object.entries(item.attributes).length === 0 || Object.entries(item.attributes).every(([k, v]) => x.attributes[k] === v))
            // ).length === 0
        );
        const needToUpdate = realm.objects<IClassification>('classification').filtered('path != nil && path != {}');
        // const needToUpdate = (imported
        //     .map((item) => {
        //         const [texts, argArray] = unzip2(Object.entries(item.attributes).map(([k, v], ix) => [`attributes['${k}'] == $${ix}`, v] as [string, string]));
        //         const text = texts.length > 0 ? texts.join(' && ') : '';
        //         const baseText = 'path.@count == $0 && path == $1';
        //         const baseArgs = [item.path.length, item.path];
        //         const flagText = item.flags.length === 0 ? 'flags == $1 || flags.@count == $0' : 'flags.@count == $0 && ALL flags IN $1';
        //         const flagArgs = [item.flags.length, item.flags.length === 0 ? null : item.flags];
        //         const attributeText = Object.keys(item.attributes).length === 0 ? 'attributes == $1 || attributes.@size == $0' : 'attributes.@size == $0 && ALL attributes.@keys IN $1';
        //         const attributeArgs = [Object.keys(item.attributes).length, Object.keys(item.attributes).length === 0 ? null : Object.keys(item.attributes)];

        //         const preResult = realm
        //             .objects<IClassification>('classification')
        //             .filtered(baseText, ...baseArgs)
        //             .filtered(flagText, ...flagArgs)
        //             .filtered(attributeText, ...attributeArgs);
        //         const result = texts.length === 0 ? preResult : preResult.filtered(text, ...argArray);
        //         // const result = queryBase.filter(
        //         //     (dbObj) =>
        //         //         dbListCompare(item.path, dbObj.path) &&
        //         //         dbListIncludes(item.flags, dbObj.flags) &&
        //         //         dbDictionaryCompare(item.attributes, dbObj.attributes)
        //         // );
        //         // if (result.length >= 2) {
        //         //     console.error(
        //         //         `result.high length`,
        //         //         JSON.stringify(item, null, '\t'),
        //         //         JSON.stringify(
        //         //             result.map((x) => x.toJSON()),
        //         //             null,
        //         //             '\t'
        //         //         )
        //         //     );
        //         // }
        //         if (result.length !== 1) {
        //             console.log(`result.length`, result.length);
        //             console.log(`filteredText`, baseText, flagText, attributeText, text);
        //             console.log(`filteredArgs`, JSON.stringify(baseArgs), JSON.stringify(flagArgs), JSON.stringify(attributeArgs), JSON.stringify(argArray));
        //         }
        //         return result.length !== 0 ? [result[0], item as any as IClassification] as [RealmObj<IClassification>, IClassification] : undefined;
        //     })
        //     .filter(x => x != null) as [RealmObj<IClassification>, IClassification][])
        //     .filter(([dbObj, item]) => {
        //         return (dbObj?.parent?._id?.toHexString() ?? '') !== ((item as any as IClassification)?.parent?._id?.toHexString() ?? '');
        //         // const parentResult = realm.objects<IClassification>('classification').filtered('path == $0', x.path.slice(0, x.path.length - 1));
        //         // const parent = parentResult.length > 0 ? parentResult[0] : undefined;
        //         // return ((x as any as IClassification)?.parent?._id?.toHexString() ?? '') !== (parent?._id.toHexString() ?? '');
        //     });
        // // const needToUpdate = imported.filter(x => needToAdd.find(item => item._id.toHexString() === x._id.toHexString()) == null)
        alert(`Need to delete: ${needToDelete.length} records.`);
        if (needToDelete.length > 0) {
            console.error(JSON.stringify(needToDelete, null, '\t'));
            alert(`Need to delete: ${needToDelete.length} records.`);
            const func = () => {
                realm.delete(needToDelete);
                // for (const element of needToDelete) {
                //     realm.create<IClassification>('classification', element, Realm.UpdateMode.All);
                // }
            };
            runTransaction(realm, func);
        }
        alert(`Need to add: ${needToAdd.length} records.`);
        if (needToAdd.length > 0) {
            console.error(JSON.stringify(needToAdd, null, '\t'));
            alert(`Need to add: ${needToAdd.length} records.`);
            const func = () => {
                for (const element of needToAdd as any as IClassification[]) {
                    realm.create<IClassification>('classification', element, Realm.UpdateMode.All);
                }
            };
            runTransaction(realm, func);
        }
        alert(`Need to update: ${needToUpdate.length} records.`);
        if (needToUpdate.length > 0) {
            console.error(JSON.stringify(needToUpdate, null, '\t'));
            alert(`Need to update: ${needToUpdate.length} records.`);
            const func = () => {
                for (const item of needToUpdate) {
                    const parentPath = item.taxonomy == null ? item.path.slice(0, item.path.length - 1) : Array.from(item.path);
                    const parentResult = realm
                        .objects<IClassification>('classification')
                        .filtered('taxonomy == nil')
                        .filtered('flags == nil || flags.@size == 0')
                        .filtered('attributes == nil || attributes.@size == 0')
                        .filtered('path.@size == $0', parentPath.length)
                        .filter((x) => x.path.length === 0 || x.path.every((xp, ix) => xp === item.path[ix]));
                    if (parentResult.length !== 1) {
                        console.error('failed', JSON.stringify(parentPath), parentResult.length);
                    }
                    if (parentResult.length > 0) {
                        item.parent = parentResult[0];
                    }
                }
            };
            runTransaction(realm, func);
        }
    };
}
