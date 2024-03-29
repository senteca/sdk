import { LangValue } from './LangValue';
import { IdReferenceDTO } from './IdReferenceDTO';
import { StoreStatusDTO } from './StoreStatusDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';
import { AddonDataDTO } from './AddonDataDTO';

export interface CategoryImportDraftDTO {
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
  googleCategoryId?: string;
  addonData?: AddonDataDTO[];
  externalParent?: IdReferenceDTO;
}

