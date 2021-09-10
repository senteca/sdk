import { MoneyDTO } from './MoneyDTO';
import { OfferTierDTO } from './OfferTierDTO';
import { OfferDiscountDTO } from './OfferDiscountDTO';

export interface OfferDraftDTO {
  priceListKey?: string;
  merchantKey: string;
  validFrom?: number;
  validTo?: number;
  status: OfferDraftDTOStatusEnum;
  originalPrice: MoneyDTO;
  tiers: OfferTierDTO[];
  tier?: OfferTierDTO;
  externalDiscount?: OfferDiscountDTO;
  unit?: OfferDraftDTOUnitEnum;
  quantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  step?: number;
  sellUnit: OfferDraftDTOSellUnitEnum;
  conversionRate?: number;
}

export enum OfferDraftDTOStatusEnum {
    Active = 'active',  
    Inactive = 'inactive',  
    Paused = 'paused',  
}
export enum OfferDraftDTOUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
export enum OfferDraftDTOSellUnitEnum {
    G = 'g',  
    Kg = 'kg',  
    L = 'l',  
    Ml = 'ml',  
    Item = 'item',  
}
