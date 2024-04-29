import { liComponents } from './liComponents';


export function useListItemComponent(objectType: string) {
    const result = liComponents[objectType];
    if (result == null) throw new Error(`could not find list item component for : ${objectType}`);
    return result;
}
