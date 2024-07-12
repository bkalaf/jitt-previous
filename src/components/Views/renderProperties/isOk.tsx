import { ok } from '../../../hooks/compareProduct';

export function isOk<T>(value?: string, func: (s: string) => T = (x: string) => x as T) {
    return ok(value) ? func(value) : undefined;
}
