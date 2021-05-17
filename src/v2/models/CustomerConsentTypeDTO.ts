import { LangValue } from './LangValue';

export interface CustomerConsentTypeDTO {
  version?: number;
  key: string;
  label?: LangValue[];
  description?: LangValue[];
  tags?: string[];
  isRequired?: boolean;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

