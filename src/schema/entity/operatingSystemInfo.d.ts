import { IOperatingSystemInfo, OperatingSystemNames, Opt } from '../../types';
import { EntityBase } from './EntityBase';
import Realm from 'realm';
export declare class OperatingSystemInfo extends EntityBase<IOperatingSystemInfo> implements IOperatingSystemInfo {
    operatingSystem: OperatingSystemNames;
    version: Opt<string>;
    static schema: Realm.ObjectSchema;
    static update(item: IOperatingSystemInfo): IOperatingSystemInfo;
    static liComponent: ListItemCellComponent<IOperatingSystemInfo>;
    static init(): InitValue<IOperatingSystemInfo>;
}
