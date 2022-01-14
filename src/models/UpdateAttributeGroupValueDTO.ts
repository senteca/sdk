import { LangValue } from './LangValue';

export interface UpdateAttributeGroupValueDTO {
  key: string;
  label: LangValue[];
  extra?: any;
  oldKey: string;
}

