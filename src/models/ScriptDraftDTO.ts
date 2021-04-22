import { LangValue } from './LangValue';
import { ScriptTagDTO } from './ScriptTagDTO';
import { InterfaceStatusDTO } from './InterfaceStatusDTO';
import { CookieDTO } from './CookieDTO';

export interface ScriptDraftDTO {
  version?: number;
  key: string;
  name?: LangValue[];
  scripts?: ScriptTagDTO[];
  categoryKey: string;
  interfaceStatus?: InterfaceStatusDTO[];
  cookies?: CookieDTO[];
}

