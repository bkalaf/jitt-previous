import { isList } from './isList';

export function pushDBList<T>(original: any, propertyName: string, list: DBList<T> | T[] = [], item: T) {
    if (isList(list)) {
        list.push(item);
        return list;
    }
    const resultList = list.push(item);
    original[propertyName] = resultList;
    return list;
}
