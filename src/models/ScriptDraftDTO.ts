import { LangValue } from './LangValue';
import { ScriptTagDTO } from './ScriptTagDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { InterfaceStatusDTO } from './InterfaceStatusDTO';
import { CookieDraftDTO } from './CookieDraftDTO';

export interface ScriptDraftDTO {
  version?: number;
  key: string;
  name?: LangValue[];
  description?: LangValue[];
  scripts?: ScriptTagDTO[];
  category: KeyReferenceDTO;
  interfaceStatus?: InterfaceStatusDTO[];
  cookies?: CookieDraftDTO[];
}

