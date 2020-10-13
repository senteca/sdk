import { LocalizedString } from './LocalizedString';
import { AttributeValueDTO } from './AttributeValueDTO';

export interface AttributeDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: string;
  label: LocalizedString;
  isSearchable?: boolean;
  values?: AttributeValueDTO[];
}

