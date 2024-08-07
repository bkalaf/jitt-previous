import { is } from '../common/is';
import { prependIgnore } from '../common/prepend';
import { capitalize } from '../common/text/capitalize';
import fs from 'graceful-fs';

export const MAX_INDEX = 90;
export const MAX_IMPORTANCE = 250;

export const TITLE_MAX_LENGTH = 80;
export const DESCRIPTION_MAX_LENGTH = 1000;
export type Part = {
    importance: number | null;
    index: number | null;
    section: Sections;
    header: string | undefined;
    title: string | undefined;
    narrative: string | undefined;
};
export type TitlePart = {
    importance: number;
    index: number;
    section: Sections;
    header: string | undefined;
    title: string;
    narrative: string | undefined;
};
export type DescriptionPart = {
    importance: number;
    index: number | null;
    section: Sections;
    header: string | undefined;
    title: string | null;
    narrative: string;
};
export function $generateTitle(parts: Part[], maxImportance = MAX_IMPORTANCE): { title: string; boundTitle: string } {
    function inner(s: string): string {
        const result = s.replaceAll('  ', ' ');
        return result.includes('  ') ? inner(result) : result;
    }
    const filtered = (parts.filter((x) => x.importance != null && x.index != null && x.title != null) as TitlePart[])
        .filter((x) => x.importance <= maxImportance)
        .sort((a, b) =>
            a.index < b.index ? -1
            : a.index > b.index ? 1
            : 0
        );
    // eslint-disable-next-line no-console
    console.info('filtered', filtered);
    const title = inner(
        filtered
            .map((x) => x.title.split(' ').map(capitalize).join(' '))
            .map(capitalize)
            .join(' ')
    );
    // eslint-disable-next-line no-console
    console.info(`title`, title);
    fs.appendFileSync('C:/Users/bobby/OneDrive/Desktop/title-narrative-output.txt', title.concat('\n'));
    const { title: boundTitle } = title.length > TITLE_MAX_LENGTH ? $generateTitle(parts, maxImportance - 1) : { title: title };
    return {
        title,
        boundTitle
    };
}
export function $generateDescription(parts: Part[], maxImportance = MAX_IMPORTANCE): { description: string; boundDescription: string; title: string; boundTitle: string } {
    function inner(s: string): string {
        const result = s.replaceAll('  ', ' ');
        return result.includes('  ') ? inner(result) : result;
    }
    const { title, boundTitle } = $generateTitle(parts);
    const filtered = (parts.filter((x) => x.importance != null && x.narrative != null) as DescriptionPart[]).filter((x) => x.importance <= maxImportance);
    const sections: Record<Sections, DescriptionPart[]> = {
        attributes: [],
        flags: [],
        text: [],
        lists: [],
        measurements: [],
        specifications: [],
        none: [],
        shipping: []
    };
    for (const part of filtered) {
        const current = sections[part.section];
        const next = [...current, part];
        sections[part.section] = next;
    }
    let $flags: string | undefined = sections.flags.map((x) => x.narrative).join('\n');
    let $specifications: string | undefined = sections.specifications.map((x) => [x.header, x.narrative].join(': ')).join('\n');
    let $measurements: string | undefined = sections.measurements.map((x) => [x.header, x.narrative].join(': ')).join('\n');
    let $attributes: string | undefined = sections.attributes.map((x) => [x.header, x.narrative].join(': ')).join('\n');
    let $text: string | undefined = sections.text.map((x) => x.narrative).join('\n');
    let $lists: string | undefined = sections.lists.map((x) => [x.header?.toUpperCase(), x.narrative].join('\n')).join('\n');
    let $shipping: string | undefined = sections.shipping.map((x) => [x.header, x.narrative].join(': ')).join('\n');

    if ($flags.length <= 1) $flags = undefined;
    if ($specifications.length <= 1) $specifications = undefined;
    if ($measurements.length <= 1) $measurements = undefined;
    if ($attributes.length <= 1) $attributes = undefined;
    if ($text.length <= 1) $text = undefined;
    if ($lists.length <= 1) $lists = undefined;
    if ($shipping.length <= 1) $shipping = undefined;

    const $description = (
        [title, prependIgnore('\n')($attributes), prependIgnore('MEASUREMENTS:\n')($measurements), prependIgnore('SPECS:\n')($measurements), prependIgnore('\n')($lists), prependIgnore('\n')($flags), prependIgnore('\n')($text)].filter(
            is.not.nil
        ) as string[]
    ).join('\n');
    const description = inner($description);
    const { boundDescription } = description.length > DESCRIPTION_MAX_LENGTH ? $generateDescription(parts, maxImportance - 1) : { boundDescription: undefined };
    return {
        description,
        boundDescription: boundDescription ?? description,
        title,
        boundTitle
    };
}
