
export function $curry<T, U, V>(func: (x: T, y: U) => V) {
    return (x: T) => (y: U) => func(x, y);
}
