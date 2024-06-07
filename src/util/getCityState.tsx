import { IAddress } from '../types';

export function getCityState(address?: IAddress) {
    return address ? [address?.city, address?.province].filter((x) => x != null).join(', ') : undefined;
}
