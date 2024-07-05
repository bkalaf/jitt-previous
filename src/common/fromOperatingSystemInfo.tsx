import { OperatingSystemInfo } from '../schema/entity/operatingSystemInfo';
import { genericStringify } from './composeR';

export const fromOperatingSystemInfo = genericStringify(OperatingSystemInfo);
