import { LangValue } from './LangValue';
import { StoreStatusDTO } from './StoreStatusDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface CollectionDraftDTO {
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  storeStatus?: StoreStatusDTO[];
  validFrom?: number;
  validTo?: number;
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  custom?: CustomField[];
  externalId?: string;
}

