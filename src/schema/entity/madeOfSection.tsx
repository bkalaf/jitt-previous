import Realm from "realm";
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { MRT_ColumnDef, createMRTColumnHelper } from 'material-react-table';
import { IMadeOfSection } from '../../types';
import { col } from '../defs/col';
import { fabric } from '../enums/fabric';

export const madeOfSection: Realm.ObjectSchema = {
    name: schemaName($.madeOfSection()),
    embedded: true,
    properties: {
        name: $.string.opt,
        section: $.double.dictionary
    }
}

const h = createMRTColumnHelper<IMadeOfSection>();
const helper = col(h);

export const madeOfSectionColumns: MRT_ColumnDef<IMadeOfSection>[] = [
    helper.string('name', 'Name', undefined, { required: true, maxLength: 40 }),
    helper.dictionary('section', 'Section', 'double', { enumMap: fabric })
]