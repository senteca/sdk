import { LangValue } from './LangValue';
import { AttributeValueDTO } from './AttributeValueDTO';

export interface AttributeDTO {
  id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: string;
  label: LangValue[];
  isSearchable?: boolean;
  values?: AttributeValueDTO[];
}

