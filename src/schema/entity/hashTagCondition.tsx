import { IAttribute, IBrand, IHashTag, IHashTagCondition, IMaterialCondition } from '../../types';
import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { EntityBase } from './EntityBase';
import { MRT_ColumnDef } from 'material-react-table';
import { materialConditionColumns } from '../columns/materialCondition';
import { hashTagConditionColumns } from '../columns/hashTagCondition';
import { Attribute } from './attribute';

export class MaterialCondition extends EntityBase<IMaterialCondition> implements IMaterialCondition {
    material: 'acrylic' | 'cashmere' | 'cotton' | 'denim' | 'lace' | 'leather' | 'linen' | 'modal' | 'nylon' | 'organicCotton' | 'polyester' | 'rayon' | 'satin' | 'silk' | 'spandex' | 'suede' | 'velvet' | 'viscose' | 'wool';
    anyValue: boolean;
    value: Opt<number>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.materialCondition()),
        embedded: true,
        properties: {
            material: $.string.opt,
            anyValue: $.bool.default(false),
            value: $.float.default(0)
        }
    };
    static init(): InitValue<IMaterialCondition> {
        return {
            material: 'acrylic',
            anyValue: false,
            value: 0.0
        };
    }
    static update(item: IMaterialCondition): IMaterialCondition {
        return item;
    }
    static columns: MRT_ColumnDef<IMaterialCondition>[] = materialConditionColumns();
    static stringify =
        (value?: IMaterialCondition, returnUndef = false) =>
        () =>
            value == null ?
                returnUndef ? undefined
                :   ''
            :   [value.material, ' = ', value.anyValue ? 'ANY' : value.value?.toString() ?? '0'].join('');
    static liComponent = MaterialCondition.stringify;
}
export class HashTagCondition extends EntityBase<IHashTagCondition> implements IHashTagCondition {
    hashTags: DBList<IHashTag>;
    attributes: DBList<IAttribute>;
    brands: DBList<IBrand>;
    conditions: DBList<string>;
    material: DBList<IMaterialCondition>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.hashTagCondition()),
        embedded: true,
        properties: {
            attributes: $.attribute.list,
            brands: $.brand.list,
            conditions: $.string.list,
            material: $.materialCondition.list,
            hashTags: $.hashTag.list
        }
    };
    static init(): InitValue<IHashTagCondition> {
        return {
            hashTags: [],
            attributes: [],
            brands: [],
            conditions: [],
            material: []
        };
    }
    static update(item: IHashTagCondition) {
        return item;
    }
    static columns: MRT_ColumnDef<IHashTagCondition>[] = hashTagConditionColumns();
    static stringify =
        (value?: IHashTagCondition, returnUndef = false) =>
        () =>
            value == null ?
                returnUndef ? undefined
                :   ''
            :   [
                    value.brands.length > 0 ? value.brands.map((x) => x.name).join(', ') : undefined,
                    value.conditions.length > 0 ? value.conditions.join(', ') : undefined,
                    value.attributes.length > 0 ? (value.attributes as any as DBList<Attribute>).map((x) => Attribute.stringify(x)()).join(',') : undefined
                ]
                    .filter((x) => x != null)
                    .join('|');
    static liComponent = HashTagCondition.stringify;
}
