export const surround = (left: string, right: string) => (value?: string) => [left, value ?? '', right].join('');
