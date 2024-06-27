export function flip<T, U, V>(func: (left: T, right: U) => V) {
    return (right: U, left: T) => func(left, right);
}
