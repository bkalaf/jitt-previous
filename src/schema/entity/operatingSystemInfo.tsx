import { $ } from '../$';
import { is } from '../../common/is';
import { IOperatingSystemInfo, OperatingSystemNames, Opt } from '../../types';
import { schemaName } from '../../util/schemaName';
import { EntityBase } from './EntityBase';
import Realm from 'realm';

const os = {
    unknown: 'unknown',
    android: 'Android',
    ios: 'iOS',
    blackberry: 'Blackberry',
    linux: 'Linux',
    nucleus: 'Nucleus OS',
    symbian: 'Symbian',
    macOS: 'macOS',
    fire: 'Amazon Fire',
    windows: 'Windows'
};
// console.log(`export type OperatingSystemNames = ${Object.keys(os).map(surroundQuotesIgnore).join(' | ')}`);

// console.log(
//     JSON.stringify(
//         Object.entries(os).map(([k, v]) => ({
//             key: k,
//             text: v,
//             aliases: []
//         })),
//         null,
//         '\t'
//     )
// );

export class OperatingSystemInfo extends EntityBase<IOperatingSystemInfo> implements IOperatingSystemInfo {
    operatingSystem: OperatingSystemNames;
    version: Opt<string>;

    static schema: Realm.ObjectSchema = {
        name: schemaName($.operatingSystemInfo()),
        embedded: true,
        properties: {
            operatingSystem: $.string.default('unknown'),
            version: $.string.opt
        }
    };
    static update(item: IOperatingSystemInfo): IOperatingSystemInfo {
        return item;
    }
    static stringify: StringifyComponent<IOperatingSystemInfo> = (value?: IOperatingSystemInfo) => () => (value == null ? undefined : [os[value.operatingSystem], value.version].filter(is.not.nil).join(' '));
    static liComponent: ListItemCellComponent<IOperatingSystemInfo> = OperatingSystemInfo.stringify;
    static init(): InitValue<IOperatingSystemInfo> {
        return {
            operatingSystem: 'unknown'
        }
    }
}
