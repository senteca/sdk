import { LangValue } from './LangValue';
import { AssetSourceDTO } from './AssetSourceDTO';
import { CustomField } from './CustomField';

export interface AssetDraftDTO {
  key: string;
  name: LangValue[];
  sources: AssetSourceDTO[];
  description?: LangValue[];
  tags?: string[];
  custom?: CustomField[];
}

