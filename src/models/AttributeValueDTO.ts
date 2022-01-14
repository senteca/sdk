import { LangValue } from './LangValue';

export interface AttributeValueDTO {
  key: string;
  label: LangValue[];
  groupName: string;
  groupValueKey: string;
  extra?: any;
  _id?: string;
}

