import { LangValue } from './LangValue';

export interface UpdateAttributeValueDTO {
  key: string;
  label: LangValue[];
  extra?: any;
  oldKey: string;
}

