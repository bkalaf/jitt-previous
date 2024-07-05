import { $ } from '../$';
import { ContributorRoles, IContributor, IIndividual, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
import { Individual } from './individual';
import { surroundParensIgnore } from '../../common/text/surround';
import { is } from '../../common/is';

export class Contributor extends EntityBase<IContributor> implements IContributor {
    group: Opt<string>;
    individual: Opt<IIndividual>;
    role: Opt<ContributorRoles>;
    creditedAs: Opt<string>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.contributor()),
        embedded: true,
        properties: {
            group: $.string.opt,
            individual: $.individual(),
            role: $.string.opt,
            creditedAs: $.string.opt
        }
    };
    static update(item: IContributor) {
        return item;
    }
    static stringify =
        (item?: IContributor, returnUndefined = false) =>
        () => {
            if (item == null) return returnUndefined ? undefined : '';
            if (item.role == null) throw new Error('no role');
            const who = item.group ?? Individual.stringify(item.individual, true);
            return [[item.role, who].join(': '), surroundParensIgnore(item.creditedAs ? ['credited as:', item.creditedAs].join(' ') : undefined)].filter(is.not.nil).join(' ');
        };
    static liComponent = Contributor.stringify;
    static init(): InitValue<IContributor> {
        return {};
    }
}