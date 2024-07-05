import { ofFirst } from '../components/table/controls/titleParts';
import { appendIgnore } from './append';
import { composeR } from './composeR.1';

export const fromFirst = ofFirst;
export const fromEditionTitle = composeR(fromFirst, appendIgnore(' ed.'));
export const fromEditionNarrative = composeR(fromFirst, appendIgnore(' edition'));
