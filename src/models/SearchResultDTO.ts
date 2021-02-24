import { LangValue } from './LangValue';
import { BrandResultDTO } from './BrandResultDTO';
import { ImageDTO } from './ImageDTO';
import { OfferDTO } from './OfferDTO';
import { InventorySnapshotDTO } from './InventorySnapshotDTO';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';
import { CustomField } from './CustomField';

export interface SearchResultDTO {
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
  custom: CustomField[];
}

