import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { IMadeOfSection } from '../../types';
import { EntityBase } from './EntityBase';
import $me from '../enums';
import { standardizeOptions } from '../defs/standardizeOptions';
import { MRT_ColumnDef } from 'material-react-table';
import { madeOfSectionColumns } from '../columns/madeOfSection';

export class MadeOfSection extends EntityBase<IMadeOfSection> implements IMadeOfSection {
    static columns: MRT_ColumnDef<IMadeOfSection>[] = madeOfSectionColumns();
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
    static stringify = (value?: IMadeOfSection) => () =>
        value != null ?
            [
                value.name,
                Object.entries(value.section)
                    .map(([k, v]) => [standardizeOptions($me.fabricTypes).asRecord[k], (v * 100).toFixed(0).concat('%')].join(': '))
                    .join('\n')
            ].join('\n')
        :   '';
    static liComponent = MadeOfSection.stringify;
    static update(item: IMadeOfSection): IMadeOfSection {
        return item;
    }
    static init(): InitValue<IMadeOfSection> {
        return {
            section: {}
        };
    }
}
