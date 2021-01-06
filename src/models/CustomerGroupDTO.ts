import { LangValue } from './LangValue';

export interface CustomerGroupDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  key: string;
  label: LangValue[];
}

