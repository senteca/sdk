import { LangValue } from './LangValue';

export interface AttributeValueDraftDTO {
  groupName?: string;
  groupValueKey?: string;
  key: string;
  label: LangValue[];
  extra?: any;
}

