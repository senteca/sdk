import { AttributeGroupValueDTO } from './AttributeGroupValueDTO';
import { LangValue } from './LangValue';

export interface AttributeGroupDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  totalValues?: number;
  values?: AttributeGroupValueDTO[];
  version?: number;
  name: string;
  label?: LangValue[];
  extra?: any;
}

