import { LangValue } from './LangValue';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface CollectionDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  version?: number;
  name: LangValue[];
  description?: LangValue[];
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

