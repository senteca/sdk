import { IdReferenceDTO } from './IdReferenceDTO';
import { LocalizedString } from './LocalizedString';
import { ContentDTO } from './ContentDTO';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';
import { AssetDTO } from './AssetDTO';
import { ProductVariantDraftDTO } from './ProductVariantDraftDTO';

export interface ProductDraftDTO {
  version?: number;
  taxCategory: IdReferenceDTO;
  name: LocalizedString;
  description: LocalizedString;
  weight: number;
  contents: ContentDTO[];
  categories?: IdReferenceDTO[];
  masterCategoriesPath?: IdReferenceDTO[];
  brands?: IdReferenceDTO[];
  collections?: IdReferenceDTO[];
  status: ProductDraftDTOStatusEnum;
  reviewRatingStatistics?: ReviewRatingStatisticsDTO;
  assets?: AssetDTO[];
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  masterVariantId?: string;
  variants?: ProductVariantDraftDTO[];
  metadata?: object;
  custom?: object;
  externalId?: string;
}

export enum ProductDraftDTOStatusEnum {
    Published = 'published',  
    Unpublished = 'unpublished',  
    Delisted = 'delisted',  
}
