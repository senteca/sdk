import { LangValue } from './LangValue';

export interface CustomerSubscriptionTypeDTO {
  version?: number;
  key: string;
  label?: LangValue[];
  description?: LangValue[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

