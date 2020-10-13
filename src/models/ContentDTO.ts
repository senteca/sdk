import { LocalizedString } from './LocalizedString';

export interface ContentDTO {
  key: string;
  label?: LocalizedString;
  type: string;
  content?: LocalizedString;
}

