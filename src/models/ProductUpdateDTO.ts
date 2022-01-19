import { KeyReferenceDTO } from './KeyReferenceDTO';
import { StoreStatusDTO } from './StoreStatusDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';
import { ProductRelationsDTO } from './ProductRelationsDTO';
import { AddonDataDTO } from './AddonDataDTO';
import { ProductLoanInfoDTO } from './ProductLoanInfoDTO';
import { ProductAttributeDTO } from './ProductAttributeDTO';
import { ProductVariantDTO } from './ProductVariantDTO';
import { AttributeRuleDTO } from './AttributeRuleDTO';

export interface ProductUpdateDTO {
  version?: number;
  type?: KeyReferenceDTO;
  owner?: string;
  externalId?: string;
  storeStatus?: StoreStatusDTO[];
  state?: KeyReferenceDTO;
  taxCategory?: KeyReferenceDTO;
  name?: LangValue[];
  description?: LangValue[];
  content?: ContentDTO[];
  categories?: IdReferenceDTO[];
  brands?: IdReferenceDTO[];
  collections?: IdReferenceDTO[];
  assets?: AssetDTO[];
  custom?: CustomField[];
  masterVariantId?: string;
  slug?: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  totalAvailableQuantity?: number;
  totalInStockQuantity?: number;
  reviewRatingStatistics?: ReviewRatingStatisticsDTO;
  relations?: ProductRelationsDTO;
  addonData?: AddonDataDTO[];
  loanInfo?: ProductLoanInfoDTO;
  updatedAt?: number;
  attributes?: ProductAttributeDTO[];
  variants?: ProductVariantDTO[];
  attributeRules?: AttributeRuleDTO[];
}

