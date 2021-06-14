import { LangValue } from './LangValue';

export interface LabelDTO {
  _id?: string;
  version?: number;
  key: string;
  name: LangValue[];
  description: string;
  createdAt: number;
  updatedAt: number;
}

