import { LangValue } from './LangValue';

export interface CustomerGroupDTO {
  version?: number;
  key: string;
  label: LangValue[];
  requiresApproval?: boolean;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

