import { LangValue } from './LangValue';

export interface ProductVariantLabelDTO {
  _id: string;
  key: string;
  tags: string[];
  name: LangValue[];
  description: LangValue[];
  validFrom?: number;
  validTo?: number;
}

