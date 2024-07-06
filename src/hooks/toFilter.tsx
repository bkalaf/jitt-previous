import { MRT_ColumnFiltersState } from 'material-react-table';
import { is } from '../common/is';
import { BSON } from 'realm';
import dayjs from 'dayjs';
import { asString } from './asString';


export function toFilter(queryParams: URLSearchParams, columnFilters?: MRT_ColumnFiltersState): [URLSearchParams, string | undefined, unknown[]] {
    const params = new URLSearchParams();
    if (columnFilters == null || columnFilters.length === 0) return [queryParams, undefined, []];
    const args: Map<string, Set<unknown>> = new Map();
    for (const { id, value } of columnFilters) {
        if (args.has(id)) {
            const current = args.get(id)!;
            const arr = Array.isArray(value) ? value : [value];
            arr.forEach((item) => {
                if (!current.has(item)) {
                    current.add(item);
                }
            });
            args.set(id, current);
        } else {
            args.set(id, new Set<unknown>([value]));
        }
    }
    const filtered: string[] = [];
    const filteredArgs: any[] = [];
    let count: number = 0;
    for (const [name, values] of args.entries()) {
        if (values.size > 1) {
            const newArray = Array.from(values.values());
            filtered.push(`${name} IN $${count}`);
            filteredArgs.push(newArray);
            count++;
            newArray.forEach((item) => params.append(name, asString(item)));
            break;
        } else {
            const v = Array.from(values.values())[0];
            const type = typeof v;
            switch (type) {
                case 'undefined':
                    filtered.push(`${name} == nil`);
                    filteredArgs.push(null);
                    params.append(name, 'nil');
                    break;
                case 'number':
                case 'bigint':
                    filtered.push(`${name} == $${count}`);
                    filteredArgs.push(v as number | bigint);
                    count++;
                    params.append(name, (v as number | bigint).toString());
                    break;
                case 'boolean':
                    filtered.push(`${name} == $${count}`);
                    filteredArgs.push(v as boolean);
                    count++;
                    params.append(name, (v as boolean) ? 'true' : 'false');
                    break;
                case 'symbol':
                    filtered.push(`${name} == $${count}`);
                    filteredArgs.push(v as symbol);
                    count++;
                    params.append(name, (v as symbol).toString());
                    break;
                case 'string':
                    filtered.push(`${name} CONTAINS[c] $${count}`);
                    filteredArgs.push(v as string);
                    count++;
                    params.append(name, v as string);
                    break;
                case 'object':
                    if (is.objectId(v)) {
                        filtered.push(`${name} == $${count}`);
                        filteredArgs.push(v);
                        count++;
                        params.append(name, (v as BSON.ObjectId).toHexString());
                        break;
                    }
                    if (is.uuid(v)) {
                        filtered.push(`${name} == $${count}`);
                        filteredArgs.push(v);
                        count++;
                        params.append(name, (v as BSON.UUID).toHexString());
                        break;
                    }
                    if (is.date(v)) {
                        filtered.push(`${name} > $${count}`);
                        filteredArgs.push(v);
                        count++;
                        params.append(name, dayjs(v as Date).format('YYYY-MM-DD'));
                        break;
                    }
                    if (is.array(v)) {
                        filtered.push(`${name} IN $${count}`);
                        filteredArgs.push(v as any[]);
                        count++;
                        (v as any[]).forEach((item) => {
                            params.append(name, asString(item));
                        });
                        break;
                    }
                    if (typeof v === 'object' && v != null && '_id' in v) {
                        filtered.push(`${name}._id == $${count}`);
                        filteredArgs.push(v._id);
                        count++;
                        params.append([name, '_id'].join('.'), (v._id as BSON.ObjectId).toHexString());
                        break;
                    }
                    console.error(`UNKONWN TYPE: ${type}`);
                    throw new Error(`UNKONWN TYPE: ${type}`);
                case 'function':
                    throw new Error('UNKNOWN TYPE: FUNCTION');
            }
        }
    }
    queryParams.set('filter', params.toString());
    return [queryParams, filtered.join(' && '), filteredArgs];
}
