import { LangValue } from './LangValue';
import { AttributeValueDTO } from './AttributeValueDTO';

export interface AttributeDraftDTO {
  version?: number;
  name: string;
  label: LangValue[];
  isSearchable?: boolean;
  values?: AttributeValueDTO[];
}

