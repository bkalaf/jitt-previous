import { standardizeOptions } from '../util/standardizeOptions';
import $me from '../schema/enums';
import { EnumKey } from './EnumKey';

export function ofEnum<T extends string, TValue>(enumKey: EnumKey, propToRetrieve: 'text' | 'key' | 'selector' | T = 'text') {
    return (value?: string): Opt<TValue> => (value != null ? (standardizeOptions($me[enumKey]).asRecord[value] as any) ? (standardizeOptions($me[enumKey]).asRecord[value] as any)[propToRetrieve] : undefined : undefined);
}
