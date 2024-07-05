import { $ } from '../$';
import { is } from '../../common/is';
import { IIndividual, Opt, Prefix, Suffix } from '../../types';
import { schemaName } from '../../util/schemaName';
import { standardizeOptions } from '../defs/standardizeOptions';
import $me from '../enums';
import { EntityBase } from './EntityBase';
import Realm, { BSON } from 'realm';

export class Individual extends EntityBase<IIndividual> implements IIndividual {
    _id: BSON.ObjectId;
    firstname: string;
    lastname: string;
    middlename: Opt<string>;
    prefix: Opt<Prefix>;
    suffix: Opt<Suffix>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.individual()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            firstname: $.string(),
            middlename: $.string.opt,
            lastname: $.string(),
            prefix: $.string.opt,
            suffix: $.string.opt
        }
    }
    static stringify = (item?: IIndividual, returnUndefined = false) => () => {
        if (item == null) return returnUndefined ? undefined
                :   '';
        const { asRecord: prefixLookup } = standardizeOptions($me.individualPrefix);
        const { asRecord: suffixLookup } = standardizeOptions($me.individualSuffix);
        const $prefix = item.prefix == null ? undefined : prefixLookup[item.prefix];
        const $suff = item.suffix == null ? undefined : suffixLookup[item.suffix] as { text: string, omitSeperator?: boolean };
        const $suffix = $suff ? [$suff.omitSeperator ?? false ? '' : ', ', $suff.text].join('') : undefined
        return [$prefix?.text, item.firstname, item.middlename, item.lastname, $suffix].filter(is.not.nil).join(' ');
    }
    static liComponent = Individual.stringify;
    static update(item: IIndividual): IIndividual {
        return item;
    }
    static init(): InitValue<IIndividual> {
        return {
            _id: new BSON.ObjectId(),
            firstname: '',
            lastname: ''
        }
    }
}