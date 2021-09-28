import { LangValue } from './LangValue';

export interface CustomerConsentTypeCreateDTO {
  version?: number;
  key: string;
  label?: LangValue[];
  description?: LangValue[];
  tags?: string[];
  isRequired?: boolean;
  requiresConfirmation?: boolean;
}

