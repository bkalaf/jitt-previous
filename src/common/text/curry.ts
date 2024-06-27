export function curry<TFunc extends (...args: any[]) => any>(func: TFunc) {
    return (x: Parameters<TFunc>[0]): ((...args: Tail<Parameters<TFunc>>) => ReturnType<TFunc>) => {
        const next = func.bind(null, x);
        return next.length === 0 ? next() : curry(next);
    };
}
