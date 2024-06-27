export function simplifyUp(factor: number, largerUOM: string) {
    return (num: number, uom: string) => {
        const value = num / factor;
        let integer = Math.floor(value);
        const decimal = value - integer;
        let smaller = Math.ceil(decimal * factor);
        if (smaller === factor) {
            smaller = 0;
            integer++;
        }
        return {
            uom1: largerUOM,
            uom2: uom,
            value1: integer,
            value2: smaller
        };
    };
}
