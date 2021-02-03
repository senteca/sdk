import { ProductAttributeDraftDTO } from './ProductAttributeDraftDTO';
import { ProductVariantDraftDTO } from './ProductVariantDraftDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { StoreStatusDTO } from './StoreStatusDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';

export interface ProductImportDraftDTO {
  attributes?: ProductAttributeDraftDTO[];
  variants?: ProductVariantDraftDTO[];
  version?: number;
  type: KeyReferenceDTO;
  externalId?: string;
  storeStatus?: StoreStatusDTO[];
  taxCategory: KeyReferenceDTO;
  name: LangValue[];
  description?: LangValue[];
  content?: ContentDTO[];
  categories?: IdReferenceDTO[];
  brands?: IdReferenceDTO[];
  collections?: IdReferenceDTO[];
  assets?: AssetDTO[];
  custom?: CustomField[];
  masterVariantId?: string;
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  score?: number;
  reviewRatingStatistics?: ReviewRatingStatisticsDTO;
  externalCategories?: IdReferenceDTO[];
  externalBrands?: IdReferenceDTO[];
  externalCollections?: IdReferenceDTO[];
}

