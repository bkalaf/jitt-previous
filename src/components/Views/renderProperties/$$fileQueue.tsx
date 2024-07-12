/* eslint-disable no-console */
import { processAPIResults } from './processFileDataQueue';

export const $$fileQueue = processAPIResults();

console.log('** API RESULT **');
console.log($$fileQueue.next());
