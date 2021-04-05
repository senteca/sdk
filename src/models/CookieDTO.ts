import { LangValue } from './LangValue';

export interface CookieDTO {
  key: string;
  name?: LangValue[];
  description?: LangValue[];
  maxAge?: LangValue[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

