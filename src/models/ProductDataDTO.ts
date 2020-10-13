import { IdReferenceDTO } from './IdReferenceDTO';
import { LocalizedString } from './LocalizedString';
import { ContentDTO } from './ContentDTO';
import { AssetDTO } from './AssetDTO';
import { ProductVariantDTO } from './ProductVariantDTO';

export interface ProductDataDTO {
  taxCategory: IdReferenceDTO;
  name: LocalizedString;
  description: LocalizedString;
  weight: number;
  contents: ContentDTO[];
  categories?: IdReferenceDTO[];
  masterCategoriesPath?: IdReferenceDTO[];
  brands?: IdReferenceDTO[];
  collections?: IdReferenceDTO[];
  assets?: AssetDTO[];
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  masterVariantId?: string;
  variants?: ProductVariantDTO[];
  metadata?: object;
  custom?: object;
}

