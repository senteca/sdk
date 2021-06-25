import { LangValue } from './LangValue';

export interface LabelDraftDTO {
  _id?: string;
  version?: number;
  key: string;
  name: LangValue[];
  description: LangValue[];
}

