import { MRT_RowData } from 'material-react-table';

export function handleDependency<T extends MRT_RowData, TKey extends keyof T>(dependency: IDeps<T, TKey>): (value?: any) => boolean {
    if ('isNull' in dependency) {
        return (value?: any) => value == null;
    } else if ('isEmpty' in dependency) {
        return (value?: any) => (Array.isArray(value) ? value.length === 0 : false);
    } else if ('equalTo' in dependency) {
        const { equalTo } = dependency;
        return (value?: any) => value === equalTo;
    } else if ('in' in dependency) {
        const { in: $in } = dependency;
        return (value?: any) => $in.includes(value);
    } else if (dependency.length === 2) {
        const [kind, $dependency] = dependency;
        switch (kind) {
            case 'not':
                return (value?: any) => !handleDependency($dependency)(value);
            case null:
                return (value?: any) => handleDependency($dependency)(value);
        }
    }
    const [kind, left, right] = dependency;
    switch (kind) {
        case 'and':
            return (value?: any) => (handleDependency(left)(value) ? handleDependency(right)(value) : false);
        case 'or':
            return (value?: any) => (handleDependency(left)(value) ? true : handleDependency(right)(value));
    }
}
