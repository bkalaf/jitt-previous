export function composeL<T, U, V>(g: (x: U) => V, f: (x: T) => U) {
    return (x: T) => g(f(x));
}
