import { is } from '../../common/is';
import { IFacing } from '../../types';
import { Facing } from './Facing';


export function generateCaption(facing: IFacing) {
    const { x, y, z, pov } = facing;
    const text = [[y, z, x].filter(is.not.nil).join('-'), ...pov.sort()].join('; ');
    return text;
}
