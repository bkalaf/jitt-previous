import { curry } from '../curry';
import { baseObjectMap } from './baseObjectMap';

export const objectMap = <T, U>(func: (x: T) => U) => curry(baseObjectMap<T, U>)(func);
