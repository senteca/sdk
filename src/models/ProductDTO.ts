import { ProductAttributeDTO } from './ProductAttributeDTO';
import { ProductVariantDTO } from './ProductVariantDTO';
import { AttributeRuleDTO } from './AttributeRuleDTO';
import { KeyReferenceDTO } from './KeyReferenceDTO';
import { StoreStatusDTO } from './StoreStatusDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';

export interface ProductDTO {
  _id: string;
  createdAt: number;
  updatedAt: number;
  attributes?: ProductAttributeDTO[];
  variants?: ProductVariantDTO[];
  attributeRules?: AttributeRuleDTO[];
  version?: number;
  type: KeyReferenceDTO;
  owner?: string;
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
  totalAvailableQuantity?: number;
  totalInStockQuantity?: number;
  score?: number;
  reviewRatingStatistics?: ReviewRatingStatisticsDTO;
}

