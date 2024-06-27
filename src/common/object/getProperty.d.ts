import { Path } from 'react-hook-form';
export declare function getProperty<T extends Record<string, any>, U = unknown>(name: Path<T>, obj: T): U | undefined;
