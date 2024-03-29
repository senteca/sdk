import { LangValue } from './LangValue';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface ViewDraftDTO {
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  key?: string;
  validFrom?: number;
  validTo?: number;
  filters?: string;
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  customerGroup?: string;
  tags?: string[];
  custom?: CustomField[];
  storeAvailability?: string[];
}

