import { LangValue } from './LangValue';

export interface CustomerGroupDraftDTO {
  version?: number;
  key: string;
  label: LangValue[];
}

