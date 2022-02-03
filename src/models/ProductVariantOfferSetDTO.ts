import { ProductOfferSetOfferDTO } from './ProductOfferSetOfferDTO';

export interface ProductVariantOfferSetDTO {
  sku: string;
  offers?: ProductOfferSetOfferDTO[];
}

