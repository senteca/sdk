import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { StoreStatusDTO } from './StoreStatusDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface CategoryDTO {
  _id?: string;
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
  addonData?: any;
  createdAt: number;
  updatedAt: number;
}

