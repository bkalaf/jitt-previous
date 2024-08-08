import { converted } from '../../../schema/defs/colDBList';
import { ClothingCareMap } from '../../../schema/laundryCare';

export const toFlattener = (section: keyof typeof ClothingCareMap) => (value?: ListBack<string>) => value?.map(converted(section)).join(', ') ?? '';
