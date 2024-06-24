import { $ } from '../$';
import { FacePOV, FaceX, FaceY, FaceZ, IFacing } from '../../types';
import { schemaName } from '../../util/schemaName';
import Realm from 'realm';
import { generateCaption } from '../../util/generateCaption';
import { EntityBase } from './EntityBase';

export class Facing extends EntityBase<IFacing> implements IFacing {
    x?: FaceX | undefined;
    y?: FaceY | undefined;
    z?: FaceZ | undefined;
    pov: DBList<FacePOV>;
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
    static liComponent: ListItemCellComponent<IFacing> = (value?: IFacing) => () => value == null ? '' : generateCaption(value);
    static update(item: IFacing): IFacing {
        return item;
    }
    static init(): InitValue<IFacing> {
        return {
            pov: []
        }
    }
}
