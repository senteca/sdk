import { CustomField } from './CustomField';

export interface InterfaceDTO {
  key: string;
  label?: string;
  baseUrls?: string[];
  canonicalUrl?: string;
  languageCode: string;
  defaultCurrencyCode: string;
  themeKey?: string;
  themeConfig?: any;
  themeConfigType?: any;
  secret?: string;
  custom?: CustomField[];
}

