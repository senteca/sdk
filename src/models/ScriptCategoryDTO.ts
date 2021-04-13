import { LangValue } from './LangValue';
import { InterfaceStatusDTO } from './InterfaceStatusDTO';

export interface ScriptCategoryDTO {
  version?: number;
  key: string;
  name?: LangValue[];
  description?: LangValue[];
  isRequired?: boolean;
  interfaceStatus?: InterfaceStatusDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

