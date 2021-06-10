import { LangValue } from './LangValue';

export interface LabelDTO {
  _id?: string;
  version?: number;
  key: string;
  tags: string[];
  label: LangValue[];
  description: string;
  validFrom?: number;
  validTo?: number;
  createdAt: number;
  updatedAt: number;
}

