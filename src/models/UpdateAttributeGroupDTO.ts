import { LangValue } from './LangValue';
import { UpdateAttributeGroupValueDTO } from './UpdateAttributeGroupValueDTO';

export interface UpdateAttributeGroupDTO {
  version?: number;
  name: string;
  label?: LangValue[];
  values?: UpdateAttributeGroupValueDTO[];
  extra?: any;
}

