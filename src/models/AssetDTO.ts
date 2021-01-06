import { LangValue } from './LangValue';
import { AssetSourceDTO } from './AssetSourceDTO';
import { CustomField } from './CustomField';

export interface AssetDTO {
  key?: string;
  name: LangValue[];
  link?: string;
  sources: AssetSourceDTO[];
  description?: LangValue[];
  tags?: string[];
  custom?: CustomField[];
}

