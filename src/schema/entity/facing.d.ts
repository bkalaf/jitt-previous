import { FacePOV, FaceX, FaceY, FaceZ, IFacing } from '../../types';
import Realm from 'realm';
import { EntityBase } from './EntityBase';
export declare class Facing extends EntityBase<IFacing> implements IFacing {
    x?: FaceX | undefined;
    y?: FaceY | undefined;
    z?: FaceZ | undefined;
    pov: DBList<FacePOV>;
    static schema: Realm.ObjectSchema;
    static liComponent: ListItemCellComponent<IFacing>;
    static update(item: IFacing): IFacing;
    static init(): InitValue<IFacing>;
}
