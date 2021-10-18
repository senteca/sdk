import { ProductOfferSetOfferDTO } from './ProductOfferSetOfferDTO';

export interface ProductOfferSetVariantDTO {
  sku: string;
  offers?: ProductOfferSetOfferDTO[];
}

