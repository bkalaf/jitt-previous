import Realm from 'realm';
import { EntityBase } from './EntityBase';
import { IClothingCare } from '../../types';
export declare class ClothingCare extends EntityBase<IClothingCare> implements IClothingCare {
    bleaching: DBList<'doNotBleach' | 'nonChlorineBleach' | 'bleachingAllowed' | 'bleachWithChlorine'>;
    dryClean: DBList<'doNotDryClean' | 'dryCleanAnySolvent' | 'dryCleanPceOnly' | 'dryCleanPetroleumSolventOnly' | 'dryCleanLowHeat' | 'dryCleanReducedMoisture' | 'dryCleanNoSteamFinishing' | 'dryCleanShortCycle'>;
    drying: DBList<'doNotWring' | 'dryingAllowed' | 'doNotDry' | 'dripDry' | 'dryInShade' | 'dripDryDryInShade' | 'dryFlat' | 'dryFlatDryInShade' | 'hangToDry' | 'hangToDryDryInShade'>;
    gentleOrDelicate: DBList<'dryCleanDelicate' | 'dryCleanPetroleumSolventDelicate' | 'tumbleDryGentleOrDelicate' | 'machineWashGentleOrDelicate' | 'wetCleanGentleOrDelicate'>;
    ironing: DBList<'ironingAllowed' | 'doNotIron' | 'doNotSteam' | 'steamAsNeeded' | 'ironAt110' | 'ironAt150' | 'ironAt200'>;
    permanentPress: DBList<'dryCleanPermanentPress' | 'dryCleanPetroleumSolventPermanentPress' | 'tumbleDryPermanentPress' | 'machineWashPermanentPress' | 'wetCleanPermanentPress'>;
    tumbleDry: DBList<'tumbleDryAllowed' | 'doNotTumbleDry' | 'highHeatTumbleDry' | 'lowHeatTumbleDry' | 'noHeatTumbleDry' | 'mediumHeatTumbleDry'>;
    wash: DBList<'machineWashAllowed' | 'doNotWash' | 'handWash' | 'soakFirst' | 'wetCleanAllowed'>;
    washTemperature: DBList<'washAtOrBelow20Degrees' | 'washAtOrBelow30Degrees' | 'washAtOrBelow40Degrees' | 'washAtOrBelow50Degrees' | 'washAtOrBelow60Degrees' | 'washAtOrBelow70Degrees' | 'washAtOrBelow90Degrees' | 'washAtOrBelow95Degrees'>;
    static schema: Realm.ObjectSchema;
    static liComponent: ListItemCellComponent<IClothingCare>;
    static update(item: IClothingCare): IClothingCare;
    static init(): InitValue<IClothingCare>;
}
