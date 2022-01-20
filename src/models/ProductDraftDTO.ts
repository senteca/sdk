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
import { ProductRelationsDTO } from './ProductRelationsDTO';
import { AddonDataDTO } from './AddonDataDTO';
import { ProductLoanInfoDTO } from './ProductLoanInfoDTO';
import { AttributeRuleDTO } from './AttributeRuleDTO';

export interface ProductDraftDTO {
  attributes?: ProductAttributeDraftDTO[];
  variants?: ProductVariantDraftDTO[];
  _id?: string;
  version?: number;
  type: KeyReferenceDTO;
  owner?: string;
  externalId?: string;
  storeStatus?: StoreStatusDTO[];
  state?: KeyReferenceDTO;
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
  reviewRatingStatistics?: ReviewRatingStatisticsDTO;
  relations?: ProductRelationsDTO;
  addonData?: AddonDataDTO[];
  loanInfo?: ProductLoanInfoDTO;
  attributeRules?: AttributeRuleDTO[];
}

