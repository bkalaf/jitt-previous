export function getGridClass(num: number) {
    switch (num) {
        case 1:
            return 'grid grid-cols-1';
        case 2:
            return 'grid grid-cols-2';
        case 3:
            return 'grid grid-cols-3';
        case 4:
            return 'grid grid-cols-4';
        case 5:
            return 'grid grid-cols-5';
        case 6:
            return 'grid grid-cols-6';
        case 7:
            return 'grid grid-cols-7';

        default:
            return '';
    }
}
