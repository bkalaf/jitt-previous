import { concatText } from './concatText';
import { curry } from '../curry';
import { flip } from '../flip';

export const appendText = curry(flip(concatText));
