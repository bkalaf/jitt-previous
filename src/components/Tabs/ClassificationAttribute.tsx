import { useFormContext } from 'react-hook-form';
import { IProduct } from '../../types';
import { AutocompleteElement } from 'react-hook-form-mui';
import { EnumKey } from '../../common/EnumKey';
import { camelToProper } from '../../common/text/camelToProper';
import { useSelectOptions } from './useSelectOptions';

export function ClassificationAttribute(props: { allowed: string[]; name: keyof IProduct; enumKey: EnumKey }) {
    const formContext = useFormContext();
    const options = useSelectOptions(props.enumKey);
    return props.allowed.includes(props.name) ?
            <AutocompleteElement
                name={props.name}
                control={formContext.control}
                options={['Choose...', ...options.map((x) => x.id)]}
                label={camelToProper(props.name)}
                autocompleteProps={{
                    clearOnEscape: true,
                    handleHomeEndKeys: true,
                    size: 'small'
                }}
            />
            // <SelectElement name={props.name} control={formContext.control} options={options} label={camelToProper(props.name)}  />
        :   null;
}
