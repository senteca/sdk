import { MoneyDTO } from './MoneyDTO';
import { OfferDiscountDTO } from './OfferDiscountDTO';
import { OfferTierDTO } from './OfferTierDTO';

export interface OfferDTO {
  _id: string;
  price?: MoneyDTO;
  discountedPrice?: MoneyDTO;
  discount?: OfferDiscountDTO;
  discounts?: OfferDiscountDTO[];
  priceListKey?: string;
  merchantKey: string;
  validFrom?: number;
  validTo?: number;
  status: OfferDTOStatusEnum;
  originalPrice: MoneyDTO;
  tiers: OfferTierDTO[];
  externalDiscount?: OfferDiscountDTO;
  unit?: OfferDTOUnitEnum;
  quantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  step?: number;
  sellUnit: OfferDTOSellUnitEnum;
  conversionRate?: number;
}

export enum OfferDTOStatusEnum {
    Active = 'active',  
    Inactive = 'inactive',  
    Paused = 'paused',  
}
export enum OfferDTOUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
export enum OfferDTOSellUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
