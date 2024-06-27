import { $ } from '../$';
import { AwardStatus, IAward, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import $me, { AwardNames, EmmyAwardCategories, GrammyAwardCategories, HugoAwardCategories, NYTimesAwardCategories, OscarAwardCategories, PulitzerPrizeAwardCategories, TonyAwardCategories } from '../enums';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
import { getChoiceText } from './getChoiceText';
import { is } from '../../common/is';
import { surroundParensIgnore } from '../../common/text/surround';

export abstract class BaseAward<TAwardName extends AwardNames> extends EntityBase<IAward<TAwardName>> implements IAward<TAwardName> {
    name: TAwardName;
    category: Opt<
        'hugo' extends TAwardName ? HugoAwardCategories
        : 'oscar' extends TAwardName ? OscarAwardCategories
        : 'emmy' extends TAwardName ? EmmyAwardCategories
        : 'tony' extends TAwardName ? TonyAwardCategories
        : 'pulitzer' extends TAwardName ? PulitzerPrizeAwardCategories
        : 'grammy' extends TAwardName ? GrammyAwardCategories
        : 'ny-times' extends TAwardName ? NYTimesAwardCategories
        : never
    >;
    year: Opt<string>;
    who: Opt<string>;
    status: Opt<AwardStatus>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.award()),
        embedded: true,
        properties: {
            name: $.string(),
            category: $.string.opt,
            year: $.string.opt,
            who: $.string.opt,
            status: $.string.default('unclear')
        }
    };
    static update(item: IAward<AwardNames>): IAward<AwardNames> {
        return item;
    }
    static liComponent: ListItemCellComponent<IAward<AwardNames>> =
        <TAwardName extends AwardNames>(value?: IAward<TAwardName>) =>
        () => {
            if (value == null) return '';
            const { name, status, who, year, category } = value;
            const nameCategory = [getChoiceText('awardNames')(name), category != null ? getChoiceText(categoryFromName[name])(category) : undefined].filter(is.not.nil).join(' for ');
            return [year?.concat(': '), [nameCategory, who].join(' - '), status === 'unclear' ? '' : ' '.concat(surroundParensIgnore(status) ?? '')].join('');
        };
    static init(): InitValue<IAward<AwardNames>> {
        return {
            name: 'unknown'
        };
    }
    constructor(name: TAwardName, realm: Realm, values: any) {        
        super(BaseAward.localRealm, values);
        this.name = name;
    }
}

export class Award<T extends AwardNames> extends BaseAward<T> {
    constructor(realm: Realm, values: any) {
        super(values.name ?? 'unknown', realm, values);
    }
}

export class NYTimesAward extends BaseAward<'ny-times'> {
    category: Opt<NYTimesAwardCategories>;
    name = 'ny-times' as const;
    static override schema = {
        ...super.schema,
        name: schemaName($.nyTimesAward())
    }
}
export class OscarAward extends BaseAward<'oscar'> {
    category: Opt<OscarAwardCategories>;
    name = 'oscar' as const;
    static override schema = {
        ...super.schema,
        name: schemaName($.oscarAward())
    };
}
export class EmmyAward extends BaseAward<'emmy'> {
    name = 'emmy' as const;
    category: Opt<EmmyAwardCategories>;
    static override schema = {
        ...super.schema,
        name: schemaName($.emmyAward())
    };
}
export class GrammyAward extends BaseAward<'grammy'> {
    name = 'grammy' as const;
    category: Opt<GrammyAwardCategories>;
    static override schema = {
        ...super.schema,
        name: schemaName($.grammyAward())
    };
}
export class TonyAward extends BaseAward<'tony'> {
    name = 'tony' as const;
    category: Opt<TonyAwardCategories>;
    static override schema = {
        ...super.schema,
        name: schemaName($.tonyAward())
    };
}
export class HugoAward extends BaseAward<'hugo'> {
    name = 'hugo' as const;
    category: Opt<HugoAwardCategories>;
    static override schema = {
        ...super.schema,
        name: schemaName($.hugoAward())
    };
}
export class PulitzerAward extends BaseAward<'pulitzer'> {
    name = 'pulitzer' as const;
    category: Opt<PulitzerPrizeAwardCategories>;
    static override schema = {
        ...super.schema,
        name: schemaName($.pulitzerAward())
    };
}

const categoryFromName = {
    'ny-times': 'nyTimesAwardCategories',
    emmy: 'emmyAwardCategories',
    oscar: 'oscarAwardCategories',
    tony: 'tonyAwardCategories',
    hugo: 'hugoAwardCategories',
    pulitzer: 'pulizerPrizeCategories',
    grammy: 'grammyAwardCategories',
    unknown: 'oscarAwardCategories'
} as Record<AwardNames, keyof typeof $me>;
