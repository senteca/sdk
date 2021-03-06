import { LangValue } from './LangValue';
import { BrandResultDTO } from './BrandResultDTO';
import { ImageDTO } from './ImageDTO';
import { OfferDTO } from './OfferDTO';
import { InventorySnapshotDTO } from './InventorySnapshotDTO';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';
import { CustomField } from './CustomField';
import { ProductVariantLabelDTO } from './ProductVariantLabelDTO';

export interface SearchResultDTO {
  attributes?: any;
  _id: string;
  variantId: string;
  collapseKey: string;
  sku: string;
  slug: LangValue[];
  name: LangValue[];
  brands: BrandResultDTO[];
  images: ImageDTO[];
  offers: OfferDTO[];
  offer?: OfferDTO;
  inventorySnapshot: InventorySnapshotDTO;
  reviewRatingStatistics: ReviewRatingStatisticsDTO;
  variantsCount: number;
  variantOptions: number;
  custom: CustomField[];
  labels?: ProductVariantLabelDTO[];
}

