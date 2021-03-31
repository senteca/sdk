import { LangValue } from './LangValue';
import { ScriptTagDTO } from './ScriptTagDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { InterfaceStatusDTO } from './InterfaceStatusDTO';

export interface ScriptDTO {
  version?: number;
  key: string;
  name?: LangValue[];
  description?: LangValue[];
  scripts?: ScriptTagDTO[];
  category: KeyReferenceDTO;
  interfaceStatus?: InterfaceStatusDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

