import { LangValue } from './LangValue';

export interface CustomerSubscriptionTypeDTO {
  key: string;
  label?: LangValue[];
  description?: LangValue[];
  id: string;
  createdAt: number;
  updatedAt: number;
}

