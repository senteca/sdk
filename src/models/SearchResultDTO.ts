import { LangValue } from './LangValue';
import { LinkResultDTO } from './LinkResultDTO';
import { ImageDTO } from './ImageDTO';
import { OfferDTO } from './OfferDTO';
import { InventorySnapshotDTO } from './InventorySnapshotDTO';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';
import { CustomField } from './CustomField';
import { ProductVariantLabelDTO } from './ProductVariantLabelDTO';

export interface SearchResultDTO {
  attributes?: any;
  variantAttributes?: any;
  _id: string;
  variantId: string;
  collapseKey: string;
  sku: string;
  slug: LangValue[];
  name: LangValue[];
  brands: LinkResultDTO[];
  categories: LinkResultDTO[];
  collections: LinkResultDTO[];
  images: ImageDTO[];
  offers: OfferDTO[];
  offer?: OfferDTO;
  inventorySnapshot: InventorySnapshotDTO;
  reviewRatingStatistics: ReviewRatingStatisticsDTO;
  variantsCount: number;
  variantOptions: number;
  custom: CustomField[];
  labels?: ProductVariantLabelDTO[];
  variants?: SearchResultDTO[];
}

