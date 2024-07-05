export function sortToKey<T, U>(sorter: (x: T) => string, func?: (x: T) => U) {
    function inner(todo: T[], accum: Record<string, U[]> = {}) {
        if (todo.length === 0) return accum;
        const [head, ...tail] = todo;
        const key = sorter(head);
        if (key in accum) {
            const current = accum[key];
            const next = { ...accum, [key]: [...current, func ? func(head) : (head as any as U)] };
            return inner(tail, next);
        }
        const next = { ...accum, [key]: [func ? func(head) : (head as any as U)] };
        return inner(tail, next);
    }
    return inner;
}
