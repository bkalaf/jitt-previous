import * as cp from 'child_process';
import * as fs from 'graceful-fs';
import { promisify } from 'util';

const result = cp.execSync('madge ./src --extensions ts,tsx --orphans');
const orphans = result.toString().split('\n').slice(2).filter(x => x != null && x.trim() !== '');
const orphans2 = orphans.filter(x => !x.includes('_'));

console.log(orphans2);