import { curry } from '../../common/text';

export function _roundUp(nearestStep: number, value: number) {
    // console.log();
    // console.log('ROUND UP')
    // console.log(`nearest: ${nearestStep} value: ${value}`);
    // console.log(value % nearestStep, nearestStep - (value % nearestStep))
    return value % nearestStep ===  0 ? value : value + (nearestStep - (value % nearestStep));
}
export const roundUp = curry(_roundUp);
