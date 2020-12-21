import { KeyReferenceDTO } from './KeyReferenceDTO';
import { StoreStatusDTO } from './StoreStatusDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';
import { ProductAttributeDraftDTO } from './ProductAttributeDraftDTO';
import { IdReferenceDTO } from './IdReferenceDTO';
import { AssetDTO } from './AssetDTO';
import { CustomField } from './CustomField';
import { ProductVariantDraftDTO } from './ProductVariantDraftDTO';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';

export interface ProductDraftDTO {
  version?: number;
  type: KeyReferenceDTO;
  externalId?: string;
  storeStatus?: StoreStatusDTO[];
  taxCategory: KeyReferenceDTO;
  name: LangValue[];
  description?: LangValue[];
  content?: ContentDTO[];
  collapseKey?: string;
  collapseMode?: ProductDraftDTOCollapseModeEnum;
  attributes?: ProductAttributeDraftDTO[];
  categories?: IdReferenceDTO[];
  brands?: IdReferenceDTO[];
  collections?: IdReferenceDTO[];
  assets?: AssetDTO[];
  custom?: CustomField[];
  masterVariantId?: string;
  variants?: ProductVariantDraftDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  score?: number;
  reviewRatingStatistics?: ReviewRatingStatisticsDTO;
}

export enum ProductDraftDTOCollapseModeEnum {
    None = 'none',  
    Id = 'id',  
    Color = 'color',  
}
