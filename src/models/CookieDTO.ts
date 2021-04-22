import { LangValue } from './LangValue';

export interface CookieDTO {
  _id?: string;
  createdAt?: number;
  updatedAt?: number;
  key: string;
  name?: LangValue[];
  description?: LangValue[];
  maxAge?: LangValue[];
}

