// import $me from '../enums';

// export function normalizeOptions(options?: Record<string, string | { text: string; key: string }>, enumKey?: keyof typeof $me) {
//     if (options) return options;
//     if (!enumKey) throw new Error(`no options or enumKey`);
//     // const key = enumKey as keyof typeof $me;
//     const opts = $me[enumKey as keyof typeof $me];
//     return opts.sort((l, r) => l?.text?.localeCompare(r?.text ?? '') ?? 0) as { text: string; key: string }[];
// }
