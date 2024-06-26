import { $className } from '../util/$className';

export function groupProps(bgColor: string, textColor: string) {
    const { className: cn } = $className({ className: 'single-header:bg-transparent single-header:text-black grouped-header:shadow-inner grouped-header:shadow-black' }, {}, bgColor, textColor);
    return {
        muiTableHeadCellProps: {
            className: cn
        }
    };
}
