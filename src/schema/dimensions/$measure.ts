import { truncateAuto } from '../../common/number/truncateAuto';
import UNICODE from './unicode';
import { simplifyUp } from '../../util/simplifyUp';
import { simplifyDown } from '../../util/simplifyDown';

export const isDouble = (value?: number) => truncateAuto(value, 2);

export const multiply = (func: (value?: number) => string) => (factor: number) => (num: number) => parseFloat(func(factor * num));
export const divide = (func: (value?: number) => string) => (factor: number) => (num: number) => parseFloat(func(num / factor));
export const toUOM =
    <T extends string>(origUOM: T, targetUOM: T, func: (n: number) => number) =>
    (n: number) => ({
        original: n,
        originalUOM: origUOM,
        target: func(n),
        targetUOM: targetUOM
    });
export const joinUOM = <T extends string>(value: number, uom: T) => truncateAuto(value, 2) === '0' ? undefined : [(truncateAuto(value, 2), uom)].join('');

export const $measure = {
    convert: {
        length: toUOM(UNICODE.INCH, 'cm', multiply(isDouble)(2.54)),
        distance: toUOM('ft', 'm', divide(isDouble)(3.2808399)),
        weight: toUOM('g', 'lb', divide(isDouble)(453.59237)),
        caliperSize: toUOM('mm', UNICODE.INCH, divide(isDouble)(25.4)),
        density: toUOM('g/cm'.concat(UNICODE.SUPERSCRIPT3), 'lb/floz', divide(isDouble)(15.338))
    },
    simplify: {
        weight: (n: number) => simplifyDown(16, 'oz', true)(n, 'lb'),
        duration: (n: number) => simplifyUp(60, 'm')(n, 's'),
        runtime: (n: number) => simplifyUp(60, 'h')(n, 'm')
    }
};
