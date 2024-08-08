// import * as fs from 'graceful-fs';

// export function popQueueFile<T>(fn: string, defaultValue = [] as T[]) {
//     const current: any[] = fs.existsSync(fn) ? JSON.parse(fs.readFileSync(fn).toString()) : defaultValue;
//     const [head, ...tail] = current.length === 0 ? [undefined] : current;
//     fs.writeFileSync(fn, JSON.stringify(tail, null, '\t'));
//     return head as T | undefined;
// }
