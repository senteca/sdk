import { LangValue } from './LangValue';

export interface AttributeValueDraftDTO {
  key: string;
  label: LangValue[];
  groupName: string;
  groupValueKey: string;
  extra?: any;
}

