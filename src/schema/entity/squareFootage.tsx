import { $ } from '../$';
import { schemaName } from '../../util/schemaName';

export const squareFootage = {
    name: schemaName($.squareFootage()),
    embedded: true,
    properties: {
        length: $.double.opt,
        width: $.double.opt
    }
}

