import { LangValue } from './LangValue';

export interface AttributeValueDTO {
  _id: string;
  key: string;
  label: LangValue[];
  extra?: any;
}

