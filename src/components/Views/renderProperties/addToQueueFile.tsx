import * as fs from 'graceful-fs';


export function addToQueueFile<T>(fn: string, items: T | T[], defaultValue = [] as any[]) {
    const current: any[] = fs.existsSync(fn) ? JSON.parse(fs.readFileSync(fn).toString()) : defaultValue;
    const normalized = Array.isArray(items) ? items : [items];
    const next = [...current, ...normalized];
    fs.writeFileSync(fn, JSON.stringify(next, null, '\t'));
}
