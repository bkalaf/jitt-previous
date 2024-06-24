import Realm from 'realm';
import { schemaName } from '../../util/schemaName';
import { $ } from '../$';
import { EntityBase } from './EntityBase';
import { IClothingCare } from '../../types';
import { ClothingCareMap } from '../laundryCare';

export class ClothingCare extends EntityBase<IClothingCare> implements IClothingCare {
    bleaching: DBList<'doNotBleach' | 'nonChlorineBleach' | 'bleachingAllowed' | 'bleachWithChlorine'>;
    dryClean: DBList<'doNotDryClean' | 'dryCleanAnySolvent' | 'dryCleanPceOnly' | 'dryCleanPetroleumSolventOnly' | 'dryCleanLowHeat' | 'dryCleanReducedMoisture' | 'dryCleanNoSteamFinishing' | 'dryCleanShortCycle'>;
    drying: DBList<'doNotWring' | 'dryingAllowed' | 'doNotDry' | 'dripDry' | 'dryInShade' | 'dripDryDryInShade' | 'dryFlat' | 'dryFlatDryInShade' | 'hangToDry' | 'hangToDryDryInShade'>;
    gentleOrDelicate: DBList<'dryCleanDelicate' | 'dryCleanPetroleumSolventDelicate' | 'tumbleDryGentleOrDelicate' | 'machineWashGentleOrDelicate' | 'wetCleanGentleOrDelicate'>;
    ironing: DBList<'ironingAllowed' | 'doNotIron' | 'doNotSteam' | 'steamAsNeeded' | 'ironAt110' | 'ironAt150' | 'ironAt200'>;
    permanentPress: DBList<'dryCleanPermanentPress' | 'dryCleanPetroleumSolventPermanentPress' | 'tumbleDryPermanentPress' | 'machineWashPermanentPress' | 'wetCleanPermanentPress'>;
    tumbleDry: DBList<'tumbleDryAllowed' | 'doNotTumbleDry' | 'highHeatTumbleDry' | 'lowHeatTumbleDry' | 'noHeatTumbleDry' | 'mediumHeatTumbleDry'>;
    wash: DBList<'machineWashAllowed' | 'doNotWash' | 'handWash' | 'soakFirst' | 'wetCleanAllowed'>;
    washTemperature: DBList<'washAtOrBelow20Degrees' | 'washAtOrBelow30Degrees' | 'washAtOrBelow40Degrees' | 'washAtOrBelow50Degrees' | 'washAtOrBelow60Degrees' | 'washAtOrBelow70Degrees' | 'washAtOrBelow90Degrees' | 'washAtOrBelow95Degrees'>;
    static schema: Realm.ObjectSchema = {
        name: schemaName($.clothingCare()),
        embedded: true,
        properties: {
            bleaching: $.string.list,
            dryClean: $.string.list,
            drying: $.string.list,
            gentleOrDelicate: $.string.list,
            ironing: $.string.list,
            permanentPress: $.string.list,
            tumbleDry: $.string.list,
            wash: $.string.list,
            washTemperature: $.string.list
        }
    };
    static liComponent: ListItemCellComponent<IClothingCare> = (value?: IClothingCare) => () =>
        value == null ? '' : (
            [
                [value.bleaching, ClothingCareMap.bleaching] as [DBList<string>, Record<string, { text: string }>],
                [value.dryClean, ClothingCareMap.dryClean] as [DBList<string>, Record<string, { text: string }>],
                [value.drying, ClothingCareMap.drying] as [DBList<string>, Record<string, { text: string }>],
                [value.gentleOrDelicate, ClothingCareMap.gentleOrDelicate] as [DBList<string>, Record<string, { text: string }>],
                [value.permanentPress, ClothingCareMap.permanentPress] as [DBList<string>, Record<string, { text: string }>],
                [value.ironing, ClothingCareMap.ironing] as [DBList<string>, Record<string, { text: string }>],
                [value.tumbleDry, ClothingCareMap.tumbleDry] as [DBList<string>, Record<string, { text: string }>],
                [value.wash, ClothingCareMap.wash] as [DBList<string>, Record<string, { text: string }>],
                [value.washTemperature, ClothingCareMap.washTemperature] as [DBList<string>, Record<string, { text: string }>]
            ]
                .filter((x) => x[0] != null && x[0].length > 0)
                .map((x) => x[0].map((indiv) => x[1][indiv].text).join(', '))
                .join(', ')
        );
    static update(item: IClothingCare): IClothingCare {
        return item;
    }
    static init(): InitValue<IClothingCare> {
        return {
            bleaching: [],
            ironing: [],
            dryClean: [],
            drying: [],
            wash: [],
            washTemperature: [],
            permanentPress: [],
            gentleOrDelicate: [],
            tumbleDry: []
        }
    }
}
