import { IRn } from '../types';
import { Rn } from '../schema/entity/rn';
import { compose } from './compose';

export const fromRn = compose((x?: IRn) => Rn.stringify(x, true)());


