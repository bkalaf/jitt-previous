import { useMemo } from 'react';
import $me from '../../schema/enums';
import { EnumKey } from '../../common/EnumKey';
import { standardizeOptions } from '../../util/standardizeOptions';


export function useSelectOptions(enumKey: EnumKey) {
    return useMemo(
        () => standardizeOptions($me[enumKey])
            .asArray.map(({ text, key }) => ({ id: key, label: text }))
            .sort((a, b) => a.label.localeCompare(b.label)),
        [enumKey]
    );
}
