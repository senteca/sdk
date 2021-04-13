import { LangValue } from './LangValue';
import { InterfaceStatusDTO } from './InterfaceStatusDTO';

export interface ScriptCategoryDraftDTO {
  version?: number;
  key: string;
  name?: LangValue[];
  description?: LangValue[];
  isRequired?: boolean;
  interfaceStatus?: InterfaceStatusDTO[];
}

