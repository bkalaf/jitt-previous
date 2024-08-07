import { normalizePropertySchema } from '../schema/conversion/cnvrt';

export function getPropertyType(objectName: string, propertyName: string): string {
    const [head, ...tail] = propertyName.includes('.') ? propertyName.split('.') : [propertyName];
    const osp = window.schema[objectName].schema?.properties[head];
    if (osp == null) throw new Error(`couldnt find : ${propertyName} on ${objectName}`);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, optional, objectType } = typeof osp === 'string' ? normalizePropertySchema(osp) : osp;
    if (tail.length === 0) return type === 'list' ? `list<${objectType}>` : type === 'object' ? `<${objectType}` : type;
    return getPropertyType(objectType ?? 'n/a', tail.join('.'));
}