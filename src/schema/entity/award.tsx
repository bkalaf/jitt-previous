import { $ } from '../$';
import { AwardStatus, IAward, IContributor } from '../../types';
import { schemaName } from '../../util/schemaName';
import $me, { AwardNames, EmmyAwardCategories, GrammyAwardCategories, HugoAwardCategories, NYTimesAwardCategories, OscarAwardCategories, PulitzerPrizeAwardCategories, TonyAwardCategories } from '../enums';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
import { getChoiceText } from './getChoiceText';
import { is } from '../../common/is';
import { surroundParensIgnore } from '../../common/text/surround';
import { MRT_ColumnDef } from 'material-react-table';
import { awardColumns } from '../columns/awardColumns';

export class BaseAward<TAwardName extends AwardNames> extends EntityBase<IAward<TAwardName>> implements IAward<TAwardName> {
    static columns: MRT_ColumnDef<IAward<AwardNames>>[] = awardColumns();
    contributor: Opt<IContributor>;
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
    status: Opt<AwardStatus>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.award()),
        embedded: true,
        properties: {
            name: $.string(),
            category: $.string.opt,
            year: $.string.opt,
            contributor: $.contributor(),
            status: $.string.default('unclear')
        }
    };
    static update(item: IAward<AwardNames>): IAward<AwardNames> {
        return item;
    }
    static stringify =
        <TAwardName extends AwardNames>(value?: IAward<TAwardName>) =>
        () => {
            if (value == null) return undefined;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { name, status, contributor, year, category } = value;
            const nameCategory = [getChoiceText('awardNames')(name), category != null ? getChoiceText(categoryFromName[name])(category) : undefined].filter(is.not.nil).join(' for ');
            return [year?.concat(': '), [nameCategory, undefined].filter(is.not.nil).join(' - '), status === 'unclear' ? '' : ' '.concat(surroundParensIgnore(status) ?? '')].join('');
        };
    static liComponent = BaseAward.stringify;
    static init(): InitValue<IAward<AwardNames>> {
        return {
            name: 'unknown'
        };
    }
}

export class NYTimesAward extends BaseAward<'ny-times'> {
    category: Opt<NYTimesAwardCategories>;
    name = 'ny-times' as const;
}
export class OscarAward extends BaseAward<'oscar'> {
    category: Opt<OscarAwardCategories>;
    name = 'oscar' as const;
}
export class EmmyAward extends BaseAward<'emmy'> {
    name = 'emmy' as const;
    category: Opt<EmmyAwardCategories>;
}
export class GrammyAward extends BaseAward<'grammy'> {
    name = 'grammy' as const;
    category: Opt<GrammyAwardCategories>;

}
export class TonyAward extends BaseAward<'tony'> {
    name = 'tony' as const;
    category: Opt<TonyAwardCategories>;

}
export class HugoAward extends BaseAward<'hugo'> {
    name = 'hugo' as const;
    category: Opt<HugoAwardCategories>;

}
export class PulitzerAward extends BaseAward<'pulitzer'> {
    name = 'pulitzer' as const;
    category: Opt<PulitzerPrizeAwardCategories>;

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
