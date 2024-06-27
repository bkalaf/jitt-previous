export function simplifyDown(factor: number, smallerUOM: string, pluralize = false) {
    return (num: number, uom: string) => {
        let integer = Math.floor(num);
        const decimal = num - integer;
        let smaller = Math.ceil(decimal * factor);
        if (smaller === factor) {
            smaller = 0;
            integer++;
        }
        return {
            uom1:
                pluralize ?
                    integer > 1 ?
                        uom.concat('s')
                    :   uom
                :   uom,
            uom2:
                pluralize ?
                    smaller > 1 ?
                        smallerUOM.concat('s')
                    :   smallerUOM
                :   smallerUOM,
            value1: integer,
            value2: smaller
        };
    };
}
