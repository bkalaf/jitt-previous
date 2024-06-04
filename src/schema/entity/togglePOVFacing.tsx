import { IFacing } from '../../types';
import { runTransaction } from '../../util/runTransaction';
import Realm from 'realm';

export function togglePOVFacing(realm: Realm, facing: IFacing, value: ArrayOf<IFacing['pov']>) {
    const func = () => (facing.pov = facing.pov.includes(value) ? facing.pov.filter((x) => x !== value) : [value, ...facing.pov]);
    runTransaction(realm, func);
    return facing;
}
