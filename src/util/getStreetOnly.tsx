import { IAddress } from '../types';

export function getStreetOnly(address?: IAddress) {
    return address?.mailing1?.split(' ').slice(1).join(' ');
}
