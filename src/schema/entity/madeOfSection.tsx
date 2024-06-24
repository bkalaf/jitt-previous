import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IMadeOfSection } from '../../types';
import { EntityBase } from './EntityBase';

export class MadeOfSection extends EntityBase<IMadeOfSection> implements IMadeOfSection {
    name?: string | undefined;
    section: Partial<Record<'acrylic' | 'cashmere' | 'cotton' | 'denim' | 'lace' | 'leather' | 'linen' | 'modal' | 'nylon' | 'organicCotton' | 'polyester' | 'rayon' | 'satin' | 'silk' | 'spandex' | 'suede' | 'velvet' | 'viscose' | 'wool', number>>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.madeOfSection()),
        embedded: true,
        properties: {
            name: $.string.opt,
            section: $.double.dictionary
        }
    };
    static liComponent = (value?: IMadeOfSection) => () => (value != null ? [value.name, Object.entries(value.section).map(([k, v]) => [k, (v * 100).toFixed(0).concat('%')].join(': ')).join('\n')].join('\n') : '');
    static update(item: IMadeOfSection): IMadeOfSection {
        return item;
    }
    static init(): InitValue<IMadeOfSection> {
        return {
            section: {}
        }
    }
}
