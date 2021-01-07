import { LangValue } from './LangValue';

export interface ContentDTO {
  key: string;
  label?: LangValue[];
  content: LangValue[];
}

