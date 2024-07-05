

export function joinWith(joiner: string) {
    return (left?: string) => (right?: string) => (left != null && right != null ? [left, joiner, right].join('') : undefined);
}
