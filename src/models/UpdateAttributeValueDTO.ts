import { LangValue } from './LangValue';

export interface UpdateAttributeValueDTO {
  groupName?: string;
  groupValueKey?: string;
  key: string;
  label: LangValue[];
  extra?: any;
  oldKey: string;
}

