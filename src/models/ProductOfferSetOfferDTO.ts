import { MoneyDTO } from './MoneyDTO';
import { OfferTierDTO } from './OfferTierDTO';
import { OfferDiscountDTO } from './OfferDiscountDTO';

export interface ProductOfferSetOfferDTO {
  _id?: string;
  priceListKey?: string;
  merchantKey: string;
  validFrom?: number;
  validTo?: number;
  status: ProductOfferSetOfferDTOStatusEnum;
  originalPrice: MoneyDTO;
  tiers: OfferTierDTO[];
  tier?: OfferTierDTO;
  externalDiscount?: OfferDiscountDTO;
  unit?: ProductOfferSetOfferDTOUnitEnum;
  quantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  step?: number;
  sellUnit: ProductOfferSetOfferDTOSellUnitEnum;
  conversionRate?: number;
}

export enum ProductOfferSetOfferDTOStatusEnum {
    Active = 'active',  
    Inactive = 'inactive',  
    Paused = 'paused',  
}
export enum ProductOfferSetOfferDTOUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
export enum ProductOfferSetOfferDTOSellUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
