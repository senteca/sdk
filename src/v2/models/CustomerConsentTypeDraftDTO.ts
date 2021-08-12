import { LangValue } from './LangValue';

export interface CustomerConsentTypeDraftDTO {
  version?: number;
  key: string;
  label?: LangValue[];
  description?: LangValue[];
  tags?: string[];
  isRequired?: boolean;
  requiresConfirmation?: boolean;
}

