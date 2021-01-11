import { LangValue } from './LangValue';
import { BrandResultDTO } from './BrandResultDTO';
import { ImageDTO } from './ImageDTO';
import { OfferDTO } from './OfferDTO';
import { ReviewRatingStatisticsDTO } from './ReviewRatingStatisticsDTO';
import { CustomField } from './CustomField';

export interface SearchResultDTO {
  _id: string;
  variantId: string;
  sku: string;
  slug: LangValue[];
  name: LangValue[];
  brands: BrandResultDTO[];
  images: ImageDTO[];
  offers: OfferDTO[];
  offer?: OfferDTO;
  availableQuantity: number;
  reviewRatingStatistics: ReviewRatingStatisticsDTO;
  variantsCount: number;
  custom: CustomField[];
}

