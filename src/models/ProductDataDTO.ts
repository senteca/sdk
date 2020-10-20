import { IdReferenceDTO } from './IdReferenceDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';
import { AssetDTO } from './AssetDTO';
import { ProductVariantDTO } from './ProductVariantDTO';
import { CustomField } from './CustomField';

export interface ProductDataDTO {
  taxCategory: IdReferenceDTO;
  name: LangValue[];
  description: LangValue[];
  weight: number;
  contents: ContentDTO[];
  categories?: IdReferenceDTO[];
  masterCategoriesPath?: IdReferenceDTO[];
  brands?: IdReferenceDTO[];
  collections?: IdReferenceDTO[];
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  masterVariantId?: string;
  variants?: ProductVariantDTO[];
  metadata?: object;
  custom?: CustomField[];
}

