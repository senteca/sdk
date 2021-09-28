import { LangValue } from './LangValue';

export interface CustomerConsentTypeDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  label?: LangValue[];
  description?: LangValue[];
  tags?: string[];
  isRequired?: boolean;
  requiresConfirmation?: boolean;
  isSystem?: boolean;
}

