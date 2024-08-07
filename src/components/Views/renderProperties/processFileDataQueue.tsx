/* eslint-disable no-console */
import * as fs from 'graceful-fs';
// import { popQueueFile } from './popQueueFile';

// export function* processFileDataQueue<T, U>(fn: string, func: (item: T) => Promise<U>) {
//     const fileData = fs.existsSync(fn) ? (JSON.parse(fs.readFileSync(fn).toString()) as T[]) : ([] as T[]);
//     if (fileData.length > 0) {
//         // const entry = popQueueFile<T>(fn);
//         const entry = JSON.parse(fs.readFileSync(fn).toString())[0];
//         if (entry == null) return;
//         yield func(entry);
//     } else {
//         return;
//     }
// }

const PRODUCT_SEARCH_QUEUE = process.env.PRODUCT_SEARCH_QUEUE ?? '';

export function* processAPIResults() {
    const queue = (JSON.parse(fs.existsSync(PRODUCT_SEARCH_QUEUE) ? fs.readFileSync(PRODUCT_SEARCH_QUEUE).toString() : '[]') as any[]).reverse();
    while (queue.length > 0) {
        console.log(`queue.length`, queue.length);
        const head = queue.pop();
        console.log(`head`, head);
        fs.writeFileSync(PRODUCT_SEARCH_QUEUE, JSON.stringify(queue.reverse(), null, '\t'));
        yield head as ProductSearchEntry
    }
    return;
}

