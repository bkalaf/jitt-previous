import { surroundQuotesIgnore } from '../../common/text/surround';

const roles = {
    book: {
        individual: {
            author: true,
            illustrator: true
        },
        group: {
            publisher: true
        }
    },
    movie: {
        individual: {
            actor: 'creditedAs',
            director: true,
            producer: true
        },
        group: {
            studio: true
        }
    },
    tvSeries: {
        individual: {
            actor: 'creditedAs',
            director: true,
            producer: true
        },
        group: {
            studio: true
        }
    },
    album: {
        individual: {
            performer: true,
            songwriter: true
        },
        group: {
            studio: true
        }
    }
};
const gatherer = new Map<
    string,
    {
        key: string;
        text: string;
        types: string[];
        linkedField?: string;
        contributorType: string;
    }
>();
Object.entries(roles)
    .map(([type, v]) => {
        return Object.entries(v as Record<'individual' | 'group', Record<string, string | boolean>>)
            .map(([contributorType, v2]) => {
                return Object.entries(v2).map(
                    ([k, creditedAs]) =>
                        [
                            k,
                            {
                                key: k,
                                text: k,
                                contributorType,
                                types: [type],
                                linkedField: typeof creditedAs === 'string' ? creditedAs : undefined
                            }
                        ] as [
                            string,
                            {
                                key: string;
                                text: string;
                                types: string[];
                                linkedField?: string;
                                contributorType: string;
                            }
                        ]
                );
            })
            .reduce((pv, cv) => [...pv, ...cv], []);
    })
    .reduce((pv, cv) => [...pv, ...cv], [])
    .forEach(([key, obj]) =>
        gatherer.has(key) ?
            gatherer.set(key, {
                ...obj,
                types: [...obj.types, ...(gatherer.get(key)?.types ?? [])]
            })
        :   gatherer.set(key, obj)
    );


// console.log(JSON.stringify(result, null, '\t'))
console.log(JSON.stringify(Array.from(gatherer.values()), null, '\t'))
console.log(`export type ContributorRoles = ${Array.from(gatherer.keys()).map(surroundQuotesIgnore).join(' | ')}`);