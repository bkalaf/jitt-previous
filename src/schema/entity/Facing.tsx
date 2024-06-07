import { $ } from '../$';
import { FacePOV, FaceX, FaceY, FaceZ, IFacing } from '../../types';
import { schemaName } from '../../util/schemaName';
import Realm from 'realm';
import { generateCaption } from '../../util/generateCaption';

export class Facing extends Realm.Object<IFacing> implements IFacing {
    x?: FaceX | undefined;
    y?: FaceY | undefined;
    z?: FaceZ | undefined;
    pov: FacePOV[];
    static schema: Realm.ObjectSchema = {
        name: schemaName($.productFacing()),
        embedded: true,
        properties: {
            x: $.string.opt,
            y: $.string.opt,
            z: $.string.opt,
            pov: $.string.list
        }
    };
    constructor(realm: Realm, values: InitialValue<IFacing>) {
        super(realm, values);
    }
    static liComponent: ListItemCellComponent<IFacing> = (value?: IFacing) => () => value == null ? '' : generateCaption(value)
}
