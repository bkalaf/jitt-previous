import { converted } from 'src/schema/defs/converted';
import { ClothingCareMap } from '../../../schema/laundryCare';

export const toFlattener = (section: keyof typeof ClothingCareMap) => (value?: ListBack<string>) => value?.map(converted(section)).join(', ') ?? '';
