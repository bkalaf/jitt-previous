import fs from 'graceful-fs';
import { sizes } from '../schema/enums/sizes';
const quote = (s: string) => ['"', s, '"'].join('');

const txt = Object.values(sizes)
    .map((x) => [x.index.toFixed(0), x.key, x.text, x.sizingType].map(quote).join(','))
    .join('\n');
fs.writeFileSync(`C:/Users/bobby/OneDrive/Desktop/Code/jitt/src/assets/data/sizes.csv`, '"id","key","text","type"\n'.concat(txt));