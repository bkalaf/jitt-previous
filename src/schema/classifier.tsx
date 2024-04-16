import Realm from 'realm';
import { schemaName } from '../util/schemaName';
import { $ } from './$';
import { createMRTColumnHelper, MRT_ColumnDef, MRT_RowData } from 'material-react-table';
import { IAttribute, IClassifier, IHashTag, IMercariTaxonomy } from '../types';
import { col } from './defs/col';
import { useWhyDidIUpdate } from '../hooks/useWhyDidIUpdate';
import { createStringControl } from '../components/controls/createStringControl';
import { hashTagColumns } from './hashTag';
import { attributeColumns } from './attribute';
import { ObjectId } from 'bson';
import { runTransaction } from '../util/runTransaction';
import { distinctBy, distinctByOID } from '../common/array/distinct';
import { HashTagRowCell } from './HashTagRowCell';
import { AttributeRowCell } from './AttributeRowCell';

export const classifier: Realm.ObjectSchema = {
    name: schemaName($.classifier()),
    primaryKey: '_id',
    properties: {
        _id: $.objectId(),
        taxonomy: $.mercariTaxonomy(),
        shortName: $.string(),
        parent: $.classifier(),
        name: $.string(),
        type: $.string.list,
        attributes: $.attribute.list,
        hashTags: $.hashTag.list,
        subRows: {
            type: 'linkingObjects',
            objectType: 'classifier',
            property: 'parent'
        }
    }
};

export const h = createMRTColumnHelper<IClassifier>();
export const helper = col(h);

export function createStringValueCell<T extends MRT_RowData>() {
    return function StringValueCell(props: Parameters<Exclude<MRT_ColumnDef<T, string | undefined>['Cell'], undefined>>[0]) {
        useWhyDidIUpdate('StringValueCell', props);
        const { cell } = props;
        const value = cell.getValue() ?? '';
        return value;
    } as Exclude<MRT_ColumnDef<T>['Cell'], undefined>;
}
export const stringColumn = [
    createMRTColumnHelper<{ value: string }>().accessor('value', {
        header: 'Value',
        Cell: createStringValueCell<{ value: string }>() as any,
        Edit: createStringControl({ maxLength: 150 })
    })
];

export const classifierColumns: MRT_ColumnDef<IClassifier>[] = [
    helper.pk(),
    helper.lookup('taxonomy', 'Taxonomy', { objectType: 'mercariTaxonomy', labelProperty: 'fullname' }),
    helper.string('shortName', 'Short Name', undefined, { maxLength: 50, required: true }),
    helper.lookup('parent', 'Parent', { objectType: 'classifier', labelProperty: 'name' }),
    {
        ...helper.string('name', 'Name', undefined, { maxLength: 150, required: true }),
        // muiTableBodyCellProps: (props) => ({
        //     className: fromDepth(props.row.depth)
        // })
    },
    helper.list<string>('type', 'Detail Types', 'string', ({ data }: { data: string }) => data, stringColumn, 'value'),
    helper.list<string>('detailTypes', 'ALL Detail Types', 'string', ({ data }: { data: string }) => data, stringColumn, 'value', true),
    helper.list('hashTags', 'Hash Tags', 'hashTag', HashTagRowCell, hashTagColumns, 'name'),
    helper.list('allHashTags', 'ALL Hash Tags', 'hashTag', HashTagRowCell, hashTagColumns, 'name', true),
    helper.list('attributes', 'Attributes', 'attribute', AttributeRowCell, attributeColumns, 'path'),
    helper.list('allAttributes', 'ALL Attributes', 'attribute', AttributeRowCell, attributeColumns, 'path', true)
];

export class Classifier extends Realm.Object<IClassifier> implements IClassifier {
    get allHashTags(): IHashTag[] {
        return distinctByOID<IHashTag>([...this.hashTags, ...(this.taxonomy?.allHashTags ?? []), ...(this.parent?.allHashTags ?? [])]);
    }
    get detailTypes(): string[] {
        return distinctBy((left: string, right: string) => left === right, [...(this?.parent?.detailTypes ?? []), ...(this.type ?? [])]);
    }
    get allAttributes(): IAttribute[] {
        return distinctBy((left: IAttribute, right: IAttribute) => left.path === right.path, [...(this?.parent?.allAttributes ?? []), ...(this.attributes ?? [])]);
    }
    _id: ObjectId;
    taxonomy?: IMercariTaxonomy | undefined;
    shortName: string;
    parent?: Pick<IClassifier, '_id' | 'shortName' | 'name' | 'hashTags' | 'allHashTags' | 'detailTypes' | 'allAttributes'> | undefined;
    name: string;
    type: DBList<string>;
    attributes: DBList<IAttribute>;
    hashTags: DBList<IHashTag>;

    static schema = classifier;

    static update(realm: Realm, item: IClassifier): IClassifier {
        const func = () => {
            const name = [item.parent?.name, item.shortName].join(' || ');
            if (name !== item.name) {
                item.name = name;
            }
        };
        runTransaction(realm, func);
        return item;
    }
}
