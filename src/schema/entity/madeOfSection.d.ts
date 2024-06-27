import Realm from 'realm';
import { IMadeOfSection } from '../../types';
import { EntityBase } from './EntityBase';
export declare class MadeOfSection extends EntityBase<IMadeOfSection> implements IMadeOfSection {
    name?: string | undefined;
    section: Partial<Record<'acrylic' | 'cashmere' | 'cotton' | 'denim' | 'lace' | 'leather' | 'linen' | 'modal' | 'nylon' | 'organicCotton' | 'polyester' | 'rayon' | 'satin' | 'silk' | 'spandex' | 'suede' | 'velvet' | 'viscose' | 'wool', number>>;
    static schema: Realm.ObjectSchema;
    static liComponent: (value?: IMadeOfSection) => () => string;
    static update(item: IMadeOfSection): IMadeOfSection;
    static init(): InitValue<IMadeOfSection>;
}
