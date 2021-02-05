import { LangValue } from './LangValue';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';

export interface ViewDTO {
  version?: number;
  name: LangValue[];
  description?: LangValue[];
  filters: string;
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  custom?: CustomField[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

