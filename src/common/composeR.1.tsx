export function composeR<T, U, V>(f: (x: T) => U, g: (x: U) => V) {
    return (x: T) => g(f(x));
}
