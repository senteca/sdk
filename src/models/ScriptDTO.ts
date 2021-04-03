import { LangValue } from './LangValue';
import { ScriptTagDTO } from './ScriptTagDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { InterfaceStatusDTO } from './InterfaceStatusDTO';
import { CookieDTO } from './CookieDTO';

export interface ScriptDTO {
  version?: number;
  key: string;
  name?: LangValue[];
  description?: LangValue[];
  scripts?: ScriptTagDTO[];
  category: KeyReferenceDTO;
  interfaceStatus?: InterfaceStatusDTO[];
  cookies?: CookieDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

