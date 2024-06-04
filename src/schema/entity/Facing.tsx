import { $ } from '../$';
import { FacePOV, FaceX, FaceY, FaceZ, IFacing } from '../../types';
import { schemaName } from '../../util/schemaName';
import Realm from 'realm';
import { togglePOVFacing } from './togglePOVFacing';
import { toggleFacing } from './toggleFacing';

export class Facing extends Realm.Object<IFacing> implements IFacing {
    markUpper(): IFacing {
        return toggleFacing(this.#realm, this, 'z', 'upper');
    }
    markLower(): IFacing {
        return toggleFacing(this.#realm, this, 'z', 'lower');
    }
    markLeft(): IFacing {
        return toggleFacing(this.#realm, this, 'x', 'left');
    }
    markRight(): IFacing {
        return toggleFacing(this.#realm, this, 'x', 'right');
    }
    markFront(): IFacing {
        return toggleFacing(this.#realm, this, 'y', 'front');
    }
    markBack(): IFacing {
        return toggleFacing(this.#realm, this, 'y', 'back');
    }
    markInner(): IFacing {
        return togglePOVFacing(this.#realm, this, 'inner');
    }
    markLogo(): IFacing {
        return togglePOVFacing(this.#realm, this, 'logo');
    }
    markUPC(): IFacing {
        return togglePOVFacing(this.#realm, this, 'barcode');
    }
    markEnhancer(): IFacing {
        return togglePOVFacing(this.#realm, this, 'enhancer');
    }
    markDefect(): IFacing {
        return togglePOVFacing(this.#realm, this, 'defect');
    }
    markTag(): IFacing {
        return togglePOVFacing(this.#realm, this, 'tag');
    }
    x?: FaceX | undefined;
    y?: FaceY | undefined;
    z?: FaceZ | undefined;
    pov: FacePOV[];
    #realm: Realm;
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
        this.#realm = realm;
    }
}
