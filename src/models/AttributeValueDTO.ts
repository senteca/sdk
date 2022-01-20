import { LangValue } from './LangValue';

export interface AttributeValueDTO {
  groupName?: string;
  groupValueKey?: string;
  key: string;
  label: LangValue[];
  extra?: any;
  _id?: string;
}

