import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { StoreStatusDTO } from './StoreStatusDTO';
import { AssetDraftDTO } from './AssetDraftDTO';
import { CustomField } from './CustomField';

export interface BrandDraftDTO {
  _id?: string;
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  score?: number;
  parent?: IdReferenceDTO;
  ancestors?: IdReferenceDTO[];
  storeStatus?: StoreStatusDTO[];
  assets?: AssetDraftDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  externalId?: string;
  custom?: CustomField[];
}

