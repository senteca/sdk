import { LocalizedString } from './LocalizedString';
import { AttributeValueDTO } from './AttributeValueDTO';

export interface AttributeDraftDTO {
  version?: number;
  name: string;
  label: LocalizedString;
  isSearchable?: boolean;
  values?: AttributeValueDTO[];
}

