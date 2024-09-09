import { $ } from '../$';
import { schemaName } from '../../util/schemaName';
import { IBrand, IClassification, IHashTag, IHashTagAssignment, IProduct } from '../../types';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
import { MRT_ColumnDef } from 'material-react-table';
import { Flags } from '../enums';

export class HashTagAssignment extends EntityBase<IHashTagAssignment> implements IHashTagAssignment {
    brands: DBList<IBrand>;
    match(product: IProduct): IHashTag[] {
        if (!(this.flags.length === 0 || this.flags.every(flag => product.flags.includes(flag as Flags)))) return [];
        if (!(this.brands.length === 0 || this.brands.map(x => x._id.toHexString()).includes(product?.brand?._id?.toHexString() ?? ''))) return [];
        const $attributes = this.attributes;
        if (!(Object.keys($attributes).length === 0 || Object.entries($attributes).every(([k, v]) => product[k as keyof IProduct] === v))) return [];
        return Array.from(this.hashTags);
    }
    hashTags: DBList<IHashTag>;
    flags: DBList<string>;
    traits: DBList<string>;

    get attributes(): Record<string, string> {
        const classificationResult = this.classification;
        if (classificationResult.length === 0) return {};
        const classification = classificationResult[0];
        return Object.fromEntries(Object.entries(classification.attributes).filter(([k]) => this.traits.includes(k)));
    }
    get classification(): Realm.Results<RealmObj<IClassification>> {
        return this.linkingObjects<IClassification>('classification', 'hashTagAssignments');
    }
    static schema: Realm.ObjectSchema = {
        name: schemaName($.hashTagAssignment()),
        embedded: true,
        properties: {
            hashTags: $.hashTag.list,
            flags: $.string.list,
            traits: $.string.list,
            brands: $.brand.list
        }
    };
    static columns: MRT_ColumnDef<IHashTagAssignment>[] = [];
    static update(item: IHashTagAssignment): IHashTagAssignment {
        return item;
    }
    static init(): InitValue<IHashTagAssignment> {
        return {
            hashTags: [],
            flags: [],
            traits: [],
            brands: []
        }
    }
    static stringify: StringifyComponent<IHashTagAssignment> = (value, returnUndef = false) => () => value == null ? returnUndef ? undefined : '' : value.hashTags.map(x => x.name).join(', ');
    static liComponent = HashTagAssignment.stringify;
}
