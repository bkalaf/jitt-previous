import { MRT_ColumnDef } from 'material-react-table';
import { $ } from '../../$';
import { DetailTypes, IOfficeGoodsDetails, IProduct } from '../../../types';
import { EntityBase } from '../EntityBase';
import { officeGoodsColumns } from '../details/officeGoodsColumns';

export class OfficeGoodsDetails extends EntityBase<IOfficeGoodsDetails> implements IOfficeGoodsDetails {
    static columns: MRT_ColumnDef<IProduct>[] = officeGoodsColumns();
    value: unknown;
    static schema: Realm.ObjectSchema = {
        name: $.details.officeGoods,
        embedded: true,
        properties: {
            value: 'mixed'
        }
    };
    static label = 'Office Goods';
    static type: DetailTypes = 'office-goods';
    static objectType = OfficeGoodsDetails.schema.name;
}
