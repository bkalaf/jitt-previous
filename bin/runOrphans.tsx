import * as cp from 'child_process';

const result = cp.execSync('madge ./src --extensions ts,tsx --orphans');
const orphans = result.toString().split('\n').slice(2).filter(x => x != null && x.trim() !== '');
const orphans2 = orphans.filter(x => !x.includes('_'));

// eslint-disable-next-line no-console
console.log(orphans2);