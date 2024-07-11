import { createMRTColumnHelper } from 'material-react-table';
import { IScrapeKVP } from '../../types';
import { col } from '../defs/col';

export const helper = createMRTColumnHelper<IScrapeKVP>();
export const h = col(helper);

export const scrapeKVPColumns = (...dependencies: IDependency<any, any>[]) => [
    h.string(...dependencies)('key', 'Key', undefined, {}),
    h.string(...dependencies)('value', 'Value', undefined, {})
]