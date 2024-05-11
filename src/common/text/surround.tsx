import { stringIdentity } from './stringIdentity';

export const surround = (left: string, right: string) => (value?: string) => stringIdentity(value).map((x) => [left, x, right].join(''));
