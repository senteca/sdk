import { LangValue } from './LangValue';

export interface ProductLabelDTO {
  _id: string;
  key: string;
  tags: string[];
  name: LangValue[];
  description: string;
  validFrom?: number;
  validTo?: number;
}

