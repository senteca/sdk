import { LangValue } from './LangValue';

export interface CustomerSubscriptionTypeDraftDTO {
  version?: number;
  key: string;
  label?: LangValue[];
  description?: LangValue[];
}

