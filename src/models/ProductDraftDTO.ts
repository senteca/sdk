import { IdReferenceDTO } from './IdReferenceDTO';
import { LangValue } from './LangValue';
import { ContentDTO } from './ContentDTO';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';
import { AssetDTO } from './AssetDTO';
import { ProductVariantDraftDTO } from './ProductVariantDraftDTO';
import { CustomField } from './CustomField';

export interface ProductDraftDTO {
  version?: number;
  taxCategory: IdReferenceDTO;
  name: LangValue[];
  description: LangValue[];
  shortDescription: LangValue[];
  weight: number;
  contents: ContentDTO[];
  categories?: IdReferenceDTO[];
  masterCategoriesPath?: IdReferenceDTO[];
  brands?: IdReferenceDTO[];
  collections?: IdReferenceDTO[];
  status: ProductDraftDTOStatusEnum;
  reviewRatingStatistics?: ReviewRatingStatisticsDTO;
  assets?: AssetDTO[];
  slug: LangValue[];
  metaTitle?: LangValue[];
  metaDescription?: LangValue[];
  metaKeywords?: LangValue[];
  masterVariantId?: string;
  variants?: ProductVariantDraftDTO[];
  metadata?: any;
  custom?: CustomField[];
  externalId?: string;
}

export enum ProductDraftDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
