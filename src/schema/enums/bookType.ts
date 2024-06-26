// const __ = {
//     hardback: {
//         aliases: ['hard back', 'hard-back']
//     },
//     paperback: {
//         aliases: ['paper back', 'paper-back']
//     },
//     boardbook: {
//         aliases: ['board-book', 'board book']
//     },
//     textbook: {
//         aliases: ['text-book', 'text book']
//     }
// };

// console.log(Object.fromEntries(Object.keys(__).map(k => [k, k])));
// console.log(Object.fromEntries(Object.entries(__).map(([k, { aliases: v }]) => v.map(v1 => [v1, k])).reduce((pv, cv) => [...pv, ...cv], [])));

export const _bookTypes = {
    hardback: 'hardback',
    paperback: 'paperback',
    boardbook: 'boardbook',
    textbook: 'textbook'
};

export const bookTypesAliases = {
    'hard back': 'hardback',
    'hard-back': 'hardback',
    'paper back': 'paperback',
    'paper-back': 'paperback',
    'board-book': 'boardbook',
    'board book': 'boardbook',
    'text-book': 'textbook',
    'text book': 'textbook'
};

const bookTypesMap = Object.fromEntries(Object.entries(_bookTypes).map(([k, v]) => [k, { key: k, text: v }]));

export const bookTypes = {
    ...bookTypesMap,
    ...Object.fromEntries(Object.entries(bookTypesAliases).map(([k, v]) => [k, bookTypesMap[v]]))
};
