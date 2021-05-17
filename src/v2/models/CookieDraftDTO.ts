import { LangValue } from './LangValue';

export interface CookieDraftDTO {
  key: string;
  name?: LangValue[];
  description?: LangValue[];
  maxAge?: LangValue[];
}

