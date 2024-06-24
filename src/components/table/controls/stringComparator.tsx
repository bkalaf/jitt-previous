
export function stringComparator(l?: string, r?: string): Compared {
    return (r != null && l != null ? l.localeCompare(r) : 0) as Compared;
}
