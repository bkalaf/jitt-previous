import { $ } from '../$';
import { is } from '../../common/is';
import { IAddress, IRn, Opt, RnBusinessType, RnCompanyType, RnMaterial, RnProductLine, RnType } from '../../types';
import { getCityState } from '../../util/getCityState';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm, { BSON } from 'realm';

export class Rn extends EntityBase<IRn> implements IRn {
    type: Opt<RnType>;
    _id: BSON.ObjectId;
    no: number;
    legalBusinessName: string;
    companyName: string;
    companyType: Opt<RnCompanyType>;
    businessType: DBList<RnBusinessType>;
    productLine: DBList<RnProductLine>;
    material: DBList<RnMaterial>;
    streetAddress: Opt<IAddress>;
    mailingAddress: Opt<IAddress>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.rn()),
        primaryKey: '_id',
        properties: {
            _id: $.objectId(),
            type: $.string(),
            no: $.int.default(0),
            legalBusinessName: $.string(),
            companyName: $.string(),
            companyType: $.string.opt,
            businessType: $.string.list,
            productLine: $.string.list,
            material: $.string.list,
            streetAddress: $.address(),
            mailingAddress: $.address()
        }
    };
    static update(item: IRn) {
        return item;
    }
    static labelProperty = 'legalBusinessName';
    static stringify =
        (item?: IRn, returnUndefined = false) =>
        () => {
            if (item == null) return returnUndefined ? undefined : '';
            const cityState = getCityState(item.streetAddress) ?? getCityState(item.mailingAddress);
            return [[item.type ?? 'RN', item.no.toFixed(0)].join(' #'), item.legalBusinessName ?? item.companyName ?? 'n/a', cityState].filter(is.not.nil).join(' ');
        };
    static liComponent = Rn.stringify;
    static init(): InitValue<IRn> {
        return {
            _id: new BSON.ObjectId(),
            no: 0,
            legalBusinessName: '',
            companyName: '',
            businessType: [],
            material: [],
            productLine: []
        };
    }
}
