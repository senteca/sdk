import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { StoreStatusDTO } from './StoreStatusDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface CategoryImportDraftDTO {
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  score?: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  alias?: IdReferenceDTO;
  storeStatus?: StoreStatusDTO[];
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  custom?: CustomField[];
  externalId?: string;
  externalParent?: IdReferenceDTO;
}

