import { Opt } from '../../../types';

export function convertFromGrams(grams: Opt<number>) {
    if (grams == null) return undefined;
    const totalPounds = grams / 453.59;
    return convertToPoundsOunces(totalPounds)
}

export function convertToPoundsOunces(totalPounds: Opt<number>) {
    if (totalPounds == null) return undefined;
    let pounds = parseInt(totalPounds.toString().includes('.') ? totalPounds.toString().split('.')[0] : totalPounds.toFixed(0), 10);
    let ounces = Math.ceil((totalPounds - pounds) * 16);
    if (ounces === 16) {
        pounds = pounds + 1;
        ounces = 0;
    }
    return { pounds, ounces };
}